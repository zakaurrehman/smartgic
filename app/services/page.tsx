import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/ui/WhatsAppButton';
import PageHero from '@/components/ui/PageHero';
import AllServices from '@/components/services/AllServices';
import WhyUs from '@/components/sections/WhyUs';
import Testimonials from '@/components/sections/Testimonials';
import CTABand from '@/components/sections/CTABand';
import Contact from '@/components/sections/Contact';
import { services } from '@/lib/services';

const SITE = 'https://www.smartgicvisa.com';
const url = `${SITE}/services`;
const title = 'Corporate Services in Dubai | Business Setup, Visa & PRO | Smartgic Visa';
const description =
  'Explore Smartgic Visa corporate services in Dubai — company registration, professional licences, bank account opening, visas, document clearing, PRO services, licence renewals and co-working space.';

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    'corporate services Dubai',
    'business setup services UAE',
    'PRO services Dubai',
    'company formation Dubai',
    'visa services UAE',
  ],
  alternates: { canonical: url },
  openGraph: { type: 'website', locale: 'en_AE', url, siteName: 'Smartgic Visa', title, description },
  twitter: { card: 'summary_large_image', title, description },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  '@id': `${url}/#services`,
  name: 'Smartgic Visa Corporate Services',
  itemListElement: services.map((s, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: s.navLabel,
    url: `${SITE}/services/${s.slug}`,
  })),
};

export default function ServicesHubPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main>
        <PageHero
          eyebrow="Corporate Services"
          title={
            <>
              Everything you need to start &amp;{' '}
              <span className="gradient-text">run a UAE business</span>
            </>
          }
          subtitle="One licensed Dubai partner for company formation, visas, PRO, banking, document clearing and workspace — explore our full suite of corporate services below."
          crumbs={[{ label: 'Home', href: '/' }, { label: 'Corporate Services' }]}
        />
        <AllServices />
        <WhyUs />
        <Testimonials />
        <CTABand />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
