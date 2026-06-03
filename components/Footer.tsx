import { Phone, Mail, MapPin, Linkedin, Instagram, Facebook } from 'lucide-react';
import { company, navLinks, services } from '@/lib/data';
import BrandMark from './ui/BrandMark';

const socials = [
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Facebook, href: '#', label: 'Facebook' },
];

export default function Footer() {
  const year = new Date().getFullYear();
  const topServices = services.slice(0, 6);

  return (
    <footer className="relative overflow-hidden bg-brand-navy text-slate-300">
      <div className="pointer-events-none absolute inset-0">
        <div className="aurora left-[-5%] top-[-30%] h-72 w-72 bg-brand-blue/25" />
        <div className="aurora right-[-5%] bottom-[-40%] h-72 w-72 bg-brand-cyan/20" />
      </div>

      <div className="container-x relative">
        <div className="grid gap-12 py-16 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <BrandMark className="h-10 w-10" withWordmark wordmarkClassName="text-white" />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-slate-400">
              {company.legalName} — your licensed Dubai partner for business setup, immigration and
              PRO services. Serving founders from 120+ countries.
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/5 text-slate-300 transition-colors hover:border-brand-cyan/40 hover:bg-brand-gradient hover:text-white"
                  >
                    <Icon className="h-4.5 w-4.5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">Company</h3>
            <ul className="mt-5 space-y-3 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-slate-400 transition-colors hover:text-brand-cyan">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">Services</h3>
            <ul className="mt-5 space-y-3 text-sm">
              {topServices.map((service) => (
                <li key={service.title}>
                  <a
                    href="#services"
                    className="text-slate-400 transition-colors hover:text-brand-cyan"
                  >
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">Get in touch</h3>
            <ul className="mt-5 space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4.5 w-4.5 text-brand-cyan" />
                <a href={`tel:${company.phoneHref}`} className="hover:text-white">
                  {company.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4.5 w-4.5 text-brand-cyan" />
                <a href={`mailto:${company.email}`} className="hover:text-white">
                  {company.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4.5 w-4.5 text-brand-cyan" />
                <span>{company.address}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 py-7 text-xs text-slate-400 sm:flex-row">
          <p>
            © {year} {company.legalName} All rights reserved.
          </p>
          <p className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1">
            <span>Licensed by {company.authority}</span>
            <span className="hidden sm:inline">•</span>
            <span>
              License No. <span className="font-semibold text-slate-200">{company.licenseNo}</span>
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
