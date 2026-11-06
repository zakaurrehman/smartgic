import type { Metadata } from 'next';
import { ArrowUpRight, Clock, Mail, MapPin, MessageCircle, Navigation, Phone, ShieldCheck, type LucideIcon } from 'lucide-react';
import { siteImages } from '@/lib/site-images';
import { DEFAULT_SHARE_IMAGE } from '@/lib/seo';
import { company, mapsHref } from '@/lib/data';
import PageHero from '@/components/ui/PageHero';
import Reveal from '@/components/ui/Reveal';
import SectionHeading from '@/components/ui/SectionHeading';
import EnquiryTabs from '@/components/forms/EnquiryTabs';
import ProcessTimeline from '@/components/services/ProcessTimeline';
import ServiceFaq from '@/components/services/ServiceFaq';

const SITE = 'https://www.smartgicvisa.com';
const url = `${SITE}/contact`;
const title = 'Contact Smartgic Visa — Dubai Business Setup, Visa & Tax Consultants';
const description =
  'Talk to a licensed Dubai adviser about business setup, visas, tax, accounting or audit. Call, WhatsApp, email, request a callback or visit our Deira office. Free consultation.';

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  keywords: ['contact Smartgic Visa', 'business setup consultant Dubai contact', 'Dubai visa consultant phone', 'free business setup consultation Dubai'],
  alternates: { canonical: url },
  openGraph: { type: 'website', locale: 'en_AE', url, siteName: 'Smartgic Visa', title, description, images: [DEFAULT_SHARE_IMAGE] },
  twitter: { card: 'summary_large_image', title, description, images: [DEFAULT_SHARE_IMAGE] },
};

const whatsappHref = `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(
  "Hello Smartgic, I'd like to book a free consultation.",
)}`;

const channels: { icon: LucideIcon; label: string; value: string; detail: string; href: string; external?: boolean; tone: string }[] = [
  { icon: Phone, label: 'Call us', value: company.phone, detail: 'The fastest route to an adviser in business hours', href: `tel:${company.phoneHref}`, tone: 'bg-brand-blue/10 text-brand-blue' },
  { icon: MessageCircle, label: 'WhatsApp', value: company.phone, detail: 'Send questions and documents, reply when it suits you', href: whatsappHref, external: true, tone: 'bg-[#25D366]/10 text-[#1fae55]' },
  { icon: Mail, label: 'Email', value: company.email, detail: 'Best for detailed enquiries and document review', href: `mailto:${company.email}`, tone: 'bg-teal/10 text-teal' },
  { icon: MapPin, label: 'Visit the office', value: 'BN Complex, Deira', detail: 'Call ahead so an adviser is free when you arrive', href: mapsHref, external: true, tone: 'bg-navy-900/10 text-navy-900' },
];

const intakeSteps = [
  { title: 'You get in touch', desc: 'Call, WhatsApp, email or send the form. Tell us roughly what you are trying to do — you do not need to have it worked out.' },
  { title: 'We ask the right questions', desc: 'Activity, customers, visas, tax position and budget. A short conversation now prevents expensive mistakes later.' },
  { title: 'You get a clear recommendation', desc: 'The route we would actually choose, with an itemised quote separating authority fees from our fee.' },
  { title: 'We handle the process', desc: 'One adviser owns your file through licence, visas, banking, tax and every renewal after that.' },
];

const contactFaqs = [
  { q: 'Is the first consultation really free?', a: 'Yes. The first conversation is free and carries no obligation. We would rather spend twenty minutes establishing whether we are the right fit than take on a file that does not suit us.' },
  { q: 'How quickly will someone respond?', a: `We respond to enquiries during our working hours — ${company.hours}. Anything that arrives overnight or on a Sunday is picked up the next working morning. If it is urgent, calling ${company.phone} is always the fastest route.` },
  { q: 'Do I need to visit Dubai to start?', a: 'No. Most of the work can start and be completed remotely. A short visit is normally needed for the medical test and Emirates ID biometrics if you are taking a residence visa.' },
  { q: 'What should I have ready before we talk?', a: 'Nothing formal. It helps if you can describe your business activity, where your customers are, how many people you need to sponsor and any tax deadlines you know about. Documents come later.' },
  { q: 'Can you help if my company was set up by someone else?', a: 'Yes. We take on renewals, amendments, share transfers, visas, tax filings, bookkeeping, audits and liquidations for companies we did not originally form.' },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    { '@type': 'ContactPage', '@id': `${url}/#contactpage`, url, name: title, description, about: { '@id': `${SITE}/#organization` } },
    {
      '@type': 'FAQPage',
      '@id': `${url}/#faq`,
      mainEntity: contactFaqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
    },
  ],
};

