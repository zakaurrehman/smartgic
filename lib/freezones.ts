/**
 * UAE jurisdiction directory — free zones, mainland and offshore.
 *
 * Each entry powers:
 *   • the /free-zones directory (search + filter + comparison table)
 *   • an individual /free-zones/[slug] landing page
 *   • internal linking between jurisdictions and corporate services
 *
 * Deliberately NO per-zone government fees are stored here. Authority fees
 * change and vary by activity, visa count and office type, so zones carry a
 * relative `costTier` only and every page routes to a tailored quote.
 */

export type ZoneCategory = 'Free Zone' | 'Mainland' | 'Offshore';

export type Emirate =
  | 'Dubai'
  | 'Abu Dhabi'
  | 'Sharjah'
  | 'Ras Al Khaimah'
  | 'Ajman'
  | 'Fujairah'
  | 'Umm Al Quwain';

export type CostTier = 'Budget' | 'Budget–Mid' | 'Mid-range' | 'Premium';

export type ZoneFaq = { q: string; a: string };

export type Jurisdiction = {
  slug: string;
  name: string;
  /** Short badge text used in cards and the marquee. */
  abbr: string;
  emirate: Emirate;
  category: ZoneCategory;
  /** One line shown under the name in cards. */
  tagline: string;
  /** Single differentiator used in the comparison table. */
  standout: string;
  costTier: CostTier;
  /** Filter chips + "best for" column. */
  bestFor: string[];
  /** Free-text search keywords (sectors, aliases). */
  sectors: string[];
  /** 2 short paragraphs for the page overview. */
  intro: string[];
  highlights: { title: string; desc: string }[];
  licenceTypes: { name: string; desc: string }[];
  officeOptions: string[];
  idealFor: string[];
  faqs: ZoneFaq[];
  /** Other jurisdiction slugs to cross-link. */
  related: string[];
  /** Service slugs from lib/services.ts to cross-link. */
  services: string[];
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
};

/** Shared, jurisdiction-agnostic setup path shown on every zone page. */
export const zoneSetupSteps = [
  {
    title: 'Activity & structure review',
    desc: 'We confirm the business activities you need, the legal form that fits them and whether this jurisdiction is genuinely the best match for your plan.',
  },
  {
    title: 'Trade name reservation',
    desc: 'We check your preferred names against authority naming rules and reserve the one that clears.',
  },
  {
    title: 'Office or flexi-desk selection',
    desc: 'We select the workspace package that satisfies the licence requirement and unlocks the visa quota you need.',
  },
  {
    title: 'Application & initial approval',
    desc: 'We compile the application, submit it to the authority and manage every clarification until initial approval is granted.',
  },
  {
    title: 'Documentation & signing',
    desc: 'Incorporation documents are prepared, signed and — where the jurisdiction requires it — notarised.',
  },
  {
    title: 'Licence issuance & next steps',
    desc: 'Your licence is issued and we move straight on to establishment card, visas and your corporate bank account.',
  },
];

/** Shared document checklist. Activity-specific extras are flagged on the page. */
export const zoneDocuments = [
  'Passport copy for every shareholder and manager',
  'Passport-size photographs (white background)',
  'Two to three proposed trade names',
  'Chosen business activities',
  'Shareholding split between partners',
  'UAE entry stamp or residence visa page, if already in the country',
  'For corporate shareholders: attested certificate of incorporation, MoA and board resolution',
];

