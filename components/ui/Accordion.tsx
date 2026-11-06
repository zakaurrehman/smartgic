'use client';

import { useId, useState } from 'react';
import { Plus } from 'lucide-react';
import { cn } from '@/lib/cn';
import Reveal from './Reveal';

export type AccordionItem = { q: string; a: string };

/**
 * FAQ accordion with button/region semantics, used site-wide so behaviour and
 * markup stay identical. Panels animate with grid-template-rows, so content
 * height is never hard-coded.
 */
export default function Accordion({
  items,
  defaultOpen = 0,
  dark = false,
}: {
  items: AccordionItem[];
  /** Index to expand on load, or null for all collapsed. */
  defaultOpen?: number | null;
  dark?: boolean;
}) {
  const [open, setOpen] = useState<number | null>(defaultOpen);
  const baseId = useId();

  return (
    <div className={cn('divide-y border-y', dark ? 'divide-white/10 border-white/10' : 'divide-slate-200/80 border-slate-200/80')}>
      {items.map((item, i) => {
        const isOpen = open === i;
        const panelId = `${baseId}-panel-${i}`;
        const buttonId = `${baseId}-button-${i}`;
        return (
          <Reveal key={item.q} delay={Math.min(i, 6) * 40}>
            <h3>
              <button
                type="button"
                id={buttonId}
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                aria-controls={panelId}
                className="group flex w-full items-start justify-between gap-6 py-6 text-left"
              >
                <span
                  className={cn(
                    'text-[1.02rem] font-medium leading-snug transition-colors sm:text-lg',
                    dark ? 'text-white' : 'text-ink-900',
                    !isOpen && (dark ? 'group-hover:text-brand-cyan' : 'group-hover:text-brand-blue'),
                  )}
                >
                  {item.q}
                </span>
                <span
                  aria-hidden="true"
                  className={cn(
                    'mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-full border transition-all duration-500 ease-premium',
                    isOpen
                      ? 'rotate-45 border-brand-blue bg-brand-blue text-white'
                      : dark
                        ? 'border-white/15 text-slate-300'
                        : 'border-slate-200 text-ink-700',
                  )}
                >
                  <Plus className="h-4 w-4" />
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className={cn(
                'grid transition-all duration-500 ease-premium',
                isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0',
              )}
            >
              <div className="overflow-hidden">
                <p className={cn('max-w-3xl pb-7 pr-12 text-[0.97rem] leading-[1.75]', dark ? 'text-slate-400' : 'text-ink-500')}>
                  {item.a}
                </p>
              </div>
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}
