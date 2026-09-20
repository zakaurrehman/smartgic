import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Calculator, Compass, Home, Phone } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/ui/WhatsAppButton';
import { company } from '@/lib/data';

export const metadata: Metadata = {
  title: { absolute: 'Page not found | Smartgic Visa' },
  description: 'The page you were looking for does not exist. Here is where to go instead.',
  robots: { index: false, follow: true },
};

const routes = [
  {
    href: '/services',
    icon: Compass,
    label: 'Corporate services',
    desc: 'Company formation, visas, PRO, banking and more',
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
      <Header />
      <main id="main">
        <section className="relative overflow-hidden bg-brand-navy pt-[72px] text-white">
          <div className="pointer-events-none absolute inset-0">
            <div className="aurora left-[-10%] top-[-10%] h-[360px] w-[360px] bg-brand-cyan/40" />
            <div className="aurora right-[-8%] top-[0%] h-[440px] w-[440px] bg-brand-blue/50" />
            <div className="absolute inset-0 grid-pattern opacity-[0.5]" />
          </div>

          <div className="container-x relative pb-20 pt-16 text-center lg:pb-24 lg:pt-20">
            <p className="text-6xl font-extrabold tracking-tight text-brand-cyan sm:text-7xl">404</p>
            <h1 className="mx-auto mt-6 max-w-2xl text-balance text-3xl font-extrabold leading-[1.1] tracking-tight !text-white sm:text-4xl">
              We can&rsquo;t find that page
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-slate-300">
              The link may be out of date, or the page may have moved. Nothing is lost — here are the
              places most people are heading.
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link href="/" className="btn-gradient group w-full sm:w-auto">
                Back to home
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <a href={`tel:${company.phoneHref}`} className="btn-white w-full sm:w-auto">
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
                    className="group flex items-start gap-4 rounded-2xl border border-slate-100 bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-brand-blue/20 hover:shadow-soft"
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
      <Footer />
      <WhatsAppButton />
    </>
  );
}
