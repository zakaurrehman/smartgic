'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  Calculator,
  ChevronDown,
  Globe2,
  Menu,
  Phone,
  Sparkles,
  Tag,
  X,
  type LucideIcon,
} from 'lucide-react';
import { company } from '@/lib/data';
import { serviceNav } from '@/lib/services';
import { featuredZoneSlugs, jurisdictionsBySlug } from '@/lib/freezones';
import BrandMark from './ui/BrandMark';

/* ───────────────────────────── Nav data ───────────────────────────── */

const featuredZones = featuredZoneSlugs
  .map((slug) => jurisdictionsBySlug[slug])
  .filter(Boolean)
  .map((z) => ({
    slug: z.slug,
    abbr: z.abbr,
    label: z.name.split(' — ')[0],
    blurb: `${z.emirate} · ${z.costTier}`,
  }));

const tools: { href: string; label: string; blurb: string; icon: LucideIcon }[] = [
  {
    href: '/cost-estimator',
    label: 'Cost Estimator',
    blurb: 'Find your jurisdiction and indicative cost',
    icon: Calculator,
  },
  {
    href: '/golden-visa/eligibility',
    label: 'Golden Visa Eligibility',
    blurb: 'See which category fits your profile',
    icon: Sparkles,
  },
  {
    href: '/free-zones',
    label: 'Compare Jurisdictions',
    blurb: 'Search and filter every UAE option',
    icon: Globe2,
  },
  {
    href: '/pricing',
    label: 'Packages & Pricing',
    blurb: 'Transparent, all-inclusive quotes',
    icon: Tag,
  },
];

const sectionLinks = [
  { label: 'Golden Visa', href: '/golden-visa' },
  { label: 'Blog', href: '/blog' },
  { label: 'About', href: '/about' },
];

