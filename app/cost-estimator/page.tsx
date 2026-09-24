import type { Metadata } from 'next';
import { DEFAULT_SHARE_IMAGE } from '@/lib/seo';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/ui/WhatsAppButton';
import MobileActionBar from '@/components/ui/MobileActionBar';
import PageHero from '@/components/ui/PageHero';
import SectionHeading from '@/components/ui/SectionHeading';
import Accordion from '@/components/ui/Accordion';
import Disclaimer from '@/components/ui/Disclaimer';
import CostEstimator from '@/components/tools/CostEstimator';
import CTABand from '@/components/sections/CTABand';

const SITE = 'https://www.smartgicvisa.com';
const url = `${SITE}/cost-estimator`;
const title = 'Business Setup Cost Estimator — Dubai & UAE | Smartgic Visa';
const description =
  'Answer five questions and see which UAE jurisdiction fits your business, with an indicative Smartgic package price. Free, no email required to see your result.';

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  keywords: [
    'business setup cost Dubai',
    'UAE company formation cost calculator',
    'free zone cost estimator',
    'Dubai trade licence cost',
    'company setup cost UAE',
  ],
  alternates: { canonical: url },
  openGraph: {
    type: 'website',
    locale: 'en_AE',
    url,
    siteName: 'Smartgic Visa',
    title,
    description,
    images: [DEFAULT_SHARE_IMAGE],
  },
  twitter: { card: 'summary_large_image', title, description, images: [DEFAULT_SHARE_IMAGE] },
};

const estimatorFaqs = [
  {
    q: 'Why does this not show exact government fees?',
    a: 'Because we would have to make them up. Authority and government fees depend on your exact activity list, visa count, workspace, shareholder type and the authority itself — and they change. Tools that quote a precise figure before knowing any of that are guessing. We show our own package pricing, which is real, and itemise authority fees in your written quote.',
  },
  {
    q: 'How accurate is the jurisdiction recommendation?',
    a: 'It reflects how we would actually shortlist for a business with your profile, using the same logic our advisors apply. It is a strong starting point, not a substitute for a conversation — edge cases, regulated activities and group structures need a human look.',
  },
  {
    q: 'Do I have to give my email to see the result?',
    a: 'No. The result appears immediately. The form underneath is there if you want the itemised written quote, and it is entirely optional.',
  },
  {
    q: 'What is included in the Smartgic package price?',
    a: 'Our professional service charge and the items listed against each package. Government and authority fees are quoted separately and itemised, so you can always see exactly what goes to the authority versus what goes to us.',
  },
  {
    q: 'Can the estimate change after I get a quote?',
    a: 'The service charge we quote is what you pay. Authority fees can change if you add activities, increase your visa count or change workspace after quoting — we flag that before anything is submitted, never afterwards.',
  },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebApplication',
      '@id': `${url}/#tool`,
      name: 'Smartgic UAE Business Setup Cost Estimator',
      url,
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Web browser',
      description,
      provider: { '@id': `${SITE}/#organization` },
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'AED' },
    },
    {
      '@type': 'FAQPage',
      '@id': `${url}/#faq`,
      mainEntity: estimatorFaqs.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    },
  ],
};

export default function CostEstimatorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main id="main">
        <PageHero
          eyebrow="Free tool"
          title={
            <>
              What will your UAE setup <span className="gradient-text">actually cost?</span>
            </>
          }
          subtitle="Five questions, about a minute. You get the jurisdiction we would shortlist for a business like yours, an indicative package price, and an honest account of what we cannot know until we speak."
          crumbs={[{ label: 'Home', href: '/' }, { label: 'Cost Estimator' }]}
          ctaHref="/contact"
        />

        <CostEstimator />

        <section className="section bg-slate-50/70">
          <div className="container-x">
            <SectionHeading
              eyebrow="About this tool"
              title={
                <>
                  How the estimate <span className="gradient-text">works</span>
                </>
              }
              description="What it can tell you, what it deliberately does not, and why."
            />
            <div className="mx-auto mt-12 max-w-3xl">
              <Accordion items={estimatorFaqs} />
            </div>
          </div>
        </section>

        <Disclaimer />
        <CTABand ctaHref="/contact" />
      </main>
      <Footer />
      <WhatsAppButton />
      <MobileActionBar />
    </>
  );
}
