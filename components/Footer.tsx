import Link from 'next/link';
import {
  ArrowRight,
  Clock,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  type LucideIcon,
} from 'lucide-react';
import type { NavData } from '@/lib/nav';
import { activeSocialLinks, company, mapsHref } from '@/lib/data';
import BrandMark from './ui/BrandMark';
import Aurora from './ui/Aurora';

const socialIcons: Record<string, LucideIcon> = {
  LinkedIn: Linkedin,
  Instagram: Instagram,
  Facebook: Facebook,
};

const companyLinks = [
  { label: 'About us', href: '/about' },
  { label: 'All services', href: '/services' },
  { label: 'Packages & pricing', href: '/pricing' },
  { label: 'Compare jurisdictions', href: '/free-zones' },
  { label: 'UAE Golden Visa', href: '/golden-visa' },
  { label: 'Guides & insights', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

const whatsappHref = `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(
  "Hello Smartgic, I'd like to book a consultation.",
)}`;

/**
 * Site footer: a closing consultation panel, then complete navigation — every
 * category and service, the tools and company pages — so any page is one click
 * from the footer. Ends with the independence notice and legal links.
 */
export default function Footer({ nav }: { nav: NavData }) {
  const year = new Date().getFullYear();

  return (
    <footer className="on-dark relative isolate overflow-hidden bg-navy-950 text-slate-400" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Site footer
      </h2>
      <Aurora intensity="subtle" />

      {/* ── Closing call to action ── */}
      <div className="container-wide relative pt-16 sm:pt-20">
        <div className="border-gradient relative overflow-hidden rounded-[2rem] bg-white/[0.035] px-6 py-10 backdrop-blur sm:px-10 lg:flex lg:items-center lg:justify-between lg:gap-10 lg:px-14 lg:py-12">
          <div className="max-w-2xl">
            <p className="eyebrow-dark">Free first consultation</p>
            <p className="mt-4 text-display-md font-semibold text-white">
              Tell us what you are building. <span className="accent">We’ll map the route.</span>
            </p>
            <p className="mt-3 text-[0.95rem] leading-relaxed text-slate-400">
              Setup, visas, tax, accounting or audit — one conversation covers the steps, the documents and an itemised
              quote. No obligation.
            </p>
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:mt-0 lg:shrink-0">
            <Link href="/contact" className="btn-primary btn-sheen">
              Book a consultation <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="btn-glass">
              <MessageCircle className="h-4 w-4 text-[#25D366]" aria-hidden="true" /> WhatsApp us
            </a>
          </div>
        </div>
      </div>

      {/* ── Navigation ── */}
      <div className="container-wide relative">
        <div className="grid gap-12 py-16 lg:grid-cols-[minmax(0,300px)_1fr] lg:gap-16">
          {/* Brand + contact */}
          <div>
            <BrandMark className="h-10 w-10" withWordmark wordmarkClassName="text-white" subClassName="text-brand-cyan" />
            <p className="mt-5 text-sm leading-relaxed text-slate-400">
              {company.legalName} — a Dubai consultancy for business setup, visas, PRO, tax, accounting and audit.
            </p>

            <p className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 text-xs text-slate-300">
              <ShieldCheck className="h-3.5 w-3.5 text-brand-cyan" aria-hidden="true" />
              DET licence <span className="font-mono font-medium text-white">{company.licenseNo}</span>
            </p>

            <ul className="mt-7 space-y-3.5 text-sm">
              <li>
                <a href={`tel:${company.phoneHref}`} className="flex items-start gap-3 transition-colors hover:text-white">
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-brand-cyan" aria-hidden="true" />
                  {company.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${company.email}`} className="flex items-start gap-3 break-all transition-colors hover:text-white">
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-brand-cyan" aria-hidden="true" />
                  {company.email}
                </a>
              </li>
              <li>
                <a href={mapsHref} target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 transition-colors hover:text-white">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-cyan" aria-hidden="true" />
                  {company.address}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-brand-cyan" aria-hidden="true" />
                {company.hours}
              </li>
            </ul>

            {activeSocialLinks.length > 0 && (
              <div className="mt-6 flex gap-2.5">
                {activeSocialLinks.map((s) => {
                  const Icon = socialIcons[s.label];
                  return (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Smartgic Visa on ${s.label}`}
                      className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/[0.04] transition-colors hover:border-brand-cyan/40 hover:text-white"
                    >
                      {Icon ? <Icon className="h-4 w-4" aria-hidden="true" /> : s.label.slice(0, 2)}
                    </a>
                  );
                })}
              </div>
            )}
          </div>

          {/* Every category and its services, then company links */}
          <nav aria-label="Footer" className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 xl:grid-cols-4">
            {nav.categories.map((c) => (
              <div key={c.slug}>
                <h3 className="text-sm font-semibold text-white">
                  <Link href={c.href} className="transition-colors hover:text-brand-cyan">
                    {c.label}
                  </Link>
                </h3>
                <ul className="mt-4 space-y-2.5 text-[0.84rem]">
                  {c.services.map((s) => (
                    <li key={s.href}>
                      <Link href={s.href} className="transition-colors hover:text-white">
                        {s.label}
                      </Link>
                    </li>
                  ))}
                  {c.links
                    .filter((l) => l.href === '/golden-visa')
                    .map((l) => (
                      <li key={l.href}>
                        <Link href={l.href} className="transition-colors hover:text-white">
                          {l.label}
                        </Link>
                      </li>
                    ))}
                </ul>
              </div>
            ))}
            <div>
              <h3 className="text-sm font-semibold text-white">Company</h3>
              <ul className="mt-4 space-y-2.5 text-[0.84rem]">
                {companyLinks.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="transition-colors hover:text-white">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white">Free tools</h3>
              <ul className="mt-4 space-y-2.5 text-[0.84rem]">
                {nav.resources
                  .filter((r) => r.href !== '/pricing' && r.href !== '/blog')
                  .map((r) => (
                    <li key={r.href}>
                      <Link href={r.href} className="transition-colors hover:text-white">
                        {r.label}
                      </Link>
                    </li>
                  ))}
                <li>
                  <Link href="/free-zones" className="transition-colors hover:text-white">
                    Jurisdiction comparison
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>

        {/* Independence notice */}
        <div className="border-t border-white/10 py-7">
          <p className="max-w-5xl text-xs leading-relaxed text-slate-500">
            {company.legalName} is a privately owned business setup and immigration consultancy licensed by the{' '}
            {company.authority}. We are not a government entity and are not affiliated with, endorsed by or acting on
            behalf of any UAE government or free zone authority. Audit opinions are issued by UAE-registered auditors.
            Content on this site is general information, not legal, tax or immigration advice. Government fees,
            processing times and visa eligibility are set by the relevant authorities, vary case by case and are not
            guaranteed. All third-party names and trademarks are the property of their respective owners.
          </p>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 py-7 text-xs text-slate-500 sm:flex-row">
          <p>
            © {year} {company.legalName} All rights reserved.
          </p>
          <nav aria-label="Legal" className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            <Link href="/privacy" className="transition-colors hover:text-brand-cyan">
              Privacy Policy
            </Link>
            <Link href="/terms" className="transition-colors hover:text-brand-cyan">
              Terms of Service
            </Link>
            <Link href="/sitemap.xml" className="transition-colors hover:text-brand-cyan">
              Sitemap
            </Link>
          </nav>
        </div>
      </div>

      {/* Oversized wordmark, layered behind the bottom bar and cropped by the
          footer's edge — decorative, so it adds no height. */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 translate-y-[45%] select-none overflow-hidden">
        <p className="container-wide whitespace-nowrap text-center font-semibold leading-none tracking-[-0.06em] text-white/[0.035] [font-size:clamp(5rem,17vw,16rem)]">
          SMARTGIC
        </p>
      </div>
    </footer>
  );
}
