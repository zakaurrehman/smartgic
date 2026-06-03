import { Crown, Check, ArrowRight } from 'lucide-react';
import { goldenVisaPoints } from '@/lib/data';
import Reveal from '../ui/Reveal';

export default function GoldenVisa() {
  return (
    <section id="golden-visa" className="section bg-slate-50/70">
      <div className="container-x">
        <div className="relative overflow-hidden rounded-3xl bg-brand-navy px-7 py-12 sm:px-12 lg:px-16 lg:py-16">
          {/* decorative */}
          <div className="pointer-events-none absolute inset-0">
            <div className="aurora right-[-5%] top-[-20%] h-80 w-80 bg-brand-blue/40" />
            <div className="aurora bottom-[-30%] left-[-5%] h-72 w-72 bg-brand-cyan/30" />
            <div className="absolute inset-0 dot-pattern opacity-40" />
          </div>

          <div className="relative grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <Reveal>
                <span className="inline-flex items-center gap-2 rounded-full border border-amber-300/30 bg-amber-300/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-amber-300">
                  <Crown className="h-3.5 w-3.5" /> Long-term residency
                </span>
              </Reveal>
              <Reveal delay={80}>
                <h2 className="mt-5 text-3xl font-extrabold leading-tight !text-white sm:text-4xl">
                  Secure your{' '}
                  <span className="bg-gradient-to-r from-amber-300 to-amber-100 bg-clip-text text-transparent">
                    10-year UAE Golden Visa
                  </span>
                </h2>
              </Reveal>
              <Reveal delay={140}>
                <p className="mt-5 max-w-lg text-base leading-relaxed text-slate-300">
                  Whether you're an investor, entrepreneur, skilled professional or exceptional
                  talent, our specialists assess your eligibility and manage the full application —
                  so you and your family can call the UAE home for the next decade.
                </p>
              </Reveal>
              <Reveal delay={200}>
                <a href="#contact" className="btn-gradient group mt-8">
                  Check my eligibility
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Reveal>
            </div>

            <Reveal delay={120}>
              <div className="grid gap-4 sm:grid-cols-2">
                {goldenVisaPoints.map((point) => (
                  <div
                    key={point}
                    className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.05] p-5 backdrop-blur"
                  >
                    <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-brand-gradient">
                      <Check className="h-4 w-4 text-white" />
                    </span>
                    <p className="text-sm font-medium text-slate-100">{point}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
