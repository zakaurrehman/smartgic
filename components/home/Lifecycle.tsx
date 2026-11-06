'use client';

import Link from 'next/link';
import { m, useReducedMotion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export type LifecycleStage = {
  step: string;
  title: string;
  desc: string;
  links: { label: string; href: string }[];
};

/**
 * A company's life in the UAE as six stages, each linking to the services
 * involved. The connecting line draws itself as the section scrolls into view.
 */
export default function Lifecycle({ stages }: { stages: LifecycleStage[] }) {
  const reduce = useReducedMotion();
  return (
    <div className="relative">
      {/* Track line (desktop): drawn left to right. */}
      <div className="absolute left-0 right-0 top-[1.375rem] hidden h-px bg-slate-200 lg:block" aria-hidden="true" />
      <m.div
        aria-hidden="true"
        className="absolute left-0 right-0 top-[1.375rem] hidden h-px origin-left bg-gradient-to-r from-brand-cyan via-brand-blue to-brand-blue lg:block"
        initial={reduce ? false : { scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: '-15% 0px' }}
        transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
      />
      <ol className="grid gap-8 sm:grid-cols-2 lg:grid-cols-6 lg:gap-5">
        {stages.map((s, i) => (
          <m.li
            key={s.title}
            className="relative"
            initial={reduce ? false : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10% 0px' }}
            transition={{ duration: 0.7, delay: reduce ? 0 : 0.15 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="relative z-10 grid h-11 w-11 place-items-center rounded-full bg-white font-mono text-sm text-brand-blue shadow-card ring-4 ring-white">
              {s.step}
            </span>
            <h3 className="mt-5 text-lg font-semibold text-ink-900">{s.title}</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-ink-500">{s.desc}</p>
            <ul className="mt-4 space-y-1.5">
              {s.links.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="group inline-flex items-center gap-1 text-sm font-medium text-ink-700 hover:text-brand-blue">
                    {l.label}
                    <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-opacity group-hover:opacity-100" aria-hidden="true" />
                  </Link>
                </li>
              ))}
            </ul>
          </m.li>
        ))}
      </ol>
    </div>
  );
}
