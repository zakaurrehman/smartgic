import Link from 'next/link';
import {
  ArrowRight,
  Boxes,
  Building,
  HeartPulse,
  Laptop,
  Megaphone,
  Ship,
  ShoppingCart,
  UtensilsCrossed,
  Wallet,
} from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import Reveal from '../ui/Reveal';

/**
 * Sector entry points. Each card links into the jurisdiction directory
 * pre-searched for that sector, so a visitor who knows their industry but not
 * the UAE landscape lands somewhere useful in one click.
 */
const industries = [
  {
    icon: Boxes,
    title: 'Trading & distribution',
    desc: 'General trading, import/export and wholesale — from a single-activity licence to port-adjacent warehousing.',
  },
  {
    icon: ShoppingCart,
    title: 'E-commerce & retail',
    desc: 'Online stores, marketplaces and dropshipping, with the activity codes that keep payment gateways happy.',
  },
  {
    icon: Laptop,
    title: 'Technology & SaaS',
    desc: 'Software, IT services and AI businesses, including the tech clusters where your talent already is.',
  },
  {
    icon: Ship,
    title: 'Logistics & freight',
    desc: 'Freight forwarding, fulfilment and storage, matched to the port or airport your goods actually move through.',
  },
  {
    icon: Building,
    title: 'Real estate & construction',
    desc: 'Brokerage, development and contracting, including the mainland licences these activities usually require.',
  },
  {
    icon: Wallet,
    title: 'Finance & family offices',
    desc: 'Asset management, funds and wealth structures in the UAE’s common-law financial centres.',
  },
  {
    icon: Megaphone,
    title: 'Media & creative',
    desc: 'Agencies, production, content and design — including freelance permits for solo practitioners.',
  },
  {
    icon: UtensilsCrossed,
    title: 'F&B & hospitality',
    desc: 'Restaurants, cafés and cloud kitchens, where mainland licensing and municipality approvals apply.',
  },
  {
    icon: HeartPulse,
    title: 'Healthcare & wellness',
    desc: 'Clinics, centres and practitioners, with the health authority licensing that sits alongside the trade licence.',
  },
];

export default function Industries() {
  return (
    <section id="industries" className="section bg-slate-50/70">
      <div className="container-x">
        <SectionHeading
          eyebrow="Sector experience"
          title={
            <>
              We know what your <span className="gradient-text">industry needs</span>
            </>
          }
          description="Activity codes, approvals and the right jurisdiction differ enormously by sector. Getting them wrong means re-filing — and paying twice."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((ind, i) => {
            const Icon = ind.icon;
            return (
              <Reveal key={ind.title} delay={(i % 3) * 80}>
                <div className="h-full rounded-2xl border border-slate-100 bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-soft">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand-gradient-soft text-brand-blue">
                    <Icon className="h-5.5 w-5.5" />
                  </span>
                  <h3 className="mt-5 text-base font-bold text-ink-900">{ind.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-500">{ind.desc}</p>
                </div>
              </Reveal>
            );
          })}
        </div>

        <div className="mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link href="/cost-estimator" className="btn-gradient group">
            Find my jurisdiction
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link href="/contact" className="btn-ghost">
            Ask about my sector
          </Link>
        </div>
      </div>
    </section>
  );
}
