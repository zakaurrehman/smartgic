import { whyUs } from '@/lib/data';
import SectionHeading from '../ui/SectionHeading';
import Reveal from '../ui/Reveal';

export default function WhyUs() {
  return (
    <section className="section bg-white">
      <div className="container-x grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16">
        <div>
          <SectionHeading
            align="left"
            eyebrow="Why Smartgic"
            title={
              <>
                A licensed Dubai partner that{' '}
                <span className="gradient-text">actually answers</span>
              </>
            }
            description="We're not a lead-generation middleman. We're a licensed UAE consultancy that owns your file from day one — responsive, transparent and accountable for the outcome."
          />
          <Reveal delay={160}>
            <div className="mt-9 flex flex-wrap gap-4">
              <a href="#contact" className="btn-primary">
                Talk to an advisor
              </a>
              <a href="#services" className="btn-ghost">
                Explore services
              </a>
            </div>
          </Reveal>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {whyUs.map((item, i) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.title} delay={i * 90}>
                <div className="group h-full rounded-2xl border border-slate-100 bg-slate-50/60 p-7 transition-all duration-300 hover:border-brand-blue/20 hover:bg-white hover:shadow-card">
                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-white text-brand-blue shadow-sm ring-1 ring-slate-100 transition-colors group-hover:bg-brand-gradient group-hover:text-white">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-base font-bold text-ink-900">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-500">{item.desc}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
