import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { company, mapsHref } from '@/lib/data';
import SectionHeading from '../ui/SectionHeading';
import Reveal from '../ui/Reveal';
import LeadForm from '../forms/LeadForm';

const contactCards = [
  {
    icon: Phone,
    label: 'Call us',
    value: company.phone,
    href: `tel:${company.phoneHref}`,
  },
  {
    icon: Mail,
    label: 'Email us',
    value: company.email,
    href: `mailto:${company.email}`,
  },
  {
    icon: MapPin,
    label: 'Visit us',
    value: company.address,
    href: mapsHref,
    external: true,
  },
  // Not a link — it was previously an anchor to "#", which sent keyboard and
  // screen-reader users to a dead destination.
  { icon: Clock, label: 'Working hours', value: company.hours },
];

export default function Contact({
  source = 'Homepage contact section',
  defaultService = '',
}: {
  source?: string;
  defaultService?: string;
}) {
  return (
    <section id="contact" className="section bg-slate-50/70">
      <div className="container-x">
        <SectionHeading
          eyebrow="Let's talk"
          title={
            <>
              Book your <span className="gradient-text">free consultation</span>
            </>
          }
          description="Tell us about your plans and one of our advisors will come back with clear, tailored next steps — no obligation, and no pressure to commit."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-[1fr_1.15fr]">
          {/* Contact methods */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {contactCards.map((card, i) => {
              const Icon = card.icon;
              const inner = (
                <>
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-brand-gradient-soft text-brand-blue">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs font-semibold uppercase tracking-wider text-ink-400">
                      {card.label}
                    </span>
                    <span className="mt-1 block text-sm font-semibold text-ink-900">
                      {card.value}
                    </span>
                  </span>
                </>
              );

              return (
                <Reveal key={card.label} delay={i * 70}>
                  {card.href ? (
                    <a
                      href={card.href}
                      {...(card.external
                        ? { target: '_blank', rel: 'noopener noreferrer' }
                        : {})}
                      className="flex items-start gap-4 rounded-2xl border border-slate-100 bg-white p-5 shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-blue/20 hover:shadow-soft"
                    >
                      {inner}
                    </a>
                  ) : (
                    <div className="flex items-start gap-4 rounded-2xl border border-slate-100 bg-white p-5 shadow-card">
                      {inner}
                    </div>
                  )}
                </Reveal>
              );
            })}
          </div>

          {/* Form */}
          <Reveal delay={120}>
            <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-soft sm:p-9">
              <LeadForm source={source} defaultService={defaultService} />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
