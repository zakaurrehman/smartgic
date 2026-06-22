import { ArrowRight, CheckCircle2, Phone, Sparkles } from 'lucide-react';
import type { Service } from '@/lib/services';
import { company } from '@/lib/data';
import Breadcrumbs from '../ui/Breadcrumbs';

export default function ServiceHero({ service }: { service: Service }) {
  const Icon = service.icon;

  return (
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
            { label: 'Corporate Services', href: '/#services' },
            { label: service.navLabel },
          ]}
        />

        <div className="mt-8 grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-10">
          {/* Left */}
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-brand-cyan backdrop-blur">
              <Sparkles className="h-3.5 w-3.5" />
              {service.eyebrow}
            </span>

            <h1 className="mt-6 text-balance text-3xl font-extrabold leading-[1.08] tracking-tight !text-white sm:text-4xl lg:text-[2.9rem]">
              {service.title}
            </h1>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg">
              {service.heroSubtitle}
            </p>

            <ul className="mt-7 flex flex-wrap gap-x-6 gap-y-2">
              {service.heroHighlights.map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm font-medium text-slate-200">
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
              <a href={`tel:${company.phoneHref}`} className="btn-white w-full sm:w-auto">
                <Phone className="h-4 w-4" /> {company.phone}
              </a>
            </div>
          </div>

          {/* Right: icon feature card */}
          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div className="relative rounded-3xl border border-white/15 bg-white/[0.07] p-6 shadow-2xl backdrop-blur-xl sm:p-8">
              <div className="flex items-center gap-4">
                <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-brand-gradient shadow-glow">
                  <Icon className="h-7 w-7 text-white" />
                </div>
                <div className="min-w-0">
                  <p className="text-base font-bold text-white">{service.navLabel}</p>
                  <p className="text-xs text-slate-400">Smartgic Corporate Services</p>
                </div>
              </div>

              <div className="mt-7 grid grid-cols-2 gap-3 sm:gap-4">
                {service.stats.map((s) => (
                  <div
                    key={s.label}
                    className="min-w-0 rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-center"
                  >
                    <p className="text-2xl font-extrabold tracking-tight text-white">{s.value}</p>
                    <p className="mt-1 text-xs text-slate-400">{s.label}</p>
                  </div>
                ))}
              </div>

              <a
                href="#contact"
                className="mt-7 flex items-center justify-center gap-2 rounded-xl bg-white/10 px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/15"
              >
                Speak to an advisor <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
