import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import Reveal from '../ui/Reveal';
import CorporateTaxCalculator from './CorporateTaxCalculator';
import VatCalculator from './VatCalculator';

/** A service page's embedded calculator, linking to its full tool page. */
export default function ToolSection({ tool }: { tool: 'corporate-tax-calculator' | 'vat-calculator' }) {
  const isCt = tool === 'corporate-tax-calculator';
  return (
    <section id="calculator" className="section scroll-mt-40 bg-white">
      <div className="container-x">
        <SectionHeading
          eyebrow="Free calculator"
          title={
            isCt ? (
              <>
                Estimate your <span className="accent">corporate tax</span>
              </>
            ) : (
              <>
                Work out the <span className="accent">VAT</span>
              </>
            )
          }
          description={
            isCt
              ? 'Enter your taxable income to see how much falls in the 0% band and how much is taxed at 9%.'
              : 'Add 5% VAT to a net figure, or take it out of a VAT-inclusive one.'
          }
        />
        <Reveal delay={120} className="mt-12">
          {isCt ? <CorporateTaxCalculator /> : <VatCalculator />}
        </Reveal>
        <p className="mt-6 text-center text-sm text-ink-400">
          <Link href={`/${tool}`} className="inline-flex items-center gap-1 font-medium text-brand-blue hover:underline">
            Open the full {isCt ? 'corporate tax' : 'VAT'} calculator <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </p>
      </div>
    </section>
  );
}
