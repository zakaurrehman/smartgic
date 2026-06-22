'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { Menu, X, Phone, ChevronDown, ArrowRight } from 'lucide-react';
import { company } from '@/lib/data';
import { serviceNav } from '@/lib/services';
import BrandMark from './ui/BrandMark';

const sectionLinks = [
  { label: 'Free Zones', href: '/free-zones' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Golden Visa', href: '/golden-visa' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false); // mobile drawer
  const [mega, setMega] = useState(false); // desktop mega menu
  const [mobileServices, setMobileServices] = useState(false); // mobile accordion
  const megaRef = useRef<HTMLLIElement | null>(null);

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

  // Close menus on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMega(false);
        setOpen(false);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const dark = !scrolled; // transparent header over dark hero → light text
  const linkBase = dark
    ? 'text-white/85 hover:bg-white/10 hover:text-white'
    : 'text-ink-700 hover:bg-slate-100 hover:text-brand-blue';

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-slate-200/70 bg-white/85 backdrop-blur-xl shadow-[0_4px_24px_rgba(10,23,48,0.06)]'
          : 'bg-transparent'
      }`}
    >
      <div className="container-x flex h-[72px] items-center justify-between gap-6">
        {/* Logo: PNG on light header, vector wordmark on dark hero for contrast */}
        <a href="/" className="flex shrink-0 items-center" aria-label="Smartgic Visa home">
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
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:block">
          <ul className="flex items-center gap-1">
            <li>
              <a href="/" className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${linkBase}`}>
                Home
              </a>
            </li>

            {/* Mega menu */}
            <li
              ref={megaRef}
              className="relative"
              onMouseEnter={() => setMega(true)}
              onMouseLeave={() => setMega(false)}
              onBlur={(e) => {
                if (!megaRef.current?.contains(e.relatedTarget as Node)) setMega(false);
              }}
            >
              <button
                type="button"
                aria-haspopup="true"
                aria-expanded={mega}
                onClick={() => setMega((v) => !v)}
                className={`flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium transition-colors ${linkBase}`}
              >
                Corporate Services
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-300 ${mega ? 'rotate-180' : ''}`}
                />
              </button>

              {/* Panel */}
              <div
                className={`absolute left-0 top-full z-50 w-[640px] max-w-[88vw] pt-3 transition-all duration-200 ${
                  mega
                    ? 'visible translate-y-0 opacity-100'
                    : 'invisible -translate-y-1 opacity-0'
                }`}
              >
                <div className="overflow-hidden rounded-3xl border border-slate-100 bg-white p-3 shadow-soft">
                  <div className="grid grid-cols-2 gap-1">
                    {serviceNav.map((s) => {
                      const Icon = s.icon;
                      return (
                        <a
                          key={s.slug}
                          href={`/services/${s.slug}`}
                          className="group flex items-start gap-3 rounded-2xl p-3 transition-colors hover:bg-slate-50"
                          onClick={() => setMega(false)}
                        >
                          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-brand-gradient-soft text-brand-blue transition-colors duration-300 group-hover:bg-brand-gradient group-hover:text-white">
                            <Icon className="h-5 w-5" />
                          </span>
                          <span className="min-w-0">
                            <span className="block text-sm font-semibold text-ink-900 group-hover:text-brand-blue">
                              {s.label}
                            </span>
                            <span className="mt-0.5 block truncate text-xs text-ink-400">{s.blurb}</span>
                          </span>
                        </a>
                      );
                    })}
                  </div>
                  <a
                    href="/#services"
                    onClick={() => setMega(false)}
                    className="mt-1 flex items-center justify-between rounded-2xl bg-brand-navy px-5 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-brand-navy-soft"
                  >
                    View all corporate services
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </li>

            {sectionLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${linkBase}`}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={`tel:${company.phoneHref}`}
            className={`flex items-center gap-2 text-sm font-semibold transition-colors ${
              dark ? 'text-white hover:text-brand-cyan' : 'text-ink-900 hover:text-brand-blue'
            }`}
          >
            <Phone className="h-4 w-4 text-brand-cyan" />
            <span className="hidden xl:inline">{company.phone}</span>
          </a>
          <a href="#contact" className="btn-gradient !px-5 !py-2.5">
            Free Consultation
          </a>
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
          className={`fixed inset-x-0 top-[72px] max-h-[calc(100dvh-72px)] origin-top overflow-y-auto border-t border-slate-100 bg-white px-5 pb-8 pt-4 shadow-soft transition-all duration-300 ${
            open ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'
          }`}
        >
          <nav className="flex flex-col gap-1">
            <a href="/" onClick={() => setOpen(false)} className="rounded-xl px-4 py-3 text-base font-medium text-ink-700 hover:bg-slate-50 hover:text-brand-blue">
              Home
            </a>

            {/* Accordion */}
            <div className="rounded-xl">
              <button
                type="button"
                onClick={() => setMobileServices((v) => !v)}
                aria-expanded={mobileServices}
                className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-base font-medium text-ink-700 hover:bg-slate-50"
              >
                Corporate Services
                <ChevronDown className={`h-5 w-5 transition-transform duration-300 ${mobileServices ? 'rotate-180' : ''}`} />
              </button>
              <div
                className={`grid transition-all duration-300 ease-out ${
                  mobileServices ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                }`}
              >
                <div className="overflow-hidden">
                  <div className="ml-2 mt-1 flex flex-col gap-0.5 border-l border-slate-100 pl-2">
                    {serviceNav.map((s) => {
                      const Icon = s.icon;
                      return (
                        <a
                          key={s.slug}
                          href={`/services/${s.slug}`}
                          onClick={() => setOpen(false)}
                          className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-ink-500 hover:bg-slate-50 hover:text-brand-blue"
                        >
                          <Icon className="h-4.5 w-4.5 text-brand-cyan-dark" />
                          {s.label}
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            {sectionLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 text-base font-medium text-ink-700 hover:bg-slate-50 hover:text-brand-blue"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="mt-4 flex flex-col gap-3 border-t border-slate-100 pt-4">
            <a href={`tel:${company.phoneHref}`} className="btn-ghost w-full" onClick={() => setOpen(false)}>
              <Phone className="h-4 w-4" /> {company.phone}
            </a>
            <a href="#contact" className="btn-gradient w-full" onClick={() => setOpen(false)}>
              Free Consultation
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
