import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/ui/WhatsAppButton';
import Hero from '@/components/sections/Hero';
import TrustBar from '@/components/sections/TrustBar';
import Services from '@/components/sections/Services';
import FreeZones from '@/components/sections/FreeZones';
import Process from '@/components/sections/Process';
import WhyUs from '@/components/sections/WhyUs';
import Packages from '@/components/sections/Packages';
import GoldenVisa from '@/components/sections/GoldenVisa';
import Testimonials from '@/components/sections/Testimonials';
import FAQ from '@/components/sections/FAQ';
import CTABand from '@/components/sections/CTABand';
import Contact from '@/components/sections/Contact';
import { company, faqs } from '@/lib/data';

const SITE = 'https://www.smartgicvisa.com';

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${SITE}/#organization`,
      name: 'Smartgic Visa',
      url: `${SITE}/`,
      logo: `${SITE}/logo.png`,
      description:
        'Smartgic Visa provides UAE company formation, Golden Visa, residence visa, business setup, banking assistance, corporate tax and PRO services.',
      email: company.email,
      telephone: company.phone,
      sameAs: [
        'https://www.facebook.com/',
        'https://www.linkedin.com/company/',
        'https://www.instagram.com/',
      ],
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
      areaServed: {
        '@type': 'Country',
        name: 'United Arab Emirates',
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        reviewCount: '512',
      },
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

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <Services />
        <FreeZones />
        <Process />
        <WhyUs />
        <Packages />
        <GoldenVisa />
        <Testimonials />
        <FAQ />
        <CTABand />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
