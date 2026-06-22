'use client';

import { useState } from 'react';
import { Plus } from 'lucide-react';
import type { ServiceFaq as Faq } from '@/lib/services';
import SectionHeading from '../ui/SectionHeading';
import Reveal from '../ui/Reveal';

export default function ServiceFaq({ faqs, label }: { faqs: Faq[]; label: string }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="section bg-white">
      <div className="container-x">
        <SectionHeading
          eyebrow="Good to know"
          title={
            <>
              {label} <span className="gradient-text">FAQs</span>
            </>
          }
          description="Answers to the questions clients ask most. Still unsure? Our advisors reply within the hour."
        />

        <div className="mx-auto mt-12 max-w-3xl space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={faq.q} delay={i * 50}>
                <div
                  className={`overflow-hidden rounded-2xl border transition-colors duration-300 ${
                    isOpen ? 'border-brand-blue/30 bg-slate-50/70' : 'border-slate-100 bg-white'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="text-base font-semibold text-ink-900">{faq.q}</span>
                    <span
                      className={`grid h-8 w-8 shrink-0 place-items-center rounded-full transition-all duration-300 ${
                        isOpen ? 'rotate-45 bg-brand-gradient text-white' : 'bg-slate-100 text-ink-700'
                      }`}
                    >
                      <Plus className="h-4 w-4" />
                    </span>
                  </button>
                  <div
                    className={`grid transition-all duration-300 ease-out ${
                      isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pb-6 text-sm leading-relaxed text-ink-500">{faq.a}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
