import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { DEFAULT_SHARE_IMAGE } from '@/lib/seo';

import ServiceHero from '@/components/services/ServiceHero';
import ServiceSubnav from '@/components/services/ServiceSubnav';
import ServiceIncluded from '@/components/services/ServiceIncluded';
import { Overview, Benefits, Process, Requirements } from '@/components/services/ServiceContent';
import ServicePackages from '@/components/services/ServicePackages';
import ServiceFaq from '@/components/services/ServiceFaq';
import RelatedServices from '@/components/services/RelatedServices';
import ServiceJurisdictions from '@/components/services/ServiceJurisdictions';
import CategoryPage from '@/components/services/CategoryPage';
import ToolSection from '@/components/tools/ToolSection';
import GuidesSection from '@/components/blog/GuidesSection';
import Contact from '@/components/sections/Contact';

import { getService, serviceSlugs } from '@/lib/services';
import { categoriesBySlug, categorySlugs, getCategory } from '@/lib/catalog';
import { serviceOptionForSlug } from '@/lib/leads';
import { getPostsBySlugs } from '@/lib/blog';
import { relatedGuidesByService } from '@/lib/related-guides';
import { getServiceImage, categoryImages } from '@/lib/site-images';

const SITE = 'https://www.smartgicvisa.com';

/** Categories whose services attach to a licence in a specific jurisdiction. */
const JURISDICTION_CATEGORIES = new Set(['business-setup', 'corporate-services', 'licensing-government']);

export function generateStaticParams() {
  return [...categorySlugs, ...serviceSlugs].map((slug) => ({ slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategory(slug);
  const service = category ? undefined : getService(slug);
  const entry = category ?? service;
  if (!entry) return {};

  const url = `${SITE}/services/${slug}`;
  const image = category ? categoryImages[category.slug] : getServiceImage(service!.slug, service!.category);
  const ogImage = image
    ? { url: image.src.src, width: image.src.width, height: image.src.height, alt: image.alt }
    : DEFAULT_SHARE_IMAGE;

  return {
    title: { absolute: entry.metaTitle },
    description: entry.metaDescription,
    keywords: entry.keywords,
    alternates: { canonical: url },
    openGraph: {
      type: 'website',
      locale: 'en_AE',
      url,
      siteName: 'Smartgic Visa',
      title: entry.metaTitle,
      description: entry.metaDescription,
      images: [ogImage, DEFAULT_SHARE_IMAGE],
    },
    twitter: {
      card: 'summary_large_image',
      title: entry.metaTitle,
      description: entry.metaDescription,
      images: [DEFAULT_SHARE_IMAGE],
    },
  };
}

export default async function ServiceRoute({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  /* ── Category hub ── */
  const category = getCategory(slug);
  if (category) {
    const url = `${SITE}/services/${category.slug}`;
    const jsonLd = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'CollectionPage',
          '@id': `${url}/#page`,
          url,
          name: category.metaTitle,
          description: category.metaDescription,
          isPartOf: { '@id': `${SITE}/#website` },
          mainEntity: {
            '@type': 'ItemList',
            itemListElement: category.services.map((s, i) => ({
              '@type': 'ListItem',
              position: i + 1,
              url: `${SITE}/services/${s}`,
              name: getService(s)?.navLabel ?? s,
            })),
          },
        },
        {
          '@type': 'FAQPage',
          '@id': `${url}/#faq`,
          mainEntity: category.faqs.map((f) => ({
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
        <CategoryPage category={category} />
      </>
    );
  }

  /* ── Service page ── */
  const service = getService(slug);
  if (!service) notFound();
  const serviceCategory = categoriesBySlug[service.category];

  const url = `${SITE}/services/${service.slug}`;
  const guides = getPostsBySlugs(relatedGuidesByService[service.slug] ?? []);
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': `${url}/#service`,
        name: service.navLabel,
        serviceType: service.title,
        category: serviceCategory.label,
        description: service.metaDescription,
        url,
        areaServed: { '@type': 'Country', name: 'United Arab Emirates' },
        provider: { '@id': `${SITE}/#organization` },
      },
      {
        '@type': 'FAQPage',
        '@id': `${url}/#faq`,
        mainEntity: service.faqs.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      },
    ],
  };

  const subnav = [
    { id: 'overview', label: 'Overview' },
    ...(service.included?.length ? [{ id: 'included', label: 'What’s included' }] : []),
    { id: 'process', label: 'Process' },
    { id: 'documents', label: service.eligibility ? 'Eligibility & documents' : 'Documents' },
    ...(service.tool ? [{ id: 'calculator', label: 'Calculator' }] : []),
    ...(service.packages?.length ? [{ id: 'pricing', label: 'Packages' }] : []),
    { id: 'faq', label: 'FAQs' },
    { id: 'contact', label: 'Get in touch' },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main id="main">
        <ServiceHero service={service} category={serviceCategory} />
        <ServiceSubnav items={subnav} />
        <Overview service={service} />
        {service.included && service.included.length > 0 && (
          <ServiceIncluded groups={service.included} label={service.navLabel} />
        )}
        <Benefits service={service} />
        <Process service={service} />
        <Requirements service={service} />
        {service.tool && <ToolSection tool={service.tool} />}
        {service.packages && service.packages.length > 0 && <ServicePackages packages={service.packages} />}
        <ServiceFaq faqs={service.faqs} label={service.navLabel} />
        {JURISDICTION_CATEGORIES.has(service.category) && <ServiceJurisdictions label={service.navLabel} />}
        <RelatedServices slugs={service.related} />
        <GuidesSection
          posts={guides}
          className="bg-white"
          eyebrow="Further reading"
          title={
            <>
              Guides on <span className="accent">{service.navLabel}</span>
            </>
          }
          description="In-depth articles from our team on the questions clients most often ask about this service."
        />
        <Contact
          source={`Service — ${service.navLabel}`}
          defaultService={serviceOptionForSlug(service.slug, service.category)}
        />
      </main>
    </>
  );
}
