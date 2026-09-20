'use client';

import { useId, useState } from 'react';
import { Plus } from 'lucide-react';
import Reveal from './Reveal';

export type AccordionItem = { q: string; a: string };

/**
 * Shared FAQ accordion with proper button/region semantics.
 * Used by the homepage FAQ, service pages, jurisdiction pages and /contact
 * so accordion behaviour and markup stay identical site-wide.
 */
export default function Accordion({
  items,
  defaultOpen = 0,
}: {
  items: AccordionItem[];
  /** Index to expand on load, or null for all collapsed. */
  defaultOpen?: number | null;
}) {
  const [open, setOpen] = useState<number | null>(defaultOpen);
  const baseId = useId();

  return (
    <div className="space-y-3">
      {items.map((item, i) => {
        const isOpen = open === i;
        const panelId = `${baseId}-panel-${i}`;
        const buttonId = `${baseId}-button-${i}`;

        return (
          <Reveal key={item.q} delay={i * 50}>
            <div
              className={`overflow-hidden rounded-2xl border transition-colors duration-300 ${
                isOpen ? 'border-brand-blue/30 bg-slate-50/70' : 'border-slate-100 bg-white'
              }`}
            >
              <h3>
                <button
                  type="button"
                  id={buttonId}
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-brand-blue/40 sm:px-6"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                >
                  <span className="text-[0.95rem] font-semibold text-ink-900 sm:text-base">
                    {item.q}
                  </span>
                  <span
                    className={`grid h-8 w-8 shrink-0 place-items-center rounded-full transition-all duration-300 ${
                      isOpen ? 'rotate-45 bg-brand-gradient text-white' : 'bg-slate-100 text-ink-700'
                    }`}
                    aria-hidden="true"
                  >
                    <Plus className="h-4 w-4" />
                  </span>
                </button>
              </h3>
              <div
                id={panelId}
                role="region"
                aria-labelledby={buttonId}
                className={`grid transition-all duration-300 ease-out ${
                  isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                }`}
              >
                <div className="overflow-hidden">
                  <p className="px-5 pb-6 text-sm leading-relaxed text-ink-500 sm:px-6">{item.a}</p>
                </div>
              </div>
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}
