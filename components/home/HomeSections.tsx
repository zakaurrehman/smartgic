import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight, Calculator, Check, Crown, Percent, ShieldCheck, Sparkles } from 'lucide-react';
import { company, goldenVisaPoints, sectors, whyUs } from '@/lib/data';
import { jurisdictions, emirates } from '@/lib/freezones';
import { siteImages } from '@/lib/site-images';
import SectionHeading from '../ui/SectionHeading';
import Reveal from '../ui/Reveal';
import Spotlight from '../ui/Spotlight';
import Counter from '../ui/Counter';
import Parallax from '../ui/Parallax';
import Aurora from '../ui/Aurora';
import EmiratesGlobe from './EmiratesGlobe';

/* ── Why Smartgic ────────────────────────────────────────────────────────── */
export function WhySmartgic({ serviceCount, categoryCount, zoneCount }: { serviceCount: number; categoryCount: number; zoneCount: number }) {
  const facts = [
    { value: serviceCount, label: 'Services offered', note: 'Across eight practice areas', href: '/services' },
    { value: categoryCount, label: 'Practice areas', note: 'From setup to audit', href: '/services' },
    { value: zoneCount, label: 'Jurisdictions compared', note: 'Free zone, mainland, offshore', href: '/free-zones' },
    { value: 7, label: 'Emirates covered', note: 'Every UAE emirate', href: '/free-zones' },
  ];
  const main = siteImages.smartgicMeetingRoom;
  const inset = siteImages.emiratiBusinessMeeting;

  return (
    <section className="section-lg overflow-hidden bg-surface">
      <div className="container-wide grid gap-16 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-20">
        {/* Photo collage */}
        <Reveal className="relative order-last lg:order-first">
          <div className="relative mx-auto max-w-xl lg:max-w-none">
            <Parallax offset={30} className="photo-frame aspect-[4/5] !rounded-[2rem]">
              <Image
                src={main.src}
                alt={main.alt}
                fill
                placeholder="blur"
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="scale-110 object-cover"
                style={{ objectPosition: '50% 60%' }}
              />
            </Parallax>
            <div className="photo-frame absolute -bottom-8 -right-4 hidden aspect-square w-[42%] !rounded-[1.5rem] border-4 border-surface shadow-lift sm:block lg:-right-10">
              <Image src={inset.src} alt={inset.alt} fill placeholder="blur" sizes="260px" className="object-cover" />
            </div>
            <div className="glass absolute -left-3 top-8 flex items-center gap-3 rounded-2xl px-4 py-3 sm:-left-8">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand-blue text-white">
                <ShieldCheck className="h-5 w-5" aria-hidden="true" />
              </span>
              <span>
                <span className="block font-mono text-[0.62rem] uppercase tracking-[0.16em] text-ink-400">Licensed by Dubai DET</span>
                <span className="block font-mono text-base font-medium text-ink-900">No. {company.licenseNo}</span>
              </span>
            </div>
          </div>
        </Reveal>

        <div>
          <SectionHeading
            align="left"
            eyebrow="Why Smartgic"
            title={
              <>
                A licensed partner that <span className="accent">owns the outcome</span>
              </>
            }
            description="We are not a lead-generation middleman. We are a Dubai consultancy that takes your file from first call to final filing — and stays on it."
          />
          <div className="mt-10 grid gap-3 sm:grid-cols-2">
            {whyUs.map((w, i) => {
              const Icon = w.icon;
              return (
                <Reveal key={w.title} delay={(i % 2) * 70} className="h-full">
                  <Spotlight className="card card-hover h-full p-5">
                    <span className="grid h-10 w-10 place-items-center rounded-xl bg-surface-2 text-brand-blue">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <h3 className="mt-4 text-base font-semibold text-ink-900">{w.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-ink-500">{w.desc}</p>
                  </Spotlight>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>

      {/* Facts strip — every figure is counted from this site's own data. */}
      <div className="container-wide mt-24">
        <ul className="grid grid-cols-2 divide-slate-200/80 overflow-hidden rounded-[1.75rem] border border-slate-200/80 bg-white lg:grid-cols-4 lg:divide-x">
          {facts.map((f) => (
            <li key={f.label}>
              <Link href={f.href} className="group flex h-full flex-col p-6 transition-colors hover:bg-surface sm:p-8">
                <span className="text-[clamp(2.4rem,1.6rem+2.4vw,3.6rem)] font-semibold leading-none tracking-tight text-ink-900">
                  <Counter value={f.value} />
                </span>
                <span className="mt-2 text-sm font-medium text-ink-900">{f.label}</span>
                <span className="mt-1 flex items-center gap-1 text-xs text-ink-400">
                  {f.note}
                  <ArrowUpRight className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" aria-hidden="true" />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ── Across the seven emirates ─────────────────────────────────────────── */
export function EmiratesSection() {
  const counts = emirates
    .map((e) => ({ emirate: e, count: jurisdictions.filter((j) => j.emirate === e).length }))
    .filter((e) => e.count > 0);

  return (
    <section className="section-lg on-dark relative isolate overflow-hidden bg-navy-950 text-slate-300">
      <Aurora intensity="subtle" />
      <div className="container-wide relative grid items-center gap-14 lg:grid-cols-[1fr_1fr]">
        <div>
          <SectionHeading
            dark
            align="left"
            eyebrow="Across the UAE"
            title={
              <>
                Based in Dubai. Working across <span className="accent">all seven emirates.</span>
              </>
            }
            description="Every emirate has its own authorities and free zones. We compare them side by side and file wherever your business belongs."
          />
          <ul className="mt-10 grid grid-cols-2 gap-2 sm:grid-cols-3">
            {counts.map((c, i) => (
              <Reveal key={c.emirate} delay={i * 50} as="li">
                <div className="glass-dark rounded-2xl p-4">
                  <p className="text-sm font-medium text-white">{c.emirate}</p>
                  <p className="mt-1 font-mono text-xs text-brand-cyan">
                    {c.count} {c.count === 1 ? 'jurisdiction' : 'jurisdictions'}
                  </p>
                </div>
              </Reveal>
            ))}
          </ul>
          <Reveal delay={220}>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link href="/free-zones" className="btn-primary btn-sheen">
                Compare jurisdictions <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link href="/cost-estimator" className="btn-glass">
                Find my best fit
              </Link>
            </div>
          </Reveal>
        </div>
        <Reveal delay={120}>
          <EmiratesGlobe className="mx-auto max-w-[600px]" />
        </Reveal>
      </div>
    </section>
  );
}

/* ── Golden Visa ─────────────────────────────────────────────────────────── */
export function GoldenVisaBand() {
  const photo = siteImages.dubaiTerraceSkyline;
  return (
    <section className="section bg-white">
      <div className="container-wide">
        <div className="on-dark relative isolate overflow-hidden rounded-[2rem] bg-navy-950 px-6 py-14 sm:px-12 lg:px-16 lg:py-20">
          <Image
            src={photo.src}
            alt=""
            fill
            placeholder="blur"
            sizes="(min-width: 1400px) 1336px, 100vw"
            className="-z-10 object-cover"
            style={{ objectPosition: photo.position }}
          />
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-navy-950 via-navy-950/90 to-navy-950/30" aria-hidden="true" />
          <div className="noise absolute inset-0 -z-10" aria-hidden="true" />
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <Reveal>
                <span className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 font-mono text-[0.68rem] uppercase tracking-[0.16em] text-gold-light">
                  <Crown className="h-3.5 w-3.5" aria-hidden="true" /> Long-term residency
                </span>
              </Reveal>
              <Reveal delay={70}>
                <h2 className="mt-6 text-display-lg font-semibold text-white">
                  Secure your <span className="accent-gold">10-year Golden Visa</span>
                </h2>
              </Reveal>
              <Reveal delay={130}>
                <p className="lead mt-5 max-w-xl">
                  For investors, entrepreneurs, skilled professionals and exceptional talent. We assess the category that fits
                  you, build the file and manage the application for you and your family.
                </p>
              </Reveal>
              <Reveal delay={190}>
                <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                  <Link href="/golden-visa/eligibility" className="btn-white">
                    <Sparkles className="h-4 w-4 text-gold-dark" aria-hidden="true" /> Check my eligibility
                  </Link>
                  <Link href="/golden-visa" className="btn-glass">
                    How the Golden Visa works
                  </Link>
                </div>
              </Reveal>
            </div>
            <ul className="grid gap-3 sm:grid-cols-2">
              {goldenVisaPoints.map((p, i) => (
                <Reveal key={p} delay={i * 70} as="li">
                  <div className="glass-dark flex items-start gap-3 rounded-2xl p-5">
                    <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-gold/15">
                      <Check className="h-4 w-4 text-gold-light" aria-hidden="true" />
                    </span>
                    <p className="text-sm font-medium text-slate-100">{p}</p>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Free tools ─────────────────────────────────────────────────────────── */
const tools = [
  { href: '/cost-estimator', title: 'Setup cost estimator', desc: 'Answer five questions and see which jurisdictions fit your plan, with indicative cost tiers.', icon: Calculator },
  { href: '/golden-visa/eligibility', title: 'Golden Visa eligibility', desc: 'Find the Golden Visa category that matches your profile before you gather documents.', icon: Sparkles },
  { href: '/corporate-tax-calculator', title: 'Corporate tax calculator', desc: 'See how your taxable income splits between the 0% and 9% bands, with Small Business Relief.', icon: Percent },
  { href: '/vat-calculator', title: 'VAT calculator', desc: 'Add 5% VAT to a price or take it out of a VAT-inclusive total in one step.', icon: Calculator },
];

export function ToolsGrid() {
  return (
    <section className="section bg-surface">
      <div className="container-wide">
        <SectionHeading
          eyebrow="Free tools"
          title={
            <>
              Plan with numbers, <span className="accent">before you call</span>
            </>
          }
          description="Quick, private and free. Your answers stay in your browser."
        />
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {tools.map((t, i) => {
            const Icon = t.icon;
            return (
              <Reveal key={t.href} delay={i * 70} className="h-full">
                <Spotlight className="h-full rounded-3xl">
                  <Link href={t.href} className="group card card-hover flex h-full flex-col p-6">
                    <span className="grid h-12 w-12 place-items-center rounded-2xl bg-navy-900 text-brand-cyan transition-colors group-hover:bg-brand-blue group-hover:text-white">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <h3 className="mt-5 text-lg font-semibold text-ink-900">{t.title}</h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-500">{t.desc}</p>
                    <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-brand-blue">
                      Open tool <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
                    </span>
                  </Link>
                </Spotlight>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ── Sectors ────────────────────────────────────────────────────────────── */
export function Sectors() {
  return (
    <section className="section bg-white">
      <div className="container-wide grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div className="lg:sticky lg:top-36 lg:self-start">
          <SectionHeading
            align="left"
            eyebrow="Sector experience"
            title={
              <>
                The right licence for <span className="accent">your industry</span>
              </>
            }
            description="Activity codes, approvals and the best jurisdiction differ enormously by sector. Getting them wrong means re-filing — and paying twice."
            actions={
              <>
                <Link href="/cost-estimator" className="btn-primary">
                  Find my jurisdiction <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                <a href="#contact" className="btn-ghost">
                  Ask about my sector
                </a>
              </>
            }
          />
        </div>
        <ul className="grid gap-px overflow-hidden rounded-[1.75rem] border border-slate-200/80 bg-slate-200/80 sm:grid-cols-2 lg:grid-cols-3">
          {sectors.map((s, i) => {
            const Icon = s.icon;
            return (
              <Reveal key={s.title} delay={(i % 3) * 60} as="li" className="bg-white">
                <div className="h-full p-6 transition-colors hover:bg-surface">
                  <Icon className="h-5 w-5 text-brand-blue" aria-hidden="true" />
                  <h3 className="mt-4 text-[0.98rem] font-semibold text-ink-900">{s.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-500">{s.desc}</p>
                </div>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
