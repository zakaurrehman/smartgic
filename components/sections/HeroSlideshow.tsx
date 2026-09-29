'use client';

import Image from 'next/image';
import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useRef,
  useState,
  useSyncExternalStore,
  type CSSProperties,
  type ReactNode,
} from 'react';
import { Pause, Play } from 'lucide-react';
import type { SiteImage } from '@/lib/site-images';

/**
 * The homepage hero's rotating backdrop, in three parts that share one state:
 * <HeroSlideshow> wraps the hero, <HeroSlides> renders the photos inside its
 * decorative backdrop layer, and <HeroSlideControls> renders the pause button
 * and progress bars in the content layer, where they can take clicks.
 *
 * The rotation runs on a timer rather than on the progress bars' animation:
 * the site's reduced-motion stylesheet collapses every animation to ~0ms, which
 * would otherwise flick through the photos continuously.
 */

export type HeroSlide = {
  image: SiteImage;
  /** object-position in the two-column layout, lg and up. */
  position: string;
  /** object-position below lg, where the hero stacks into a tall, narrow frame. */
  stackedPosition: string;
};

type Show = { active: number; prev: number; cycle: number };
type Step = { type: 'go'; to: number } | { type: 'again' };

/** `cycle` changes on every step, restarting the timer and the progress bar. */
function step(show: Show, action: Step): Show {
  if (action.type === 'again') return { ...show, cycle: show.cycle + 1 };
  if (action.to === show.active) return show;
  return { active: action.to, prev: show.active, cycle: show.cycle + 1 };
}

/** The next photo after `from` that has finished loading, or -1. */
function nextLoaded(from: number, loaded: boolean[]) {
  for (let offset = 1; offset < loaded.length; offset++) {
    const i = (from + offset) % loaded.length;
    if (loaded[i]) return i;
  }
  return -1;
}

const reducedMotionQuery = '(prefers-reduced-motion: reduce)';
const subscribeReducedMotion = (onChange: () => void) => {
  const query = window.matchMedia(reducedMotionQuery);
  query.addEventListener('change', onChange);
  return () => query.removeEventListener('change', onChange);
};
const subscribeVisibility = (onChange: () => void) => {
  document.addEventListener('visibilitychange', onChange);
  return () => document.removeEventListener('visibilitychange', onChange);
};
const subscribeNothing = () => () => {};

type Slideshow = {
  slides: HeroSlide[];
  interval: number;
  show: Show;
  /** False during server render and hydration. */
  hydrated: boolean;
  paused: boolean;
  running: boolean;
  markLoaded: (index: number) => void;
  select: (index: number) => void;
  togglePaused: () => void;
  setInView: (inView: boolean) => void;
};

const SlideshowContext = createContext<Slideshow | null>(null);

function useSlideshow() {
  const slideshow = useContext(SlideshowContext);
  if (!slideshow) throw new Error('Hero slideshow parts must sit inside <HeroSlideshow>.');
  return slideshow;
}

export function HeroSlideshow({
  slides,
  interval = 3000,
  children,
}: {
  slides: HeroSlide[];
  /** How long each photo shows before the next fades in, in ms. */
  interval?: number;
  children: ReactNode;
}) {
  const [show, dispatch] = useReducer(step, { active: 0, prev: -1, cycle: 0 });
  // null until the visitor presses pause or play; until then reduced-motion
  // visitors start paused and everyone else starts playing.
  const [userPaused, setUserPaused] = useState<boolean | null>(null);
  const [inView, setInView] = useState(true);

  const hydrated = useSyncExternalStore(subscribeNothing, () => true, () => false);
  const reducedMotion = useSyncExternalStore(
    subscribeReducedMotion,
    () => window.matchMedia(reducedMotionQuery).matches,
    () => false,
  );
  const pageVisible = useSyncExternalStore(
    subscribeVisibility,
    () => document.visibilityState === 'visible',
    () => true,
  );

  // The first photo is preloaded and on screen from the start; the rest are
  // only stepped to once loaded.
  const loaded = useRef(slides.map((_, i) => i === 0));

  const paused = userPaused ?? reducedMotion;
  // Also idles while the hero is scrolled out of view or the tab is hidden.
  const running = hydrated && !paused && inView && pageVisible && slides.length > 1;

  // Time left on the current photo. Pausing keeps it, so resuming carries on
  // where the progress bar stopped instead of starting the photo over.
  const remaining = useRef(interval);
  useEffect(() => {
    remaining.current = interval;
  }, [show.cycle, interval]);

  // Declared after the reset above, so on a step React runs this effect's
  // cleanup, then the reset, then this effect again with the full interval.
  useEffect(() => {
    if (!running) return;
    const started = performance.now();
    const timer = window.setTimeout(() => {
      const next = nextLoaded(show.active, loaded.current);
      // Nothing else loaded yet: run the current photo's bar again.
      dispatch(next === -1 ? { type: 'again' } : { type: 'go', to: next });
    }, remaining.current);
    return () => {
      window.clearTimeout(timer);
      remaining.current -= performance.now() - started;
    };
  }, [running, show.active, show.cycle]);

  const value: Slideshow = {
    slides,
    interval,
    show,
    hydrated,
    paused,
    running,
    markLoaded: (index) => {
      loaded.current[index] = true;
    },
    select: (index) => dispatch({ type: 'go', to: index }),
    togglePaused: () => setUserPaused(!paused),
    setInView,
  };

  return <SlideshowContext.Provider value={value}>{children}</SlideshowContext.Provider>;
}

