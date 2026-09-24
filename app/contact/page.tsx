import type { Metadata } from 'next';
import { DEFAULT_SHARE_IMAGE } from '@/lib/seo';
import {
  Clock,
  Mail,
  MapPin,
  MessageCircle,
  Navigation,
  Phone,
  ShieldCheck,
} from 'lucide-react';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/ui/WhatsAppButton';
import MobileActionBar from '@/components/ui/MobileActionBar';
import PageHero from '@/components/ui/PageHero';
import Reveal from '@/components/ui/Reveal';
import SectionHeading from '@/components/ui/SectionHeading';
import Accordion from '@/components/ui/Accordion';
import Disclaimer from '@/components/ui/Disclaimer';
import LeadForm from '@/components/forms/LeadForm';
import { company, mapsHref } from '@/lib/data';

const SITE = 'https://www.smartgicvisa.com';
const url = `${SITE}/contact`;
const title = 'Contact Smartgic Visa — Dubai Business Setup & Visa Consultants';
const description =
  'Talk to a licensed Dubai business setup and immigration advisor. Call, WhatsApp, email or visit our Deira office. Free consultation, no obligation.';

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  keywords: [
    'contact Smartgic Visa',
    'business setup consultant Dubai contact',
    'Dubai visa consultant phone',
    'free business setup consultation Dubai',
  ],
  alternates: { canonical: url },
  openGraph: {
    type: 'website',
    locale: 'en_AE',
    url,
    siteName: 'Smartgic Visa',
    title,
    description,
    images: [DEFAULT_SHARE_IMAGE],
  },
  twitter: { card: 'summary_large_image', title, description, images: [DEFAULT_SHARE_IMAGE] },
};

const whatsappHref = `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(
  "Hello Smartgic, I'd like to book a free consultation.",
)}`;

const channels = [
  {
    icon: Phone,
    label: 'Call us',
    value: company.phone,
    detail: 'Fastest route to an advisor during business hours',
    href: `tel:${company.phoneHref}`,
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: company.phone,
    detail: 'Send documents and questions, reply when it suits you',
    href: whatsappHref,
    external: true,
  },
  {
    icon: Mail,
    label: 'Email us',
    value: company.email,
    detail: 'Best for detailed enquiries and document review',
    href: `mailto:${company.email}`,
  },
  {
    icon: MapPin,
    label: 'Visit the office',
    value: company.address,
    detail: 'Walk-ins welcome — calling ahead avoids a wait',
    href: mapsHref,
    external: true,
  },
];

const intakeSteps = [
  {
    title: 'You get in touch',
    desc: 'Call, WhatsApp, email or send the form. Tell us roughly what you are trying to do — you do not need to have it worked out.',
  },
  {
    title: 'We ask the right questions',
    desc: 'Activity, customers, visa needs and budget. Fifteen minutes here prevents expensive mistakes later.',
  },
  {
    title: 'You get a clear recommendation',
    desc: 'The jurisdiction and structure we would actually choose, with an itemised quote separating authority fees from our service charge.',
  },
  {
    title: 'We handle the process',
    desc: 'One relationship manager owns your file through licence, visas, banking and every renewal after that.',
  },
];

