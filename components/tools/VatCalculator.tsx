'use client';

import { useId, useMemo, useState } from 'react';
import { Info } from 'lucide-react';
import { cn } from '@/lib/cn';

const RATE = 0.05;

const fmt = (n: number) =>
  n.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

/** Adds 5% UAE VAT to a net amount, or extracts it from a VAT-inclusive one. */
export default function VatCalculator() {
  const id = useId();
  const [mode, setMode] = useState<'add' | 'remove'>('add');
  const [amount, setAmount] = useState('10,000');

  const r = useMemo(() => {
    const n = Number(amount.replace(/[^\d.]/g, '')) || 0;
    if (mode === 'add') return { net: n, vat: n * RATE, gross: n * (1 + RATE) };
    const net = n / (1 + RATE);
    return { net, vat: n - net, gross: n };
  }, [amount, mode]);

  return (
    <div className="grid gap-5 lg:grid-cols-2">
      <div className="card p-6 sm:p-8">
        <div role="radiogroup" aria-label="Calculation" className="grid grid-cols-2 gap-1 rounded-2xl bg-surface p-1">
          {(['add', 'remove'] as const).map((m) => (
            <button
              key={m}
              type="button"
              role="radio"
              aria-checked={mode === m}
              onClick={() => setMode(m)}
              className={cn(
                'min-h-[44px] rounded-xl text-sm font-medium transition-all',
                mode === m ? 'bg-white text-ink-900 shadow-card' : 'text-ink-500 hover:text-ink-900',
              )}
            >
              {m === 'add' ? 'Add VAT' : 'Remove VAT'}
            </button>
          ))}
        </div>
        <label htmlFor={`${id}-amount`} className="mb-1.5 mt-6 block text-sm font-medium text-ink-700">
          {mode === 'add' ? 'Amount before VAT' : 'Amount including VAT'}
        </label>
        <div className="relative">
          <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-sm text-ink-400">AED</span>
          <input
            id={`${id}-amount`}
            inputMode="decimal"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full rounded-2xl border border-slate-200 bg-white py-3.5 pl-14 pr-4 text-lg font-semibold tabular-nums text-ink-900 outline-none focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/10"
          />
        </div>
        <p className="mt-4 flex gap-2 text-xs leading-relaxed text-ink-400">
          <Info className="mt-0.5 h-3.5 w-3.5 shrink-0 text-teal" aria-hidden="true" />
          The UAE standard rate is 5%. Zero-rated and exempt supplies carry no VAT, but are treated differently on your
          return.
        </p>
      </div>
      <div className="surface-navy on-dark noise rounded-3xl p-6 sm:p-8" aria-live="polite">
        <dl className="relative z-[2] divide-y divide-white/10">
          {[
            ['Net amount', r.net],
            ['VAT at 5%', r.vat],
            ['Total including VAT', r.gross],
          ].map(([label, value], i) => (
            <div key={label as string} className="flex items-baseline justify-between gap-4 py-4 first:pt-0 last:pb-0">
              <dt className="text-sm text-slate-400">{label}</dt>
              <dd className={cn('font-semibold tabular-nums text-white', i === 2 ? 'text-3xl' : 'text-xl')}>
                AED {fmt(value as number)}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
