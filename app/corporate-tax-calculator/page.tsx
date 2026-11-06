import type { Metadata } from 'next';
import { DEFAULT_SHARE_IMAGE } from '@/lib/seo';
import { siteImages } from '@/lib/site-images';
import PageHero from '@/components/ui/PageHero';
import SectionHeading from '@/components/ui/SectionHeading';
import Reveal from '@/components/ui/Reveal';
import CorporateTaxCalculator from '@/components/tools/CorporateTaxCalculator';
import ServiceFaq from '@/components/services/ServiceFaq';
import RelatedServices from '@/components/services/RelatedServices';
import Contact from '@/components/sections/Contact';

const SITE = 'https://www.smartgicvisa.com';
const url = `${SITE}/corporate-tax-calculator`;
const title = 'UAE Corporate Tax Calculator — 0% and 9% Bands | Smartgic Visa';
const description =
  'Free UAE corporate tax calculator: see how your taxable income splits between the 0% band up to AED 375,000 and the 9% rate, with the Small Business Relief election.';

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  keywords: ['UAE corporate tax calculator', 'corporate tax calculator Dubai', '9% corporate tax UAE', 'small business relief UAE', 'corporate tax estimate UAE'],
  alternates: { canonical: url },
  openGraph: { type: 'website', locale: 'en_AE', url, siteName: 'Smartgic Visa', title, description, images: [DEFAULT_SHARE_IMAGE] },
  twitter: { card: 'summary_large_image', title, description, images: [DEFAULT_SHARE_IMAGE] },
};

const rules = [
  { value: '0%', label: 'On taxable income up to AED 375,000' },
  { value: '9%', label: 'On taxable income above AED 375,000' },
  { value: 'AED 3m', label: 'Revenue ceiling for Small Business Relief' },
  { value: '9 months', label: 'After year end to file and pay' },
];

const faqs = [
  { q: 'What is taxable income?', a: 'Your accounting profit for the tax period, adjusted for the items the Corporate Tax Law adds back or exempts — for example certain non-deductible expenses, exempt dividends and losses brought forward. It is not your revenue.' },
  { q: 'Who can elect Small Business Relief?', a: 'Resident businesses with revenue of AED 3 million or less can elect to be treated as having no taxable income, for tax periods ending on or before 31 December 2026. It is not available to Qualifying Free Zone Persons or members of large multinational groups, and the election is made in the tax return.' },
  { q: 'Do I still have to file if no tax is due?', a: 'Yes. Taxable persons must register and file a return for every tax period, even when the result is nil or Small Business Relief applies.' },
  { q: 'Why doesn’t the calculator handle free zone companies?', a: 'A Qualifying Free Zone Person pays 0% on qualifying income and 9% on other income, but qualifying depends on activities, customers, substance and audited accounts. Those facts need a review, not a form field — so we assess them with you.' },
  { q: 'When is corporate tax paid?', a: 'The return is filed, and any tax paid, within nine months of the end of the tax period. For a year ending 31 December, that is by 30 September of the following year.' },
];

export default function CorporateTaxCalculatorPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebApplication',
        '@id': `${url}/#app`,
        name: 'UAE corporate tax calculator',
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
          image={siteImages.taxCalculatorPenMagnifierBlueCharts}
          eyebrow="Free tool · Corporate tax"
          title={
            <>
              UAE corporate tax <span className="accent">calculator</span>
            </>
          }
          subtitle="Enter your taxable income to see what falls in the 0% band, what is taxed at 9%, and what Small Business Relief would change."
          crumbs={[
            { label: 'Home', href: '/' },
            { label: 'Tax Services', href: '/services/tax-services' },
            { label: 'Corporate tax calculator' },
          ]}
          ctaHref="#calculator"
          ctaLabel="Open the calculator"
        />

        <section id="calculator" className="section scroll-mt-28 bg-white">
          <div className="container-x">
            <Reveal>
              <CorporateTaxCalculator />
            </Reveal>
          </div>
        </section>

        <section className="section bg-surface">
          <div className="container-x">
            <SectionHeading
              eyebrow="The rules it uses"
              title={
                <>
                  How UAE corporate tax <span className="accent">is calculated</span>
                </>
              }
              description="The headline rules for a standard taxable person under the Corporate Tax Law."
            />
            <dl className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {rules.map((r, i) => (
                <Reveal key={r.label} delay={i * 60}>
                  <div className="card flex h-full flex-col p-6">
                    <dt className="order-2 mt-2 text-sm text-ink-500">{r.label}</dt>
                    <dd className="order-1 text-display-md font-semibold text-ink-900">{r.value}</dd>
                  </div>
                </Reveal>
              ))}
            </dl>
          </div>
        </section>

        <ServiceFaq faqs={faqs} label="Corporate tax" />
        <RelatedServices slugs={['corporate-tax-registration', 'corporate-tax-filing', 'corporate-tax-advisory', 'accounting-services']} />
        <Contact source="Corporate tax calculator" defaultService="Corporate tax" />
      </main>
    </>
  );
}
