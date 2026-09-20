'use client';

import Link from 'next/link';
import { useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  Award,
  Briefcase,
  Building2,
  FlaskConical,
  GraduationCap,
  HeartPulse,
  Home,
  Info,
  Palette,
  RotateCcw,
  Sparkles,
  TrendingUp,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import LeadForm from '../forms/LeadForm';

/**
 * Golden Visa profile router.
 *
 * Deliberately does NOT state investment thresholds, salary floors or points
 * scores. Those are set by ICP/GDRFA and are revised periodically — publishing
 * a number here would be stale the moment it changed. Instead the visitor
 * self-declares against the published criteria and we route them to a proper
 * assessment. Every outcome is labelled indicative.
 */

type Verdict = 'strong' | 'review' | 'alternative';

type Profile = {
  value: string;
  label: string;
  icon: LucideIcon;
  hint: string;
  /** The single most decisive qualifying test, in plain terms. */
  question: string;
  questionHint: string;
  strong: string;
  review: string;
  alternative: string;
  /** Service slugs to surface with the result. */
  services: { label: string; href: string }[];
};

const profiles: Profile[] = [
  {
    value: 'property',
    label: 'Property owner',
    icon: Home,
    hint: 'You own, or are buying, UAE real estate',
    question: 'Does your UAE property meet the published investment threshold, held in your name?',
    questionHint:
      'The threshold is set by the authorities and is revised from time to time. If you are unsure of the current figure, choose “Not sure” — we will confirm it for you.',
    strong:
      'Property-based applications are one of the most straightforward Golden Visa routes when the value and title conditions are met. The detail that catches people out is how the property is held — sole name, joint names, mortgaged or off-plan all affect eligibility.',
    review:
      'Property routes hinge on the current threshold, how the title is held and whether the property is mortgaged or off-plan. This is worth a proper check before you commit to anything.',
    alternative:
      'If your property does not currently meet the threshold, the usual routes are a company-based investor visa now, moving to the Golden Visa when the property position changes.',
    services: [
      { label: 'Golden Visa service', href: '/services/visa-services' },
      { label: 'Company formation', href: '/services/company-registration' },
    ],
  },
  {
    value: 'investor',
    label: 'Investor',
    icon: TrendingUp,
    hint: 'Deposits, investment funds or capital investment',
    question: 'Do you hold a qualifying UAE investment or deposit at the published level?',
    questionHint:
      'This covers accredited investment funds and capital deposits. Thresholds and accepted instruments are set by the authorities.',
    strong:
      'Capital and fund-based routes are well established. What matters is that the instrument is one the authorities accept and that the supporting letters come from an approved institution in the right format.',
    review:
      'Investor routes are sensitive to which instrument you hold and which institution issued it. A short review will tell you whether what you have qualifies as it stands.',
    alternative:
      'A company-based investor or partner visa is the usual interim route, with the Golden Visa revisited once the qualifying investment is in place.',
    services: [
      { label: 'Golden Visa service', href: '/services/visa-services' },
      { label: 'Bank account opening', href: '/services/bank-account-opening' },
    ],
  },
  {
    value: 'entrepreneur',
    label: 'Entrepreneur or business owner',
    icon: Building2,
    hint: 'You own or are founding a UAE company',
    question: 'Do you own a UAE company, or hold an approved accelerator or incubator endorsement?',
    questionHint:
      'Entrepreneur routes generally require either an existing licensed business meeting value criteria, or endorsement from an approved UAE business incubator.',
    strong:
      'Entrepreneur routes work well when the company is licensed, active and can evidence its value. The evidence pack matters more than most people expect — audited figures and the right endorsements do the heavy lifting.',
    review:
      'Entrepreneur applications vary considerably depending on the company’s age, activity and evidenced value. Worth assessing properly before you file.',
    alternative:
      'Forming a UAE company first gives you an investor or partner residence visa immediately, and builds the trading history that supports a Golden Visa application later.',
    services: [
      { label: 'Company registration', href: '/services/company-registration' },
      { label: 'Visa services', href: '/services/visa-services' },
    ],
  },
  {
    value: 'talent',
    label: 'Specialised talent or professional',
    icon: Award,
    hint: 'Engineering, IT, business, education, law, social sciences',
    question: 'Do you hold a relevant degree and a senior or specialised role with a UAE employer?',
    questionHint:
      'Specialised talent routes generally require a recognised qualification, a valid UAE employment contract and a salary at the published level for the classification.',
    strong:
      'Specialised talent applications turn on classification: getting your role mapped to the right occupational category, with a qualification and contract that support it.',
    review:
      'Talent routes depend heavily on how your role is classified and whether your qualification is attested and recognised. This is exactly the sort of case worth checking before applying.',
    alternative:
      'A standard employment residence visa is the normal route, with a Golden Visa application once your role, salary or qualification position changes.',
    services: [
      { label: 'Visa services', href: '/services/visa-services' },
      { label: 'Document attestation', href: '/services/document-clearing-services' },
    ],
  },
  {
    value: 'healthcare',
    label: 'Doctor or healthcare professional',
    icon: HeartPulse,
    hint: 'Licensed medical and allied health professionals',
    question: 'Are you licensed to practise in the UAE, or hold recognised specialist credentials?',
    questionHint:
      'Healthcare routes generally require licensing by the relevant UAE health authority, or recognised specialisation in a priority field.',
    strong:
      'Healthcare professionals are a priority category. Licensing status and specialisation are the deciding factors, and the supporting documents need to come from the right authority.',
    review:
      'Healthcare routes depend on your specialisation, licensing status and where your credentials were issued. A short assessment will clarify where you stand.',
    alternative:
      'An employment residence visa through your employer is the usual route while licensing or specialisation is being established.',
    services: [
      { label: 'Visa services', href: '/services/visa-services' },
      { label: 'Document attestation', href: '/services/document-clearing-services' },
    ],
  },
  {
    value: 'science',
    label: 'Scientist or researcher',
    icon: FlaskConical,
    hint: 'Researchers with published work or accreditation',
    question: 'Do you hold a doctorate or recognised research accreditation in your field?',
    questionHint:
      'Scientist routes generally require accreditation from the relevant UAE body, supported by published research or significant contribution to the field.',
    strong:
      'Scientist and researcher routes are strong where accreditation is in place. The recommendation from the relevant UAE body is usually the decisive document.',
    review:
      'These applications rest on accreditation and evidenced contribution to your field. Worth reviewing what you can evidence before you apply.',
    alternative:
      'An employment or academic residence visa is the standard route while accreditation is being pursued.',
    services: [
      { label: 'Visa services', href: '/services/visa-services' },
      { label: 'Document attestation', href: '/services/document-clearing-services' },
    ],
  },
  {
    value: 'student',
    label: 'Outstanding student or graduate',
    icon: GraduationCap,
    hint: 'High achievers from UAE or ranked universities',
    question: 'Did you graduate with distinction from a UAE or highly ranked international university?',
    questionHint:
      'Student routes generally require a high grade average from an approved UAE institution, or a degree from a highly ranked international university.',
    strong:
      'Student and graduate routes are genuinely accessible for high achievers. Grade average, institution ranking and recency of graduation are what count.',
    review:
      'Eligibility depends on your grade average, your institution’s ranking and how recently you graduated. A quick check will tell you whether it is worth applying now.',
    alternative:
      'If you do not qualify yet, a job-seeker or employment visa is the usual path — and forming a company is a route many graduates take instead.',
    services: [
      { label: 'Visa services', href: '/services/visa-services' },
      { label: 'Company registration', href: '/services/company-registration' },
    ],
  },
  {
    value: 'creative',
    label: 'Creative in culture or art',
    icon: Palette,
    hint: 'Artists, writers, musicians, filmmakers',
    question: 'Can you evidence recognised standing in your field, with endorsement from a UAE cultural body?',
    questionHint:
      'Creative routes generally require a recommendation from the relevant UAE cultural authority alongside evidence of standing in your field.',
    strong:
      'Creative routes work where the endorsement is obtainable. Building the portfolio and securing the recommendation is the substantive part of the work.',
    review:
      'These applications rest almost entirely on the endorsement and the strength of your portfolio. Worth an honest assessment before investing time in it.',
    alternative:
      'A freelance permit or a media free zone licence gives you residency and a compliant base to build the portfolio from.',
    services: [
      { label: 'Company registration', href: '/services/company-registration' },
      { label: 'Visa services', href: '/services/visa-services' },
    ],
  },
];

const answerOptions: { value: Verdict; label: string; hint: string }[] = [
  { value: 'strong', label: 'Yes', hint: 'That describes my situation' },
  { value: 'review', label: 'Not sure', hint: 'I would need to check the details' },
  { value: 'alternative', label: 'No', hint: 'Not currently' },
];

const verdictStyles: Record<Verdict, { label: string; className: string }> = {
  strong: {
    label: 'Worth applying',
    className: 'border-emerald-200 bg-emerald-50 text-emerald-800',
  },
  review: {
    label: 'Needs a proper check',
    className: 'border-amber-200 bg-amber-50 text-amber-900',
  },
  alternative: {
    label: 'Another route first',
    className: 'border-sky-200 bg-sky-50 text-sky-900',
  },
};

export default function EligibilityChecker() {
  const [profile, setProfile] = useState<Profile | null>(null);
  const [verdict, setVerdict] = useState<Verdict | null>(null);

  function restart() {
    setProfile(null);
    setVerdict(null);
  }

  /* ── Result ── */
  if (profile && verdict) {
    const style = verdictStyles[verdict];
    const body =
      verdict === 'strong'
        ? profile.strong
        : verdict === 'review'
          ? profile.review
          : profile.alternative;

    return (
      <section className="section bg-white">
        <div className="container-x">
          <div className="mx-auto max-w-3xl">
            <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-soft sm:p-10">
              <span
                className={`inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-bold uppercase tracking-wider ${style.className}`}
              >
                <Sparkles className="h-3.5 w-3.5" />
                {style.label}
              </span>

              <h2 className="mt-5 text-2xl font-extrabold leading-tight sm:text-3xl">
                {profile.label} —{' '}
                <span className="gradient-text">
                  {verdict === 'alternative' ? 'here is the practical route' : 'here is where you stand'}
                </span>
              </h2>

              <p className="mt-5 text-sm leading-relaxed text-ink-500 sm:text-base">{body}</p>

              <div className="mt-7 flex items-start gap-3 rounded-2xl border border-amber-200 bg-amber-50 p-5">
                <Info className="mt-0.5 h-5 w-5 shrink-0 text-amber-600" />
                <p className="text-xs leading-relaxed text-amber-900">
                  <span className="font-bold">This result is indicative only.</span> Golden Visa
                  categories, thresholds and evidence requirements are set by the UAE authorities
                  (ICP and GDRFA) and are revised from time to time. Nothing here is a decision on
                  your application or a guarantee of approval — only the authorities can determine
                  eligibility. We will confirm the current criteria for your case before you spend
                  anything.
                </p>
              </div>

              <div className="mt-8">
                <h3 className="text-base font-bold text-ink-900">Where to go next</h3>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {profile.services.map((s) => (
                    <a
                      key={s.href}
                      href={s.href}
                      className="group flex items-center justify-between gap-3 rounded-2xl border border-slate-200 bg-white px-5 py-4 text-sm font-semibold text-ink-900 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-blue/40 hover:text-brand-blue hover:shadow-card"
                    >
                      {s.label}
                      <ArrowRight className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-1" />
                    </a>
                  ))}
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link href="/golden-visa" className="btn-ghost">
                  Read the Golden Visa guide
                </Link>
                <button type="button" onClick={restart} className="btn-ghost">
                  <RotateCcw className="h-4 w-4" /> Check another profile
                </button>
              </div>
            </div>

            <div className="mt-8 rounded-3xl border border-slate-100 bg-slate-50/70 p-6 shadow-soft sm:p-10">
              <h2 className="text-2xl font-extrabold text-ink-900">Get a proper assessment</h2>
              <p className="mt-2 text-sm leading-relaxed text-ink-500">
                Send your details and an advisor will confirm the current criteria for your
                category, tell you honestly whether it is worth applying now, and set out exactly
                what evidence you would need.
              </p>
              <div className="mt-7">
                <LeadForm
                  source={`Golden Visa eligibility — ${profile.label} — ${style.label}`}
                  defaultService="Golden Visa"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  /* ── Step 2: qualifying question ── */
  if (profile) {
    const Icon = profile.icon;
    return (
      <section className="section bg-white">
        <div className="container-x">
          <div className="mx-auto max-w-3xl">
            <button
              type="button"
              onClick={() => setProfile(null)}
              className="inline-flex items-center gap-2 text-sm font-semibold text-ink-500 transition-colors hover:text-brand-blue"
            >
              <ArrowLeft className="h-4 w-4" /> Change profile
            </button>

            <div className="mt-6 flex items-center gap-4">
              <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-brand-gradient text-white shadow-glow">
                <Icon className="h-6.5 w-6.5" />
              </span>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-ink-400">
                  Step 2 of 2
                </p>
                <p className="text-lg font-bold text-ink-900">{profile.label}</p>
              </div>
            </div>

            <h2 className="mt-8 text-2xl font-extrabold leading-tight text-ink-900 sm:text-3xl">
              {profile.question}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-ink-500">{profile.questionHint}</p>

            <fieldset className="mt-8">
              <legend className="sr-only">{profile.question}</legend>
              <div className="grid gap-3 sm:grid-cols-3">
                {answerOptions.map((opt) => (
                  <button
                    key={opt.value}
                    type="button"
                    onClick={() => setVerdict(opt.value)}
                    className="group flex min-h-[88px] flex-col items-start rounded-2xl border border-slate-200 bg-white p-5 text-left transition-all duration-200 hover:-translate-y-0.5 hover:border-brand-blue/40 hover:shadow-card"
                  >
                    <span className="text-base font-bold text-ink-900 group-hover:text-brand-blue">
                      {opt.label}
                    </span>
                    <span className="mt-1.5 text-xs leading-relaxed text-ink-500">{opt.hint}</span>
                  </button>
                ))}
              </div>
            </fieldset>
          </div>
        </div>
      </section>
    );
  }

  /* ── Step 1: profile ── */
  return (
    <section className="section bg-white">
      <div className="container-x">
        <div className="mx-auto max-w-4xl">
          <p className="text-xs font-bold uppercase tracking-wider text-ink-400">Step 1 of 2</p>
          <h2 className="mt-2.5 text-2xl font-extrabold leading-tight text-ink-900 sm:text-3xl">
            Which of these describes you best?
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-ink-500 sm:text-base">
            The Golden Visa is not one visa — it is several categories with different criteria. Pick
            the closest match. If more than one applies, start with the strongest.
          </p>

          <fieldset className="mt-8">
            <legend className="sr-only">Select the profile that describes you</legend>
            <div className="grid gap-3 sm:grid-cols-2">
              {profiles.map((p) => {
                const Icon = p.icon;
                return (
                  <button
                    key={p.value}
                    type="button"
                    onClick={() => setProfile(p)}
                    className="group flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 text-left transition-all duration-200 hover:-translate-y-0.5 hover:border-brand-blue/40 hover:shadow-card"
                  >
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-gradient-soft text-brand-blue transition-colors duration-300 group-hover:bg-brand-gradient group-hover:text-white">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-sm font-bold text-ink-900 group-hover:text-brand-blue">
                        {p.label}
                      </span>
                      <span className="mt-1 block text-xs leading-relaxed text-ink-500">
                        {p.hint}
                      </span>
                    </span>
                  </button>
                );
              })}
            </div>
          </fieldset>

          <div className="mt-10 flex items-start gap-3 rounded-2xl border border-slate-100 bg-slate-50/70 p-5">
            <Briefcase className="mt-0.5 h-5 w-5 shrink-0 text-brand-cyan-dark" />
            <p className="text-xs leading-relaxed text-ink-500">
              None of these quite fit? There are additional categories including executive directors,
              pioneers of humanitarian work and frontline heroes.{' '}
              <Link href="/contact" className="font-semibold text-brand-blue hover:underline">
                Tell us your situation
              </Link>{' '}
              and we will tell you which category applies — or that none does, if that is the honest
              answer.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
