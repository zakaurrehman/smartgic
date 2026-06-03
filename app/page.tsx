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

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: company.legalName,
  alternateName: company.fullName,
  description:
    'Dubai-licensed business setup, PRO and immigration consultancy. Company formation, trade licenses, residence & Golden Visas, corporate tax and bank account assistance.',
  url: 'https://smartgic.ae',
  telephone: company.phone,
  email: company.email,
  areaServed: 'Worldwide',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Dubai',
    addressCountry: 'AE',
    streetAddress: company.address,
  },
  identifier: { '@type': 'PropertyValue', name: 'DET License', value: company.licenseNo },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '512',
  },
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
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
