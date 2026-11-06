'use client';

import { useRef } from 'react';
import { m, useReducedMotion, useScroll, useSpring } from 'framer-motion';

export type TimelineStep = { title: string; desc: string };

/**
 * Vertical step list whose connecting line fills as the visitor scrolls
 * through it — the process reads as progress rather than a static list.
 */
export default function ProcessTimeline({ steps, dark = false }: { steps: TimelineStep[]; dark?: boolean }) {
  const ref = useRef<HTMLOListElement | null>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 70%', 'end 55%'] });
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.4 });

  return (
    <ol ref={ref} className="relative">
      <span
        aria-hidden="true"
        className={`absolute bottom-6 left-[1.375rem] top-6 w-px ${dark ? 'bg-white/10' : 'bg-slate-200'}`}
      />
      <m.span
        aria-hidden="true"
        className="absolute bottom-6 left-[1.375rem] top-6 w-px origin-top bg-gradient-to-b from-brand-cyan via-brand-blue to-brand-blue"
        style={reduce ? { scaleY: 1 } : { scaleY: progress }}
      />
      {steps.map((step, i) => (
        <li key={step.title} className="relative flex gap-6 pb-10 last:pb-0">
          <span
            className={`relative z-10 grid h-11 w-11 shrink-0 place-items-center rounded-full font-mono text-sm font-medium ring-4 ${
              dark ? 'bg-navy-800 text-brand-cyan ring-navy-900' : 'bg-white text-brand-blue shadow-card ring-white'
            }`}
          >
            {String(i + 1).padStart(2, '0')}
          </span>
          <div className="pt-1.5">
            <h3 className={`text-lg font-semibold ${dark ? 'text-white' : 'text-ink-900'}`}>{step.title}</h3>
            <p className={`mt-2 max-w-xl text-[0.95rem] leading-relaxed ${dark ? 'text-slate-400' : 'text-ink-500'}`}>{step.desc}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