export default function ContactPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main id="main">
        <PageHero
          image={siteImages.officeReceptionDesk}
          eyebrow="Get in touch"
          title={
            <>
              Talk to a licensed adviser <span className="accent">today</span>
            </>
          }
          subtitle="Tell us what you are trying to build and we will tell you the cleanest way to do it — including when the simpler option is the better one. The first conversation is free."
          crumbs={[{ label: 'Home', href: '/' }, { label: 'Contact' }]}
          ctaLabel="Send your enquiry"
        />

        {/* Channels */}
        <section className="bg-white pt-16 sm:pt-20" aria-label="Ways to reach us">
          <div className="container-x grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {channels.map((c, i) => {
              const Icon = c.icon;
              return (
                <Reveal key={c.label} delay={i * 60} className="h-full">
                  <a
                    href={c.href}
                    {...(c.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    className="group card card-hover flex h-full flex-col p-6"
                  >
                    <span className={`grid h-12 w-12 place-items-center rounded-2xl ${c.tone}`}>
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span className="mt-5 flex items-center justify-between text-xs text-ink-400">
                      {c.label}
                      <ArrowUpRight className="h-4 w-4 transition-colors group-hover:text-brand-blue" aria-hidden="true" />
                    </span>
                    <span className="mt-1 break-words text-[0.95rem] font-semibold text-ink-900">{c.value}</span>
                    <span className="mt-2 text-sm leading-relaxed text-ink-500">{c.detail}</span>
                  </a>
                </Reveal>
              );
            })}
          </div>
        </section>

        {/* Form + office */}
        <section id="contact" className="section scroll-mt-28 bg-white">
          <div className="container-x grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
            <Reveal>
              <EnquiryTabs source="Contact page" />
            </Reveal>
            <div className="flex flex-col gap-4">
              <Reveal delay={100}>
                <div className="surface-navy on-dark noise rounded-3xl p-7">
                  <div className="relative z-[2]">
                    <p className="font-mono text-[0.68rem] uppercase tracking-[0.18em] text-brand-cyan">Our office</p>
                    <p className="mt-3 text-lg font-semibold text-white">{company.legalName}</p>
                    <p className="mt-2 text-sm leading-relaxed text-slate-300">{company.address}</p>
                    <ul className="mt-5 space-y-2.5 text-sm text-slate-300">
                      <li className="flex items-center gap-2.5">
                        <Clock className="h-4 w-4 text-brand-cyan" aria-hidden="true" /> {company.hours}
                      </li>
                      <li className="flex items-center gap-2.5">
                        <ShieldCheck className="h-4 w-4 text-brand-cyan" aria-hidden="true" /> DET licence{' '}
                        <span className="font-mono text-white">{company.licenseNo}</span>
                      </li>
                    </ul>
                    <a href={mapsHref} target="_blank" rel="noopener noreferrer" className="btn-white btn-sm mt-6">
                      <Navigation className="h-4 w-4" aria-hidden="true" /> Get directions
                    </a>
                  </div>
                </div>
              </Reveal>
              <Reveal delay={160} className="flex-1">
                <div className="h-full min-h-[280px] overflow-hidden rounded-3xl border border-slate-200/80 bg-surface shadow-card">
                  <iframe
                    title={`Map showing ${company.legalName} in Deira, Dubai`}
                    src={`https://maps.google.com/maps?q=${encodeURIComponent(company.address)}&output=embed`}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="h-full min-h-[280px] w-full border-0"
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* What happens next */}
        <section className="section bg-surface">
          <div className="container-x grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
            <div className="lg:sticky lg:top-36 lg:self-start">
              <SectionHeading
                align="left"
                eyebrow="What happens next"
                title={
                  <>
                    From first message <span className="accent">to a clear plan</span>
                  </>
                }
                description="No obligation at any point until you have a written scope and quote you are happy with."
              />
            </div>
            <Reveal delay={100}>
              <ProcessTimeline steps={intakeSteps} />
            </Reveal>
          </div>
        </section>

        <ServiceFaq faqs={contactFaqs} label="Contact" eyebrow="Before you get in touch" title={<>Common <span className="accent">questions</span></>} />
      </main>
    </>
  );
}