export const jurisdictions: Jurisdiction[] = [
  /* ─────────────────────────── DUBAI FREE ZONES ─────────────────────────── */
  {
    slug: 'ifza',
    name: 'IFZA — International Free Zone Authority',
    abbr: 'IFZA',
    emirate: 'Dubai',
    category: 'Free Zone',
    tagline: 'Cost-effective Dubai licences with flexible, modular packages',
    standout:
      'One of the most affordable routes to a Dubai licence, with package pricing that scales by visa count.',
    costTier: 'Budget',
    bestFor: ['Consultancy', 'Trading', 'E-commerce', 'Startups', 'Freelancers'],
    sectors: [
      'consulting',
      'management consultancy',
      'general trading',
      'online retail',
      'marketing',
      'IT services',
    ],
    intro: [
      'IFZA is a Dubai-based free zone that has become one of the most widely used entry points into the UAE for small and mid-sized businesses. Its appeal is structural: packages are modular, so you pay for the visa allocation and workspace you actually need rather than a fixed bundle.',
      'For consultancies, trading companies and e-commerce founders who want a Dubai licence without a premium-district price tag, IFZA is usually on the shortlist. Smartgic handles the activity selection, application and visa processing end to end.',
    ],
    highlights: [
      {
        title: '100% foreign ownership',
        desc: 'Full ownership of your company with no local partner or service agent required.',
      },
      {
        title: 'Modular visa allocation',
        desc: 'Choose your visa quota up front and scale it as you hire, rather than paying for unused allocation.',
      },
      {
        title: 'Broad activity list',
        desc: 'A wide spread of commercial, professional and service activities, with multi-activity licences available.',
      },
      {
        title: 'Fast, largely remote process',
        desc: 'Most of the formation can be completed without you being in the UAE, with a short visit for biometrics.',
      },
    ],
    licenceTypes: [
      {
        name: 'Commercial licence',
        desc: 'Buying, selling, importing, exporting and distributing goods, including general trading.',
      },
      {
        name: 'Professional / service licence',
        desc: 'Consultancy, advisory, marketing, IT and other service-based activities.',
      },
      {
        name: 'Industrial licence',
        desc: 'Light manufacturing, assembly and processing, subject to facility requirements.',
      },
    ],
    officeOptions: [
      'Flexi-desk / shared workspace',
      'Dedicated desk',
      'Private office',
      'Warehouse (via partner facilities)',
    ],
    idealFor: [
      'First-time founders who want a Dubai address at a controlled cost',
      'Consultants and agencies billing international clients',
      'E-commerce and dropshipping businesses',
      'Small trading companies with one to five visas',
    ],
    faqs: [
      {
        q: 'Is IFZA a Dubai free zone?',
        a: 'Yes. IFZA is licensed in Dubai, so your trade licence carries a Dubai jurisdiction — which matters for banking, credibility and client perception.',
      },
      {
        q: 'How many visas can I get with an IFZA licence?',
        a: 'Visa allocation is tied to the package and workspace you select. Packages range from zero-visa licences up to larger allocations. We size the package to your hiring plan so you do not overpay.',
      },
      {
        q: 'Can I trade inside the UAE mainland with an IFZA licence?',
        a: 'Free zone companies trade freely internationally and within free zones. Selling directly into the UAE mainland generally requires a mainland distributor, agent or a separate mainland licence. We map this out before you commit.',
      },
      {
        q: 'Do I need to visit Dubai to set up?',
        a: 'Most of the process can be completed remotely. A short visit is normally needed for your medical test and Emirates ID biometrics if you are taking a residence visa.',
      },
    ],
    related: ['meydan', 'shams', 'spc-free-zone', 'dmcc'],
    services: ['company-registration', 'visa-services', 'bank-account-opening'],
    metaTitle: 'IFZA Free Zone Company Setup in Dubai | Smartgic Visa',
    metaDescription:
      'Set up an IFZA free zone company in Dubai with 100% ownership. Licence types, visa allocation, office options and the full formation process — handled end to end.',
    keywords: [
      'IFZA free zone',
      'IFZA company setup',
      'IFZA licence cost',
      'Dubai free zone company',
      'IFZA business setup',
    ],
  },
  {
    slug: 'dmcc',
    name: 'DMCC — Dubai Multi Commodities Centre',
    abbr: 'DMCC',
    emirate: 'Dubai',
    category: 'Free Zone',
    tagline: 'The UAE’s largest free zone — commodities, trade and Web3',
    standout:
      'The most-awarded free zone in the world, with deep commodities infrastructure and a dedicated Crypto Centre.',
    costTier: 'Premium',
    bestFor: ['Commodities', 'Crypto & Web3', 'Trading', 'Professional services', 'Holding'],
    sectors: [
      'gold',
      'diamonds',
      'precious metals',
      'tea',
      'coffee',
      'blockchain',
      'crypto',
      'web3',
      'commodities trading',
    ],
    intro: [
      'DMCC in Jumeirah Lakes Towers is the UAE’s largest free zone by company count and has been repeatedly recognised as Global Free Zone of the Year. It was built around commodities — gold, diamonds, tea and other physical trade — and has since added dedicated ecosystems for crypto, Web3 and AI businesses.',
      'The trade-off is positioning rather than price: DMCC sits at the premium end, but it buys you strong banking acceptance, a recognised address and a genuine business community. Smartgic advises on whether that premium is justified for your model before you commit.',
    ],
    highlights: [
      {
        title: 'Strong banking acceptance',
        desc: 'UAE banks are familiar with DMCC entities, which generally makes corporate account opening more straightforward.',
      },
      {
        title: 'Commodities infrastructure',
        desc: 'Purpose-built facilities including vaults, the Dubai Diamond Exchange and coffee and tea centres.',
      },
      {
        title: 'Crypto & Web3 ecosystem',
        desc: 'A dedicated Crypto Centre with a defined licensing route for distributed-ledger and Web3 activities.',
      },
      {
        title: 'Prime JLT location',
        desc: 'A dense mixed-use district with offices, residential towers, metro access and a large professional community.',
      },
    ],
    licenceTypes: [
      {
        name: 'Trading licence',
        desc: 'Import, export, distribution and general trading, including regulated commodities activities.',
      },
      {
        name: 'Service licence',
        desc: 'Consultancy, fintech, professional services and creative activities.',
      },
      {
        name: 'Industrial licence',
        desc: 'Manufacturing, processing and assembly within approved facilities.',
      },
    ],
    officeOptions: [
      'Flexi-desk',
      'Serviced office',
      'Fitted and shell-and-core offices',
      'Retail and storage units',
    ],
    idealFor: [
      'Physical commodities traders needing recognised infrastructure',
      'Crypto, blockchain and Web3 businesses seeking a licensed home',
      'Established companies where the address carries commercial weight',
      'Holding structures and family offices',
    ],
    faqs: [
      {
        q: 'Why is DMCC more expensive than other free zones?',
        a: 'You are paying for location, infrastructure and reputation — JLT real estate, commodities facilities and a brand that banks and counterparties recognise. For some businesses that pays for itself; for others a lower-cost zone does the same job. We will tell you honestly which applies to you.',
      },
      {
        q: 'Can DMCC companies apply for a crypto licence?',
        a: 'DMCC operates a dedicated Crypto Centre with defined activity categories for distributed-ledger businesses. Approval depends on your specific activity and may involve additional regulatory review. We confirm the exact route before applying.',
      },
      {
        q: 'What legal structures are available?',
        a: 'Typically a Free Zone LLC (new company), a branch of an existing UAE or foreign company, or a subsidiary. The right choice depends on your group structure and tax position.',
      },
      {
        q: 'How long does DMCC formation take?',
        a: 'Timelines depend on activity, shareholder type and whether any activity needs extra approval. Straightforward service and trading companies move faster than regulated activities. We give you a realistic timeline at the consultation, not a best case.',
      },
    ],
    related: ['difc', 'jafza', 'meydan', 'dafza'],
    services: ['company-registration', 'bank-account-opening', 'corporate-pro-services'],
    metaTitle: 'DMCC Free Zone Company Formation in Dubai | Smartgic Visa',
    metaDescription:
      'Form a DMCC company in Dubai — licence types, legal structures, crypto and commodities activities, office options and the full setup process. Free consultation.',
    keywords: [
      'DMCC free zone',
      'DMCC company formation',
      'DMCC licence',
      'JLT company setup',
      'DMCC crypto licence',
    ],
  },
  {
    slug: 'meydan',
    name: 'Meydan Free Zone',
    abbr: 'MFZ',
    emirate: 'Dubai',
    category: 'Free Zone',
    tagline: 'A prestige Dubai address with a fast, digital-first application',
    standout:
      'A recognised Dubai address at mid-range cost, with one of the quickest largely-digital application routes.',
    costTier: 'Mid-range',
    bestFor: ['E-commerce', 'Consultancy', 'Trading', 'Holding', 'Startups'],
    sectors: [
      'ecommerce',
      'online store',
      'consultancy',
      'general trading',
      'marketing',
      'holding company',
    ],
    intro: [
      'Meydan Free Zone sits in the Nad Al Sheba district, attached to the Meydan hotel and racecourse complex. It has built its reputation on a streamlined, largely digital application process and a Dubai address that reads well on an invoice.',
      'It occupies useful middle ground: more prestige than the entry-level zones, meaningfully less than DMCC or DIFC. It is a common choice for e-commerce operators, consultancies and holding companies.',
    ],
    highlights: [
      {
        title: 'Recognised Dubai address',
        desc: 'A Meydan address carries weight with clients, suppliers and banks without premium-zone pricing.',
      },
      {
        title: 'Streamlined application',
        desc: 'A largely digital process that reduces back-and-forth and shortens time to licence.',
      },
      {
        title: 'Multi-activity licences',
        desc: 'Combine related activities under a single licence rather than paying for several.',
      },
      {
        title: 'E-commerce friendly',
        desc: 'Well-established activity categories for online retail and digital businesses.',
      },
    ],
    licenceTypes: [
      {
        name: 'Commercial licence',
        desc: 'Trading, import, export, distribution and e-commerce activities.',
      },
      {
        name: 'Professional licence',
        desc: 'Consultancy, advisory and service-based activities.',
      },
      {
        name: 'Holding / SPV structures',
        desc: 'Entities formed to hold shares, assets or intellectual property.',
      },
    ],
    officeOptions: ['Flexi-desk', 'Dedicated desk', 'Private office suites'],
    idealFor: [
      'E-commerce and digital businesses',
      'Consultancies wanting a stronger address than an entry-level zone',
      'Holding companies and SPVs',
      'Founders who value speed and a clean digital process',
    ],
    faqs: [
      {
        q: 'How does Meydan compare to IFZA?',
        a: 'IFZA is generally the lower-cost option; Meydan typically carries a stronger address and a slicker application. Both give you a Dubai licence and 100% ownership. The right pick depends on how much the address matters to your clients and banking.',
      },
      {
        q: 'Can I get a residence visa with a Meydan licence?',
        a: 'Yes. Visa allocation depends on the package and workspace you choose. We size it to the number of people you actually need to sponsor.',
      },
      {
        q: 'Is Meydan suitable for a holding company?',
        a: 'It is commonly used for holding and SPV structures. The right structure depends on what you are holding and where — we assess that before recommending a jurisdiction.',
      },
      {
        q: 'Can I add activities later?',
        a: 'Activities can usually be amended at renewal or mid-term, subject to authority approval and fees. We handle the amendment filing.',
      },
    ],
    related: ['ifza', 'dmcc', 'dubai-south', 'shams'],
    services: ['company-registration', 'visa-services', 'trade-license-renewals'],
    metaTitle: 'Meydan Free Zone Company Setup in Dubai | Smartgic Visa',
    metaDescription:
      'Set up a Meydan Free Zone company in Dubai — licence types, visa allocation, office packages and the full formation process, managed end to end by Smartgic.',
    keywords: [
      'Meydan free zone',
      'Meydan company setup',
      'Meydan free zone licence',
      'Dubai ecommerce licence',
      'Meydan business setup',
    ],
  },
  {
    slug: 'difc',
    name: 'DIFC — Dubai International Financial Centre',
    abbr: 'DIFC',
    emirate: 'Dubai',
    category: 'Free Zone',
    tagline: 'A common-law financial centre with its own courts and regulator',
    standout:
      'An independent common-law jurisdiction with its own courts and the DFSA as financial regulator.',
    costTier: 'Premium',
    bestFor: ['Asset management', 'Fintech', 'Funds', 'Family offices', 'Legal & advisory'],
    sectors: [
      'financial services',
      'asset management',
      'wealth management',
      'fintech',
      'funds',
      'law firm',
      'family office',
    ],
    intro: [
      'DIFC is a financial free zone operating under its own common-law framework, with an independent court system and the Dubai Financial Services Authority as regulator. That legal architecture is the reason financial institutions, funds and family offices choose it.',
      'It is not a general-purpose business zone. If you are running a regulated financial activity, a fund, or a structure where common law and an independent judiciary genuinely matter, DIFC is the right conversation. For a straightforward trading or consultancy licence, it is almost certainly over-specified.',
    ],
    highlights: [
      {
        title: 'Common-law framework',
        desc: 'An independent legal system based on common law, separate from UAE civil law.',
      },
      {
        title: 'Independent courts',
        desc: 'The DIFC Courts operate in English with their own judiciary and enforcement route.',
      },
      {
        title: 'DFSA regulation',
        desc: 'A recognised financial regulator, which matters for institutional counterparties and investors.',
      },
      {
        title: 'Foundations & trusts regime',
        desc: 'Established structures for wealth planning, succession and asset holding.',
      },
    ],
    licenceTypes: [
      {
        name: 'Regulated financial activities',
        desc: 'Activities requiring DFSA authorisation — asset management, advisory, arranging, custody and more.',
      },
      {
        name: 'Non-regulated / professional',
        desc: 'Law firms, consultancies, family offices and corporate service providers operating without DFSA authorisation.',
      },
      {
        name: 'Foundations & holding structures',
        desc: 'Wealth, succession and asset-holding vehicles under the DIFC regime.',
      },
    ],
    officeOptions: ['Serviced and co-working suites', 'Fitted offices', 'Shell-and-core floors'],
    idealFor: [
      'Asset managers, advisers and arrangers requiring DFSA authorisation',
      'Fund structures and fund managers',
      'Family offices and succession structures',
      'Law firms and professional advisers serving financial clients',
    ],
    faqs: [
      {
        q: 'Do I need DFSA authorisation?',
        a: 'Only if your activity is a regulated financial activity. Many DIFC entities — law firms, consultancies, family offices, holding vehicles — operate without it. We confirm which category you fall into before you commit to DIFC pricing.',
      },
      {
        q: 'Is DIFC worth it for a normal trading company?',
        a: 'Usually not. DIFC is built for financial and professional activities that need a common-law framework. A trading company is normally better served by DMCC, JAFZA or a mainland licence. We will say so rather than sell you the more expensive option.',
      },
      {
        q: 'What is the DIFC foundations regime used for?',
        a: 'Foundations are commonly used for succession planning, asset holding and family governance. The right structure depends on your assets, residence and beneficiaries — this needs proper advice, not a template.',
      },
      {
        q: 'Can DIFC companies sponsor residence visas?',
        a: 'Yes, subject to the visa allocation tied to your office space and licence category.',
      },
    ],
    related: ['adgm', 'dmcc', 'dafza', 'dubai-internet-city'],
    services: ['company-registration', 'bank-account-opening', 'professional-services'],
    metaTitle: 'DIFC Company Formation in Dubai | Financial Free Zone | Smartgic Visa',
    metaDescription:
      'Set up in DIFC — the common-law financial free zone with its own courts and the DFSA regulator. Regulated and non-regulated routes, foundations and office options.',
    keywords: [
      'DIFC company formation',
      'DIFC free zone',
      'DFSA licence',
      'Dubai financial free zone',
      'DIFC foundation',
    ],
  },
  {
    slug: 'jafza',
    name: 'JAFZA — Jebel Ali Free Zone',
    abbr: 'JAFZA',
    emirate: 'Dubai',
    category: 'Free Zone',
    tagline: 'The UAE’s logistics backbone, built around Jebel Ali Port',
    standout:
      'Direct access to Jebel Ali Port and Al Maktoum airport — unmatched for physical trade at volume.',
    costTier: 'Mid-range',
    bestFor: ['Logistics', 'Manufacturing', 'Re-export', 'Warehousing', 'Heavy trading'],
    sectors: [
      'shipping',
      'freight',
      'warehouse',
      'distribution',
      'manufacturing',
      'import export',
      'supply chain',
    ],
    intro: [
      'JAFZA sits beside Jebel Ali Port, one of the busiest container ports in the world, with Al Maktoum International Airport nearby. For any business moving physical goods at volume, that adjacency is the entire value proposition.',
      'It offers the full range from office units to large warehousing and industrial plots, which makes it the default choice for logistics operators, manufacturers and re-export traders rather than service businesses.',
    ],
    highlights: [
      {
        title: 'Port-adjacent operations',
        desc: 'Move goods between your facility and Jebel Ali Port without inland haulage.',
      },
      {
        title: 'Full facility range',
        desc: 'Offices, light industrial units, warehouses and land plots under one authority.',
      },
      {
        title: 'Re-export hub',
        desc: 'A long-established base for companies importing into the region and re-exporting onward.',
      },
      {
        title: 'Offshore option',
        desc: 'JAFZA also operates an offshore registry used for holding structures.',
      },
    ],
    licenceTypes: [
      { name: 'Trading licence', desc: 'Import, export, distribution and re-export of goods.' },
      {
        name: 'Industrial licence',
        desc: 'Manufacturing, processing and assembly in approved industrial facilities.',
      },
      {
        name: 'Service licence',
        desc: 'Logistics, freight forwarding and supporting professional services.',
      },
    ],
    officeOptions: [
      'Office units',
      'Light industrial units',
      'Warehouses',
      'Land plots for development',
    ],
    idealFor: [
      'Freight forwarders and logistics operators',
      'Manufacturers needing industrial space',
      'Importers re-exporting across the GCC, Africa and South Asia',
      'Businesses with significant warehousing requirements',
    ],
    faqs: [
      {
        q: 'Is JAFZA only for large companies?',
        a: 'No, but it is built around physical operations. If you do not need warehousing, industrial space or port adjacency, you are paying for infrastructure you will not use — a service-focused zone will serve you better.',
      },
      {
        q: 'What is JAFZA Offshore?',
        a: 'A separate offshore registry used mainly for holding structures and asset holding. It does not issue residence visas and is not an operating licence. We cover it under our offshore listings.',
      },
      {
        q: 'Can JAFZA companies import into the UAE mainland?',
        a: 'Goods moving from a free zone into the mainland are treated as imports and attract the applicable duty and customs process. We map the customs implications with you.',
      },
      {
        q: 'How many visas can a JAFZA company sponsor?',
        a: 'Visa allocation scales with the size and type of facility you lease. Larger warehouses and industrial units carry substantially higher quotas than office units.',
      },
    ],
    related: ['dubai-south', 'dafza', 'kezad', 'jafza-offshore'],
    services: ['company-registration', 'document-clearing-services', 'corporate-pro-services'],
    metaTitle: 'JAFZA Company Setup — Jebel Ali Free Zone Dubai | Smartgic Visa',
    metaDescription:
      'Set up in JAFZA, the Jebel Ali Free Zone. Trading, industrial and logistics licences, warehousing and land options, visa quotas and the full formation process.',
    keywords: [
      'JAFZA free zone',
      'Jebel Ali free zone company',
      'JAFZA licence',
      'Dubai logistics free zone',
      'JAFZA warehouse',
    ],
  },
  {
    slug: 'dafza',
    name: 'DAFZA — Dubai Airport Freezone',
    abbr: 'DAFZA',
    emirate: 'Dubai',
    category: 'Free Zone',
    tagline: 'On the doorstep of Dubai International Airport',
    standout: 'Airside proximity to DXB — built for high-value, time-critical air freight.',
    costTier: 'Premium',
    bestFor: ['Aviation', 'Electronics', 'Pharmaceuticals', 'Luxury goods', 'Air freight'],
    sectors: [
      'aviation',
      'aerospace',
      'electronics',
      'pharma',
      'medical devices',
      'jewellery',
      'air cargo',
    ],
    intro: [
      'DAFZA sits immediately beside Dubai International Airport. For businesses moving high-value or time-sensitive goods by air — electronics, pharmaceuticals, aviation parts, luxury goods — that proximity removes hours from every shipment.',
      'It is positioned at the premium end and attracts established international companies rather than first-time founders. The value is operational, not cosmetic.',
    ],
    highlights: [
      {
        title: 'Airport adjacency',
        desc: 'Minutes from DXB cargo terminals, which matters for perishable and time-critical freight.',
      },
      {
        title: 'High-value goods handling',
        desc: 'Infrastructure and security suited to electronics, pharmaceuticals and luxury goods.',
      },
      {
        title: 'Established corporate base',
        desc: 'A tenant mix weighted towards international companies and regional headquarters.',
      },
      {
        title: 'Strong regional connectivity',
        desc: 'Direct access to one of the world’s busiest international air cargo hubs.',
      },
    ],
    licenceTypes: [
      {
        name: 'Trading licence',
        desc: 'Import, export and distribution, particularly of high-value air-freighted goods.',
      },
      {
        name: 'Service licence',
        desc: 'Aviation services, logistics support and professional services.',
      },
      {
        name: 'Industrial licence',
        desc: 'Light assembly and processing within approved facilities.',
      },
    ],
    officeOptions: ['Office units', 'Light industrial units', 'Warehouses'],
    idealFor: [
      'Electronics and consumer technology distributors',
      'Pharmaceutical and medical device importers',
      'Aviation and aerospace suppliers',
      'Luxury goods and jewellery businesses',
    ],
    faqs: [
      {
        q: 'Is DAFZA worth the premium over JAFZA?',
        a: 'It depends entirely on how your goods move. If you ship by air and time matters, yes. If you move containers by sea, JAFZA is the better fit and usually cheaper. We choose based on your logistics, not on margin.',
      },
      {
        q: 'Can DAFZA companies sponsor visas?',
        a: 'Yes. Allocation is linked to the facility you lease.',
      },
      {
        q: 'Is DAFZA suitable for a consultancy?',
        a: 'It can issue service licences, but you would be paying airport-adjacent rates for an advantage a consultancy cannot use. A Dubai service-focused zone is normally the better value.',
      },
      {
        q: 'What sectors dominate DAFZA?',
        a: 'Aviation, electronics, pharmaceuticals, jewellery, luxury goods and air-freight logistics.',
      },
    ],
    related: ['jafza', 'dmcc', 'dubai-south', 'difc'],
    services: ['company-registration', 'document-clearing-services', 'bank-account-opening'],
    metaTitle: 'DAFZA Company Setup — Dubai Airport Freezone | Smartgic Visa',
    metaDescription:
      'Set up in DAFZA, beside Dubai International Airport. Trading, service and industrial licences for air-freight, electronics, pharma and luxury goods businesses.',
    keywords: [
      'DAFZA free zone',
      'Dubai Airport Freezone',
      'DAFZA company setup',
      'air cargo free zone Dubai',
      'DAFZA licence',
    ],
  },
  {
    slug: 'dubai-south',
    name: 'Dubai South (DWC)',
    abbr: 'DWC',
    emirate: 'Dubai',
    category: 'Free Zone',
    tagline: 'The aviation and logistics district around Al Maktoum Airport',
    standout: 'Purpose-built around Al Maktoum International Airport and the Expo legacy district.',
    costTier: 'Mid-range',
    bestFor: ['Logistics', 'E-commerce fulfilment', 'Aviation', 'Events', 'Light industrial'],
    sectors: ['logistics', 'fulfilment', 'aviation', 'exhibitions', 'warehousing', 'ecommerce'],
    intro: [
      'Dubai South is a master-planned district built around Al Maktoum International Airport, incorporating logistics, aviation, commercial and residential zones as well as the Expo legacy site.',
      'It suits businesses that want logistics and fulfilment capability with room to expand, at costs below the established port and airport zones. The trade-off is distance from central Dubai.',
    ],
    highlights: [
      {
        title: 'Airport-linked logistics',
        desc: 'Built around Al Maktoum International Airport with dedicated logistics districts.',
      },
      {
        title: 'Room to scale',
        desc: 'Land and facility availability that the older, denser zones no longer have.',
      },
      {
        title: 'Mixed-use district',
        desc: 'Commercial, logistics, aviation and residential zones within one master plan.',
      },
      {
        title: 'Competitive facility costs',
        desc: 'Generally lower facility costs than the long-established airport and port zones.',
      },
    ],
    licenceTypes: [
      { name: 'Trading licence', desc: 'Import, export and distribution activities.' },
      {
        name: 'Service licence',
        desc: 'Logistics, aviation support and professional services.',
      },
      {
        name: 'Industrial licence',
        desc: 'Light manufacturing and assembly within designated districts.',
      },
    ],
    officeOptions: ['Office units', 'Warehouses', 'Land plots', 'Co-working options'],
    idealFor: [
      'E-commerce businesses needing fulfilment space',
      'Logistics operators wanting room to expand',
      'Aviation support and services companies',
      'Events and exhibitions businesses',
    ],
    faqs: [
      {
        q: 'How does Dubai South compare to JAFZA?',
        a: 'JAFZA is sea-freight led and long established; Dubai South is air-freight led with more space to grow and generally lower facility costs. Your freight mix decides it.',
      },
      {
        q: 'Is it too far from central Dubai?',
        a: 'It is a genuine consideration for client-facing businesses. For logistics and fulfilment operations, where your team works at the facility anyway, it rarely matters.',
      },
      {
        q: 'Can I get visas through Dubai South?',
        a: 'Yes, with allocation tied to your leased facility.',
      },
      {
        q: 'Is there co-working available?',
        a: 'Yes — smaller workspace options exist alongside the warehousing and land offering.',
      },
    ],
    related: ['jafza', 'dafza', 'meydan', 'kezad'],
    services: ['company-registration', 'co-working-space', 'visa-services'],
    metaTitle: 'Dubai South (DWC) Free Zone Company Setup | Smartgic Visa',
    metaDescription:
      'Set up in Dubai South (DWC) — the logistics and aviation district at Al Maktoum International Airport. Licences, warehousing, land and visa allocation explained.',
    keywords: [
      'Dubai South free zone',
      'DWC free zone',
      'Dubai South company setup',
      'Al Maktoum airport free zone',
      'Dubai logistics free zone',
    ],
  },
  {
    slug: 'dubai-internet-city',
    name: 'Dubai Internet City (TECOM)',
    abbr: 'DIC',
    emirate: 'Dubai',
    category: 'Free Zone',
    tagline: 'Dubai’s technology and media cluster',
    standout:
      'A purpose-built technology cluster hosting global software, platform and media companies.',
    costTier: 'Premium',
    bestFor: ['SaaS', 'IT services', 'Media', 'Telecom', 'AI'],
    sectors: [
      'software',
      'saas',
      'technology',
      'media',
      'advertising',
      'telecom',
      'artificial intelligence',
    ],
    intro: [
      'Dubai Internet City is part of the TECOM group of business districts, which also includes Dubai Media City, Dubai Design District, Dubai Knowledge Park and Dubai Science Park. It is the region’s best-known technology cluster.',
      'The draw is the ecosystem: proximity to global technology companies, regional headquarters and a large concentration of technical talent. It is priced accordingly and suits funded or established technology businesses more than early-stage founders.',
    ],
    highlights: [
      {
        title: 'Technology ecosystem',
        desc: 'A dense cluster of software, platform and telecom companies with regional headquarters on site.',
      },
      {
        title: 'Talent concentration',
        desc: 'One of the region’s largest concentrations of technical and creative professionals.',
      },
      {
        title: 'Sister districts',
        desc: 'Access to related TECOM districts covering media, design, education and science.',
      },
      {
        title: 'Central location',
        desc: 'Situated on Sheikh Zayed Road with metro access and adjacent residential communities.',
      },
    ],
    licenceTypes: [
      {
        name: 'Service licence',
        desc: 'Software development, IT services, consultancy and technology services.',
      },
      {
        name: 'Commercial licence',
        desc: 'Distribution and resale of technology products, subject to activity approval.',
      },
      {
        name: 'Freelancer permit',
        desc: 'Individual permits for qualifying technology and media professionals.',
      },
    ],
    officeOptions: ['Co-working and business centre desks', 'Serviced offices', 'Fitted office units'],
    idealFor: [
      'Software and SaaS companies establishing a regional base',
      'IT services and systems integration businesses',
      'Media, advertising and content businesses (via sister districts)',
      'Technology companies hiring locally at scale',
    ],
    faqs: [
      {
        q: 'Is Dubai Internet City only for large tech companies?',
        a: 'It skews that way on price, but smaller service licences and freelancer permits exist. If budget is the binding constraint, IFZA or Meydan will issue an equivalent IT services licence for less.',
      },
      {
        q: 'What is the difference between Internet City and Media City?',
        a: 'Both sit under TECOM. Internet City is technology-focused; Media City covers broadcasting, publishing, advertising and content. Your activity determines which applies.',
      },
      {
        q: 'Is there a freelancer route?',
        a: 'TECOM districts operate freelancer permits for qualifying technology and media professionals, subject to credential requirements.',
      },
      {
        q: 'Can I hire and sponsor staff?',
        a: 'Yes. Visa allocation depends on your workspace type and size.',
      },
    ],
    related: ['difc', 'dmcc', 'shams', 'meydan'],
    services: ['company-registration', 'professional-services', 'co-working-space'],
    metaTitle: 'Dubai Internet City (TECOM) Company Setup | Smartgic Visa',
    metaDescription:
      'Set up in Dubai Internet City, the TECOM technology cluster. Service licences, freelancer permits, office options and visa allocation for tech and media businesses.',
    keywords: [
      'Dubai Internet City',
      'TECOM free zone',
      'Dubai tech free zone',
      'Dubai Media City',
      'DIC company setup',
    ],
  },

  /* ────────────────────────── SHARJAH FREE ZONES ────────────────────────── */
  {
    slug: 'shams',
    name: 'SHAMS — Sharjah Media City',
    abbr: 'SHAMS',
    emirate: 'Sharjah',
    category: 'Free Zone',
    tagline: 'Low-cost UAE licences with a media and creative focus',
    standout:
      'One of the lowest-cost routes to a UAE licence, popular with freelancers and creative businesses.',
    costTier: 'Budget',
    bestFor: ['Media', 'Creative', 'Marketing', 'Freelancers', 'E-commerce'],
    sectors: [
      'media',
      'film',
      'photography',
      'design',
      'advertising',
      'content',
      'influencer',
      'publishing',
    ],
    intro: [
      'SHAMS was established as Sharjah’s media free zone and has become one of the most widely used low-cost entry points into the UAE, particularly for freelancers, creative professionals and small service businesses.',
      'The licence is genuinely inexpensive, which makes it a sensible starting point when you need a compliant UAE entity and a residence visa without committing to Dubai pricing. The trade-off is a Sharjah rather than Dubai jurisdiction.',
    ],
    highlights: [
      {
        title: 'Low entry cost',
        desc: 'Among the most affordable licence routes in the UAE, with zero-visa options available.',
      },
      {
        title: 'Media and creative focus',
        desc: 'A broad set of activity categories covering media, content, design and marketing.',
      },
      {
        title: 'Multi-activity licences',
        desc: 'Combine several related activities under one licence.',
      },
      {
        title: 'Straightforward process',
        desc: 'A simple application path suited to solo founders and small teams.',
      },
    ],
    licenceTypes: [
      {
        name: 'Service licence',
        desc: 'Media, creative, consultancy and professional service activities.',
      },
      { name: 'Commercial licence', desc: 'Trading and e-commerce activities.' },
      {
        name: 'Freelance permit',
        desc: 'Individual permits for qualifying media and creative professionals.',
      },
    ],
    officeOptions: ['Flexi-desk', 'Shared workspace', 'Private office'],
    idealFor: [
      'Freelancers and solo consultants needing a compliant UAE entity',
      'Content creators, photographers and designers',
      'Marketing and creative agencies at an early stage',
      'Founders testing the UAE market before committing to Dubai costs',
    ],
    faqs: [
      {
        q: 'Is a Sharjah licence a problem for Dubai clients?',
        a: 'Rarely for service businesses invoicing internationally. It can matter for banking and for clients who weigh a Dubai address. If that is a real concern for your market, we will say so and price the Dubai alternative.',
      },
      {
        q: 'Can I live in Dubai with a SHAMS visa?',
        a: 'A UAE residence visa issued through any emirate permits you to live anywhere in the UAE. Practical considerations such as Ejari and some employer processes vary, and we walk you through them.',
      },
      {
        q: 'Does SHAMS offer visas?',
        a: 'Yes. Packages range from zero-visa licences upward, with allocation tied to your workspace selection.',
      },
      {
        q: 'Can I upgrade to a Dubai licence later?',
        a: 'Yes. Many founders start in a low-cost zone and move to a Dubai jurisdiction once revenue justifies it. We handle the transition.',
      },
    ],
    related: ['spc-free-zone', 'ifza', 'saif-zone', 'ajman-free-zone'],
    services: ['company-registration', 'visa-services', 'professional-services'],
    metaTitle: 'SHAMS Sharjah Media City Free Zone Setup | Smartgic Visa',
    metaDescription:
      'Set up a SHAMS free zone company in Sharjah — low-cost media, creative and trading licences, freelance permits, visa options and the full process.',
    keywords: [
      'SHAMS free zone',
      'Sharjah Media City',
      'cheap UAE free zone licence',
      'SHAMS company setup',
      'UAE freelance licence',
    ],
  },
  {
    slug: 'spc-free-zone',
    name: 'SPC Free Zone — Sharjah Publishing City',
    abbr: 'SPC',
    emirate: 'Sharjah',
    category: 'Free Zone',
    tagline: 'Fast licence issuance with dual-licence flexibility',
    standout:
      'Rapid licence issuance and a dual-licence route that pairs free zone and Sharjah mainland activity.',
    costTier: 'Budget',
    bestFor: ['Publishing', 'Consultancy', 'Trading', 'Services', 'Startups'],
    sectors: ['publishing', 'printing', 'consultancy', 'general trading', 'ecommerce', 'education'],
    intro: [
      'SPC Free Zone began as Sharjah’s publishing free zone and has broadened into a general-purpose low-cost jurisdiction. It is known for quick licence issuance and for a dual-licence arrangement that lets qualifying companies hold both a free zone and a Sharjah mainland licence.',
      'That dual route is the genuine differentiator: it addresses the usual free zone limitation of not being able to sell directly into the local market.',
    ],
    highlights: [
      {
        title: 'Fast issuance',
        desc: 'One of the quicker licence routes in the UAE for straightforward activities.',
      },
      {
        title: 'Dual-licence option',
        desc: 'A route to hold both free zone and Sharjah mainland activity, subject to eligibility.',
      },
      {
        title: 'Broad activity list',
        desc: 'Well beyond publishing — consultancy, trading, e-commerce and services.',
      },
      {
        title: 'Low entry cost',
        desc: 'Entry-level pricing with flexible visa allocation.',
      },
    ],
    licenceTypes: [
      { name: 'Commercial licence', desc: 'Trading, e-commerce, import and export.' },
      { name: 'Service licence', desc: 'Consultancy, advisory and professional services.' },
      {
        name: 'Publishing & printing',
        desc: 'The zone’s original specialism, covering publishing, printing and distribution.',
      },
    ],
    officeOptions: ['Flexi-desk', 'Shared workspace', 'Private office'],
    idealFor: [
      'Founders who need a licence issued quickly',
      'Businesses wanting both free zone and local-market reach',
      'Consultancies and small trading companies',
      'Publishing, printing and education businesses',
    ],
    faqs: [
      {
        q: 'What is the dual licence?',
        a: 'It is an arrangement allowing qualifying free zone companies to also hold Sharjah mainland activity, which addresses the usual restriction on selling directly into the local market. Eligibility depends on your activity — we confirm it before you rely on it.',
      },
      {
        q: 'How quickly can I get a licence?',
        a: 'SPC is known for fast issuance on straightforward activities. Regulated or approval-dependent activities take longer. We give you a realistic timeline for your specific activity.',
      },
      {
        q: 'Is SPC only for publishing?',
        a: 'No. The activity list is broad and covers consultancy, trading, e-commerce and services.',
      },
      {
        q: 'Can I sponsor family members?',
        a: 'Yes, once you hold a residence visa and meet the sponsorship requirements. We handle family visa applications.',
      },
    ],
    related: ['shams', 'saif-zone', 'ifza', 'ajman-free-zone'],
    services: ['company-registration', 'visa-services', 'sponsorship-services'],
    metaTitle: 'SPC Free Zone Sharjah Company Setup | Smartgic Visa',
    metaDescription:
      'Set up in SPC Free Zone, Sharjah Publishing City — fast licence issuance, dual-licence options, broad activity list and full visa processing.',
    keywords: [
      'SPC free zone',
      'Sharjah Publishing City',
      'SPC dual licence',
      'Sharjah free zone company',
      'fast UAE licence',
    ],
  },
  {
    slug: 'saif-zone',
    name: 'SAIF Zone — Sharjah Airport International Free Zone',
    abbr: 'SAIF',
    emirate: 'Sharjah',
    category: 'Free Zone',
    tagline: 'Warehousing and light industrial space beside Sharjah Airport',
    standout: 'Affordable warehousing and light industrial units with airport adjacency.',
    costTier: 'Budget–Mid',
    bestFor: ['Light manufacturing', 'Warehousing', 'Trading', 'Distribution'],
    sectors: ['manufacturing', 'warehouse', 'storage', 'distribution', 'assembly', 'import export'],
    intro: [
      'SAIF Zone sits next to Sharjah International Airport and has been operating since the 1990s. It is one of the more cost-effective places in the UAE to secure warehousing or light industrial space.',
      'For businesses that need physical space but cannot justify Dubai industrial rates, it is a practical answer — particularly for assembly, storage and regional distribution.',
    ],
    highlights: [
      {
        title: 'Affordable industrial space',
        desc: 'Warehousing and light industrial units at materially lower cost than Dubai equivalents.',
      },
      {
        title: 'Airport adjacency',
        desc: 'Next to Sharjah International Airport, a significant regional air-cargo hub.',
      },
      {
        title: 'Established zone',
        desc: 'Decades of operation with a mature tenant base and known processes.',
      },
      {
        title: 'Good road links',
        desc: 'Connected to Dubai and the northern emirates by major highways.',
      },
    ],
    licenceTypes: [
      { name: 'Commercial licence', desc: 'Trading, import, export and distribution.' },
      { name: 'Industrial licence', desc: 'Light manufacturing, assembly and processing.' },
      { name: 'Service licence', desc: 'Supporting professional and logistics services.' },
    ],
    officeOptions: ['Office units', 'Warehouses', 'Light industrial units', 'Land plots'],
    idealFor: [
      'Light manufacturing and assembly operations',
      'Businesses needing affordable warehousing',
      'Regional distributors serving the northern emirates',
      'Trading companies with storage requirements',
    ],
    faqs: [
      {
        q: 'How does SAIF compare to JAFZA?',
        a: 'JAFZA offers scale and sea-port adjacency; SAIF offers substantially lower cost and air-cargo proximity. If your volumes do not require Jebel Ali, SAIF often makes better commercial sense.',
      },
      {
        q: 'Can I get a warehouse with a small licence?',
        a: 'Yes — unit sizes start small, which is part of the appeal for growing businesses.',
      },
      {
        q: 'What visa allocation comes with a warehouse?',
        a: 'Allocation scales with facility size. Warehouses carry meaningfully higher quotas than office units.',
      },
      {
        q: 'Is SAIF suitable for a consultancy?',
        a: 'It can issue service licences, but a consultancy gains nothing from industrial infrastructure. SHAMS or SPC will be cheaper and better suited.',
      },
    ],
    related: ['shams', 'spc-free-zone', 'rakez', 'jafza'],
    services: ['company-registration', 'document-clearing-services', 'visa-services'],
    metaTitle: 'SAIF Zone Sharjah Free Zone Company Setup | Smartgic Visa',
    metaDescription:
      'Set up in SAIF Zone beside Sharjah International Airport — affordable warehousing, light industrial units, trading licences and visa allocation.',
    keywords: [
      'SAIF Zone',
      'Sharjah Airport Free Zone',
      'UAE warehouse free zone',
      'SAIF Zone licence',
      'Sharjah industrial setup',
    ],
  },

  /* ─────────────────── NORTHERN EMIRATES FREE ZONES ─────────────────── */
  {
    slug: 'rakez',
    name: 'RAKEZ — Ras Al Khaimah Economic Zone',
    abbr: 'RAKEZ',
    emirate: 'Ras Al Khaimah',
    category: 'Free Zone',
    tagline: 'Industrial land and SME packages at a fraction of Dubai cost',
    standout: 'Industrial land and manufacturing facilities at costs Dubai zones cannot match.',
    costTier: 'Budget–Mid',
    bestFor: ['Manufacturing', 'Industrial', 'SMEs', 'Trading', 'Services'],
    sectors: [
      'manufacturing',
      'industrial',
      'factory',
      'production',
      'general trading',
      'consultancy',
    ],
    intro: [
      'RAKEZ is Ras Al Khaimah’s consolidated economic zone, covering both free zone and non-free-zone (RAK mainland) company formation. It is one of the largest zones in the UAE by tenant count and is heavily weighted towards industrial and SME businesses.',
      'Its structural advantage is cost: industrial land, warehousing and manufacturing facilities are materially cheaper than Dubai, while the licence still carries full UAE standing.',
    ],
    highlights: [
      {
        title: 'Low-cost industrial land',
        desc: 'Manufacturing and warehousing space at a fraction of Dubai rates.',
      },
      {
        title: 'Free zone and mainland',
        desc: 'RAKEZ issues both free zone and RAK mainland licences through one authority.',
      },
      {
        title: 'SME-focused packages',
        desc: 'Entry-level packages built for small businesses and solo founders.',
      },
      {
        title: 'Large tenant base',
        desc: 'Thousands of companies across manufacturing, trading and services.',
      },
    ],
    licenceTypes: [
      { name: 'Commercial licence', desc: 'Trading, import, export and distribution.' },
      {
        name: 'Industrial licence',
        desc: 'Manufacturing, processing and assembly with land and facility options.',
      },
      {
        name: 'Professional / service licence',
        desc: 'Consultancy, advisory and professional services.',
      },
      {
        name: 'Educational & media licences',
        desc: 'Specialist categories for training, education and media activities.',
      },
    ],
    officeOptions: ['Flexi-desk', 'Standard offices', 'Warehouses', 'Industrial land plots'],
    idealFor: [
      'Manufacturers needing affordable industrial space',
      'SMEs where licence cost is a binding constraint',
      'Trading companies serving the northern emirates',
      'Businesses wanting a choice of free zone or mainland from one authority',
    ],
    faqs: [
      {
        q: 'Is RAK too far from Dubai?',
        a: 'It is roughly an hour from Dubai by road. For manufacturing and warehousing operations that is rarely an issue. For client-facing service businesses that need a Dubai presence, it can be.',
      },
      {
        q: 'What is the difference between RAKEZ free zone and RAKEZ mainland?',
        a: 'The free zone licence gives 100% ownership with the usual free zone trading limits. The RAK mainland licence allows direct local-market trade within RAK. We map which fits your sales model.',
      },
      {
        q: 'Can RAKEZ companies sponsor visas?',
        a: 'Yes, with allocation scaling by package and facility.',
      },
      {
        q: 'Is RAKEZ good for a small consultancy?',
        a: 'Its entry-level packages are competitive. Compare against SHAMS and SPC — for a pure consultancy the difference often comes down to a few hundred dirhams and which jurisdiction you prefer.',
      },
    ],
    related: ['ajman-free-zone', 'uaq-ftz', 'saif-zone', 'rak-icc'],
    services: ['company-registration', 'visa-services', 'trade-license-renewals'],
    metaTitle: 'RAKEZ Free Zone Company Setup in Ras Al Khaimah | Smartgic Visa',
    metaDescription:
      'Set up in RAKEZ — Ras Al Khaimah Economic Zone. Free zone and mainland licences, industrial land, warehousing and SME packages with full visa processing.',
    keywords: [
      'RAKEZ free zone',
      'Ras Al Khaimah company setup',
      'RAKEZ licence',
      'UAE industrial free zone',
      'cheap UAE company formation',
    ],
  },
  {
    slug: 'ajman-free-zone',
    name: 'Ajman Free Zone',
    abbr: 'AFZ',
    emirate: 'Ajman',
    category: 'Free Zone',
    tagline: 'Low-cost licensing with proximity to Ajman Port',
    standout: 'Entry-level licence pricing with port access for small-scale regional trade.',
    costTier: 'Budget',
    bestFor: ['SMEs', 'Trading', 'Services', 'E-commerce', 'Light industrial'],
    sectors: ['general trading', 'consultancy', 'ecommerce', 'light manufacturing', 'distribution'],
    intro: [
      'Ajman Free Zone is one of the UAE’s longer-established zones and competes primarily on price. It sits close to Ajman Port, which supports small and mid-scale regional trade.',
      'It is a sensible option for cost-sensitive founders and small trading businesses that do not need a Dubai address or Dubai-scale logistics.',
    ],
    highlights: [
      { title: 'Entry-level pricing', desc: 'Among the lower-cost licence options in the UAE.' },
      {
        title: 'Port proximity',
        desc: 'Close to Ajman Port for smaller-scale regional shipping.',
      },
      {
        title: 'Established zone',
        desc: 'Decades of operation with well-understood processes.',
      },
      {
        title: 'Flexible facilities',
        desc: 'From flexi-desks through to warehousing and light industrial units.',
      },
    ],
    licenceTypes: [
      { name: 'Commercial licence', desc: 'Trading, import, export and distribution.' },
      { name: 'Professional licence', desc: 'Consultancy and service activities.' },
      { name: 'Industrial licence', desc: 'Light manufacturing and assembly.' },
    ],
    officeOptions: ['Flexi-desk', 'Office units', 'Warehouses', 'Land plots'],
    idealFor: [
      'Cost-sensitive founders needing a compliant UAE licence',
      'Small trading companies serving regional markets',
      'Service businesses invoicing internationally',
      'Light industrial operations at modest scale',
    ],
    faqs: [
      {
        q: 'Is Ajman Free Zone credible with banks?',
        a: 'Corporate account opening is generally more involved for northern-emirate free zones than for DMCC or a Dubai mainland licence. It is achievable — we prepare the file properly and set realistic expectations up front.',
      },
      {
        q: 'Can I live in Dubai on an Ajman visa?',
        a: 'A UAE residence visa allows you to live anywhere in the country. We cover the practical considerations during your consultation.',
      },
      {
        q: 'How does it compare to RAKEZ?',
        a: 'Both compete on cost. RAKEZ has a larger industrial offering; Ajman is often marginally cheaper at the entry level. For a small service licence the difference is small.',
      },
      {
        q: 'Are visas included?',
        a: 'Visa allocation depends on the package selected. Zero-visa licences are available if you do not need residency.',
      },
    ],
    related: ['rakez', 'uaq-ftz', 'shams', 'spc-free-zone'],
    services: ['company-registration', 'visa-services', 'bank-account-opening'],
    metaTitle: 'Ajman Free Zone Company Setup | Smartgic Visa',
    metaDescription:
      'Set up an Ajman Free Zone company — low-cost trading, professional and industrial licences, warehousing options and full UAE visa processing.',
    keywords: [
      'Ajman Free Zone',
      'Ajman company setup',
      'cheap free zone UAE',
      'Ajman free zone licence',
      'low cost UAE business setup',
    ],
  },
  {
    slug: 'uaq-ftz',
    name: 'UAQ FTZ — Umm Al Quwain Free Trade Zone',
    abbr: 'UAQ',
    emirate: 'Umm Al Quwain',
    category: 'Free Zone',
    tagline: 'Straightforward, low-cost licensing through a single window',
    standout: 'A simple single-window process at one of the lowest licence costs in the UAE.',
    costTier: 'Budget',
    bestFor: ['Micro-businesses', 'Consultancy', 'Trading', 'Freelancers'],
    sectors: ['consultancy', 'general trading', 'services', 'ecommerce', 'freelance'],
    intro: [
      'UAQ FTZ is one of the UAE’s smaller free zones and competes almost entirely on simplicity and cost. The application process is handled through a single window with a short activity approval path.',
      'It suits micro-businesses and solo founders who need a compliant UAE entity at minimum cost and do not require a prestige address or physical facilities.',
    ],
    highlights: [
      {
        title: 'Very low entry cost',
        desc: 'Among the cheapest licence routes available in the UAE.',
      },
      {
        title: 'Simple process',
        desc: 'A single-window application with limited bureaucracy for standard activities.',
      },
      {
        title: 'Multi-activity licences',
        desc: 'Several related activities can sit under one licence.',
      },
      {
        title: 'No paid-up capital requirement',
        desc: 'Capital does not need to be deposited for standard activities.',
      },
    ],
    licenceTypes: [
      { name: 'Commercial licence', desc: 'Trading, import, export and e-commerce.' },
      { name: 'Consultancy licence', desc: 'Advisory and professional service activities.' },
      { name: 'Freelance permit', desc: 'Individual permits for qualifying professionals.' },
      {
        name: 'Micro-business licence',
        desc: 'A reduced-scope option for very small operations.',
      },
    ],
    officeOptions: ['Flexi-desk', 'Shared workspace', 'Small office units', 'Warehouses'],
    idealFor: [
      'Solo founders and freelancers on a tight budget',
      'Consultants invoicing overseas clients',
      'Small e-commerce operations',
      'Founders who need residency at minimum licence cost',
    ],
    faqs: [
      {
        q: 'Is UAQ FTZ credible?',
        a: 'It is a legitimate, licensed UAE free zone. The honest caveat is that corporate banking is generally harder than with a Dubai licence, so we prepare the bank file carefully and tell you in advance what to expect.',
      },
      {
        q: 'Can I get a residence visa?',
        a: 'Yes, subject to the package and workspace selected.',
      },
      {
        q: 'Can I upgrade to a Dubai licence later?',
        a: 'Yes. Starting lean and moving once revenue supports it is a common and sensible path. We handle the move.',
      },
      {
        q: 'How far is UAQ from Dubai?',
        a: 'Roughly an hour by road. For a flexi-desk licence you will rarely need to attend in person after setup.',
      },
    ],
    related: ['ajman-free-zone', 'rakez', 'shams', 'spc-free-zone'],
    services: ['company-registration', 'visa-services', 'professional-services'],
    metaTitle: 'UAQ FTZ — Umm Al Quwain Free Trade Zone Setup | Smartgic Visa',
    metaDescription:
      'Set up in UAQ Free Trade Zone — one of the lowest-cost UAE licence routes. Commercial, consultancy and freelance permits with full visa processing.',
    keywords: [
      'UAQ free zone',
      'Umm Al Quwain free trade zone',
      'cheapest UAE free zone',
      'UAQ FTZ licence',
      'low cost UAE licence',
    ],
  },
  {
    slug: 'fujairah-creative-city',
    name: 'Fujairah Creative City',
    abbr: 'FCC',
    emirate: 'Fujairah',
    category: 'Free Zone',
    tagline: 'Media and consultancy licences with no capital requirement',
    standout:
      'Media and consultancy licensing with no paid-up capital requirement and a simple remote process.',
    costTier: 'Budget',
    bestFor: ['Media', 'Consultancy', 'Freelancers', 'Events', 'Education'],
    sectors: ['media', 'broadcasting', 'consultancy', 'events', 'training', 'design', 'content'],
    intro: [
      'Fujairah Creative City is a media-oriented free zone on the UAE’s east coast. It has no paid-up capital requirement for standard activities and runs a largely remote application process.',
      'It works well for media professionals, consultants and small service businesses whose clients are international and who do not need a UAE-facing physical presence.',
    ],
    highlights: [
      {
        title: 'No capital requirement',
        desc: 'Standard activities do not require paid-up share capital to be deposited.',
      },
      {
        title: 'Remote-friendly',
        desc: 'Most of the process can be completed without attending in person.',
      },
      {
        title: 'Creative activity range',
        desc: 'Media, broadcasting, publishing, events, design and consultancy categories.',
      },
      {
        title: 'Competitive pricing',
        desc: 'Entry-level licence costs with flexible visa options.',
      },
    ],
    licenceTypes: [
      {
        name: 'Media licence',
        desc: 'Broadcasting, publishing, production and content activities.',
      },
      { name: 'Consultancy licence', desc: 'Advisory and professional services.' },
      {
        name: 'Events & education',
        desc: 'Event management, training and education activities.',
      },
    ],
    officeOptions: ['Flexi-desk', 'Shared workspace', 'Private office'],
    idealFor: [
      'Media professionals and production companies',
      'Consultants serving international clients',
      'Event and training businesses',
      'Founders wanting the simplest possible remote setup',
    ],
    faqs: [
      {
        q: 'Do I need to travel to Fujairah?',
        a: 'Generally no for the licence itself. If you are taking a residence visa you will need to attend a medical test and Emirates ID biometrics in the UAE.',
      },
      {
        q: 'Is it suitable for trading goods?',
        a: 'It is oriented towards media and services. For physical goods, a trading-focused zone such as RAKEZ, SAIF or JAFZA is a better fit.',
      },
      {
        q: 'Can I sponsor my family?',
        a: 'Yes, once you hold a residence visa and meet the sponsorship criteria. We handle family visa applications.',
      },
      {
        q: 'How does it compare to SHAMS?',
        a: 'Both target media and creative work at low cost. SHAMS has a larger community and Sharjah location; Fujairah is often marginally simpler for fully remote founders.',
      },
    ],
    related: ['shams', 'uaq-ftz', 'ajman-free-zone', 'spc-free-zone'],
    services: ['company-registration', 'visa-services', 'sponsorship-services'],
    metaTitle: 'Fujairah Creative City Free Zone Setup | Smartgic Visa',
    metaDescription:
      'Set up in Fujairah Creative City — media, consultancy and events licences with no paid-up capital requirement and a largely remote application process.',
    keywords: [
      'Fujairah Creative City',
      'Fujairah free zone',
      'UAE media licence',
      'remote UAE company setup',
      'Creative City licence',
    ],
  },

  /* ───────────────────────── ABU DHABI ───────────────────────── */
  {
    slug: 'adgm',
    name: 'ADGM — Abu Dhabi Global Market',
    abbr: 'ADGM',
    emirate: 'Abu Dhabi',
    category: 'Free Zone',
    tagline: 'Abu Dhabi’s common-law financial centre on Al Maryah Island',
    standout: 'Common-law jurisdiction regulated by the FSRA, with a widely used foundations regime.',
    costTier: 'Premium',
    bestFor: ['Funds', 'Family offices', 'Fintech', 'Foundations', 'Holding'],
    sectors: [
      'financial services',
      'funds',
      'asset management',
      'fintech',
      'foundation',
      'spv',
      'family office',
    ],
    intro: [
      'ADGM is Abu Dhabi’s international financial centre, operating under a common-law framework with its own courts and the Financial Services Regulatory Authority as regulator. It directly applies English common law, which is unusual and commercially significant.',
      'It has become a favoured jurisdiction for funds, family offices, foundations and special purpose vehicles. Like DIFC, it is specialised — appropriate when the legal framework is the point, and over-specified when it is not.',
    ],
    highlights: [
      {
        title: 'Direct application of English common law',
        desc: 'A legal framework that international investors and counterparties already understand.',
      },
      {
        title: 'FSRA regulation',
        desc: 'A recognised financial regulator with defined categories for fintech and asset management.',
      },
      {
        title: 'Foundations and SPVs',
        desc: 'Widely used structures for wealth planning, succession and asset holding.',
      },
      {
        title: 'Al Maryah Island location',
        desc: 'A dedicated financial district within Abu Dhabi.',
      },
    ],
    licenceTypes: [
      {
        name: 'Regulated financial activities',
        desc: 'Activities requiring FSRA authorisation, including asset management and advisory.',
      },
      {
        name: 'Non-regulated / professional',
        desc: 'Consultancies, law firms, corporate service providers and family offices.',
      },
      {
        name: 'Foundations & SPVs',
        desc: 'Holding and wealth-structuring vehicles under the ADGM regime.',
      },
    ],
    officeOptions: ['Co-working and business centre desks', 'Serviced offices', 'Fitted offices'],
    idealFor: [
      'Fund managers and fund structures',
      'Family offices and succession planning structures',
      'Fintech businesses seeking a defined regulatory route',
      'Holding companies and SPVs requiring common law',
    ],
    faqs: [
      {
        q: 'How does ADGM differ from DIFC?',
        a: 'Both are common-law financial centres with independent courts and regulators. ADGM applies English common law directly; DIFC has its own codified common-law-based framework. Choice usually comes down to regulator fit, emirate preference and the specific structure. We will set out the trade-offs for your case.',
      },
      {
        q: 'What is an ADGM SPV used for?',
        a: 'Special purpose vehicles are commonly used to hold shares, real estate or other assets within a group structure. The right design depends on your wider structure and needs proper advice.',
      },
      {
        q: 'Do all ADGM companies need FSRA authorisation?',
        a: 'No — only those carrying on regulated financial activities. Consultancies, holding vehicles and professional firms operate without it.',
      },
      {
        q: 'Can ADGM companies sponsor visas?',
        a: 'Yes, with allocation tied to your office arrangement and licence type.',
      },
    ],
    related: ['difc', 'kezad', 'dmcc', 'rak-icc'],
    services: ['company-registration', 'bank-account-opening', 'share-transfer'],
    metaTitle: 'ADGM Company Formation in Abu Dhabi | Smartgic Visa',
    metaDescription:
      'Set up in ADGM — Abu Dhabi Global Market. Common-law jurisdiction, FSRA regulation, foundations and SPVs, with the full formation process handled for you.',
    keywords: [
      'ADGM company formation',
      'Abu Dhabi Global Market',
      'ADGM SPV',
      'ADGM foundation',
      'FSRA licence',
    ],
  },
  {
    slug: 'kezad',
    name: 'KEZAD — Khalifa Economic Zones Abu Dhabi',
    abbr: 'KEZAD',
    emirate: 'Abu Dhabi',
    category: 'Free Zone',
    tagline: 'Abu Dhabi’s industrial and logistics ecosystem',
    standout: 'Large-scale industrial land and logistics facilities linked to Khalifa Port.',
    costTier: 'Mid-range',
    bestFor: ['Manufacturing', 'Logistics', 'Industrial', 'Energy', 'Warehousing'],
    sectors: [
      'manufacturing',
      'industrial',
      'logistics',
      'petrochemical',
      'energy',
      'warehouse',
      'polymer',
    ],
    intro: [
      'KEZAD is Abu Dhabi’s consolidated economic zones group, incorporating the industrial and logistics areas around Khalifa Port. It is built for scale: large land plots, heavy industry and integrated port and rail connectivity.',
      'It suits manufacturers, energy-sector suppliers and logistics operators whose requirements exceed what Dubai’s zones can offer at reasonable cost.',
    ],
    highlights: [
      {
        title: 'Khalifa Port connectivity',
        desc: 'Integrated access to a deep-water port with onward road and rail links.',
      },
      {
        title: 'Large-scale land',
        desc: 'Industrial plots at a scale and price Dubai cannot match.',
      },
      {
        title: 'Sector clusters',
        desc: 'Defined clusters for polymers, metals, food and general manufacturing.',
      },
      {
        title: 'Free zone and non-free-zone',
        desc: 'Both licence types available depending on your market access needs.',
      },
    ],
    licenceTypes: [
      {
        name: 'Industrial licence',
        desc: 'Manufacturing, processing and heavy industry within designated clusters.',
      },
      { name: 'Trading licence', desc: 'Import, export, distribution and warehousing.' },
      { name: 'Service licence', desc: 'Logistics and industrial support services.' },
    ],
    officeOptions: [
      'Warehouses and industrial units',
      'Land plots',
      'Office units',
      'Staff accommodation options',
    ],
    idealFor: [
      'Manufacturers requiring significant land',
      'Energy and petrochemical supply chain businesses',
      'Large-scale logistics and warehousing operators',
      'Industrial businesses serving Abu Dhabi contracts',
    ],
    faqs: [
      {
        q: 'Is KEZAD suitable for a small business?',
        a: 'It is built around industrial scale. A small service or trading business will get better value from a Dubai or northern-emirate zone.',
      },
      {
        q: 'What is the difference between KEZAD free zone and non-free-zone?',
        a: 'The free zone licence carries the usual 100% ownership and trading limitations; the non-free-zone (Abu Dhabi mainland) licence allows direct local-market trade. Your customer base determines the right one.',
      },
      {
        q: 'Does KEZAD provide staff accommodation?',
        a: 'The zone includes worker accommodation communities, which is a practical advantage for labour-intensive operations.',
      },
      {
        q: 'Can KEZAD companies sponsor visas?',
        a: 'Yes, with quotas scaling by facility size — industrial operations typically carry substantial allocations.',
      },
    ],
    related: ['adgm', 'jafza', 'dubai-south', 'rakez'],
    services: ['company-registration', 'document-clearing-services', 'sponsorship-services'],
    metaTitle: 'KEZAD Abu Dhabi Industrial Free Zone Setup | Smartgic Visa',
    metaDescription:
      'Set up in KEZAD — Khalifa Economic Zones Abu Dhabi. Industrial land, warehousing, Khalifa Port connectivity and free zone or mainland licence options.',
    keywords: [
      'KEZAD',
      'Khalifa Economic Zones Abu Dhabi',
      'Abu Dhabi industrial free zone',
      'KIZAD',
      'Khalifa Port free zone',
    ],
  },

  /* ───────────────────────── MAINLAND ───────────────────────── */
  {
    slug: 'dubai-mainland',
    name: 'Dubai Mainland (DET)',
    abbr: 'DET',
    emirate: 'Dubai',
    category: 'Mainland',
    tagline: 'Trade anywhere in the UAE with no free zone restrictions',
    standout:
      'Unrestricted UAE market access, government contract eligibility and no visa quota ceiling tied to a zone.',
    costTier: 'Mid-range',
    bestFor: ['Retail', 'Local services', 'Government contracts', 'Restaurants', 'Contracting'],
    sectors: [
      'retail',
      'restaurant',
      'construction',
      'contracting',
      'clinic',
      'salon',
      'local services',
      'government tenders',
    ],
    intro: [
      'A mainland licence is issued by the Dubai Department of Economy and Tourism and carries no restriction on where in the UAE you can trade. You can sell directly to UAE customers, open retail premises, take on government contracts and hire without a zone-imposed visa ceiling.',
      'Most commercial and professional activities now permit 100% foreign ownership, which removed the historical reason founders defaulted to free zones. The main requirement is a physical tenancy registered through Ejari.',
    ],
    highlights: [
      {
        title: 'Unrestricted UAE trade',
        desc: 'Sell directly to customers anywhere in the UAE with no distributor or agent requirement.',
      },
      {
        title: '100% foreign ownership',
        desc: 'Available for most commercial and professional activities — we confirm it for yours.',
      },
      {
        title: 'Government contract eligibility',
        desc: 'Mainland companies can bid for public-sector tenders.',
      },
      {
        title: 'No zone visa ceiling',
        desc: 'Visa eligibility is driven by your office space rather than a fixed free zone package.',
      },
    ],
    licenceTypes: [
      {
        name: 'Commercial licence',
        desc: 'Trading, retail, import, export and general commercial activity.',
      },
      {
        name: 'Professional licence',
        desc: 'Consultancy, services and skilled professional activities.',
      },
      {
        name: 'Industrial licence',
        desc: 'Manufacturing and industrial activity with facility requirements.',
      },
      {
        name: 'Tourism licence',
        desc: 'Travel, tourism and hospitality activities, subject to additional approvals.',
      },
    ],
    officeOptions: [
      'Registered office with Ejari tenancy',
      'Retail premises',
      'Warehouse',
      'Business centre office',
    ],
    idealFor: [
      'Retail, restaurants and customer-facing businesses',
      'Contractors and service providers working on UAE projects',
      'Companies bidding for government tenders',
      'Businesses whose customers are UAE-based',
    ],
    faqs: [
      {
        q: 'Do I still need a local sponsor?',
        a: 'For most commercial and professional activities, no — 100% foreign ownership is permitted. A small set of strategic activities still requires an Emirati partner or a Local Service Agent. We confirm the position for your exact activity before you proceed.',
      },
      {
        q: 'Do I need a physical office?',
        a: 'Yes. Mainland licences require a registered tenancy through Ejari. The space required scales with your visa count. We arrange compliant options at the smaller end.',
      },
      {
        q: 'Is mainland more expensive than a free zone?',
        a: 'Usually yes once tenancy is included — but if your customers are in the UAE, a free zone licence that cannot serve them is not cheaper, it is unusable. The decision should follow your sales model.',
      },
      {
        q: 'How many visas can a mainland company sponsor?',
        a: 'There is no fixed free zone cap. Eligibility is driven by your office size and activity, which means it scales with the business.',
      },
    ],
    related: ['ifza', 'meydan', 'dmcc', 'dubai-south'],
    services: ['company-registration', 'corporate-pro-services', 'sponsorship-services'],
    metaTitle: 'Dubai Mainland Company Formation (DET Licence) | Smartgic Visa',
    metaDescription:
      'Form a Dubai mainland company with a DET licence — 100% ownership on most activities, unrestricted UAE trade, Ejari, visas and PRO support handled end to end.',
    keywords: [
      'Dubai mainland company',
      'DET licence',
      'mainland business setup Dubai',
      'LLC formation Dubai',
      'Dubai trade licence',
    ],
  },

  /* ───────────────────────── OFFSHORE ───────────────────────── */
  {
    slug: 'rak-icc',
    name: 'RAK ICC — RAK International Corporate Centre',
    abbr: 'RAK ICC',
    emirate: 'Ras Al Khaimah',
    category: 'Offshore',
    tagline: 'UAE offshore registry for holding and asset protection',
    standout:
      'The UAE’s principal offshore registry for holding structures — no residence visas, no local office.',
    costTier: 'Budget–Mid',
    bestFor: ['Holding', 'Asset protection', 'IP holding', 'SPVs', 'Succession'],
    sectors: [
      'holding company',
      'asset holding',
      'intellectual property',
      'spv',
      'investment holding',
    ],
    intro: [
      'RAK ICC is the UAE’s principal offshore corporate registry. Offshore companies are used to hold assets, shares or intellectual property — not to trade within the UAE. They do not carry residence visas and do not require a physical office.',
      'It is important to be clear about what this is: a holding vehicle, not an operating licence. If you need to invoice UAE clients or sponsor a visa, you need a free zone or mainland licence instead — often alongside the offshore entity.',
    ],
    highlights: [
      {
        title: 'Holding and asset protection',
        desc: 'Designed to hold shares, property interests and intellectual property.',
      },
      {
        title: 'No physical office needed',
        desc: 'Operates through a registered agent with no requirement to lease space.',
      },
      {
        title: 'Confidential ownership records',
        desc: 'Shareholder details are not placed on a public register.',
      },
      {
        title: 'Straightforward maintenance',
        desc: 'Annual renewal through the registered agent with limited ongoing obligations.',
      },
    ],
    licenceTypes: [
      {
        name: 'International Business Company',
        desc: 'The standard offshore vehicle for holding and investment purposes.',
      },
      {
        name: 'Holding structures',
        desc: 'Entities formed to hold shares in operating companies or other assets.',
      },
      {
        name: 'Special purpose vehicles',
        desc: 'Single-purpose entities used within a wider group structure.',
      },
    ],
    officeOptions: ['Registered agent address only — no leasable office'],
    idealFor: [
      'Holding shares in operating companies',
      'Holding intellectual property within a group',
      'Asset protection and succession structures',
      'Investors who do not need UAE residency',
    ],
    faqs: [
      {
        q: 'Can a RAK ICC company get me a residence visa?',
        a: 'No. Offshore companies do not carry visa eligibility. If residency is a goal, you need a free zone or mainland licence — we often set up both, with the offshore entity holding the shares.',
      },
      {
        q: 'Can a RAK ICC company trade in the UAE?',
        a: 'No. It cannot carry on business within the UAE. It is a holding and investment vehicle.',
      },
      {
        q: 'Can it open a UAE bank account?',
        a: 'Offshore entities can hold UAE bank accounts, though banks apply closer scrutiny and requirements vary. We prepare the file and set realistic expectations.',
      },
      {
        q: 'How is this different from JAFZA Offshore?',
        a: 'Both are UAE offshore registries. JAFZA Offshore is notable for being able to hold Dubai freehold property in designated areas. The right choice depends on what the entity will hold.',
      },
    ],
    related: ['jafza-offshore', 'adgm', 'rakez', 'difc'],
    services: ['company-registration', 'bank-account-opening', 'share-transfer'],
    metaTitle: 'RAK ICC Offshore Company Formation UAE | Smartgic Visa',
    metaDescription:
      'Form a RAK ICC offshore company for holding, asset protection and IP structures. What an offshore entity can and cannot do, and how it pairs with a UAE licence.',
    keywords: [
      'RAK ICC',
      'UAE offshore company',
      'RAK offshore formation',
      'offshore holding company UAE',
      'RAK ICC registered agent',
    ],
  },
  {
    slug: 'jafza-offshore',
    name: 'JAFZA Offshore',
    abbr: 'JAFZA-O',
    emirate: 'Dubai',
    category: 'Offshore',
    tagline: 'Dubai offshore structures that can hold local freehold property',
    standout: 'The offshore route able to hold Dubai freehold property in designated areas.',
    costTier: 'Mid-range',
    bestFor: ['Property holding', 'Holding', 'Asset protection', 'SPVs'],
    sectors: ['property holding', 'real estate', 'holding company', 'investment', 'spv'],
    intro: [
      'JAFZA Offshore is the offshore registry operated alongside the Jebel Ali Free Zone. Its distinguishing feature is that JAFZA Offshore companies can hold Dubai freehold property in designated areas, which most offshore vehicles cannot.',
      'Like all offshore entities it does not carry residence visas and cannot trade within the UAE. It is used for property holding and group structuring.',
    ],
    highlights: [
      {
        title: 'Dubai property holding',
        desc: 'Able to hold freehold property in designated Dubai areas, subject to developer and authority approval.',
      },
      {
        title: 'Dubai jurisdiction',
        desc: 'A Dubai-registered offshore vehicle, which some counterparties prefer.',
      },
      {
        title: 'No office requirement',
        desc: 'Operates through a registered agent without leased premises.',
      },
      {
        title: 'Group structuring',
        desc: 'Commonly used to hold shares in operating companies within a group.',
      },
    ],
    licenceTypes: [
      {
        name: 'Offshore company',
        desc: 'The standard JAFZA Offshore vehicle for holding and investment.',
      },
      {
        name: 'Property holding structure',
        desc: 'Entities formed specifically to hold Dubai freehold property.',
      },
      {
        name: 'Holding / SPV',
        desc: 'Share-holding and single-purpose vehicles within group structures.',
      },
    ],
    officeOptions: ['Registered agent address only — no leasable office'],
    idealFor: [
      'Holding Dubai freehold property in a corporate structure',
      'Group holding structures with a Dubai nexus',
      'Asset protection and succession planning',
      'Investors who do not require UAE residency',
    ],
    faqs: [
      {
        q: 'Can JAFZA Offshore really own Dubai property?',
        a: 'It can hold freehold property in designated areas, subject to developer and Land Department approval. The specifics matter — we confirm eligibility for the exact property before you structure around it.',
      },
      {
        q: 'Does it come with a visa?',
        a: 'No. Offshore companies carry no visa eligibility. Residency requires a free zone or mainland licence.',
      },
      {
        q: 'Is a physical office required?',
        a: 'No. The company operates through a registered agent.',
      },
      {
        q: 'RAK ICC or JAFZA Offshore?',
        a: 'RAK ICC is generally cheaper and the default for pure holding. JAFZA Offshore is the route where Dubai property holding is the objective. We will recommend based on what the entity actually needs to do.',
      },
    ],
    related: ['rak-icc', 'jafza', 'adgm', 'dubai-mainland'],
    services: ['company-registration', 'bank-account-opening', 'share-transfer'],
    metaTitle: 'JAFZA Offshore Company Formation Dubai | Smartgic Visa',
    metaDescription:
      'Form a JAFZA Offshore company in Dubai — the offshore route able to hold Dubai freehold property, plus holding and SPV structures. Full formation support.',
    keywords: [
      'JAFZA Offshore',
      'Dubai offshore company',
      'offshore property holding Dubai',
      'JAFZA offshore formation',
      'UAE offshore structure',
    ],
  },
];

