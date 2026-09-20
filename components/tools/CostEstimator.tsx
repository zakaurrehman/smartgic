'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  Building2,
  CheckCircle2,
  Info,
  RotateCcw,
  Sparkles,
  Target,
  Wallet,
} from 'lucide-react';
import {
  costTierRank,
  jurisdictionSummaries,
  matchesKeyword,
  type JurisdictionSummary,
} from '@/lib/freezones';
import { packages } from '@/lib/data';
import LeadForm from '../forms/LeadForm';

/* ────────────────────────────── Question model ────────────────────────────── */

type Answers = {
  market: string;
  activity: string;
  visas: string;
  workspace: string;
  priority: string;
};

type Option = { value: string; label: string; hint: string };

type Step = {
  key: keyof Answers;
  title: string;
  subtitle: string;
  options: Option[];
};

const steps: Step[] = [
  {
    key: 'market',
    title: 'Where are your customers?',
    subtitle: 'This is the single biggest factor. It decides free zone vs mainland before cost does.',
    options: [
      {
        value: 'international',
        label: 'Outside the UAE, or online',
        hint: 'Overseas clients, exports, digital products — a free zone usually fits.',
      },
      {
        value: 'uae',
        label: 'Inside the UAE',
        hint: 'Selling to UAE customers, retail premises or government tenders — points to mainland.',
      },
      {
        value: 'both',
        label: 'Both, roughly evenly',
        hint: 'We will weigh a mainland licence against a free zone with a distribution route.',
      },
      {
        value: 'holding',
        label: 'None — this holds assets',
        hint: 'Holding shares, property or IP rather than trading. Offshore territory.',
      },
    ],
  },
  {
    key: 'activity',
    title: 'What will the business do?',
    subtitle: 'Pick the closest match. Your exact activity list gets confirmed at consultation.',
    options: [
      { value: 'consultancy', label: 'Consultancy & professional services', hint: 'Advisory, agencies, IT services, marketing' },
      { value: 'trading', label: 'Trading & distribution', hint: 'Import, export, general trading, wholesale' },
      { value: 'ecommerce', label: 'E-commerce & online retail', hint: 'Online stores, marketplaces, dropshipping' },
      { value: 'logistics', label: 'Logistics & warehousing', hint: 'Freight, fulfilment, storage, distribution' },
      { value: 'manufacturing', label: 'Manufacturing & industrial', hint: 'Production, assembly, processing' },
      { value: 'media', label: 'Media & creative', hint: 'Content, film, design, publishing, events' },
      { value: 'financial', label: 'Financial & fund services', hint: 'Asset management, funds, fintech, family office' },
      { value: 'crypto', label: 'Crypto, Web3 & emerging tech', hint: 'Blockchain, digital assets, AI' },
    ],
  },
  {
    key: 'visas',
    title: 'How many residence visas do you need?',
    subtitle: 'Including your own. Visa allocation is driven by your workspace, so this shapes the package.',
    options: [
      { value: '0', label: 'None for now', hint: 'Licence only — you already have residency or do not need it yet' },
      { value: '1-2', label: '1 – 2', hint: 'You, and possibly a partner or first hire' },
      { value: '3-5', label: '3 – 5', hint: 'A small team' },
      { value: '6+', label: '6 or more', hint: 'A larger team, or hiring quickly' },
    ],
  },
  {
    key: 'workspace',
    title: 'What workspace do you need?',
    subtitle: 'The cheapest option that satisfies your licence and visa count is usually the right one.',
    options: [
      { value: 'flexi', label: 'Flexi-desk or none', hint: 'You work remotely or from client sites' },
      { value: 'office', label: 'A real office', hint: 'A dedicated desk, private office or client-facing space' },
      { value: 'warehouse', label: 'Warehouse or industrial space', hint: 'Storage, light industrial or production facilities' },
    ],
  },
  {
    key: 'priority',
    title: 'What matters most to you?',
    subtitle: 'Every jurisdiction trades one of these off against another. Tell us which one you will not compromise on.',
    options: [
      { value: 'cost', label: 'Lowest possible cost', hint: 'Keep setup and renewal as lean as possible' },
      { value: 'address', label: 'A Dubai address', hint: 'Jurisdiction and perception matter to your clients' },
      { value: 'banking', label: 'Straightforward banking', hint: 'Corporate account opening with minimal friction' },
      { value: 'scale', label: 'Room to grow', hint: 'Space, visa headroom and facilities to expand into' },
    ],
  },
];

/* ──────────────────────────── Recommendation logic ──────────────────────────── */

