import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { DEFAULT_SHARE_IMAGE } from '@/lib/seo';
import { siteImages } from '@/lib/site-images';
import { categories } from '@/lib/catalog';
import { services, servicesInCategory } from '@/lib/services';
import PageHero from '@/components/ui/PageHero';
import Reveal from '@/components/ui/Reveal';
import { ServiceCard } from '@/components/services/RelatedServices';
import Contact from '@/components/sections/Contact';

const SITE = 'https://www.smartgicvisa.com';
const url = `${SITE}/services`;
const title = 'Business Setup, Visa, Tax, Accounting & Audit Services in Dubai | Smartgic Visa';
const description = `All ${services.length} Smartgic Visa services in one place: business setup, corporate services, licensing and PRO, visas, tax, compliance, accounting and audit for UAE companies.`;

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  keywords: [
    'corporate services Dubai',
    'business setup services UAE',
    'tax and accounting services Dubai',
    'PRO services Dubai',
    'audit services UAE',
  ],
  alternates: { canonical: url },
  openGraph: { type: 'website', locale: 'en_AE', url, siteName: 'Smartgic Visa', title, description, images: [DEFAULT_SHARE_IMAGE] },
  twitter: { card: 'summary_large_image', title, description, images: [DEFAULT_SHARE_IMAGE] },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  '@id': `${url}/#page`,
  url,
  name: title,
  description,
  isPartOf: { '@id': `${SITE}/#website` },
  mainEntity: {
    '@type': 'ItemList',
    itemListElement: services.map((s, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: s.navLabel,
      url: `${SITE}/services/${s.slug}`,
    })),
  },
};

export default function ServicesHubPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main id="main">
        <PageHero
          variant="center"
          image={siteImages.dubaiBusinessDistrictAerial}
          eyebrow={`${services.length} services · ${categories.length} practice areas`}
          title={
            <>
              Every service your UAE company <span className="accent">will ever need</span>
            </>
          }
          subtitle="Setup, licensing, visas, tax, compliance, accounting and audit — delivered by one licensed team that already knows your file."
          crumbs={[{ label: 'Home', href: '/' }, { label: 'Services' }]}
        >
          <nav aria-label="Practice areas" className="rise-in mx-auto mt-10 flex max-w-4xl flex-wrap justify-center gap-2" style={{ '--d': '380ms' } as React.CSSProperties}>
            {categories.map((c) => (
              <a key={c.slug} href={`#${c.slug}`} className="chip-dark transition-colors hover:border-brand-cyan/40 hover:text-white">
                {c.label}
              </a>
            ))}
          </nav>
        </PageHero>

        {categories.map((c, ci) => {
          const list = servicesInCategory(c.slug);
          const Icon = c.icon;
          return (
            <section key={c.slug} id={c.slug} className={`section scroll-mt-24 ${ci % 2 ? 'bg-surface' : 'bg-white'}`} aria-labelledby={`${c.slug}-heading`}>
              <div className="container-x">
                <div className="flex flex-col justify-between gap-6 border-b border-slate-200/80 pb-8 sm:flex-row sm:items-end">
                  <Reveal>
                    <div className="flex items-start gap-4">
                      <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-navy-900 text-brand-cyan">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </span>
                      <div>
                        <p className="font-mono text-[0.68rem] uppercase tracking-[0.18em] text-teal">
                          {String(ci + 1).padStart(2, '0')} · {list.length} services
                        </p>
                        <h2 id={`${c.slug}-heading`} className="mt-1.5 text-display-md font-semibold text-ink-900">
                          {c.label}
                        </h2>
                        <p className="mt-2 max-w-2xl text-[0.97rem] leading-relaxed text-ink-500">{c.tagline}</p>
                      </div>
                    </div>
                  </Reveal>
                  <Link href={`/services/${c.slug}`} className="btn-ghost btn-sm shrink-0 self-start sm:self-auto">
                    {c.short} overview <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </div>
                <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {list.map((s, i) => (
                    <Reveal key={s.slug} delay={(i % 4) * 60} className="h-full">
                      <ServiceCard service={s} />
                    </Reveal>
                  ))}
                </div>
              </div>
            </section>
          );
        })}

        <Contact source="Services hub" />
      </main>
    </>
  );
}
