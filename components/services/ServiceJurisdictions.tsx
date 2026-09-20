import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { featuredZoneSlugs, jurisdictionsBySlug } from '@/lib/freezones';
import SectionHeading from '../ui/SectionHeading';
import Reveal from '../ui/Reveal';

/**
 * Service → jurisdiction cross-link band.
 *
 * Every corporate service ultimately attaches to a licence in a specific
 * jurisdiction, so this gives visitors a route from "what I need done" to
 * "where it gets done" without going back to the navigation.
 */
export default function ServiceJurisdictions({ label }: { label: string }) {
  const zones = featuredZoneSlugs
    .slice(0, 6)
    .map((slug) => jurisdictionsBySlug[slug])
    .filter(Boolean);

  if (zones.length === 0) return null;

  return (
    <section className="section bg-slate-50/70">
      <div className="container-x">
        <SectionHeading
          eyebrow="Where we do this"
          title={
            <>
              {label} across <span className="gradient-text">every UAE jurisdiction</span>
            </>
          }
          description="Free zone, mainland or offshore — the jurisdiction changes the process, the fees and what you are allowed to do. These are the ones clients ask about most."
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {zones.map((z, i) => (
            <Reveal key={z.slug} delay={(i % 3) * 70}>
              <Link
                href={`/free-zones/${z.slug}`}
                className="group flex h-full items-start gap-4 rounded-2xl border border-slate-100 bg-white p-5 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-brand-blue/20 hover:shadow-soft"
              >
                <span className="grid h-11 shrink-0 place-items-center rounded-xl bg-brand-gradient px-2.5 text-xs font-extrabold text-white">
                  {z.abbr}
                </span>
                <span className="min-w-0">
                  <span className="block text-sm font-bold text-ink-900 group-hover:text-brand-blue">
                    {z.name.split(' — ')[0]}
                  </span>
                  <span className="mt-0.5 block text-xs text-ink-400">
                    {z.emirate} · {z.category} · {z.costTier}
                  </span>
                  <span className="mt-2 block text-sm leading-relaxed text-ink-500">
                    {z.tagline}
                  </span>
                </span>
              </Link>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link href="/free-zones" className="btn-ghost group">
            Compare all jurisdictions
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link href="/cost-estimator" className="btn-gradient group">
            Find the right one for me
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
