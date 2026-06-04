import {
  Building2, FileCheck2, IdCard, Plane, Landmark, ScrollText,
  Briefcase, Stamp, Users, Wallet, ShieldCheck, Receipt,
  Globe2, Crown, FileSignature, BadgeCheck,
} from 'lucide-react';

export const company = {
  name: 'SMARTGIC',
  fullName: 'SMARTGIC Immigration',
  legalName: 'Smartgic Immigration Business Set Up Services EST.',
  tagline: 'Business Setup & Immigration Experts in Dubai',
  licenseNo: '1394564',
  authority: 'Dubai Department of Economy & Tourism (DET)',
  email: 'info@smartgic.ae',
  phone: '+971 50 835 4654',
  phoneHref: '+971508354654',
  whatsapp: '971508354654',
  address: 'Business Bay, Dubai, United Arab Emirates',
  hours: 'Mon – Sat, 9:00 AM – 6:00 PM (GST)',
};

export const stats = [
  { value: '5,000+', label: 'Companies Formed' },
  { value: '40+', label: 'Free Zones Covered' },
  { value: '98%', label: 'Visa Success Rate' },
  { value: '120+', label: 'Nationalities Served' },
];

export const services = [
  {
    icon: Building2,
    title: 'Company Formation',
    desc: 'Mainland, Free Zone & Offshore company setup with 100% foreign ownership and the right legal structure for your goals.',
    tag: 'Setup',
  },
  {
    icon: FileCheck2,
    title: 'Trade License',
    desc: 'Commercial, professional and industrial trade licenses issued and renewed fast — fully compliant with DET regulations.',
    tag: 'Licensing',
  },
  {
    icon: Plane,
    title: 'Residence Visa Processing',
    desc: 'Investor, partner, employment and family residence visas handled end-to-end, from entry permit to stamping.',
    tag: 'Visas',
  },
  {
    icon: IdCard,
    title: 'Emirates ID & Medical',
    desc: 'Emirates ID registration, medical fitness booking and biometric appointments managed without the queues.',
    tag: 'Visas',
  },
  {
    icon: Crown,
    title: 'Golden Visa (10-Year)',
    desc: 'Long-term residency for investors, entrepreneurs, talents and skilled professionals — eligibility to approval.',
    tag: 'Visas',
  },
  {
    icon: Briefcase,
    title: 'PRO & Government Liaison',
    desc: 'Dedicated PRO services across DET, GDRFA, MOHRE and all government departments to keep you 100% compliant.',
    tag: 'PRO',
  },
  {
    icon: Stamp,
    title: 'Document Attestation',
    desc: 'Certificate, degree and contract attestation through MOFA, embassies and notary — accepted worldwide.',
    tag: 'PRO',
  },
  {
    icon: FileSignature,
    title: 'MOA / AOA Drafting',
    desc: 'Memorandum and Articles of Association drafted, amended and legally notarised by our in-house specialists.',
    tag: 'Legal',
  },
  {
    icon: Landmark,
    title: 'Establishment & Immigration Card',
    desc: 'Establishment card and immigration card issuance so you can sponsor employees and dependents with ease.',
    tag: 'PRO',
  },
  {
    icon: Receipt,
    title: 'Corporate Tax & VAT',
    desc: 'Corporate Tax registration, VAT registration and ongoing filing handled by qualified tax consultants.',
    tag: 'Compliance',
  },
  {
    icon: Wallet,
    title: 'Bank Account Opening',
    desc: 'Personal and corporate bank account assistance with leading UAE banks — introductions and full paperwork.',
    tag: 'Banking',
  },
  {
    icon: Users,
    title: 'Dedicated Relationship Manager',
    desc: 'A single point of contact who knows your file and guides you through every milestone, every renewal.',
    tag: 'Support',
  },
];

export const freeZones = [
  'IFZA', 'DMCC', 'Meydan', 'DAFZA', 'JAFZA', 'SHAMS', 'RAKEZ',
  'SPC Free Zone', 'DWC', 'DIFC', 'TECOM', 'Dubai South', 'ADGM', 'KIZAD',
];

export const process = [
  {
    step: '01',
    title: 'Free Consultation',
    desc: 'We learn your business activity, goals and budget, then recommend the ideal jurisdiction and structure.',
  },
  {
    step: '02',
    title: 'Name & Initial Approval',
    desc: 'We reserve your trade name and secure initial approval from the relevant authority on your behalf.',
  },
  {
    step: '03',
    title: 'Documentation & License',
    desc: 'We draft your MOA, compile documents and issue your trade license — typically within a few working days.',
  },
  {
    step: '04',
    title: 'Visa, ID & Banking',
    desc: 'We process residence visas, Emirates ID and open your corporate bank account so you are ready to trade.',
  },
];

