'use client';

import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/cn';

/**
 * Muted, looping background video with a poster.
 *
 * The poster is a normal server-rendered <img> (passed as `poster`), so it is
 * the element that paints first. The video is only attached after the page has
 * loaded and only when it can play without cost to the visitor: never on
 * phones (the poster is the mobile alternative), with reduced motion or
 * Save-Data; tablets get the lighter file. It pauses whenever it is off-screen
 * or the tab is hidden.
 */
export default function VideoBackground({
  sources,
  mobileSources,
  poster,
  className,
  videoClassName,
}: {
  sources: { src: string; type: string }[];
  mobileSources?: { src: string; type: string }[];
  /** The server-rendered still that shows before (or instead of) the video. */
  poster: React.ReactNode;
  className?: string;
  videoClassName?: string;
}) {
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [chosen, setChosen] = useState<{ src: string; type: string }[] | null>(null);
  const [playing, setPlaying] = useState(false);

  // Decide whether, and which, video to load — after the page has loaded.
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const conn = (navigator as Navigator & { connection?: { saveData?: boolean; effectiveType?: string } })
      .connection;
    if (reduce || conn?.saveData || conn?.effectiveType === '2g' || conn?.effectiveType === 'slow-2g') return;

    const pick = () => {
      const w = window.innerWidth;
      // Phones keep the poster: the video would sit behind a heavy wash, cost
      // around a megabyte and become a late largest-paint. Tablets get the
      // lighter file, wide screens the full one.
      if (w < 768) return;
      setChosen(w < 1280 && mobileSources?.length ? mobileSources : sources);
    };

    if (document.readyState === 'complete') {
      const id = window.setTimeout(pick, 400);
      return () => window.clearTimeout(id);
    }
    const onLoad = () => window.setTimeout(pick, 400);
    window.addEventListener('load', onLoad, { once: true });
    return () => window.removeEventListener('load', onLoad);
  }, [sources, mobileSources]);

  // Play only while visible.
  useEffect(() => {
    const video = videoRef.current;
    const wrap = wrapRef.current;
    if (!chosen || !video || !wrap) return;

    const tryPlay = () => {
      video.play().catch(() => {
        /* Autoplay refused (e.g. low-power mode): the poster stays. */
      });
    };
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && document.visibilityState === 'visible') tryPlay();
      else video.pause();
    });
    observer.observe(wrap);
    const onVisibility = () => {
      if (document.visibilityState !== 'visible') video.pause();
    };
    document.addEventListener('visibilitychange', onVisibility);
    return () => {
      observer.disconnect();
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, [chosen]);

  return (
    <div ref={wrapRef} className={cn('absolute inset-0 overflow-hidden', className)} aria-hidden="true">
      {poster}
      {chosen && (
        <video
          ref={videoRef}
          muted
          loop
          playsInline
          preload="auto"
          disablePictureInPicture
          onPlaying={() => setPlaying(true)}
          className={cn(
            'absolute inset-0 h-full w-full object-cover transition-opacity duration-1000',
            playing ? 'opacity-100' : 'opacity-0',
            videoClassName,
          )}
        >
          {chosen.map((s) => (
            <source key={s.src} src={s.src} type={s.type} />
          ))}
        </video>
      )}
    </div>
  );
}
