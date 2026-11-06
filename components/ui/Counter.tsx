'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * Counts up to `value` when it scrolls into view.
 *
 * The final number is what the server renders, so search engines, no-JS
 * visitors and anyone already looking at it see the real figure. Only a number
 * that starts below the fold is reset and animated as it arrives. Use it only
 * for figures that are true — every number on this site must be verifiable.
 */
export default function Counter({
  value,
  duration = 1400,
  prefix = '',
  suffix = '',
  className = '',
}: {
  value: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    const node = ref.current;
    if (!node || typeof IntersectionObserver === 'undefined') return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const rect = node.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) return; // already visible

    let raf = 0;
    const startFrame = requestAnimationFrame(() => setDisplay(0));
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        const start = performance.now();
        const tick = (now: number) => {
          const t = Math.min(1, (now - start) / duration);
          const eased = 1 - Math.pow(1 - t, 4);
          setDisplay(Math.round(value * eased));
          if (t < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.4 },
    );
    observer.observe(node);
    return () => {
      cancelAnimationFrame(startFrame);
      cancelAnimationFrame(raf);
      observer.disconnect();
    };
  }, [value, duration]);

  return (
    <span ref={ref} className={`tabular-nums ${className}`}>
      {prefix}
      {display.toLocaleString('en-US')}
      {suffix}
    </span>
  );
}
