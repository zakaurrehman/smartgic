import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Building2, Check, Crown, FlaskConical, GraduationCap, HeartHandshake, Landmark, Sparkles, Briefcase } from 'lucide-react';
import { DEFAULT_SHARE_IMAGE } from '@/lib/seo';
import { siteImages } from '@/lib/site-images';
import { getPostsBySlugs } from '@/lib/blog';
import PageHero from '@/components/ui/PageHero';
import SectionHeading from '@/components/ui/SectionHeading';
import Reveal from '@/components/ui/Reveal';
import Spotlight from '@/components/ui/Spotlight';
import Aurora from '@/components/ui/Aurora';
import ProcessTimeline from '@/components/services/ProcessTimeline';
import ServiceFaq from '@/components/services/ServiceFaq';
import RelatedServices from '@/components/services/RelatedServices';
import GuidesSection from '@/components/blog/GuidesSection';
import Contact from '@/components/sections/Contact';

const SITE = 'https://www.smartgicvisa.com';
const url = `${SITE}/golden-visa`;
const title = 'UAE Golden Visa — 10-Year Residency, Managed End to End | Smartgic Visa';
const description =
  'Apply for the 10-year UAE Golden Visa with Smartgic Visa: eligibility assessment, document preparation and the full application for investors, entrepreneurs, professionals and talents.';

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  keywords: ['UAE Golden Visa', '10 year visa UAE', 'Golden Visa Dubai', 'investor Golden Visa', 'Golden Visa eligibility'],
  alternates: { canonical: url },
  openGraph: { type: 'website', locale: 'en_AE', url, siteName: 'Smartgic Visa', title, description, images: [DEFAULT_SHARE_IMAGE] },
  twitter: { card: 'summary_large_image', title, description, images: [DEFAULT_SHARE_IMAGE] },
};

const benefits = [
  { title: '10 years, renewable', desc: 'A long-term residence permit you renew once a decade instead of every couple of years.' },
  { title: 'Self-sponsored', desc: 'No employer or local sponsor holds your residence — you do.' },
  { title: 'Your family included', desc: 'Sponsor your spouse and children, and your domestic staff, under your own visa.' },
  { title: 'Freedom to travel', desc: 'Long periods abroad don’t invalidate it, unlike a standard residence visa.' },
  { title: 'Stability for dependants', desc: 'Family members can stay on under their own permits if the holder passes away.' },
  { title: 'Change jobs freely', desc: 'Your residence doesn’t depend on one employer, so career moves don’t put it at risk.' },
];

/** Category names follow the authorities’ own; criteria are set by them and change. */
const categories = [
  { icon: Building2, title: 'Investors', desc: 'Property owners and investors in approved funds or UAE businesses, subject to the investment criteria in force.' },
  { icon: Briefcase, title: 'Entrepreneurs', desc: 'Founders and owners of UAE projects and startups, including those backed by an accredited incubator.' },
  { icon: Landmark, title: 'Skilled professionals', desc: 'Employees in eligible professions with the qualifications, contract and salary the rules require.' },
  { icon: FlaskConical, title: 'Specialised talents', desc: 'Scientists, doctors, inventors, artists, athletes and creatives endorsed by the relevant UAE authority.' },
  { icon: GraduationCap, title: 'Outstanding students', desc: 'High achievers from UAE schools and graduates of accredited universities.' },
  { icon: HeartHandshake, title: 'Humanitarian & frontline', desc: 'Recognised humanitarian pioneers and frontline workers, by nomination.' },
];

const steps = [
  { title: 'Eligibility assessment', desc: 'We confirm which category fits you best — often there is more than one — and check your evidence against the criteria in force today.' },
  { title: 'Document build', desc: 'Title deeds, statements, contracts, degrees and endorsements gathered, attested and translated where the authority requires it.' },
  { title: 'Nomination & application', desc: 'The application is submitted through the right channel for your category and emirate, and we answer every query on it.' },
  { title: 'Medical, biometrics & issuance', desc: 'Status change if needed, medical fitness test and Emirates ID biometrics — then your 10-year residence is issued.' },
  { title: 'Family & renewals', desc: 'We add your family under your visa and diarise your renewal, so nothing lapses.' },
];

const faqs = [
  { q: 'How long is the Golden Visa valid?', a: 'Ten years, and it is renewable as long as you continue to meet the criteria of your category. We track the renewal date for you.' },
  { q: 'Can my family be included?', a: 'Yes. Golden Visa holders can sponsor their spouse and children, and domestic staff. The documents differ by relationship — marriage and birth certificates usually need attestation if issued abroad.' },
  { q: 'Do I need to live in the UAE full time?', a: 'No. Unlike a standard residence visa, the Golden Visa is not cancelled because you spend long periods outside the UAE.' },
  { q: 'How long does the application take?', a: 'It depends heavily on the category and how quickly evidence can be assembled. Investment-based applications with complete documents tend to move fastest; nominations and endorsements take longer. We give you a realistic timeline after the assessment.' },
  { q: 'What are the exact thresholds for my category?', a: 'Investment amounts, salary levels and other criteria are set by the immigration authorities and are updated from time to time. We check the current figures against your situation at the first consultation, before you spend anything.' },
];