type MenuKey = 'services' | 'zones' | 'tools' | null;

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false); // mobile drawer
  const [menu, setMenu] = useState<MenuKey>(null); // desktop dropdown
  const [mobilePanel, setMobilePanel] = useState<MenuKey>(null);
  const navRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMenu(null);
        setOpen(false);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  /**
   * Marks the document as keyboard-driven so the skip link can reveal itself.
   *
   * Next.js moves focus to the top of the document after each client-side
   * navigation, which lands on the skip link. `:focus-visible` does not help —
   * Chrome treats that programmatic focus as focus-visible — so visibility is
   * gated on the visitor actually pressing Tab. Capture phase runs before the
   * browser moves focus, so the attribute is always set in time.
   */
  useEffect(() => {
    const root = document.documentElement;
    const onTab = (e: KeyboardEvent) => {
      if (e.key === 'Tab') root.dataset.kbd = 'true';
    };
    const onPointer = () => {
      delete root.dataset.kbd;
    };
    window.addEventListener('keydown', onTab, true);
    window.addEventListener('pointerdown', onPointer, true);
    return () => {
      window.removeEventListener('keydown', onTab, true);
      window.removeEventListener('pointerdown', onPointer, true);
    };
  }, []);

  const dark = !scrolled; // transparent header over dark hero → light text
  const linkBase = `whitespace-nowrap ${
    dark
      ? 'text-white/85 hover:bg-white/10 hover:text-white'
      : 'text-ink-700 hover:bg-slate-100 hover:text-brand-blue'
  }`;

  const closeAll = () => {
    setMenu(null);
    setOpen(false);
    setMobilePanel(null);
  };

  return (
    <>
      <a
        href="#main"
        className="skip-link"
      >
        Skip to main content
      </a>

      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'border-b border-slate-200/70 bg-white/85 backdrop-blur-xl shadow-[0_4px_24px_rgba(10,23,48,0.06)]'
            : 'bg-transparent'
        }`}
      >
        <div className="container-x flex h-[72px] items-center justify-between gap-4">
          {/* Logo: PNG on light header, vector wordmark on dark hero for contrast */}
          <Link href="/" className="flex shrink-0 items-center" aria-label="Smartgic Visa home">
            {scrolled ? (
              <Image
                src="/logo.png"
                alt="Smartgic Immigration"
                width={2405}
                height={623}
                priority
                className="h-9 w-auto sm:h-10"
              />
            ) : (
              <BrandMark className="h-9 w-9" withWordmark wordmarkClassName="text-white" />
            )}
          </Link>

          {/* Desktop nav */}
          <nav ref={navRef} className="hidden lg:block" aria-label="Primary">
            <ul className="flex items-center gap-0.5">
              <li>
                <Link
                  href="/"
                  className={`rounded-full px-3.5 py-2 text-sm font-medium transition-colors ${linkBase}`}
                >
                  Home
                </Link>
              </li>

              {/* Services */}
              <NavDropdown
                label="Services"
                id="services"
                open={menu === 'services'}
                setOpen={(v) => setMenu(v ? 'services' : null)}
                linkBase={linkBase}
                width="w-[640px]"
              >
                <div className="grid grid-cols-2 gap-1">
                  {serviceNav.map((s) => (
                    <MenuLink
                      key={s.slug}
                      href={`/services/${s.slug}`}
                      icon={s.icon}
                      label={s.label}
                      blurb={s.blurb}
                      onClick={closeAll}
                    />
                  ))}
                </div>
                <FooterLink href="/services" onClick={closeAll}>
                  View all corporate services
                </FooterLink>
              </NavDropdown>

              {/* Jurisdictions */}
              <NavDropdown
                label="Jurisdictions"
                id="zones"
                open={menu === 'zones'}
                setOpen={(v) => setMenu(v ? 'zones' : null)}
                linkBase={linkBase}
                width="w-[560px]"
              >
                <p className="px-3 pb-2 pt-1 text-xs font-bold uppercase tracking-wider text-ink-400">
                  Most requested
                </p>
                <div className="grid grid-cols-2 gap-1">
                  {featuredZones.map((z) => (
                    <Link
                      key={z.slug}
                      href={`/free-zones/${z.slug}`}
                      onClick={closeAll}
                      className="group flex items-center gap-3 rounded-2xl p-3 transition-colors hover:bg-slate-50"
                    >
                      <span className="grid h-10 shrink-0 place-items-center rounded-xl bg-brand-gradient-soft px-2.5 text-xs font-extrabold text-brand-blue transition-colors duration-300 group-hover:bg-brand-gradient group-hover:text-white">
                        {z.abbr}
                      </span>
                      <span className="min-w-0">
                        <span className="block truncate text-sm font-semibold text-ink-900 group-hover:text-brand-blue">
                          {z.label}
                        </span>
                        <span className="block truncate text-xs text-ink-400">{z.blurb}</span>
                      </span>
                    </Link>
                  ))}
                </div>
                <FooterLink href="/free-zones" onClick={closeAll}>
                  Compare all jurisdictions
                </FooterLink>
              </NavDropdown>

              {/* Tools */}
              <NavDropdown
                label="Tools"
                id="tools"
                open={menu === 'tools'}
                setOpen={(v) => setMenu(v ? 'tools' : null)}
                linkBase={linkBase}
                width="w-[380px]"
              >
                <div className="grid gap-1">
                  {tools.map((t) => (
                    <MenuLink
                      key={t.href}
                      href={t.href}
                      icon={t.icon}
                      label={t.label}
                      blurb={t.blurb}
                      onClick={closeAll}
                    />
                  ))}
                </div>
              </NavDropdown>

              {sectionLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`rounded-full px-3.5 py-2 text-sm font-medium transition-colors ${linkBase}`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden items-center gap-3 lg:flex">
            <a
              href={`tel:${company.phoneHref}`}
              className={`flex items-center gap-2 whitespace-nowrap text-sm font-semibold transition-colors ${
                dark ? 'text-white hover:text-brand-cyan' : 'text-ink-900 hover:text-brand-blue'
              }`}
            >
              <Phone className="h-4 w-4 text-brand-cyan" />
              <span className="hidden xl:inline">{company.phone}</span>
              <span className="sr-only xl:hidden">Call {company.phone}</span>
            </a>
            <Link href="/contact" className="btn-gradient whitespace-nowrap !px-5 !py-2.5">
              Free Consultation
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className={`grid h-11 w-11 place-items-center rounded-xl border transition-colors lg:hidden ${
              dark
                ? 'border-white/20 bg-white/10 text-white'
                : 'border-slate-200 bg-white text-ink-900'
            }`}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile drawer */}
        <div className={`lg:hidden ${open ? 'pointer-events-auto' : 'pointer-events-none'}`}>
          <div
            className={`fixed inset-0 top-[72px] bg-brand-navy/40 backdrop-blur-sm transition-opacity duration-300 ${
              open ? 'opacity-100' : 'opacity-0'
            }`}
            onClick={() => setOpen(false)}
          />
          <div
            className={`fixed inset-x-0 top-[72px] max-h-[calc(100dvh-72px)] origin-top overflow-y-auto border-t border-slate-100 bg-white px-5 pb-10 pt-4 shadow-soft transition-all duration-300 ${
              open ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'
            }`}
          >
            <nav className="flex flex-col gap-1" aria-label="Mobile">
              <Link
                href="/"
                onClick={closeAll}
                className="rounded-xl px-4 py-3 text-base font-medium text-ink-700 hover:bg-slate-50 hover:text-brand-blue"
              >
                Home
              </Link>

              <MobileAccordion
                label="Services"
                open={mobilePanel === 'services'}
                onToggle={() => setMobilePanel(mobilePanel === 'services' ? null : 'services')}
              >
                {serviceNav.map((s) => {
                  const Icon = s.icon;
                  return (
                    <Link
                      key={s.slug}
                      href={`/services/${s.slug}`}
                      onClick={closeAll}
                      className="flex items-center gap-3 rounded-lg px-3 py-3 text-sm font-medium text-ink-500 hover:bg-slate-50 hover:text-brand-blue"
                    >
                      <Icon className="h-4.5 w-4.5 shrink-0 text-brand-cyan-dark" />
                      {s.label}
                    </Link>
                  );
                })}
                <Link
                  href="/services"
                  onClick={closeAll}
                  className="mt-1 flex items-center gap-2 rounded-lg px-3 py-3 text-sm font-bold text-brand-blue hover:bg-slate-50"
                >
                  View all services <ArrowRight className="h-4 w-4" />
                </Link>
              </MobileAccordion>

              <MobileAccordion
                label="Jurisdictions"
                open={mobilePanel === 'zones'}
                onToggle={() => setMobilePanel(mobilePanel === 'zones' ? null : 'zones')}
              >
                {featuredZones.map((z) => (
                  <Link
                    key={z.slug}
                    href={`/free-zones/${z.slug}`}
                    onClick={closeAll}
                    className="flex items-center gap-3 rounded-lg px-3 py-3 text-sm font-medium text-ink-500 hover:bg-slate-50 hover:text-brand-blue"
                  >
                    <span className="grid h-7 shrink-0 place-items-center rounded-md bg-brand-gradient-soft px-2 text-[0.65rem] font-extrabold text-brand-blue">
                      {z.abbr}
                    </span>
                    {z.label}
                  </Link>
                ))}
                <Link
                  href="/free-zones"
                  onClick={closeAll}
                  className="mt-1 flex items-center gap-2 rounded-lg px-3 py-3 text-sm font-bold text-brand-blue hover:bg-slate-50"
                >
                  Compare all jurisdictions <ArrowRight className="h-4 w-4" />
                </Link>
              </MobileAccordion>

              <MobileAccordion
                label="Tools"
                open={mobilePanel === 'tools'}
                onToggle={() => setMobilePanel(mobilePanel === 'tools' ? null : 'tools')}
              >
                {tools.map((t) => {
                  const Icon = t.icon;
                  return (
                    <Link
                      key={t.href}
                      href={t.href}
                      onClick={closeAll}
                      className="flex items-center gap-3 rounded-lg px-3 py-3 text-sm font-medium text-ink-500 hover:bg-slate-50 hover:text-brand-blue"
                    >
                      <Icon className="h-4.5 w-4.5 shrink-0 text-brand-cyan-dark" />
                      {t.label}
                    </Link>
                  );
                })}
              </MobileAccordion>

              {sectionLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeAll}
                  className="rounded-xl px-4 py-3 text-base font-medium text-ink-700 hover:bg-slate-50 hover:text-brand-blue"
                >
                  {link.label}
                </Link>
              ))}

              <Link
                href="/contact"
                onClick={closeAll}
                className="rounded-xl px-4 py-3 text-base font-medium text-ink-700 hover:bg-slate-50 hover:text-brand-blue"
              >
                Contact
              </Link>
            </nav>

            <div className="mt-4 flex flex-col gap-3 border-t border-slate-100 pt-4">
              <a href={`tel:${company.phoneHref}`} className="btn-ghost w-full" onClick={closeAll}>
                <Phone className="h-4 w-4" /> {company.phone}
              </a>
              <Link href="/contact" className="btn-gradient w-full" onClick={closeAll}>
                Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

/* ───────────────────────────── Sub-components ───────────────────────────── */

function NavDropdown({
  label,
  id,
  open,
  setOpen,
  linkBase,
  width,
  children,
}: {
  label: string;
  id: string;
  open: boolean;
  setOpen: (v: boolean) => void;
  linkBase: string;
  width: string;
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLLIElement | null>(null);

  return (
    <li
      ref={ref}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onBlur={(e) => {
        if (!ref.current?.contains(e.relatedTarget as Node)) setOpen(false);
      }}
    >
      <button
        type="button"
        aria-haspopup="true"
        aria-expanded={open}
        aria-controls={`${id}-menu`}
        onClick={() => setOpen(!open)}
        className={`flex items-center gap-1.5 rounded-full px-3.5 py-2 text-sm font-medium transition-colors ${linkBase}`}
      >
        {label}
        <ChevronDown
          className={`h-4 w-4 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
          aria-hidden="true"
        />
      </button>

      <div
        id={`${id}-menu`}
        className={`absolute left-0 top-full z-50 ${width} max-w-[88vw] pt-3 transition-all duration-200 ${
          open ? 'visible translate-y-0 opacity-100' : 'invisible -translate-y-1 opacity-0'
        }`}
      >
        <div className="max-h-[min(600px,calc(100vh-110px))] overflow-y-auto overscroll-contain rounded-3xl border border-slate-100 bg-white p-3 shadow-soft">
          {children}
        </div>
      </div>
    </li>
  );
}