const contactFaqs = [
  {
    q: 'Is the first consultation really free?',
    a: 'Yes. The first conversation is free and carries no obligation. We would rather spend twenty minutes establishing whether we are the right fit than take on a file that does not suit us.',
  },
  {
    q: 'How quickly will someone respond?',
    a: `We aim to respond to every enquiry during our working hours — ${company.hours}. Enquiries that arrive overnight or on Sunday are picked up the next working morning. If something is urgent, calling ${company.phone} is always the fastest route.`,
  },
  {
    q: 'Do I need to visit Dubai to start?',
    a: 'No. Company formation can start remotely and most of it can be completed without you being in the country. A short visit is normally needed for the medical test and Emirates ID biometrics if you are taking a residence visa.',
  },
  {
    q: 'What should I have ready before we talk?',
    a: 'Nothing formal. It helps if you can describe your business activity, where your customers are, and how many people you need to sponsor. Passport copies and documents come later.',
  },
  {
    q: 'Will I be passed around between departments?',
    a: 'No. You get one relationship manager who owns your file from the first call through licence, visas, banking and every renewal afterwards.',
  },
  {
    q: 'Can you help if I already have a company elsewhere in the UAE?',
    a: 'Yes. We handle licence renewals, amendments, share transfers, jurisdiction moves, visa processing and liquidation for companies we did not originally form.',
  },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'ContactPage',
      '@id': `${url}/#contactpage`,
      url,
      name: title,
      description,
      about: { '@id': `${SITE}/#organization` },
    },
    {
      '@type': 'FAQPage',
      '@id': `${url}/#faq`,
      mainEntity: contactFaqs.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    },
  ],
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main id="main">
        <PageHero
          eyebrow="Get in touch"
          title={
            <>
              Talk to a <span className="gradient-text">licensed advisor</span>, not a call centre
            </>
          }
          subtitle="Tell us what you are trying to build and we will tell you the cleanest way to do it — including when the cheaper option is the better one. First conversation is free and carries no obligation."
          crumbs={[{ label: 'Home', href: '/' }, { label: 'Contact' }]}
        />

        {/* ── Channels ── */}
        <section className="section bg-white">
          <div className="container-x">
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {channels.map((c, i) => {
                const Icon = c.icon;
                return (
                  <Reveal key={c.label} delay={i * 70}>
                    <a
                      href={c.href}
                      {...(c.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                      className="group flex h-full flex-col rounded-2xl border border-slate-100 bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-brand-blue/20 hover:shadow-soft"
                    >
                      <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand-gradient-soft text-brand-blue transition-colors duration-300 group-hover:bg-brand-gradient group-hover:text-white">
                        <Icon className="h-5.5 w-5.5" />
                      </span>
                      <span className="mt-5 block text-xs font-semibold uppercase tracking-wider text-ink-400">
                        {c.label}
                      </span>
                      <span className="mt-1.5 block text-sm font-bold leading-snug text-ink-900 group-hover:text-brand-blue">
                        {c.value}
                      </span>
                      <span className="mt-3 block flex-1 text-xs leading-relaxed text-ink-500">
                        {c.detail}
                      </span>
                    </a>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── Form + office ── */}
        {/* id="contact" so the shared hero/CTA anchors resolve on this page too. */}
        <section id="contact" className="section bg-slate-50/70 pt-0">
          <div className="container-x">
            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
              <Reveal>
                <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-soft sm:p-9">
                  <h2 className="text-2xl font-extrabold text-ink-900">Request a free consultation</h2>
                  <p className="mt-2 text-sm leading-relaxed text-ink-500">
                    A few details are enough to get started. An advisor will come back to you with
                    the next steps for your situation.
                  </p>
                  <div className="mt-7">
                    <LeadForm source="Contact page" />
                  </div>
                </div>
              </Reveal>

              <div className="space-y-5">
                <Reveal delay={100}>
                  <div className="rounded-3xl bg-brand-navy p-7 text-white">
                    <h2 className="text-lg font-bold !text-white">Our Dubai office</h2>
                    <ul className="mt-5 space-y-4 text-sm">
                      <li className="flex items-start gap-3">
                        <MapPin className="mt-0.5 h-4.5 w-4.5 shrink-0 text-brand-cyan" />
                        <span className="text-slate-300">{company.address}</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Clock className="mt-0.5 h-4.5 w-4.5 shrink-0 text-brand-cyan" />
                        <span className="text-slate-300">{company.hours}</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <ShieldCheck className="mt-0.5 h-4.5 w-4.5 shrink-0 text-brand-cyan" />
                        <span className="text-slate-300">
                          Licensed by {company.authority}
                          <span className="mt-0.5 block text-xs text-slate-400">
                            Licence No. {company.licenseNo}
                          </span>
                        </span>
                      </li>
                    </ul>

                    <a
                      href={mapsHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 flex items-center justify-center gap-2 rounded-xl bg-white/10 px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/15"
                    >
                      <Navigation className="h-4 w-4" /> Get directions
                    </a>
                  </div>
                </Reveal>

                <Reveal delay={160}>
                  <div className="overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-card">
                    <iframe
                      title={`Map showing ${company.legalName} in Deira, Dubai`}
                      src={`https://maps.google.com/maps?q=${encodeURIComponent(
                        company.address,
                      )}&output=embed`}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="h-64 w-full border-0"
                    />
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* ── What happens next ── */}
        <section className="section bg-white">
          <div className="container-x">
            <SectionHeading
              eyebrow="What happens next"
              title={
                <>
                  From first message to <span className="gradient-text">licence in hand</span>
                </>
              }
              description="No sales funnel, no chasing. Here is exactly how an enquiry moves through our office."
            />
            <ol className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {intakeSteps.map((s, i) => (
                <Reveal key={s.title} delay={i * 80} as="li">
                  <div className="h-full rounded-2xl border border-slate-100 bg-white p-7 shadow-card">
                    <span className="text-2xl font-extrabold tracking-tight text-brand-cyan/50">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <h3 className="mt-3 text-base font-bold text-ink-900">{s.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-500">{s.desc}</p>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="section bg-slate-50/70">
          <div className="container-x">
            <SectionHeading
              eyebrow="Before you call"
              title={
                <>
                  Questions people ask <span className="gradient-text">first</span>
                </>
              }
              description="If yours is not here, ask us directly — we would rather answer it than have you guess."
            />
            <div className="mx-auto mt-12 max-w-3xl">
              <Accordion items={contactFaqs} />
            </div>
          </div>
        </section>

        <Disclaimer />
      </main>
      <Footer />
      <WhatsAppButton />
      <MobileActionBar />
    </>
  );
}
