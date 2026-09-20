import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  FileText,
  MapPin,
  Phone,
  Sparkles,
  Target,
  Wallet,
} from 'lucide-react';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/ui/WhatsAppButton';
import MobileActionBar from '@/components/ui/MobileActionBar';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import Reveal from '@/components/ui/Reveal';
import SectionHeading from '@/components/ui/SectionHeading';
import Accordion from '@/components/ui/Accordion';
import Disclaimer from '@/components/ui/Disclaimer';
import Testimonials from '@/components/sections/Testimonials';
import CTABand from '@/components/sections/CTABand';
import Contact from '@/components/sections/Contact';

import {
  getJurisdiction,
  jurisdictionSlugs,
  zoneDocuments,
  zoneSetupSteps,
} from '@/lib/freezones';
import { getService } from '@/lib/services';
import { company } from '@/lib/data';

const SITE = 'https://www.smartgicvisa.com';

export function generateStaticParams() {
  return jurisdictionSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const zone = getJurisdiction(slug);
  if (!zone) return {};

  const url = `${SITE}/free-zones/${zone.slug}`;
  return {
    title: { absolute: zone.metaTitle },
    description: zone.metaDescription,
    keywords: zone.keywords,
    alternates: { canonical: url },
    openGraph: {
      type: 'website',
      locale: 'en_AE',
      url,
      siteName: 'Smartgic Visa',
      title: zone.metaTitle,
      description: zone.metaDescription,
    },
    twitter: {
      card: 'summary_large_image',
      title: zone.metaTitle,
      description: zone.metaDescription,
    },
  };
}

