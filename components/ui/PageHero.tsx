import { ArrowRight, Phone, Sparkles } from 'lucide-react';
import { company } from '@/lib/data';
import Breadcrumbs, { type Crumb } from './Breadcrumbs';

export default function PageHero({
  eyebrow,
  title,
  subtitle,
  crumbs,
}: {
  eyebrow: string;
  title: React.ReactNode;
  subtitle: string;
  crumbs: Crumb[];
}) {
  return (
    <section className="relative overflow-hidden bg-brand-navy pt-[72px] text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="aurora left-[-10%] top-[-10%] h-[360px] w-[360px] bg-brand-cyan/40" />
        <div className="aurora right-[-8%] top-[0%] h-[440px] w-[440px] bg-brand-blue/50" />
        <div className="absolute inset-0 grid-pattern opacity-[0.5]" />
      </div>

      <div className="container-x relative pb-16 pt-10 text-center sm:pb-20 lg:pb-24 lg:pt-14">
        <div className="flex justify-center">
          <Breadcrumbs light items={crumbs} />
        </div>

        <span className="mt-7 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-brand-cyan backdrop-blur">
          <Sparkles className="h-3.5 w-3.5" />
          {eyebrow}
        </span>

        <h1 className="mx-auto mt-6 max-w-3xl text-balance text-3xl font-extrabold leading-[1.1] tracking-tight !text-white sm:text-4xl lg:text-[2.9rem]">
          {title}
        </h1>

        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
          {subtitle}
        </p>

        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a href="#contact" className="btn-gradient group w-full sm:w-auto">
            Get a Free Consultation
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a href={`tel:${company.phoneHref}`} className="btn-white w-full sm:w-auto">
            <Phone className="h-4 w-4" /> {company.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
