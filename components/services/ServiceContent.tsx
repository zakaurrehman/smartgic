import { Check, CircleCheck } from 'lucide-react';
import type { Service } from '@/lib/services';
import SectionHeading from '../ui/SectionHeading';
import Reveal from '../ui/Reveal';

export function Overview({ service }: { service: Service }) {
  return (
    <section className="section bg-white">
      <div className="container-x grid gap-12 lg:grid-cols-[1fr_0.85fr] lg:items-center lg:gap-16">
        <div>
          <Reveal>
            <span className="eyebrow">Overview</span>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-5 text-3xl font-extrabold leading-tight sm:text-4xl">
              {service.overview.heading}
            </h2>
          </Reveal>
          {service.overview.body.map((para, i) => (
            <Reveal key={i} delay={140 + i * 60}>
              <p className="mt-5 text-base leading-relaxed text-ink-500 sm:text-[1.05rem]">{para}</p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <div className="relative overflow-hidden rounded-3xl border border-slate-100 bg-slate-50/70 p-8 shadow-card">
            <div className="pointer-events-none absolute right-[-10%] top-[-20%] h-48 w-48 rounded-full bg-brand-gradient-soft blur-2xl" />
            <p className="relative text-sm font-semibold uppercase tracking-wider text-brand-cyan-dark">
              At a glance
            </p>
            <div className="relative mt-5 grid grid-cols-2 gap-4">
              {service.stats.map((s) => (
                <div key={s.label} className="rounded-2xl border border-slate-100 bg-white p-5 text-center shadow-sm">
                  <p className="bg-brand-gradient bg-clip-text text-2xl font-extrabold tracking-tight text-transparent sm:text-3xl">
                    {s.value}
                  </p>
                  <p className="mt-1 text-xs text-ink-500">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Benefits({ service }: { service: Service }) {
  return (
    <section className="section bg-slate-50/70">
      <div className="container-x">
        <SectionHeading
          eyebrow="Why it matters"
          title={
            <>
              Key benefits of <span className="gradient-text">{service.navLabel.toLowerCase()}</span>
            </>
          }
          description="What you gain when Smartgic handles this for you — clarity, compliance and speed at every step."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {service.benefits.map((b, i) => (
            <Reveal key={b.title} delay={(i % 3) * 80}>
              <div className="group h-full rounded-2xl border border-slate-100 bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-brand-blue/20 hover:shadow-soft">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-brand-gradient-soft text-brand-blue transition-colors duration-300 group-hover:bg-brand-gradient group-hover:text-white">
                  <CircleCheck className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-base font-bold text-ink-900">{b.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-500">{b.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Process({ service }: { service: Service }) {
  return (
    <section className="section bg-white">
      <div className="container-x">
        <SectionHeading
          eyebrow="How it works"
          title={
            <>
              A clear, <span className="gradient-text">step-by-step</span> process
            </>
          }
          description="No jargon, no surprises. Here's exactly how we deliver, with a dedicated manager guiding you throughout."
        />

        <div className="relative mt-16">
          <div className="absolute left-[27px] top-2 bottom-2 w-px bg-gradient-to-b from-brand-cyan/40 via-brand-blue/30 to-transparent lg:hidden" />
          <div className="absolute left-0 right-0 top-9 hidden h-px bg-gradient-to-r from-transparent via-brand-blue/30 to-transparent lg:block" />

          <div className="grid gap-8 lg:grid-cols-4">
            {service.process.map((step, i) => (
              <Reveal key={step.title} delay={i * 100}>
                <div className="relative flex gap-5 lg:flex-col lg:gap-0">
                  <div className="relative z-10 grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-white shadow-soft ring-1 ring-slate-100">
                    <span className="bg-brand-gradient bg-clip-text text-xl font-extrabold text-transparent">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <div className="lg:mt-6">
                    <h3 className="text-base font-bold text-ink-900">{step.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-500">{step.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Requirements({ service }: { service: Service }) {
  return (
    <section className="section bg-slate-50/70">
      <div className="container-x grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-16">
        <div>
          <SectionHeading
            align="left"
            eyebrow="What you'll need"
            title={
              <>
                Documents &amp; <span className="gradient-text">requirements</span>
              </>
            }
            description="Have these ready and we'll move fast. Missing something? We'll guide you on alternatives and attestation."
          />
        </div>
        <Reveal delay={120}>
          <ul className="grid gap-3 sm:grid-cols-2">
            {service.requirements.map((req) => (
              <li
                key={req}
                className="flex items-start gap-3 rounded-2xl border border-slate-100 bg-white p-4 shadow-sm"
              >
                <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-brand-cyan/15">
                  <Check className="h-3.5 w-3.5 text-brand-cyan-dark" />
                </span>
                <span className="text-sm font-medium text-ink-700">{req}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
