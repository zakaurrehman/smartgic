import type { Metadata, Viewport } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-sans',
  display: 'swap',
});

const siteUrl = 'https://smartgicvisa.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Smartgic Immigration | Business Setup & Visa Experts in Dubai, UAE',
    template: '%s | Smartgic Immigration',
  },
  description:
    'Smartgic Immigration is a Dubai-licensed business setup, PRO and immigration consultancy. Company formation, trade licenses, residence & Golden Visas, corporate tax and bank account assistance for clients worldwide.',
  keywords: [
    'business setup Dubai',
    'company formation UAE',
    'PRO services Dubai',
    'trade license Dubai',
    'Golden Visa UAE',
    'residence visa Dubai',
    'free zone company',
    'mainland company Dubai',
    'Smartgic Immigration',
  ],
  authors: [{ name: 'Smartgic Immigration' }],
  openGraph: {
    type: 'website',
    locale: 'en_AE',
    url: siteUrl,
    siteName: 'Smartgic Immigration',
    title: 'Smartgic Immigration | Business Setup & Visa Experts in Dubai',
    description:
      'Dubai-licensed business setup, PRO and immigration consultancy serving founders from 120+ countries.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Smartgic Immigration | Business Setup & Visa Experts in Dubai',
    description:
      'Company formation, trade licenses, Golden Visas, corporate tax and banking — handled end to end in Dubai.',
  },
  robots: { index: true, follow: true },
  icons: {
    icon: [{ url: '/favicon.svg', type: 'image/svg+xml' }],
  },
};

export const viewport: Viewport = {
  themeColor: '#0A1730',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={jakarta.variable}>
      <body>{children}</body>
    </html>
  );
}
