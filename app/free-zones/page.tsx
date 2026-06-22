import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/ui/WhatsAppButton';
import PageHero from '@/components/ui/PageHero';
import FreeZones from '@/components/sections/FreeZones';
import Testimonials from '@/components/sections/Testimonials';
import CTABand from '@/components/sections/CTABand';
import Contact from '@/components/sections/Contact';

const SITE = 'https://www.smartgicvisa.com';
const url = `${SITE}/free-zones`;
const title = 'UAE Free Zones & Mainland Company Setup | Smartgic Visa';
const description =
  'Set up in 40+ UAE free zones or on the mainland — IFZA, DMCC, Meydan, DAFZA, JAFZA, RAKEZ and more. We match your activity, budget and visa needs to the right jurisdiction.';

export const metadata: Metadata = {
  title,
  description,
  keywords: ['UAE free zones', 'free zone company Dubai', 'IFZA', 'DMCC', 'Meydan free zone', 'mainland company Dubai'],
  alternates: { canonical: url },
  openGraph: { type: 'website', locale: 'en_AE', url, siteName: 'Smartgic Visa', title, description },
  twitter: { card: 'summary_large_image', title, description },
};

export default function FreeZonesPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Free Zones & Mainland"
          title={
            <>
              40+ UAE free zones &amp; mainland — <span className="gradient-text">we know them all</span>
            </>
          }
          subtitle="Choosing the right jurisdiction is the most important decision you'll make. We match your activity, budget and visa needs to the perfect free zone or mainland licence."
          crumbs={[{ label: 'Home', href: '/' }, { label: 'Free Zones' }]}
        />
        <FreeZones />
        <Testimonials />
        <CTABand />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
