import {
  Building2, Briefcase, Wallet, Plane, FileCheck2, Landmark,
  RefreshCw, Building, type LucideIcon,
} from 'lucide-react';

export type ServiceStat = { value: string; label: string };
export type ServiceBenefit = { title: string; desc: string };
export type ServiceStep = { title: string; desc: string };
export type ServicePackage = {
  name: string;
  badge: string;
  featured?: boolean;
  price: string;
  period: string;
  features: string[];
};
export type ServiceFaq = { q: string; a: string };

export type Service = {
  slug: string;
  navLabel: string;
  icon: LucideIcon;
  eyebrow: string;
  title: string;
  heroSubtitle: string;
  heroHighlights: string[];
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  overview: {
    heading: string;
    body: string[];
  };
  stats: ServiceStat[];
  benefits: ServiceBenefit[];
  process: ServiceStep[];
  requirements: string[];
  packages?: ServicePackage[];
  faqs: ServiceFaq[];
  related: string[];
};

export const services: Service[] = [
  /* ───────────────────────── 1. COMPANY REGISTRATION ───────────────────────── */
  {
    slug: 'company-registration',
    navLabel: 'Company Registration',
    icon: Building2,
    eyebrow: 'Company Formation',
    title: 'Company Registration in Dubai & the UAE',
    heroSubtitle:
      'Register your Mainland, Free Zone or Offshore company with 100% foreign ownership. We handle activity selection, trade name, approvals and your trade licence — start to finish.',
    heroHighlights: ['100% Foreign Ownership', 'Setup in 3–5 Days', 'All-Inclusive Quote'],
    metaTitle: 'Company Registration in Dubai | UAE Business Formation | Smartgic Visa',
    metaDescription:
      'Register a Mainland, Free Zone or Offshore company in Dubai with 100% ownership. Trade name, approvals, MOA and licence handled end to end. Free consultation.',
    keywords: [
      'company registration Dubai',
      'business setup UAE',
      'free zone company formation',
      'mainland company Dubai',
      'offshore company UAE',
    ],
    overview: {
      heading: 'The right structure is the most valuable decision you make',
      body: [
        'Choosing between Mainland, Free Zone and Offshore — and the exact jurisdiction within them — determines your ownership, tax exposure, visa quota and which markets you can legally serve. Get it wrong and you pay to fix it later.',
        'Smartgic matches your business activity, growth plan and budget to the optimal licence. We then execute the full registration: trade name reservation, initial approval, Memorandum of Association, and issuance of your trade licence — so you are ready to invoice from day one.',
      ],
    },
    stats: [
      { value: '5,000+', label: 'Companies Formed' },
      { value: '40+', label: 'Free Zones Covered' },
      { value: '3–5', label: 'Days to Licence' },
      { value: '100%', label: 'Ownership Retained' },
    ],
    benefits: [
      { title: 'Full Foreign Ownership', desc: 'Keep 100% of your company across all free zones and most mainland activities — no local partner required.' },
      { title: 'Tax-Efficient Structuring', desc: 'Benefit from 0% corporate tax thresholds and double-taxation treaties with the right jurisdiction.' },
      { title: 'Fast, Compliant Issuance', desc: 'Most licences are issued in 3–5 working days, fully compliant with DET and free-zone regulations.' },
      { title: 'Visa Eligibility', desc: 'Your licence unlocks investor and employee residence visas for you, your team and your family.' },
      { title: 'Banking-Ready Documents', desc: 'We prepare a clean documentation pack that UAE banks accept for corporate account opening.' },
      { title: 'One Dedicated Manager', desc: 'A single relationship manager owns your file from first call through every future renewal.' },
    ],
    process: [
      { title: 'Consultation & Activity Selection', desc: 'We assess your goals and shortlist the ideal jurisdiction, legal form and business activities.' },
      { title: 'Trade Name & Initial Approval', desc: 'We reserve your trade name and secure initial approval from the relevant authority.' },
      { title: 'Documentation & MOA', desc: 'We draft and notarise your Memorandum of Association and compile the application file.' },
      { title: 'Licence Issuance', desc: 'Your trade licence is issued and we hand over a ready-to-bank corporate document pack.' },
    ],
    requirements: [
      'Passport copies of all shareholders',
      'Passport-size photographs',
      'Proposed trade names (2–3 options)',
      'Chosen business activities',
      'Shareholding / ownership split',
      'UAE entry stamp or visa page (if in-country)',
    ],
    packages: [
      {
        name: 'Free Zone',
        badge: 'Most Popular',
        featured: true,
        price: 'AED 5,750',
        period: 'starting from',
        features: ['Trade licence (1 year)', '100% foreign ownership', 'Trade name reservation', '1 investor visa allocation', 'Digital company documents', 'Dedicated relationship manager'],
      },
      {
        name: 'Mainland',
        badge: 'Trade Anywhere',
        price: 'AED 18,900',
        period: 'starting from',
        features: ['DET commercial licence', 'Unlimited visa eligibility', 'MOA drafting & notarisation', 'Local market access', 'Establishment card', 'PRO & government liaison'],
      },
      {
        name: 'Premium Free Zone',
        badge: 'Scale-Up',
        price: 'AED 12,900',
        period: 'starting from',
        features: ['Multi-activity licence', 'Up to 6 visa allocations', 'Premium free-zone address', 'Corporate bank assistance', 'Corporate Tax registration', 'Priority PRO support'],
      },
    ],
    faqs: [
      { q: 'Mainland or Free Zone — which is better?', a: 'Free Zone suits international trade, services and startups wanting 100% ownership and fast, low-cost setup. Mainland is ideal if you need to trade directly in the UAE market or bid for government contracts. We recommend the right fit after understanding your activity.' },
      { q: 'Can I own 100% of my UAE company?', a: 'Yes. All free-zone companies allow 100% foreign ownership, and most mainland commercial and professional activities now do too.' },
      { q: 'How long does registration take?', a: 'Typically 3–5 working days for free-zone companies once documents are ready. Some mainland or regulated activities take a little longer due to extra approvals.' },
      { q: 'Do I need a physical office?', a: 'Most free zones offer flexi-desk or virtual office packages that satisfy licensing requirements. Mainland licences may require a tenancy (Ejari), which we can arrange.' },
      { q: 'Can you register the company remotely?', a: 'Yes, we can start and largely complete your formation remotely. A short visit may be needed for Emirates ID biometrics and bank verification.' },
    ],
    related: ['professional-services', 'bank-account-opening', 'visa-services'],
  },

  /* ───────────────────────── 2. PROFESSIONAL SERVICES ───────────────────────── */
  {
    slug: 'professional-services',
    navLabel: 'Professional Services',
    icon: Briefcase,
    eyebrow: 'Professional Licence',
    title: 'Professional Services Licence in Dubai',
    heroSubtitle:
      'Launch your consultancy, agency or professional practice with a DET professional licence — 100% ownership, low capital and a fast path to investor visas.',
    heroHighlights: ['100% Ownership', 'Low Setup Cost', 'Investor Visa Ready'],
    metaTitle: 'Professional Services Licence Dubai | Consultancy Setup | Smartgic Visa',
    metaDescription:
      'Set up a professional services licence in Dubai for consultancy, agency and expertise-based businesses. 100% ownership, low capital, investor visa. Free consultation.',
    keywords: [
      'professional licence Dubai',
      'consultancy licence UAE',
      'professional services setup Dubai',
      'service company Dubai',
      'DET professional licence',
    ],
    overview: {
      heading: 'Built for experts, consultants and service businesses',
      body: [
        'A professional licence is designed for businesses that sell expertise rather than goods — consultancies, marketing and IT agencies, accounting and legal advisory, design studios, management consultants and more.',
        'It allows 100% foreign ownership on the mainland with a Local Service Agent (no equity), typically requires lower capital than a commercial licence, and gives you full access to the UAE market. Smartgic structures the licence correctly and processes your investor visa alongside it.',
      ],
    },
    stats: [
      { value: '100%', label: 'Owner Equity' },
      { value: '50+', label: 'Activities Covered' },
      { value: '4–6', label: 'Days to Licence' },
      { value: '0%', label: 'Personal Income Tax' },
    ],
    benefits: [
      { title: 'Keep 100% Equity', desc: 'Own your practice outright; the Local Service Agent holds no shares and no claim on profits.' },
      { title: 'Lower Capital Requirement', desc: 'Professional licences generally need less share capital than commercial trade licences.' },
      { title: 'Wide Activity Scope', desc: 'Combine multiple related professional activities under a single licence where permitted.' },
      { title: 'Full UAE Market Access', desc: 'Serve clients anywhere in the UAE without free-zone trading restrictions.' },
      { title: 'Investor Visa Pathway', desc: 'Sponsor your own residence visa and add team members as your practice grows.' },
      { title: 'Credibility & Compliance', desc: 'A recognised DET licence that wins client trust and passes bank due-diligence.' },
    ],
    process: [
      { title: 'Activity & Structure Review', desc: 'We confirm your professional activities and the correct legal form for your practice.' },
      { title: 'Trade Name & Approvals', desc: 'We reserve your trade name and obtain initial and activity-specific approvals.' },
      { title: 'Local Service Agent & MOA', desc: 'We appoint a no-equity Local Service Agent and prepare your documentation.' },
      { title: 'Licence & Visa', desc: 'Your professional licence is issued and we process your investor residence visa.' },
    ],
    requirements: [
      'Passport copy of the professional / owner',
      'Passport-size photograph',
      'Proof of qualifications (for regulated activities)',
      'Proposed trade name options',
      'Business activity description',
      'UAE entry stamp (if in-country)',
    ],
    faqs: [
      { q: 'What is a Local Service Agent?', a: 'For mainland professional licences, a UAE national acts as a Local Service Agent for government liaison. They hold zero equity and have no control over your business or profits — it is a formality we arrange for you.' },
      { q: 'Which businesses qualify as professional?', a: 'Expertise-based businesses: consultancies, IT and marketing agencies, accounting and audit, legal advisory, engineering, design, training and similar service activities.' },
      { q: 'Is a professional licence cheaper than commercial?', a: 'Often yes — capital requirements and certain fees tend to be lower, making it a cost-effective route for service businesses.' },
      { q: 'Can I get a residence visa with this licence?', a: 'Yes. A professional licence supports an investor/partner residence visa for you and lets you sponsor employees and family.' },
      { q: 'Can I add more activities later?', a: 'Yes, activities can usually be added or amended on your licence as your practice expands. We handle the amendment.' },
    ],
    related: ['company-registration', 'corporate-pro-services', 'visa-services'],
  },

  /* ───────────────────────── 3. BANK ACCOUNT OPENING ───────────────────────── */
  {
    slug: 'bank-account-opening',
    navLabel: 'Bank Account Opening',
    icon: Wallet,
    eyebrow: 'Corporate Banking',
    title: 'Corporate Bank Account Opening in the UAE',
    heroSubtitle:
      'Open a corporate or personal bank account with leading UAE banks. We prepare a compliant application, make the introductions and guide you through KYC to approval.',
    heroHighlights: ['Leading UAE Banks', 'KYC-Ready File', 'Personal & Corporate'],
    metaTitle: 'Corporate Bank Account Opening Dubai UAE | Smartgic Visa',
    metaDescription:
      'Open a corporate or personal bank account in the UAE with our assistance. Compliant documentation, bank introductions and KYC guidance to approval. Free consultation.',
    keywords: [
      'corporate bank account Dubai',
      'business bank account UAE',
      'open bank account Dubai',
      'company account opening UAE',
      'UAE bank account assistance',
    ],
    overview: {
      heading: 'The make-or-break step after company formation',
      body: [
        'A UAE corporate account unlocks payments, payroll and credibility — but bank compliance has tightened, and incomplete or weakly-presented applications are routinely delayed or declined.',
        'Smartgic prepares a bank-ready file, aligns your business activity and source-of-funds narrative with the bank’s risk appetite, introduces you to the right relationship managers, and supports you through every KYC step until your account is live.',
      ],
    },
    stats: [
      { value: '10+', label: 'Partner Banks' },
      { value: '95%', label: 'Approval Rate' },
      { value: '1–4', label: 'Weeks Typical' },
      { value: 'Multi', label: 'Currency Accounts' },
    ],
    benefits: [
      { title: 'Right Bank, First Time', desc: 'We match your activity, nationality and turnover to banks most likely to approve you.' },
      { title: 'Compliant Documentation', desc: 'A clean KYC and source-of-funds pack that satisfies UAE compliance teams.' },
      { title: 'Direct Introductions', desc: 'Warm introductions to relationship managers — no cold queueing at branches.' },
      { title: 'Multi-Currency & Online', desc: 'Accounts with AED plus major currencies and full online/mobile banking.' },
      { title: 'Personal Accounts Too', desc: 'We also assist shareholders and residents with personal account opening.' },
      { title: 'Ongoing Support', desc: 'Help with account maintenance, additional signatories and trade-finance facilities.' },
    ],
    process: [
      { title: 'Profile & Bank Matching', desc: 'We review your company profile and shortlist banks aligned to your risk profile.' },
      { title: 'Document Preparation', desc: 'We compile and review your KYC, licence and source-of-funds documents.' },
      { title: 'Bank Introduction & Meeting', desc: 'We arrange the application and accompany you through the bank interview.' },
      { title: 'KYC & Activation', desc: 'We track compliance review to approval and account activation.' },
    ],
    requirements: [
      'Valid trade licence & company documents',
      'Memorandum of Association',
      'Shareholder passports & visa copies',
      'Emirates ID (for residents)',
      'Company profile / business plan',
      'Proof of source of funds & expected activity',
    ],
    faqs: [
      { q: 'How long does account opening take?', a: 'Typically 1–4 weeks depending on the bank, your business activity and how complete your documentation is. We work to keep it at the faster end.' },
      { q: 'Do I need to be in the UAE to open an account?', a: 'Most banks require the signatory to attend at least one in-person meeting or verification. We schedule this efficiently for you.' },
      { q: 'Can a brand-new company open an account?', a: 'Yes. Newly formed companies open accounts regularly — strong documentation and a clear business narrative are what matter most.' },
      { q: 'Which banks do you work with?', a: 'We work with leading local and international banks operating in the UAE and recommend the best fit for your profile — we do not push a single bank.' },
      { q: 'Can you guarantee approval?', a: 'No one can guarantee a bank’s decision, but our preparation and introductions significantly improve approval odds — our success rate is around 95%.' },
    ],
    related: ['company-registration', 'corporate-pro-services', 'professional-services'],
  },

  /* ───────────────────────── 4. VISA SERVICES ───────────────────────── */
  {
    slug: 'visa-services',
    navLabel: 'Visa Services',
    icon: Plane,
    eyebrow: 'Residence Visas',
    title: 'UAE Visa Services — Residence, Investor & Golden Visa',
    heroSubtitle:
      'Investor, partner, employment, family and 10-year Golden Visas — processed end to end, from entry permit and medical to Emirates ID and stamping.',
    heroHighlights: ['Investor & Golden Visa', 'Family Sponsorship', '98% Success Rate'],
    metaTitle: 'UAE Visa Services Dubai | Residence, Investor & Golden Visa | Smartgic Visa',
    metaDescription:
      'End-to-end UAE visa services: investor, partner, employment, family and 10-year Golden Visa. Entry permit, medical, Emirates ID and stamping handled. Free consultation.',
    keywords: [
      'UAE residence visa',
      'Dubai visa services',
      'investor visa UAE',
      'Golden Visa Dubai',
      'family visa Dubai',
    ],
    overview: {
      heading: 'Every UAE visa, handled by one team',
      body: [
        'Whether you need an investor visa tied to your new company, employment visas for your team, residence visas for your family, or the prestigious 10-year Golden Visa, the steps are detailed and time-sensitive — entry permit, status change, medical fitness, Emirates ID and passport stamping.',
        'Smartgic manages the entire chain and keeps you compliant on quotas and renewals. We assess eligibility, prepare the paperwork, book and accompany appointments, and deliver your residence visa without the queues.',
      ],
    },
    stats: [
      { value: '98%', label: 'Visa Success Rate' },
      { value: '10-Yr', label: 'Golden Visa' },
      { value: '120+', label: 'Nationalities Served' },
      { value: '5–10', label: 'Days Standard Visa' },
    ],
    benefits: [
      { title: 'Investor & Partner Visas', desc: 'Residence visas linked to your company ownership, renewable and family-sponsoring.' },
      { title: '10-Year Golden Visa', desc: 'Long-term residency for investors, entrepreneurs, talents and skilled professionals.' },
      { title: 'Family Sponsorship', desc: 'Sponsor spouse, children and parents with correctly structured applications.' },
      { title: 'Employment Visas', desc: 'MOHRE work permits and labour cards for your team, fully compliant.' },
      { title: 'Fast-Tracked Appointments', desc: 'Medical, Emirates ID and biometrics scheduled and managed for you.' },
      { title: 'Renewals & Cancellations', desc: 'Ongoing visa renewals, amendments and cancellations handled on time.' },
    ],
    process: [
      { title: 'Eligibility Assessment', desc: 'We confirm the right visa type and check eligibility, quota and documents.' },
      { title: 'Entry Permit & Status Change', desc: 'We secure the entry permit and complete the in-country status change.' },
      { title: 'Medical & Emirates ID', desc: 'We book and accompany your medical fitness test and Emirates ID biometrics.' },
      { title: 'Visa Stamping', desc: 'Your residence visa is issued and linked to your Emirates ID — you are a UAE resident.' },
    ],
    requirements: [
      'Passport valid 6+ months',
      'Passport-size photographs',
      'Company / sponsor documents (for investor & employment)',
      'Marriage / birth certificates (for family — attested)',
      'Proof of eligibility (for Golden Visa)',
      'Current visa or entry stamp',
    ],
    faqs: [
      { q: 'Who qualifies for the Golden Visa?', a: 'Investors, entrepreneurs, highly skilled professionals, scientists, talents and outstanding students, among others. We assess your specific case and confirm the best route to the 10-year visa.' },
      { q: 'How long does a standard residence visa take?', a: 'Around 5–10 working days for a standard investor or employment visa once the entry permit and medical are complete. Golden Visas can take longer due to additional vetting.' },
      { q: 'Can I sponsor my family?', a: 'Yes. Once you hold a residence visa meeting the salary/criteria, you can sponsor your spouse, children and in many cases your parents.' },
      { q: 'Do I need a medical test?', a: 'Yes, a medical fitness test is mandatory for residence visas, along with Emirates ID biometrics. We schedule and accompany you.' },
      { q: 'Can you process visas for my employees?', a: 'Absolutely. We handle establishment/immigration cards, MOHRE work permits and the full employee visa chain.' },
    ],
    related: ['company-registration', 'document-clearing-services', 'corporate-pro-services'],
  },

  /* ───────────────────────── 5. DOCUMENT CLEARING SERVICES ───────────────────────── */
  {
    slug: 'document-clearing-services',
    navLabel: 'Document Clearing Services',
    icon: FileCheck2,
    eyebrow: 'Documents & Attestation',
    title: 'Document Clearing & Attestation Services',
    heroSubtitle:
      'Typing-centre, attestation and government document clearing handled accurately and fast — applications, approvals, MOFA and embassy attestation, and certified translation.',
    heroHighlights: ['MOFA & Embassy', 'Certified Translation', 'Same-Day Options'],
    metaTitle: 'Document Clearing & Attestation Services Dubai | Smartgic Visa',
    metaDescription:
      'Document clearing, MOFA and embassy attestation, certified legal translation and government applications in Dubai — accurate, fast and compliant. Free consultation.',
    keywords: [
      'document clearing Dubai',
      'attestation services UAE',
      'MOFA attestation Dubai',
      'certificate attestation UAE',
      'legal translation Dubai',
    ],
    overview: {
      heading: 'Your paperwork, cleared correctly the first time',
      body: [
        'Document clearing is the licensed activity at the heart of Smartgic. A single rejected form or mis-typed application can stall a visa, a licence or a property deal for weeks.',
        'We handle government applications and typing, certificate and degree attestation through MOFA and embassies, commercial and personal document attestation, and certified legal translation — accurately, on time, and in full compliance with UAE requirements.',
      ],
    },
    stats: [
      { value: '50k+', label: 'Documents Cleared' },
      { value: '100+', label: 'Document Types' },
      { value: 'Same-Day', label: 'Express Options' },
      { value: '12+', label: 'Languages Translated' },
    ],
    benefits: [
      { title: 'Certificate Attestation', desc: 'Degrees, diplomas and birth/marriage certificates attested for UAE and overseas use.' },
      { title: 'MOFA & Embassy Liaison', desc: 'End-to-end attestation through the Ministry of Foreign Affairs and relevant embassies.' },
      { title: 'Certified Legal Translation', desc: 'Court- and government-accepted translation across 12+ languages.' },
      { title: 'Government Applications', desc: 'Accurate typing and submission of DET, GDRFA and other government forms.' },
      { title: 'Commercial Documents', desc: 'MOA, contracts, powers of attorney and corporate document attestation.' },
      { title: 'Express Turnaround', desc: 'Same-day and priority options when your deadline cannot move.' },
    ],
    process: [
      { title: 'Document Review', desc: 'We check your documents, confirm the attestation chain and flag anything missing.' },
      { title: 'Typing & Application', desc: 'We type and submit the correct applications to the relevant authorities.' },
      { title: 'Attestation & Translation', desc: 'We process MOFA/embassy attestation and certified translation as required.' },
      { title: 'Delivery', desc: 'Cleared, attested documents are returned to you ready for use.' },
    ],
    requirements: [
      'Original documents to be cleared/attested',
      'Passport copy of the document holder',
      'Prior attestations (if any)',
      'Target authority or country of use',
      'Translation language (if required)',
      'Authorisation letter (for third-party submission)',
    ],
    faqs: [
      { q: 'What is document attestation?', a: 'Attestation is the official verification of a document’s authenticity by relevant authorities (e.g. issuing country, UAE Embassy and MOFA) so it is legally accepted in the UAE or abroad.' },
      { q: 'How long does attestation take?', a: 'It depends on the document type and country of origin — from a couple of days for local documents to longer for overseas certificates. We offer express options where available.' },
      { q: 'Do you provide certified translation?', a: 'Yes. We provide legal translation certified for UAE courts and government departments across more than 12 languages.' },
      { q: 'Can you attest educational certificates?', a: 'Yes — degrees, diplomas and school certificates are among the most common documents we attest for visas and employment.' },
      { q: 'Do I need to hand over original documents?', a: 'Originals are usually required for attestation. We handle them securely and return them with the completed attestation.' },
    ],
    related: ['visa-services', 'corporate-pro-services', 'company-registration'],
  },

  /* ───────────────────────── 6. CORPORATE PRO SERVICES ───────────────────────── */
  {
    slug: 'corporate-pro-services',
    navLabel: 'Corporate PRO Services',
    icon: Landmark,
    eyebrow: 'PRO & Compliance',
    title: 'Corporate PRO Services & Government Liaison',
    heroSubtitle:
      'Outsource your government relations to a dedicated PRO. Licence renewals, visa processing, labour and immigration cards, approvals and ongoing compliance — all managed for you.',
    heroHighlights: ['Dedicated PRO', 'All Departments', 'Monthly Retainers'],
    metaTitle: 'Corporate PRO Services Dubai | Government Liaison & Compliance | Smartgic Visa',
    metaDescription:
      'Outsourced corporate PRO services in Dubai: licence renewals, visa processing, labour & immigration cards, approvals and compliance across all government departments.',
    keywords: [
      'PRO services Dubai',
      'corporate PRO UAE',
      'government liaison Dubai',
      'PRO outsourcing UAE',
      'business compliance Dubai',
    ],
    overview: {
      heading: 'Your in-house government desk — without the headcount',
      body: [
        'A Public Relations Officer (PRO) manages your company’s dealings with UAE government departments. Done well, it saves your team days of queueing and protects you from costly fines and lapsed renewals.',
        'Smartgic acts as your outsourced PRO across DET, GDRFA, MOHRE, MOFA and the chambers — handling licence and visa renewals, establishment and immigration cards, approvals, amendments and document clearing on flexible per-task or monthly-retainer terms.',
      ],
    },
    stats: [
      { value: '15–20', label: 'Days Saved / Month' },
      { value: 'All', label: 'Govt Departments' },
      { value: '24/7', label: 'Renewal Tracking' },
      { value: '0', label: 'Missed Deadlines' },
    ],
    benefits: [
      { title: 'Dedicated PRO', desc: 'A named officer who knows your file and represents you at every department.' },
      { title: 'Renewal Management', desc: 'Proactive tracking and processing of licence, visa and card renewals — never late.' },
      { title: 'Visa & Labour Processing', desc: 'Establishment cards, immigration cards, MOHRE permits and labour contracts.' },
      { title: 'Approvals & Amendments', desc: 'Activity additions, manager changes, MOA amendments and special approvals.' },
      { title: 'Compliance Shield', desc: 'Stay ahead of regulatory changes and avoid fines, blocks and blacklisting.' },
      { title: 'Flexible Engagement', desc: 'Pay per task or choose a monthly retainer that scales with your headcount.' },
    ],
    process: [
      { title: 'Compliance Audit', desc: 'We review your licence, visas and renewals and build a compliance calendar.' },
      { title: 'Onboard Your PRO', desc: 'We assign a dedicated PRO and set up authorisations to act on your behalf.' },
      { title: 'Day-to-Day Liaison', desc: 'We process renewals, approvals, visas and documents as they arise.' },
      { title: 'Reporting & Renewals', desc: 'You receive status updates and we execute renewals ahead of every deadline.' },
    ],
    requirements: [
      'Valid trade licence',
      'Establishment / immigration card (if existing)',
      'Shareholder & employee passport copies',
      'Existing visa details',
      'Authorisation / power of attorney to act as PRO',
      'Company stamp (where required)',
    ],
    packages: [
      {
        name: 'Pay Per Task',
        badge: 'Flexible',
        price: 'From AED 500',
        period: 'per transaction',
        features: ['Single renewal or approval', 'Document clearing', 'Visa stamping run', 'No monthly commitment', 'Transparent per-task pricing'],
      },
      {
        name: 'Monthly Retainer',
        badge: 'Best Value',
        featured: true,
        price: 'From AED 1,500',
        period: 'per month',
        features: ['Dedicated PRO', 'Unlimited government liaison*', 'Renewal calendar & alerts', 'Visa & card processing', 'Monthly compliance report', 'Priority turnaround'],
      },
      {
        name: 'Enterprise',
        badge: 'Teams 25+',
        price: 'Custom',
        period: 'tailored quote',
        features: ['On-site PRO days', 'Bulk visa processing', 'Dedicated account director', 'SLA-backed turnaround', 'Quarterly compliance reviews'],
      },
    ],
    faqs: [
      { q: 'What does a PRO actually do?', a: 'A PRO handles your company’s government transactions — licence and visa renewals, immigration and labour processing, attestations, approvals and amendments — so you avoid queues, errors and fines.' },
      { q: 'Pay-per-task or monthly retainer?', a: 'If you have occasional needs, pay per task. If you renew visas/licences regularly or have a growing team, a monthly retainer is more cost-effective and keeps you continuously compliant.' },
      { q: 'Will I have one point of contact?', a: 'Yes. You get a dedicated PRO who knows your company and a relationship manager overseeing the engagement.' },
      { q: 'Can you take over from our current setup?', a: 'Yes. We audit your current licence and visa status, then take over renewals and liaison seamlessly.' },
      { q: 'Do you cover all emirates?', a: 'We focus on Dubai and coordinate federal departments (GDRFA, MOHRE, MOFA). Other emirates can be supported on request.' },
    ],
    related: ['visa-services', 'document-clearing-services', 'trade-license-renewals'],
  },

  /* ───────────────────────── 7. TRADE LICENSE RENEWALS ───────────────────────── */
  {
    slug: 'trade-license-renewals',
    navLabel: 'Trade License Renewals',
    icon: RefreshCw,
    eyebrow: 'Licence Renewal',
    title: 'Trade Licence Renewals in Dubai',
    heroSubtitle:
      'Renew your Mainland or Free Zone trade licence on time and avoid penalties. We track your expiry, renew your Ejari and licence, and keep your visas and cards aligned.',
    heroHighlights: ['No Late Penalties', 'Ejari Included', 'Reminder Tracking'],
    metaTitle: 'Trade Licence Renewal Dubai | Mainland & Free Zone | Smartgic Visa',
    metaDescription:
      'Renew your Dubai trade licence on time — mainland or free zone. Ejari renewal, licence renewal and visa alignment handled to avoid fines. Free consultation.',
    keywords: [
      'trade licence renewal Dubai',
      'licence renewal UAE',
      'renew trade licence Dubai',
      'free zone licence renewal',
      'mainland licence renewal',
    ],
    overview: {
      heading: 'Never lose a day — or pay a fine — on renewals',
      body: [
        'A trade licence must be renewed every year. Miss the expiry and you face daily fines, blocked transactions, frozen visas and potential blacklisting — all of which cost far more than the renewal itself.',
        'Smartgic tracks your expiry dates and handles the full renewal: tenancy/Ejari renewal, licence renewal with the authority, and alignment of your establishment card and visas — so your business never skips a beat.',
      ],
    },
    stats: [
      { value: '0', label: 'Missed Renewals' },
      { value: '24/7', label: 'Expiry Tracking' },
      { value: '1–2', label: 'Days Turnaround' },
      { value: '100%', label: 'Penalty Avoidance' },
    ],
    benefits: [
      { title: 'Proactive Reminders', desc: 'We alert you well before expiry and start the renewal early to avoid any lapse.' },
      { title: 'Ejari / Tenancy Renewal', desc: 'We renew your registered tenancy so your mainland licence renewal goes through cleanly.' },
      { title: 'Fast Authority Processing', desc: 'Licence renewals processed with DET or your free zone in as little as 1–2 days.' },
      { title: 'Penalty Avoidance', desc: 'Stay clear of late fines, transaction blocks and blacklisting risks.' },
      { title: 'Visa & Card Alignment', desc: 'We keep your establishment card and visas synced with your renewed licence.' },
      { title: 'Amendments at Renewal', desc: 'Add activities, change managers or update details efficiently at renewal time.' },
    ],
    process: [
      { title: 'Expiry Tracking', desc: 'We log your licence expiry and notify you ahead of the deadline.' },
      { title: 'Document & Ejari Check', desc: 'We verify documents and renew your tenancy/Ejari where required.' },
      { title: 'Licence Renewal', desc: 'We submit and process the renewal with DET or your free-zone authority.' },
      { title: 'Updated Licence Issued', desc: 'Your renewed licence is issued and your cards/visas are kept aligned.' },
    ],
    requirements: [
      'Existing trade licence copy',
      'Tenancy contract / Ejari (for mainland)',
      'Establishment card copy',
      'Shareholder passport / Emirates ID',
      'Any activity-amendment details',
      'Authorisation to renew on your behalf',
    ],
    faqs: [
      { q: 'What happens if my licence expires?', a: 'You incur daily late-renewal fines, and after a grace period your licence can be suspended — blocking visa processing and bank transactions. We renew ahead of time to prevent this.' },
      { q: 'How early can I renew?', a: 'Renewals can typically be processed in the weeks before expiry. We start early so there is never a gap in validity.' },
      { q: 'Do I need to renew my Ejari too?', a: 'For mainland licences, a valid registered tenancy (Ejari) is usually required to renew the licence. We handle both together.' },
      { q: 'How fast is the renewal?', a: 'Once documents are in order, many renewals are completed within 1–2 working days.' },
      { q: 'Can I change activities during renewal?', a: 'Yes, renewal is a convenient time to add activities or update company details — we process amendments alongside the renewal.' },
    ],
    related: ['corporate-pro-services', 'company-registration', 'document-clearing-services'],
  },

  /* ───────────────────────── 8. CO-WORKING SPACE ───────────────────────── */
  {
    slug: 'co-working-space',
    navLabel: 'Co-working Space',
    icon: Building,
    eyebrow: 'Flexible Workspace',
    title: 'Co-working Space & Business Address in Dubai',
    heroSubtitle:
      'Flexi-desks, dedicated desks, private offices and licence-ready business addresses in prime Dubai locations — with meeting rooms, mail handling and visa-eligible packages.',
    heroHighlights: ['Licence-Ready Address', 'Prime Locations', 'Visa-Eligible Desks'],
    metaTitle: 'Co-working Space & Business Address Dubai | Smartgic Visa',
    metaDescription:
      'Flexi-desks, dedicated desks and private offices in prime Dubai locations — licence-ready, visa-eligible business addresses with meeting rooms and mail handling.',
    keywords: [
      'co-working space Dubai',
      'flexi desk Dubai',
      'business address Dubai',
      'virtual office Dubai',
      'shared office space UAE',
    ],
    overview: {
      heading: 'A professional address that satisfies your licence',
      body: [
        'Every UAE company needs a registered address, and your workspace package directly affects your licensing and visa quota. The right co-working solution gives you a credible business address, the desks you actually need, and room to scale.',
        'Smartgic provides flexi-desk, dedicated-desk and private-office options in prime Dubai locations — bundled with meeting-room access, mail and call handling, and visa-eligible packages that align with your trade licence.',
      ],
    },
    stats: [
      { value: 'Prime', label: 'Dubai Locations' },
      { value: 'Flexi', label: 'Monthly Terms' },
      { value: 'Visa', label: 'Eligible Packages' },
      { value: '24/7', label: 'Access Options' },
    ],
    benefits: [
      { title: 'Licence-Ready Address', desc: 'A registered business address accepted for your trade licence and renewals.' },
      { title: 'Visa-Eligible Desks', desc: 'Packages that unlock residence-visa allocations for you and your team.' },
      { title: 'Flexible Terms', desc: 'Month-to-month and annual options — scale up or down without long leases.' },
      { title: 'Meeting Rooms', desc: 'On-demand meeting and conference rooms to host clients professionally.' },
      { title: 'Mail & Call Handling', desc: 'Business mail management and reception services to project a polished image.' },
      { title: 'Prime Locations', desc: 'Addresses in sought-after Dubai business districts that impress clients.' },
    ],
    process: [
      { title: 'Needs & Location', desc: 'We understand your team size, visa needs and preferred Dubai location.' },
      { title: 'Package Selection', desc: 'We recommend flexi-desk, dedicated-desk or private-office options to match.' },
      { title: 'Agreement & Address', desc: 'We finalise your workspace agreement and issue your registered address.' },
      { title: 'Move In & Scale', desc: 'You move in (or go virtual) and scale your desks and visas as you grow.' },
    ],
    requirements: [
      'Trade licence (or in-progress application)',
      'Passport copy of authorised signatory',
      'Emirates ID (for residents)',
      'Number of desks / visas required',
      'Preferred location & term',
      'Company stamp (for agreement)',
    ],
    packages: [
      {
        name: 'Flexi Desk',
        badge: 'Startups',
        price: 'From AED 6,000',
        period: 'per year',
        features: ['Shared hot-desk access', 'Registered business address', 'Mail handling', 'Meeting-room credits', 'Up to 1 visa allocation'],
      },
      {
        name: 'Dedicated Desk',
        badge: 'Most Popular',
        featured: true,
        price: 'From AED 12,000',
        period: 'per year',
        features: ['Your own permanent desk', 'Prime business address', 'Mail & call handling', 'Priority meeting rooms', 'Multiple visa allocations', '24/7 access option'],
      },
      {
        name: 'Private Office',
        badge: 'Teams',
        price: 'From AED 30,000',
        period: 'per year',
        features: ['Lockable private office', 'Branded reception option', 'Higher visa quota', 'Dedicated meeting room hours', 'Scalable floor space'],
      },
    ],
    faqs: [
      { q: 'Can a co-working address be used for my licence?', a: 'Yes. Our packages provide a registered, licence-ready business address accepted by the relevant authority for company formation and renewals.' },
      { q: 'Do co-working packages include visas?', a: 'Visa-eligible packages allocate a number of residence visas based on the desk type and space. We align the package to your visa needs.' },
      { q: 'Can I start virtual and upgrade later?', a: 'Yes. Many clients start with a flexi-desk or virtual package and upgrade to a dedicated desk or private office as the team grows.' },
      { q: 'Where are the locations?', a: 'We offer addresses in prime Dubai business districts. We recommend the best location for your budget, image and visa needs.' },
      { q: 'Are meeting rooms included?', a: 'Most packages include meeting-room credits, with additional hours available on demand.' },
    ],
    related: ['company-registration', 'professional-services', 'corporate-pro-services'],
  },
];

export const servicesBySlug: Record<string, Service> = Object.fromEntries(
  services.map((s) => [s.slug, s]),
);

export function getService(slug: string): Service | undefined {
  return servicesBySlug[slug];
}

export const serviceSlugs = services.map((s) => s.slug);

/** Compact list for nav mega-menu / footer. */
export const serviceNav = services.map((s) => ({
  slug: s.slug,
  label: s.navLabel,
  icon: s.icon,
  blurb: s.eyebrow,
}));
