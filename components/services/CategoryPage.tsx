import Link from 'next/link';
import { ArrowRight, ArrowUpRight, Calculator, Crown, Globe2, Percent, Sparkles, Tag, type LucideIcon } from 'lucide-react';
import type { Category } from '@/lib/catalog';
import { servicesInCategory } from '@/lib/services';
import { engagementSteps } from '@/lib/data';
import { categoryImages } from '@/lib/site-images';
import { serviceOptionForCategory } from '@/lib/leads';
import PageHero from '../ui/PageHero';
import SectionHeading from '../ui/SectionHeading';
import Reveal from '../ui/Reveal';
import Spotlight from '../ui/Spotlight';
import Aurora from '../ui/Aurora';
import { ServiceCard } from './RelatedServices';
import ServiceFaq from './ServiceFaq';
import ProcessTimeline from './ProcessTimeline';
import Contact from '../sections/Contact';

/** The italic accent phrase in each hub's H1. */
const titleAccent: Record<string, string> = {
  'business-setup': 'across the UAE',
  'corporate-services': 'UAE companies',
  'licensing-government': 'government services',
  'visa-immigration': 'immigration services',
  'tax-services': 'UAE businesses',
  'compliance-risk': 'risk advisory',
  'accounting-bookkeeping': 'in Dubai',
  'audit-assurance': 'in the UAE',
};

const linkIcons: Record<string, LucideIcon> = {
  '/pricing': Tag,
  '/cost-estimator': Calculator,
  '/free-zones': Globe2,
  '/golden-visa': Crown,
  '/golden-visa/eligibility': Sparkles,
  '/corporate-tax-calculator': Percent,
  '/vat-calculator': Calculator,
};

function accented(title: string, accent?: string) {
  if (!accent || !title.endsWith(accent)) return title;
  return (
    <>
      {title.slice(0, title.length - accent.length)}
      <span className="accent">{accent}</span>
    </>
  );
}

/** Hub page for a service category: /services/<category>. */
export default function CategoryPage({ category }: { category: Category }) {
  const services = servicesInCategory(category.slug);
  const image = categoryImages[category.slug];

  return (
    <main id="main">
      <PageHero
        eyebrow={`Services · ${category.label}`}
        title={accented(category.title, titleAccent[category.slug])}
        subtitle={category.heroSubtitle}
        image={image}
        crumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: category.label },
        ]}
        aside={
          <div className="glass-dark rounded-3xl p-5">
            <p className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-brand-cyan">In this area</p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {services.slice(0, 6).map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className="chip-dark transition-colors hover:border-brand-cyan/40 hover:text-white">
                    {s.navLabel}
                  </Link>
                </li>
              ))}
              {services.length > 6 && (
                <li>
                  <a href="#services" className="chip-dark text-brand-cyan">
                    +{services.length - 6} more
                  </a>
                </li>
              )}
            </ul>
          </div>
        }
      />

      {/* Intro + framing pillars */}
      <section className="section bg-white">
        <div className="container-x grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <div>
            <Reveal>
              <span className="eyebrow">The essentials</span>
            </Reveal>
            <Reveal delay={70}>
              <h2 className="mt-5 text-display-lg font-semibold text-ink-900">{category.intro.heading}</h2>
            </Reveal>
            {category.intro.body.map((p, i) => (
              <Reveal key={i} delay={130 + i * 60}>
                <p className="mt-6 text-[1.05rem] leading-[1.8] text-ink-500">{p}</p>
              </Reveal>
            ))}
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {category.pillars.map((p, i) => (
              <Reveal key={p.title} delay={i * 70} className="h-full">
                <Spotlight className="card card-hover h-full p-6">
                  <span className="font-mono text-xs text-teal">{String(i + 1).padStart(2, '0')}</span>
                  <h3 className="mt-3 text-lg font-semibold text-ink-900">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-500">{p.desc}</p>
                </Spotlight>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Every service in the category */}
      <section id="services" className="section scroll-mt-28 bg-surface">
        <div className="container-x">
          <SectionHeading
            eyebrow={`${services.length} services`}
            title={
              <>
                Everything in <span className="accent">{category.label}</span>
              </>
            }
            description={category.tagline}
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={s.slug} delay={(i % 3) * 70} className="h-full">
                <ServiceCard service={s} />
              </Reveal>
            ))}
          </div>

          {category.links && category.links.length > 0 && (
            <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {category.links.map((l) => {
                const Icon = linkIcons[l.href] ?? ArrowUpRight;
                return (
                  <Reveal key={l.href}>
                    <Link href={l.href} className="group card card-hover flex items-center gap-4 p-5">
                      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-navy-900 text-brand-cyan">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block text-sm font-semibold text-ink-900 group-hover:text-brand-blue">{l.label}</span>
                        <span className="block text-xs text-ink-400">{l.blurb}</span>
                      </span>
                      <ArrowRight className="h-4 w-4 shrink-0 text-ink-400 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                    </Link>
                  </Reveal>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* How an engagement runs */}
      <section className="section on-dark relative isolate overflow-hidden bg-navy-900 text-slate-300">
        <Aurora intensity="subtle" />
        <div className="container-x relative grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div className="lg:sticky lg:top-40 lg:self-start">
            <SectionHeading
              dark
              align="left"
              eyebrow="How we work"
              title={
                <>
                  One adviser, <span className="accent">start to finish</span>
                </>
              }
              description="Every engagement follows the same four steps, so you always know what happens next and what it costs."
              actions={
                <a href="#contact" className="btn-primary btn-sheen">
                  Book a free consultation <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
              }
            />
          </div>
          <Reveal delay={100}>
            <ProcessTimeline steps={engagementSteps} dark />
          </Reveal>
        </div>
      </section>

      <ServiceFaq faqs={category.faqs} label={category.label} />
      <Contact source={`Category — ${category.label}`} defaultService={serviceOptionForCategory(category.slug)} />
    </main>
  );
}
