import { ArrowRight, CheckCircle2, ShieldCheck, Star, Sparkles } from 'lucide-react';
import { company, stats } from '@/lib/data';
import Reveal from '../ui/Reveal';

const heroChecks = ['100% Foreign Ownership', '5-Day Setup', 'All-Inclusive Pricing'];

const trackerRows = [
  { label: 'Trade name reserved', done: true },
  { label: 'Initial approval issued', done: true },
  { label: 'Trade license active', done: true },
  { label: 'Investor visa stamping', done: false },
];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-brand-navy pt-[72px] text-white">
      {/* Aurora background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="aurora left-[-10%] top-[-10%] h-[420px] w-[420px] bg-brand-cyan/40" />
        <div className="aurora right-[-8%] top-[6%] h-[480px] w-[480px] bg-brand-blue/50" />
        <div className="aurora bottom-[-20%] left-[30%] h-[420px] w-[520px] bg-brand-blue-dark/40" />
        <div className="absolute inset-0 grid-pattern opacity-[0.55]" />
      </div>

      <div className="container-x relative grid gap-14 pb-24 pt-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-10 lg:pb-28 lg:pt-20">
        {/* Left: copy */}
        <div>
          <span className="inline-flex animate-fade-up items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-brand-cyan opacity-0 backdrop-blur">
            <Sparkles className="h-3.5 w-3.5" />
            Dubai • Licensed by DET
          </span>

          <h1
            className="mt-6 animate-fade-up text-balance text-4xl font-extrabold leading-[1.05] tracking-tight !text-white opacity-0 sm:text-5xl lg:text-6xl"
            style={{ animationDelay: '90ms' }}
          >
            Launch your <span className="gradient-text">Dubai business</span> the smart way.
          </h1>

          <p
            className="mt-6 max-w-xl animate-fade-up text-lg leading-relaxed text-slate-300 opacity-0"
            style={{ animationDelay: '180ms' }}
          >
            From company formation and trade licenses to residence &amp; Golden Visas, PRO services
            and corporate banking — Smartgic handles your entire UAE journey, end to end, for
            founders in 120+ countries.
          </p>

          <ul
            className="mt-7 flex animate-fade-up flex-wrap gap-x-6 gap-y-2 opacity-0"
            style={{ animationDelay: '270ms' }}
          >
            {heroChecks.map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm font-medium text-slate-200">
                <CheckCircle2 className="h-4.5 w-4.5 text-brand-cyan" />
                {item}
              </li>
            ))}
          </ul>

          <div
            className="mt-9 flex animate-fade-up flex-col gap-3 opacity-0 sm:flex-row sm:items-center"
            style={{ animationDelay: '360ms' }}
          >
            <a href="#contact" className="btn-gradient group w-full sm:w-auto">
              Get a Free Consultation
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a href="#pricing" className="btn-white w-full sm:w-auto">
              View Pricing
            </a>
          </div>

          <div
            className="mt-9 flex animate-fade-up items-center gap-5 opacity-0"
            style={{ animationDelay: '450ms' }}
          >
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4.5 w-4.5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <p className="text-sm text-slate-300">
              <span className="font-semibold text-white">4.9/5</span> from 500+ founders worldwide
            </p>
          </div>
        </div>

        {/* Right: glass dashboard visual */}
        <div
          className="relative mx-auto w-full max-w-md animate-fade-up opacity-0 lg:max-w-none"
          style={{ animationDelay: '300ms' }}
        >
          <div className="relative animate-float rounded-3xl border border-white/15 bg-white/[0.07] p-6 shadow-2xl backdrop-blur-xl">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-brand-gradient shadow-glow">
                  <ShieldCheck className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">Your Setup Tracker</p>
                  <p className="text-xs text-slate-400">Smartgic • Live status</p>
                </div>
              </div>
              <span className="rounded-full bg-emerald-400/15 px-3 py-1 text-xs font-semibold text-emerald-300">
                On track
              </span>
            </div>

            <div className="mt-6 space-y-3">
              {trackerRows.map((row) => (
                <div
                  key={row.label}
                  className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3"
                >
                  <span className="text-sm text-slate-200">{row.label}</span>
                  {row.done ? (
                    <CheckCircle2 className="h-5 w-5 text-brand-cyan" />
                  ) : (
                    <span className="h-3 w-3 animate-pulse rounded-full bg-amber-400" />
                  )}
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-xl bg-brand-gradient p-px">
              <div className="rounded-[11px] bg-brand-navy/80 px-4 py-3">
                <div className="flex items-center justify-between text-xs text-slate-300">
                  <span>Overall progress</span>
                  <span className="font-semibold text-white">80%</span>
                </div>
                <div className="mt-2 h-2 overflow-hidden rounded-full bg-white/10">
                  <div className="h-full w-4/5 rounded-full bg-brand-gradient" />
                </div>
              </div>
            </div>
          </div>

          {/* Floating license badge */}
          <div className="absolute -left-4 -top-5 hidden rounded-2xl border border-white/15 bg-white px-4 py-3 text-brand-navy shadow-xl sm:block">
            <p className="text-[0.65rem] font-semibold uppercase tracking-wider text-ink-400">
              DET License
            </p>
            <p className="text-lg font-extrabold tracking-tight">{company.licenseNo}</p>
          </div>

          {/* Floating visa badge */}
          <div className="absolute -bottom-6 -right-2 hidden items-center gap-3 rounded-2xl border border-white/15 bg-white px-4 py-3 text-brand-navy shadow-xl sm:flex">
            <div className="grid h-10 w-10 place-items-center rounded-xl bg-amber-400/15 text-lg">⭐</div>
            <div>
              <p className="text-sm font-bold leading-tight">Golden Visa</p>
              <p className="text-xs text-ink-400">10-year residency</p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats strip */}
      <div className="relative border-t border-white/10 bg-white/[0.03] backdrop-blur">
        <div className="container-x grid grid-cols-2 gap-px lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 80}>
              <div className="px-2 py-7 text-center">
                <p className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                  {s.value}
                </p>
                <p className="mt-1 text-sm text-slate-400">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
