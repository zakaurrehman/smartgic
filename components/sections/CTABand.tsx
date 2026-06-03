import { ArrowRight, PhoneCall } from 'lucide-react';
import { company } from '@/lib/data';
import Reveal from '../ui/Reveal';

export default function CTABand() {
  return (
    <section className="bg-white pb-4">
      <div className="container-x">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-brand-gradient px-7 py-12 text-center sm:px-12 lg:py-16">
            <div className="pointer-events-none absolute inset-0 dot-pattern opacity-30" />
            <div className="relative mx-auto max-w-2xl">
              <h2 className="text-balance text-3xl font-extrabold leading-tight !text-white sm:text-4xl">
                Ready to start your Dubai business?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-base text-white/85">
                Get a free, no-obligation consultation today. Clear advice, transparent pricing and
                a team that handles the rest.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <a href="#contact" className="btn-white group">
                  Get started now
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
                <a
                  href={`tel:${company.phoneHref}`}
                  className="btn inline-flex border border-white/40 bg-white/10 text-white backdrop-blur hover:bg-white/20"
                >
                  <PhoneCall className="h-4 w-4" /> {company.phone}
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
