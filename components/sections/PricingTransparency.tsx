import Link from 'next/link';
import { ArrowRight, Landmark, Receipt, ScrollText, Wallet } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import Reveal from '../ui/Reveal';

/**
 * What a published price does and does not include.
 *
 * The packages above quote Smartgic's own starting service price. Visitors
 * routinely assume that figure is the total cost of setting up, so this spells
 * out the separation between our fee and authority fees rather than leaving it
 * to be discovered at quotation stage.
 */

const components = [
  {
    icon: Wallet,
    title: 'Our professional fee',
    desc: 'What you pay Smartgic to do the work — advisory, application, documentation, follow-up and your relationship manager. This is the figure quoted in the packages above.',
    tone: 'included' as const,
  },
  {
    icon: Landmark,
    title: 'Authority & government fees',
    desc: 'Licence, registration, visa, medical and Emirates ID charges set by the authority. We pass these through at the rate the authority charges — we do not mark them up.',
    tone: 'separate' as const,
  },
  {
    icon: ScrollText,
    title: 'Workspace costs',
    desc: 'Flexi-desk, office or warehouse, plus Ejari where a mainland licence requires it. Driven by your visa count and jurisdiction, so it is quoted once those are settled.',
    tone: 'separate' as const,
  },
  {
    icon: Receipt,
    title: 'VAT where applicable',
    desc: 'UAE VAT applies to professional services at the prevailing rate. It is shown as a separate line on your invoice rather than absorbed into the headline figure.',
    tone: 'separate' as const,
  },
];

export default function PricingTransparency() {
  return (
    <section className="section bg-slate-50/70">
      <div className="container-x">
        <SectionHeading
          eyebrow="What you actually pay"
          title={
            <>
              Where every dirham <span className="gradient-text">goes</span>
            </>
          }
          description="A setup quote has more than one component, and plenty of consultancies blur them together. Here is how ours separates out."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {components.map((c, i) => {
            const Icon = c.icon;
            return (
              <Reveal key={c.title} delay={(i % 2) * 80}>
                <div className="h-full rounded-2xl border border-slate-100 bg-white p-7 shadow-card">
                  <div className="flex items-start justify-between gap-3">
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-brand-gradient-soft text-brand-blue">
                      <Icon className="h-5.5 w-5.5" />
                    </span>
                    <span
                      className={`rounded-full border px-2.5 py-1 text-[0.7rem] font-bold ${
                        c.tone === 'included'
                          ? 'border-emerald-200 bg-emerald-50 text-emerald-700'
                          : 'border-slate-200 bg-slate-50 text-ink-500'
                      }`}
                    >
                      {c.tone === 'included' ? 'In the package price' : 'Quoted separately'}
                    </span>
                  </div>
                  <h3 className="mt-5 text-base font-bold text-ink-900">{c.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-500">{c.desc}</p>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={120}>
          <p className="mx-auto mt-10 max-w-3xl rounded-2xl border border-slate-200 bg-white p-6 text-center text-sm leading-relaxed text-ink-500">
            Package prices are indicative starting points for our service charge, not quotations.
            Your written quote itemises every component so you can see exactly what goes to the
            authority and what goes to us — before you commit to anything.
          </p>
        </Reveal>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link href="/cost-estimator" className="btn-gradient group">
            Build an indicative estimate
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link href="/contact" className="btn-ghost">
            Get an itemised quote
          </Link>
        </div>
      </div>
    </section>
  );
}
