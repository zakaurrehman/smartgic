import { ArrowRight, Check } from 'lucide-react';
import type { ServicePackage } from '@/lib/services';
import { cn } from '@/lib/cn';
import SectionHeading from '../ui/SectionHeading';
import Reveal from '../ui/Reveal';
import Aurora from '../ui/Aurora';

/**
 * Package cards. Figures are only shown where the owner has confirmed them;
 * packages priced "On request" show their scope and a quote prompt instead.
 */
export function PackageCards({ packages, ctaHref = '#contact' }: { packages: ServicePackage[]; ctaHref?: string }) {
  return (
    <div className="grid items-stretch gap-5 lg:grid-cols-3">
      {packages.map((pkg, i) => {
        const quoted = pkg.price.toLowerCase() === 'on request';
        return (
          <Reveal key={pkg.name} delay={i * 90} className="h-full">
            <div
              className={cn(
                'relative flex h-full flex-col rounded-[1.75rem] p-8 transition-transform duration-500 ease-premium',
                pkg.featured
                  ? 'surface-navy on-dark border-beam shadow-float lg:-translate-y-3'
                  : 'card card-hover',
              )}
            >
              {pkg.featured && <Aurora intensity="subtle" grid={false} />}
              <div className="relative z-[2] flex items-center justify-between gap-3">
                <h3 className={cn('text-xl font-semibold', pkg.featured ? 'text-white' : 'text-ink-900')}>{pkg.name}</h3>
                <span
                  className={cn(
                    'rounded-full px-3 py-1 font-mono text-[0.65rem] uppercase tracking-[0.12em]',
                    pkg.featured ? 'bg-brand-cyan/15 text-brand-cyan' : 'bg-surface-2 text-teal',
                  )}
                >
                  {pkg.badge}
                </span>
              </div>

              <div className="relative z-[2] mt-6">
                <p className={cn('text-xs', pkg.featured ? 'text-slate-400' : 'text-ink-400')}>
                  {quoted ? 'Pricing' : pkg.period}
                </p>
                <p
                  className={cn(
                    'mt-1 font-semibold tracking-tight',
                    quoted ? 'text-2xl' : 'text-[2.4rem] leading-none',
                    pkg.featured ? 'text-white' : 'text-ink-900',
                  )}
                >
                  {quoted ? 'Tailored quote' : pkg.price}
                </p>
                {quoted && (
                  <p className={cn('mt-1.5 text-xs', pkg.featured ? 'text-slate-400' : 'text-ink-400')}>{pkg.period}</p>
                )}
              </div>

              <ul className={cn('relative z-[2] mt-7 flex-1 space-y-3 border-t pt-7', pkg.featured ? 'border-white/10' : 'border-slate-100')}>
                {pkg.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <span
                      className={cn(
                        'mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full',
                        pkg.featured ? 'bg-brand-cyan/15' : 'bg-teal/10',
                      )}
                    >
                      <Check className={cn('h-3 w-3', pkg.featured ? 'text-brand-cyan' : 'text-teal')} aria-hidden="true" />
                    </span>
                    <span className={pkg.featured ? 'text-slate-200' : 'text-ink-600'}>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href={ctaHref}
                className={cn('relative z-[2] mt-8 w-full', pkg.featured ? 'btn-primary btn-sheen' : 'btn-ghost')}
              >
                {quoted ? 'Request a quote' : 'Get this package'}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}

export default function ServicePackages({ packages }: { packages: ServicePackage[] }) {
  const allQuoted = packages.every((p) => p.price.toLowerCase() === 'on request');
  return (
    <section id="pricing" className="section scroll-mt-40 bg-white">
      <div className="container-x">
        <SectionHeading
          eyebrow={allQuoted ? 'Packages' : 'Transparent pricing'}
          title={
            allQuoted ? (
              <>
                Choose the <span className="accent">right scope</span>
              </>
            ) : (
              <>
                Packages &amp; <span className="accent">starting prices</span>
              </>
            )
          }
          description={
            allQuoted
              ? 'Every engagement is quoted on its scope. Tell us what you need and we will send an itemised quote.'
              : 'Starting prices for our service. Your final quote depends on your exact requirements, and government fees are always itemised separately.'
          }
        />
        <div className="mt-14">
          <PackageCards packages={packages} />
        </div>
        {!allQuoted && (
          <Reveal delay={120}>
            <p className="mt-8 text-center text-sm text-ink-400">
              Prices are indicative starting points for our service fee and exclude government and authority fees.
            </p>
          </Reveal>
        )}
      </div>
    </section>
  );
}
