import type { Metadata } from 'next';
import { DEFAULT_SHARE_IMAGE } from '@/lib/seo';
import { siteImages } from '@/lib/site-images';
import PageHero from '@/components/ui/PageHero';
import SectionHeading from '@/components/ui/SectionHeading';
import Reveal from '@/components/ui/Reveal';
import VatCalculator from '@/components/tools/VatCalculator';
import ServiceFaq from '@/components/services/ServiceFaq';
import RelatedServices from '@/components/services/RelatedServices';
import Contact from '@/components/sections/Contact';

const SITE = 'https://www.smartgicvisa.com';
const url = `${SITE}/vat-calculator`;
const title = 'UAE VAT Calculator — Add or Remove 5% VAT | Smartgic Visa';
const description =
  'Free UAE VAT calculator: add 5% VAT to a net amount or extract it from a VAT-inclusive total, with a plain-English guide to registration thresholds and returns.';

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  keywords: ['UAE VAT calculator', 'VAT calculator Dubai', '5% VAT calculator', 'remove VAT UAE', 'VAT inclusive calculator'],
  alternates: { canonical: url },
  openGraph: { type: 'website', locale: 'en_AE', url, siteName: 'Smartgic Visa', title, description, images: [DEFAULT_SHARE_IMAGE] },
  twitter: { card: 'summary_large_image', title, description, images: [DEFAULT_SHARE_IMAGE] },
};

const rules = [
  { value: '5%', label: 'Standard VAT rate' },
  { value: 'AED 375,000', label: 'Mandatory registration threshold' },
  { value: 'AED 187,500', label: 'Voluntary registration threshold' },
  { value: '28th day', label: 'After each tax period, returns are due' },
];

const faqs = [
  { q: 'How do I remove VAT from a price?', a: 'Divide the VAT-inclusive amount by 1.05 to get the net figure; the difference is the VAT. For AED 1,050 including VAT, the net amount is AED 1,000 and the VAT is AED 50.' },
  { q: 'When must a business register for VAT?', a: 'Registration is mandatory when taxable supplies and imports exceed AED 375,000 over the previous 12 months, or are expected to in the next 30 days. Businesses above AED 187,500 can register voluntarily.' },
  { q: 'Do all supplies carry 5% VAT?', a: 'No. Some supplies are zero-rated — such as qualifying exports outside the GCC and international transport — and some are exempt, such as certain financial services and residential property after its first supply. They are reported differently on the return.' },
  { q: 'How often are VAT returns filed?', a: 'Usually quarterly, though some businesses file monthly. Returns, and any VAT due, are due by the 28th day after the end of each tax period.' },
];

export default function VatCalculatorPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebApplication',
        '@id': `${url}/#app`,
        name: 'UAE VAT calculator',
        url,
        applicationCategory: 'FinanceApplication',
        operatingSystem: 'Any',
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'AED' },
        provider: { '@id': `${SITE}/#organization` },
      },
      { '@type': 'FAQPage', '@id': `${url}/#faq`, mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main id="main">
        <PageHero
          image={siteImages.vatInvoiceClipboard}
          eyebrow="Free tool · VAT"
          title={
            <>
              UAE VAT <span className="accent">calculator</span>
            </>
          }
          subtitle="Add 5% VAT to a net amount, or take it out of a VAT-inclusive total — instantly, in your browser."
          crumbs={[
            { label: 'Home', href: '/' },
            { label: 'Tax Services', href: '/services/tax-services' },
            { label: 'VAT calculator' },
          ]}
          ctaHref="#calculator"
          ctaLabel="Open the calculator"
        />

        <section id="calculator" className="section scroll-mt-28 bg-white">
          <div className="container-x">
            <Reveal>
              <VatCalculator />
            </Reveal>
          </div>
        </section>

        <section className="section bg-surface">
          <div className="container-x">
            <SectionHeading
              eyebrow="Key VAT facts"
              title={
                <>
                  UAE VAT <span className="accent">at a glance</span>
                </>
              }
            />
            <dl className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {rules.map((r, i) => (
                <Reveal key={r.label} delay={i * 60}>
                  <div className="card flex h-full flex-col p-6">
                    <dt className="order-2 mt-2 text-sm text-ink-500">{r.label}</dt>
                    <dd className="order-1 text-display-sm font-semibold text-ink-900 sm:text-display-md">{r.value}</dd>
                  </div>
                </Reveal>
              ))}
            </dl>
          </div>
        </section>

        <ServiceFaq faqs={faqs} label="VAT" />
        <RelatedServices slugs={['vat-registration', 'vat-return-filing', 'vat-compliance', 'bookkeeping-services']} />
        <Contact source="VAT calculator" defaultService="VAT" />
      </main>
    </>
  );
}
