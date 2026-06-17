import type { Metadata, Viewport } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-sans',
  display: 'swap',
});

const siteUrl = 'https://www.smartgicvisa.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Dubai Business Setup & UAE Visa Services | Smartgic Visa',
    template: '%s | Smartgic Visa',
  },
  description:
    'Begin your UAE business with the expert company formation, Golden Visa, residence visa, PRO, banking and tax services. Free consultation.',
  keywords: [
    'Dubai business setup',
    'UAE company formation',
    'Golden Visa UAE',
    'business setup Dubai',
    'UAE residence visa',
  ],
  authors: [{ name: 'Smartgic Visa' }],
  alternates: {
    canonical: 'https://www.smartgicvisa.com/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_AE',
    url: 'https://www.smartgicvisa.com/',
    siteName: 'Smartgic Visa',
    title: 'Dubai Business Setup & UAE Visa Services | Smartgic Visa',
    description:
      'Begin your UAE business with the expert company formation, Golden Visa, residence visa, PRO, banking and tax services. Free consultation.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dubai Business Setup & UAE Visa Services | Smartgic Visa',
    description:
      'Company formation, Golden Visa, residence visa, PRO, banking and tax services in Dubai. Free consultation.',
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
