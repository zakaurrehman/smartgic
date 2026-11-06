'use client';

import { useCallback, useEffect, useRef, useState, type ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { usePathname } from 'next/navigation';
import { AnimatePresence, m } from 'framer-motion';
import {
  ArrowRight,
  ArrowUpRight,
  CalendarCheck,
  ChevronDown,
  Menu,
  MessageCircle,
  Phone,
  Search,
  X,
} from 'lucide-react';
import type { NavCategory, NavData } from '@/lib/nav';
import { company } from '@/lib/data';
import { cn } from '@/lib/cn';
import BrandMark from './ui/BrandMark';
import { navIcons } from './layout/nav-icons';

const CommandPalette = dynamic(() => import('./layout/CommandPalette'), { ssr: false });

type MenuKey = 'services' | 'zones' | 'resources';

const whatsappHref = `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(
  "Hello Smartgic, I'd like to book a consultation.",
)}`;

/**
 * Site header.
 *
 * Sits transparent over every page's navy hero, then condenses into a floating
 * glass bar once the page scrolls. Desktop has three menus — a services mega
 * menu (category rail → that category's services → a featured photo), a
 * jurisdictions panel and a resources list — opened by hover intent or click,
 * closed by Escape, outside click or navigation. Mobile gets a full-screen
 * sheet with nested accordions. Search (⌘K, Ctrl+K or "/") opens a command
 * palette over every service, jurisdiction, guide and page.
 */
export default function Header({ nav }: { nav: NavData }) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menu, setMenu] = useState<MenuKey | null>(null);
  const [active, setActive] = useState(nav.categories[0]?.slug);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [paletteOpen, setPaletteOpen] = useState(false);
  const headerRef = useRef<HTMLElement | null>(null);
  const openTimer = useRef<number | null>(null);
  const closeTimer = useRef<number | null>(null);

  /* Close everything on navigation — adjusted during render when the path
     changes (React's recommended alternative to a reset effect). */
  const [lastPath, setLastPath] = useState(pathname);
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setMenu(null);
    setMobileOpen(false);
  }

  /* Warm the search palette's code while the browser is idle, so ⌘K opens
     instantly. The search index itself is only fetched on first open. */
  useEffect(() => {
    const w = window as Window & {
      requestIdleCallback?: (cb: () => void, opts?: { timeout: number }) => number;
      cancelIdleCallback?: (id: number) => void;
    };
    const prefetch = () => void import('./layout/CommandPalette');
    if (w.requestIdleCallback) {
      const id = w.requestIdleCallback(prefetch, { timeout: 5000 });
      return () => w.cancelIdleCallback?.(id);
    }
    const t = window.setTimeout(prefetch, 3000);
    return () => window.clearTimeout(t);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* Escape closes menus; ⌘K / Ctrl+K / "/" opens search. */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement | null;
      const typing =
        target && (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.isContentEditable);
      if ((e.key === 'k' || e.key === 'K') && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setPaletteOpen(true);
        setMenu(null);
        return;
      }
      if (e.key === '/' && !typing) {
        e.preventDefault();
        setPaletteOpen(true);
        setMenu(null);
        return;
      }
      if (e.key === 'Escape') {
        if (menu) {
          const trigger = headerRef.current?.querySelector<HTMLElement>(`[data-menu-trigger="${menu}"]`);
          setMenu(null);
          trigger?.focus();
        }
        setMobileOpen(false);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [menu]);

  /* Outside click closes desktop menus. */
  useEffect(() => {
    if (!menu) return;
    const onDown = (e: PointerEvent) => {
      if (!headerRef.current?.contains(e.target as Node)) setMenu(null);
    };
    document.addEventListener('pointerdown', onDown);
    return () => document.removeEventListener('pointerdown', onDown);
  }, [menu]);

  /* Lock page scroll behind the mobile sheet. */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  /**
   * Keyboard gate for the skip link: Next.js moves focus to the top of the
   * document after client navigation, which lands on the skip link, so it is
   * only revealed once the visitor has actually pressed Tab.
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

  const clearTimers = () => {
    if (openTimer.current) window.clearTimeout(openTimer.current);
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
  };
  const hoverOpen = useCallback((key: MenuKey) => {
    clearTimers();
    openTimer.current = window.setTimeout(() => setMenu(key), 90);
  }, []);
  const hoverClose = useCallback(() => {
    clearTimers();
    closeTimer.current = window.setTimeout(() => setMenu(null), 180);
  }, []);

  const light = scrolled || menu !== null; // dark text on a light bar
  const activeCategory = nav.categories.find((c) => c.slug === active) ?? nav.categories[0];

  return (
    <>
      <a href="#main" className="skip-link">
        Skip to main content
      </a>

      <header
        ref={headerRef}
        className={cn('fixed inset-x-0 top-0 z-50 transition-[padding] duration-500 ease-premium', scrolled ? 'pt-2.5' : 'pt-0')}
        onMouseLeave={hoverClose}
        onMouseEnter={() => closeTimer.current && window.clearTimeout(closeTimer.current)}
      >
        <div className="container-wide">
          <div
            className={cn(
              'relative flex h-[68px] items-center justify-between gap-4 rounded-[22px] px-3 transition-[background-color,box-shadow,border-color,backdrop-filter] duration-500 ease-premium sm:px-4',
              light
                ? 'border border-slate-200/80 bg-white/85 shadow-[0_8px_40px_-12px_rgba(10,23,48,0.18)] backdrop-blur-xl'
                : 'border border-transparent bg-transparent',
            )}
          >
            <Link href="/" className="flex shrink-0 items-center rounded-lg" aria-label="Smartgic Immigration — home">
              <BrandMark
                className="h-8 w-8"
                withWordmark
                wordmarkClassName={light ? 'text-navy-900' : 'text-white'}
                subClassName={light ? 'text-teal' : 'text-brand-cyan'}
              />
            </Link>

            {/* ── Desktop navigation ── */}
            <nav className="hidden lg:block" aria-label="Primary">
              <ul className="flex items-center gap-0.5">
                <MenuTrigger id="services" label="Services" menu={menu} setMenu={setMenu} hoverOpen={hoverOpen} light={light} />
                <MenuTrigger id="zones" label="Jurisdictions" menu={menu} setMenu={setMenu} hoverOpen={hoverOpen} light={light} />
                <TopLink href="/golden-visa" label="Golden Visa" light={light} active={pathname?.startsWith('/golden-visa')} />
                <MenuTrigger id="resources" label="Resources" menu={menu} setMenu={setMenu} hoverOpen={hoverOpen} light={light} />
                <TopLink href="/about" label="About" light={light} active={pathname === '/about'} />
                <TopLink href="/contact" label="Contact" light={light} active={pathname === '/contact'} className="hidden xl:block" />
              </ul>
            </nav>

            {/* ── Actions ── */}
            <div className="flex items-center gap-1.5 sm:gap-2">
              <button
                type="button"
                onClick={() => setPaletteOpen(true)}
                className={cn(
                  'group hidden h-10 items-center gap-2 rounded-full border px-3 text-sm transition-colors sm:flex',
                  light
                    ? 'border-slate-200 bg-white text-ink-500 hover:border-brand-blue/30 hover:text-ink-900'
                    : 'border-white/15 bg-white/[0.06] text-slate-300 hover:bg-white/[0.12] hover:text-white',
                )}
              >
                <Search className="h-4 w-4" aria-hidden="true" />
                <span className="sr-only xl:not-sr-only">Search</span>
                <kbd aria-hidden="true"
                  className={cn(
                    'hidden rounded-md border px-1.5 font-mono text-[0.65rem] xl:inline',
                    light ? 'border-slate-200 text-ink-400' : 'border-white/15 text-slate-400',
                  )}
                >
                  ⌘K
                </kbd>
              </button>

              <a
                href={`tel:${company.phoneHref}`}
                className={cn(
                  'hidden h-10 items-center gap-2 rounded-full px-3 text-sm font-medium transition-colors lg:flex',
                  light ? 'text-ink-900 hover:text-brand-blue' : 'text-white hover:text-brand-cyan',
                )}
              >
                <Phone className="h-4 w-4 text-brand-cyan" aria-hidden="true" />
                <span className="hidden 2xl:inline">{company.phone}</span>
                <span className="sr-only 2xl:hidden">Call {company.phone}</span>
              </a>

              <Link href="/contact" className="btn-primary btn-sheen btn-sm hidden !min-h-[42px] !px-5 lg:inline-flex">
                Book a consultation
              </Link>

              <button
                type="button"
                onClick={() => setPaletteOpen(true)}
                className={cn(
                  'grid h-11 w-11 place-items-center rounded-xl border transition-colors sm:hidden',
                  light ? 'border-slate-200 bg-white text-ink-900' : 'border-white/15 bg-white/[0.08] text-white',
                )}
                aria-label="Search"
              >
                <Search className="h-5 w-5" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={() => setMobileOpen(true)}
                className={cn(
                  'grid h-11 w-11 place-items-center rounded-xl border transition-colors lg:hidden',
                  light ? 'border-slate-200 bg-white text-ink-900' : 'border-white/15 bg-white/[0.08] text-white',
                )}
                aria-label="Open menu"
                aria-expanded={mobileOpen}
                aria-controls="mobile-nav"
              >
                <Menu className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>

            {/* ── Desktop panels ── */}
            <AnimatePresence>
              {menu && (
                <m.div
                  key="panel"
                  initial={{ opacity: 0, y: -8, scale: 0.985 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -6, scale: 0.99, transition: { duration: 0.18 } }}
                  transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-x-0 top-full hidden pt-2.5 lg:block"
                  onMouseEnter={() => closeTimer.current && window.clearTimeout(closeTimer.current)}
                >
                  <div
                    id={`${menu}-menu`}
                    className="overflow-hidden rounded-[26px] border border-slate-200/80 bg-white shadow-[0_30px_80px_-24px_rgba(10,23,48,0.35)]"
                  >
                    {menu === 'services' && activeCategory && (
                      <ServicesPanel nav={nav} active={activeCategory} setActive={setActive} close={() => setMenu(null)} />
                    )}
                    {menu === 'zones' && <ZonesPanel nav={nav} close={() => setMenu(null)} />}
                    {menu === 'resources' && <ResourcesPanel nav={nav} close={() => setMenu(null)} />}
                  </div>
                </m.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </header>

      <MobileNav nav={nav} open={mobileOpen} onClose={() => setMobileOpen(false)} onSearch={() => setPaletteOpen(true)} />
      {paletteOpen && <CommandPalette onClose={() => setPaletteOpen(false)} />}
    </>
  );
}

/* ───────────────────────────── Desktop pieces ───────────────────────────── */

function MenuTrigger({
  id,
  label,
  menu,
  setMenu,
  hoverOpen,
  light,
}: {
  id: MenuKey;
  label: string;
  menu: MenuKey | null;
  setMenu: (m: MenuKey | null) => void;
  hoverOpen: (m: MenuKey) => void;
  light: boolean;
}) {
  const open = menu === id;
  return (
    <li onMouseEnter={() => hoverOpen(id)}>
      <button
        type="button"
        data-menu-trigger={id}
        aria-expanded={open}
        aria-controls={`${id}-menu`}
        onClick={() => setMenu(open ? null : id)}
        className={cn(
          'flex h-10 items-center gap-1 rounded-full px-3.5 text-[0.9rem] font-medium transition-colors',
          light ? 'text-ink-700 hover:bg-slate-100 hover:text-ink-900' : 'text-white/85 hover:bg-white/10 hover:text-white',
          open && (light ? 'bg-slate-100 text-ink-900' : 'bg-white/10 text-white'),
        )}
      >
        {label}
        <ChevronDown className={cn('h-4 w-4 opacity-70 transition-transform duration-300', open && 'rotate-180')} aria-hidden="true" />
      </button>
    </li>
  );
}

function TopLink({
  href,
  label,
  light,
  active,
  className,
}: {
  href: string;
  label: string;
  light: boolean;
  active?: boolean;
  className?: string;
}) {
  return (
    <li className={className}>
      <Link
        href={href}
        aria-current={active ? 'page' : undefined}
        className={cn(
          'flex h-10 items-center rounded-full px-3.5 text-[0.9rem] font-medium transition-colors',
          light ? 'text-ink-700 hover:bg-slate-100 hover:text-ink-900' : 'text-white/85 hover:bg-white/10 hover:text-white',
          active && (light ? 'text-brand-blue' : 'text-white'),
        )}
      >
        {label}
      </Link>
    </li>
  );
}

function ServicesPanel({
  nav,
  active,
  setActive,
  close,
}: {
  nav: NavData;
  active: NavCategory;
  setActive: (slug: NavCategory['slug']) => void;
  close: () => void;
}) {
  return (
    // Tall enough for the largest category (Tax: 14 services in two columns).
    <div className="relative grid min-h-[560px] grid-cols-[272px_1fr_288px]">
      {/* Category rail. Each category's service list follows it in the DOM, so
          Tab moves category → its services → next category. */}
      <ul className="border-r border-slate-100 bg-surface/70 p-3" aria-label="Service categories">
        {nav.categories.map((c) => {
          const Icon = navIcons[c.icon];
          const isActive = c.slug === active.slug;
          return (
            <li key={c.slug}>
              <Link
                href={c.href}
                onClick={close}
                onMouseEnter={() => setActive(c.slug)}
                onFocus={() => setActive(c.slug)}
                aria-current={isActive ? 'true' : undefined}
                className={cn(
                  'group flex items-center gap-3 rounded-2xl px-3 py-2.5 transition-all duration-200',
                  isActive ? 'bg-white shadow-card' : 'hover:bg-white/70',
                )}
              >
                <span
                  className={cn(
                    'grid h-9 w-9 shrink-0 place-items-center rounded-xl transition-colors',
                    isActive ? 'bg-brand-blue text-white' : 'bg-white text-brand-blue ring-1 ring-slate-200/80',
                  )}
                >
                  <Icon className="h-[18px] w-[18px]" aria-hidden="true" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className={cn('block text-sm font-semibold', isActive ? 'text-ink-900' : 'text-ink-700')}>
                    {c.label}
                  </span>
                  <span className="block text-xs text-ink-400">{c.services.length} services</span>
                </span>
                <ArrowRight
                  className={cn('h-4 w-4 shrink-0 transition-all', isActive ? 'text-brand-blue opacity-100' : 'opacity-0')}
                  aria-hidden="true"
                />
              </Link>

              {isActive && (
                <div className="absolute bottom-0 left-[272px] right-[288px] top-0 overflow-y-auto p-6">
                  <m.div
                    key={c.slug}
                    initial={{ opacity: 0, x: 8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <div className="flex items-start justify-between gap-4 border-b border-slate-100 pb-4">
                      <div>
                        <p className="text-base font-semibold text-ink-900">{c.label}</p>
                        <p className="mt-1 max-w-md text-sm leading-relaxed text-ink-500">{c.tagline}</p>
                      </div>
                      <Link
                        href={c.href}
                        onClick={close}
                        className="inline-flex shrink-0 items-center gap-1 rounded-full bg-surface px-3 py-1.5 text-xs font-semibold text-brand-blue hover:bg-surface-2"
                      >
                        Overview <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                      </Link>
                    </div>
                    <ul className="mt-3 grid grid-cols-2 gap-x-3 gap-y-0.5">
                      {c.services.map((s) => (
                        <li key={s.href}>
                          <Link
                            href={s.href}
                            onClick={close}
                            className="group block rounded-xl px-3 py-2.5 transition-colors hover:bg-surface"
                          >
                            <span className="flex items-center gap-1.5 text-sm font-medium text-ink-900 group-hover:text-brand-blue">
                              {s.label}
                            </span>
                            <span className="mt-0.5 line-clamp-1 block text-xs text-ink-400">{s.blurb}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                    {c.links.length > 0 && (
                      <div className="mt-4 flex flex-wrap gap-2 border-t border-slate-100 pt-4">
                        {c.links.map((l) => {
                          const Icon = l.icon ? navIcons[l.icon] : ArrowUpRight;
                          return (
                            <Link
                              key={l.href}
                              href={l.href}
                              onClick={close}
                              className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-3 py-1.5 text-xs font-medium text-ink-700 transition-colors hover:border-brand-blue/30 hover:text-brand-blue"
                            >
                              <Icon className="h-3.5 w-3.5 text-teal" aria-hidden="true" />
                              {l.label}
                            </Link>
                          );
                        })}
                      </div>
                    )}
                  </m.div>
                </div>
              )}
            </li>
          );
        })}
        <li className="mt-2 border-t border-slate-200/70 pt-2">
          <Link
            href="/services"
            onClick={close}
            className="flex items-center justify-between rounded-2xl px-3 py-2.5 text-sm font-semibold text-brand-blue transition-colors hover:bg-white/70"
          >
            All {nav.serviceCount} services
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </li>
      </ul>

      {/* Spacer column occupied by the active category's absolutely-positioned list. */}
      <div aria-hidden="true" />

      {/* Featured: the active category's photo and a consultation prompt. */}
      <div className="border-l border-slate-100 p-3">
        <div className="relative h-full min-h-[300px] overflow-hidden rounded-2xl bg-navy-900">
          <AnimatePresence initial={false}>
            {active.image && (
              <m.div
                key={active.slug}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.45 }}
                className="absolute inset-0"
              >
                <Image src={active.image.src} alt="" fill sizes="288px" className="object-cover" />
              </m.div>
            )}
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-900/55 to-navy-900/10" />
          <div className="absolute inset-x-0 bottom-0 p-5">
            <p className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-brand-cyan">Free consultation</p>
            <p className="mt-2 text-lg font-semibold leading-snug text-white">
              Not sure which service you need?
            </p>
            <p className="mt-1.5 text-sm leading-relaxed text-slate-300">
              Tell us your plan and we will map out the steps, costs and timeline.
            </p>
            <Link
              href="/contact"
              onClick={close}
              className="mt-4 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-navy-900 transition-transform hover:-translate-y-0.5"
            >
              Speak to an advisor <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function ZonesPanel({ nav, close }: { nav: NavData; close: () => void }) {
  return (
    <div className="grid grid-cols-[1fr_300px]">
      <div className="p-6">
        <p className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-ink-400">Most requested</p>
        <ul className="mt-3 grid grid-cols-3 gap-1">
          {nav.zones.map((z) => (
            <li key={z.slug}>
              <Link
                href={`/free-zones/${z.slug}`}
                onClick={close}
                className="group flex items-center gap-3 rounded-2xl p-2.5 transition-colors hover:bg-surface"
              >
                <span className="grid h-10 min-w-[2.75rem] shrink-0 place-items-center rounded-xl bg-navy-900 px-2 font-mono text-[0.65rem] font-semibold text-white transition-colors group-hover:bg-brand-blue">
                  {z.abbr}
                </span>
                <span className="min-w-0">
                  <span className="block truncate text-sm font-semibold text-ink-900 group-hover:text-brand-blue">{z.label}</span>
                  <span className="block truncate text-xs text-ink-400">{z.blurb}</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col justify-between gap-4 border-l border-slate-100 bg-surface/70 p-6">
        <div>
          <p className="text-base font-semibold text-ink-900">Not sure where to license?</p>
          <p className="mt-1.5 text-sm leading-relaxed text-ink-500">
            Compare all {nav.zoneCount} free zone, mainland and offshore options side by side, or let the estimator match
            your plan.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <Link href="/free-zones" onClick={close} className="btn-primary btn-sm">
            Compare all {nav.zoneCount} jurisdictions
          </Link>
          <Link href="/cost-estimator" onClick={close} className="btn-ghost btn-sm">
            Find my jurisdiction
          </Link>
        </div>
      </div>
    </div>
  );
}

function ResourcesPanel({ nav, close }: { nav: NavData; close: () => void }) {
  return (
    <div className="mx-auto grid max-w-3xl grid-cols-2 gap-1 p-4">
      {nav.resources.map((r) => {
        const Icon = r.icon ? navIcons[r.icon] : ArrowUpRight;
        return (
          <Link
            key={r.href}
            href={r.href}
            onClick={close}
            className="group flex items-start gap-3 rounded-2xl p-3 transition-colors hover:bg-surface"
          >
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-surface-2 text-brand-blue transition-colors group-hover:bg-brand-blue group-hover:text-white">
              <Icon className="h-5 w-5" aria-hidden="true" />
            </span>
            <span>
              <span className="block text-sm font-semibold text-ink-900 group-hover:text-brand-blue">{r.label}</span>
              <span className="mt-0.5 block text-xs text-ink-400">{r.blurb}</span>
            </span>
          </Link>
        );
      })}
    </div>
  );
}

/* ───────────────────────────── Mobile sheet ───────────────────────────── */

function MobileNav({
  nav,
  open,
  onClose,
  onSearch,
}: {
  nav: NavData;
  open: boolean;
  onClose: () => void;
  onSearch: () => void;
}) {
  const [section, setSection] = useState<string | null>(null);
  const [category, setCategory] = useState<string | null>(null);
  const closeRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (open) closeRef.current?.focus();
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <m.div
          id="mobile-nav"
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
          className="fixed inset-0 z-[60] flex flex-col bg-white lg:hidden"
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 24, transition: { duration: 0.2 } }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex h-[68px] shrink-0 items-center justify-between border-b border-slate-100 px-4">
            <Link href="/" onClick={onClose} aria-label="Smartgic Immigration — home">
              <BrandMark className="h-8 w-8" withWordmark />
            </Link>
            <button
              ref={closeRef}
              type="button"
              onClick={onClose}
              className="grid h-11 w-11 place-items-center rounded-xl border border-slate-200 text-ink-900"
              aria-label="Close menu"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto overscroll-contain px-4 pb-6 pt-4">
            <button
              type="button"
              onClick={() => {
                onClose();
                onSearch();
              }}
              className="flex h-12 w-full items-center gap-3 rounded-2xl border border-slate-200 bg-surface px-4 text-left text-sm text-ink-400"
            >
              <Search className="h-4 w-4" aria-hidden="true" /> Search services, free zones, guides…
            </button>

            <nav className="mt-4" aria-label="Mobile">
              <ul className="divide-y divide-slate-100">
                <li>
                  <MobileDisclosure
                    label="Services"
                    open={section === 'services'}
                    onToggle={() => setSection(section === 'services' ? null : 'services')}
                  >
                    <ul className="pb-2">
                      {nav.categories.map((c) => {
                        const Icon = navIcons[c.icon];
                        const expanded = category === c.slug;
                        return (
                          <li key={c.slug} className="rounded-2xl">
                            <button
                              type="button"
                              aria-expanded={expanded}
                              onClick={() => setCategory(expanded ? null : c.slug)}
                              className="flex w-full items-center gap-3 rounded-2xl px-2 py-2.5 text-left"
                            >
                              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-surface-2 text-brand-blue">
                                <Icon className="h-[18px] w-[18px]" aria-hidden="true" />
                              </span>
                              <span className="flex-1 text-[0.95rem] font-medium text-ink-900">{c.label}</span>
                              <ChevronDown
                                className={cn('h-4 w-4 text-ink-400 transition-transform', expanded && 'rotate-180')}
                                aria-hidden="true"
                              />
                            </button>
                            {expanded && (
                              <ul className="mb-2 ml-[3.25rem] border-l border-slate-100 pl-3">
                                <li>
                                  <Link href={c.href} onClick={onClose} className="block py-2 text-sm font-semibold text-brand-blue">
                                    {c.label} overview
                                  </Link>
                                </li>
                                {c.services.map((s) => (
                                  <li key={s.href}>
                                    <Link href={s.href} onClick={onClose} className="block py-2 text-sm text-ink-600">
                                      {s.label}
                                    </Link>
                                  </li>
                                ))}
                                {c.links.map((l) => (
                                  <li key={l.href}>
                                    <Link href={l.href} onClick={onClose} className="block py-2 text-sm text-ink-600">
                                      {l.label}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </li>
                        );
                      })}
                      <li>
                        <Link href="/services" onClick={onClose} className="mt-1 flex items-center gap-2 px-2 py-2.5 text-sm font-semibold text-brand-blue">
                          All {nav.serviceCount} services <ArrowRight className="h-4 w-4" aria-hidden="true" />
                        </Link>
                      </li>
                    </ul>
                  </MobileDisclosure>
                </li>
                <li>
                  <MobileDisclosure
                    label="Jurisdictions"
                    open={section === 'zones'}
                    onToggle={() => setSection(section === 'zones' ? null : 'zones')}
                  >
                    <ul className="grid grid-cols-2 gap-1 pb-3">
                      {nav.zones.map((z) => (
                        <li key={z.slug}>
                          <Link href={`/free-zones/${z.slug}`} onClick={onClose} className="flex items-center gap-2 rounded-xl px-2 py-2 text-sm text-ink-700">
                            <span className="rounded-md bg-navy-900 px-1.5 py-0.5 font-mono text-[0.6rem] text-white">{z.abbr}</span>
                            <span className="truncate">{z.label}</span>
                          </Link>
                        </li>
                      ))}
                      <li className="col-span-2">
                        <Link href="/free-zones" onClick={onClose} className="flex items-center gap-2 px-2 py-2 text-sm font-semibold text-brand-blue">
                          Compare all {nav.zoneCount} <ArrowRight className="h-4 w-4" aria-hidden="true" />
                        </Link>
                      </li>
                    </ul>
                  </MobileDisclosure>
                </li>
                <li>
                  <MobileDisclosure
                    label="Resources"
                    open={section === 'resources'}
                    onToggle={() => setSection(section === 'resources' ? null : 'resources')}
                  >
                    <ul className="pb-3">
                      {nav.resources.map((r) => (
                        <li key={r.href}>
                          <Link href={r.href} onClick={onClose} className="block rounded-xl px-2 py-2.5 text-sm text-ink-700">
                            {r.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </MobileDisclosure>
                </li>
                {[
                  { href: '/golden-visa', label: 'Golden Visa' },
                  { href: '/about', label: 'About us' },
                  { href: '/contact', label: 'Contact' },
                ].map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} onClick={onClose} className="flex items-center justify-between py-4 text-base font-medium text-ink-900">
                      {l.label}
                      <ArrowUpRight className="h-4 w-4 text-ink-400" aria-hidden="true" />
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="grid shrink-0 grid-cols-3 gap-2 border-t border-slate-100 bg-white p-3" style={{ paddingBottom: 'calc(0.75rem + env(safe-area-inset-bottom))' }}>
            <MobileAction href={`tel:${company.phoneHref}`} icon={<Phone className="h-5 w-5" aria-hidden="true" />} label="Call" />
            <MobileAction href={whatsappHref} external icon={<MessageCircle className="h-5 w-5" aria-hidden="true" />} label="WhatsApp" />
            <Link
              href="/contact"
              onClick={onClose}
              className="flex min-h-[56px] flex-col items-center justify-center gap-1 rounded-2xl bg-brand-blue text-white"
            >
              <CalendarCheck className="h-5 w-5" aria-hidden="true" />
              <span className="text-xs font-semibold">Book</span>
            </Link>
          </div>
        </m.div>
      )}
    </AnimatePresence>
  );
}

function MobileDisclosure({
  label,
  open,
  onToggle,
  children,
}: {
  label: string;
  open: boolean;
  onToggle: () => void;
  children: ReactNode;
}) {
  return (
    <div>
      <button
        type="button"
        aria-expanded={open}
        onClick={onToggle}
        className="flex w-full items-center justify-between py-4 text-left text-base font-medium text-ink-900"
      >
        {label}
        <ChevronDown className={cn('h-5 w-5 text-ink-400 transition-transform duration-300', open && 'rotate-180')} aria-hidden="true" />
      </button>
      {open && children}
    </div>
  );
}

function MobileAction({ href, icon, label, external }: { href: string; icon: ReactNode; label: string; external?: boolean }) {
  return (
    <a
      href={href}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className="flex min-h-[56px] flex-col items-center justify-center gap-1 rounded-2xl border border-slate-200 text-ink-900"
    >
      {icon}
      <span className="text-xs font-semibold">{label}</span>
    </a>
  );
}
