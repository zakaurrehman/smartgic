'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Menu, X, Phone } from 'lucide-react';
import { navLinks, company } from '@/lib/data';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

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

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-slate-200/70 bg-white/85 backdrop-blur-xl shadow-[0_4px_24px_rgba(10,23,48,0.06)]'
          : 'bg-transparent'
      }`}
    >
      <div className="container-x flex h-[72px] items-center justify-between gap-6">
        <a href="#top" className="flex shrink-0 items-center" aria-label="Smartgic Immigration home">
          <Image
            src="/logo.png"
            alt="Smartgic Immigration"
            width={2405}
            height={623}
            priority
            className="h-9 w-auto sm:h-10"
          />
        </a>

        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-ink-700 transition-colors hover:bg-slate-100 hover:text-brand-blue"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={`tel:${company.phoneHref}`}
            className="flex items-center gap-2 text-sm font-semibold text-ink-900 transition-colors hover:text-brand-blue"
          >
            <Phone className="h-4 w-4 text-brand-cyan" />
            {company.phone}
          </a>
          <a href="#contact" className="btn-gradient !px-5 !py-2.5">
            Free Consultation
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="grid h-11 w-11 place-items-center rounded-xl border border-slate-200 bg-white text-ink-900 lg:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={`lg:hidden ${open ? 'pointer-events-auto' : 'pointer-events-none'}`}
      >
        <div
          className={`fixed inset-0 top-[72px] bg-brand-navy/30 backdrop-blur-sm transition-opacity duration-300 ${
            open ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setOpen(false)}
        />
        <div
          className={`fixed inset-x-0 top-[72px] origin-top border-t border-slate-100 bg-white px-5 pb-8 pt-4 shadow-soft transition-all duration-300 ${
            open ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'
          }`}
        >
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 text-base font-medium text-ink-700 transition-colors hover:bg-slate-50 hover:text-brand-blue"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="mt-4 flex flex-col gap-3 border-t border-slate-100 pt-4">
            <a
              href={`tel:${company.phoneHref}`}
              className="btn-ghost w-full"
              onClick={() => setOpen(false)}
            >
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
