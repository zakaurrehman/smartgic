import Image from 'next/image';
import Link from 'next/link';
import { ShieldCheck } from 'lucide-react';
import { company, stats, whyUs } from '@/lib/data';
import { siteImages } from '@/lib/site-images';
import SectionHeading from '../ui/SectionHeading';
import Reveal from '../ui/Reveal';

const photo = siteImages.dubaiDeskUaeFlag;
const nationalities = stats.find((s) => s.label === 'Nationalities Served');

export default function WhyUs() {
  return (
    <section className="section bg-white">
      <div className="container-x grid gap-14 lg:grid-cols-2 lg:items-center lg:gap-16">
        {/* Photo — after the copy on mobile, beside it from lg up */}
        <Reveal className="order-last lg:order-first">
          <div className="relative mx-auto max-w-md lg:max-w-none">
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-slate-100 shadow-soft">
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                placeholder="blur"
                sizes="(min-width: 1280px) 560px, (min-width: 1024px) 45vw, (min-width: 480px) 448px, 100vw"
                className="object-cover"
              />
            </div>

            {/* Credential badge — real licence data, not decoration */}
            <div className="absolute -bottom-5 left-4 flex items-center gap-3 rounded-2xl border border-slate-100 bg-white px-4 py-3 shadow-soft sm:-left-6 sm:bottom-10">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-brand-gradient text-white">
                <ShieldCheck className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <p className="text-[0.65rem] font-semibold uppercase tracking-wider text-ink-400">
                  Licensed by Dubai DET
                </p>
                <p className="text-base font-extrabold tracking-tight text-ink-900">
                  No. {company.licenseNo}
                </p>
              </div>
            </div>

            {nationalities && (
              <div className="absolute -right-3 top-8 hidden rounded-2xl bg-brand-navy px-5 py-4 text-white shadow-soft sm:block">
                <p className="text-2xl font-extrabold leading-none tracking-tight">
                  {nationalities.value}
                </p>
                <p className="mt-1 text-xs text-slate-300">nationalities served</p>
              </div>
            )}
          </div>
        </Reveal>

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

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {whyUs.map((item, i) => {
              const Icon = item.icon;
              return (
                <Reveal key={item.title} delay={i * 90}>
                  <div className="group h-full rounded-2xl border border-slate-100 bg-slate-50/60 p-6 transition-all duration-300 hover:border-brand-blue/20 hover:bg-white hover:shadow-card">
                    <div className="grid h-11 w-11 place-items-center rounded-xl bg-white text-brand-blue shadow-sm ring-1 ring-slate-100 transition-colors group-hover:bg-brand-gradient group-hover:text-white">
                      <Icon className="h-5.5 w-5.5" />
                    </div>
                    <h3 className="mt-4 text-base font-bold text-ink-900">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-500">{item.desc}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>

          <Reveal delay={160}>
            <div className="mt-9 flex flex-wrap gap-4">
              <a href="#contact" className="btn-primary">
                Talk to an advisor
              </a>
              {/* An absolute path, because this section also renders on /about,
                  which has no #services section of its own. */}
              <Link href="/services#services" className="btn-ghost">
                Explore services
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
