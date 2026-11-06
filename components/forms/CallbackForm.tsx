'use client';

import { useId, useRef, useState, type FormEvent } from 'react';
import { AlertCircle, CheckCircle2, Loader2, PhoneCall } from 'lucide-react';
import { company } from '@/lib/data';
import { submitLead, validateCallback, whatsappHref, type CallbackErrors, type LeadPayload } from '@/lib/leads';
import { cn } from '@/lib/cn';
import { Field, fieldClass, fieldOk } from './LeadForm';

const TIMES = ['As soon as possible', 'Morning (9am–12pm)', 'Afternoon (12pm–3pm)', 'Late afternoon (3pm–6pm)'];

/**
 * Request-a-callback form: name, number and a preferred time. Sent through the
 * same pipeline as the consultation form (Web3Forms, or WhatsApp when no key is
 * configured), flagged as a callback request.
 */
export default function CallbackForm({ source, service = '' }: { source: string; service?: string }) {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'sent' | 'error'>('idle');
  const [errors, setErrors] = useState<CallbackErrors>({});
  const [formError, setFormError] = useState('');
  const inFlight = useRef(false);
  const id = useId();

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (inFlight.current) return;
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get('name') || '').trim();
    const phone = String(data.get('phone') || '').trim();
    const time = String(data.get('time') || TIMES[0]);

    const next = validateCallback({ name, phone });
    setErrors(next);
    if (Object.keys(next).length) {
      setFormError('Please check the highlighted fields.');
      form.querySelector<HTMLElement>('[aria-invalid="true"]')?.focus();
      return;
    }

    const lead: LeadPayload = {
      name,
      email: '',
      phone,
      service: service || 'Callback request',
      message: `Callback requested — preferred time: ${time}`,
      website: String(data.get('website') || ''),
      source: `${source} (callback)`,
    };

    inFlight.current = true;
    setFormError('');
    setStatus('submitting');
    try {
      const result = await submitLead(lead);
      if (result.status === 'error') {
        setStatus('error');
        setFormError(result.message);
        return;
      }
      if (result.via === 'whatsapp') window.open(whatsappHref(lead), '_blank', 'noopener,noreferrer');
      setStatus('sent');
      form.reset();
    } finally {
      inFlight.current = false;
    }
  }

  if (status === 'sent') {
    return (
      <div className="flex flex-col items-center py-10 text-center" role="status" aria-live="polite">
        <span className="grid h-16 w-16 place-items-center rounded-full bg-teal/10">
          <CheckCircle2 className="h-8 w-8 text-teal" aria-hidden="true" />
        </span>
        <h3 className="mt-5 text-xl font-semibold text-ink-900">Callback requested</h3>
        <p className="mt-2 max-w-sm text-sm leading-relaxed text-ink-500">
          We will call you at your preferred time during business hours ({company.hours}).
        </p>
        <button type="button" onClick={() => setStatus('idle')} className="btn-ghost btn-sm mt-6">
          Request another call
        </button>
      </div>
    );
  }

  const busy = status === 'submitting';
  return (
    <form onSubmit={onSubmit} noValidate className="space-y-4">
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <label htmlFor={`${id}-website`}>Website</label>
        <input id={`${id}-website`} name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>
      {formError && (
        <p role="alert" className="flex items-start gap-2 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
          {formError}
        </p>
      )}
      <Field id={`${id}-name`} label="Your name" name="name" type="text" autoComplete="name" placeholder="Your name" error={errors.name} disabled={busy} required />
      <Field
        id={`${id}-phone`}
        label="Phone number"
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
        <label htmlFor={`${id}-time`} className="mb-1.5 block text-sm font-medium text-ink-700">
          Best time to call
        </label>
        <select id={`${id}-time`} name="time" disabled={busy} className={cn(fieldClass, fieldOk)} defaultValue={TIMES[0]}>
          {TIMES.map((t) => (
            <option key={t}>{t}</option>
          ))}
        </select>
      </div>
      <button type="submit" disabled={busy} className="btn-primary btn-sheen btn-lg w-full">
        {busy ? <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" /> : <PhoneCall className="h-4 w-4" aria-hidden="true" />}
        {busy ? 'Sending…' : 'Request a callback'}
      </button>
      <p className="text-center text-xs text-ink-400">We call during business hours, {company.hours}.</p>
    </form>
  );
}
