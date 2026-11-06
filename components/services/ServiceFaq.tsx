import { MessageCircle, Phone } from 'lucide-react';
import type { ServiceFaq as Faq } from '@/lib/services';
import { company } from '@/lib/data';
import SectionHeading from '../ui/SectionHeading';
import Accordion from '../ui/Accordion';
import Reveal from '../ui/Reveal';

/** FAQs: sticky heading and a contact card on the left, the questions on the right. */
export default function ServiceFaq({
  faqs,
  label,
  eyebrow = 'Good to know',
  title,
}: {
  faqs: Faq[];
  label: string;
  eyebrow?: string;
  title?: React.ReactNode;
}) {
  const whatsappHref = `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(
    `Hello Smartgic, I have a question about ${label}.`,
  )}`;
  return (
    <section id="faq" className="section scroll-mt-40 bg-white">
      <div className="container-x grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div className="lg:sticky lg:top-40 lg:self-start">
          <SectionHeading
            align="left"
            eyebrow={eyebrow}
            title={
              title ?? (
                <>
                  {label} <span className="accent">questions</span>
                </>
              )
            }
            description="Straight answers to what clients ask us most. If yours is not here, ask us directly."
          />
          <Reveal delay={180}>
            <div className="mt-8 rounded-3xl border border-slate-200/80 bg-surface p-6">
              <p className="text-sm font-semibold text-ink-900">Still have a question?</p>
              <p className="mt-1 text-sm text-ink-500">Our advisers reply during business hours, {company.hours}.</p>
              <div className="mt-5 flex flex-col gap-2.5 sm:flex-row lg:flex-col xl:flex-row">
                <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="btn-ghost btn-sm">
                  <MessageCircle className="h-4 w-4 text-[#25D366]" aria-hidden="true" /> WhatsApp
                </a>
                <a href={`tel:${company.phoneHref}`} className="btn-ghost btn-sm">
                  <Phone className="h-4 w-4 text-brand-blue" aria-hidden="true" /> Call us
                </a>
              </div>
            </div>
          </Reveal>
        </div>
        <Accordion items={faqs} />
      </div>
    </section>
  );
}