export const packages = [
  {
    name: 'Free Zone',
    badge: 'Most Popular',
    featured: true,
    price: 'AED 5,750',
    period: 'starting from',
    summary: '100% ownership, fast setup and zero corporate tax up to thresholds — ideal for startups & global trade.',
    features: [
      'Trade License (1 year)',
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
    summary: 'Trade freely across the UAE and bid for government contracts with no restriction on local market access.',
    features: [
      'DET commercial license',
      'Unlimited visa eligibility',
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
    summary: 'Multiple activities, larger visa quotas and prestige free zones for growing teams and holding companies.',
    features: [
      'Multi-activity license',
      'Up to 6 visa allocations',
      'Premium free zone address',
      'Corporate bank assistance',
      'Corporate Tax registration',
      'Priority PRO support',
    ],
  },
];

export const goldenVisaPoints = [
  '10-year renewable UAE residency',
  'Sponsor your family & domestic staff',
  'No local sponsor required',
  '6-month multiple-entry stay outside UAE',
];

export const whyUs = [
  {
    icon: ShieldCheck,
    title: 'Licensed & Compliant',
    desc: `Officially licensed by Dubai DET (License ${company.licenseNo}). Every filing is handled by the book.`,
  },
  {
    icon: Globe2,
    title: 'Global Clientele',
    desc: 'We serve founders from 120+ nationalities, with multilingual advisors who understand cross-border needs.',
  },
  {
    icon: BadgeCheck,
    title: 'Transparent Pricing',
    desc: 'Clear, all-inclusive quotes with no hidden government-fee surprises — you always know what you pay.',
  },
  {
    icon: Users,
    title: 'End-to-End Service',
    desc: 'From license to visa, banking, tax and renewals, one team owns your journey from day one onwards.',
  },
];

export const testimonials = [
  {
    quote:
      'Smartgic set up my DMCC company and processed my investor visa in under two weeks. The most seamless experience I have had in Dubai.',
    name: 'Daniyal R.',
    role: 'Founder, Logistics Tech',
    country: '🇵🇰',
  },
  {
    quote:
      'Their team handled my Golden Visa and corporate bank account end-to-end. Professional, responsive and genuinely transparent on fees.',
    name: 'Sarah M.',
    role: 'Managing Director, Consultancy',
    country: '🇬🇧',
  },
  {
    quote:
      'I relocated my e-commerce business from Europe to an IFZA free zone with zero stress. My relationship manager replied within minutes.',
    name: 'Andrei V.',
    role: 'CEO, E-commerce',
    country: '🇷🇴',
  },
];

export const faqs = [
  {
    q: 'How long does it take to set up a company in Dubai?',
    a: 'Most free zone companies are formed within 3–5 working days once documents are ready. Mainland setups and certain regulated activities may take a little longer depending on approvals.',
  },
  {
    q: 'Can a foreigner own 100% of a UAE company?',
    a: 'Yes. Free zone companies have always allowed 100% foreign ownership, and most mainland commercial and professional activities now permit full foreign ownership too. We advise on the best fit for your activity.',
  },
  {
    q: 'Do I need to be in the UAE to start the process?',
    a: 'No. We can begin your company formation remotely. A short visit is usually only required for the medical, Emirates ID biometrics and bank account verification, which we schedule efficiently for you.',
  },
  {
    q: 'What is included in your fees?',
    a: 'Our quotes are all-inclusive of our professional service charges. Government and authority fees are itemised transparently so you always see exactly what goes to the authority versus our service.',
  },
  {
    q: 'Do you help with the UAE Golden Visa?',
    a: 'Absolutely. We assess your eligibility as an investor, entrepreneur, skilled professional or talent, then compile and submit your application for the 10-year renewable Golden Visa.',
  },
  {
    q: 'Can you handle visa and PRO renewals after setup?',
    a: 'Yes. We offer ongoing PRO and compliance support — license renewals, visa renewals, Emirates ID, attestation and government liaison — so your business stays fully compliant year after year.',
  },
];

export const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Free Zones', href: '#freezones' },
  { label: 'Process', href: '#process' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Golden Visa', href: '#golden-visa' },
  { label: 'FAQ', href: '#faq' },
];