const activityKeywords: Record<string, string[]> = {
  consultancy: ['consultancy', 'services', 'professional services', 'it services', 'consulting'],
  trading: ['trading', 'distribution', 'import export', 'general trading', 're-export'],
  ecommerce: ['e-commerce', 'ecommerce', 'online retail', 'startups'],
  logistics: ['logistics', 'warehousing', 'fulfilment', 'distribution', 'freight'],
  manufacturing: ['manufacturing', 'industrial', 'light manufacturing', 'production'],
  media: ['media', 'creative', 'marketing', 'content', 'events', 'design'],
  financial: ['funds', 'family offices', 'asset management', 'financial services', 'fintech'],
  crypto: ['crypto', 'web3', 'blockchain', 'digital assets', 'artificial intelligence'],
};

function scoreZone(zone: JurisdictionSummary, a: Answers): number {
  let score = 0;

  // 1. Market access is a hard filter, not a preference.
  if (a.market === 'holding') {
    if (zone.category !== 'Offshore') return -1;
    score += 10;
  } else if (zone.category === 'Offshore') {
    return -1;
  } else if (a.market === 'uae') {
    score += zone.category === 'Mainland' ? 10 : 1;
  } else if (a.market === 'international') {
    score += zone.category === 'Free Zone' ? 8 : 2;
  } else {
    score += zone.category === 'Mainland' ? 7 : 5;
  }

  // 2. Activity fit. An explicit "best for" match counts for more than an
  //    incidental sector mention, and matching is whole-word — plain substring
  //    matching let "ai" hit "Dubai", which handed every Dubai zone a false
  //    activity score and buried the zone that genuinely specialises.
  const keywords = activityKeywords[a.activity] ?? [];
  if (keywords.some((k) => matchesKeyword(zone.bestForIndex, k))) {
    score += 9;
  } else if (keywords.some((k) => matchesKeyword(zone.sectorIndex, k))) {
    score += 5;
  }

  // 3. Workspace requirements. Matched whole-word against the zone's own
  //    sector and "best for" tags — "land" previously matched "Mainland",
  //    which gave a mainland licence a phantom warehousing score.
  const physical = ['warehouse', 'warehousing', 'industrial', 'manufacturing', 'logistics', 'distribution'];
  const handlesPhysicalSpace = physical.some(
    (k) => matchesKeyword(zone.sectorIndex, k) || matchesKeyword(zone.bestForIndex, k),
  );

  if (a.workspace === 'warehouse') {
    score += handlesPhysicalSpace ? 5 : -4;
  }
  if (a.workspace === 'flexi' && costTierRank[zone.costTier] <= 1) score += 2;

  // 4. Team size — larger teams need facilities that carry quota.
  if (a.visas === '6+' && costTierRank[zone.costTier] >= 2) score += 3;
  if (a.visas === '0' && costTierRank[zone.costTier] === 0) score += 3;

  // 5. The stated priority.
  if (a.priority === 'cost') score += (3 - costTierRank[zone.costTier]) * 2;
  if (a.priority === 'address' && zone.emirate === 'Dubai') score += 6;
  if (a.priority === 'banking' && zone.emirate === 'Dubai' && costTierRank[zone.costTier] >= 2) score += 6;
  if (a.priority === 'scale' && handlesPhysicalSpace) score += 4;

  return score;
}

/** The Smartgic package closest to the recommended route, for an honest starting figure. */
function matchPackage(zone: JurisdictionSummary | undefined) {
  if (!zone) return undefined;
  // Offshore entities carry no trade licence and no visa allocation, so none of
  // the operating-company packages describe them. Showing one here would quote
  // a price for a licence and a visa the client would never receive.
  if (zone.category === 'Offshore') return undefined;
  if (zone.category === 'Mainland') return packages.find((p) => p.name === 'Mainland');
  if (costTierRank[zone.costTier] >= 2) return packages.find((p) => p.name === 'Premium Free Zone');
  return packages.find((p) => p.name === 'Free Zone');
}

/* ────────────────────────────── Component ────────────────────────────── */

