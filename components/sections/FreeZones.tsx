import { freeZones } from '@/lib/data';
import SectionHeading from '../ui/SectionHeading';
import Reveal from '../ui/Reveal';

export default function FreeZones() {
  const doubled = [...freeZones, ...freeZones];

  return (
    <section id="freezones" className="section overflow-hidden bg-white">
      <div className="container-x">
        <SectionHeading
          eyebrow="Where we set you up"
          title={
            <>
              40+ free zones &amp; mainland —{' '}
              <span className="gradient-text">we know them all</span>
            </>
          }
          description="Choosing the right jurisdiction is the most important decision you'll make. We match your activity, budget and visa needs to the perfect free zone or mainland licence."
        />
      </div>

      <Reveal className="mt-14">
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-white to-transparent" />
          <div className="marquee-track gap-4">
            {doubled.map((zone, i) => (
              <div
                key={`${zone}-${i}`}
                className="flex shrink-0 items-center gap-3 rounded-2xl border border-slate-100 bg-slate-50/60 px-7 py-5 shadow-sm"
              >
                <span className="grid h-9 w-9 place-items-center rounded-lg bg-brand-gradient text-xs font-bold text-white">
                  {zone.slice(0, 2)}
                </span>
                <span className="whitespace-nowrap text-base font-bold text-ink-900">
                  {zone}
                </span>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
