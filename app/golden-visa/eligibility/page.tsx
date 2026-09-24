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
import EligibilityChecker from '@/components/tools/EligibilityChecker';
import CTABand from '@/components/sections/CTABand';

const SITE = 'https://www.smartgicvisa.com';
const url = `${SITE}/golden-visa/eligibility`;
const title = 'UAE Golden Visa Eligibility Check — Free Tool | Smartgic Visa';
const description =
  'Check which UAE Golden Visa category fits you — investor, property owner, entrepreneur, specialised talent, doctor, researcher, graduate or creative. Free and indicative.';

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  keywords: [
    'UAE Golden Visa eligibility',
    'Golden Visa eligibility check',
    'am I eligible for Golden Visa UAE',
    'Golden Visa categories UAE',
    '10 year visa UAE eligibility',
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

const eligibilityFaqs = [
  {
    q: 'Is this an official eligibility decision?',
    a: 'No, and no tool on any website can be. Golden Visa eligibility is determined solely by the UAE authorities — ICP and GDRFA. This tool tells you which category fits your profile and whether applying is likely to be worth your time, so you can have an informed conversation rather than a speculative one.',
  },
  {
    q: 'Why does the tool not show the investment thresholds?',
    a: 'Because they change. Thresholds, accepted instruments and evidence requirements are revised periodically by the authorities, and a number published on a website is stale the moment it is updated. We confirm the current figure for your category when we speak, rather than leaving an outdated one on the page.',
  },
  {
    q: 'What if more than one category applies to me?',
    a: 'That is common — a business owner who also owns property, for instance. Start with the one you can evidence most strongly. At consultation we look at all of them and apply through whichever gives the cleanest route.',
  },
  {
    q: 'Can my family be included?',
    a: 'Golden Visa holders can generally sponsor spouse, children and domestic staff, with conditions that vary by category. We cover family sponsorship as part of the application rather than treating it as a separate exercise.',
  },
  {
    q: 'How long does a Golden Visa application take?',
    a: 'It depends entirely on category, evidence readiness and which approvals are involved. We give you a realistic timeline for your specific case at consultation — not a marketing number.',
  },
  {
    q: 'What happens if I am not eligible yet?',
    a: 'We tell you plainly, and we tell you the practical route instead — usually a company-based investor visa or an employment residence visa, which gives you residency now and builds the position for a Golden Visa application later.',
  },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebApplication',
      '@id': `${url}/#tool`,
      name: 'Smartgic UAE Golden Visa Eligibility Check',
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
      mainEntity: eligibilityFaqs.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    },
  ],
};

export default function EligibilityPage() {
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
              Which Golden Visa category <span className="gradient-text">fits you?</span>
            </>
          }
          subtitle="Two questions, about thirty seconds. You get the category that matches your profile and an honest read on whether applying is worth your time right now — including when the answer is “not yet”."
          crumbs={[
            { label: 'Home', href: '/' },
            { label: 'Golden Visa', href: '/golden-visa' },
            { label: 'Eligibility Check' },
          ]}
          ctaHref="/contact"
        />

        <EligibilityChecker />

        <section className="section bg-slate-50/70">
          <div className="container-x">
            <SectionHeading
              eyebrow="About this check"
              title={
                <>
                  What this tool can — and cannot —{' '}
                  <span className="gradient-text">tell you</span>
                </>
              }
              description="Golden Visa advice is full of confident claims. Here is exactly how far this goes."
            />
            <div className="mx-auto mt-12 max-w-3xl">
              <Accordion items={eligibilityFaqs} />
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
