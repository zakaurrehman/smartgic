import { faqs } from '@/lib/data';
import SectionHeading from '../ui/SectionHeading';
import Accordion from '../ui/Accordion';

export default function FAQ() {
  return (
    <section id="faq" className="section bg-white">
      <div className="container-x">
        <SectionHeading
          eyebrow="Good to know"
          title={
            <>
              Frequently asked <span className="gradient-text">questions</span>
            </>
          }
          description="Everything founders usually ask before starting. Can't find your answer? Our advisors reply within the hour."
        />

        <div className="mx-auto mt-12 max-w-3xl">
          <Accordion items={faqs} />
        </div>
      </div>
    </section>
  );
}