export default function CostEstimator() {
  const [stepIndex, setStepIndex] = useState(0);
  const [answers, setAnswers] = useState<Partial<Answers>>({});
  const [done, setDone] = useState(false);

  const total = steps.length;
  const step = steps[stepIndex];
  const progress = done ? 100 : Math.round((stepIndex / total) * 100);

  const results = useMemo(() => {
    if (!done) return [];
    const a = answers as Answers;
    return jurisdictionSummaries
      .map((z) => ({ zone: z, score: scoreZone(z, a) }))
      .filter((r) => r.score > 0)
      .sort((x, y) => y.score - x.score || costTierRank[x.zone.costTier] - costTierRank[y.zone.costTier])
      .slice(0, 3);
  }, [done, answers]);

  const best = results[0]?.zone;
  const pkg = matchPackage(best);

  function choose(value: string) {
    const next = { ...answers, [step.key]: value };
    setAnswers(next);
    if (stepIndex + 1 < total) {
      setStepIndex(stepIndex + 1);
    } else {
      setDone(true);
    }
  }

  function restart() {
    setAnswers({});
    setStepIndex(0);
    setDone(false);
  }

  /* ── Results ── */
  if (done) {
    const answerSummary = steps
      .map((s) => `${s.title} ${s.options.find((o) => o.value === answers[s.key])?.label ?? '—'}`)
      .join(' | ');

    return (
      <section className="section bg-white">
        <div className="container-x">
          <div className="mx-auto max-w-4xl">
            <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-soft sm:p-10">
              <span className="eyebrow">
                <Sparkles className="h-3.5 w-3.5" /> Your indicative result
              </span>
              <h2 className="mt-5 text-2xl font-extrabold leading-tight sm:text-3xl">
                Based on your answers, we would start with{' '}
                <span className="gradient-text">{best ? best.abbr : 'a tailored structure'}</span>
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-ink-500 sm:text-base">
                {best
                  ? `${best.standout} It sits in our ${best.costTier.toLowerCase()} cost band for ${best.emirate}.`
                  : 'Your combination of answers needs a human look — tell us a little more and an advisor will map the options.'}
              </p>

              {/* Starting figure */}
              {pkg && (
                <div className="mt-8 rounded-2xl border border-slate-100 bg-slate-50/70 p-6">
                  <div className="flex flex-wrap items-baseline justify-between gap-3">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-ink-400">
                        Smartgic {pkg.name} package — {pkg.period}
                      </p>
                      <p className="mt-1 text-3xl font-extrabold tracking-tight text-ink-900">
                        {pkg.price}
                      </p>
                    </div>
                    <Link href="/pricing" className="text-sm font-semibold text-brand-blue hover:underline">
                      See all packages →
                    </Link>
                  </div>
                  <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
                    {pkg.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm text-ink-500">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-cyan" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Offshore has no package equivalent — say what it actually is. */}
              {!pkg && best?.category === 'Offshore' && (
                <div className="mt-8 rounded-2xl border border-slate-100 bg-slate-50/70 p-6">
                  <p className="text-xs font-semibold uppercase tracking-wider text-ink-400">
                    Quoted per structure
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-ink-500">
                    An offshore company is not priced like a trading licence, because it is not one.
                    There is no trade licence, no workspace and{' '}
                    <span className="font-semibold text-ink-900">no residence visa</span> — so our
                    operating-company packages do not apply. Offshore costs cover incorporation, the
                    registered agent and annual renewal, and we quote them per structure once we know
                    what the entity will hold.
                  </p>
                  <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
                    {[
                      'Incorporation & registered agent',
                      'Corporate documents',
                      'Annual renewal',
                      'Bank account assistance (optional)',
                    ].map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm text-ink-500">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-cyan" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-5 text-xs leading-relaxed text-ink-400">
                    If you also need UAE residency or to invoice UAE clients, you need a free zone or
                    mainland licence alongside this — we commonly set up both, with the offshore
                    entity holding the shares.
                  </p>
                </div>
              )}

              {/* Honest caveat */}
              <div className="mt-6 flex items-start gap-3 rounded-2xl border border-amber-200 bg-amber-50 p-5">
                <Info className="mt-0.5 h-5 w-5 shrink-0 text-amber-600" />
                <p className="text-xs leading-relaxed text-amber-900">
                  <span className="font-bold">This is a starting point, not a quote.</span> Authority
                  and government fees are set by the relevant authority and vary by activity, visa
                  count, workspace and shareholder type — we do not guess at them here. Your written
                  quote itemises exactly what goes to the authority and what is our service charge,
                  with no figure invented in between.
                </p>
              </div>

              {/* Alternatives */}
              {results.length > 1 && (
                <div className="mt-10">
                  <h3 className="text-base font-bold text-ink-900">Also worth comparing</h3>
                  <div className="mt-4 grid gap-4 sm:grid-cols-2">
                    {results.slice(1).map(({ zone }) => (
                      <Link
                        key={zone.slug}
                        href={`/free-zones/${zone.slug}`}
                        className="group flex h-full flex-col rounded-2xl border border-slate-100 bg-white p-5 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-brand-blue/20 hover:shadow-soft"
                      >
                        <span className="grid h-10 w-fit place-items-center rounded-lg bg-brand-gradient px-2.5 text-xs font-extrabold text-white">
                          {zone.abbr}
                        </span>
                        <span className="mt-3 block text-sm font-bold text-ink-900 group-hover:text-brand-blue">
                          {zone.name}
                        </span>
                        <span className="mt-1.5 block text-xs text-ink-400">
                          {zone.emirate} · {zone.costTier}
                        </span>
                        <span className="mt-2.5 block text-sm leading-relaxed text-ink-500">
                          {zone.tagline}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                {best && (
                  <Link href={`/free-zones/${best.slug}`} className="btn-gradient group">
                    Read the {best.abbr} guide
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                )}
                <button type="button" onClick={restart} className="btn-ghost">
                  <RotateCcw className="h-4 w-4" /> Start over
                </button>
              </div>
            </div>

            {/* Lead capture — answers travel with the enquiry */}
            <div className="mt-8 rounded-3xl border border-slate-100 bg-slate-50/70 p-6 shadow-soft sm:p-10">
              <h2 className="text-2xl font-extrabold text-ink-900">Get the itemised quote</h2>
              <p className="mt-2 text-sm leading-relaxed text-ink-500">
                Send us your details and an advisor will come back with a written, itemised quote for
                this route — authority fees and service charges separated, nothing hidden.
              </p>
              <div className="mt-7">
                <LeadForm
                  source={`Cost estimator — ${best?.abbr ?? 'no match'} — ${answerSummary}`}
                  defaultService="Company Formation"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  /* ── Wizard ── */
  return (
    <section className="section bg-white">
      <div className="container-x">
        <div className="mx-auto max-w-3xl">
          {/* Progress */}
          <div className="flex items-center justify-between gap-4">
            <p className="text-xs font-bold uppercase tracking-wider text-ink-400">
              Step {stepIndex + 1} of {total}
            </p>
            <p className="text-xs font-semibold text-brand-blue">{progress}% complete</p>
          </div>
          <div
            className="mt-2.5 h-2 overflow-hidden rounded-full bg-slate-100"
            role="progressbar"
            aria-valuenow={progress}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-label="Estimator progress"
          >
            <div
              className="h-full rounded-full bg-brand-gradient transition-all duration-500"
              style={{ width: `${Math.max(progress, 4)}%` }}
            />
          </div>

          {/* Question */}
          <div className="mt-10">
            <h2 className="text-2xl font-extrabold leading-tight text-ink-900 sm:text-3xl">
              {step.title}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-ink-500 sm:text-base">
              {step.subtitle}
            </p>

            <fieldset className="mt-8">
              <legend className="sr-only">{step.title}</legend>
              <div className="grid gap-3 sm:grid-cols-2">
                {step.options.map((opt) => {
                  const selected = answers[step.key] === opt.value;
                  return (
                    <button
                      key={opt.value}
                      type="button"
                      onClick={() => choose(opt.value)}
                      aria-pressed={selected}
                      className={`group flex min-h-[88px] flex-col items-start rounded-2xl border p-5 text-left transition-all duration-200 ${
                        selected
                          ? 'border-brand-blue bg-brand-gradient-soft shadow-card'
                          : 'border-slate-200 bg-white hover:-translate-y-0.5 hover:border-brand-blue/40 hover:shadow-card'
                      }`}
                    >
                      <span className="text-sm font-bold text-ink-900 group-hover:text-brand-blue">
                        {opt.label}
                      </span>
                      <span className="mt-1.5 text-xs leading-relaxed text-ink-500">{opt.hint}</span>
                    </button>
                  );
                })}
              </div>
            </fieldset>

            <div className="mt-8 flex items-center justify-between gap-4">
              <button
                type="button"
                onClick={() => setStepIndex((i) => Math.max(0, i - 1))}
                disabled={stepIndex === 0}
                className="inline-flex items-center gap-2 text-sm font-semibold text-ink-500 transition-colors hover:text-brand-blue disabled:cursor-not-allowed disabled:opacity-40"
              >
                <ArrowLeft className="h-4 w-4" /> Back
              </button>
              <p className="text-xs text-ink-400">No email required to see your result</p>
            </div>
          </div>

          {/* Reassurance strip */}
          <div className="mt-14 grid gap-4 border-t border-slate-100 pt-10 sm:grid-cols-3">
            {[
              { icon: Target, title: 'Matched, not guessed', desc: 'Built from the jurisdictions we actually work with.' },
              { icon: Wallet, title: 'No invented fees', desc: 'We show our own package pricing, not fictional authority fees.' },
              { icon: Building2, title: 'Free either way', desc: 'See the result without giving us your email address.' },
            ].map((f) => {
              const Icon = f.icon;
              return (
                <div key={f.title} className="flex items-start gap-3">
                  <Icon className="mt-0.5 h-5 w-5 shrink-0 text-brand-cyan-dark" />
                  <div>
                    <p className="text-sm font-bold text-ink-900">{f.title}</p>
                    <p className="mt-1 text-xs leading-relaxed text-ink-500">{f.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