export default function GoldenVisaPage() {
  const guides = getPostsBySlugs(['uae-golden-visa-guide-2026', 'uae-residence-visa-types']);
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': `${url}/#service`,
        name: 'UAE Golden Visa services',
        serviceType: 'Golden Visa application',
        description,
        url,
        areaServed: { '@type': 'Country', name: 'United Arab Emirates' },
        provider: { '@id': `${SITE}/#organization` },
      },
      {
        '@type': 'FAQPage',
        '@id': `${url}/#faq`,
        mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main id="main">
        <PageHero
          image={siteImages.museumOfTheFutureGardens}
          eyebrow="Long-term residency"
          title={
            <>
              The UAE Golden Visa, <span className="accent-gold">handled end to end</span>
            </>
          }
          subtitle="Ten years of renewable residency for you and your family. We find the category that fits, build the evidence and manage the application through to your Emirates ID."
          crumbs={[
            { label: 'Home', href: '/' },
            { label: 'Visa & Immigration', href: '/services/visa-immigration' },
            { label: 'Golden Visa' },
          ]}
          highlights={['10-year renewable', 'Family included', 'Self-sponsored']}
          aside={
            <Link href="/golden-visa/eligibility" className="group flex items-center gap-4 rounded-3xl border border-white/10 bg-navy-900/80 p-5 shadow-float backdrop-blur-xl transition-colors hover:border-gold/40">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gold/15 text-gold-light">
                <Sparkles className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-sm font-semibold text-white">Check your eligibility</span>
                <span className="block text-xs text-slate-400">A two-minute, private self-check</span>
              </span>
              <ArrowRight className="h-4 w-4 text-gold-light transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
            </Link>
          }
        />

        {/* Benefits */}
        <section className="section-lg bg-white">
          <div className="container-x">
            <SectionHeading
              eyebrow="Why it matters"
              title={
                <>
                  What the Golden Visa <span className="accent">gives you</span>
                </>
              }
            />
            <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {benefits.map((b, i) => (
                <Reveal key={b.title} delay={(i % 3) * 70} className="h-full">
                  <Spotlight className="card card-hover h-full p-7">
                    <span className="grid h-9 w-9 place-items-center rounded-full bg-gold/15">
                      <Check className="h-4 w-4 text-gold-dark" aria-hidden="true" />
                    </span>
                    <h3 className="mt-5 text-lg font-semibold text-ink-900">{b.title}</h3>
                    <p className="mt-2 text-[0.95rem] leading-relaxed text-ink-500">{b.desc}</p>
                  </Spotlight>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="section-lg on-dark relative isolate overflow-hidden bg-navy-950 text-slate-300">
          <Image src={siteImages.dubaiTerraceSkyline.src} alt="" fill placeholder="blur" sizes="100vw" className="-z-10 object-cover opacity-25" />
          <Aurora intensity="subtle" className="-z-10" />
          <div className="container-x relative">
            <SectionHeading
              dark
              eyebrow="Who qualifies"
              title={
                <>
                  Six routes to a <span className="accent-gold">Golden Visa</span>
                </>
              }
              description="Each category has its own criteria, set and updated by the immigration authorities. We check the current requirements against your situation before you spend anything."
            />
            <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {categories.map((c, i) => {
                const Icon = c.icon;
                return (
                  <Reveal key={c.title} delay={(i % 3) * 70} className="h-full">
                    <div className="glass-dark border-gradient h-full rounded-3xl p-7">
                      <Icon className="h-6 w-6 text-gold-light" aria-hidden="true" />
                      <h3 className="mt-5 text-lg font-semibold text-white">{c.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-slate-400">{c.desc}</p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
            <Reveal delay={200}>
              <div className="mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link href="/golden-visa/eligibility" className="btn-white">
                  <Crown className="h-4 w-4 text-gold-dark" aria-hidden="true" /> Find my category
                </Link>
                <a href="#contact" className="btn-glass">
                  Ask an adviser
                </a>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Process */}
        <section className="section-lg bg-white">
          <div className="container-x grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
            <div className="lg:sticky lg:top-36 lg:self-start">
              <SectionHeading
                align="left"
                eyebrow="How it works"
                title={
                  <>
                    From assessment <span className="accent">to Emirates ID</span>
                  </>
                }
                description="One adviser manages the whole file, and you always know which step you are on."
              />
            </div>
            <Reveal delay={100}>
              <ProcessTimeline steps={steps} />
            </Reveal>
          </div>
        </section>

        <ServiceFaq faqs={faqs} label="Golden Visa" />
        <RelatedServices slugs={['investor-visa', 'family-visa', 'visa-services', 'company-registration']} />
        <GuidesSection
          posts={guides}
          className="bg-white"
          eyebrow="Further reading"
          title={
            <>
              Golden Visa <span className="accent">guides</span>
            </>
          }
          description="The detail behind each category, in plain English."
        />
        <Contact source="Golden Visa page" defaultService="Golden Visa" />
      </main>
    </>
  );
}
