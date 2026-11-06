import type { Metadata } from 'next';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

import HomeHero from '@/components/home/HomeHero';
import PracticeAreas, { AuthorityStrip } from '@/components/home/PracticeAreas';
import FeaturedServices, { type FeaturedItem } from '@/components/home/FeaturedServices';
import Lifecycle, { type LifecycleStage } from '@/components/home/Lifecycle';
import { EmiratesSection, GoldenVisaBand, Sectors, ToolsGrid, WhySmartgic } from '@/components/home/HomeSections';
import { PackageCards } from '@/components/services/ServicePackages';
import ServiceFaq from '@/components/services/ServiceFaq';
import ProcessTimeline from '@/components/services/ProcessTimeline';
import GuidesSection from '@/components/blog/GuidesSection';
import Contact from '@/components/sections/Contact';
import SectionHeading from '@/components/ui/SectionHeading';
import Reveal from '@/components/ui/Reveal';
import Aurora from '@/components/ui/Aurora';

import { activeSocialLinks, company, engagementSteps, faqs, packages } from '@/lib/data';
import { categories } from '@/lib/catalog';
import { services, servicesBySlug } from '@/lib/services';
import { jurisdictionSlugs } from '@/lib/freezones';
import { getServiceImage } from '@/lib/site-images';
import { getAllPosts } from '@/lib/blog';
import { DEFAULT_SHARE_IMAGE } from '@/lib/seo';

const SITE = 'https://www.smartgicvisa.com';
const title = 'Dubai Business Setup & UAE Visa Services | Smartgic Visa';
const description =
  'Company formation, UAE visas, PRO, corporate tax, VAT, accounting and audit from a DET-licensed consultancy in Dubai. Free consultation.';

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: `${SITE}/` },
  openGraph: {
    type: 'website',
    locale: 'en_AE',
    url: `${SITE}/`,
    siteName: 'Smartgic Visa',
    title,
    description,
    images: [DEFAULT_SHARE_IMAGE],
  },
  twitter: { card: 'summary_large_image', title, description, images: [DEFAULT_SHARE_IMAGE] },
};

/** Services featured in the homepage carousel. */
const FEATURED = [
  'company-registration',
  'free-zone-company-formation',
  'investor-visa',
  'corporate-tax-registration',
  'vat-registration',
  'accounting-services',
  'external-audit',
  'trade-licence',
];

/** A company's life in the UAE, mapped to the services at each stage. */
const LIFECYCLE: { title: string; desc: string; links: string[] }[] = [
  { title: 'Plan', desc: 'Choose the jurisdiction, structure and activities.', links: ['/cost-estimator', '/free-zones', 'company-registration'] },
  { title: 'Form', desc: 'Get licensed and open the company’s accounts.', links: ['mainland-company-formation', 'free-zone-company-formation', 'bank-account-opening'] },
  { title: 'Settle', desc: 'Residence for you, your team and your family.', links: ['investor-visa', 'employment-visa', 'family-visa'] },
  { title: 'Operate', desc: 'Day-to-day government work, payroll and renewals.', links: ['corporate-pro-services', 'trade-license-renewals', 'payroll-services'] },
  { title: 'Comply', desc: 'Tax registrations, returns and AML duties.', links: ['corporate-tax-registration', 'vat-return-filing', 'aml-compliance'] },
  { title: 'Report & change', desc: 'Books, audits, restructures — and exits.', links: ['accounting-services', 'external-audit', 'liquidation-deregistration'] },
];

const PAGE_LABELS: Record<string, string> = {
  '/cost-estimator': 'Setup cost estimator',
  '/free-zones': 'Compare jurisdictions',
};

