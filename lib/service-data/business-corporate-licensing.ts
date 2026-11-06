import {
  Store,
  Globe2,
  Ship,
  Network,
  Landmark,
  KeyRound,
  BadgeCheck,
  FileStack,
  FileX2,
} from 'lucide-react';
import type { Service } from '../service-types';

/*
 * Business setup, corporate structuring and licensing services:
 * mainland, free zone and offshore formation; holding companies, foundations
 * and family trusts; trade licence issue, amendment and cancellation.
 */
export const businessCorporateLicensingServices: Service[] = [
  /* ───────────────────────── MAINLAND COMPANY FORMATION ───────────────────────── */
  {
    slug: 'mainland-company-formation',
    category: 'business-setup',
    navLabel: 'Mainland Company Formation',
    icon: Store,
    eyebrow: 'Mainland Setup',
    blurb: 'DET licence to trade anywhere in the UAE',
    title: 'Mainland Company Formation in Dubai & the UAE',
    heroSubtitle:
      'Form an LLC, sole establishment, civil company or branch licensed by Dubai’s Department of Economy and Tourism or another emirate’s economic department — with Ejari, approvals, establishment card and labour file in place so you can trade and hire anywhere in the UAE.',
    heroHighlights: ['Trade Anywhere in the UAE', 'Up to 100% Foreign Ownership', 'Ejari & Visa Quota Planned'],
    metaTitle: 'Mainland Company Formation Dubai | DET Licence | Smartgic Visa',
    metaDescription:
      'Mainland company formation in Dubai and the UAE: LLC, sole establishment, civil company or branch, with Ejari, approvals and visa quota planned. Ask us how.',
    keywords: [
      'mainland company formation dubai',
      'llc formation dubai',
      'dubai mainland licence',
      'sole establishment dubai',
      'mainland business setup uae',
      '100% foreign ownership mainland',
    ],
    overview: {
      heading: 'Choose the mainland when your customers are in the UAE',
      body: [
        'A mainland company is licensed by the emirate’s economic department — in Dubai, the Department of Economy and Tourism (DET) — and can serve customers anywhere in the UAE, including government entities. Most commercial and professional activities now allow 100% foreign ownership, but a short list of strategic-impact activities still carries restrictions. The licence also depends on an Ejari-registered tenancy in Dubai, any external approvals your activity needs, and an office large enough for the visas you plan to sponsor.',
        'We start by checking your activity against the licensing authority’s activity list and the ownership rules, then recommend the legal form — LLC, sole establishment, civil company or branch. From there we reserve the trade name, apply for initial approval and any external approvals, register the tenancy on Ejari, prepare and notarise the MOA where one is needed, and collect the licence. We then open your establishment card and MOHRE file so investor and employee visas can follow, and register the company for corporate tax.',
      ],
    },
    stats: [
      { value: 'DET', label: 'Licensing authority for Dubai mainland companies' },
      { value: '100%', label: 'Foreign ownership for most commercial and professional activities' },
      { value: 'Ejari', label: 'Registered tenancy required on the Dubai mainland' },
      { value: 'UAE-wide', label: 'Customers you can serve, including government' },
    ],
    benefits: [
      {
        title: 'The Whole UAE Market',
        desc: 'Invoice customers in any emirate, sell directly to consumers and bid for government contracts without needing a distributor or a second licence.',
      },
      {
        title: 'Ownership Checked First',
        desc: 'We test your activity against the foreign-ownership rules and the strategic-impact list before you pay for a name or a lease.',
      },
      {
        title: 'The Right Legal Form',
        desc: 'LLC, sole establishment, civil company or branch — chosen for liability, number of owners and activity type, not for whichever is quickest.',
      },
      {
        title: 'Office Sized to Visas',
        desc: 'Your visa quota follows office size, so we match the Ejari-registered space to the team you plan to sponsor, not just today’s headcount.',
      },
      {
        title: 'Approvals Mapped Upfront',
        desc: 'Activities that need sign-off from another authority are identified at the start, so approvals run alongside the application instead of stalling it.',
      },
      {
        title: 'Ready to Hire',
        desc: 'Establishment card, MOHRE labour file and corporate tax registration are completed with the licence, so visa applications and payroll setup can follow without a gap.',
      },
    ],
    process: [
      {
        title: 'Activity & Ownership Check',
        desc: 'We match what you will actually do to the authority’s activity list, confirm the ownership rules for those activities and recommend the legal form and emirate.',
      },
      {
        title: 'Trade Name & Initial Approval',
        desc: 'We reserve a trade name that meets the naming rules and apply for initial approval, which lets you lease premises and request any external approvals.',
      },
      {
        title: 'Premises, Approvals & MOA',
        desc: 'We register the tenancy on Ejari, file for external approvals where your activity needs them, and prepare the MOA or other constitutional documents for notarisation where required.',
      },
      {
        title: 'Licence Issued',
        desc: 'Once fees are paid, the authority issues the trade licence. We check every detail on it — name, activities, partners, manager and address — before you use it.',
      },
      {
        title: 'Establishment Card & Labour File',
        desc: 'We open the immigration establishment card and the MOHRE establishment file, register the company for corporate tax with the FTA, and line up investor and employee visas.',
      },
    ],
    requirements: [
      'Passport copies of all shareholders and the manager',
      'Emirates ID and residence details for UAE residents',
      'Proposed trade names, in order of preference',
      'A short description of your planned activities',
      'Shareholding split and the proposed manager',
      'Office details, or a tenancy you intend to register on Ejari',
      'Attested parent-company documents (for corporate shareholders or branches)',
      'No-objection letter from a current UAE employer, if the authority asks for one',
    ],
    eligibility: {
      heading: 'When the mainland is the right route',
      points: [
        'You will sell directly to customers or consumers in the UAE',
        'You want to bid for government or semi-government work',
        'You need a shop, showroom, clinic or other premises outside a free zone',
        'You plan to sponsor a growing team and want the quota to scale with your office',
        'Your activity is one that free zones do not offer',
      ],
    },
    included: [
      {
        group: 'Structure & Approvals',
        desc: 'The decisions that fix what your company can do and who owns it.',
        items: [
          'Activity selection against the authority’s list',
          'Foreign-ownership and strategic-impact check',
          'Legal form recommendation',
          'Trade name reservation',
          'Initial approval application',
          'External approval submissions',
        ],
      },
      {
        group: 'Licence & Documents',
        desc: 'The paperwork that brings the company into existence.',
        items: [
          'Ejari tenancy registration',
          'MOA drafting and notarisation',
          'Branch documents and parent resolutions',
          'Licence fee assessment and payment',
          'Trade licence collection and checks',
        ],
      },
      {
        group: 'Ready to Operate',
        desc: 'Everything that has to exist before you can hire and invoice.',
        items: [
          'Immigration establishment card',
          'MOHRE establishment file',
          'Investor and partner visa applications',
          'Corporate tax registration on EmaraTax',
          'VAT registration review',
          'Bank account introduction pack',
        ],
      },
    ],
    faqs: [
      {
        q: 'Can a foreigner own 100% of a mainland company in Dubai?',
        a: 'For most commercial and professional activities, yes — no Emirati shareholder is needed. A limited list of activities with strategic impact still carries ownership restrictions or extra conditions, and some regulated activities need approval from their sector regulator. We check your exact activities against the current rules before anything is filed, so the structure you register matches what the authority allows.',
      },
      {
        q: 'What is the difference between an LLC and a sole establishment?',
        a: 'An LLC is a separate legal entity: its shareholders’ liability is limited to their share capital, and it can have one or more owners, individual or corporate. A sole establishment is owned by one individual and has no separate legal personality, so the owner is personally liable for its debts. Civil companies suit partners in professional practices, and branches extend an existing UAE or foreign company.',
      },
      {
        q: 'Do I need a physical office for a mainland licence?',
        a: 'In Dubai, the licence needs a tenancy registered on Ejari, and the size of that space largely determines how many visas the company can sponsor. Depending on the activity, the premises may be a full office, a shop or warehouse, or a business-centre desk that meets DET’s requirements. Other emirates apply their own premises rules. We match the space to your visa plans before you sign a lease.',
      },
      {
        q: 'Can I set up a mainland company outside Dubai?',
        a: 'Yes. Each emirate has its own economic department that issues mainland licences, with its own activity list, premises rules and fees. A company licensed in one emirate can serve customers across the UAE, but opening premises in another emirate needs a branch licence there. We help you decide where the head office should sit and handle the application in the emirate you choose.',
      },
      {
        q: 'Can a mainland company work on government contracts?',
        a: 'Yes. A mainland licence lets you contract with federal and local government entities, and with semi-government bodies, as long as the work falls within your licensed activities. Government buyers usually also require registration on their own supplier or procurement systems, with documents such as a valid licence and tax registration. We check that your activities and records match what those registrations ask for.',
      },
      {
        q: 'Do mainland companies pay corporate tax?',
        a: 'Mainland companies such as LLCs must register with the FTA whether or not they make a profit; taxable income up to AED 375,000 is taxed at 0% and income above it at 9%. Resident businesses with revenue of AED 3 million or less can elect Small Business Relief for tax periods ending on or before 31 December 2026. A sole establishment owner becomes taxable once business turnover exceeds AED 1 million in a calendar year.',
      },
    ],
    related: ['company-registration', 'free-zone-company-formation', 'corporate-tax-registration', 'bank-account-opening'],
  },

  /* ───────────────────────── FREE ZONE COMPANY FORMATION ───────────────────────── */
  {
    slug: 'free-zone-company-formation',
    category: 'business-setup',
    navLabel: 'Free Zone Company Formation',
    icon: Globe2,
    eyebrow: 'Free Zone Setup',
    blurb: 'FZE, FZCO & branches in the right zone',
    title: 'Free Zone Company Formation in the UAE',
    heroSubtitle:
      'We help you choose the free zone that fits your activity, visa needs and customers, then form your FZE, FZCO or branch — licence, lease or flexi-desk, establishment card and corporate tax registration included.',
    heroHighlights: ['100% Foreign Ownership', 'Flexi-Desk or Office', 'QFZP Status Reviewed'],
    metaTitle: 'Free Zone Company Formation UAE | FZE & FZCO | Smartgic Visa',
    metaDescription:
      'Free zone company formation in the UAE: choose the right zone, form an FZE, FZCO or branch, size your visa allocation and plan for QFZP tax status. Ask us how.',
    keywords: [
      'free zone company formation uae',
      'free zone company setup dubai',
      'fze company formation',
      'fzco registration dubai',
      'free zone licence uae',
      'qualifying free zone person',
    ],
    overview: {
      heading: 'The zone you pick decides more than the address',
      body: [
        'The UAE has dozens of free zones, each with its own authority, activity list, licence types and packages. All allow full foreign ownership, but they differ in what you can do, how many visas a flexi-desk or office carries, what the zone requires each year and how easily you can reach customers on the mainland. A free zone company also has corporate tax duties: it must register with the FTA, and it is taxed at 0% on qualifying income only if it meets the QFZP conditions.',
        'We start with your activities, customers and hiring plans and shortlist zones using our free zone comparison, explaining the trade-offs rather than pushing a package. Once you have chosen, we prepare the application and KYC file, confirm the entity form, arrange the lease or flexi-desk agreement, and collect the licence and incorporation documents. We then set up the establishment card, register the company for corporate tax and plan the substance and audit that a QFZP position relies on.',
      ],
    },
    stats: [
      { value: 'Dozens', label: 'Of free zones, each with its own authority' },
      { value: '100%', label: 'Foreign ownership in every UAE free zone' },
      { value: '0% / 9%', label: 'QFZP rates on qualifying and other income' },
      { value: 'Audit', label: 'Required for QFZPs and by many zones at renewal' },
    ],
    benefits: [
      {
        title: 'A Zone Chosen on Facts',
        desc: 'We compare zones on permitted activities, visa allocation, location, renewal duties and bank familiarity, so the choice holds up after year one.',
      },
      {
        title: 'Correct Entity Form',
        desc: 'FZE, FZCO or FZ-LLC, or a branch of your existing company — set up to match your shareholders and how the zone names each form.',
      },
      {
        title: 'Space That Fits Your Team',
        desc: 'We size the flexi-desk or office to the visas you need, because the package you sign decides how many residence visas the company can sponsor.',
      },
      {
        title: 'A Plan for Mainland Sales',
        desc: 'If UAE customers matter, we set out the distributor, mainland branch or separate-licence route before formation, not after your first mainland enquiry.',
      },
      {
        title: 'QFZP Conditions Planned',
        desc: 'We map the conditions behind 0% on qualifying income — substance, audited accounts, qualifying activities and transfer pricing — and keep the evidence in order.',
      },
      {
        title: 'Renewal Duties Tracked',
        desc: 'Licence and lease renewals, audited statements where the zone asks for them and UBO filings are scheduled so nothing blocks next year’s renewal.',
      },
    ],
    process: [
      {
        title: 'Shortlist the Zones',
        desc: 'We review your activities, customers, team size and budget, then shortlist zones from our comparison and explain the trade-offs between them in plain terms.',
      },
      {
        title: 'Application & KYC',
        desc: 'We prepare the application, activity selection and shareholder KYC file, reserve the company name and submit everything to the free zone authority for approval.',
      },
      {
        title: 'Documents & Workspace',
        desc: 'Once approved, the constitutional documents are signed, fees are paid and the flexi-desk or office agreement is put in place in the company’s name.',
      },
      {
        title: 'Licence & Incorporation',
        desc: 'The zone issues the licence and incorporation documents, such as the certificate of incorporation, share certificate and lease. We check each one before handover.',
      },
      {
        title: 'Visas, Tax & Banking',
        desc: 'We open the establishment card, start residence visas through the zone, register the company for corporate tax and prepare the file for a bank account application.',
      },
    ],
    requirements: [
      'Passport copies of every shareholder and director',
      'Proof of residential address for each shareholder',
      'A short business plan or activity description',
      'Proposed company names, in order of preference',
      'Shareholding split and authorised signatory details',
      'Attested parent-company documents (for corporate shareholders or branches)',
      'No-objection letter from a current UAE employer, where the zone requires it',
      'The number of visas you expect to need',
    ],
    eligibility: {
      heading: 'When a free zone is the right fit',
      points: [
        'Most of your customers are outside the UAE or inside the same zone',
        'You want full foreign ownership with a packaged licence and workspace',
        'You need only a few visas and a flexi-desk is enough to start',
        'Your activity suits a specialist zone, such as commodities, media or technology',
        'You plan to provide services or trade internationally from a UAE base',
      ],
    },
    included: [
      {
        group: 'Choosing the Zone',
        desc: 'A shortlist built on your activities, team and customers.',
        items: [
          'Activity availability check across zones',
          'Commercial, service or industrial licence choice',
          'Visa allocation and workspace comparison',
          'Mainland-access route planning',
          'Entity form recommendation (FZE, FZCO, FZ-LLC, branch)',
        ],
      },
      {
        group: 'Formation',
        desc: 'From application to a licensed company with its documents in hand.',
        items: [
          'Name reservation and application filing',
          'Shareholder KYC and due diligence file',
          'Constitutional documents and resolutions',
          'Flexi-desk or office agreement',
          'Licence and incorporation documents',
          'Establishment card with the zone',
        ],
      },
      {
        group: 'Tax & Annual Duties',
        desc: 'What keeps the company compliant — and its 0% position defensible.',
        items: [
          'Corporate tax registration on EmaraTax',
          'QFZP conditions review',
          'VAT registration assessment',
          'UBO register filing with the zone',
          'Audit and renewal calendar',
        ],
      },
    ],
    faqs: [
      {
        q: 'Which free zone is right for my business?',
        a: 'It depends on your activity, where your customers are, how many visas you need and where you want to be based. Some zones specialise in sectors such as commodities, media or logistics; others offer broad multi-activity licences. Our free zone comparison sets out the options side by side, and we shortlist two or three for your case with the trade-offs explained.',
      },
      {
        q: 'Can a free zone company sell to customers on the UAE mainland?',
        a: 'Not directly in most cases. A free zone company trades freely within its zone and abroad; selling into the mainland generally needs a mainland distributor or agent, a mainland branch, or a separate mainland licence. Goods moving from a free zone into the mainland are treated as imported at that point, so customs duty generally applies. Some emirates also offer permits for certain activities — we check what applies to yours.',
      },
      {
        q: 'How many visas can a free zone company sponsor?',
        a: 'Each zone links the visa allocation to the package or workspace on your licence: a flexi-desk usually carries a small allocation, and more visas need a larger office or warehouse. The exact numbers, and whether you can add visas later, are set by each zone and change from time to time. We confirm the current allocation for the zone and package you are considering before you commit.',
      },
      {
        q: 'Do free zone companies pay corporate tax?',
        a: 'They must register with the FTA and file a return, whether or not they make a profit. A Qualifying Free Zone Person pays 0% on qualifying income and 9% on other income, provided it maintains adequate substance, prepares audited financial statements, carries out qualifying activities, follows transfer pricing rules and does not elect the standard rate. Otherwise the standard rates apply. Small Business Relief is not available to QFZPs.',
      },
      {
        q: 'Is a flexi-desk enough, or do I need an office?',
        a: 'A flexi-desk meets the licensing requirement in many zones and suits founders who need few visas and little physical space. You need a dedicated office or warehouse for a larger team, for holding stock, or where the zone only permits your activity with dedicated premises. If you plan to rely on QFZP status, remember that adequate substance is a condition, and a desk alone may not demonstrate it.',
      },
      {
        q: 'What do I have to do each year to keep the licence?',
        a: 'Renew the licence and the lease or flexi-desk agreement before expiry, keep the establishment card and visas current, and file whatever the zone asks for at renewal — many zones require audited financial statements. You also need to keep the UBO register up to date with the zone, file your corporate tax return within 9 months of the year end, and keep records for at least 7 years.',
      },
    ],
    related: ['mainland-company-formation', 'corporate-tax-registration', 'external-audit', 'co-working-space'],
  },

  /* ───────────────────────── OFFSHORE COMPANY FORMATION ───────────────────────── */
  {
    slug: 'offshore-company-formation',
    category: 'business-setup',
    navLabel: 'Offshore Company Formation',
    icon: Ship,
    eyebrow: 'Offshore Setup',
    blurb: 'RAK ICC, JAFZA & Ajman offshore vehicles',
    title: 'Offshore Company Formation in the UAE',
    heroSubtitle:
      'Form a UAE offshore company with RAK ICC, JAFZA Offshore or Ajman Offshore to hold shares, property, IP or investments and trade internationally — with the registered agent, corporate documents, tax registration and bank file arranged.',
    heroHighlights: ['RAK ICC, JAFZA & Ajman', 'Registered Agent Arranged', 'Corporate Tax Registration'],
    metaTitle: 'Offshore Company Formation UAE | RAK ICC & JAFZA | Smartgic Visa',
    metaDescription:
      'UAE offshore company formation with RAK ICC, JAFZA Offshore or Ajman Offshore, for holding, IP and international trade — what it can and cannot do, explained.',
    keywords: [
      'offshore company formation uae',
      'rak icc company registration',
      'jafza offshore company',
      'ajman offshore company',
      'uae offshore holding company',
    ],
    overview: {
      heading: 'An offshore company holds and contracts — it does not trade here',
      body: [
        'A UAE offshore company is incorporated with a registry such as RAK International Corporate Centre (RAK ICC), JAFZA Offshore or Ajman Offshore. It is built to own things — shares, intellectual property, investments and, in some cases, real estate — and to contract and trade outside the UAE. It cannot trade inside the UAE, open an operating office or sponsor residence visas, and it must act through a registered agent. Because it is UAE-incorporated, it also falls within corporate tax.',
        'We begin with what the company will hold or do, and who will deal with it — banks, counterparties, land departments — because that decides which registry fits. We then work through the registered agent to clear due diligence and prepare the memorandum and articles, director appointments and share certificates. After incorporation we register the company for corporate tax, prepare a well-documented bank file and, where you also need UAE operations or visas, set up the free zone or mainland company that sits alongside it.',
      ],
    },
    stats: [
      { value: 'RAK ICC', label: 'Plus JAFZA Offshore and Ajman Offshore registries' },
      { value: 'No visas', label: 'Offshore companies cannot sponsor residence visas' },
      { value: 'Agent', label: 'Registered agent required for every offshore company' },
      { value: 'FTA', label: 'Corporate tax registration still applies' },
    ],
    benefits: [
      {
        title: 'A Clean Holding Vehicle',
        desc: 'Hold shares in UAE or foreign companies through one entity, keeping ownership separate from the businesses that carry operating risk.',
      },
      {
        title: 'IP in One Place',
        desc: 'Hold trademarks, software or other intellectual property in the offshore company and let your operating companies use it under written, arm’s-length agreements.',
      },
      {
        title: 'International Trade',
        desc: 'Contract with suppliers and customers outside the UAE, invoicing internationally while a separate licensed entity handles anything done inside the country.',
      },
      {
        title: 'The Right Registry',
        desc: 'RAK ICC, JAFZA Offshore and Ajman Offshore differ in permitted uses, property options and costs; we match the registry to what the company will hold.',
      },
      {
        title: 'Tax Duties Covered',
        desc: 'Offshore does not mean outside corporate tax — we register the company with the FTA and keep its returns and records on schedule.',
      },
      {
        title: 'Realistic Banking Plan',
        desc: 'Banks look closely at offshore entities, so we prepare a file showing owners, source of funds and purpose, and tell you honestly what to expect.',
      },
    ],
    process: [
      {
        title: 'Purpose & Registry',
        desc: 'We confirm what the company will hold or trade, who owns it and where its counterparties are, then recommend RAK ICC, JAFZA Offshore or Ajman Offshore.',
      },
      {
        title: 'Name & Due Diligence',
        desc: 'Through the registered agent we reserve the company name and submit KYC for every shareholder, director and beneficial owner, answering the registry’s questions as they come.',
      },
      {
        title: 'Constitution & Incorporation',
        desc: 'We prepare the memorandum and articles of association and the director and shareholder details; the registry then incorporates the company and issues its certificate.',
      },
      {
        title: 'Corporate Documents',
        desc: 'You receive the certificate of incorporation, memorandum and articles, share certificates and registers, plus an incumbency certificate and attested copies where a bank or counterparty needs them.',
      },
      {
        title: 'Tax Registration & Banking',
        desc: 'We register the company for corporate tax on EmaraTax, set up its bookkeeping and annual obligations, and prepare the bank account application with the supporting evidence.',
      },
    ],
    requirements: [
      'Passport copies of all shareholders and directors',
      'Proof of residential address for each person',
      'Bank reference letters or CVs, where the registry asks for them',
      'A description of what the company will hold or trade',
      'Source of funds and source of wealth information',
      'Proposed company names',
      'Attested documents for any corporate shareholder',
    ],
    eligibility: {
      heading: 'What a UAE offshore company suits',
      points: [
        'Holding shares in other companies, where each authority accepts it as a shareholder',
        'Owning trademarks, software or other intellectual property',
        'Holding investments, or property where the registry and land department allow it',
        'Contracting and invoicing for trade that takes place outside the UAE',
        'Not suitable if you need UAE customers, an office or residence visas',
      ],
    },
    included: [
      {
        group: 'Registry & Structure',
        desc: 'The choices that decide what the company can do.',
        items: [
          'Registry comparison: RAK ICC, JAFZA Offshore, Ajman Offshore',
          'Permitted-use and activity check',
          'Shareholder, director and UBO structure',
          'Registered agent and registered office',
          'Company name reservation',
        ],
      },
      {
        group: 'Incorporation Pack',
        desc: 'The documents banks and counterparties ask to see.',
        items: [
          'Memorandum and articles of association',
          'Certificate of incorporation',
          'Share certificates and statutory registers',
          'Incumbency certificate',
          'Attestation and legalisation for use abroad',
        ],
      },
      {
        group: 'After Incorporation',
        desc: 'What keeps the company in good standing.',
        items: [
          'Corporate tax registration on EmaraTax',
          'Bank account application support',
          'Annual renewal through the registered agent',
          'Register updates when owners or directors change',
          'Free zone or mainland licence where UAE operations are needed',
        ],
      },
    ],
    faqs: [
      {
        q: 'Can a UAE offshore company do business inside the UAE?',
        a: 'No. An offshore company cannot trade with customers in the UAE, open an operating office or hire staff here. It can hold shares, investments and intellectual property, and contract for trade that takes place outside the country. If you also need UAE customers or a team, the usual answer is a free zone or mainland company alongside the offshore entity, often owned by it.',
      },
      {
        q: 'Can I get a residence visa through an offshore company?',
        a: 'No. UAE offshore companies cannot sponsor residence visas for owners, directors or employees. If residence is part of your plan, you need a free zone or mainland licence with a visa allocation — the offshore company can usually own that operating company. We plan both together so the ownership chain is clear to the licensing authority and to the bank.',
      },
      {
        q: 'Does a UAE offshore company have to register for corporate tax?',
        a: 'Yes. A UAE offshore company is incorporated in the UAE, so it falls within corporate tax and must register with the FTA whether or not it makes a profit. Some income, such as dividends from qualifying shareholdings, may be exempt under the participation exemption, subject to conditions, but the company still files a corporate tax return for every tax period and keeps proper accounting records.',
      },
      {
        q: 'Can an offshore company open a UAE bank account?',
        a: 'It can, but expect closer scrutiny than an operating company receives. Banks typically ask for the ownership chain, source of funds and wealth, the purpose of the account and evidence of the underlying activity, and some do not onboard offshore entities at all. We prepare a complete file, approach banks that work with your profile and tell you honestly what is realistic; the decision rests with the bank.',
      },
      {
        q: 'RAK ICC, JAFZA Offshore or Ajman Offshore — which should I choose?',
        a: 'All three are UAE offshore registries with similar core rules: no UAE trading, no visas and a registered agent. They differ in what the company may hold, how counterparties and land departments view them, and in set-up and renewal costs. RAK ICC is widely used for holding structures, and JAFZA Offshore is often chosen where Dubai property is involved. We recommend one once we know what the company will own.',
      },
      {
        q: 'Do I need to visit the UAE to form an offshore company?',
        a: 'Usually not. Incorporation runs through the registered agent, and KYC documents can normally be provided from abroad, with attestation where the registry requires it. A visit may be needed later for bank account opening, as many banks want to meet the signatories. We tell you at the start which steps, if any, need you in person.',
      },
    ],
    related: ['holding-company-setup', 'free-zone-company-formation', 'corporate-tax-registration', 'bank-account-opening'],
  },

  /* ───────────────────────── HOLDING COMPANY & SPV SETUP ───────────────────────── */
  {
    slug: 'holding-company-setup',
    category: 'corporate-services',
    navLabel: 'Holding Company & SPV Setup',
    icon: Network,
    eyebrow: 'Holding Structures',
    blurb: 'Group holding companies, SPVs & JV vehicles',
    title: 'Holding Company & SPV Setup in the UAE',
    heroSubtitle:
      'We design and form UAE holding companies and special-purpose vehicles — for group ownership, ring-fenced assets, joint ventures and financing — in ADGM, DIFC, RAK ICC, JAFZA, DMCC or the mainland, with tax and governance set up from day one.',
    heroHighlights: ['Group Holdings & SPVs', 'ADGM, DIFC, RAK ICC & More', 'Tax Group & Exemptions'],
    metaTitle: 'Holding Company & SPV Setup UAE | ADGM & DIFC | Smartgic Visa',
    metaDescription:
      'Holding company and SPV setup in the UAE: ADGM, DIFC, RAK ICC, JAFZA, DMCC or mainland, with tax group and participation exemption review. Plan your structure.',
    keywords: [
      'holding company setup uae',
      'spv setup adgm',
      'difc holding company',
      'special purpose vehicle uae',
      'uae holding company corporate tax',
    ],
    overview: {
      heading: 'Separate what you own from what you operate',
      body: [
        'As a business grows, holding everything in one operating company concentrates risk: a claim against one line of business can reach assets that have nothing to do with it, and bringing in a partner or lender means reopening the whole company. A holding company or special-purpose vehicle puts each asset, venture or financing in its own legal box. The choice of jurisdiction then decides which courts and rules apply, what each vehicle can do and how it is treated for corporate tax.',
        'We map your current ownership, the assets and businesses to be held, and any partners or lenders, then design the structure and help you choose between ADGM, DIFC, RAK ICC, JAFZA, DMCC and the mainland. We form each vehicle, move existing shareholdings under it through share transfers and MOA amendments, and register every entity for corporate tax. We also review whether a tax group or the participation exemption applies, and set up the registers, resolutions and intercompany agreements that give the structure real substance.',
      ],
    },
    stats: [
      { value: 'ADGM/DIFC', label: 'Common-law centres with dedicated SPV-style regimes' },
      { value: '95%', label: 'Common ownership needed to form a tax group' },
      { value: '5%+', label: 'Broad shareholding level for the participation exemption' },
      { value: '12 months', label: 'Minimum holding period for the participation exemption' },
    ],
    benefits: [
      {
        title: 'Ring-Fenced Assets',
        desc: 'Property, IP and investments sit in their own vehicles, so a liability in one business does not automatically reach assets held elsewhere.',
      },
      {
        title: 'Cleaner Joint Ventures',
        desc: 'A dedicated JV vehicle with its own shareholders’ agreement keeps a partnership’s rights, funding and exit terms apart from your core group.',
      },
      {
        title: 'Finance-Ready Structures',
        desc: 'Lenders and investors can take security over, or invest into, a single-purpose vehicle without touching the rest of the group.',
      },
      {
        title: 'Jurisdiction Matched to Purpose',
        desc: 'Common-law courts in ADGM or DIFC, an offshore registry, a free zone or the mainland — chosen for what each vehicle must actually do.',
      },
      {
        title: 'Corporate Tax Reviewed',
        desc: 'We check tax group eligibility and the participation exemption on dividends and gains, and register every entity so none misses its filings.',
      },
      {
        title: 'Governance With Substance',
        desc: 'Board resolutions, registers, intercompany agreements and transfer pricing records show who decides what, which banks, auditors and the FTA expect to see.',
      },
    ],
    process: [
      {
        title: 'Map the Group',
        desc: 'We chart current ownership, the operating companies and assets to be held, and any partners, investors or lenders, so the structure is designed around real needs.',
      },
      {
        title: 'Design & Jurisdiction',
        desc: 'We propose the holding layer and any SPVs, compare ADGM, DIFC, RAK ICC, JAFZA, DMCC and mainland options for each, and review the corporate tax effect.',
      },
      {
        title: 'Form the Vehicles',
        desc: 'We incorporate the holding company and SPVs, prepare their articles, resolutions and director appointments, and arrange registered addresses, working with legal counsel where agreements require it.',
      },
      {
        title: 'Move the Assets',
        desc: 'Existing shareholdings and assets are transferred into the new structure through share transfers, MOA amendments and, for property, the relevant land department’s process.',
      },
      {
        title: 'Tax & Governance Setup',
        desc: 'We register each entity for corporate tax, apply for a tax group where it fits, file UBO registers and set up intercompany agreements and a compliance calendar.',
      },
    ],
    requirementsHeading: 'Information we’ll need',
    requirements: [
      'A chart of your current group and ownership',
      'Licences and MOAs of the companies to be held',
      'Details of the assets, ventures or financing for each vehicle',
      'Passports and proof of address for shareholders, directors and UBOs',
      'Source of funds and source of wealth information',
      'Attested documents for any corporate shareholder',
      'Draft JV, investment or financing terms, if any',
    ],
    eligibility: {
      heading: 'When a holding structure makes sense',
      points: [
        'You own, or plan to own, more than one operating company',
        'You want property, IP or investments held apart from trading risk',
        'You are entering a joint venture or bringing in investors',
        'A lender wants a single-purpose borrower or security over one asset',
        'You are planning succession and want ownership consolidated in one place',
      ],
    },
    included: [
      {
        group: 'Structure Design',
        desc: 'A plan for who owns what, where and why.',
        items: [
          'Group ownership mapping',
          'Holding and SPV structure design',
          'Jurisdiction comparison per vehicle',
          'JV and financing vehicle planning',
          'Corporate tax impact review',
        ],
      },
      {
        group: 'Formation & Transfers',
        desc: 'The vehicles created and the assets moved into them.',
        items: [
          'Holding company and SPV incorporation',
          'Articles, resolutions and director appointments',
          'Registered address arrangements',
          'Share transfers into the holding company',
          'MOA amendments for subsidiaries',
          'Legal counsel coordination for agreements',
        ],
      },
      {
        group: 'Tax & Governance',
        desc: 'The records that make the structure hold up.',
        items: [
          'Corporate tax registration for every entity',
          'Tax group application where eligible',
          'Participation exemption review',
          'UBO and shareholder registers',
          'Intercompany agreements and transfer pricing records',
          'Annual compliance calendar',
        ],
      },
    ],
    faqs: [
      {
        q: 'What is the difference between a holding company and an SPV?',
        a: 'A holding company sits at the top of a group and owns shares in its subsidiaries, often for the long term. A special-purpose vehicle is set up for one defined purpose — holding a single property or IP portfolio, a joint venture, or a financing — and usually has no staff or trading of its own. Many groups use both: a holding company above, with SPVs for specific assets or deals.',
      },
      {
        q: 'Where should I set up a holding company in the UAE?',
        a: 'It depends on what the company will hold and who it deals with. ADGM and DIFC offer common-law courts and SPV-style regimes that investors and lenders know well. RAK ICC and JAFZA Offshore suit straightforward holding structures, DMCC and other free zones work where the holding company needs its own licence and staff, and a mainland company can hold shares where the group prefers a mainland parent. We compare the options for your case.',
      },
      {
        q: 'Do UAE holding companies pay corporate tax?',
        a: 'A holding company is a taxable person and must register with the FTA, even if all its income is dividends. Dividends and gains from qualifying shareholdings — broadly 5% or more, held for at least 12 months — can be exempt under the participation exemption, subject to conditions. Other income, such as management fees or interest from subsidiaries, is taxed in the usual way, and related-party transactions must be at arm’s length.',
      },
      {
        q: 'Can my holding company and its subsidiaries form a tax group?',
        a: 'Resident companies with 95% common ownership can apply to the FTA to form a tax group and file one corporate tax return, subject to conditions such as sharing the same financial year. A Qualifying Free Zone Person or an exempt person cannot join, so a free zone holding company has to choose between QFZP status and grouping. We compare both positions before you apply.',
      },
      {
        q: 'Does an SPV need an office, staff or visas?',
        a: 'Most SPVs are passive vehicles: they hold an asset or a contract, use a registered address and have no employees, so they do not sponsor visas. Where the vehicle needs people, premises or a trading licence, a free zone or mainland company is the better fit. Passive status does not remove duties — each vehicle still keeps records, maintains its registers and files corporate tax returns.',
      },
      {
        q: 'How do I move my existing companies under a new holding company?',
        a: 'Usually by transferring each operating company’s shares to the holding company. On the mainland that means a share transfer and MOA amendment registered with the licensing authority; in a free zone, the zone’s own transfer process. Investor visas tied to the old shareholding, bank mandates and tax registrations then need reviewing. Corporate tax reliefs for transfers within a group may apply, subject to conditions — we check before you sign.',
      },
    ],
    related: ['offshore-company-formation', 'share-transfer', 'corporate-tax-advisory', 'foundation-setup'],
  },

  /* ───────────────────────── DIFC & ADGM FOUNDATIONS ───────────────────────── */
  {
    slug: 'foundation-setup',
    category: 'corporate-services',
    navLabel: 'DIFC & ADGM Foundations',
    icon: Landmark,
    eyebrow: 'Foundations',
    blurb: 'Succession, family governance & philanthropy',
    title: 'Foundation Setup in DIFC & ADGM',
    heroSubtitle:
      'We help you establish a DIFC or ADGM foundation to hold family assets and companies, plan succession and support philanthropy — designing the council, charter and by-laws with qualified legal counsel and registering the foundation for you.',
    heroHighlights: ['DIFC or ADGM Regime', 'Council, Charter & By-Laws', 'Legal Counsel Coordinated'],
    metaTitle: 'DIFC & ADGM Foundation Setup | Family Wealth | Smartgic Visa',
    metaDescription:
      'Set up a DIFC or ADGM foundation for succession, family governance or philanthropy. Council, charter, by-laws and registration coordinated with legal counsel.',
    keywords: [
      'difc foundation setup',
      'adgm foundation registration',
      'family foundation uae',
      'private foundation dubai',
      'foundation succession planning uae',
    ],
    overview: {
      heading: 'A foundation gives family assets a permanent home',
      body: [
        'When family wealth sits in individuals’ names, a death, divorce or dispute can put it in question, and running shared assets depends on everyone agreeing. A foundation under the DIFC or ADGM regime is a separate legal person with no shareholders. It is run by a council under a charter and by-laws, and holds assets for its beneficiaries or for a stated purpose. That makes it a durable vehicle for succession, family governance, philanthropy and holding the family’s operating companies.',
        'We start with your objectives and the assets involved, then help you choose between DIFC and ADGM and design the roles: founder, council members, any guardian, and the beneficiaries or purpose. Our team works alongside qualified legal counsel to draft the charter and by-laws, then handles registration, the registered address, KYC and the foundation’s registers. Once registered, we coordinate transferring company shares and other assets into the foundation and keep its annual obligations on schedule.',
      ],
    },
    stats: [
      { value: 'DIFC/ADGM', label: 'The two UAE foundation regimes to choose from' },
      { value: 'No shares', label: 'A foundation has no shareholders or owners' },
      { value: 'Council', label: 'Runs the foundation under its charter and by-laws' },
      { value: 'Purpose', label: 'Assets held for beneficiaries or a stated purpose' },
    ],
    benefits: [
      {
        title: 'Continuity Beyond One Lifetime',
        desc: 'Because the foundation owns the assets, ownership does not change on a founder’s death; the by-laws decide what happens next.',
      },
      {
        title: 'Clear Family Governance',
        desc: 'The charter and by-laws set who sits on the council, how decisions are made and how the next generation is brought in.',
      },
      {
        title: 'Assets Held Apart',
        desc: 'Assets transferred to the foundation belong to it rather than to the founder or beneficiaries, keeping them apart from their personal affairs.',
      },
      {
        title: 'A Home for Family Companies',
        desc: 'A foundation can sit at the top of the group, holding shares in the family’s companies so control follows its rules rather than individual estates.',
      },
      {
        title: 'Structured Philanthropy',
        desc: 'A foundation with a charitable purpose can fund that aim for the long term, with the council bound by its charter on how funds are used.',
      },
      {
        title: 'Documents Done Properly',
        desc: 'The charter and by-laws are drafted with qualified legal counsel, so the foundation reflects your intentions and is ready for bank and registrar review.',
      },
    ],
    process: [
      {
        title: 'Objectives & Assets',
        desc: 'We discuss what you want the foundation to achieve, which assets it will hold and who should benefit, and flag anything that needs specialist legal advice.',
      },
      {
        title: 'Regime & Roles',
        desc: 'We compare DIFC and ADGM for your situation and agree the founder’s role, council membership, any guardian and how beneficiaries or the purpose are defined.',
      },
      {
        title: 'Charter & By-Laws',
        desc: 'Working alongside qualified legal counsel, the charter and by-laws are drafted and reviewed with you until they reflect how the family wants decisions made.',
      },
      {
        title: 'Registration',
        desc: 'We prepare the KYC file, arrange the registered address, submit the application and charter to the registrar and collect the foundation’s registration documents.',
      },
      {
        title: 'Endowment & Upkeep',
        desc: 'We coordinate moving shares, accounts and other assets into the foundation, open its records and registers, and diarise renewals, filings and council reviews.',
      },
    ],
    requirementsHeading: 'Information we’ll need',
    requirements: [
      'Passports and proof of address for the founder and council members',
      'Details of the intended beneficiaries or the foundation’s purpose',
      'A list of assets to be transferred, with ownership documents',
      'Source of wealth information for the founder',
      'Licences and MOAs of companies the foundation will hold',
      'Guardian details, if one will be appointed',
      'Existing wills or family agreements that affect the assets',
    ],
    eligibility: {
      heading: 'Who uses a foundation',
      points: [
        'Families planning how wealth and businesses pass to the next generation',
        'Business owners who want group shares held in one stable vehicle',
        'Families who want written rules for decisions and family involvement',
        'Founders setting up long-term charitable or community giving',
        'Owners of assets spread across several companies who want one holding point',
      ],
    },
    included: [
      {
        group: 'Design',
        desc: 'The decisions that shape the foundation for decades.',
        items: [
          'Objectives and asset review',
          'DIFC or ADGM regime comparison',
          'Founder, council and guardian roles',
          'Beneficiary or purpose definition',
          'Corporate tax position review',
        ],
      },
      {
        group: 'Documents & Registration',
        desc: 'Prepared with qualified legal counsel and filed with the registrar.',
        items: [
          'Charter drafting with legal counsel',
          'By-laws drafting with legal counsel',
          'KYC and source-of-wealth file',
          'Registered address arrangement',
          'Registration with the DIFC or ADGM registrar',
        ],
      },
      {
        group: 'Assets & Ongoing Duties',
        desc: 'What turns a registered foundation into a working one.',
        items: [
          'Share transfers into the foundation',
          'Bank account application support',
          'Registers and beneficial ownership records',
          'Annual renewal and registrar filings',
          'Council meeting records and resolutions',
          'Periodic review of the by-laws',
        ],
      },
    ],
    faqs: [
      {
        q: 'What is the difference between a foundation and a trust?',
        a: 'A foundation is a legal person in its own right: it owns its assets and acts through its council. A trust is not a separate entity — the trustee holds legal title to the assets for the beneficiaries under a trust deed. Families from civil-law backgrounds often find a foundation more familiar, while trusts suit common-law planning. Both are available in DIFC and ADGM, and some structures combine them.',
      },
      {
        q: 'Should I choose a DIFC or an ADGM foundation?',
        a: 'Both are modern regimes in common-law financial centres with their own courts and registrars, and both are well understood by UAE banks. The choice usually comes down to practical points: where the family and its advisers are based, whether you already have entities in one centre, registered office and council arrangements, and ongoing costs. We compare the two on your facts before anything is drafted.',
      },
      {
        q: 'Can a foundation own shares in my UAE companies?',
        a: 'Generally, yes. A DIFC or ADGM foundation can be the shareholder of mainland, free zone and offshore companies, subject to each licensing authority’s rules for corporate shareholders, which may require certified or attested copies of the foundation’s documents. Existing shares are moved in by share transfer, with the MOA amended where needed. We plan the transfers so licences, visas and bank mandates stay aligned.',
      },
      {
        q: 'Who controls a foundation once it is set up?',
        a: 'The council manages the foundation and must follow its charter and by-laws. Depending on how it is designed, the founder may sit on the council or keep certain reserved powers, and a guardian can be appointed to oversee the council. Beneficiaries do not own the foundation and normally have only the rights the by-laws give them. We help you set this balance with legal counsel.',
      },
      {
        q: 'Is information about the foundation made public?',
        a: 'Basic details, such as the foundation’s name and registered address, appear on the registrar’s public register, and the charter is filed with the registrar. The by-laws, which usually set out the beneficiaries and detailed rules, are generally not filed. Beneficial ownership details are still reported under each centre’s rules. We explain what will and will not be visible before you register.',
      },
      {
        q: 'What ongoing obligations does a foundation have?',
        a: 'Each year the foundation completes its annual filing with the registrar, keeps its registered address and registers up to date, records council decisions and maintains proper accounting records. It must also meet its corporate tax obligations, and we review with you whether it can apply to the FTA to be treated as a qualifying family foundation. Changes to the council, guardian or beneficiaries are documented and, where required, notified to the registrar.',
      },
    ],
    related: ['family-trust-setup', 'holding-company-setup', 'share-transfer', 'corporate-tax-advisory'],
  },

  /* ───────────────────────── FAMILY TRUSTS & WEALTH STRUCTURING ───────────────────────── */
  {
    slug: 'family-trust-setup',
    category: 'corporate-services',
    navLabel: 'Family Trusts & Wealth Structuring',
    icon: KeyRound,
    eyebrow: 'Family Wealth',
    blurb: 'Trusts, holding layers & succession plans',
    title: 'Family Trusts & Wealth Structuring in the UAE',
    heroSubtitle:
      'We help families set up trusts under the DIFC and ADGM common-law regimes and build wealth structures around them — holding companies, foundations and succession plans that complement your will — working alongside qualified legal counsel.',
    heroHighlights: ['DIFC & ADGM Trust Regimes', 'Complements Your Will', 'Holding & Trust Layers'],
    metaTitle: 'Family Trust Setup UAE | DIFC & ADGM Trusts | Smartgic Visa',
    metaDescription:
      'Set up a family trust under DIFC or ADGM common law, with holding companies and foundations for succession planning that complements your will. Talk to us.',
    keywords: [
      'family trust uae',
      'difc trust setup',
      'adgm trust',
      'wealth structuring dubai',
      'succession planning uae',
      'family wealth structure uae',
    ],
    overview: {
      heading: 'A will says who inherits — a structure decides how it is run',
      body: [
        'A will deals with assets that are still in your name when you die. It does little to set how a family business is run afterwards, how wealth is shared between generations or what happens if an heir is too young or not ready to take over. A trust under the DIFC or ADGM common-law regime answers those questions: a settlor transfers assets to a trustee, who holds them for the beneficiaries under a trust deed, often with a protector overseeing key decisions.',
        'We map the family, the assets and what you want to happen, then design a structure that may combine a trust with holding companies and, where it fits better, a foundation. Our team works alongside qualified legal counsel on the trust deed and letter of wishes, coordinates the appointment of a suitable trustee, and forms the holding companies beneath it. We then manage the transfers of shares and other assets, keep each entity’s registrations and filings in order, and review the structure as the family changes.',
      ],
    },
    stats: [
      { value: 'Settlor', label: 'Creates the trust and transfers the assets' },
      { value: 'Trustee', label: 'Holds and manages the assets for beneficiaries' },
      { value: 'Protector', label: 'Optional oversight of the trustee’s key decisions' },
      { value: 'DIFC/ADGM', label: 'Common-law trust regimes inside the UAE' },
    ],
    benefits: [
      {
        title: 'Succession Beyond the Will',
        desc: 'Assets held in trust are managed under the trust deed after your death, alongside a will that covers what remains in your own name.',
      },
      {
        title: 'Care for Younger Heirs',
        desc: 'Young, inexperienced or vulnerable beneficiaries can benefit over time, with the trustee managing distributions instead of handing over everything at once.',
      },
      {
        title: 'Business Kept Intact',
        desc: 'Holding company shares stay together in one structure, so a family business need not be divided between heirs or sold to settle an estate.',
      },
      {
        title: 'The Right Combination',
        desc: 'Trust, foundation and holding companies each play a different role; we combine only the layers your family’s assets and goals actually need.',
      },
      {
        title: 'Independent Oversight',
        desc: 'A protector can be given powers such as approving distributions or replacing the trustee, adding a check without running the trust day to day.',
      },
      {
        title: 'Legal Work Coordinated',
        desc: 'We work alongside qualified legal counsel on the trust deed and related documents, so the legal drafting and the corporate steps fit together.',
      },
    ],
    process: [
      {
        title: 'Family & Asset Map',
        desc: 'We record the family members involved, the assets and where they are held, and what you want to happen during your lifetime and after it.',
      },
      {
        title: 'Structure Design',
        desc: 'We propose how a trust, holding companies and, where it suits, a foundation fit together, and who should act as trustee and protector.',
      },
      {
        title: 'Deed & Letter of Wishes',
        desc: 'Qualified legal counsel drafts the trust deed under DIFC or ADGM law, with your letter of wishes guiding the trustee; we coordinate reviews until you are comfortable.',
      },
      {
        title: 'Establish & Transfer',
        desc: 'The trustee is appointed, holding companies are formed or restructured, and shares, accounts and other assets are transferred into the structure in the right order.',
      },
      {
        title: 'Administer & Review',
        desc: 'We keep each entity’s licences, registers and tax filings current and revisit the structure after births, marriages, deaths or a business sale.',
      },
    ],
    requirementsHeading: 'Information we’ll need',
    requirements: [
      'Passports and proof of address for the settlor and protector',
      'A family tree showing the intended beneficiaries',
      'A schedule of assets and how each is currently held',
      'Licences and MOAs of the family companies',
      'Source of wealth information',
      'Any existing wills, trusts or family agreements',
      'Your wishes on control, distributions and succession',
    ],
    eligibility: {
      heading: 'When a family trust is worth considering',
      points: [
        'You want a family business to pass on intact rather than be divided',
        'Some beneficiaries are young or need support managing wealth',
        'Your assets sit across several companies and need one ownership point',
        'You want someone independent to oversee how family wealth is used',
        'You want succession arrangements that work alongside a UAE-registered will',
      ],
    },
    included: [
      {
        group: 'Planning & Design',
        desc: 'A structure built around your family, not a template.',
        items: [
          'Family and asset mapping',
          'Trust, foundation and holding company options',
          'Trustee and protector selection support',
          'Succession plan alongside your will',
          'Corporate tax review of each layer',
        ],
      },
      {
        group: 'Documents & Establishment',
        desc: 'Prepared with qualified legal counsel and put into effect.',
        items: [
          'Trust deed drafted with legal counsel',
          'Letter of wishes preparation',
          'Trustee appointment coordination',
          'Holding company formation',
          'Share and asset transfers into the structure',
        ],
      },
      {
        group: 'Administration',
        desc: 'The upkeep that keeps the structure effective.',
        items: [
          'Registers and beneficial ownership records',
          'Licence renewals for holding entities',
          'Corporate tax and accounting filings',
          'Bank and KYC updates',
          'Periodic structure reviews',
        ],
      },
    ],
    faqs: [
      {
        q: 'Can I set up a family trust in the UAE?',
        a: 'Yes. DIFC and ADGM each have a common-law trust regime, so a trust can be created under the law of either centre, with that centre’s courts available to resolve disputes. Assets held by the trustee can include shares in UAE holding companies, investment portfolios, cash and other property, subject to the rules where each asset is registered. Qualified legal counsel drafts the trust deed; we coordinate the structure around it.',
      },
      {
        q: 'Who can act as trustee?',
        a: 'Depending on the regime and the design, the trustee may be a professional trust company or trusted individuals. Acting as a trustee by way of business is a regulated activity in DIFC and ADGM, so a professional trustee must hold the appropriate licence there. The choice affects cost, continuity and how decisions are made. We help you weigh the options and coordinate the appointment with your legal counsel.',
      },
      {
        q: 'Does a trust replace my will?',
        a: 'No — the two work together. Assets you transfer into the trust during your lifetime are governed by the trust deed, while anything still in your own name passes under your will or, without one, under the rules that would otherwise apply. A UAE-registered will usually sits alongside the trust. We work with your legal counsel so the two are consistent and nothing important is left outside both.',
      },
      {
        q: 'Trust, foundation or holding company — which do I need?',
        a: 'Often more than one. A holding company owns the operating businesses and keeps them together; a trust or a foundation sits above it and sets who benefits and who decides. We set out which layers your family’s assets and goals actually need, what each adds in cost and administration, and how they work together — without adding layers for their own sake.',
      },
      {
        q: 'Is a family trust a way to reduce tax?',
        a: 'That is not what we set trusts up for. A trust is about control, continuity and protecting the family’s interests. Each company in the structure still has its own corporate tax registration, returns and records, and transfers into the structure are reviewed for their tax effect before they happen. We keep every entity’s filings in order so the structure stays transparent to the FTA, banks and auditors.',
      },
      {
        q: 'What role does a protector play?',
        a: 'A protector is an optional role, often a trusted adviser or family member, given specific powers in the trust deed — for example consenting to distributions, approving changes to the deed or replacing the trustee. The protector does not manage the assets; that stays with the trustee. Choosing who holds this role, and what powers it carries, is one of the main design decisions we work through with you and your legal counsel.',
      },
    ],
    related: ['foundation-setup', 'holding-company-setup', 'corporate-tax-advisory', 'share-transfer'],
  },

  /* ───────────────────────── TRADE LICENCE ───────────────────────── */
  {
    slug: 'trade-licence',
    category: 'licensing-government',
    navLabel: 'Trade Licence',
    icon: BadgeCheck,
    eyebrow: 'Trade Licensing',
    blurb: 'Licence type, activities & approvals',
    title: 'Trade Licence Application in Dubai & the UAE',
    heroSubtitle:
      'We match what your business actually does to the right licence type and activity codes, line up any external approvals and apply to DET or your free zone — so you hold a licence that covers your real work.',
    heroHighlights: ['Mainland & Free Zone', 'Activity Codes Matched', 'External Approvals Mapped'],
    metaTitle: 'Trade Licence in Dubai | Types & Activities | Smartgic Visa',
    metaDescription:
      'Get the right trade licence in Dubai: commercial, general trading, professional, industrial or tourism, with activity codes and external approvals handled.',
    keywords: [
      'trade licence dubai',
      'how to get a trade licence in dubai',
      'general trading licence dubai',
      'professional licence dubai',
      'commercial licence uae',
      'business activity codes dubai',
    ],
    overview: {
      heading: 'Your licence defines what you are allowed to do',
      body: [
        'A trade licence is not a formality. It lists the activities your business may carry out, and authorities, banks, customs and the FTA all read it. In Dubai mainland the main types are commercial — including general trading — professional, industrial and tourism, and each free zone has its own licence types, typically commercial, service and industrial. Pick the wrong type or activity codes and you may be unable to invoice for your real work, import your goods or add the approvals you need later.',
        'We start from a plain description of what you sell, to whom and where, and translate it into the authority’s activity codes, checking which can be combined on one licence and which need an external approval. We then reserve the trade name, apply for initial approval, submit approval requests to the relevant regulators and complete the licence application with DET or your free zone. Before you start trading, we walk you through what the licence covers, what it does not, and when to amend it.',
      ],
    },
    stats: [
      { value: 'DET', label: 'Issues mainland trade licences in Dubai' },
      { value: 'Activity', label: 'Codes on the licence set what you may do' },
      { value: 'Approvals', label: 'From other authorities for regulated activities' },
      { value: 'Amendable', label: 'Activities can be added or removed later' },
    ],
    benefits: [
      {
        title: 'Activities That Match Reality',
        desc: 'Your activity codes are chosen from what you actually sell and deliver, so invoices, imports and contracts all sit inside your licence.',
      },
      {
        title: 'The Right Licence Type',
        desc: 'Commercial, general trading, professional, industrial or tourism — we explain the differences and the conditions each type carries before you apply.',
      },
      {
        title: 'Compatible Combinations',
        desc: 'We check which activities can share one licence and where a second licence or a branch is the cleaner answer.',
      },
      {
        title: 'Approvals Without Surprises',
        desc: 'Activities in areas such as food, health, education, transport or security are flagged early, with the approving authority and its requirements identified.',
      },
      {
        title: 'Clear Limits Explained',
        desc: 'You know what your licence does not cover — unlisted activities, mainland trading from a free zone, hiring without labour registration — before it becomes a problem.',
      },
      {
        title: 'Room to Grow',
        desc: 'We plan the licence so new activities can be added later by amendment, without forming a new company for each change of direction.',
      },
    ],
    process: [
      {
        title: 'Describe the Business',
        desc: 'You tell us what you sell or provide, to whom, from where and with what premises; we note anything regulated, imported or professionally qualified.',
      },
      {
        title: 'Match the Activity Codes',
        desc: 'We map your business to the authority’s activity list, confirm the licence type, check which activities can be combined and identify any external approvals.',
      },
      {
        title: 'Name & Initial Approval',
        desc: 'We reserve the trade name and apply for initial approval, then submit approval requests to each regulator involved and track them alongside the main application.',
      },
      {
        title: 'Premises & Issue',
        desc: 'With the premises registered — Ejari on the Dubai mainland or a zone lease — and approvals in hand, the licence is issued once fees are paid.',
      },
      {
        title: 'Licence Walk-Through',
        desc: 'We check the issued licence line by line, explain what it permits and what needs a further permit, and diarise renewal and approval expiry dates.',
      },
    ],
    requirements: [
      'A plain description of your products or services',
      'Passport copies of shareholders and the manager',
      'Proposed trade names',
      'Premises details: tenancy, Ejari or free zone package',
      'Professional qualifications for professional or regulated activities, attested where required',
      'Supplier or product details for trading activities, where approvals depend on them',
      'Your existing licence, if you are adding a licence or branch',
    ],
    eligibility: {
      heading: 'When to get licensing advice',
      points: [
        'You are starting a business and are unsure which licence type fits',
        'You want to combine trading with services or manufacturing',
        'Your activity touches food, health, education, transport or security',
        'You are adding a product line or service your current licence does not list',
        'You hold a free zone licence and are starting to win mainland customers',
      ],
    },
    included: [
      {
        group: 'Licence Planning',
        desc: 'Getting the type and activities right before anything is filed.',
        items: [
          'Business activity mapping',
          'Licence type recommendation',
          'Activity combination check',
          'General trading suitability review',
          'Mainland versus free zone licence comparison',
        ],
      },
      {
        group: 'Approvals & Application',
        desc: 'The filings that turn the plan into a licence.',
        items: [
          'Trade name reservation',
          'Initial approval application',
          'External approval submissions',
          'Ejari or zone lease coordination',
          'Licence fee payment and issue',
        ],
      },
      {
        group: 'After Issue',
        desc: 'Keeping the licence accurate as the business changes.',
        items: [
          'Licence walk-through and limits briefing',
          'Renewal and approval expiry tracking',
          'Activity additions by amendment',
          'Establishment card and MOHRE registration',
          'VAT and corporate tax registration check',
        ],
      },
    ],
    faqs: [
      {
        q: 'What types of trade licence are there in Dubai?',
        a: 'On the Dubai mainland, DET issues commercial licences (for trading, including general trading), professional licences (for services, consultancy and skilled crafts), industrial licences (for manufacturing and processing) and tourism licences (for activities such as travel agencies and hotels). Free zones issue their own types, usually commercial or trading, service or professional, and industrial. The type follows from your activities, not the other way round.',
      },
      {
        q: 'What is a general trading licence?',
        a: 'A general trading licence is a commercial licence that lets you trade in a broad range of goods rather than one product group, which suits businesses whose product mix will change. Some goods, such as food, medical products or chemicals, still need their own approvals, and restricted items are excluded. It also carries different fees and conditions from a standard commercial licence, so we check whether you genuinely need it.',
      },
      {
        q: 'How many activities can I have on one licence?',
        a: 'It depends on the authority and the activities. Each authority sets how many activities one licence can carry and which activity groups can be combined, and adding activities can change the fees. Some combinations are not allowed on a single licence at all. We map your activities against the current rules and tell you whether one licence works, or whether a second licence or a branch is cleaner.',
      },
      {
        q: 'Does a trade licence let me hire staff and sponsor visas?',
        a: 'Not on its own. After the licence is issued, the company needs an immigration establishment card and, on the mainland, registration with MOHRE before it can apply for work permits and residence visas; free zone companies register through their zone. The number of visas also depends on your premises or package. We set these up straight after the licence so hiring can start as soon as possible.',
      },
      {
        q: 'What happens if my business does something not listed on the licence?',
        a: 'Carrying out activities that are not on your licence breaches the licensing rules and can lead to fines or other action by the authority, which sets the penalties. It can also cause practical problems: banks may question payments that do not fit your licence, and customs or regulators may refuse transactions. If your business has moved on, the fix is usually a licence amendment to add the activity.',
      },
      {
        q: 'Is a trade licence the same as forming a company?',
        a: 'They are linked but not the same. Company formation creates the legal entity — its owners, legal form and constitutional documents. The trade licence is the authority’s permission for that business to carry out specific activities from specific premises, and it is renewed and amended throughout the company’s life. A sole establishment has no separate legal personality, so for it the licence is, in effect, the business itself.',
      },
    ],
    related: ['mainland-company-formation', 'licence-amendments', 'trade-license-renewals', 'corporate-pro-services'],
  },

  /* ───────────────────────── LICENCE AMENDMENTS ───────────────────────── */
  {
    slug: 'licence-amendments',
    category: 'licensing-government',
    navLabel: 'Licence Amendments',
    icon: FileStack,
    eyebrow: 'Licence Changes',
    blurb: 'Name, activity, address & manager changes',
    title: 'Trade Licence Amendments in Dubai',
    heroSubtitle:
      'Change your trade name, activities, legal form, address, manager or partners on your trade licence — we file the amendment with DET or your free zone, then carry it through to your establishment card, labour file, bank and FTA records.',
    heroHighlights: ['Name, Activity & Address', 'DET & Free Zone Filing', 'Downstream Records Updated'],
    metaTitle: 'Trade Licence Amendment Dubai | Name & Activity | Smartgic Visa',
    metaDescription:
      'Amend your Dubai trade licence — name, activities, legal form, address, manager or partners — and update your establishment card, labour file, bank and FTA.',
    keywords: [
      'trade licence amendment dubai',
      'change trade name dubai',
      'add activity to trade licence',
      'change company address dubai',
      'change manager trade licence uae',
    ],
    overview: {
      heading: 'A licence change is never just one change',
      body: [
        'Your trade licence has to match the business: its name, activities, legal form, address, manager and owners. When any of these changes, the licence must be amended with DET or your free zone — and the change rarely stops there. On the Dubai mainland a new address means a new Ejari and may affect your visa quota, and new activities may need external approvals. Partner and capital changes also require an MOA amendment, and each change must be carried through to every record that depends on it.',
        'We start by mapping everything the change touches, so nothing is left out of step. We reserve a new trade name if needed, register the new tenancy on Ejari, apply for approvals for new activities and draft the resolutions, coordinating partner and capital changes with the MOA amendment so both are filed together. Once the authority issues the amended licence, we update your establishment card and MOHRE file, support the bank’s KYC update and amend your VAT and corporate tax registrations on EmaraTax.',
      ],
    },
    stats: [
      { value: 'DET', label: 'Or your free zone approves each amendment' },
      { value: 'MOA', label: 'Also amended when partners or capital change' },
      { value: 'Ejari', label: 'New tenancy registered for a Dubai address change' },
      { value: 'EmaraTax', label: 'Where VAT and corporate tax details are updated' },
    ],
    benefits: [
      {
        title: 'Every Knock-On Effect Mapped',
        desc: 'Before filing, we list each record the change touches — approvals, Ejari, visas, bank, tax — so nothing is left showing old details.',
      },
      {
        title: 'Trade Name Changes',
        desc: 'A new name is checked against the naming rules and reserved, then carried through to the licence, MOA, establishment card, bank and invoices.',
      },
      {
        title: 'Activities Added Correctly',
        desc: 'New activities are matched to the right codes and checked for compatibility and external approvals before the amendment is submitted.',
      },
      {
        title: 'Office Moves Planned',
        desc: 'When you change premises, the new Ejari and the visa quota it supports are planned so existing visas and new hires are not disrupted.',
      },
      {
        title: 'Ownership Changes in Step',
        desc: 'Partner, shareholding and capital changes are filed together with the MOA amendment, so the licence and the MOA stay consistent.',
      },
      {
        title: 'Tax and Bank Records Aligned',
        desc: 'We update your VAT and corporate tax registration details on EmaraTax and support the bank’s KYC refresh, so payments and filings continue under the new details.',
      },
    ],
    process: [
      {
        title: 'Change Review',
        desc: 'We confirm exactly what is changing and list everything it affects — approvals, Ejari, MOA, visa quota, bank mandates, VAT and corporate tax registrations.',
      },
      {
        title: 'Preparatory Steps',
        desc: 'We reserve a new trade name, register the new tenancy, apply for external approvals or draft resolutions — whichever the change requires — and arrange notarisation where needed.',
      },
      {
        title: 'Authority Filing',
        desc: 'We submit the amendment application to DET or your free zone, with the MOA amendment alongside where partners or capital change, and pay the authority’s fees.',
      },
      {
        title: 'Amended Licence',
        desc: 'The authority issues the updated licence. We check every changed detail against what was approved before you share it with banks or customers.',
      },
      {
        title: 'Downstream Updates',
        desc: 'We update the establishment card and MOHRE file, support the bank’s KYC update, amend FTA registration details on EmaraTax and update your UBO register if control changed.',
      },
    ],
    requirements: [
      'Current trade licence and MOA',
      'Passports and Emirates IDs of the partners and manager',
      'Details of the change you want to make',
      'The new tenancy contract, for an address change',
      'Proposed new trade names, for a name change',
      'Qualifications or approvals for new regulated activities',
      'Partners’ resolution approving the change (we draft it)',
      'EmaraTax access, or authorisation for us to update it',
    ],
    eligibility: {
      heading: 'Changes that need a licence amendment',
      points: [
        'A new trade name or brand on the licence',
        'Adding or removing business activities',
        'Converting the legal form, such as establishment to LLC',
        'Moving to a new office, shop or warehouse',
        'Appointing or replacing the manager',
        'Admitting or removing partners, or changing capital (with an MOA amendment)',
      ],
    },
    included: [
      {
        group: 'Licence Changes',
        desc: 'The amendments themselves, filed with the right authority.',
        items: [
          'Trade name change and reservation',
          'Activity additions and removals',
          'Legal form conversion',
          'Address and Ejari change',
          'Manager appointment or replacement',
        ],
      },
      {
        group: 'Linked Approvals & Documents',
        desc: 'What the authority needs before it will amend.',
        items: [
          'External approvals for new activities',
          'Partner and board resolutions',
          'MOA amendment for partner or capital changes',
          'Notarisation and attestation where required',
          'Authority fees and application tracking',
        ],
      },
      {
        group: 'Downstream Alignment',
        desc: 'The change carried through to every record that depends on it.',
        items: [
          'Establishment card update',
          'MOHRE labour file update',
          'Bank KYC and mandate update support',
          'VAT and corporate tax details on EmaraTax',
          'UBO register update',
          'Customs code and other registrations',
        ],
      },
    ],
    faqs: [
      {
        q: 'When does a licence change also need the MOA amended?',
        a: 'Whenever the change touches the company’s constitution. Admitting or removing partners, changing shareholdings or capital, and converting the legal form all need an MOA, or an amendment to it, alongside the licence amendment. For an LLC, a new trade name or manager is usually reflected in the MOA as well. Whether an address or activity change also needs one depends on the authority and on what your MOA says. We confirm the route before drafting.',
      },
      {
        q: 'How do I change my company’s trade name in Dubai?',
        a: 'You reserve a new name that meets the authority’s naming rules and is not already taken, then apply to amend the licence; for an LLC, the MOA is amended too. Once the new licence is issued, the name must be updated with immigration, MOHRE, your bank, the FTA and any customs or other registrations, as well as on invoices, contracts and signage. We handle the filings and give you a checklist for the rest.',
      },
      {
        q: 'Will moving office affect my visas?',
        a: 'It can. On the Dubai mainland, the visa quota follows the size of the premises registered on Ejari, so moving to a smaller space can reduce the number of visas the company can sponsor. The establishment card is updated with the new address; existing visas generally continue, but new applications may be limited. We compare the new space with your current and planned visas before you sign the lease.',
      },
      {
        q: 'Do I need to tell the FTA and my bank about licence changes?',
        a: 'Yes. Your VAT and corporate tax registrations must reflect your current name, address, activities and authorised signatories, and changes should be submitted on EmaraTax within the deadline the FTA sets. Banks also expect an updated licence and, where ownership or management changes, fresh KYC and possibly new mandates. We file the FTA amendments and prepare the documents your bank asks for.',
      },
      {
        q: 'Can I amend my licence if it has expired?',
        a: 'Usually not until it is renewed. Most authorities require a valid licence before they process an amendment, so an expired licence is renewed first or, where the authority allows, renewed and amended together. Renewal time is often a practical moment to make changes anyway, since documents and tenancy are being refreshed. We check the status of your licence and sequence the two.',
      },
      {
        q: 'Can I change the manager without changing the owners?',
        a: 'Yes. The partners resolve to replace the manager, and the licence is then amended — for an LLC, the MOA or the manager record held by the authority is usually updated too. The new manager must then be reflected with immigration and MOHRE, and as a signatory with the bank and on EmaraTax where relevant. If the outgoing manager holds a visa linked to that role, it may need to change as well.',
      },
    ],
    related: ['moa-amendments', 'share-transfer', 'trade-license-renewals', 'corporate-pro-services'],
  },

  /* ───────────────────────── LICENCE CANCELLATION ───────────────────────── */
  {
    slug: 'licence-cancellation',
    category: 'licensing-government',
    navLabel: 'Licence Cancellation',
    icon: FileX2,
    eyebrow: 'Licence Closure',
    blurb: 'Close establishments, branches & FZ licences',
    title: 'Trade Licence Cancellation in Dubai & the UAE',
    heroSubtitle:
      'We close a sole establishment, civil company, branch or free zone licence properly — cancelling visas and work permits, collecting clearances, clearing dues and deregistering VAT and corporate tax — until the final cancellation certificate is issued.',
    heroHighlights: ['Establishments & Branches', 'Visas & Permits Cancelled', 'VAT & Tax Deregistration'],
    metaTitle: 'Trade Licence Cancellation Dubai & UAE | Smartgic Visa',
    metaDescription:
      'Cancel a sole establishment, civil company, branch or free zone licence in Dubai: visas, clearances, and VAT and corporate tax deregistration handled in order.',
    keywords: [
      'trade licence cancellation dubai',
      'cancel sole establishment licence',
      'branch licence cancellation uae',
      'free zone licence cancellation',
      'close business dubai',
    ],
    overview: {
      heading: 'Closing a licence properly is a sequence, not a form',
      body: [
        'A trade licence cannot simply be left to expire. Until it is formally cancelled, renewal fines can build up, the establishment card and any visas stay linked to you, and tax registrations stay open. Cancelling a sole establishment, civil company, branch or free zone licence means working through a set order: employee visas and work permits, immigration and labour clearances, outstanding dues, the office exit, VAT and corporate tax deregistration and the bank account. An LLC is different — it normally needs a formal liquidation instead.',
        'We first confirm the right route for your legal form and authority, then list every visa, permit, registration and contract tied to the licence. We cancel employee visas and work permits once final pay and end-of-service gratuity are settled, collect immigration and labour clearances, arrange payment of outstanding fines and fees, terminate the Ejari and utilities, and deregister VAT and corporate tax with the FTA. When every clearance is in, we file the cancellation and collect the final cancellation certificate.',
      ],
    },
    stats: [
      { value: 'LLC', label: 'Normally needs formal liquidation, not simple cancellation' },
      { value: '20', label: 'Business days to apply for VAT deregistration' },
      { value: '3 months', label: 'To apply for corporate tax deregistration after ceasing' },
      { value: 'Clearance', label: 'From immigration, labour and every linked authority' },
    ],
    benefits: [
      {
        title: 'The Right Route First',
        desc: 'We confirm whether your licence can be cancelled directly or needs liquidation, so you do not start the wrong process with the authority.',
      },
      {
        title: 'Staff Treated Correctly',
        desc: 'Final salaries and end-of-service gratuity are calculated under the UAE Labour Law and paid before work permits and visas are cancelled.',
      },
      {
        title: 'Visas in the Right Order',
        desc: 'Dependants’ visas are cancelled before their sponsor’s, and everyone is told when their status ends so nobody overstays by accident.',
      },
      {
        title: 'Every Clearance Collected',
        desc: 'Immigration, labour, customs, utilities and landlord clearances are gathered in sequence, so the cancellation application is complete when it is filed.',
      },
      {
        title: 'Tax Registrations Closed',
        desc: 'VAT and corporate tax deregistration are applied for within the statutory windows — 20 business days for VAT, 3 months for corporate tax — with final returns filed.',
      },
      {
        title: 'A Clean Final Certificate',
        desc: 'Once everything is cleared, the authority issues the cancellation certificate — the document that shows banks and future authorities the licence is closed.',
      },
    ],
    process: [
      {
        title: 'Route & Inventory',
        desc: 'We confirm the cancellation route for your legal form and authority, and list every visa, permit, registration, contract and account linked to the licence.',
      },
      {
        title: 'Staff, Visas & Permits',
        desc: 'Final pay and gratuity are settled, then work permits and residence visas are cancelled — dependants before sponsors — or staff move to new employers by transfer.',
      },
      {
        title: 'Clearances & Dues',
        desc: 'We settle outstanding fines and fees, cancel the establishment card and labour file, end the Ejari and utilities, and collect each clearance the authority asks for.',
      },
      {
        title: 'Tax Deregistration',
        desc: 'We file the final VAT and corporate tax returns, settle any liabilities and apply on EmaraTax to deregister within the statutory windows.',
      },
      {
        title: 'Final Cancellation',
        desc: 'We submit the cancellation to DET or your free zone, collect the cancellation certificate and arrange the bank account closure, in the order your authority requires.',
      },
    ],
    requirements: [
      'Original trade licence and establishment card details',
      'Passports and Emirates IDs of the owner or partners',
      'A list of employees, their visas and any dependants sponsored',
      'Tenancy contract and landlord contact for the Ejari exit',
      'Owner’s or partners’ resolution to cancel (we draft it)',
      'Attested parent company resolution, for a branch',
      'EmaraTax access and recent VAT and corporate tax returns',
      'Bank account details and any outstanding loans or cheques',
    ],
    eligibility: {
      heading: 'Which licences this covers',
      points: [
        'Sole establishments on the mainland',
        'Civil companies of professional partners',
        'Branches of UAE or foreign companies',
        'Free zone licences, where the zone allows direct deregistration',
        'Not LLCs — these normally need formal liquidation instead',
      ],
    },
    included: [
      {
        group: 'People & Permits',
        desc: 'Closing everything that ties people to the licence.',
        items: [
          'Final settlement and gratuity calculation',
          'Work permit cancellations',
          'Employee and dependant visa cancellations',
          'Visa transfer support for staff moving on',
          'Owner or partner visa cancellation',
        ],
      },
      {
        group: 'Clearances & Dues',
        desc: 'The sign-offs each authority needs before it will cancel.',
        items: [
          'Fine and fee assessment and payment',
          'Establishment card cancellation',
          'MOHRE labour file closure',
          'Customs code cancellation',
          'Ejari termination and utility closure',
        ],
      },
      {
        group: 'Tax, Bank & Final Certificate',
        desc: 'The steps that make the closure complete.',
        items: [
          'Final VAT and corporate tax returns',
          'VAT deregistration on EmaraTax',
          'Corporate tax deregistration',
          'Bank account closure support',
          'Licence cancellation certificate',
          'Record-keeping guidance (7 years)',
        ],
      },
    ],
    faqs: [
      {
        q: 'Can I cancel an LLC licence without liquidation?',
        a: 'Normally not. An LLC is a separate legal entity, so under the Commercial Companies Law it is closed through a formal liquidation: the partners resolve to dissolve it, a registered liquidator is appointed, creditors are notified and a liquidator’s report is prepared before the licence is cancelled. Sole establishments, civil companies and branches usually follow a cancellation route instead, with the exact steps set by the authority. Our liquidation service handles LLC closures.',
      },
      {
        q: 'What happens to my employees’ visas when I cancel the licence?',
        a: 'Every work permit and residence visa sponsored by the business has to be cancelled, or the employee moved to a new employer by transfer, before the licence can be cancelled. Final salaries and end-of-service gratuity are settled first under the UAE Labour Law. Dependants’ visas must be cancelled before their sponsor’s. We tell each person when their status ends so they can arrange a new visa or exit in time.',
      },
      {
        q: 'Do I need to deregister from VAT and corporate tax?',
        a: 'Yes, if the business is registered. VAT deregistration must be applied for within 20 business days of becoming required, for example after you stop making taxable supplies. Corporate tax deregistration must be applied for within 3 months of the business ceasing, and the FTA will only approve it once all returns are filed and liabilities settled. Late applications can attract penalties, which the FTA sets.',
      },
      {
        q: 'My licence has already expired — can I still cancel it?',
        a: 'Usually, yes. Outstanding renewal fees and fines generally have to be settled first, and some authorities ask for the licence to be renewed before it can be cancelled. The longer an expired licence is left, the more can build up against it, so it is worth starting promptly. We find out exactly what is owed and what the authority requires, then work through the cancellation from there.',
      },
      {
        q: 'How is a branch licence cancelled?',
        a: 'The parent company passes a resolution to close the branch, notarised and, if issued abroad, attested and legalised for use in the UAE. The branch then goes through the same visa, labour, immigration and tax steps as any other licence, and its liabilities must be settled — the parent remains responsible for them. Some authorities also ask for audited accounts or a public notice before they issue the cancellation.',
      },
      {
        q: 'How does cancelling a free zone licence differ?',
        a: 'Each free zone runs its own closure process. Some deregister a company on an application with clearances, while others require a liquidator, a public notice and audited or final accounts, much like a mainland LLC. Visas, the establishment card and the lease or flexi-desk are cancelled through the zone itself rather than through MOHRE. We confirm your zone’s current requirements before anything is filed.',
      },
    ],
    related: ['liquidation-deregistration', 'visa-cancellation', 'vat-deregistration', 'corporate-tax-deregistration'],
  },
];
