'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import { ArrowRight, LayoutGrid, Rows3, Search, SlidersHorizontal, X } from 'lucide-react';
import {
  costTierRank,
  costTiers,
  emirates,
  jurisdictionSummaries,
  zoneCategories,
  type CostTier,
  type Emirate,
  type ZoneCategory,
} from '@/lib/freezones';

type View = 'grid' | 'table';

const tierStyles: Record<CostTier, string> = {
  Budget: 'bg-emerald-50 text-emerald-700 border-emerald-200',
  'Budget–Mid': 'bg-teal-50 text-teal-700 border-teal-200',
  'Mid-range': 'bg-amber-50 text-amber-700 border-amber-200',
  Premium: 'bg-violet-50 text-violet-700 border-violet-200',
};

export default function ZoneDirectory() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState<ZoneCategory | 'All'>('All');
  const [emirate, setEmirate] = useState<Emirate | 'All'>('All');
  const [tier, setTier] = useState<CostTier | 'All'>('All');
  const [view, setView] = useState<View>('grid');
  const [filtersOpen, setFiltersOpen] = useState(false);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return jurisdictionSummaries
      .filter((z) => {
        if (category !== 'All' && z.category !== category) return false;
        if (emirate !== 'All' && z.emirate !== emirate) return false;
        if (tier !== 'All' && z.costTier !== tier) return false;
        if (q && !z.searchIndex.includes(q)) return false;
        return true;
      })
      .sort((a, b) => costTierRank[a.costTier] - costTierRank[b.costTier] || a.name.localeCompare(b.name));
  }, [query, category, emirate, tier]);

  const activeFilters =
    (category !== 'All' ? 1 : 0) + (emirate !== 'All' ? 1 : 0) + (tier !== 'All' ? 1 : 0);

  function reset() {
    setQuery('');
    setCategory('All');
    setEmirate('All');
    setTier('All');
  }

  return (
    <section id="directory" className="section bg-white">
      <div className="container-x">
        {/* ── Search + view toggle ── */}
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <div className="relative flex-1">
            <Search
              className="pointer-events-none absolute left-4 top-1/2 h-4.5 w-4.5 -translate-y-1/2 text-ink-400"
              aria-hidden="true"
            />
            <label htmlFor="zone-search" className="sr-only">
              Search jurisdictions by name, emirate or business activity
            </label>
            <input
              id="zone-search"
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by name, emirate or activity — try “crypto” or “warehouse”"
              className="w-full rounded-2xl border border-slate-200 bg-white py-3.5 pl-12 pr-4 text-sm text-ink-900 outline-none transition-colors placeholder:text-ink-400 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/15"
            />
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setFiltersOpen((v) => !v)}
              aria-expanded={filtersOpen}
              aria-controls="zone-filters"
              className="flex h-12 flex-1 items-center justify-center gap-2 rounded-2xl border border-slate-200 px-4 text-sm font-semibold text-ink-700 transition-colors hover:border-brand-blue/40 hover:text-brand-blue sm:flex-none"
            >
              <SlidersHorizontal className="h-4 w-4" />
              Filters
              {activeFilters > 0 && (
                <span className="grid h-5 min-w-5 place-items-center rounded-full bg-brand-gradient px-1.5 text-[0.7rem] font-bold text-white">
                  {activeFilters}
                </span>
              )}
            </button>

            <div className="flex h-12 shrink-0 items-center rounded-2xl border border-slate-200 p-1">
              <button
                type="button"
                onClick={() => setView('grid')}
                aria-pressed={view === 'grid'}
                aria-label="Card view"
                className={`grid h-11 w-11 place-items-center rounded-xl transition-colors ${
                  view === 'grid' ? 'bg-brand-gradient text-white' : 'text-ink-400 hover:text-brand-blue'
                }`}
              >
                <LayoutGrid className="h-4.5 w-4.5" />
              </button>
              <button
                type="button"
                onClick={() => setView('table')}
                aria-pressed={view === 'table'}
                aria-label="Comparison table view"
                className={`grid h-11 w-11 place-items-center rounded-xl transition-colors ${
                  view === 'table' ? 'bg-brand-gradient text-white' : 'text-ink-400 hover:text-brand-blue'
                }`}
              >
                <Rows3 className="h-4.5 w-4.5" />
              </button>
            </div>
          </div>
        </div>

        {/* ── Filters ── */}
        <div
          id="zone-filters"
          className={`grid transition-all duration-300 ease-out ${
            filtersOpen ? 'mt-4 grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
          }`}
        >
          <div className="overflow-hidden">
            <div className="space-y-4 rounded-2xl border border-slate-100 bg-slate-50/70 p-5">
              <FilterRow
                label="Type"
                options={['All', ...zoneCategories]}
                value={category}
                onChange={(v) => setCategory(v as ZoneCategory | 'All')}
              />
              <FilterRow
                label="Emirate"
                options={['All', ...emirates]}
                value={emirate}
                onChange={(v) => setEmirate(v as Emirate | 'All')}
              />
              <FilterRow
                label="Cost"
                options={['All', ...costTiers]}
                value={tier}
                onChange={(v) => setTier(v as CostTier | 'All')}
              />
            </div>
          </div>
        </div>

        {/* ── Result count ── */}
        <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
          <p className="text-sm text-ink-500">
            <span className="font-bold text-ink-900">{results.length}</span>{' '}
            {results.length === 1 ? 'jurisdiction' : 'jurisdictions'}
            {activeFilters > 0 || query ? ' match your filters' : ' available'}
          </p>
          {(activeFilters > 0 || query) && (
            <button
              type="button"
              onClick={reset}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-blue hover:underline"
            >
              <X className="h-3.5 w-3.5" /> Clear all
            </button>
          )}
        </div>

        {/* ── Results ── */}
        {results.length === 0 ? (
          <div className="mt-10 rounded-3xl border border-dashed border-slate-200 bg-slate-50/50 px-6 py-16 text-center">
            <p className="text-lg font-bold text-ink-900">No jurisdiction matches that search</p>
            <p className="mx-auto mt-2 max-w-md text-sm text-ink-500">
              Try a broader term, or tell us what your business does — we will shortlist the right
              options for you, including zones not listed here.
            </p>
            <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <button type="button" onClick={reset} className="btn-ghost">
                Clear filters
              </button>
              <Link href="/contact" className="btn-gradient">
                Ask an advisor <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        ) : view === 'grid' ? (
          <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {results.map((z) => (
              <li key={z.slug} className="h-full">
                <Link
                  href={`/free-zones/${z.slug}`}
                  className="group flex h-full flex-col rounded-2xl border border-slate-100 bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-brand-blue/20 hover:shadow-soft"
                >
                  <div className="flex items-start justify-between gap-3">
                    <span className="grid h-12 shrink-0 place-items-center rounded-xl bg-brand-gradient px-3 text-sm font-extrabold tracking-tight text-white">
                      {z.abbr}
                    </span>
                    <span
                      className={`shrink-0 rounded-full border px-2.5 py-1 text-[0.7rem] font-bold ${tierStyles[z.costTier]}`}
                    >
                      {z.costTier}
                    </span>
                  </div>

                  <h3 className="mt-5 text-base font-bold leading-snug text-ink-900 transition-colors group-hover:text-brand-blue">
                    {z.name}
                  </h3>
                  <p className="mt-1.5 text-xs font-semibold uppercase tracking-wider text-ink-400">
                    {z.emirate} · {z.category}
                  </p>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-500">{z.tagline}</p>

                  <ul className="mt-4 flex flex-wrap gap-1.5">
                    {z.bestFor.slice(0, 3).map((b) => (
                      <li
                        key={b}
                        className="rounded-full bg-slate-100 px-2.5 py-1 text-[0.7rem] font-semibold text-ink-500"
                      >
                        {b}
                      </li>
                    ))}
                  </ul>

                  <span className="mt-5 inline-flex items-center gap-1.5 border-t border-slate-100 pt-4 text-sm font-semibold text-brand-blue">
                    View jurisdiction
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <div className="mt-8 overflow-hidden rounded-2xl border border-slate-100 shadow-card">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[720px] border-collapse text-left text-sm">
                <caption className="sr-only">
                  Comparison of UAE free zones, mainland and offshore jurisdictions
                </caption>
                <thead>
                  <tr className="bg-slate-50 text-xs font-bold uppercase tracking-wider text-ink-500">
                    <th scope="col" className="px-5 py-4">Jurisdiction</th>
                    <th scope="col" className="px-5 py-4">Emirate</th>
                    <th scope="col" className="px-5 py-4">Best for</th>
                    <th scope="col" className="px-5 py-4">Cost</th>
                    <th scope="col" className="px-5 py-4">What sets it apart</th>
                  </tr>
                </thead>
                <tbody>
                  {results.map((z) => (
                    <tr key={z.slug} className="border-t border-slate-100 align-top hover:bg-slate-50/60">
                      <th scope="row" className="px-5 py-4 font-semibold">
                        <Link
                          href={`/free-zones/${z.slug}`}
                          className="text-ink-900 transition-colors hover:text-brand-blue hover:underline"
                        >
                          {z.abbr}
                        </Link>
                        <span className="mt-0.5 block text-xs font-normal text-ink-400">
                          {z.category}
                        </span>
                      </th>
                      <td className="px-5 py-4 text-ink-500">{z.emirate}</td>
                      <td className="px-5 py-4 text-ink-500">{z.bestFor.slice(0, 3).join(', ')}</td>
                      <td className="px-5 py-4">
                        <span
                          className={`whitespace-nowrap rounded-full border px-2.5 py-1 text-[0.7rem] font-bold ${tierStyles[z.costTier]}`}
                        >
                          {z.costTier}
                        </span>
                      </td>
                      <td className="px-5 py-4 text-ink-500">{z.standout}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        <p className="mt-8 text-center text-xs leading-relaxed text-ink-400">
          Cost bands are relative guidance only. Actual licence cost depends on your activity, visa
          count and workspace, and authority fees are set by the relevant authority.{' '}
          <Link href="/cost-estimator" className="font-semibold text-brand-blue hover:underline">
            Build an indicative estimate
          </Link>{' '}
          or{' '}
          <Link href="/contact" className="font-semibold text-brand-blue hover:underline">
            request a tailored quote
          </Link>
          .
        </p>
      </div>
    </section>
  );
}

function FilterRow({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: string[];
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <fieldset>
      <legend className="mb-2 text-xs font-bold uppercase tracking-wider text-ink-400">
        {label}
      </legend>
      <div className="-mx-1 flex flex-wrap gap-2 px-1">
        {options.map((opt) => {
          const active = value === opt;
          return (
            <button
              key={opt}
              type="button"
              onClick={() => onChange(opt)}
              aria-pressed={active}
              className={`inline-flex min-h-[44px] items-center rounded-full border px-4 py-2 text-xs font-semibold transition-colors ${
                active
                  ? 'border-transparent bg-brand-gradient text-white shadow-sm'
                  : 'border-slate-200 bg-white text-ink-500 hover:border-brand-blue/40 hover:text-brand-blue'
              }`}
            >
              {opt}
            </button>
          );
        })}
      </div>
    </fieldset>
  );
}
