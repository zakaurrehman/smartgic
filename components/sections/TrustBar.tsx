import Reveal from '../ui/Reveal';

const authorities = [
  'Dubai Economy & Tourism',
  'GDRFA Dubai',
  'MOHRE',
  'Dubai Courts',
  'DMCC',
  'IFZA',
  'Federal Tax Authority',
];

export default function TrustBar() {
  return (
    <section className="border-b border-slate-100 bg-white py-10">
      <div className="container-x">
        <Reveal>
          <p className="text-center text-xs font-semibold uppercase tracking-[0.18em] text-ink-400">
            Trusted liaison with UAE government authorities & free zones
          </p>
        </Reveal>
        <Reveal delay={100}>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 sm:gap-x-12">
            {authorities.map((name) => (
              <span
                key={name}
                className="text-sm font-bold tracking-tight text-ink-700/70 transition-colors hover:text-brand-blue sm:text-base"
              >
                {name}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
