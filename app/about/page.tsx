import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, BadgeCheck, Crown, Eye, Globe2, HeartHandshake, Landmark, MapPin, Percent, ShieldCheck, Zap } from 'lucide-react';
import { DEFAULT_SHARE_IMAGE } from '@/lib/seo';
import PageHero from '@/components/ui/PageHero';
import SectionHeading from '@/components/ui/SectionHeading';
import Reveal from '@/components/ui/Reveal';
import Spotlight from '@/components/ui/Spotlight';
import Parallax from '@/components/ui/Parallax';
import Aurora from '@/components/ui/Aurora';
import Contact from '@/components/sections/Contact';
import { company, mapsHref } from '@/lib/data';
import { categories } from '@/lib/catalog';
import { services } from '@/lib/services';
import { siteImages } from '@/lib/site-images';

const SITE = 'https://www.smartgicvisa.com';
const url = `${SITE}/about`;
const title = 'About Smartgic Visa | DET-Licensed Business Setup Consultancy in Dubai';
const description =
  'Smartgic Visa is a Dubai consultancy licensed by the Department of Economy and Tourism (licence 1394564) for business setup, visas, PRO, tax, accounting and audit — from our office in Deira.';

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  keywords: ['about Smartgic Visa', 'business setup consultancy Dubai', 'DET licensed consultancy', 'Smartgic Immigration', 'Deira Dubai consultancy'],
  alternates: { canonical: url },
  openGraph: { type: 'website', locale: 'en_AE', url, siteName: 'Smartgic Visa', title, description, images: [DEFAULT_SHARE_IMAGE] },
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
  { icon: Eye, title: 'Transparency', desc: 'Written, itemised quotes with government fees on their own lines. You always know what you pay, and to whom.' },
  { icon: Zap, title: 'Pace', desc: 'We move at the speed your plan needs — and tell you honestly how long each authority’s part really takes.' },
  { icon: ShieldCheck, title: 'Compliance', desc: 'Every filing done properly with DET, GDRFA, MOHRE, the FTA and the free zones. No shortcuts that cost you later.' },
  { icon: HeartHandshake, title: 'Ownership', desc: 'One adviser owns your file from the first call through every renewal. You are never passed around.' },
];

const whyDubai = [
  { icon: Percent, title: 'No personal income tax', desc: 'Salaries carry no personal income tax, and small businesses benefit from a 0% corporate tax band.' },
  { icon: Globe2, title: 'Between three continents', desc: 'Europe, Asia and Africa are all within reach from one of the world’s great aviation and logistics hubs.' },
  { icon: BadgeCheck, title: '100% foreign ownership', desc: 'Own your company outright in a free zone, and in most mainland activities too.' },
  { icon: Crown, title: 'Long-term residency', desc: 'Investor visas and the 10-year Golden Visa give you and your family stability.' },
];

