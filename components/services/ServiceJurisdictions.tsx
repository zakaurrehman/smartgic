import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { featuredZoneSlugs, jurisdictionsBySlug, jurisdictionSlugs } from '@/lib/freezones';
import SectionHeading from '../ui/SectionHeading';
import Reveal from '../ui/Reveal';

/**
 * Service → jurisdiction cross-links, for setup, corporate and licensing
 * services, where the jurisdiction changes the process, fees and permissions.
 */
export default function ServiceJurisdictions({ label }: { label: string }) {
  const zones = featuredZoneSlugs
    .slice(0, 6)
    .map((slug) => jurisdictionsBySlug[slug])
    .filter(Boolean);
  if (zones.length === 0) return null;

  return (
    <section className="section bg-white">
      <div className="container-x">
        <SectionHeading
          eyebrow="Where we do this"
          title={
            <>
              {label} across <span className="accent">every jurisdiction</span>
            </>
          }
          description="Free zone, mainland or offshore — the jurisdiction changes the process, the fees and what you are allowed to do. These are the ones clients ask about most."
        />
        <div className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {zones.map((z, i) => (
            <Reveal key={z.slug} delay={(i % 3) * 60} className="h-full">
              <Link
                href={`/free-zones/${z.slug}`}
                className="group card card-hover flex h-full items-start gap-4 p-5"
              >
                <span className="grid h-11 min-w-[3rem] shrink-0 place-items-center rounded-xl bg-navy-900 px-2 font-mono text-[0.7rem] font-medium text-white transition-colors group-hover:bg-brand-blue">
                  {z.abbr}
                </span>
                <span className="min-w-0 flex-1">
                  <span className="flex items-center justify-between gap-2 text-sm font-semibold text-ink-900">
                    {z.name.split(' — ')[0]}
                    <ArrowUpRight className="h-4 w-4 shrink-0 text-ink-400 transition-colors group-hover:text-brand-blue" aria-hidden="true" />
                  </span>
                  <span className="mt-0.5 block text-xs text-ink-400">
                    {z.emirate} · {z.category} · {z.costTier}
                  </span>
                  <span className="mt-2 block text-sm leading-relaxed text-ink-500">{z.tagline}</span>
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link href="/free-zones" className="btn-ghost">
            Compare all {jurisdictionSlugs.length} jurisdictions <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
          <Link href="/cost-estimator" className="btn-primary">
            Find the right one for me <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
