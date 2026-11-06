import Link from 'next/link';
import { ArrowRight, Check, FileText, Info, MessageCircle, Phone, UserCheck } from 'lucide-react';
import type { Service } from '@/lib/services';
import { company } from '@/lib/data';
import SectionHeading from '../ui/SectionHeading';
import Reveal from '../ui/Reveal';
import Spotlight from '../ui/Spotlight';
import ProcessTimeline from './ProcessTimeline';

/* ── Overview ────────────────────────────────────────────────────────────── */
export function Overview({ service }: { service: Service }) {
  return (
    <section id="overview" className="section scroll-mt-40 bg-white">
      <div className="container-x grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
        <div>
          <Reveal>
            <span className="eyebrow">Overview</span>
          </Reveal>
          <Reveal delay={70}>
            <h2 className="mt-5 text-display-lg font-semibold text-ink-900">{service.overview.heading}</h2>
          </Reveal>
          {service.overview.body.map((para, i) => (
            <Reveal key={i} delay={130 + i * 60}>
              <p className="mt-6 text-[1.05rem] leading-[1.8] text-ink-500">{para}</p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={140} className="lg:pt-14">
          <div className="card relative overflow-hidden p-7 sm:p-8">
            <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-brand-gradient-soft blur-2xl" aria-hidden="true" />
            <p className="relative font-mono text-[0.68rem] uppercase tracking-[0.18em] text-teal">Key facts</p>
            <dl className="relative mt-5 grid grid-cols-2 gap-3">
              {service.stats.map((s) => (
                <div key={s.label} className="flex flex-col rounded-2xl border border-slate-100 bg-surface/70 p-4">
                  <dt className="order-2 mt-1 text-xs leading-snug text-ink-500">{s.label}</dt>
                  <dd className="order-1 text-2xl font-semibold tracking-tight text-ink-900">{s.value}</dd>
                </div>
              ))}
            </dl>
            <a href="#contact" className="relative mt-6 flex items-center justify-between rounded-2xl bg-navy-900 px-5 py-4 text-sm font-medium text-white transition-colors hover:bg-navy-800">
              Get an itemised quote
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ── Benefits ────────────────────────────────────────────────────────────── */
export function Benefits({ service }: { service: Service }) {
  return (
    <section className="section bg-surface">
      <div className="container-x">
        <SectionHeading
          eyebrow="Why it matters"
          title={
            <>
              What you gain with <span className="accent">{service.navLabel}</span>
            </>
          }
          description="The practical difference when the work is planned and filed properly the first time."
        />
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {service.benefits.map((b, i) => (
            <Reveal key={b.title} delay={(i % 3) * 70} className="h-full">
              <Spotlight className="card card-hover h-full p-7">
                <span className="font-mono text-xs text-teal">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="mt-4 text-lg font-semibold text-ink-900">{b.title}</h3>
                <p className="mt-2.5 text-[0.95rem] leading-relaxed text-ink-500">{b.desc}</p>
              </Spotlight>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Process ─────────────────────────────────────────────────────────────── */
export function Process({ service }: { service: Service }) {
  return (
    <section id="process" className="section scroll-mt-40 bg-white">
      <div className="container-x grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        <div className="lg:sticky lg:top-40 lg:self-start">
          <SectionHeading
            align="left"
            eyebrow="How it works"
            title={
              <>
                A clear process, <span className="accent">step by step</span>
              </>
            }
            description="One adviser owns your file from first call to completion, and you always know which step you are on."
            actions={
              <a href="#contact" className="btn-ghost">
                Start with a free consultation <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            }
          />
        </div>
        <Reveal delay={100}>
          <ProcessTimeline steps={service.process} />
        </Reveal>
      </div>
    </section>
  );
}

/* ── Requirements & eligibility ─────────────────────────────────────────── */
export function Requirements({ service }: { service: Service }) {
  const whatsappHref = `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(
    `Hello Smartgic, I have a question about documents for ${service.navLabel}.`,
  )}`;
  return (
    <section id="documents" className="section scroll-mt-40 bg-surface">
      <div className="container-x">
        <SectionHeading
          eyebrow="Before we start"
          title={
            service.eligibility ? (
              <>
                Who it’s for and what <span className="accent">you’ll need</span>
              </>
            ) : (
              <>
                What <span className="accent">you’ll need</span>
              </>
            )
          }
          description="Have these ready and we can move quickly. If something is missing, we will tell you what the authority accepts instead."
        />
        <div className={`mt-14 grid gap-5 ${service.eligibility ? 'lg:grid-cols-[0.9fr_1.1fr]' : 'lg:grid-cols-[1.25fr_0.75fr]'}`}>
          {service.eligibility && (
            <Reveal className="h-full">
              <div className="surface-navy on-dark noise h-full rounded-3xl p-7 sm:p-9">
                <span className="relative z-[2] grid h-11 w-11 place-items-center rounded-2xl bg-white/10 text-brand-cyan">
                  <UserCheck className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="relative z-[2] mt-5 text-xl font-semibold text-white">{service.eligibility.heading}</h3>
                <ul className="relative z-[2] mt-6 space-y-3.5">
                  {service.eligibility.points.map((p) => (
                    <li key={p} className="flex gap-3 text-[0.95rem] leading-relaxed text-slate-300">
                      <Check className="mt-1 h-4 w-4 shrink-0 text-brand-cyan" aria-hidden="true" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          )}
          <Reveal delay={90} className="h-full">
            <div className="card h-full p-7 sm:p-9">
              <span className="grid h-11 w-11 place-items-center rounded-2xl bg-surface-2 text-brand-blue">
                <FileText className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="mt-5 text-xl font-semibold text-ink-900">
                {service.requirementsHeading ?? 'Documents we’ll need'}
              </h3>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {service.requirements.map((req) => (
                  <li key={req} className="flex items-start gap-3 rounded-2xl border border-slate-100 bg-surface/60 p-3.5 text-sm text-ink-700">
                    <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-teal/10">
                      <Check className="h-3 w-3 text-teal" aria-hidden="true" />
                    </span>
                    {req}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          {!service.eligibility && (
            <Reveal delay={160} className="h-full">
              <div className="surface-navy on-dark noise flex h-full flex-col rounded-3xl p-7 sm:p-9">
                <span className="relative z-[2] grid h-11 w-11 place-items-center rounded-2xl bg-white/10 text-brand-cyan">
                  <Info className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="relative z-[2] mt-5 text-xl font-semibold text-white">Missing a document?</h3>
                <p className="relative z-[2] mt-3 flex-1 text-[0.95rem] leading-relaxed text-slate-300">
                  Documents issued abroad usually need attestation, and some can be replaced by alternatives. Send us what
                  you have and we will tell you exactly what is still needed.
                </p>
                <div className="relative z-[2] mt-7 flex flex-col gap-2.5">
                  <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="btn-glass btn-sm">
                    <MessageCircle className="h-4 w-4 text-[#25D366]" aria-hidden="true" /> Ask on WhatsApp
                  </a>
                  <a href={`tel:${company.phoneHref}`} className="btn-glass btn-sm">
                    <Phone className="h-4 w-4 text-brand-cyan" aria-hidden="true" /> {company.phone}
                  </a>
                </div>
              </div>
            </Reveal>
          )}
        </div>
        {service.slug !== 'document-clearing-services' && (
          <Reveal delay={200}>
            <p className="mt-8 text-center text-sm text-ink-400">
              Need documents attested or translated?{' '}
              <Link href="/services/document-clearing-services" className="font-medium text-brand-blue hover:underline">
                Our document clearing team can help
              </Link>
              .
            </p>
          </Reveal>
        )}
      </div>
    </section>
  );
}
