import { Check } from 'lucide-react';
import type { ServiceScopeGroup } from '@/lib/services';
import Reveal from '../ui/Reveal';
import Aurora from '../ui/Aurora';
import Spotlight from '../ui/Spotlight';

/** "What's included": the concrete scope, grouped the way the work is run. */
export default function ServiceIncluded({ groups, label }: { groups: ServiceScopeGroup[]; label: string }) {
  return (
    <section id="included" className="section on-dark relative isolate scroll-mt-40 overflow-hidden bg-navy-900 text-slate-300">
      <Aurora intensity="subtle" />
      <div className="container-x relative">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <span className="eyebrow-dark">What’s included</span>
          </Reveal>
          <Reveal delay={70}>
            <h2 className="mt-5 text-display-lg font-semibold text-white">
              Everything covered in <span className="accent">{label}</span>
            </h2>
          </Reveal>
          <Reveal delay={130}>
            <p className="lead mt-5">The concrete scope our team delivers, grouped the way we actually run your file.</p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {groups.map((g, i) => (
            <Reveal key={g.group} delay={i * 90} className="h-full">
              <Spotlight dark className="glass-dark border-gradient flex h-full flex-col rounded-3xl p-7">
                <span className="font-mono text-xs text-brand-cyan">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="mt-3 text-lg font-semibold text-white">{g.group}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{g.desc}</p>
                <ul className="mt-6 flex-1 space-y-3 border-t border-white/10 pt-6">
                  {g.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-slate-200">
                      <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-brand-cyan/15">
                        <Check className="h-3 w-3 text-brand-cyan" aria-hidden="true" />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </Spotlight>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
