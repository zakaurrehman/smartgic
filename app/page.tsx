import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/ui/WhatsAppButton';
import MobileActionBar from '@/components/ui/MobileActionBar';
import Hero from '@/components/sections/Hero';
import TrustBar from '@/components/sections/TrustBar';
import Services from '@/components/sections/Services';
import FreeZones from '@/components/sections/FreeZones';
import Industries from '@/components/sections/Industries';
import Process from '@/components/sections/Process';
import WhyUs from '@/components/sections/WhyUs';
import Packages from '@/components/sections/Packages';
import GoldenVisa from '@/components/sections/GoldenVisa';
import Testimonials from '@/components/sections/Testimonials';
import FAQ from '@/components/sections/FAQ';
import CTABand from '@/components/sections/CTABand';
import Contact from '@/components/sections/Contact';
import Disclaimer from '@/components/ui/Disclaimer';
import { activeSocialLinks, company, faqs } from '@/lib/data';

const SITE = 'https://www.smartgicvisa.com';

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
        'Smartgic Visa provides UAE company formation, Golden Visa, residence visa, business setup, banking assistance, corporate tax and PRO services.',
      email: company.email,
      telephone: company.phone,
      // Only real, verified profile URLs belong in sameAs. Pointing it at bare
      // platform homepages (facebook.com, linkedin.com) is incorrect markup, so
      // the property is omitted entirely until profiles exist.
      ...(activeSocialLinks.length > 0
        ? { sameAs: activeSocialLinks.map((s) => s.href) }
        : {}),
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
      openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
        ],
        opens: '09:00',
        closes: '18:00',
      },
      // NOTE: aggregateRating was previously declared here (4.9 from 512
      // reviews) with no review source on the site to support it. Google
      // requires aggregate ratings to reflect reviews the site actually
      // collects or displays, and unsupported ratings risk a structured-data
      // manual action. Reinstate this once reviews are collected through a
      // verifiable source such as a Google Business Profile.
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
      <main id="main">
        <Hero />
        <TrustBar />
        <Services />
        <FreeZones />
        <Industries />
        <Process />
        <WhyUs />
        <Packages />
        <GoldenVisa />
        <Testimonials />
        <FAQ />
        <Disclaimer />
        <CTABand />
        <Contact source="Homepage" />
      </main>
      <Footer />
      <WhatsAppButton />
      <MobileActionBar />
    </>
  );
}
