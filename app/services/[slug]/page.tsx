import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/ui/WhatsAppButton';
import Testimonials from '@/components/sections/Testimonials';
import CTABand from '@/components/sections/CTABand';
import Contact from '@/components/sections/Contact';

import ServiceHero from '@/components/services/ServiceHero';
import { Overview, Benefits, Process, Requirements } from '@/components/services/ServiceContent';
import ServicePackages from '@/components/services/ServicePackages';
import ServiceFaq from '@/components/services/ServiceFaq';
import RelatedServices from '@/components/services/RelatedServices';

import { getService, serviceSlugs } from '@/lib/services';
import { company } from '@/lib/data';

const SITE = 'https://www.smartgicvisa.com';

export function generateStaticParams() {
  return serviceSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};

  const url = `${SITE}/services/${service.slug}`;
  return {
    title: service.metaTitle,
    description: service.metaDescription,
    keywords: service.keywords,
    alternates: { canonical: url },
    openGraph: {
      type: 'website',
      locale: 'en_AE',
      url,
      siteName: 'Smartgic Visa',
      title: service.metaTitle,
      description: service.metaDescription,
    },
    twitter: {
      card: 'summary_large_image',
      title: service.metaTitle,
      description: service.metaDescription,
    },
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const url = `${SITE}/services/${service.slug}`;
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': `${url}/#service`,
        name: service.navLabel,
        serviceType: service.title,
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

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main>
        <ServiceHero service={service} />
        <Overview service={service} />
        <Benefits service={service} />
        <Process service={service} />
        <Requirements service={service} />
        {service.packages && service.packages.length > 0 && (
          <ServicePackages packages={service.packages} />
        )}
        <Testimonials />
        <ServiceFaq faqs={service.faqs} label={service.navLabel} />
        <RelatedServices slugs={service.related} />
        <CTABand />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
