import { ArrowUpRight, Clock, Mail, MapPin, MessageCircle, Phone, type LucideIcon } from 'lucide-react';
import { company, mapsHref } from '@/lib/data';
import SectionHeading from '../ui/SectionHeading';
import Reveal from '../ui/Reveal';
import EnquiryTabs from '../forms/EnquiryTabs';

/**
 * The consultation section (id="contact") that closes most pages: direct
 * channels on the left, the enquiry / callback card on the right.
 */
export default function Contact({
  source = 'Homepage contact section',
  defaultService = '',
  title,
  description = 'Tell us what you are planning. An adviser will come back with the route, the documents and an itemised quote — no obligation, no pressure to commit.',
}: {
  source?: string;
  defaultService?: string;
  title?: React.ReactNode;
  description?: string;
}) {
  const whatsappHref = `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(
    "Hello Smartgic, I'd like to book a consultation.",
  )}`;

  const channels: { icon: LucideIcon; label: string; value: string; href: string; external?: boolean; accent: string }[] = [
    { icon: MessageCircle, label: 'WhatsApp', value: company.phone, href: whatsappHref, external: true, accent: 'text-[#1fae55] bg-[#25D366]/10' },
    { icon: Phone, label: 'Call us', value: company.phone, href: `tel:${company.phoneHref}`, accent: 'text-brand-blue bg-brand-blue/10' },
    { icon: Mail, label: 'Email', value: company.email, href: `mailto:${company.email}`, accent: 'text-teal bg-teal/10' },
  ];

  return (
    <section id="contact" className="section scroll-mt-28 bg-surface">
      <div className="container-x">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Free consultation"
              title={
                title ?? (
                  <>
                    Let’s plan your next <span className="accent">move</span>
                  </>
                )
              }
              description={description}
            />

            <ul className="mt-10 grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
              {channels.map((c, i) => {
                const Icon = c.icon;
                return (
                  <Reveal key={c.label} delay={i * 60} as="li">
                    <a
                      href={c.href}
                      {...(c.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                      className="group card card-hover flex items-center gap-4 p-4"
                    >
                      <span className={`grid h-11 w-11 shrink-0 place-items-center rounded-2xl ${c.accent}`}>
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block text-xs text-ink-400">{c.label}</span>
                        <span className="block truncate text-sm font-semibold text-ink-900">{c.value}</span>
                      </span>
                      <ArrowUpRight className="h-4 w-4 shrink-0 text-ink-400 transition-colors group-hover:text-brand-blue" aria-hidden="true" />
                    </a>
                  </Reveal>
                );
              })}
            </ul>

            <Reveal delay={200}>
              <div className="surface-navy on-dark noise mt-3 rounded-3xl p-6">
                <div className="relative z-[2] flex items-start gap-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-white/10 text-brand-cyan">
                    <MapPin className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-white">Visit our office</p>
                    <p className="mt-1 text-sm leading-relaxed text-slate-300">{company.address}</p>
                    <p className="mt-3 flex items-center gap-2 text-xs text-slate-400">
                      <Clock className="h-3.5 w-3.5 text-brand-cyan" aria-hidden="true" /> {company.hours}
                    </p>
                    <a
                      href={mapsHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-brand-cyan hover:underline"
                    >
                      Get directions <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={120}>
            <EnquiryTabs source={source} defaultService={defaultService} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
