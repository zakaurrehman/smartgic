import Link from 'next/link';
import { ArrowRight, Landmark, Receipt, ScrollText, Wallet } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import Reveal from '../ui/Reveal';
import Spotlight from '../ui/Spotlight';

/**
 * What a published price does and does not include. The packages quote
 * Smartgic's own starting service fee; visitors often assume that figure is the
 * total cost of setting up, so this spells out the separation.
 */
const components = [
  {
    icon: Wallet,
    title: 'Our professional fee',
    desc: 'What you pay Smartgic to do the work — advice, applications, documents, follow-up and your adviser. This is the figure quoted in the packages.',
    included: true,
  },
  {
    icon: Landmark,
    title: 'Authority & government fees',
    desc: 'Licence, registration, visa, medical and Emirates ID charges set by each authority. We pass these through at the rate charged — we do not mark them up.',
    included: false,
  },
  {
    icon: ScrollText,
    title: 'Workspace costs',
    desc: 'Flexi-desk, office or warehouse, plus Ejari where a mainland licence needs it. Driven by your visa count and jurisdiction, so quoted once those are settled.',
    included: false,
  },
  {
    icon: Receipt,
    title: 'VAT where it applies',
    desc: 'UAE VAT applies to professional services at the standard rate. It appears as its own line on your invoice rather than being hidden in the headline figure.',
    included: false,
  },
];

export default function PricingTransparency() {
  return (
    <section className="section-lg bg-surface">
      <div className="container-x">
        <SectionHeading
          eyebrow="What you actually pay"
          title={
            <>
              Where every dirham <span className="accent">goes</span>
            </>
          }
          description="A setup quote has more than one component, and plenty of consultancies blur them together. Here is how ours separates out."
        />
        <div className="mt-14 grid gap-4 sm:grid-cols-2">
          {components.map((c, i) => {
            const Icon = c.icon;
            return (
              <Reveal key={c.title} delay={(i % 2) * 70} className="h-full">
                <Spotlight className="card h-full p-7">
                  <div className="flex items-start justify-between gap-3">
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-surface-2 text-brand-blue">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span
                      className={`rounded-full px-3 py-1 font-mono text-[0.65rem] uppercase tracking-[0.12em] ${
                        c.included ? 'bg-teal/10 text-teal' : 'bg-surface-2 text-ink-500'
                      }`}
                    >
                      {c.included ? 'In the package price' : 'Quoted separately'}
                    </span>
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-ink-900">{c.title}</h3>
                  <p className="mt-2 text-[0.95rem] leading-relaxed text-ink-500">{c.desc}</p>
                </Spotlight>
              </Reveal>
            );
          })}
        </div>
        <Reveal delay={120}>
          <p className="mx-auto mt-10 max-w-3xl rounded-3xl border border-slate-200/80 bg-white p-6 text-center text-sm leading-relaxed text-ink-500">
            Package prices are starting points for our service fee, not quotations. Your written quote itemises every
            component so you can see exactly what goes to the authority and what comes to us — before you commit.
          </p>
        </Reveal>
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link href="/cost-estimator" className="btn-primary">
            Build an indicative estimate <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
          <a href="#contact" className="btn-ghost">
            Get an itemised quote
          </a>
        </div>
      </div>
    </section>
  );
}
