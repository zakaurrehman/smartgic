import { process } from '@/lib/data';
import SectionHeading from '../ui/SectionHeading';
import Reveal from '../ui/Reveal';

export default function Process() {
  return (
    <section id="process" className="section bg-slate-50/70">
      <div className="container-x">
        <SectionHeading
          eyebrow="How it works"
          title={
            <>
              Your business, live in{' '}
              <span className="gradient-text">four simple steps</span>
            </>
          }
          description="No jargon, no runaround. A dedicated relationship manager guides you from first call to active trade licence and visa."
        />

        <div className="relative mt-16">
          {/* connecting line */}
          <div className="absolute left-0 right-0 top-9 hidden h-px bg-gradient-to-r from-transparent via-brand-blue/30 to-transparent lg:block" />

          <div className="grid gap-8 lg:grid-cols-4">
            {process.map((item, i) => (
              <Reveal key={item.step} delay={i * 110}>
                <div className="relative flex flex-col items-start">
                  <div className="relative z-10 grid h-18 w-18 place-items-center rounded-2xl bg-white shadow-soft ring-1 ring-slate-100">
                    <span className="bg-brand-gradient bg-clip-text text-2xl font-extrabold text-transparent">
                      {item.step}
                    </span>
                  </div>
                  <h3 className="mt-6 text-lg font-bold text-ink-900">{item.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-ink-500">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
