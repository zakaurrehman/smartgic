import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/ui/WhatsAppButton';
import MobileActionBar from '@/components/ui/MobileActionBar';
import PageHero from '@/components/ui/PageHero';
import Packages from '@/components/sections/Packages';
import PricingTransparency from '@/components/sections/PricingTransparency';
import FAQ from '@/components/sections/FAQ';
import Testimonials from '@/components/sections/Testimonials';
import CTABand from '@/components/sections/CTABand';
import Disclaimer from '@/components/ui/Disclaimer';
import Contact from '@/components/sections/Contact';

const SITE = 'https://www.smartgicvisa.com';
const url = `${SITE}/pricing`;
const title = 'Business Setup Pricing & Packages in Dubai | Smartgic Visa';
const description =
  'Transparent business setup pricing in Dubai — Free Zone, Mainland and Premium packages with all-inclusive quotes. No hidden fees. Get a tailored quote in minutes.';

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  keywords: ['business setup cost Dubai', 'company formation pricing UAE', 'free zone packages Dubai', 'trade licence cost Dubai', 'Smartgic pricing'],
  alternates: { canonical: url },
  openGraph: { type: 'website', locale: 'en_AE', url, siteName: 'Smartgic Visa', title, description },
  twitter: { card: 'summary_large_image', title, description },
};

export default function PricingPage() {
  return (
    <>
      <Header />
      <main id="main">
        <PageHero
          eyebrow="Transparent Pricing"
          title={
            <>
              Simple packages, <span className="gradient-text">no hidden fees</span>
            </>
          }
          subtitle="Indicative starting prices for our most popular setups. Your final quote depends on activity, visa quota and jurisdiction — and it's always itemised and all-inclusive."
          crumbs={[{ label: 'Home', href: '/' }, { label: 'Pricing' }]}
        />
        <Packages />
        <PricingTransparency />
        <Testimonials />
        <FAQ />
        <Disclaimer />
        <CTABand />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
      <MobileActionBar />
    </>
  );
}