/* ───────────────────────────── Lookups ───────────────────────────── */

export const jurisdictionsBySlug: Record<string, Jurisdiction> = Object.fromEntries(
  jurisdictions.map((j) => [j.slug, j]),
);

export function getJurisdiction(slug: string): Jurisdiction | undefined {
  return jurisdictionsBySlug[slug];
}

export const jurisdictionSlugs = jurisdictions.map((j) => j.slug);

export const emirates: Emirate[] = [
  'Dubai',
  'Abu Dhabi',
  'Sharjah',
  'Ras Al Khaimah',
  'Ajman',
  'Fujairah',
  'Umm Al Quwain',
];

export const zoneCategories: ZoneCategory[] = ['Free Zone', 'Mainland', 'Offshore'];

export const costTiers: CostTier[] = ['Budget', 'Budget–Mid', 'Mid-range', 'Premium'];

/** Ordering weight so the comparison table can sort by price sensibly. */
export const costTierRank: Record<CostTier, number> = {
  Budget: 0,
  'Budget–Mid': 1,
  'Mid-range': 2,
  Premium: 3,
};

/** Lightweight shape for cards, tables and nav menus (no heavy prose). */
export type JurisdictionSummary = {
  slug: string;
  name: string;
  abbr: string;
  emirate: Emirate;
  category: ZoneCategory;
  tagline: string;
  standout: string;
  costTier: CostTier;
  bestFor: string[];
  /** Everything a client-side search should match against. */
  searchIndex: string;
  /**
   * Matching indexes kept separate from `searchIndex` so scoring can weight an
   * explicit "best for" match above an incidental sector mention. `searchIndex`
   * includes the name and emirate, which makes it unsafe for keyword scoring —
   * "Dubai" contains "ai", for example.
   */
  bestForIndex: string;
  sectorIndex: string;
};

