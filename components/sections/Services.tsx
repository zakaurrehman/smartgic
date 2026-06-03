import { ArrowUpRight } from 'lucide-react';
import { services } from '@/lib/data';
import SectionHeading from '../ui/SectionHeading';
import Reveal from '../ui/Reveal';

export default function Services() {
  return (
    <section id="services" className="section relative bg-slate-50/70">
      <div className="container-x">
        <SectionHeading
          eyebrow="What we do"
          title={
            <>
              Everything you need to start &amp;{' '}
              <span className="gradient-text">run a UAE business</span>
            </>
          }
          description="One licensed partner for your entire journey — formation, visas, PRO, tax and banking — so you can focus on growth while we handle the paperwork."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <Reveal key={service.title} delay={(i % 3) * 80}>
                <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-brand-blue/20 hover:shadow-soft">
                  <div className="absolute right-0 top-0 h-24 w-24 -translate-y-8 translate-x-8 rounded-full bg-brand-gradient-soft opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="relative flex items-center justify-between">
                    <div className="grid h-13 w-13 place-items-center rounded-xl bg-brand-gradient-soft p-3 text-brand-blue transition-colors duration-300 group-hover:bg-brand-gradient group-hover:text-white">
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-wider text-ink-400">
                      {service.tag}
                    </span>
                  </div>
                  <h3 className="relative mt-5 text-lg font-bold text-ink-900">
                    {service.title}
                  </h3>
                  <p className="relative mt-2.5 flex-1 text-sm leading-relaxed text-ink-500">
                    {service.desc}
                  </p>
                  <a
                    href="#contact"
                    className="relative mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-blue opacity-0 transition-all duration-300 group-hover:opacity-100"
                  >
                    Enquire now <ArrowUpRight className="h-4 w-4" />
                  </a>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
