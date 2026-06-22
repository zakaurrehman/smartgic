import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/ui/WhatsAppButton';
import PageHero from '@/components/ui/PageHero';
import GoldenVisa from '@/components/sections/GoldenVisa';
import Testimonials from '@/components/sections/Testimonials';
import CTABand from '@/components/sections/CTABand';
import Contact from '@/components/sections/Contact';

const SITE = 'https://www.smartgicvisa.com';
const url = `${SITE}/golden-visa`;
const title = 'UAE Golden Visa — 10-Year Residency | Smartgic Visa';
const description =
  'Secure your 10-year UAE Golden Visa. Eligibility assessment and full application for investors, entrepreneurs, skilled professionals and talents — and your family. Free consultation.';

export const metadata: Metadata = {
  title,
  description,
  keywords: ['UAE Golden Visa', '10 year visa UAE', 'Golden Visa Dubai', 'investor Golden Visa', 'long term residency UAE'],
  alternates: { canonical: url },
  openGraph: { type: 'website', locale: 'en_AE', url, siteName: 'Smartgic Visa', title, description },
  twitter: { card: 'summary_large_image', title, description },
};

export default function GoldenVisaPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Long-Term Residency"
          title={
            <>
              The UAE <span className="gradient-text">Golden Visa</span> — your 10-year home
            </>
          }
          subtitle="Whether you're an investor, entrepreneur, skilled professional or exceptional talent, we assess your eligibility and manage the full application — so you and your family can call the UAE home for the next decade."
          crumbs={[{ label: 'Home', href: '/' }, { label: 'Golden Visa' }]}
        />
        <GoldenVisa />
        <Testimonials />
        <CTABand />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
