import type { ServiceFaq as Faq } from '@/lib/services';
import SectionHeading from '../ui/SectionHeading';
import Accordion from '../ui/Accordion';

export default function ServiceFaq({ faqs, label }: { faqs: Faq[]; label: string }) {
  return (
    <section id="faq" className="section bg-white">
      <div className="container-x">
        <SectionHeading
          eyebrow="Good to know"
          title={
            <>
              {label} <span className="gradient-text">FAQs</span>
            </>
          }
          description="Answers to the questions clients ask most. Still unsure? Our advisors reply within the hour."
        />

        <div className="mx-auto mt-12 max-w-3xl">
          <Accordion items={faqs} />
        </div>
      </div>
    </section>
  );
}
