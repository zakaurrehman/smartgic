import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { categories, type CategorySlug } from '@/lib/catalog';
import { servicesBySlug } from '@/lib/services';
import { categoryImages } from '@/lib/site-images';
import { authorities } from '@/lib/data';
import { cn } from '@/lib/cn';
import SectionHeading from '../ui/SectionHeading';
import Reveal from '../ui/Reveal';
import Spotlight from '../ui/Spotlight';
import TiltCard from '../ui/TiltCard';
import Marquee from '../ui/Marquee';

/** Names of the authorities and zones we file with — names only, no logos. */
export function AuthorityStrip() {
  return (
    <section className="border-b border-slate-200/70 bg-white py-10" aria-label="Authorities we work with">
      <div className="container-wide">
        <p className="text-center font-mono text-[0.68rem] uppercase tracking-[0.2em] text-ink-400">
          Applications we prepare and file with
        </p>
        <Marquee className="mt-7" duration={55} itemClassName="px-6">
          {authorities.map((name) => (
            <span key={name} className="whitespace-nowrap text-[1.05rem] font-semibold tracking-tight text-ink-500">
              {name}
            </span>
          ))}
        </Marquee>
      </div>
    </section>
  );
}

/** Bento layout: which categories get the large, photo-led tiles. */
const layout: Record<CategorySlug, string> = {
  'business-setup': 'lg:col-span-2 lg:row-span-2',
  'tax-services': 'lg:col-span-2',
  'visa-immigration': '',
  'accounting-bookkeeping': '',
  'corporate-services': '',
  'licensing-government': '',
  'compliance-risk': '',
  'audit-assurance': '',
};
const photoTiles = new Set<CategorySlug>(['business-setup', 'tax-services', 'visa-immigration']);

/** The eight practice areas as a bento grid. */
export default function PracticeAreas() {
  return (
    <section id="services" className="section-lg scroll-mt-24 bg-white">
      <div className="container-wide">
        <SectionHeading
          eyebrow="Practice areas"
          title={
            <>
              Everything a UAE company needs, <span className="accent">under one roof</span>
            </>
          }
          description="From the first licence to the annual audit — eight practice areas, one team that already knows your file."
        />

        <div className="mt-16 grid auto-rows-[minmax(250px,auto)] gap-4 sm:grid-cols-2 lg:grid-flow-dense lg:grid-cols-4">
          {categories.map((c, i) => {
            const Icon = c.icon;
            const photo = photoTiles.has(c.slug) ? categoryImages[c.slug] : undefined;
            const big = c.slug === 'business-setup';
            const top = c.services.slice(0, big ? 5 : 3).map((s) => servicesBySlug[s]).filter(Boolean);
            return (
              <Reveal key={c.slug} delay={(i % 4) * 70} className={cn('h-full', layout[c.slug])}>
                <TiltCard className="h-full rounded-[1.75rem]" max={big ? 3 : 5}>
                  {photo ? (
                    <Link
                      href={`/services/${c.slug}`}
                      className="group relative flex h-full min-h-[250px] flex-col justify-end overflow-hidden rounded-[1.75rem] bg-navy-900 p-6 text-white sm:p-7"
                    >
                      <Image
                        src={photo.src}
                        alt=""
                        fill
                        sizes={big ? '(min-width: 1024px) 50vw, 100vw' : '(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw'}
                        className="object-cover transition-transform duration-[1200ms] ease-premium group-hover:scale-105"
                        style={{ objectPosition: photo.position ?? '50% 50%' }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/70 to-navy-950/10" />
                      <div className="relative">
                        <div className="flex items-center justify-between">
                          <span className="grid h-11 w-11 place-items-center rounded-2xl bg-white/15 backdrop-blur-md">
                            <Icon className="h-5 w-5" aria-hidden="true" />
                          </span>
                          <span className="chip-dark">{c.services.length} services</span>
                        </div>
                        <h3 className={cn('mt-5 font-semibold text-white', big ? 'text-display-md' : 'text-xl')}>{c.label}</h3>
                        <p className={cn('mt-2 max-w-md text-sm leading-relaxed text-slate-300', !big && 'line-clamp-2')}>{c.tagline}</p>
                        {big && (
                          <ul className="mt-5 flex flex-wrap gap-2">
                            {top.map((s) => (
                              <li key={s.slug} className="chip-dark">
                                {s.navLabel}
                              </li>
                            ))}
                          </ul>
                        )}
                        <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-brand-cyan">
                          Explore {c.short}
                          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
                        </span>
                      </div>
                    </Link>
                  ) : (
                    <Spotlight className="h-full rounded-[1.75rem]">
                      <Link
                        href={`/services/${c.slug}`}
                        className="group card flex h-full flex-col rounded-[1.75rem] p-6 transition-colors hover:border-brand-blue/30 sm:p-7"
                      >
                        <div className="flex items-center justify-between">
                          <span className="grid h-11 w-11 place-items-center rounded-2xl bg-surface-2 text-brand-blue transition-colors duration-300 group-hover:bg-brand-blue group-hover:text-white">
                            <Icon className="h-5 w-5" aria-hidden="true" />
                          </span>
                          <span className="font-mono text-[0.68rem] text-ink-400">{c.services.length} services</span>
                        </div>
                        <h3 className="mt-5 text-xl font-semibold text-ink-900 group-hover:text-brand-blue">{c.label}</h3>
                        <ul className="mt-3 flex-1 space-y-1.5 text-sm text-ink-500">
                          {top.map((s) => (
                            <li key={s.slug} className="flex items-center gap-2">
                              <span className="h-1 w-1 rounded-full bg-brand-cyan" aria-hidden="true" />
                              {s.navLabel}
                            </li>
                          ))}
                        </ul>
                        <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-brand-blue">
                          View all
                          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
                        </span>
                      </Link>
                    </Spotlight>
                  )}
                </TiltCard>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
