import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Calculator, Compass, Home, Phone } from 'lucide-react';
import { company } from '@/lib/data';
import Aurora from '@/components/ui/Aurora';

export const metadata: Metadata = {
  title: { absolute: 'Page not found | Smartgic Visa' },
  description: 'The page you were looking for does not exist. Here is where to go instead.',
  robots: { index: false, follow: true },
};

const routes = [
  {
    href: '/services',
    icon: Compass,
    label: 'All services',
    desc: 'Setup, visas, PRO, tax, accounting, audit and more',
  },
  {
    href: '/free-zones',
    icon: Home,
    label: 'Compare jurisdictions',
    desc: 'Every UAE free zone, mainland and offshore option',
  },
  {
    href: '/cost-estimator',
    icon: Calculator,
    label: 'Cost estimator',
    desc: 'Find your jurisdiction and indicative cost',
  },
  {
    href: '/contact',
    icon: Phone,
    label: 'Talk to an advisor',
    desc: 'Free consultation, no obligation',
  },
];

export default function NotFound() {
  return (
    <>
      <main id="main">
        <section className="on-dark relative isolate overflow-hidden bg-navy-900 pt-[calc(var(--header-h)+1rem)] text-slate-300">
          <Aurora />

          <div className="container-x relative pb-20 pt-16 text-center lg:pb-24 lg:pt-20">
            <p className="font-mono text-sm uppercase tracking-[0.3em] text-brand-cyan">Error 404</p>
            <h1 className="mx-auto mt-6 max-w-2xl text-display-xl font-semibold text-white">
              We can&rsquo;t find <span className="accent">that page</span>
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-slate-300">
              The link may be out of date, or the page may have moved. Nothing is lost — here are the
              places most people are heading.
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link href="/" className="btn-primary btn-sheen group w-full sm:w-auto">
                Back to home
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <a href={`tel:${company.phoneHref}`} className="btn-glass w-full sm:w-auto">
                <Phone className="h-4 w-4" /> {company.phone}
              </a>
            </div>
          </div>
        </section>

        <section className="section bg-white">
          <div className="container-x">
            <div className="mx-auto grid max-w-4xl gap-5 sm:grid-cols-2">
              {routes.map((r) => {
                const Icon = r.icon;
                return (
                  <Link
                    key={r.href}
                    href={r.href}
                    className="group card card-hover flex items-start gap-4 p-6"
                  >
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-brand-gradient-soft text-brand-blue transition-colors duration-300 group-hover:bg-brand-gradient group-hover:text-white">
                      <Icon className="h-5.5 w-5.5" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-base font-bold text-ink-900 group-hover:text-brand-blue">
                        {r.label}
                      </span>
                      <span className="mt-1 block text-sm leading-relaxed text-ink-500">
                        {r.desc}
                      </span>
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
