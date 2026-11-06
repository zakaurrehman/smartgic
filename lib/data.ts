import {
  BadgeCheck,
  Building,
  Boxes,
  HeartPulse,
  Laptop,
  Layers,
  Megaphone,
  MessagesSquare,
  Scale,
  Ship,
  ShieldCheck,
  ShoppingCart,
  UtensilsCrossed,
  UserCheck,
  Wallet,
} from 'lucide-react';

/**
 * Business facts and shared marketing content.
 *
 * Everything here must be true and checkable. Template statistics ("5,000+
 * companies", "98% visa success", "120+ nationalities"), a "4.9/5" rating and
 * three named testimonials were removed on 2026-11-06 at the owner's
 * instruction because none could be verified. Do not reintroduce figures,
 * ratings or reviews without a real, citable source (e.g. a Google Business
 * Profile).
 */

export const company = {
  name: 'SMARTGIC',
  fullName: 'SMARTGIC Immigration',
  legalName: 'Smartgic Immigration Business Set Up Services EST.',
  tagline: 'Business Setup & Immigration Experts in Dubai',
  licenseNo: '1394564',
  authority: 'Dubai Department of Economy & Tourism (DET)',
  email: 'info@smartgicvisa.com',
  phone: '+971 50 835 4654',
  phoneHref: '+971508354654',
  whatsapp: '971508354654',
  address: 'Office 44, Floor M2, BN Complex, Deira Al Muteena, Dubai, UAE',
  hours: 'Mon – Sat, 9:00 AM – 6:00 PM (GST)',
};

/**
 * Setup packages. Starting prices confirmed by the owner (2026-11-06); they are
 * Smartgic's service fee and exclude government and authority fees.
 */
export const packages = [
  {
    name: 'Free Zone',
    badge: 'Most Popular',
    featured: true,
    price: 'AED 5,750',
    period: 'starting from',
    summary: 'Full ownership and a packaged licence with a flexi-desk — ideal for startups, consultancies and international trade.',
    features: [
      'Trade licence (1 year)',
      '100% foreign ownership',
      'Trade name reservation',
      'Up to 1 investor visa allocation',
      'Digital company documents',
      'Dedicated relationship manager',
    ],
  },
  {
    name: 'Mainland',
    badge: 'Trade Anywhere',
    featured: false,
    price: 'AED 18,900',
    period: 'starting from',
    summary: 'Trade with any customer in the UAE and bid for government work, with a licence from Dubai’s Department of Economy and Tourism.',
    features: [
      'DET commercial licence',
      'Visa quota sized to your office',
      'MOA drafting & notarisation',
      'Local market access',
      'Establishment card',
      'PRO & government liaison',
    ],
  },
  {
    name: 'Premium Free Zone',
    badge: 'Scale-Up',
    featured: false,
    price: 'AED 12,900',
    period: 'starting from',
    summary: 'Multiple activities, larger visa allocations and prestige free zones for growing teams and holding structures.',
    features: [
      'Multi-activity licence',
      'Up to 6 visa allocations',
      'Premium free zone address',
      'Corporate bank assistance',
      'Corporate tax registration',
      'Priority PRO support',
    ],
  },
];

export const goldenVisaPoints = [
  '10-year renewable UAE residency',
  'Self-sponsored — no employer needed',
  'Sponsor your family and domestic staff',
  'Stays valid during long periods abroad',
];

/** Reasons to work with Smartgic — each one something a visitor can check. */
export const whyUs = [
  {
    icon: ShieldCheck,
    title: 'Licensed in Dubai',
    desc: `A DET-licensed consultancy (licence ${company.licenseNo}) with an office you can visit in Deira.`,
  },
  {
    icon: UserCheck,
    title: 'One named adviser',
    desc: 'The same person owns your file from the first call to every renewal — you are never passed around.',
  },
  {
    icon: BadgeCheck,
    title: 'Itemised quotes',
    desc: 'Our fee and government fees on separate lines, in writing, before you commit to anything.',
  },
  {
    icon: Layers,
    title: 'Setup to audit, one team',
    desc: 'Formation, visas, PRO, corporate tax, VAT, accounting and audit — no hand-offs between firms.',
  },
  {
    icon: Scale,
    title: 'Honest advice',
    desc: 'We will tell you when a cheaper jurisdiction or a simpler structure does the same job.',
  },
  {
    icon: MessagesSquare,
    title: 'Reach us your way',
    desc: 'WhatsApp, phone, email or in person — whichever suits you, during clearly stated business hours.',
  },
];