export const jurisdictionSummaries: JurisdictionSummary[] = jurisdictions.map((j) => ({
  slug: j.slug,
  name: j.name,
  abbr: j.abbr,
  emirate: j.emirate,
  category: j.category,
  tagline: j.tagline,
  standout: j.standout,
  costTier: j.costTier,
  bestFor: j.bestFor,
  searchIndex: [j.name, j.abbr, j.emirate, j.category, j.tagline, ...j.bestFor, ...j.sectors]
    .join(' ')
    .toLowerCase(),
  bestForIndex: j.bestFor.join(' ').toLowerCase(),
  sectorIndex: [...j.sectors, j.tagline].join(' ').toLowerCase(),
}));

/**
 * Whole-word keyword test.
 *
 * Plain substring matching produces false positives that quietly corrupt
 * scoring — "ai" matches "Dubai", "spc" matches nothing useful inside longer
 * words, and so on.
 */
export function matchesKeyword(haystack: string, keyword: string): boolean {
  const escaped = keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  return new RegExp(`(^|[^a-z0-9])${escaped}([^a-z0-9]|$)`).test(haystack);
}

/** Compact list used by the header mega-menu (most-requested jurisdictions first). */
export const featuredZoneSlugs = [
  'ifza',
  'dmcc',
  'meydan',
  'dubai-mainland',
  'jafza',
  'difc',
  'shams',
  'rakez',
  'adgm',
  'rak-icc',
];
