import type { Metadata, Viewport } from 'next';
import { Geist, Geist_Mono, Instrument_Serif } from 'next/font/google';
import './globals.css';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/ui/WhatsAppButton';
import MobileActionBar from '@/components/ui/MobileActionBar';
import MotionProvider from '@/components/providers/MotionProvider';
import { getNavData } from '@/lib/nav';

/* Geist for interface and body copy; Instrument Serif italic for the accent
   word in headlines; Geist Mono for small data labels (licence numbers, step
   indices). All three are self-hosted by next/font — no runtime request to
   Google, and no layout shift from a late font swap. */
const sans = Geist({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const serif = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
  style: ['normal', 'italic'],
  variable: '--font-serif',
  display: 'swap',
});

const mono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

const siteUrl = 'https://www.smartgicvisa.com';

const defaultTitle = 'Dubai Business Setup & UAE Visa Services | Smartgic Visa';
const defaultDescription =
  'Company formation, UAE visas, PRO, corporate tax, VAT, accounting and audit services from a DET-licensed consultancy in Dubai. Free consultation.';

/**
 * Site-wide defaults. Deliberately no `alternates.canonical` here: Next.js
 * inherits it into every page that does not set its own, which would declare
 * the homepage canonical for those pages. Each page sets its own canonical.
 */
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: defaultTitle,
    template: '%s | Smartgic Visa',
  },
  description: defaultDescription,
  keywords: [
    'Dubai business setup',
    'UAE company formation',
    'Golden Visa UAE',
    'corporate tax UAE',
    'VAT registration Dubai',
    'accounting services Dubai',
    'audit services Dubai',
  ],
  authors: [{ name: 'Smartgic Visa' }],
  applicationName: 'Smartgic Visa',
  formatDetection: { telephone: false, address: false, email: false },
  openGraph: {
    type: 'website',
    locale: 'en_AE',
    url: `${siteUrl}/`,
    siteName: 'Smartgic Visa',
    title: defaultTitle,
    description: defaultDescription,
  },
  twitter: {
    card: 'summary_large_image',
    title: defaultTitle,
    description: defaultDescription,
  },
  robots: { index: true, follow: true },
  verification: {
    google: 'H8chgkOxfRSEElSqwPSm2Z3GUWhd2Ve0p_hqYUWl_Uk',
  },
  icons: {
    icon: [{ url: '/favicon.svg', type: 'image/svg+xml' }],
  },
};

export const viewport: Viewport = {
  themeColor: '#0A1730',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // Built on the server and passed down as plain data, so the menus never pull
  // the full service and jurisdiction datasets into the client bundle.
  const nav = getNavData();

  return (
    <html lang="en" className={`${sans.variable} ${serif.variable} ${mono.variable}`}>
      <body>
        {/* Scroll-reveal content starts hidden until hydration; without JS it
            must simply be visible. */}
        <noscript>
          <style>{'.reveal{opacity:1!important;transform:none!important;filter:none!important}'}</style>
        </noscript>
        <MotionProvider>
          <Header nav={nav} />
          {children}
          <Footer nav={nav} />
          <WhatsAppButton />
          <MobileActionBar />
        </MotionProvider>
      </body>
    </html>
  );
}
