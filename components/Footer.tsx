import Link from 'next/link';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Linkedin,
  Instagram,
  Facebook,
  type LucideIcon,
} from 'lucide-react';
import { activeSocialLinks, company, mapsHref } from '@/lib/data';
import { serviceNav } from '@/lib/services';
import { featuredZoneSlugs, jurisdictionsBySlug } from '@/lib/freezones';
import BrandMark from './ui/BrandMark';

const socialIcons: Record<string, LucideIcon> = {
  LinkedIn: Linkedin,
  Instagram: Instagram,
  Facebook: Facebook,
};

const companyLinks = [
  { label: 'About Us', href: '/about' },
  { label: 'Corporate Services', href: '/services' },
  { label: 'Jurisdictions', href: '/free-zones' },
  { label: 'Pricing & Packages', href: '/pricing' },
  { label: 'Golden Visa', href: '/golden-visa' },
  { label: 'Blog & Insights', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

const toolLinks = [
  { label: 'Cost Estimator', href: '/cost-estimator' },
  { label: 'Golden Visa Eligibility', href: '/golden-visa/eligibility' },
  { label: 'Compare Jurisdictions', href: '/free-zones' },
];

const footerZones = featuredZoneSlugs
  .map((slug) => jurisdictionsBySlug[slug])
  .filter(Boolean)
  .map((z) => ({ slug: z.slug, label: z.name.split(' — ')[0] }));

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-brand-navy text-slate-300">
      <div className="pointer-events-none absolute inset-0">
        <div className="aurora left-[-5%] top-[-30%] h-72 w-72 bg-brand-blue/25" />
        <div className="aurora right-[-5%] bottom-[-40%] h-72 w-72 bg-brand-cyan/20" />
      </div>

      <div className="container-x relative">
        <div className="grid gap-10 py-16 sm:grid-cols-2 lg:grid-cols-[1.3fr_0.8fr_1.1fr_0.9fr_1fr] lg:gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <BrandMark className="h-10 w-10" withWordmark wordmarkClassName="text-white" />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-slate-400">
              {company.legalName} — your licensed Dubai partner for business setup, immigration and
              PRO services. Serving founders from 120+ countries.
            </p>

            <p className="mt-5 inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs text-slate-300">
              Licensed by DET · No.{' '}
              <span className="font-semibold text-white">{company.licenseNo}</span>
            </p>

            {activeSocialLinks.length > 0 && (
              <div className="mt-6 flex gap-3">
                {activeSocialLinks.map((s) => {
                  const Icon = socialIcons[s.label];
                  return (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Smartgic Visa on ${s.label}`}
                      className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/5 text-slate-300 transition-colors hover:border-brand-cyan/40 hover:bg-brand-gradient hover:text-white"
                    >
                      {Icon ? <Icon className="h-4.5 w-4.5" /> : s.label.slice(0, 2)}
                    </a>
                  );
                })}
              </div>
            )}
          </div>

          <FooterColumn title="Company" links={companyLinks} />

          {/* Services */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              Corporate Services
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              {serviceNav.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-slate-400 transition-colors hover:text-brand-cyan"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Jurisdictions + tools */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">Jurisdictions</h3>
            <ul className="mt-5 space-y-3 text-sm">
              {footerZones.map((z) => (
                <li key={z.slug}>
                  <Link
                    href={`/free-zones/${z.slug}`}
                    className="text-slate-400 transition-colors hover:text-brand-cyan"
                  >
                    {z.label}
                  </Link>
                </li>
              ))}
            </ul>

            <h3 className="mt-8 text-sm font-bold uppercase tracking-wider text-white">
              Free Tools
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              {toolLinks.map((t) => (
                <li key={t.href}>
                  <Link
                    href={t.href}
                    className="text-slate-400 transition-colors hover:text-brand-cyan"
                  >
                    {t.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">Get in touch</h3>
            <ul className="mt-5 space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4.5 w-4.5 shrink-0 text-brand-cyan" />
                <a href={`tel:${company.phoneHref}`} className="hover:text-white">
                  {company.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4.5 w-4.5 shrink-0 text-brand-cyan" />
                <a href={`mailto:${company.email}`} className="break-all hover:text-white">
                  {company.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4.5 w-4.5 shrink-0 text-brand-cyan" />
                <a
                  href={mapsHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  {company.address}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="mt-0.5 h-4.5 w-4.5 shrink-0 text-brand-cyan" />
                <span>{company.hours}</span>
              </li>
            </ul>

            <Link href="/contact" className="btn-gradient mt-6 w-full !py-3 text-sm">
              Free Consultation
            </Link>
          </div>
        </div>

        {/* Independence notice */}
        <div className="border-t border-white/10 py-7">
          <p className="text-xs leading-relaxed text-slate-500">
            {company.legalName} is a privately owned business setup and immigration consultancy
            licensed by the {company.authority}. We are not a government entity and are not
            affiliated with, endorsed by or acting on behalf of any UAE government or free zone
            authority. Content on this site is general information, not legal, tax or immigration
            advice. Government fees, processing times and visa eligibility are set by the relevant
            authorities, vary case by case and are not guaranteed. All third-party names and
            trademarks are the property of their respective owners.
          </p>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 py-7 text-xs text-slate-400 sm:flex-row">
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
            <Link href="/contact" className="transition-colors hover:text-brand-cyan">
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h3 className="text-sm font-bold uppercase tracking-wider text-white">{title}</h3>
      <ul className="mt-5 space-y-3 text-sm">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className="text-slate-400 transition-colors hover:text-brand-cyan">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
