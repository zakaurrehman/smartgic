import Image from 'next/image';
import type { CSSProperties } from 'react';
import { ArrowRight, CheckCircle2, MessageCircle, ShieldCheck } from 'lucide-react';
import type { Service } from '@/lib/services';
import type { Category } from '@/lib/catalog';
import { company } from '@/lib/data';
import { getServiceImage } from '@/lib/site-images';
import Breadcrumbs from '../ui/Breadcrumbs';
import Aurora from '../ui/Aurora';

/**
 * Service page hero: copy and calls to action on the left; the service's photo
 * on the right with an "at a glance" glass card of checkable facts overlapping
 * its lower edge.
 */
export default function ServiceHero({ service, category }: { service: Service; category: Category }) {
  const Icon = service.icon;
  const photo = getServiceImage(service.slug, service.category);
  const whatsappHref = `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(
    `Hello Smartgic, I'd like to ask about ${service.navLabel}.`,
  )}`;

  return (
    <section className="on-dark relative isolate overflow-hidden bg-navy-900 pt-[calc(var(--header-h)+1rem)] text-slate-300">
      <Aurora intensity="subtle" />

      <div className="container-x relative pb-16 pt-8 sm:pb-20 lg:pb-24 lg:pt-12">
        <div className="grid items-center gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:gap-14">
          <div>
            <Breadcrumbs
              light
              className="rise-in"
              items={[
                { label: 'Home', href: '/' },
                { label: 'Services', href: '/services' },
                { label: category.label, href: `/services/${category.slug}` },
                { label: service.navLabel },
              ]}
            />
            <p className="eyebrow-dark rise-in mt-7" style={{ '--d': '60ms' } as CSSProperties}>
              {category.short} · {service.eyebrow}
            </p>
            <h1 className="rise-in mt-5 text-display-xl font-semibold text-white" style={{ '--d': '120ms' } as CSSProperties}>
              {service.title}
            </h1>
            <p className="lead rise-in mt-6 max-w-2xl !text-slate-300" style={{ '--d': '200ms' } as CSSProperties}>
              {service.heroSubtitle}
            </p>
            <ul className="rise-in mt-7 flex flex-wrap gap-x-6 gap-y-2.5" style={{ '--d': '260ms' } as CSSProperties}>
              {service.heroHighlights.map((h) => (
                <li key={h} className="flex items-center gap-2 text-sm text-slate-200">
                  <CheckCircle2 className="h-4 w-4 text-brand-cyan" aria-hidden="true" />
                  {h}
                </li>
              ))}
            </ul>
            <div className="rise-in mt-9 flex flex-col gap-3 sm:flex-row" style={{ '--d': '320ms' } as CSSProperties}>
              <a href="#contact" className="btn-primary btn-sheen">
                Book a free consultation <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="btn-glass">
                <MessageCircle className="h-4 w-4 text-[#25D366]" aria-hidden="true" /> WhatsApp us
              </a>
            </div>
            <p className="rise-in mt-7 flex items-center gap-2 text-xs text-slate-400" style={{ '--d': '380ms' } as CSSProperties}>
              <ShieldCheck className="h-4 w-4 text-brand-cyan" aria-hidden="true" />
              Licensed by Dubai DET · Licence <span className="font-mono text-slate-200">{company.licenseNo}</span>
            </p>
          </div>

          <div className="rise-in relative" style={{ '--d': '180ms' } as CSSProperties}>
            <div className="pointer-events-none absolute -inset-4 rounded-[2.5rem] bg-brand-gradient opacity-20 blur-3xl" aria-hidden="true" />
            <div className="relative aspect-[4/3.1] overflow-hidden rounded-[1.75rem] border border-white/15 bg-navy-800 shadow-float">
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                priority
                placeholder="blur"
                sizes="(min-width: 1280px) 540px, (min-width: 1024px) 44vw, 100vw"
                className="object-cover"
                style={{ objectPosition: photo.position ?? '50% 50%' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/50 via-transparent to-transparent" aria-hidden="true" />
              <span className="absolute left-4 top-4 grid h-12 w-12 place-items-center rounded-2xl bg-white/90 text-brand-blue shadow-soft backdrop-blur">
                <Icon className="h-6 w-6" aria-hidden="true" />
              </span>
            </div>

            {/* At a glance — checkable facts only (see lib/service-types.ts). */}
            <div className="relative -mt-12 px-3 sm:-mt-14 sm:px-6">
              <div className="rounded-3xl border border-white/10 bg-navy-900/80 p-5 shadow-float backdrop-blur-xl sm:p-6">
                <p className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-brand-cyan">At a glance</p>
                <dl className="mt-4 grid grid-cols-2 gap-x-5 gap-y-4">
                  {service.stats.map((s) => (
                    <div key={s.label} className="flex min-w-0 flex-col">
                      <dt className="order-2 mt-0.5 text-xs leading-snug text-slate-400">{s.label}</dt>
                      <dd className="order-1 text-xl font-semibold tracking-tight text-white sm:text-2xl">{s.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