/** The photos, stacked and crossfading. Decorative, so alt="". */
export function HeroSlides() {
  const { slides, show, hydrated, markLoaded, setInView } = useSlideshow();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node || typeof IntersectionObserver === 'undefined') return;
    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting));
    observer.observe(node);
    return () => observer.disconnect();
  }, [setInView]);

  // `isolate` keeps the layers' z-indexes inside this box; without it the
  // active photo would stack above the washes and the hero's content.
  return (
    <div ref={ref} className="absolute inset-0 isolate">
      {slides.map((slide, i) => {
        // Only the first photo is in the server HTML; the others start loading
        // after hydration so they never compete with it for bandwidth.
        if (i > 0 && !hydrated) return null;

        // The incoming photo fades in over the outgoing one, which stays
        // opaque underneath, so the crossfade never dips to the navy behind.
        const layer =
          i === show.active ? 'z-20 opacity-100' : i === show.prev ? 'z-10 opacity-100' : 'z-0 opacity-0';

        return (
          <div
            key={slide.image.src.src}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${layer}`}
          >
            <Image
              src={slide.image.src}
              alt=""
              fill
              // The first photo is the page's largest paint: preloaded and
              // fetched ahead of everything else.
              preload={i === 0}
              fetchPriority={i === 0 ? 'high' : undefined}
              placeholder={i === 0 ? 'blur' : 'empty'}
              sizes="100vw"
              onLoad={() => markLoaded(i)}
              className="object-cover object-[var(--pos-stacked)] lg:object-[var(--pos)]"
              style={
                {
                  '--pos': slide.position,
                  '--pos-stacked': slide.stackedPosition,
                } as CSSProperties
              }
            />
          </div>
        );
      })}
    </div>
  );
}

/** Pause/play and one progress bar per photo; a bar jumps to its photo. */
export function HeroSlideControls({ className = '' }: { className?: string }) {
  const { slides, interval, show, hydrated, paused, running, select, togglePaused } =
    useSlideshow();
  if (slides.length < 2) return null;

  const focusRing =
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan/70 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-navy';

  return (
    <div role="group" aria-label="Background photos" className={`flex items-center gap-2 ${className}`}>
      <button
        type="button"
        onClick={togglePaused}
        aria-label={paused ? 'Play background photos' : 'Pause background photos'}
        className={`grid h-8 w-8 place-items-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur transition-colors hover:bg-white/20 ${focusRing}`}
      >
        {paused ? (
          <Play className="h-3 w-3 translate-x-px fill-current" aria-hidden="true" />
        ) : (
          <Pause className="h-3 w-3 fill-current" aria-hidden="true" />
        )}
      </button>

      <div className="flex items-center">
        {slides.map((slide, i) => {
          const active = i === show.active;
          return (
            <button
              key={slide.image.src.src}
              type="button"
              onClick={() => select(i)}
              aria-label={`Show photo ${i + 1} of ${slides.length}`}
              aria-current={active ? 'true' : undefined}
              className={`group flex h-8 items-center rounded-full px-1 ${focusRing}`}
            >
              <span
                className={`relative block h-1 overflow-hidden rounded-full transition-all duration-300 ${
                  active ? 'w-12 bg-white/30' : 'w-6 bg-white/25 group-hover:bg-white/45'
                }`}
              >
                {active && hydrated && (
                  <span
                    // Remounts on every step, restarting the fill; pausing
                    // freezes it in step with the timer.
                    key={show.cycle}
                    className="absolute inset-0 origin-left animate-slide-fill rounded-full bg-brand-cyan"
                    style={{
                      animationDuration: `${interval}ms`,
                      animationPlayState: running ? 'running' : 'paused',
                    }}
                  />
                )}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
