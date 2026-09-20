import { company } from './data';

/**
 * Lead submission.
 *
 * The site previously handed every enquiry straight to WhatsApp, which meant
 * nothing was captured if the visitor never pressed send in WhatsApp. This adds
 * a real email submission via Web3Forms when an access key is configured, and
 * keeps the WhatsApp handoff as an explicit secondary action either way.
 *
 * Configure by setting NEXT_PUBLIC_WEB3FORMS_KEY in the environment
 * (Vercel → Project → Settings → Environment Variables). Without it the form
 * still works and falls back to the WhatsApp handoff, so nothing breaks.
 */

export const WEB3FORMS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? '';

export const emailDeliveryEnabled = WEB3FORMS_KEY.length > 0;

export type LeadPayload = {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  /** Which page the enquiry came from, so the team can prioritise. */
  source: string;
  /** Honeypot — must stay empty. */
  website?: string;
};

export type LeadResult =
  | { status: 'sent'; via: 'email' }
  | { status: 'sent'; via: 'whatsapp' }
  | { status: 'error'; message: string };

/** Human-readable summary reused by both the email body and the WhatsApp text. */
export function formatLead(lead: LeadPayload): string {
  return [
    `Name: ${lead.name}`,
    `Email: ${lead.email}`,
    `Phone: ${lead.phone}`,
    `Service: ${lead.service || 'Not specified'}`,
    `Enquiry: ${lead.message || 'No message provided'}`,
    `Page: ${lead.source}`,
  ].join('\n');
}

export function whatsappHref(lead: LeadPayload): string {
  const text = `Hello Smartgic, I'd like a consultation.\n\n${formatLead(lead)}`;
  return `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(text)}`;
}

export async function submitLead(lead: LeadPayload): Promise<LeadResult> {
  // Silently succeed for bots so they get no signal that submission failed.
  if (lead.website) return { status: 'sent', via: 'email' };

  if (!emailDeliveryEnabled) {
    return { status: 'sent', via: 'whatsapp' };
  }

  try {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        access_key: WEB3FORMS_KEY,
        subject: `New ${lead.service || 'website'} enquiry — ${lead.name}`,
        from_name: 'Smartgic Visa website',
        name: lead.name,
        email: lead.email,
        phone: lead.phone,
        service: lead.service,
        message: formatLead(lead),
      }),
    });

    const data: unknown = await response.json().catch(() => null);
    const ok =
      response.ok &&
      typeof data === 'object' &&
      data !== null &&
      (data as { success?: boolean }).success !== false;

    if (!ok) {
      return {
        status: 'error',
        message: 'We could not send that just now. Please try WhatsApp or call us directly.',
      };
    }

    return { status: 'sent', via: 'email' };
  } catch {
    return {
      status: 'error',
      message: 'Network problem — please try WhatsApp or call us directly.',
    };
  }
}

/* ───────────────────────────── Validation ───────────────────────────── */

export type LeadErrors = Partial<Record<'name' | 'email' | 'phone' | 'message', string>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function validateLead(lead: Pick<LeadPayload, 'name' | 'email' | 'phone' | 'message'>): LeadErrors {
  const errors: LeadErrors = {};

  if (lead.name.trim().length < 2) {
    errors.name = 'Please enter your full name.';
  }
  if (!EMAIL_RE.test(lead.email.trim())) {
    errors.email = 'Please enter a valid email address.';
  }
  // Permissive on purpose — international formats vary widely.
  if (lead.phone.replace(/\D/g, '').length < 7) {
    errors.phone = 'Please enter a phone number we can reach you on.';
  }
  if (lead.message.trim().length > 0 && lead.message.trim().length < 10) {
    errors.message = 'Please add a little more detail, or leave this blank.';
  }

  return errors;
}

export const serviceOptions = [
  'Company Formation',
  'Trade Licence',
  'Residence Visa',
  'Golden Visa',
  'PRO Services',
  'Corporate Tax / VAT',
  'Bank Account Opening',
  'Document Clearing & Attestation',
  'Licence Renewal',
  'Not sure yet',
];

/**
 * Pre-selects the form's service dropdown from the service page a visitor is
 * reading, so the field is already right when they reach the form. Slugs with
 * no natural match return '' and the placeholder option stays selected.
 */
const SERVICE_BY_SLUG: Record<string, string> = {
  'company-registration': 'Company Formation',
  'professional-services': 'Trade Licence',
  'bank-account-opening': 'Bank Account Opening',
  'visa-services': 'Residence Visa',
  'document-clearing-services': 'Document Clearing & Attestation',
  'corporate-pro-services': 'PRO Services',
  'trade-license-renewals': 'Licence Renewal',
  'sponsorship-services': 'Residence Visa',
};

export function serviceOptionForSlug(slug: string): string {
  return SERVICE_BY_SLUG[slug] ?? '';
}
