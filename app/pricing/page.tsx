import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { DEFAULT_SHARE_IMAGE } from '@/lib/seo';
import { siteImages } from '@/lib/site-images';
import { faqs, packages } from '@/lib/data';
import PageHero from '@/components/ui/PageHero';
import SectionHeading from '@/components/ui/SectionHeading';
import Reveal from '@/components/ui/Reveal';
import { PackageCards } from '@/components/services/ServicePackages';
import PricingTransparency from '@/components/sections/PricingTransparency';
import ServiceFaq from '@/components/services/ServiceFaq';
import Contact from '@/components/sections/Contact';

const SITE = 'https://www.smartgicvisa.com';
const url = `${SITE}/pricing`;
const title = 'Business Setup Pricing & Packages in Dubai | Smartgic Visa';
const description =
  'Business setup packages in Dubai with clear starting prices — Free Zone, Premium Free Zone and Mainland. Our fee and government fees itemised separately. Get a tailored quote.';

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  keywords: ['business setup cost Dubai', 'company formation price UAE', 'free zone package Dubai', 'mainland licence cost Dubai', 'Smartgic pricing'],
  alternates: { canonical: url },
  openGraph: { type: 'website', locale: 'en_AE', url, siteName: 'Smartgic Visa', title, description, images: [DEFAULT_SHARE_IMAGE] },
  twitter: { card: 'summary_large_image', title, description, images: [DEFAULT_SHARE_IMAGE] },
};

/** Quote-driven services: scope varies too much for a starting price. */
const quoted = [
  { label: 'PRO retainers', href: '/services/corporate-pro-services' },
  { label: 'Corporate tax & VAT', href: '/services/tax-services' },
  { label: 'Accounting & payroll', href: '/services/accounting-bookkeeping' },
  { label: 'Audit & assurance', href: '/services/audit-assurance' },
  { label: 'Visas & Golden Visa', href: '/services/visa-immigration' },
  { label: 'Office & co-working', href: '/services/co-working-space' },
];

const feeFaqs = faqs.filter((f) => /fee|cost|included|long/i.test(f.q));

export default function PricingPage() {
  return (
    <>
      <main id="main">
        <PageHero
          image={siteImages.museumOfTheFutureDubai}
          eyebrow="Transparent pricing"
          title={
            <>
              Setup packages, <span className="accent">clearly priced</span>
            </>
          }
          subtitle="Starting prices for our most requested setups. Your written quote itemises our fee and every government fee separately — before you commit to anything."
          crumbs={[{ label: 'Home', href: '/' }, { label: 'Pricing' }]}
        />

        <section className="section-lg bg-white">
          <div className="container-wide">
            <SectionHeading
              eyebrow="Company formation"
              title={
                <>
                  Three ways to <span className="accent">get licensed</span>
                </>
              }
              description="Each price is the starting point for our service fee. The final figure depends on your activity, visas and workspace."
            />
            <div className="mt-14">
              <PackageCards packages={packages} />
            </div>
            <Reveal delay={120}>
              <p className="mt-8 text-center text-sm text-ink-400">
                Prices exclude government and authority fees, which are passed through at cost and shown on their own lines.
              </p>
            </Reveal>
          </div>
        </section>

        <PricingTransparency />

        <section className="section bg-white">
          <div className="container-x">
            <SectionHeading
              eyebrow="Everything else"
              title={
                <>
                  Other services, <span className="accent">quoted on scope</span>
                </>
              }
              description="Tax, accounting, audit, PRO and visa work vary too much from one business to the next for a fair starting price. Tell us what you need and we will send an itemised quote."
            />
            <div className="mt-12 flex flex-wrap justify-center gap-2">
              {quoted.map((q) => (
                <Link key={q.href} href={q.href} className="chip transition-colors hover:border-brand-blue/40 hover:text-brand-blue">
                  {q.label}
                </Link>
              ))}
            </div>
            <div className="mt-10 flex justify-center">
              <a href="#contact" className="btn-primary btn-sheen">
                Request an itemised quote <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>

        <ServiceFaq faqs={feeFaqs.length ? feeFaqs : faqs} label="Pricing" eyebrow="Pricing questions" />
        <Contact source="Pricing page" defaultService="Company formation" />
      </main>
    </>
  );
}