/** Sector entry points shown on the homepage. */
export const sectors = [
  { icon: Boxes, title: 'Trading & distribution', desc: 'General trading, import/export and wholesale, from a single activity to port-side warehousing.' },
  { icon: ShoppingCart, title: 'E-commerce & retail', desc: 'Online stores and marketplaces, with activity codes that payment gateways accept.' },
  { icon: Laptop, title: 'Technology & SaaS', desc: 'Software, IT services and AI businesses, including the clusters where your talent already is.' },
  { icon: Ship, title: 'Logistics & freight', desc: 'Forwarding, fulfilment and storage, matched to the port or airport your goods move through.' },
  { icon: Building, title: 'Real estate & construction', desc: 'Brokerage, development and contracting, including the mainland licences these usually need.' },
  { icon: Wallet, title: 'Finance & family offices', desc: 'Asset management and wealth structures in the UAE’s common-law financial centres.' },
  { icon: Megaphone, title: 'Media & creative', desc: 'Agencies, production and design, including freelance permits for solo practitioners.' },
  { icon: UtensilsCrossed, title: 'F&B & hospitality', desc: 'Restaurants, cafés and cloud kitchens, where mainland licensing and municipality approvals apply.' },
  { icon: HeartPulse, title: 'Healthcare & wellness', desc: 'Clinics and practitioners, with health-authority licensing alongside the trade licence.' },
];

/**
 * Authorities and zones whose applications we prepare and file. Names only —
 * no logos, and no suggestion of affiliation (see the independence notice).
 */
export const authorities = [
  'Department of Economy & Tourism',
  'GDRFA Dubai',
  'ICP',
  'MOHRE',
  'Federal Tax Authority',
  'Ministry of Economy',
  'Dubai Customs',
  'DMCC',
  'IFZA',
  'Meydan Free Zone',
  'JAFZA',
  'DIFC',
  'ADGM',
  'RAKEZ',
  'SHAMS',
];

export const faqs = [
  {
    q: 'How long does it take to set up a company in Dubai?',
    a: 'It depends on the jurisdiction, the activity and how quickly documents are ready. Many free zone licences are issued within days of a complete application; mainland companies and regulated activities take longer because of additional approvals. We give you a realistic timeline at the first consultation.',
  },
  {
    q: 'Can a foreigner own 100% of a UAE company?',
    a: 'Yes. Free zone companies have always allowed 100% foreign ownership, and most mainland commercial and professional activities now do too. A short list of strategic activities has restrictions — we confirm the position for your activity before you apply.',
  },
  {
    q: 'Do I need to be in the UAE to start?',
    a: 'No. Most of the formation can be done remotely. You will usually need a short visit for the residence visa medical test, Emirates ID biometrics and, for most banks, the account-opening meeting — we schedule them together.',
  },
  {
    q: 'What is included in your fees?',
    a: 'Our quote covers our professional fee for the scope agreed in writing. Government and authority fees are itemised separately and passed through at cost, so you can see exactly what goes to the authority and what comes to us.',
  },
  {
    q: 'Does my company need to register for corporate tax and VAT?',
    a: 'Almost every UAE company must register for corporate tax and file an annual return, even when no tax is due. VAT registration depends on your taxable supplies — it becomes mandatory above AED 375,000 a year. We register you for both where required and keep the returns on schedule.',
  },
  {
    q: 'Do you handle accounting, audit and renewals after setup?',
    a: 'Yes. Bookkeeping, payroll, financial statements, audits (carried out by UAE-registered auditors), licence and visa renewals and PRO work are all part of what we do, so your company stays compliant year after year with one team.',
  },
];

/** Google Maps deep link for the office address (contact cards & directions). */
export const mapsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `${company.legalName}, ${company.address}`,
)}`;

/**
 * Social profiles. Only entries with a real URL are rendered, and only those
 * feed the Organization schema's `sameAs`. Fill in the href as each profile
 * goes live.
 */
export const socialLinks: { label: string; href: string }[] = [
  { label: 'LinkedIn', href: '' },
  { label: 'Instagram', href: '' },
  { label: 'Facebook', href: '' },
];

export const activeSocialLinks = socialLinks.filter((s) => s.href.trim().length > 0);

/**
 * How an engagement runs, whatever the service — used on category hubs and
 * the homepage. Describes Smartgic's own way of working, not authority timings.
 */
export const engagementSteps = [
  {
    title: 'Free consultation',
    desc: 'We learn what you are trying to do, check the facts that change the answer, and tell you the cleanest route — including when the simpler option is the right one.',
  },
  {
    title: 'Scope & itemised quote',
    desc: 'You receive a written scope and a quote that separates our fee from government and authority fees, before you commit to anything.',
  },
  {
    title: 'We do the work',
    desc: 'One adviser prepares the documents, submits to each authority, answers their queries and keeps you updated at every step.',
  },
  {
    title: 'Ongoing support',
    desc: 'Renewals, filings and deadlines are tracked on our calendar, so the next obligation is handled before it becomes urgent.',
  },
];
