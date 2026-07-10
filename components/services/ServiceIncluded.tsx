import { Check, Sparkles } from 'lucide-react';
import type { ServiceScopeGroup } from '@/lib/services';
import Reveal from '../ui/Reveal';

export default function ServiceIncluded({
  groups,
  label,
}: {
  groups: ServiceScopeGroup[];
  label: string;
}) {
  return (
    <section className="section relative overflow-hidden bg-brand-navy text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="aurora left-[-8%] top-[-20%] h-72 w-72 bg-brand-cyan/25" />
        <div className="aurora right-[-8%] bottom-[-25%] h-80 w-80 bg-brand-blue/30" />
        <div className="absolute inset-0 dot-pattern opacity-25" />
      </div>

      <div className="container-x relative">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-brand-cyan backdrop-blur">
              <Sparkles className="h-3.5 w-3.5" />
              What&apos;s included
            </span>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-5 text-balance text-3xl font-extrabold leading-tight !text-white sm:text-4xl">
              Everything covered under{' '}
              <span className="gradient-text">{label.toLowerCase()}</span>
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-4 text-base leading-relaxed text-slate-300">
              No vague promises — this is the concrete scope our team delivers, grouped the way we
              actually run your file.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {groups.map((g, i) => (
            <Reveal key={g.group} delay={i * 100}>
              <div className="flex h-full flex-col rounded-3xl border border-white/10 bg-white/[0.05] p-7 backdrop-blur">
                <span className="bg-brand-gradient bg-clip-text text-sm font-extrabold uppercase tracking-wider text-transparent">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-3 text-lg font-bold !text-white">{g.group}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">{g.desc}</p>
                <ul className="mt-5 flex-1 space-y-3 border-t border-white/10 pt-5">
                  {g.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-brand-gradient">
                        <Check className="h-3 w-3 text-white" />
                      </span>
                      <span className="text-sm text-slate-100">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