export default async function JurisdictionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const zone = getJurisdiction(slug);
  if (!zone) notFound();

  const url = `${SITE}/free-zones/${zone.slug}`;
  const relatedZones = zone.related
    .map((s) => getJurisdiction(s))
    .filter((z): z is NonNullable<typeof z> => Boolean(z));
  const relatedServices = zone.services
    .map((s) => getService(s))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': `${url}/#service`,
        name: `${zone.name} company formation`,
        serviceType: 'Company formation',
        description: zone.metaDescription,
        url,
        areaServed: { '@type': 'Country', name: 'United Arab Emirates' },
        provider: { '@id': `${SITE}/#organization` },
      },
      {
        '@type': 'FAQPage',
        '@id': `${url}/#faq`,
        mainEntity: zone.faqs.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main id="main">
        {/* ─────────────── Hero ─────────────── */}
        <section className="relative overflow-hidden bg-brand-navy pt-[72px] text-white">
          <div className="pointer-events-none absolute inset-0">
            <div className="aurora left-[-10%] top-[-10%] h-[380px] w-[380px] bg-brand-cyan/40" />
            <div className="aurora right-[-8%] top-[0%] h-[460px] w-[460px] bg-brand-blue/50" />
            <div className="absolute inset-0 grid-pattern opacity-[0.5]" />
          </div>

          <div className="container-x relative pb-16 pt-10 sm:pb-20 lg:pb-24 lg:pt-14">
            <Breadcrumbs
              light
              items={[
                { label: 'Home', href: '/' },
                { label: 'Jurisdictions', href: '/free-zones' },
                { label: zone.abbr },
              ]}
            />

            <div className="mt-8 grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-10">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-brand-cyan backdrop-blur">
                  <Sparkles className="h-3.5 w-3.5" />
                  {zone.emirate} · {zone.category}
                </span>

                <h1 className="mt-6 text-balance text-3xl font-extrabold leading-[1.08] tracking-tight !text-white sm:text-4xl lg:text-[2.9rem]">
                  {zone.name}
                </h1>

                <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg">
                  {zone.tagline}. {zone.standout}
                </p>

                <ul className="mt-7 flex flex-wrap gap-x-6 gap-y-2">
                  {zone.bestFor.slice(0, 4).map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-sm font-medium text-slate-200"
                    >
                      <CheckCircle2 className="h-4.5 w-4.5 text-brand-cyan" />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <a href="#contact" className="btn-gradient group w-full sm:w-auto">
                    Get a Free Consultation
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                  <Link href="/cost-estimator" className="btn-white w-full sm:w-auto">
                    <Wallet className="h-4 w-4" /> Estimate my cost
                  </Link>
                </div>
              </div>

              {/* Fact card */}
              <div className="relative mx-auto w-full max-w-md lg:max-w-none">
                <div className="relative rounded-3xl border border-white/15 bg-white/[0.07] p-6 shadow-2xl backdrop-blur-xl sm:p-8">
                  <div className="flex items-center gap-4">
                    <div className="grid h-14 shrink-0 place-items-center rounded-2xl bg-brand-gradient px-4 text-base font-extrabold text-white shadow-glow">
                      {zone.abbr}
                    </div>
                    <div className="min-w-0">
                      <p className="text-base font-bold text-white">At a glance</p>
                      <p className="text-xs text-slate-400">Smartgic jurisdiction brief</p>
                    </div>
                  </div>

                  <dl className="mt-7 space-y-3">
                    <FactRow icon={MapPin} label="Emirate" value={zone.emirate} />
                    <FactRow icon={Building2} label="Type" value={zone.category} />
                    <FactRow icon={Wallet} label="Relative cost" value={zone.costTier} />
                    <FactRow
                      icon={Target}
                      label="Best suited to"
                      value={zone.bestFor.slice(0, 2).join(', ')}
                    />
                  </dl>

                  <a
                    href={`tel:${company.phoneHref}`}
                    className="mt-7 flex items-center justify-center gap-2 rounded-xl bg-white/10 px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/15"
                  >
                    <Phone className="h-4 w-4" /> Speak to an advisor
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─────────────── Overview ─────────────── */}
        <section className="section bg-white">
          <div className="container-x">
            <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
              <div>
                <span className="eyebrow">Overview</span>
                <h2 className="mt-5 text-3xl font-extrabold leading-[1.15] sm:text-[2.2rem]">
                  Is {zone.abbr} the right fit for you?
                </h2>
                <div className="mt-6 space-y-5">
                  {zone.intro.map((p) => (
                    <p key={p.slice(0, 40)} className="text-base leading-relaxed text-ink-500">
                      {p}
                    </p>
                  ))}
                </div>
              </div>

              <Reveal delay={100}>
                <div className="rounded-3xl border border-slate-100 bg-slate-50/70 p-7">
                  <h3 className="flex items-center gap-2 text-base font-bold text-ink-900">
                    <Target className="h-5 w-5 text-brand-cyan-dark" />
                    Ideal for
                  </h3>
                  <ul className="mt-5 space-y-3">
                    {zone.idealFor.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-ink-500">
                        <CheckCircle2 className="mt-0.5 h-4.5 w-4.5 shrink-0 text-brand-cyan" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ─────────────── Highlights ─────────────── */}
        <section className="section bg-slate-50/70">
          <div className="container-x">
            <SectionHeading
              eyebrow="Why this jurisdiction"
              title={
                <>
                  What {zone.abbr} <span className="gradient-text">actually gives you</span>
                </>
              }
              description={`The advantages that matter commercially — not a feature list. If none of these apply to your business, we will point you somewhere cheaper.`}
            />
            <div className="mt-14 grid gap-5 sm:grid-cols-2">
              {zone.highlights.map((h, i) => (
                <Reveal key={h.title} delay={i * 70}>
                  <div className="h-full rounded-2xl border border-slate-100 bg-white p-7 shadow-card">
                    <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-gradient-soft text-brand-blue">
                      <CheckCircle2 className="h-5 w-5" />
                    </span>
                    <h3 className="mt-5 text-base font-bold text-ink-900">{h.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-500">{h.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ─────────────── Licence types + office options ─────────────── */}
        <section className="section bg-white">
          <div className="container-x">
            <SectionHeading
              eyebrow="Licensing"
              title={
                <>
                  Licence types &amp; <span className="gradient-text">workspace options</span>
                </>
              }
              description="Your licence category follows your activity, and your workspace drives your visa allocation. We match both to what you actually need."
            />

            <div className="mt-14 grid gap-8 lg:grid-cols-[1.25fr_0.75fr]">
              <div className="grid gap-4 sm:grid-cols-2">
                {zone.licenceTypes.map((l, i) => (
                  <Reveal key={l.name} delay={i * 70}>
                    <div className="h-full rounded-2xl border border-slate-100 bg-white p-6 shadow-card">
                      <span className="text-xs font-bold uppercase tracking-wider text-brand-cyan-dark">
                        0{i + 1}
                      </span>
                      <h3 className="mt-2 text-base font-bold text-ink-900">{l.name}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-ink-500">{l.desc}</p>
                    </div>
                  </Reveal>
                ))}
              </div>

              <Reveal delay={120}>
                <div className="h-full rounded-3xl bg-brand-navy p-7 text-white">
                  <h3 className="flex items-center gap-2 text-base font-bold !text-white">
                    <Building2 className="h-5 w-5 text-brand-cyan" />
                    Workspace options
                  </h3>
                  <ul className="mt-5 space-y-3">
                    {zone.officeOptions.map((o) => (
                      <li key={o} className="flex items-start gap-3 text-sm text-slate-300">
                        <CheckCircle2 className="mt-0.5 h-4.5 w-4.5 shrink-0 text-brand-cyan" />
                        {o}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-6 border-t border-white/10 pt-5 text-xs leading-relaxed text-slate-400">
                    Visa allocation is tied to your workspace selection. We size it to your hiring
                    plan so you do not pay for unused quota.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ─────────────── Process ─────────────── */}
        <section className="section bg-slate-50/70">
          <div className="container-x">
            <SectionHeading
              eyebrow="How it works"
              title={
                <>
                  From first call to <span className="gradient-text">licence in hand</span>
                </>
              }
              description="The same six steps apply across jurisdictions. What changes is the authority, the approvals and the documentation — which is the part we handle."
            />
            <ol className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {zoneSetupSteps.map((s, i) => (
                <Reveal key={s.title} delay={i * 60} as="li">
                  <div className="h-full rounded-2xl border border-slate-100 bg-white p-7 shadow-card">
                    <span className="text-2xl font-extrabold tracking-tight text-brand-cyan/50">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <h3 className="mt-3 text-base font-bold text-ink-900">{s.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-500">{s.desc}</p>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>

        {/* ─────────────── Documents ─────────────── */}
        <section className="section bg-white">
          <div className="container-x">
            <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16">
              <div>
                <span className="eyebrow">Paperwork</span>
                <h2 className="mt-5 text-3xl font-extrabold leading-[1.15] sm:text-[2.2rem]">
                  What you need to <span className="gradient-text">get started</span>
                </h2>
                <p className="mt-5 text-base leading-relaxed text-ink-500">
                  This is the standard document set. Regulated activities and corporate shareholders
                  carry additional requirements — we confirm the exact list for your case before you
                  start gathering anything.
                </p>
                <a href="#contact" className="btn-gradient group mt-8">
                  Get my document checklist
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>

              <Reveal delay={100}>
                <ul className="grid gap-3 rounded-3xl border border-slate-100 bg-slate-50/70 p-7">
                  {zoneDocuments.map((d) => (
                    <li key={d} className="flex items-start gap-3 text-sm text-ink-500">
                      <FileText className="mt-0.5 h-4.5 w-4.5 shrink-0 text-brand-cyan-dark" />
                      {d}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ─────────────── Related services ─────────────── */}
        {relatedServices.length > 0 && (
          <section className="section bg-slate-50/70">
            <div className="container-x">
              <SectionHeading
                eyebrow="What comes next"
                title={
                  <>
                    Services you will need <span className="gradient-text">alongside the licence</span>
                  </>
                }
                description="A licence on its own does not make you operational. These are the pieces that usually follow."
              />
              <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {relatedServices.map((s, i) => {
                  const Icon = s.icon;
                  return (
                    <Reveal key={s.slug} delay={i * 70}>
                      <Link
                        href={`/services/${s.slug}`}
                        className="group flex h-full flex-col rounded-2xl border border-slate-100 bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-brand-blue/20 hover:shadow-soft"
                      >
                        <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand-gradient-soft text-brand-blue transition-colors duration-300 group-hover:bg-brand-gradient group-hover:text-white">
                          <Icon className="h-5.5 w-5.5" />
                        </span>
                        <h3 className="mt-5 text-base font-bold text-ink-900 group-hover:text-brand-blue">
                          {s.navLabel}
                        </h3>
                        <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-500">
                          {s.blurb ?? s.eyebrow}
                        </p>
                        <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-blue">
                          Explore
                          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </span>
                      </Link>
                    </Reveal>
                  );
                })}
              </div>
            </div>
          </section>
        )}

        <Testimonials />

        {/* ─────────────── FAQs ─────────────── */}
        <section className="section bg-white">
          <div className="container-x">
            <SectionHeading
              eyebrow="Good to know"
              title={
                <>
                  {zone.abbr} <span className="gradient-text">questions answered</span>
                </>
              }
              description="The questions founders actually ask us about this jurisdiction — answered straight."
            />
            <div className="mx-auto mt-12 max-w-3xl">
              <Accordion items={zone.faqs} />
            </div>
          </div>
        </section>

        {/* ─────────────── Compare other jurisdictions ─────────────── */}
        {relatedZones.length > 0 && (
          <section className="section bg-slate-50/70">
            <div className="container-x">
              <SectionHeading
                eyebrow="Compare"
                title={
                  <>
                    Other jurisdictions <span className="gradient-text">worth considering</span>
                  </>
                }
                description="Most founders shortlist two or three before deciding. These are the closest alternatives to this one."
              />
              <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {relatedZones.map((z, i) => (
                  <Reveal key={z.slug} delay={i * 70}>
                    <Link
                      href={`/free-zones/${z.slug}`}
                      className="group flex h-full flex-col rounded-2xl border border-slate-100 bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-brand-blue/20 hover:shadow-soft"
                    >
                      <span className="grid h-11 w-fit place-items-center rounded-xl bg-brand-gradient px-3 text-sm font-extrabold text-white">
                        {z.abbr}
                      </span>
                      <h3 className="mt-4 text-sm font-bold leading-snug text-ink-900 group-hover:text-brand-blue">
                        {z.name}
                      </h3>
                      <p className="mt-1.5 text-xs font-semibold uppercase tracking-wider text-ink-400">
                        {z.emirate} · {z.costTier}
                      </p>
                      <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-500">{z.tagline}</p>
                    </Link>
                  </Reveal>
                ))}
              </div>

              <div className="mt-12 text-center">
                <Link href="/free-zones" className="btn-ghost group">
                  Compare all jurisdictions
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </section>
        )}

        <Disclaimer />
        <CTABand />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
      <MobileActionBar />
    </>
  );
}

function FactRow({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-start justify-between gap-4 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3">
      <dt className="flex items-center gap-2 text-sm text-slate-400">
        <Icon className="h-4 w-4 shrink-0 text-brand-cyan" />
        {label}
      </dt>
      <dd className="text-right text-sm font-semibold text-white">{value}</dd>
    </div>
  );
}
