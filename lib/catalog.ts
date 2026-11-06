import {
  Building2,
  Briefcase,
  Landmark,
  Plane,
  Receipt,
  Calculator,
  ClipboardCheck,
  Crown,
  ShieldCheck,
  Percent,
  Sparkles,
  Tag,
  Globe2,
  type LucideIcon,
} from 'lucide-react';

/**
 * Service catalogue structure: seven categories, each with a hub page at
 * /services/<category-slug> and an ordered list of services. Services
 * themselves live in lib/services.ts (and lib/services/*.ts); a category only
 * references them by slug, so reordering the menu never touches content.
 *
 * Scope rules (confirmed with the owner, 2026-11-06): international / overseas
 * company formation is not offered and must not be added. Every other line here
 * is a service Smartgic delivers in-house or through a partner it presents as
 * its own. Audit opinions are signed by UAE-registered auditors.
 */

export type CategorySlug =
  | 'business-setup'
  | 'corporate-services'
  | 'licensing-government'
  | 'visa-immigration'
  | 'tax-services'
  | 'compliance-risk'
  | 'accounting-bookkeeping'
  | 'audit-assurance';

/** A non-service page listed inside a category (tools, the Golden Visa page). */
export type CategoryPageLink = {
  label: string;
  href: string;
  blurb: string;
  icon: LucideIcon;
};

export type Category = {
  slug: CategorySlug;
  label: string;
  /** Shorter label for tight spaces (mobile menu, chips). */
  short: string;
  icon: LucideIcon;
  /** One line used in the mega menu and on category cards. */
  tagline: string;
  title: string;
  heroSubtitle: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  intro: { heading: string; body: string[] };
  /** Three or four framing points shown on the hub page. */
  pillars: { title: string; desc: string }[];
  faqs: { q: string; a: string }[];
  /** Ordered service slugs. */
  services: string[];
  /** Related pages shown alongside the services (tools, Golden Visa). */
  links?: CategoryPageLink[];
};