export default function Home() {
  const latestGuides = getAllPosts().slice(0, 3);
  const serviceCount = services.length;
  const zoneCount = jurisdictionSlugs.length;

  const featured: FeaturedItem[] = FEATURED.map((slug) => servicesBySlug[slug])
    .filter(Boolean)
    .map((s) => {
      const img = getServiceImage(s.slug, s.category);
      return {
        href: `/services/${s.slug}`,
        label: s.navLabel,
        eyebrow: categories.find((c) => c.slug === s.category)?.short ?? s.eyebrow,
        blurb: s.blurb ?? s.eyebrow,
        image: { src: img.src, alt: img.alt, position: img.position },
      };
    });

  const stages: LifecycleStage[] = LIFECYCLE.map((st, i) => ({
    step: String(i + 1).padStart(2, '0'),
    title: st.title,
    desc: st.desc,
    links: st.links.map((l) =>
      l.startsWith('/')
        ? { label: PAGE_LABELS[l] ?? l, href: l }
        : { label: servicesBySlug[l]?.navLabel ?? l, href: `/services/${l}` },
    ),
  }));

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${SITE}/#organization`,
        name: 'Smartgic Visa',
        legalName: company.legalName,
        url: `${SITE}/`,
        logo: `${SITE}/logo.png`,
        description:
          'DET-licensed Dubai consultancy for company formation, UAE visas, PRO, corporate tax, VAT, accounting and audit services.',
        email: company.email,
        telephone: company.phone,
        // Only real, verified profile URLs belong in sameAs.
        ...(activeSocialLinks.length > 0 ? { sameAs: activeSocialLinks.map((s) => s.href) } : {}),
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Smartgic Visa services',
          itemListElement: categories.map((c) => ({
            '@type': 'OfferCatalog',
            name: c.label,
            url: `${SITE}/services/${c.slug}`,
            itemListElement: c.services.map((slug) => ({
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: servicesBySlug[slug]?.navLabel ?? slug,
                url: `${SITE}/services/${slug}`,
              },
            })),
          })),
        },
      },
      {
        '@type': 'LocalBusiness',
        '@id': `${SITE}/#localbusiness`,
        name: 'Smartgic Visa',
        url: `${SITE}/`,
        telephone: company.phone,
        email: company.email,
        image: `${SITE}/logo.png`,
        priceRange: '$$',
        address: {
          '@type': 'PostalAddress',
          streetAddress: company.address,
          addressLocality: 'Dubai',
          addressCountry: 'AE',
        },
        areaServed: { '@type': 'Country', name: 'United Arab Emirates' },
        openingHoursSpecification: {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
          opens: '09:00',
          closes: '18:00',
        },
        // aggregateRating is deliberately absent: there is no verifiable review
        // source yet. Add it only once reviews come from e.g. a Google Business
        // Profile.
      },
      {
        '@type': 'WebSite',
        '@id': `${SITE}/#website`,
        url: `${SITE}/`,
        name: 'Smartgic Visa',
        publisher: { '@id': `${SITE}/#organization` },
      },
      {
        '@type': 'FAQPage',
        '@id': `${SITE}/#faq`,
        mainEntity: faqs.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main id="main">
        <HomeHero serviceCount={serviceCount} zoneCount={zoneCount} />
        <AuthorityStrip />
        <PracticeAreas />

        <section className="section overflow-hidden bg-surface">
          <FeaturedServices items={featured} />
          <div className="container-wide mt-10 flex justify-center">
            <Link href="/services" className="btn-ghost">
              Browse all {serviceCount} services <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </section>

        {/* Company lifecycle */}
        <section className="section-lg bg-white">
          <div className="container-wide">
            <SectionHeading
              eyebrow="One partner, every stage"
              title={
                <>
                  From your first licence <span className="accent">to your annual audit</span>
                </>
              }
              description="Most companies juggle several firms as they grow. With Smartgic, the team that formed your company also keeps it compliant."
            />
            <div className="mt-16">
              <Lifecycle stages={stages} />
            </div>
          </div>
        </section>

        <WhySmartgic serviceCount={serviceCount} categoryCount={categories.length} zoneCount={zoneCount} />

        {/* How we work */}
        <section className="section-lg on-dark relative isolate overflow-hidden bg-navy-900 text-slate-300">
          <Aurora intensity="subtle" />
          <div className="container-wide relative grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
            <div className="lg:sticky lg:top-36 lg:self-start">
              <SectionHeading
                dark
                align="left"
                eyebrow="How we work"
                title={
                  <>
                    Clear steps, <span className="accent">no surprises</span>
                  </>
                }
                description="Every engagement follows the same four steps — so you always know what happens next, and what it costs."
                actions={
                  <a href="#contact" className="btn-primary btn-sheen">
                    Start with a free consultation <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                }
              />
            </div>
            <Reveal delay={100}>
              <ProcessTimeline steps={engagementSteps} dark />
            </Reveal>
          </div>
        </section>

        <EmiratesSection />

        {/* Packages */}
        <section id="pricing" className="section-lg scroll-mt-24 bg-white">
          <div className="container-wide">
            <SectionHeading
              eyebrow="Transparent pricing"
              title={
                <>
                  Setup packages, <span className="accent">clearly priced</span>
                </>
              }
              description="Starting prices for our most requested setups. Your written quote itemises our fee and every government fee separately."
            />
            <div className="mt-14">
              <PackageCards packages={packages} />
            </div>
            <Reveal delay={120}>
              <p className="mt-8 text-center text-sm text-ink-400">
                Prices are starting points for our service fee and exclude government and authority fees.{' '}
                <Link href="/pricing" className="font-medium text-brand-blue hover:underline">
                  See what is and isn’t included
                </Link>
                .
              </p>
            </Reveal>
          </div>
        </section>

        <GoldenVisaBand />
        <ToolsGrid />
        <Sectors />
        <ServiceFaq
          faqs={faqs}
          label="Business setup"
          eyebrow="Good to know"
          title={
            <>
              Questions founders <span className="accent">ask first</span>
            </>
          }
        />
        <GuidesSection
          posts={latestGuides}
          eyebrow="Guides & insights"
          title={
            <>
              Read up before <span className="accent">you decide</span>
            </>
          }
          description="Plain-English guides on setting up, licensing and staying compliant in the UAE."
        />
        <Contact source="Homepage" />
      </main>
    </>
  );
}
