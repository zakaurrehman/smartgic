import type { Metadata } from 'next';
import { DEFAULT_SHARE_IMAGE } from '@/lib/seo';
import {
  ShieldCheck, Eye, Zap, HeartHandshake, Landmark, Globe2,
  Percent, Crown, BadgeCheck,
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/ui/WhatsAppButton';
import MobileActionBar from '@/components/ui/MobileActionBar';
import PageHero from '@/components/ui/PageHero';
import SectionHeading from '@/components/ui/SectionHeading';
import Reveal from '@/components/ui/Reveal';
import WhyUs from '@/components/sections/WhyUs';
import Testimonials from '@/components/sections/Testimonials';
import CTABand from '@/components/sections/CTABand';
import Contact from '@/components/sections/Contact';
import { company, stats } from '@/lib/data';

const SITE = 'https://www.smartgicvisa.com';
const url = `${SITE}/about`;
const title = 'About Smartgic Visa | DET-Licensed Business Setup Consultancy in Dubai';
const description =
  'Smartgic Visa is a Dubai DET-licensed consultancy (License 1394564) for business setup, visas and PRO services — serving founders from 120+ countries from our Deira, Dubai office.';

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  keywords: [
    'about Smartgic Visa',
    'business setup consultancy Dubai',
    'DET licensed consultancy',
    'immigration consultants Dubai',
    'Smartgic Immigration',
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

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  '@id': `${url}/#aboutpage`,
  url,
  name: title,
  description,
  about: { '@id': `${SITE}/#organization` },
};

const values = [
  {
    icon: Eye,
    title: 'Transparency',
    desc: 'All-inclusive quotes with government fees itemised. You always know exactly what you pay and why.',
  },
  {
    icon: Zap,
    title: 'Speed',
    desc: 'Licences in days, visas without queues. We move at the pace your business plan demands.',
  },
  {
    icon: ShieldCheck,
    title: 'Compliance',
    desc: 'Every filing done by the book with DET, GDRFA, MOHRE and MOFA — no shortcuts, no surprises later.',
  },
  {
    icon: HeartHandshake,
    title: 'Ownership',
    desc: 'One dedicated manager owns your file from first call through every renewal. You are never passed around.',
  },
];

const whyDubai = [
  { icon: Percent, title: '0% Personal Income Tax', desc: 'Keep what you earn — plus generous corporate-tax thresholds for small business.' },
  { icon: Globe2, title: 'Gateway to the World', desc: 'Reach Europe, Asia and Africa within an 8-hour flight from a world-class logistics hub.' },
  { icon: BadgeCheck, title: '100% Foreign Ownership', desc: 'Own your company outright — free zones and most mainland activities.' },
  { icon: Crown, title: 'Long-Term Residency', desc: 'Investor visas and the 10-year Golden Visa give you and your family real stability.' },
];

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main id="main">
        <PageHero
          eyebrow="About Us"
          title={
            <>
              The licensed Dubai partner behind{' '}
              <span className="gradient-text">5,000+ success stories</span>
            </>
          }
          subtitle="Smartgic Visa helps founders from 120+ countries start, run and grow in the UAE — company formation, visas, PRO and everything in between, handled end to end."
          crumbs={[{ label: 'Home', href: '/' }, { label: 'About Us' }]}
        />

        {/* Story */}
        <section className="section bg-white">
          <div className="container-x grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16">
            <div>
              <Reveal>
                <span className="eyebrow">Our story</span>
              </Reveal>
              <Reveal delay={80}>
                <h2 className="mt-5 text-3xl font-extrabold leading-tight sm:text-4xl">
                  Built in Dubai, for people building in Dubai
                </h2>
              </Reveal>
              <Reveal delay={140}>
                <p className="mt-5 text-base leading-relaxed text-ink-500 sm:text-[1.05rem]">
                  {company.legalName} is a consultancy licensed by the {company.authority} — licence
                  No. {company.licenseNo} — with document clearing, the paperwork engine behind every
                  licence and visa in the UAE, as our core licensed activity. That focus is deliberate:
                  when government paperwork is your craft, everything built on top of it moves faster.
                </p>
              </Reveal>
              <Reveal delay={200}>
                <p className="mt-4 text-base leading-relaxed text-ink-500 sm:text-[1.05rem]">
                  From our office in Deira, Dubai, we have grown into a full-service partner for
                  company registration, residence and Golden Visas, PRO services, banking, trademarks
                  and workspace — serving entrepreneurs, SMEs and relocating families from more than
                  120 countries, in one engagement with one accountable team.
                </p>
              </Reveal>
            </div>

            <Reveal delay={120}>
              <div className="relative overflow-hidden rounded-3xl bg-brand-navy p-8 text-white shadow-glow">
                <div className="pointer-events-none absolute inset-0">
                  <div className="aurora right-[-20%] top-[-25%] h-56 w-56 bg-brand-blue/40" />
                  <div className="aurora bottom-[-25%] left-[-15%] h-52 w-52 bg-brand-cyan/30" />
                  <div className="absolute inset-0 dot-pattern opacity-30" />
                </div>
                <div className="relative">
                  <div className="flex items-center gap-3">
                    <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand-gradient">
                      <Landmark className="h-6 w-6 text-white" />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-slate-300">Licensed by</p>
                      <p className="text-base font-bold !text-white">Dubai Economy &amp; Tourism</p>
                    </div>
                  </div>
                  <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.05] p-5">
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                      Professional Licence No.
                    </p>
                    <p className="mt-1 text-3xl font-extrabold tracking-tight !text-white">
                      {company.licenseNo}
                    </p>
                    <p className="mt-2 text-sm text-slate-300">
                      Documents Clearing Services — Sole Establishment
                    </p>
                  </div>
                  <div className="mt-5 flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.05] p-5">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-brand-gradient text-base font-extrabold">
                      AS
                    </span>
                    <div>
                      <p className="text-sm font-bold !text-white">Adeel Shahbaz</p>
                      <p className="text-xs text-slate-400">Founder &amp; Managing Director</p>
                      <p className="mt-1.5 text-xs leading-relaxed text-slate-300">
                        &ldquo;Every client gets the setup I would want for my own business — fast,
                        compliant and with no surprises on the invoice.&rdquo;
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Stats */}
        <section className="border-y border-slate-100 bg-slate-50/70 py-12">
          <div className="container-x grid grid-cols-2 gap-6 lg:grid-cols-4">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 70}>
                <div className="text-center">
                  <p className="bg-brand-gradient bg-clip-text text-3xl font-extrabold tracking-tight text-transparent sm:text-4xl">
                    {s.value}
                  </p>
                  <p className="mt-1 text-sm text-ink-500">{s.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Values */}
        <section className="section bg-white">
          <div className="container-x">
            <SectionHeading
              eyebrow="How we work"
              title={
                <>
                  The values behind <span className="gradient-text">every engagement</span>
                </>
              }
              description="Four principles we refuse to compromise on — they are why clients stay with us long after the licence is issued."
            />
            <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {values.map((v, i) => {
                const Icon = v.icon;
                return (
                  <Reveal key={v.title} delay={i * 80}>
                    <div className="group h-full rounded-2xl border border-slate-100 bg-slate-50/60 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-brand-blue/20 hover:bg-white hover:shadow-card">
                      <div className="grid h-12 w-12 place-items-center rounded-xl bg-white text-brand-blue shadow-sm ring-1 ring-slate-100 transition-colors group-hover:bg-brand-gradient group-hover:text-white">
                        <Icon className="h-6 w-6" />
                      </div>
                      <h3 className="mt-5 text-base font-bold text-ink-900">{v.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-ink-500">{v.desc}</p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* Why Dubai */}
        <section className="section bg-slate-50/70">
          <div className="container-x">
            <SectionHeading
              eyebrow="Why Dubai"
              title={
                <>
                  The world&apos;s most rewarding place to{' '}
                  <span className="gradient-text">build a business</span>
                </>
              }
              description="There's a reason founders from 120+ countries choose the UAE — and why most of them never leave."
            />
            <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {whyDubai.map((w, i) => {
                const Icon = w.icon;
                return (
                  <Reveal key={w.title} delay={i * 80}>
                    <div className="h-full rounded-2xl border border-slate-100 bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-soft">
                      <div className="grid h-12 w-12 place-items-center rounded-xl bg-brand-gradient-soft text-brand-blue">
                        <Icon className="h-6 w-6" />
                      </div>
                      <h3 className="mt-5 text-base font-bold text-ink-900">{w.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-ink-500">{w.desc}</p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        <WhyUs />
        <Testimonials />
        <CTABand />
        <Contact source="About page" />
      </main>
      <Footer />
      <WhatsAppButton />
      <MobileActionBar />
    </>
  );
}
