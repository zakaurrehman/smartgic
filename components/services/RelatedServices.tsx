import { ArrowUpRight } from 'lucide-react';
import { getService } from '@/lib/services';
import SectionHeading from '../ui/SectionHeading';
import Reveal from '../ui/Reveal';

export default function RelatedServices({ slugs }: { slugs: string[] }) {
  const related = slugs.map(getService).filter(Boolean);
  if (related.length === 0) return null;

  return (
    <section className="section bg-white">
      <div className="container-x">
        <SectionHeading
          eyebrow="Keep exploring"
          title={
            <>
              Related <span className="gradient-text">corporate services</span>
            </>
          }
          description="Most clients combine these. We bundle them into one seamless engagement with a single point of contact."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((service, i) => {
            const Icon = service!.icon;
            return (
              <Reveal key={service!.slug} delay={(i % 3) * 80}>
                <a
                  href={`/services/${service!.slug}`}
                  className="group flex h-full flex-col rounded-2xl border border-slate-100 bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-brand-blue/20 hover:shadow-soft"
                >
                  <div className="flex items-center justify-between">
                    <div className="grid h-12 w-12 place-items-center rounded-xl bg-brand-gradient-soft text-brand-blue transition-colors duration-300 group-hover:bg-brand-gradient group-hover:text-white">
                      <Icon className="h-6 w-6" />
                    </div>
                    <ArrowUpRight className="h-5 w-5 text-ink-400 transition-all duration-300 group-hover:text-brand-blue group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-ink-900">{service!.navLabel}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-500">
                    {service!.heroSubtitle.split('. ')[0]}.
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-blue">
                    Learn more
                    <ArrowUpRight className="h-4 w-4" />
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
