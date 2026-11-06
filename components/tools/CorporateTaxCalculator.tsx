'use client';

import { useId, useMemo, useState } from 'react';
import Link from 'next/link';
import { m } from 'framer-motion';
import { ArrowRight, Info } from 'lucide-react';
import { cn } from '@/lib/cn';

const THRESHOLD = 375_000;
const RATE = 0.09;
const SBR_REVENUE_LIMIT = 3_000_000;

const aed = (n: number) =>
  `AED ${Math.round(n).toLocaleString('en-US')}`;

function parseAmount(raw: string): number {
  const n = Number(raw.replace(/[^\d.]/g, ''));
  return Number.isFinite(n) ? n : 0;
}

/**
 * UAE corporate tax estimator for a standard (non-free-zone) taxable person:
 * 0% on taxable income up to AED 375,000 and 9% above it, with the Small
 * Business Relief election (revenue of AED 3 million or less, tax periods
 * ending on or before 31 December 2026). Qualifying Free Zone Person
 * computations are deliberately not modelled — they depend on facts a
 * calculator cannot test — and are routed to an adviser instead.
 */
export default function CorporateTaxCalculator({ compact = false }: { compact?: boolean }) {
  const id = useId();
  const [income, setIncome] = useState('750,000');
  const [sbr, setSbr] = useState(false);
  const [revenue, setRevenue] = useState('2,400,000');
  const [freeZone, setFreeZone] = useState(false);

  const result = useMemo(() => {
    const taxable = parseAmount(income);
    const rev = parseAmount(revenue);
    const sbrEligible = sbr && rev <= SBR_REVENUE_LIMIT;
    const zeroBand = Math.min(taxable, THRESHOLD);
    const nineBand = Math.max(0, taxable - THRESHOLD);
    const tax = sbrEligible ? 0 : nineBand * RATE;
    const effective = taxable > 0 ? (tax / taxable) * 100 : 0;
    return { taxable, rev, sbrEligible, zeroBand, nineBand, tax, effective };
  }, [income, sbr, revenue]);

  const zeroShare = result.taxable > 0 ? (result.zeroBand / result.taxable) * 100 : 100;

  const formatOnBlur = (setter: (v: string) => void) => (e: React.FocusEvent<HTMLInputElement>) => {
    const n = parseAmount(e.target.value);
    setter(n ? n.toLocaleString('en-US') : '');
  };

  return (
    <div className={cn('grid gap-5', !compact && 'lg:grid-cols-[1fr_1fr]')}>
      {/* Inputs */}
      <div className="card p-6 sm:p-8">
        <h3 className="text-lg font-semibold text-ink-900">Your figures</h3>
        <div className="mt-6 space-y-5">
          <div>
            <label htmlFor={`${id}-income`} className="mb-1.5 block text-sm font-medium text-ink-700">
              Taxable income for the period
            </label>
            <div className="relative">
              <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-sm text-ink-400">AED</span>
              <input
                id={`${id}-income`}
                inputMode="numeric"
                value={income}
                onChange={(e) => setIncome(e.target.value)}
                onBlur={formatOnBlur(setIncome)}
                className="w-full rounded-2xl border border-slate-200 bg-white py-3.5 pl-14 pr-4 text-lg font-semibold tabular-nums text-ink-900 outline-none focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/10"
                aria-describedby={`${id}-income-help`}
              />
            </div>
            <p id={`${id}-income-help`} className="mt-1.5 text-xs text-ink-400">
              Accounting profit after tax adjustments — not revenue.
            </p>
          </div>

          <label className="flex cursor-pointer items-start gap-3 rounded-2xl border border-slate-200 p-4 transition-colors hover:border-brand-blue/30">
            <input
              type="checkbox"
              checked={sbr}
              onChange={(e) => setSbr(e.target.checked)}
              className="mt-0.5 h-5 w-5 rounded border-slate-300 accent-[#1763E8]"
            />
            <span>
              <span className="block text-sm font-medium text-ink-900">Elect Small Business Relief</span>
              <span className="mt-0.5 block text-xs leading-relaxed text-ink-500">
                For resident businesses with revenue of AED 3 million or less, for tax periods ending on or before 31
                December 2026.
              </span>
            </span>
          </label>

          {sbr && (
            <div>
              <label htmlFor={`${id}-revenue`} className="mb-1.5 block text-sm font-medium text-ink-700">
                Revenue for the period
              </label>
              <div className="relative">
                <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-sm text-ink-400">AED</span>
                <input
                  id={`${id}-revenue`}
                  inputMode="numeric"
                  value={revenue}
                  onChange={(e) => setRevenue(e.target.value)}
                  onBlur={formatOnBlur(setRevenue)}
                  className="w-full rounded-2xl border border-slate-200 bg-white py-3 pl-14 pr-4 font-semibold tabular-nums text-ink-900 outline-none focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/10"
                />
              </div>
              {!result.sbrEligible && (
                <p className="mt-1.5 text-xs text-amber-700">Revenue above AED 3 million — Small Business Relief is not available.</p>
              )}
            </div>
          )}

          <label className="flex cursor-pointer items-start gap-3 rounded-2xl border border-slate-200 p-4 transition-colors hover:border-brand-blue/30">
            <input
              type="checkbox"
              checked={freeZone}
              onChange={(e) => setFreeZone(e.target.checked)}
              className="mt-0.5 h-5 w-5 rounded border-slate-300 accent-[#1763E8]"
            />
            <span>
              <span className="block text-sm font-medium text-ink-900">My company is in a free zone</span>
              <span className="mt-0.5 block text-xs leading-relaxed text-ink-500">
                Qualifying Free Zone Persons calculate differently.
              </span>
            </span>
          </label>
        </div>
      </div>

      {/* Result */}
      <div className="surface-navy on-dark noise rounded-3xl p-6 sm:p-8" aria-live="polite">
        <div className="relative z-[2]">
          {freeZone ? (
            <div>
              <p className="font-mono text-[0.68rem] uppercase tracking-[0.18em] text-brand-cyan">Free zone company</p>
              <p className="mt-4 text-2xl font-semibold leading-snug text-white">
                A Qualifying Free Zone Person pays 0% on qualifying income and 9% on the rest.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-slate-300">
                Whether your company qualifies depends on its activities, customers, substance and audited accounts — so we
                assess it before estimating anything. Untick the box to see the standard calculation.
              </p>
              <Link href="/services/corporate-tax-advisory" className="btn-primary btn-sm mt-6">
                Get a QFZP assessment <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          ) : (
            <>
              <p className="font-mono text-[0.68rem] uppercase tracking-[0.18em] text-brand-cyan">Estimated corporate tax</p>
              <p className="mt-3 text-[2.75rem] font-semibold leading-none tracking-tight text-white tabular-nums">
                {aed(result.tax)}
              </p>
              <p className="mt-2 text-sm text-slate-400">
                Effective rate <span className="font-medium text-slate-200">{result.effective.toFixed(2)}%</span>
                {result.sbrEligible && ' · Small Business Relief applied'}
              </p>

              {/* Band split */}
              <div className="mt-8">
                <div className="flex h-3 overflow-hidden rounded-full bg-white/10" role="img" aria-label={`${zeroShare.toFixed(0)}% of taxable income falls in the 0% band`}>
                  <m.div
                    className="h-full bg-brand-cyan"
                    initial={false}
                    animate={{ width: `${result.sbrEligible ? 100 : zeroShare}%` }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  />
                  <m.div
                    className="h-full bg-brand-blue-light"
                    initial={false}
                    animate={{ width: `${result.sbrEligible ? 0 : 100 - zeroShare}%` }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  />
                </div>
                <dl className="mt-5 grid grid-cols-2 gap-4 text-sm">
                  <div className="flex flex-col">
                    <dt className="order-2 mt-1 flex items-center gap-2 text-xs text-slate-400">
                      <span className="h-2 w-2 rounded-full bg-brand-cyan" aria-hidden="true" /> Taxed at 0%
                    </dt>
                    <dd className="order-1 font-semibold tabular-nums text-white">
                      {aed(result.sbrEligible ? result.taxable : result.zeroBand)}
                    </dd>
                  </div>
                  <div className="flex flex-col">
                    <dt className="order-2 mt-1 flex items-center gap-2 text-xs text-slate-400">
                      <span className="h-2 w-2 rounded-full bg-brand-blue-light" aria-hidden="true" /> Taxed at 9%
                    </dt>
                    <dd className="order-1 font-semibold tabular-nums text-white">
                      {aed(result.sbrEligible ? 0 : result.nineBand)}
                    </dd>
                  </div>
                </dl>
              </div>
            </>
          )}

          <p className="mt-8 flex gap-2 border-t border-white/10 pt-5 text-xs leading-relaxed text-slate-400">
            <Info className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand-cyan" aria-hidden="true" />
            An estimate for a standard UAE taxable person, not tax advice. Registration and an annual return are required
            even when no tax is due.
          </p>
        </div>
      </div>
    </div>
  );
}