export default function AboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main id="main">
        <PageHero
          image={siteImages.smartgicMeetingRoom}
          ctaHref="#contact"
          eyebrow="About Smartgic"
          title={
            <>
              A Dubai consultancy built on <span className="accent">getting it right</span>
            </>
          }
          subtitle="Licensed by Dubai’s Department of Economy and Tourism, we take companies from their first licence to their annual audit — one accountable team, one file, from our office in Deira."
          crumbs={[{ label: 'Home', href: '/' }, { label: 'About us' }]}
          aside={
            <div className="rounded-3xl border border-white/10 bg-navy-900/80 p-5 shadow-float backdrop-blur-xl">
              <p className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-brand-cyan">Licensed by Dubai DET</p>
              <p className="mt-2 font-mono text-2xl text-white">No. {company.licenseNo}</p>
              <p className="mt-1 text-xs text-slate-400">Documents Clearing Services · Sole Establishment</p>
            </div>
          }
        />

        {/* Story */}
        <section className="section-lg bg-white">
          <div className="container-x grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-20">
            <div>
              <Reveal>
                <span className="eyebrow">Our story</span>
              </Reveal>
              <Reveal delay={70}>
                <h2 className="mt-5 text-display-lg font-semibold text-ink-900">
                  Built in Dubai, for people <span className="accent">building in Dubai</span>
                </h2>
              </Reveal>
              <Reveal delay={130}>
                <p className="mt-6 text-[1.05rem] leading-[1.8] text-ink-500">
                  {company.legalName} is licensed by the {company.authority} — licence No. {company.licenseNo} — with
                  document clearing as its core licensed activity. That focus is deliberate: government paperwork is the
                  engine behind every licence, visa and filing in the UAE, and when it is your craft, everything built on
                  top of it moves with less friction.
                </p>
              </Reveal>
              <Reveal delay={190}>
                <p className="mt-5 text-[1.05rem] leading-[1.8] text-ink-500">
                  From our office in Deira we have grown into a full-service partner: company formation, visas and the
                  Golden Visa, PRO, banking and trademarks, and now corporate tax, VAT, accounting, compliance and audit —
                  so the team that sets up your company can keep it compliant for as long as it trades.
                </p>
              </Reveal>
              <Reveal delay={240}>
                <div className="mt-9 flex items-center gap-4 rounded-3xl border border-slate-200/80 bg-surface p-5">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-navy-900 font-semibold text-white">AS</span>
                  <div>
                    <p className="text-sm font-semibold text-ink-900">Adeel Shahbaz</p>
                    <p className="text-xs text-ink-500">Founder &amp; Managing Director</p>
                  </div>
                </div>
              </Reveal>
            </div>

            <Reveal delay={120}>
              <Parallax offset={24} className="photo-frame aspect-[4/5] !rounded-[2rem]">
                <Image
                  src={siteImages.officeReceptionDesk.src}
                  alt={siteImages.officeReceptionDesk.alt}
                  fill
                  placeholder="blur"
                  sizes="(min-width: 1024px) 42vw, 100vw"
                  className="scale-110 object-cover"
                />
              </Parallax>
            </Reveal>
          </div>
        </section>

        {/* What we cover */}
        <section className="section on-dark relative isolate overflow-hidden bg-navy-900 text-slate-300">
          <Aurora intensity="subtle" />
          <div className="container-x relative">
            <SectionHeading
              dark
              eyebrow="What we cover"
              title={
                <>
                  {services.length} services across <span className="accent">{categories.length} practice areas</span>
                </>
              }
              description="Everything a UAE company needs over its life, handled by one team."
            />
            <div className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {categories.map((c, i) => {
                const Icon = c.icon;
                return (
                  <Reveal key={c.slug} delay={(i % 4) * 60} className="h-full">
                    <Link href={`/services/${c.slug}`} className="group glass-dark flex h-full flex-col rounded-3xl p-6 transition-colors hover:border-brand-cyan/30">
                      <Icon className="h-5 w-5 text-brand-cyan" aria-hidden="true" />
                      <h3 className="mt-4 text-base font-semibold text-white">{c.label}</h3>
                      <p className="mt-1.5 flex-1 text-sm leading-relaxed text-slate-400">{c.tagline}</p>
                      <span className="mt-4 inline-flex items-center gap-1 font-mono text-xs text-brand-cyan">
                        {c.services.length} services <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                      </span>
                    </Link>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="section-lg bg-white">
          <div className="container-x">
            <SectionHeading
              eyebrow="How we work"
              title={
                <>
                  Four principles behind <span className="accent">every engagement</span>
                </>
              }
              description="They are why clients stay with us long after the licence is issued."
            />
            <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {values.map((v, i) => {
                const Icon = v.icon;
                return (
                  <Reveal key={v.title} delay={i * 70} className="h-full">
                    <Spotlight className="card card-hover h-full p-7">
                      <span className="grid h-12 w-12 place-items-center rounded-2xl bg-surface-2 text-brand-blue">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </span>
                      <h3 className="mt-5 text-lg font-semibold text-ink-900">{v.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-ink-500">{v.desc}</p>
                    </Spotlight>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* Why Dubai */}
        <section className="section bg-surface">
          <div className="container-x">
            <SectionHeading
              eyebrow="Why Dubai"
              title={
                <>
                  One of the world’s most rewarding places <span className="accent">to build a business</span>
                </>
              }
            />
            <Reveal className="mt-14">
              <div className="photo-frame aspect-[16/9] !rounded-[2rem] sm:aspect-[16/7]">
                <Image
                  src={siteImages.museumOfTheFutureDubai.src}
                  alt={siteImages.museumOfTheFutureDubai.alt}
                  fill
                  placeholder="blur"
                  sizes="(min-width: 1280px) 1176px, 100vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
            <div className="relative -mt-10 grid gap-4 px-3 sm:-mt-16 sm:grid-cols-2 sm:px-6 lg:-mt-20 lg:grid-cols-4 lg:px-8">
              {whyDubai.map((w, i) => {
                const Icon = w.icon;
                return (
                  <Reveal key={w.title} delay={i * 70} className="h-full">
                    <div className="card h-full p-6">
                      <Icon className="h-5 w-5 text-brand-blue" aria-hidden="true" />
                      <h3 className="mt-4 text-base font-semibold text-ink-900">{w.title}</h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-ink-500">{w.desc}</p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* Office */}
        <section className="section bg-white">
          <div className="container-x">
            <Reveal>
              <div className="surface-navy on-dark noise flex flex-col gap-8 rounded-[2rem] p-8 sm:p-12 lg:flex-row lg:items-center lg:justify-between">
                <div className="relative z-[2] flex items-start gap-5">
                  <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-white/10 text-brand-cyan">
                    <MapPin className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="font-mono text-[0.68rem] uppercase tracking-[0.18em] text-brand-cyan">Visit us</p>
                    <p className="mt-2 text-display-sm font-semibold text-white">{company.address}</p>
                    <p className="mt-1.5 text-sm text-slate-400">{company.hours}</p>
                  </div>
                </div>
                <div className="relative z-[2] flex flex-col gap-3 sm:flex-row">
                  <a href={mapsHref} target="_blank" rel="noopener noreferrer" className="btn-white">
                    <Landmark className="h-4 w-4" aria-hidden="true" /> Get directions
                  </a>
                  <Link href="/contact" className="btn-glass">
                    Contact the team
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <Contact source="About page" />
      </main>
    </>
  );
}