export const categories: Category[] = [
  /* ───────────────────────────── Business setup ───────────────────────────── */
  {
    slug: 'business-setup',
    label: 'Business Setup',
    short: 'Business Setup',
    icon: Building2,
    tagline: 'Mainland, free zone and offshore companies, structured right from day one.',
    title: 'Business setup in Dubai and across the UAE',
    heroSubtitle:
      'We match your activity, ownership and visa needs to the right jurisdiction, then run the trade name, approvals, licence and company documents through to a business that is ready to trade.',
    metaTitle: 'Business Setup in Dubai & the UAE | Mainland, Free Zone & Offshore | Smartgic Visa',
    metaDescription:
      'Business setup in Dubai and the UAE: mainland, free zone and offshore company formation, professional licences, packages and office space — handled end to end by a DET-licensed consultancy.',
    keywords: [
      'business setup Dubai',
      'company formation UAE',
      'mainland company formation Dubai',
      'free zone company setup',
      'offshore company UAE',
    ],
    intro: {
      heading: 'Three routes into the UAE — and the decision shapes everything after',
      body: [
        'Where your company is licensed decides who you can sell to, how many residence visas it can sponsor, what office it needs and how its income is treated for tax. Mainland companies trade anywhere in the UAE. Free zone companies are fully foreign-owned and quick to form, but sell mainly within their zone and abroad. Offshore companies hold assets and contracts, and do not trade inside the UAE at all.',
        'We start from your activity and your plans rather than a package. Once the route is clear we run the whole formation — name, approvals, constitutional documents, licence, establishment card and visa allocation — and stay on the file for every renewal after it.',
      ],
    },
    pillars: [
      {
        title: 'Mainland',
        desc: 'Licensed by the Department of Economy and Tourism. Trade with any customer in the UAE, bid for government work and size your visa quota to your office.',
      },
      {
        title: 'Free zone',
        desc: 'Full foreign ownership, packaged licences and flexi-desk options. Best for international trade, services and businesses that sell mostly outside the UAE.',
      },
      {
        title: 'Offshore',
        desc: 'A holding and asset vehicle for international structures. It cannot trade in the UAE or sponsor visas, but it can own shares, property and intellectual property.',
      },
      {
        title: 'Professional licence',
        desc: 'For consultants and service professionals on the mainland, with full ownership and a Local Service Agent who takes no share of the business.',
      },
    ],
    faqs: [
      {
        q: 'Is a free zone company cheaper than a mainland company?',
        a: 'Often at entry level, because free zone packages bundle the licence with a flexi-desk. But the comparison only holds once activity, visa numbers and office needs are fixed — a mainland company that saves you a second licence later can be the cheaper choice. We compare both on the same assumptions before you decide.',
      },
      {
        q: 'Can I move my company from a free zone to the mainland later?',
        a: 'A company generally cannot be converted from one jurisdiction to another. The usual routes are opening a mainland branch of the free zone company, or forming a new mainland entity. Planning for this at the start avoids paying for two setups.',
      },
      {
        q: 'How many residence visas will my company be able to sponsor?',
        a: 'It depends on the jurisdiction and the workspace attached to the licence. Free zone packages state their visa allocation; on the mainland the quota follows the size of the office. We size the setup around the number of visas you actually need.',
      },
      {
        q: 'Do I need to be in the UAE to set up a company?',
        a: 'Most of the formation can be done remotely. You will normally need to be in the UAE for the residence visa medical test, Emirates ID biometrics and, for most banks, the account-opening meeting — we schedule these together so the visit is short.',
      },
    ],
    services: [
      'company-registration',
      'mainland-company-formation',
      'free-zone-company-formation',
      'offshore-company-formation',
      'professional-services',
      'co-working-space',
    ],
    links: [
      { label: 'Setup packages & pricing', href: '/pricing', blurb: 'Starting prices for our core packages', icon: Tag },
      { label: 'Setup cost estimator', href: '/cost-estimator', blurb: 'Match your plan to a jurisdiction', icon: Calculator },
      { label: 'Compare jurisdictions', href: '/free-zones', blurb: 'Every free zone, mainland and offshore option', icon: Globe2 },
    ],
  },

  /* ─────────────────────────── Corporate services ─────────────────────────── */
  {
    slug: 'corporate-services',
    label: 'Corporate Services',
    short: 'Corporate',
    icon: Briefcase,
    tagline: 'Holding structures, foundations, ownership changes, protection and closure — done correctly at every authority.',
    title: 'Corporate services for UAE companies',
    heroSubtitle:
      'Holding companies, foundations and family structures, MOA amendments, share transfers, trademarks, sponsorship, banking and liquidation — the legal work a company needs across its life, prepared, notarised and registered for you.',
    metaTitle: 'Corporate Services in Dubai | MOA, Share Transfer, Holding & Liquidation | Smartgic Visa',
    metaDescription:
      'Corporate services in Dubai and the UAE: holding company and SPV setup, MOA amendments, share transfers, local sponsorship, trademark registration, bank account opening and company liquidation.',
    keywords: [
      'corporate services Dubai',
      'MOA amendment Dubai',
      'share transfer UAE',
      'holding company UAE',
      'company liquidation Dubai',
    ],
    intro: {
      heading: 'A company changes shape over its life. The paperwork has to keep up.',
      body: [
        'Partners join and leave, capital moves, activities expand and some companies eventually close. Each of these changes has to be agreed in the right form, notarised where required and registered with the licensing authority — and until it is, the company’s official record says something different from reality.',
        'Our corporate team prepares the resolutions and amended documents, coordinates the notary, files with the Department of Economy and Tourism or the relevant free zone, and then updates everything downstream: licence, establishment card, visas and bank mandates.',
      ],
    },
    pillars: [
      {
        title: 'Structure',
        desc: 'Holding companies, SPVs, foundations and family trusts that separate ownership from operations and keep assets ring-fenced.',
      },
      {
        title: 'Change',
        desc: 'Share transfers and MOA amendments drafted, notarised and registered, with the licence and visas aligned afterwards.',
      },
      {
        title: 'Protection',
        desc: 'Trademarks registered with the Ministry of Economy and sponsorship arrangements documented so control stays with you.',
      },
      {
        title: 'Closure',
        desc: 'Liquidation and deregistration with every clearance obtained, so nothing is left open in your name.',
      },
    ],
    faqs: [
      {
        q: 'What is the difference between an MOA amendment and a licence amendment?',
        a: 'The Memorandum of Association is the company’s constitution — shareholders, capital, management and profit split. Changing those is an MOA amendment. A licence amendment changes what the trade licence shows, such as activities, trade name or address. Many changes need both, and we file them together.',
      },
      {
        q: 'Do all partners need to be in the UAE to sign?',
        a: 'Not necessarily. Absent partners can usually sign through a power of attorney notarised and attested in their country, or through remote notarisation where the authority accepts it. We confirm the route for each signatory before anything is drafted.',
      },
      {
        q: 'What happens to visas when a shareholder leaves?',
        a: 'A departing shareholder’s investor or partner visa must be cancelled or transferred, and an incoming shareholder may need a new one. We plan the visa steps into the transfer so nobody is left without valid status.',
      },
      {
        q: 'Can you close a company that has outstanding fines?',
        a: 'Yes. Fines and liabilities have to be settled before final deregistration, so we identify them early through the clearance process and tell you what must be paid and to whom before the closure is filed.',
      },
    ],
    services: [
      'holding-company-setup',
      'foundation-setup',
      'family-trust-setup',
      'moa-amendments',
      'share-transfer',
      'sponsorship-services',
      'ip-trademark',
      'bank-account-opening',
      'liquidation-deregistration',
    ],
  },

  /* ────────────────────────── Licensing & government ───────────────────────── */
  {
    slug: 'licensing-government',
    label: 'Licensing & Government',
    short: 'Licensing & PRO',
    icon: Landmark,
    tagline: 'Trade licences, renewals, amendments, cancellations and government paperwork, handled by our PRO team.',
    title: 'Licensing and government services',
    heroSubtitle:
      'Our PRO team keeps your trade licence, approvals and government documents current — renewals before they lapse, amendments filed correctly and paperwork cleared at every department.',
    metaTitle: 'Trade Licence & PRO Services in Dubai | Renewals, Amendments & Approvals | Smartgic Visa',
    metaDescription:
      'Licensing and government services in Dubai: trade licence renewal and amendments, PRO services, government approvals, document clearing and attestation — handled by a DET-licensed consultancy.',
    keywords: [
      'PRO services Dubai',
      'trade licence renewal Dubai',
      'trade licence amendment Dubai',
      'document clearing Dubai',
      'government approvals UAE',
    ],
    intro: {
      heading: 'Staying licensed is a year-round job',
      body: [
        'A UAE company answers to several departments at once: its licensing authority, immigration, the labour ministry, and often a municipality or a sector regulator. Each has its own portal, its own forms and its own renewal calendar, and a lapse at any one of them can block the others.',
        'We act as your public relations officer: tracking expiry dates, preparing and typing applications, collecting approvals and clearing documents in person where a portal is not enough — so your licence, establishment card and permits stay in step.',
      ],
    },
    pillars: [
      {
        title: 'Renewals',
        desc: 'Licence, tenancy and establishment card renewals prepared ahead of expiry so the company never trades on a lapsed licence.',
      },
      {
        title: 'Amendments',
        desc: 'Trade name, activity, address and legal-form changes filed with the authority and reflected on every downstream record.',
      },
      {
        title: 'Approvals',
        desc: 'Initial and external approvals from the authorities that regulate your activity, gathered and tracked for you.',
      },
      {
        title: 'Documents',
        desc: 'Attestation, legal translation, typing and clearing at government counters, so papers are accepted the first time.',
      },
    ],
    faqs: [
      {
        q: 'What does a PRO actually do?',
        a: 'A public relations officer handles a company’s dealings with government: submitting applications, collecting approvals, renewing licences and permits, and clearing documents. Most small companies do not need one full time, which is why an outsourced PRO is usually the efficient option.',
      },
      {
        q: 'When should I start my licence renewal?',
        a: 'About a month before expiry. That leaves time to renew the tenancy or flexi-desk the licence depends on and to settle anything outstanding, so the new licence is issued before the old one lapses.',
      },
      {
        q: 'Can you handle approvals for regulated activities?',
        a: 'Yes. Where an activity needs approval from a sector regulator, we identify the approving body, prepare the submission and track it alongside the licence application. Approval itself always rests with the regulator.',
      },
    ],
    services: [
      'corporate-pro-services',
      'trade-licence',
      'trade-license-renewals',
      'licence-amendments',
      'licence-cancellation',
      'document-clearing-services',
    ],
  },

  /* ──────────────────────────── Visa & immigration ─────────────────────────── */
  {
    slug: 'visa-immigration',
    label: 'Visa & Immigration',
    short: 'Visas',
    icon: Plane,
    tagline: 'Investor, employment, family and Golden Visas — from entry permit to Emirates ID.',
    title: 'UAE visa and immigration services',
    heroSubtitle:
      'Residence visas for investors, partners, employees and families, the 10-year Golden Visa, and the renewals and cancellations in between — prepared, submitted and followed through for you.',
    metaTitle: 'UAE Visa Services | Investor, Employment, Family & Golden Visa | Smartgic Visa',
    metaDescription:
      'UAE visa services: investor and partner visas, employment visas, family sponsorship, Golden Visa, visa renewal and cancellation — entry permit, medical, Emirates ID and stamping handled end to end.',
    keywords: [
      'UAE residence visa',
      'investor visa Dubai',
      'employment visa UAE',
      'family visa Dubai',
      'visa renewal UAE',
    ],
    intro: {
      heading: 'One residence system, several routes into it',
      body: [
        'Most UAE residence visas follow the same chain — entry permit, change of status, medical fitness test, Emirates ID biometrics and the residence visa itself — but the route, the sponsor and the documents differ for investors, employees and family members. Golden Visa holders follow a separate, longer-term route.',
        'We work out which route applies, prepare and submit each stage, book the medical and biometrics, and track the file until the Emirates ID is in your hand. Eligibility and approval always rest with the immigration authorities; our job is to make sure the application is complete and correct.',
      ],
    },
    pillars: [
      {
        title: 'Investors & partners',
        desc: 'Residence through your own company, with the visa sponsored by the business you own or co-own.',
      },
      {
        title: 'Employees',
        desc: 'Work permits and residence visas for your team, through the labour ministry or your free zone authority.',
      },
      {
        title: 'Families',
        desc: 'Sponsorship of a spouse, children and, in some cases, parents once you hold UAE residence.',
      },
      {
        title: 'Long-term residency',
        desc: 'The 10-year Golden Visa for qualifying investors, entrepreneurs, professionals and talents.',
      },
    ],
    faqs: [
      {
        q: 'How long does a UAE residence visa take?',
        a: 'Once documents are complete, the chain from entry permit to Emirates ID typically takes a couple of weeks, depending on the authority, appointment availability and the medical result. We give you a working timeline when we review your file.',
      },
      {
        q: 'Can I sponsor my family on an investor visa?',
        a: 'Generally yes, once your own residence is issued and you meet the sponsorship requirements the authorities set at the time. We check the current requirements against your situation before you apply.',
      },
      {
        q: 'What happens to my visa if I close my company?',
        a: 'Visas sponsored by the company have to be cancelled as part of closing it. If you plan to stay in the UAE, we can line up a new sponsor or route before the cancellation so you are not left without status.',
      },
    ],
    services: [
      'visa-services',
      'investor-visa',
      'employment-visa',
      'family-visa',
      'visa-renewal',
      'visa-cancellation',
    ],
    links: [
      { label: 'UAE Golden Visa', href: '/golden-visa', blurb: '10-year renewable residency', icon: Crown },
      { label: 'Golden Visa eligibility check', href: '/golden-visa/eligibility', blurb: 'See which category fits your profile', icon: Sparkles },
    ],
  },

  /* ─────────────────────────────── Tax services ────────────────────────────── */
  {
    slug: 'tax-services',
    label: 'Tax Services',
    short: 'Tax',
    icon: Receipt,
    tagline: 'Corporate tax, VAT and indirect taxes — registered, filed on time and backed by clean working papers.',
    title: 'Tax services for UAE businesses',
    heroSubtitle:
      'Corporate tax and VAT from registration to annual return, plus transfer pricing, tax residency certificates, e-invoicing, customs and excise — prepared accurately, filed on time and documented for the Federal Tax Authority.',
    metaTitle: 'Tax Services in Dubai | Corporate Tax, VAT, Transfer Pricing & Excise | Smartgic Visa',
    metaDescription:
      'Tax services in the UAE: corporate tax registration, returns and advisory, VAT registration, filing and refunds, transfer pricing, tax residency certificates, e-invoicing, customs and excise tax.',
    keywords: [
      'tax services Dubai',
      'corporate tax UAE',
      'VAT registration Dubai',
      'transfer pricing UAE',
      'tax residency certificate UAE',
    ],
    intro: {
      heading: 'Two main taxes, one authority — and deadlines that do not move',
      body: [
        'Every UAE business now sits inside the corporate tax regime, and many also carry VAT obligations. Both are administered by the Federal Tax Authority through the EmaraTax portal, both have fixed registration and filing deadlines, and both penalise lateness whether or not any tax turns out to be due.',
        'Around those two sit the specialist obligations: transfer pricing rules for transactions with related parties, tax residency certificates for treaty access, the move to mandatory e-invoicing, and customs and excise for businesses that import or deal in excise goods. We handle the registrations, returns and documentation, and keep the working papers behind every figure we file.',
      ],
    },
    pillars: [
      {
        title: 'Corporate tax',
        desc: 'Registration, the right reliefs and elections, an annual return within nine months of year end, and clean deregistration when a business closes.',
      },
      {
        title: 'VAT',
        desc: 'Registration at the right time, accurate returns every period, health checks, refunds of excess input tax and deregistration when it is due.',
      },
      {
        title: 'Transfer pricing & residency',
        desc: 'Arm’s-length documentation for related-party dealings, and tax residency certificates for treaty purposes.',
      },
      {
        title: 'Indirect taxes',
        desc: 'E-invoicing readiness, customs registration and advisory, and excise tax reviews for the goods it applies to.',
      },
    ],
    faqs: [
      {
        q: 'Do I need to register for corporate tax if my company makes no profit?',
        a: 'Yes. Registration is required for taxable persons regardless of profit, and a return is still due each year. Being registered and filing on time is what keeps you clear of penalties, even when the tax payable is nil.',
      },
      {
        q: 'Do free zone companies pay corporate tax?',
        a: 'Free zone companies must register and file like any other business. A free zone company that meets the conditions to be a Qualifying Free Zone Person can apply 0% to its qualifying income, with 9% on the rest. Whether you qualify depends on your activities, customers and substance, so it should be assessed rather than assumed.',
      },
      {
        q: 'Is VAT registration the same as corporate tax registration?',
        a: 'No. They are separate registrations under separate laws, each with its own number and its own returns. Corporate tax applies to almost every business; VAT registration depends on the value of your taxable supplies and imports.',
      },
      {
        q: 'Can you take over filings that someone else started?',
        a: 'Yes. We review what has already been filed, flag anything that needs correcting through a voluntary disclosure, and take over the calendar from the next deadline.',
      },
    ],
    services: [
      'corporate-tax-registration',
      'corporate-tax-filing',
      'corporate-tax-advisory',
      'corporate-tax-deregistration',
      'transfer-pricing',
      'tax-residency-certificate',
      'vat-registration',
      'vat-return-filing',
      'vat-compliance',
      'vat-refund',
      'vat-deregistration',
      'e-invoicing',
      'customs-services',
      'excise-tax',
    ],
    links: [
      { label: 'Corporate tax calculator', href: '/corporate-tax-calculator', blurb: 'Estimate tax at the 0% and 9% rates', icon: Percent },
      { label: 'VAT calculator', href: '/vat-calculator', blurb: 'Add or remove 5% VAT', icon: Calculator },
    ],
  },

  /* ───────────────────────────── Compliance & risk ─────────────────────────── */
  {
    slug: 'compliance-risk',
    label: 'Compliance & Risk',
    short: 'Compliance',
    icon: ShieldCheck,
    tagline: 'AML programmes, goAML registration, UBO registers and risk reviews that stand up to inspection.',
    title: 'Regulatory compliance and risk advisory',
    heroSubtitle:
      'Anti-money-laundering programmes, goAML registration, beneficial-ownership filings and business risk advisory — built around what your company actually does, and documented for the regulator.',
    metaTitle: 'AML Compliance, goAML & UBO Filing in Dubai | Risk Advisory | Smartgic Visa',
    metaDescription:
      'Compliance services in the UAE: AML/CFT compliance programmes, goAML registration, UBO register filing and business risk advisory for Dubai companies and designated businesses.',
    keywords: [
      'AML compliance Dubai',
      'goAML registration UAE',
      'UBO filing UAE',
      'risk advisory Dubai',
      'AML consultants UAE',
    ],
    intro: {
      heading: 'Regulators now test whether compliance works, not just whether it exists',
      body: [
        'Every UAE company has to keep accurate registers of its beneficial owners, partners and nominee directors and file them with its licensing authority. Businesses in sectors exposed to money-laundering risk carry far more: registration on the goAML reporting platform, a documented risk assessment, customer due diligence, a named compliance officer and the ability to report suspicious activity.',
        'Supervisors inspect these programmes and expect to see them operating — screening records, training logs, risk ratings and decisions on file. We design the programme around your real activity, register you where required, prepare the policies and registers, and help you keep the evidence that it runs day to day.',
      ],
    },
    pillars: [
      {
        title: 'AML programme',
        desc: 'Enterprise-wide risk assessment, policies and procedures, due diligence and screening set up for your sector.',
      },
      {
        title: 'goAML',
        desc: 'Registration of the business and its compliance officer on the UAE’s financial intelligence reporting platform.',
      },
      {
        title: 'Beneficial ownership',
        desc: 'UBO, partner and nominee registers prepared, filed with your authority and updated when ownership changes.',
      },
      {
        title: 'Risk advisory',
        desc: 'Independent reviews of the risks and controls in your business, with practical fixes in order of priority.',
      },
    ],
    faqs: [
      {
        q: 'Which businesses need an AML compliance programme?',
        a: 'Financial institutions and designated non-financial businesses and professions — such as real estate brokers, dealers in precious metals and stones, auditors and accountants, and corporate service providers — must comply with the UAE’s AML rules. We assess whether your activity is in scope before recommending anything.',
      },
      {
        q: 'What is goAML?',
        a: 'goAML is the reporting platform of the UAE Financial Intelligence Unit. Businesses that fall under the AML rules register on it and use it to submit suspicious transaction reports and other required reports.',
      },
      {
        q: 'Who counts as a beneficial owner?',
        a: 'Broadly, the natural person who ultimately owns or controls the company — typically through 25% or more of its shares or voting rights, or through control by other means. Where nobody meets that test, the person who exercises control over management is recorded instead. We work through your ownership chain to identify who must be listed.',
      },
      {
        q: 'What happens during an AML inspection?',
        a: 'The supervisor reviews your risk assessment, policies, customer files, screening and training records, and may test individual transactions. Being able to show the programme operating in practice is what an inspection is designed to check.',
      },
    ],
    services: ['aml-compliance', 'goaml-registration', 'ubo-filing', 'risk-advisory'],
  },

  /* ────────────────────────── Accounting & bookkeeping ─────────────────────── */
  {
    slug: 'accounting-bookkeeping',
    label: 'Accounting & Bookkeeping',
    short: 'Accounting',
    icon: Calculator,
    tagline: 'Books, reports, payroll and CFO support — the foundation every tax return stands on.',
    title: 'Accounting and bookkeeping services in Dubai',
    heroSubtitle:
      'Monthly bookkeeping, management and financial reporting, backlog clean-ups, payroll and part-time CFO support — kept to IFRS, reconciled to the bank and ready for tax, audit and the decisions you need to make.',
    metaTitle: 'Accounting & Bookkeeping Services in Dubai | Payroll & Reporting | Smartgic Visa',
    metaDescription:
      'Accounting and bookkeeping services in Dubai: monthly bookkeeping, IFRS financial reporting, backlog accounting and payroll with WPS — accurate books ready for corporate tax, VAT and audit.',
    keywords: [
      'accounting services Dubai',
      'bookkeeping services Dubai',
      'payroll services UAE',
      'backlog accounting Dubai',
      'financial reporting UAE',
    ],
    intro: {
      heading: 'Good books are no longer optional',
      body: [
        'Corporate tax returns are calculated from your accounting profit, VAT returns from your invoices and expenses, and many companies must have their financial statements audited each year. All of it depends on books that are complete, reconciled and kept to accepted accounting standards.',
        'We keep those books for you — monthly, on the system that suits your business — and turn them into reports you can actually use. If records have fallen behind, we rebuild them first; if you have staff, we run payroll through the Wage Protection System as part of the same file.',
      ],
    },
    pillars: [
      {
        title: 'Bookkeeping',
        desc: 'Transactions recorded, categorised and reconciled to the bank every month, with VAT treated correctly at source.',
      },
      {
        title: 'Reporting',
        desc: 'Management accounts and IFRS financial statements that support tax returns, audits, banks and investors.',
      },
      {
        title: 'Backlog',
        desc: 'Missing months or years reconstructed from bank statements and source documents, then brought up to date.',
      },
      {
        title: 'Payroll',
        desc: 'Monthly salary runs, payslips, end-of-service calculations and WPS salary files, on time every month.',
      },
    ],
    faqs: [
      {
        q: 'Which accounting software do you work with?',
        a: 'We work with the mainstream cloud accounting platforms and can set one up if you do not have one yet. If you already use a system, we can usually keep it so your history stays in one place.',
      },
      {
        q: 'How long must I keep accounting records in the UAE?',
        a: 'Corporate tax rules require records to be kept for at least seven years after the end of the tax period they relate to, and VAT has its own retention rules. We keep your books and supporting documents organised so they can be produced on request.',
      },
      {
        q: 'Do small businesses really need monthly bookkeeping?',
        a: 'Monthly is what keeps VAT returns accurate, catches problems early and makes the year-end corporate tax return straightforward. Catching up once a year usually costs more and leaves less room to correct anything.',
      },
    ],
    services: [
      'accounting-services',
      'bookkeeping-services',
      'financial-reporting',
      'backlog-accounting',
      'payroll-services',
      'cfo-services',
    ],
  },

  /* ─────────────────────────────── Audit & assurance ───────────────────────── */
  {
    slug: 'audit-assurance',
    label: 'Audit & Assurance',
    short: 'Audit',
    icon: ClipboardCheck,
    tagline: 'External, internal, liquidation and agreed-upon-procedures work by UAE-registered auditors.',
    title: 'Audit and assurance services in the UAE',
    heroSubtitle:
      'Statutory external audits, internal audits, liquidation audits and agreed-upon-procedures reports — planned with you, carried out and signed by UAE-registered auditors, and delivered in the form your authority, bank or buyer expects.',
    metaTitle: 'Audit Services in Dubai | External, Internal & Liquidation Audit | Smartgic Visa',
    metaDescription:
      'Audit and assurance services in Dubai: statutory external audit, internal audit and liquidation audit, carried out by UAE-registered auditors and managed end to end by Smartgic Visa.',
    keywords: [
      'audit services Dubai',
      'external audit UAE',
      'internal audit Dubai',
      'liquidation audit UAE',
      'audit firms in Dubai',
    ],
    intro: {
      heading: 'An audit is only as smooth as the preparation behind it',
      body: [
        'Many UAE companies must present audited financial statements — to their free zone authority at renewal, under the Commercial Companies Law, for corporate tax in certain cases, or to a bank, investor or buyer. Closing a company often needs a liquidation audit too.',
        'We prepare your books and schedules for audit, coordinate the engagement and the auditor’s requests, and keep the timetable on track. The audit opinion itself is issued and signed by UAE-registered auditors, independent of the bookkeeping, as the rules require.',
      ],
    },
    pillars: [
      {
        title: 'External audit',
        desc: 'An independent opinion on your financial statements, in the form free zones, banks and the tax rules accept.',
      },
      {
        title: 'Internal audit',
        desc: 'A review of controls and processes that finds weak points before they turn into losses or findings.',
      },
      {
        title: 'Liquidation audit',
        desc: 'The final audit and report many authorities require before a company can be deregistered.',
      },
      {
        title: 'Agreed-upon procedures',
        desc: 'Factual findings on specific figures or controls, for a regulator, lender, landlord or partner.',
      },
    ],
    faqs: [
      {
        q: 'Is an annual audit mandatory for my company?',
        a: 'It depends on the jurisdiction and your circumstances. Many free zones require audited accounts at licence renewal, mainland companies have audit duties under the Commercial Companies Law, and corporate tax requires audited statements for larger businesses and qualifying free zone persons. We confirm what applies to you.',
      },
      {
        q: 'Who signs the audit report?',
        a: 'A UAE-registered auditor, who must be independent of the people who kept the books. We manage the engagement and the preparation; the opinion is the auditor’s.',
      },
      {
        q: 'How long does an audit take?',
        a: 'For a well-prepared small or medium company, the fieldwork is usually a matter of weeks. The biggest factor is how complete and reconciled the books are when the audit starts, which is why preparation comes first.',
      },
    ],
    services: ['external-audit', 'internal-audit', 'liquidation-audit', 'aup-reports'],
  },
];

export const categoriesBySlug = Object.fromEntries(categories.map((c) => [c.slug, c])) as Record<
  CategorySlug,
  Category
>;

export const categorySlugs = categories.map((c) => c.slug);

export function getCategory(slug: string): Category | undefined {
  return (categoriesBySlug as Record<string, Category>)[slug];
}
