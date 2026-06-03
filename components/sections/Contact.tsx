'use client';

import { useState, type FormEvent } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2, MessageCircle } from 'lucide-react';
import { company } from '@/lib/data';
import SectionHeading from '../ui/SectionHeading';
import Reveal from '../ui/Reveal';

const serviceOptions = [
  'Company Formation',
  'Trade License',
  'Residence Visa',
  'Golden Visa',
  'PRO Services',
  'Corporate Tax / VAT',
  'Bank Account Opening',
  'Other',
];

const contactCards = [
  { icon: Phone, label: 'Call us', value: company.phone, href: `tel:${company.phoneHref}` },
  { icon: Mail, label: 'Email us', value: company.email, href: `mailto:${company.email}` },
  { icon: MapPin, label: 'Visit us', value: company.address, href: '#' },
  { icon: Clock, label: 'Working hours', value: company.hours, href: '#' },
];

export default function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get('name') || '');
    const email = String(data.get('email') || '');
    const phone = String(data.get('phone') || '');
    const service = String(data.get('service') || '');
    const message = String(data.get('message') || '');

    const text =
      `Hello Smartgic, I'd like a consultation.%0A%0A` +
      `Name: ${name}%0AEmail: ${email}%0APhone: ${phone}%0A` +
      `Service: ${service}%0AMessage: ${message}`;

    window.open(`https://wa.me/${company.whatsapp}?text=${text}`, '_blank');
    setSent(true);
    form.reset();
  }

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
          description="Tell us about your plans and one of our advisors will respond within the hour with clear, tailored next steps — no obligation."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-[1fr_1.15fr]">
          {/* Contact info */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {contactCards.map((card, i) => {
              const Icon = card.icon;
              return (
                <Reveal key={card.label} delay={i * 70}>
                  <a
                    href={card.href}
                    className="flex items-start gap-4 rounded-2xl border border-slate-100 bg-white p-5 shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:shadow-soft"
                  >
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-brand-gradient-soft text-brand-blue">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span>
                      <span className="block text-xs font-semibold uppercase tracking-wider text-ink-400">
                        {card.label}
                      </span>
                      <span className="mt-1 block text-sm font-semibold text-ink-900">
                        {card.value}
                      </span>
                    </span>
                  </a>
                </Reveal>
              );
            })}
          </div>

          {/* Form */}
          <Reveal delay={120}>
            <div className="rounded-3xl border border-slate-100 bg-white p-7 shadow-soft sm:p-9">
              {sent ? (
                <div className="flex h-full flex-col items-center justify-center py-12 text-center">
                  <span className="grid h-16 w-16 place-items-center rounded-full bg-brand-gradient-soft">
                    <CheckCircle2 className="h-8 w-8 text-brand-cyan-dark" />
                  </span>
                  <h3 className="mt-5 text-xl font-bold text-ink-900">Thank you!</h3>
                  <p className="mt-2 max-w-sm text-sm text-ink-500">
                    Your request is ready in WhatsApp — just hit send, or email us anytime at{' '}
                    <a href={`mailto:${company.email}`} className="font-semibold text-brand-blue">
                      {company.email}
                    </a>
                    .
                  </p>
                  <button
                    type="button"
                    onClick={() => setSent(false)}
                    className="btn-ghost mt-6"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Full name" name="name" type="text" placeholder="John Doe" required />
                    <Field
                      label="Email"
                      name="email"
                      type="email"
                      placeholder="you@company.com"
                      required
                    />
                  </div>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field
                      label="Phone / WhatsApp"
                      name="phone"
                      type="tel"
                      placeholder="+971 50 000 0000"
                      required
                    />
                    <div>
                      <label className="mb-1.5 block text-sm font-semibold text-ink-700">
                        Service
                      </label>
                      <select
                        name="service"
                        className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-ink-900 outline-none transition-colors focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/15"
                        defaultValue=""
                      >
                        <option value="" disabled>
                          Select a service
                        </option>
                        {serviceOptions.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-semibold text-ink-700">
                      How can we help?
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      placeholder="Tell us briefly about your business plans…"
                      className="w-full resize-none rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-ink-900 outline-none transition-colors placeholder:text-ink-400 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/15"
                    />
                  </div>
                  <button type="submit" className="btn-gradient w-full">
                    <Send className="h-4 w-4" /> Send my request
                  </button>
                  <p className="flex items-center justify-center gap-2 text-center text-xs text-ink-400">
                    <MessageCircle className="h-3.5 w-3.5 text-[#25D366]" />
                    Prefer chat? This opens WhatsApp with your details pre-filled.
                  </p>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type,
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type: string;
  placeholder: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-semibold text-ink-700">{label}</label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-ink-900 outline-none transition-colors placeholder:text-ink-400 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/15"
      />
    </div>
  );
}