function MenuLink({
  href,
  icon: Icon,
  label,
  blurb,
  onClick,
}: {
  href: string;
  icon: LucideIcon;
  label: string;
  blurb: string;
  onClick: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="group flex items-start gap-3 rounded-2xl p-3 transition-colors hover:bg-slate-50"
    >
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-brand-gradient-soft text-brand-blue transition-colors duration-300 group-hover:bg-brand-gradient group-hover:text-white">
        <Icon className="h-5 w-5" />
      </span>
      <span className="min-w-0">
        <span className="block text-sm font-semibold text-ink-900 group-hover:text-brand-blue">
          {label}
        </span>
        <span className="mt-0.5 block truncate text-xs text-ink-400">{blurb}</span>
      </span>
    </Link>
  );
}

function FooterLink({
  href,
  onClick,
  children,
}: {
  href: string;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="mt-1 flex items-center justify-between rounded-2xl bg-brand-navy px-5 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-brand-navy-soft"
    >
      {children}
      <ArrowRight className="h-4 w-4" />
    </Link>
  );
}

function MobileAccordion({
  label,
  open,
  onToggle,
  children,
}: {
  label: string;
  open: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-xl">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-base font-medium text-ink-700 hover:bg-slate-50"
      >
        {label}
        <ChevronDown
          className={`h-5 w-5 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
          aria-hidden="true"
        />
      </button>
      <div
        className={`grid transition-all duration-300 ease-out ${
          open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <div className="ml-2 mt-1 flex flex-col gap-0.5 border-l border-slate-100 pl-2">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
