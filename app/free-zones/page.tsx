import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, Compass, Scale, Wallet } from 'lucide-react';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/ui/WhatsAppButton';
import MobileActionBar from '@/components/ui/MobileActionBar';
import PageHero from '@/components/ui/PageHero';
import Reveal from '@/components/ui/Reveal';
import SectionHeading from '@/components/ui/SectionHeading';
import Accordion from '@/components/ui/Accordion';
import Disclaimer from '@/components/ui/Disclaimer';
import ZoneDirectory from '@/components/freezones/ZoneDirectory';
import StructureCompare from '@/components/freezones/StructureCompare';
import Testimonials from '@/components/sections/Testimonials';
import CTABand from '@/components/sections/CTABand';
import Contact from '@/components/sections/Contact';

import { jurisdictions } from '@/lib/freezones';

const SITE = 'https://www.smartgicvisa.com';
const url = `${SITE}/free-zones`;
const title = 'UAE Free Zones, Mainland & Offshore — Compare Jurisdictions | Smartgic Visa';
const description =
  'Compare UAE free zones, mainland and offshore jurisdictions side by side — IFZA, DMCC, Meydan, JAFZA, DIFC, RAKEZ, ADGM and more. Search by activity, emirate and cost.';

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  keywords: [
    'UAE free zones',
    'compare UAE free zones',
    'free zone company Dubai',
    'IFZA vs DMCC',
    'Dubai mainland vs free zone',
    'UAE offshore company',
  ],
  alternates: { canonical: url },
  openGraph: { type: 'website', locale: 'en_AE', url, siteName: 'Smartgic Visa', title, description },
  twitter: { card: 'summary_large_image', title, description },
};

const chooseFactors = [
  {
    icon: Compass,
    title: 'Where your customers are',
    desc: 'Selling to UAE customers points to mainland. Serving international clients makes a free zone the cheaper, simpler route.',
  },
  {
    icon: Wallet,
    title: 'What you actually need',
    desc: 'A prestige address, warehousing or a common-law framework each cost money. If your model does not use them, you are paying for nothing.',
  },
  {
    icon: Scale,
    title: 'How many people you will sponsor',
    desc: 'Visa allocation is driven by workspace. Getting the package size right up front is cheaper than amending it in six months.',
  },
];

const pageFaqs = [
  {
    q: 'What is the difference between mainland, free zone and offshore?',
    a: 'A mainland licence lets you trade directly anywhere in the UAE and bid for government contracts, but requires a registered tenancy. A free zone licence gives 100% ownership and lower setup cost, but selling directly into the UAE market normally needs a distributor or a separate mainland licence. An offshore company is a holding vehicle only — it cannot trade in the UAE and carries no residence visa.',
  },
  {
    q: 'Which UAE free zone is cheapest?',
    a: 'The northern-emirate zones — UAQ FTZ, Ajman Free Zone, SHAMS and SPC — sit at the lowest end, with Dubai zones such as IFZA close behind. The honest caveat is that the cheapest licence is not always the cheapest outcome: corporate banking is generally harder outside Dubai, and moving jurisdiction later costs more than starting in the right one.',
  },
  {
    q: 'Can I own 100% of my company in a free zone?',
    a: 'Yes. All UAE free zones permit 100% foreign ownership, and most mainland commercial and professional activities now do too. A small set of strategic mainland activities still requires an Emirati partner or Local Service Agent — we confirm the position for your exact activity.',
  },
  {
    q: 'Can a free zone company sell to customers in Dubai?',
    a: 'Not directly, as a general rule. Free zone companies trade internationally and within free zones. Selling into the UAE mainland typically requires a mainland distributor, a commercial agent, or holding a mainland licence alongside the free zone one. Some zones, such as SPC, operate dual-licence arrangements that address this.',
  },
  {
    q: 'Do I have to live in the emirate where my company is licensed?',
    a: 'No. A UAE residence visa issued through any emirate permits you to live anywhere in the country. There are practical considerations around tenancy and some employer processes, which we walk through during your consultation.',
  },
  {
    q: 'Can I change jurisdiction later?',
    a: 'Yes, though it means forming a new entity and migrating your licence, banking and visas rather than simply editing a record. Many founders do start lean and move once revenue supports it — but it is worth getting the first choice as close to right as possible.',
  },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'ItemList',
      '@id': `${url}/#jurisdictions`,
      name: 'UAE free zones, mainland and offshore jurisdictions',
      itemListElement: jurisdictions.map((z, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: z.name,
        url: `${SITE}/free-zones/${z.slug}`,
      })),
    },
    {
      '@type': 'FAQPage',
      '@id': `${url}/#faq`,
      mainEntity: pageFaqs.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    },
  ],
};

export default function FreeZonesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main id="main">
        <PageHero
          eyebrow="Jurisdictions"
          title={
            <>
              Find the right UAE <span className="gradient-text">jurisdiction</span>
            </>
          }
          subtitle="Free zone, mainland or offshore — the choice sets your ownership, costs, visa quota and which markets you can legally serve. Search and compare every option we work with, then talk to someone who will tell you honestly which fits."
          crumbs={[{ label: 'Home', href: '/' }, { label: 'Jurisdictions' }]}
        />

        {/* How to choose */}
        <section className="section bg-slate-50/70">
          <div className="container-x">
            <SectionHeading
              eyebrow="Before you compare"
              title={
                <>
                  Three questions that <span className="gradient-text">decide it</span>
                </>
              }
              description="Most founders start by comparing licence prices. That is the last thing to look at, not the first."
            />
            <div className="mt-14 grid gap-5 sm:grid-cols-3">
              {chooseFactors.map((f, i) => {
                const Icon = f.icon;
                return (
                  <Reveal key={f.title} delay={i * 80}>
                    <div className="h-full rounded-2xl border border-slate-100 bg-white p-7 shadow-card">
                      <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand-gradient-soft text-brand-blue">
                        <Icon className="h-5.5 w-5.5" />
                      </span>
                      <h3 className="mt-5 text-base font-bold text-ink-900">{f.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-ink-500">{f.desc}</p>
                    </div>
                  </Reveal>
                );
              })}
            </div>

            <div className="mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link href="/cost-estimator" className="btn-gradient group">
                Build an indicative estimate
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link href="/contact" className="btn-ghost">
                Ask an advisor instead
              </Link>
            </div>
          </div>
        </section>

        <StructureCompare />
        <ZoneDirectory />

        <section className="section bg-slate-50/70">
          <div className="container-x">
            <SectionHeading
              eyebrow="Good to know"
              title={
                <>
                  Choosing a jurisdiction — <span className="gradient-text">answered</span>
                </>
              }
              description="The questions that come up in almost every first consultation."
            />
            <div className="mx-auto mt-12 max-w-3xl">
              <Accordion items={pageFaqs} />
            </div>
          </div>
        </section>

        <Testimonials />
        <Disclaimer />
        <CTABand />
        <Contact source="Jurisdictions directory" />
      </main>
      <Footer />
      <WhatsAppButton />
      <MobileActionBar />
    </>
  );
}
