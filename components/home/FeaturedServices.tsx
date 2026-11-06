'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';
import type { StaticImageData } from 'next/image';

export type FeaturedItem = {
  href: string;
  label: string;
  eyebrow: string;
  blurb: string;
  image: { src: StaticImageData; alt: string; position?: string };
};

/**
 * Horizontal, scroll-snapping row of tall photo cards. Native scrolling (so it
 * works with touch, trackpad and keyboard), with previous/next buttons that
 * page by one card.
 */
export default function FeaturedServices({ items }: { items: FeaturedItem[] }) {
  const track = useRef<HTMLUListElement | null>(null);

  const page = (dir: 1 | -1) => {
    const el = track.current;
    if (!el) return;
    const card = el.querySelector('li');
    const step = card ? card.getBoundingClientRect().width + 16 : el.clientWidth * 0.8;
    el.scrollBy({ left: dir * step, behavior: 'smooth' });
  };

  return (
    <div>
      <div className="container-wide flex items-end justify-between gap-6">
        <div className="max-w-2xl">
          <span className="eyebrow">Most requested</span>
          <h2 className="mt-5 text-display-lg font-semibold text-ink-900">
            Where most clients <span className="accent">start</span>
          </h2>
        </div>
        <div className="hidden shrink-0 gap-2 sm:flex">
          <button type="button" onClick={() => page(-1)} className="grid h-12 w-12 place-items-center rounded-full border border-slate-200 bg-white text-ink-900 transition-colors hover:border-brand-blue/40 hover:text-brand-blue" aria-label="Previous services">
            <ArrowLeft className="h-5 w-5" aria-hidden="true" />
          </button>
          <button type="button" onClick={() => page(1)} className="grid h-12 w-12 place-items-center rounded-full border border-slate-200 bg-white text-ink-900 transition-colors hover:border-brand-blue/40 hover:text-brand-blue" aria-label="Next services">
            <ArrowRight className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>

      <ul
        ref={track}
        // scroll-padding matches the inline padding, so the first card's snap
        // position is 0 — otherwise the browser snaps the track on load, eating
        // the leading padding (and registering a scroll before first paint).
        className="no-scrollbar mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth px-4 pb-4 scroll-px-4 sm:px-6 sm:scroll-px-6 lg:px-[max(2rem,calc((100vw-1400px)/2+2rem))] lg:scroll-px-[max(2rem,calc((100vw-1400px)/2+2rem))]"
        aria-label="Featured services"
      >
        {items.map((item) => (
          <li key={item.href} className="w-[78%] shrink-0 snap-start sm:w-[46%] lg:w-[31%] xl:w-[23.5%]">
            <Link href={item.href} className="group relative flex aspect-[3/4] flex-col justify-end overflow-hidden rounded-[1.75rem] bg-navy-900 p-6 text-white">
              <Image
                src={item.image.src}
                alt=""
                fill
                sizes="(min-width: 1280px) 330px, (min-width: 1024px) 31vw, (min-width: 640px) 46vw, 78vw"
                className="object-cover transition-transform duration-[1200ms] ease-premium group-hover:scale-105"
                style={{ objectPosition: item.image.position ?? '50% 50%' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/45 to-transparent" />
              <div className="relative">
                <span className="font-mono text-[0.65rem] uppercase tracking-[0.16em] text-brand-cyan">{item.eyebrow}</span>
                <h3 className="mt-2 text-xl font-semibold text-white">{item.label}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">{item.blurb}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-white">
                  Learn more
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
