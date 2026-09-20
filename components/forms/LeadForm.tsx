'use client';

import { useId, useRef, useState, type FormEvent } from 'react';
import {
  AlertCircle,
  CheckCircle2,
  Loader2,
  MessageCircle,
  Send,
  ShieldCheck,
} from 'lucide-react';
import { company } from '@/lib/data';
import {
  emailDeliveryEnabled,
  serviceOptions,
  submitLead,
  validateLead,
  whatsappHref,
  type LeadErrors,
  type LeadPayload,
} from '@/lib/leads';

type Status = 'idle' | 'submitting' | 'sent-email' | 'sent-whatsapp' | 'error';

export default function LeadForm({
  source,
  defaultService = '',
  compact = false,
}: {
  /** Page the enquiry came from — included in the notification. */
  source: string;
  defaultService?: string;
  /** Drops the message textarea for tighter placements. */
  compact?: boolean;
}) {
  const [status, setStatus] = useState<Status>('idle');
  const [errors, setErrors] = useState<LeadErrors>({});
  const [formError, setFormError] = useState('');
  const [fallbackHref, setFallbackHref] = useState('');
  const baseId = useId();

  /**
   * Synchronous re-entry guard.
   *
   * Disabling the submit button is not enough: setState is asynchronous, so a
   * fast double-tap (common on mobile) can fire handleSubmit again before React
   * re-renders the disabled button — sending the enquiry twice.
   */
  const inFlight = useRef(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (inFlight.current) return;

    const form = e.currentTarget;
    const data = new FormData(form);

    const lead: LeadPayload = {
      name: String(data.get('name') || '').trim(),
      email: String(data.get('email') || '').trim(),
      phone: String(data.get('phone') || '').trim(),
      service: String(data.get('service') || ''),
      message: String(data.get('message') || '').trim(),
      website: String(data.get('website') || ''),
      source,
    };

    const nextErrors = validateLead(lead);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      setFormError('Please check the highlighted fields.');
      const firstInvalid = form.querySelector<HTMLElement>('[aria-invalid="true"]');
      firstInvalid?.focus();
      return;
    }

    inFlight.current = true;
    setFormError('');
    setStatus('submitting');

    const href = whatsappHref(lead);
    setFallbackHref(href);

    try {
      const result = await submitLead(lead);

      if (result.status === 'error') {
        setStatus('error');
        setFormError(result.message);
        return;
      }

      if (result.via === 'whatsapp') {
        // No email backend configured — hand off to WhatsApp as before.
        window.open(href, '_blank', 'noopener,noreferrer');
        setStatus('sent-whatsapp');
      } else {
        setStatus('sent-email');
      }
      form.reset();
    } finally {
      // Released on every path so a failed send can be retried.
      inFlight.current = false;
    }
  }

  if (status === 'sent-email' || status === 'sent-whatsapp') {
    return (
      <div
        className="flex flex-col items-center justify-center py-12 text-center"
        role="status"
        aria-live="polite"
      >
        <span className="grid h-16 w-16 place-items-center rounded-full bg-brand-gradient-soft">
          <CheckCircle2 className="h-8 w-8 text-brand-cyan-dark" />
        </span>
        <h3 className="mt-5 text-xl font-bold text-ink-900">
          {status === 'sent-email' ? 'Request received' : 'Almost there'}
        </h3>
        <p className="mt-2 max-w-sm text-sm leading-relaxed text-ink-500">
          {status === 'sent-email' ? (
            <>
              Thank you — an advisor will come back to you shortly during business hours (
              {company.hours}). If it is urgent, call{' '}
              <a href={`tel:${company.phoneHref}`} className="font-semibold text-brand-blue">
                {company.phone}
              </a>
              .
            </>
          ) : (
            <>
              Your request is ready in WhatsApp — press send there to reach us. You can also email{' '}
              <a href={`mailto:${company.email}`} className="font-semibold text-brand-blue">
                {company.email}
              </a>
              .
            </>
          )}
        </p>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          {status === 'sent-email' && fallbackHref && (
            <a
              href={fallbackHref}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
            >
              <MessageCircle className="h-4 w-4 text-[#25D366]" /> Also send on WhatsApp
            </a>
          )}
          <button type="button" onClick={() => setStatus('idle')} className="btn-ghost">
            Send another message
          </button>
        </div>
      </div>
    );
  }

  const busy = status === 'submitting';

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      {/* Honeypot — hidden from people, tempting to bots. */}
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <label htmlFor={`${baseId}-website`}>Website</label>
        <input id={`${baseId}-website`} name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      {formError && (
        <p
          role="alert"
          className="flex items-start gap-2 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
        >
          <AlertCircle className="mt-0.5 h-4.5 w-4.5 shrink-0" />
          {formError}
        </p>
      )}

      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          id={`${baseId}-name`}
          label="Full name"
          name="name"
          type="text"
          autoComplete="name"
          placeholder="Your name"
          error={errors.name}
          disabled={busy}
          required
        />
        <Field
          id={`${baseId}-email`}
          label="Email"
          name="email"
          type="email"
          autoComplete="email"
          inputMode="email"
          placeholder="you@company.com"
          error={errors.email}
          disabled={busy}
          required
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          id={`${baseId}-phone`}
          label="Phone / WhatsApp"
          name="phone"
          type="tel"
          autoComplete="tel"
          inputMode="tel"
          placeholder="+971 50 000 0000"
          error={errors.phone}
          disabled={busy}
          required
        />
        <div>
          <label
            htmlFor={`${baseId}-service`}
            className="mb-1.5 block text-sm font-semibold text-ink-700"
          >
            Service
          </label>
          <select
            id={`${baseId}-service`}
            name="service"
            disabled={busy}
            defaultValue={defaultService}
            className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-ink-900 outline-none transition-colors focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/15 disabled:opacity-60"
          >
            <option value="">Select a service</option>
            {serviceOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>
      </div>

      {!compact && (
        <div>
          <label
            htmlFor={`${baseId}-message`}
            className="mb-1.5 block text-sm font-semibold text-ink-700"
          >
            How can we help?{' '}
            <span className="font-normal text-ink-400">(optional)</span>
          </label>
          <textarea
            id={`${baseId}-message`}
            name="message"
            rows={4}
            disabled={busy}
            placeholder="Tell us briefly about your business plans…"
            aria-invalid={errors.message ? true : undefined}
            aria-describedby={errors.message ? `${baseId}-message-error` : undefined}
            className={`w-full resize-none rounded-xl border bg-white px-4 py-3 text-sm text-ink-900 outline-none transition-colors placeholder:text-ink-400 focus:ring-2 disabled:opacity-60 ${
              errors.message
                ? 'border-red-300 focus:border-red-400 focus:ring-red-200'
                : 'border-slate-200 focus:border-brand-blue focus:ring-brand-blue/15'
            }`}
          />
          {errors.message && (
            <p id={`${baseId}-message-error`} role="alert" className="mt-1.5 text-xs text-red-600">
              {errors.message}
            </p>
          )}
        </div>
      )}

      <button type="submit" disabled={busy} className="btn-gradient w-full disabled:opacity-70">
        {busy ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" /> Sending…
          </>
        ) : (
          <>
            <Send className="h-4 w-4" /> Send my request
          </>
        )}
      </button>

      <p className="flex items-center justify-center gap-2 text-center text-xs text-ink-400">
        {emailDeliveryEnabled ? (
          <>
            <ShieldCheck className="h-3.5 w-3.5 text-brand-cyan-dark" />
            Confidential. We reply during business hours — no obligation, no spam.
          </>
        ) : (
          <>
            <MessageCircle className="h-3.5 w-3.5 text-[#25D366]" />
            This opens WhatsApp with your details pre-filled.
          </>
        )}
      </p>
    </form>
  );
}

function Field({
  id,
  label,
  name,
  type,
  placeholder,
  error,
  required,
  disabled,
  autoComplete,
  inputMode,
}: {
  id: string;
  label: string;
  name: string;
  type: string;
  placeholder: string;
  error?: string;
  required?: boolean;
  disabled?: boolean;
  autoComplete?: string;
  inputMode?: 'email' | 'tel' | 'text';
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-semibold text-ink-700">
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
        autoComplete={autoComplete}
        inputMode={inputMode}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${id}-error` : undefined}
        className={`w-full rounded-xl border bg-white px-4 py-3 text-sm text-ink-900 outline-none transition-colors placeholder:text-ink-400 focus:ring-2 disabled:opacity-60 ${
          error
            ? 'border-red-300 focus:border-red-400 focus:ring-red-200'
            : 'border-slate-200 focus:border-brand-blue focus:ring-brand-blue/15'
        }`}
      />
      {error && (
        <p id={`${id}-error`} role="alert" className="mt-1.5 text-xs text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}
