import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { jurisdictionSummaries } from '@/lib/freezones';
import SectionHeading from '../ui/SectionHeading';
import Reveal from '../ui/Reveal';

export default function FreeZones() {
  // Duplicated once so the marquee loop is seamless. The clone is hidden from
  // assistive tech so the zone list is only announced a single time.
  const track = [
    ...jurisdictionSummaries.map((z) => ({ ...z, clone: false })),
    ...jurisdictionSummaries.map((z) => ({ ...z, clone: true })),
  ];

  return (
    <section id="freezones" className="section overflow-hidden bg-white">
      <div className="container-x">
        <SectionHeading
          eyebrow="Where we set you up"
          title={
            <>
              Free zone, mainland or offshore —{' '}
              <span className="gradient-text">we know them all</span>
            </>
          }
          description="Choosing the right jurisdiction is the most important decision you'll make. We match your activity, budget and visa needs to the right licence — then tell you honestly if a cheaper one does the same job."
        />
      </div>

      <Reveal className="mt-14">
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white to-transparent sm:w-24" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white to-transparent sm:w-24" />
          <div className="marquee-track gap-4">
            {track.map((zone, i) => (
              <Link
                key={`${zone.slug}-${i}`}
                href={`/free-zones/${zone.slug}`}
                aria-hidden={zone.clone || undefined}
                tabIndex={zone.clone ? -1 : undefined}
                className="group flex shrink-0 items-center gap-3 rounded-2xl border border-slate-100 bg-slate-50/60 px-6 py-5 shadow-sm transition-colors hover:border-brand-blue/30 hover:bg-white"
              >
                <span className="grid h-9 shrink-0 place-items-center rounded-lg bg-brand-gradient px-2.5 text-xs font-bold text-white">
                  {zone.abbr}
                </span>
                <span className="whitespace-nowrap text-left">
                  <span className="block text-sm font-bold text-ink-900 transition-colors group-hover:text-brand-blue">
                    {zone.abbr}
                  </span>
                  <span className="block text-xs text-ink-400">
                    {zone.emirate} · {zone.costTier}
                  </span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </Reveal>

      <div className="container-x mt-12 text-center">
        <Link href="/free-zones" className="btn-ghost group">
          Compare all {jurisdictionSummaries.length} jurisdictions
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  );
}
