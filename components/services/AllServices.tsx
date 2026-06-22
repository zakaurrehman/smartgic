import { ArrowUpRight } from 'lucide-react';
import { services } from '@/lib/services';
import SectionHeading from '../ui/SectionHeading';
import Reveal from '../ui/Reveal';

export default function AllServices() {
  return (
    <section id="services" className="section bg-white">
      <div className="container-x">
        <SectionHeading
          eyebrow="Corporate Services"
          title={
            <>
              One licensed partner for your{' '}
              <span className="gradient-text">entire UAE journey</span>
            </>
          }
          description="From company formation and visas to PRO, banking and workspace — explore our full suite of Dubai corporate services, each handled end to end."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <Reveal key={service.slug} delay={(i % 3) * 70}>
                <a
                  href={`/services/${service.slug}`}
                  className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-brand-blue/20 hover:shadow-soft"
                >
                  <div className="absolute right-0 top-0 h-24 w-24 -translate-y-8 translate-x-8 rounded-full bg-brand-gradient-soft opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="relative flex items-center justify-between">
                    <div className="grid h-12 w-12 place-items-center rounded-xl bg-brand-gradient-soft text-brand-blue transition-colors duration-300 group-hover:bg-brand-gradient group-hover:text-white">
                      <Icon className="h-6 w-6" />
                    </div>
                    <ArrowUpRight className="h-5 w-5 text-ink-400 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand-blue" />
                  </div>
                  <h3 className="relative mt-5 text-lg font-bold text-ink-900">{service.navLabel}</h3>
                  <p className="relative mt-2.5 flex-1 text-sm leading-relaxed text-ink-500">
                    {service.heroSubtitle.split('. ')[0]}.
                  </p>
                  <span className="relative mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-blue">
                    Learn more
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </a>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
