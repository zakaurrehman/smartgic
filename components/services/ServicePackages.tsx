import { Check, ArrowRight } from 'lucide-react';
import type { ServicePackage } from '@/lib/services';
import SectionHeading from '../ui/SectionHeading';
import Reveal from '../ui/Reveal';

export default function ServicePackages({ packages }: { packages: ServicePackage[] }) {
  return (
    <section id="pricing" className="section bg-slate-50/70">
      <div className="container-x">
        <SectionHeading
          eyebrow="Transparent pricing"
          title={
            <>
              Packages &amp; <span className="gradient-text">indicative pricing</span>
            </>
          }
          description="Clear starting prices. Your final, all-inclusive quote depends on your exact requirements — and government fees are always itemised separately."
        />

        <div className="mt-14 grid items-stretch gap-6 lg:grid-cols-3">
          {packages.map((pkg, i) => (
            <Reveal key={pkg.name} delay={i * 100} className="h-full">
              <div
                className={`relative flex h-full flex-col rounded-3xl p-8 transition-all duration-300 ${
                  pkg.featured
                    ? 'bg-brand-navy text-white shadow-glow lg:-translate-y-3'
                    : 'border border-slate-100 bg-white text-ink-700 shadow-card hover:-translate-y-1 hover:shadow-soft'
                }`}
              >
                {pkg.featured && (
                  <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-3xl">
                    <div className="aurora right-[-20%] top-[-30%] h-64 w-64 bg-brand-blue/40" />
                    <div className="aurora bottom-[-30%] left-[-10%] h-56 w-56 bg-brand-cyan/30" />
                  </div>
                )}

                <div className="relative flex items-center justify-between">
                  <h3 className={`text-xl font-bold ${pkg.featured ? '!text-white' : 'text-ink-900'}`}>
                    {pkg.name}
                  </h3>
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${
                      pkg.featured ? 'bg-brand-gradient text-white' : 'bg-brand-cyan/10 text-brand-cyan-dark'
                    }`}
                  >
                    {pkg.badge}
                  </span>
                </div>

                <div className="relative mt-5 flex items-end gap-2">
                  <span className={`text-3xl font-extrabold tracking-tight ${pkg.featured ? '!text-white' : 'text-ink-900'}`}>
                    {pkg.price}
                  </span>
                  <span className={`mb-1 text-xs ${pkg.featured ? 'text-slate-400' : 'text-ink-400'}`}>
                    {pkg.period}
                  </span>
                </div>

                <ul className="relative mt-6 flex-1 space-y-3">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm">
                      <span
                        className={`mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full ${
                          pkg.featured ? 'bg-brand-gradient' : 'bg-brand-cyan/15'
                        }`}
                      >
                        <Check className={`h-3 w-3 ${pkg.featured ? 'text-white' : 'text-brand-cyan-dark'}`} />
                      </span>
                      <span className={pkg.featured ? 'text-slate-200' : 'text-ink-700'}>{feature}</span>
                    </li>
                  ))}
                </ul>

                <a href="#contact" className={`relative mt-8 ${pkg.featured ? 'btn-gradient' : 'btn-ghost'} group w-full`}>
                  Get this package
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <p className="mt-8 text-center text-sm text-ink-400">
            * Subject to fair-use and scope. Prices are indicative and exclusive of certain government fees.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
