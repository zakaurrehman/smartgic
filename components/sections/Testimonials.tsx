import { Quote, Star } from 'lucide-react';
import { testimonials } from '@/lib/data';
import SectionHeading from '../ui/SectionHeading';
import Reveal from '../ui/Reveal';

export default function Testimonials() {
  return (
    <section className="section bg-slate-50/70">
      <div className="container-x">
        <SectionHeading
          eyebrow="Client stories"
          title={
            <>
              Founders worldwide{' '}
              <span className="gradient-text">trust Smartgic</span>
            </>
          }
          description="From first-time entrepreneurs to established groups relocating to the UAE — here's what our clients say about working with us."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 100}>
              <figure className="flex h-full flex-col rounded-2xl border border-slate-100 bg-white p-8 shadow-card">
                <Quote className="h-9 w-9 text-brand-cyan/30" />
                <div className="mt-3 flex gap-0.5">
                  {[...Array(5)].map((_, s) => (
                    <Star key={s} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <blockquote className="mt-4 flex-1 text-[0.95rem] leading-relaxed text-ink-700">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-slate-100 pt-5">
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-brand-gradient-soft text-lg">
                    {t.country}
                  </span>
                  <span>
                    <span className="block text-sm font-bold text-ink-900">{t.name}</span>
                    <span className="block text-xs text-ink-400">{t.role}</span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
