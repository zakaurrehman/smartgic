import { BadgeCheck, ClipboardCheck, Compass, FileSpreadsheet, FileX2, Network } from 'lucide-react';
import type { Service } from '../service-types';

/*
 * Corporate tax services (category: tax-services).
 * Statutory figures are limited to the content brief’s fact sheet. Fees, penalty
 * amounts, processing times and thresholds set by the authority are never stated.
 */
export const corporateTaxServices: Service[] = [
  /* ───────────────────────── CORPORATE TAX REGISTRATION ───────────────────────── */
  {
    slug: 'corporate-tax-registration',
    category: 'tax-services',
    navLabel: 'Corporate Tax Registration',
    icon: ClipboardCheck,
    eyebrow: 'Corporate Tax',
    blurb: 'EmaraTax application and your TRN',
    title: 'Corporate Tax Registration in Dubai & the UAE',
    heroSubtitle:
      'We register your company for UAE corporate tax on EmaraTax — mainland, free zone or offshore — check the deadline the FTA sets for your incorporation date, and see the application through until your Tax Registration Number is issued.',
    heroHighlights: ['Free Zone & Offshore Too', 'TRN Issued by the FTA', 'First-Year Plan Included'],
    metaTitle: 'Corporate Tax Registration UAE | EmaraTax & TRN | Smartgic Visa',
    metaDescription:
      'Corporate tax registration in the UAE for mainland, free zone and offshore companies — EmaraTax application, FTA deadline check and TRN. Avoid late penalties.',
    keywords: [
      'corporate tax registration uae',
      'corporate tax registration dubai',
      'emaratax corporate tax registration',
      'corporate tax trn uae',
      'free zone corporate tax registration',
      'corporate tax registration deadline uae',
    ],
    overview: {
      heading: 'Registration comes first — even when no tax is due',
      body: [
        'Companies incorporated in the UAE — mainland, free zone and offshore — are taxable persons for corporate tax and must register with the Federal Tax Authority whether or not they make a profit. Individuals running a business must register too once their business turnover exceeds AED 1 million in a calendar year. The FTA sets a registration deadline based on your incorporation or licence date, and registering late attracts a penalty even when no tax would have been payable.',
        'Smartgic handles the registration end to end. We confirm which company — or which individual — needs to register and check the deadline that applies to you. We then prepare your documents, set up or use your EmaraTax account, submit the application and answer any FTA follow-up questions until your Tax Registration Number is issued. Before we close the file, we flag the decisions that come next: Small Business Relief, your bookkeeping set-up and the date your first return falls due.',
      ],
    },
    stats: [
      { value: 'FTA', label: 'Sets your deadline by incorporation or licence date' },
      { value: 'EmaraTax', label: 'The FTA portal where you apply' },
      { value: '0%', label: 'Up to AED 375,000 of taxable income — still register' },
      { value: 'AED 1 million', label: 'Calendar-year business turnover above which individuals are taxable' },
    ],
    benefits: [
      {
        title: 'Right Taxable Person',
        desc: 'We confirm who the taxable person is — the company itself, or you personally as a sole trader — so the registration sits in the right name.',
      },
      {
        title: 'Deadline Worked Out',
        desc: 'We work out the deadline the FTA has set for your incorporation or licence date, and tell you plainly if it has already passed.',
      },
      {
        title: 'Clean Application Data',
        desc: 'Licence, ownership, manager and contact details are checked against your documents, so the FTA has fewer reasons to send the application back.',
      },
      {
        title: 'EmaraTax Account in Order',
        desc: 'We create or tidy your EmaraTax account and taxable person profile, with the right authorised signatory and contact details for future FTA notices.',
      },
      {
        title: 'FTA Queries Answered',
        desc: 'If the FTA asks for more information or clearer documents, we prepare the response and resubmit, keeping you informed at each step.',
      },
      {
        title: 'A Plan for Year One',
        desc: 'With your TRN comes a short note on Small Business Relief, the records to keep and when your first return is due.',
      },
    ],
    process: [
      {
        title: 'Scope & Deadline Check',
        desc: 'We confirm who must register — the company, or you personally if you trade as an individual — and check the deadline the FTA has set for your incorporation or licence date.',
      },
      {
        title: 'Documents & EmaraTax Profile',
        desc: 'You send the licence, MOA and owner and manager IDs. We check them for consistency and create or update your EmaraTax account and taxable person profile.',
      },
      {
        title: 'Application Submitted',
        desc: 'We complete the corporate tax registration form — entity details, licences, owners, business activities and authorised signatory — and submit it through your EmaraTax account for FTA review.',
      },
      {
        title: 'FTA Review & TRN',
        desc: 'We track the application and answer any request for further information. Once the FTA approves it, we send you the registration certificate showing your Tax Registration Number.',
      },
      {
        title: 'First-Year Set-Up',
        desc: 'We map out your first tax period and its return deadline, check whether Small Business Relief could apply, and agree how your books will be kept from here.',
      },
    ],
    eligibility: {
      heading: 'Who must register',
      points: [
        'Mainland companies in every emirate, whatever their size',
        'Free zone companies — including those planning to claim QFZP status',
        'UAE offshore companies, such as those registered with RAK ICC, JAFZA Offshore or Ajman Offshore',
        'Companies that are loss-making, dormant or yet to earn revenue',
        'Individuals whose business turnover exceeds AED 1 million in a calendar year',
      ],
    },
    requirements: [
      'Trade licence, plus any branch licences',
      'MOA or articles of association (or certificate of incorporation)',
      'Passports and Emirates IDs of owners and managers',
      'Authorised signatory’s ID and proof of authority',
      'Financial year end and first tax period dates',
      'Registered address, email and mobile number for FTA notices',
      'For individuals: Emirates ID, passport and business turnover figures',
    ],
    included: [
      {
        group: 'Eligibility & Deadline',
        desc: 'Who registers, and by when.',
        items: [
          'Taxable person assessment — company or individual',
          'Registration deadline check for your licence date',
          'Free zone and offshore entity review',
          'Turnover test for sole traders and freelancers',
          'Late-registration exposure review',
        ],
      },
      {
        group: 'EmaraTax Application',
        desc: 'A complete, consistent application with nothing missing.',
        items: [
          'EmaraTax account and taxable person profile',
          'Document check and preparation',
          'Ownership and authorised signatory details',
          'Business activity and licence mapping',
          'Application submission and tracking',
          'Responses to FTA information requests',
        ],
      },
      {
        group: 'After Your TRN',
        desc: 'The first-year decisions registration sets in motion.',
        items: [
          'Registration certificate and TRN on file',
          'Small Business Relief eligibility check',
          'First tax period and return deadline',
          'Bookkeeping and record-keeping set-up',
          'VAT registration review, if relevant',
        ],
      },
    ],
    faqs: [
      {
        q: 'My company isn’t profitable yet — do I still register?',
        a: 'Yes. Registration depends on being a taxable person, not on making a profit, so loss-making, dormant and newly formed companies register too. The 0% rate on taxable income up to AED 375,000 is applied when you file — it doesn’t remove the duty to register. Missing the deadline attracts a penalty even if no tax would have been due.',
      },
      {
        q: 'Do free zone and offshore companies have to register?',
        a: 'Yes. Free zone companies register and file like any other company, even if they expect to pay 0% as a Qualifying Free Zone Person — that status is applied through the return each tax period, not in place of registering. UAE offshore companies, such as those set up with RAK ICC or JAFZA Offshore, are UAE-incorporated and fall within corporate tax too.',
      },
      {
        q: 'When is my corporate tax registration deadline?',
        a: 'The FTA sets registration deadlines according to when a company was incorporated or its licence was issued, with separate rules for individuals. Because the deadline depends on your own dates, we check it against the FTA’s current rules at the start of every engagement. If it has already passed, register promptly: the late-registration penalty is set by the FTA, and every later filing depends on having a TRN.',
      },
      {
        q: 'I’m a freelancer or sole establishment owner — do I need to register?',
        a: 'You register as an individual once your business turnover exceeds AED 1 million in a calendar year. The registration is in your own name, because a sole establishment isn’t a separate legal person. Salary and personal investment income don’t count towards that figure. If you run more than one business, the turnover is added together, so we review all your licences before deciding.',
      },
      {
        q: 'What do I receive once registration is approved?',
        a: 'The FTA issues your Tax Registration Number, and the registration certificate can be downloaded from your EmaraTax account. Your TRN goes on your corporate tax returns and FTA correspondence. Your tax period — normally your financial year — then sets when your first return is due: within 9 months of the end of that period.',
      },
      {
        q: 'How long does the FTA take to approve a registration?',
        a: 'Processing times are set by the FTA and vary, particularly when it needs more information from you. Delays usually come from incomplete or inconsistent applications — a licence that doesn’t match the MOA, or an authorised signatory without proof of authority — so we check those points before submitting and respond quickly to any FTA request.',
      },
    ],
    related: ['corporate-tax-filing', 'vat-registration', 'bookkeeping-services', 'free-zone-company-formation'],
  },

  /* ───────────────────────── CORPORATE TAX RETURN FILING ───────────────────────── */
  {
    slug: 'corporate-tax-filing',
    category: 'tax-services',
    navLabel: 'Corporate Tax Return Filing',
    icon: FileSpreadsheet,
    eyebrow: 'Corporate Tax',
    blurb: 'Annual return, computation and payment',
    title: 'Corporate Tax Return Filing in the UAE',
    heroSubtitle:
      'We build your corporate tax computation from your accounts — adjustments, exemptions, reliefs and losses — then prepare and submit your annual return through your EmaraTax account, with the tax payable confirmed before the deadline.',
    heroHighlights: ['Computation From Accounts', 'Reliefs & Losses Applied', 'QFZP & Tax Group Returns'],
    metaTitle: 'UAE Corporate Tax Return Filing & Computation | Smartgic Visa',
    metaDescription:
      'Corporate tax return filing in the UAE — computation from your accounts, Small Business Relief and QFZP claims, filed on EmaraTax before the 9-month deadline.',
    keywords: [
      'corporate tax return filing uae',
      'corporate tax filing dubai',
      'uae corporate tax return deadline',
      'corporate tax computation uae',
      'small business relief election uae',
      'emaratax corporate tax return',
    ],
    overview: {
      heading: 'A return is only as good as the computation behind it',
      body: [
        'Every registered taxable person files an annual corporate tax return — including companies with nil tax or claiming Small Business Relief — and pays any tax due within 9 months of the end of the tax period. The return doesn’t start from revenue: it starts from the accounting profit in your financial statements, then adjusts for non-deductible costs, exempt income, reliefs and losses brought forward. Mistakes in those adjustments are what lead to underpaid tax, penalties and FTA queries.',
        'Smartgic prepares the computation line by line from your accounts, applies the elections and reliefs you qualify for, and documents every adjustment in working papers you can show the FTA. We check Small Business Relief eligibility, prepare QFZP and tax group computations, and coordinate the audit or transfer pricing disclosure where the rules require one. You review and approve the figures; we prepare and submit the return through your EmaraTax account and confirm what to pay, and by when.',
      ],
    },
    stats: [
      { value: '9 months', label: 'After the tax period ends to file and pay' },
      { value: '9%', label: 'On taxable income above AED 375,000' },
      { value: '75%', label: 'Of taxable income that brought-forward losses can offset' },
      { value: '7 years', label: 'Minimum record retention after each tax period' },
    ],
    benefits: [
      {
        title: 'Computation You Can Defend',
        desc: 'Every adjustment from accounting profit to taxable income is reconciled and explained in working papers, ready if the FTA asks how a figure was reached.',
      },
      {
        title: 'Reliefs Not Left Unclaimed',
        desc: 'We check exempt dividends and gains, qualifying group and restructuring reliefs, and losses brought forward, so you pay only the tax the law requires.',
      },
      {
        title: 'Small Business Relief Tested',
        desc: 'If your revenue is AED 3 million or less, we confirm whether you can elect the relief for the period and what electing it means.',
      },
      {
        title: 'Free Zone Income Split',
        desc: 'For Qualifying Free Zone Persons we separate qualifying from non-qualifying income, so 0% and 9% are each applied to the right figures.',
      },
      {
        title: 'Deadline and Payment Covered',
        desc: 'We plan the work back from your filing deadline and confirm the amount and payment route, so the return and the tax arrive on time together.',
      },
      {
        title: 'Records Kept in Order',
        desc: 'Working papers, elections and schedules are archived with your return, so the records you must keep for at least 7 years are complete.',
      },
    ],
    process: [
      {
        title: 'Year-End Data Request',
        desc: 'We request your financial statements, trial balance, fixed asset register and related-party details, and confirm whether an audit or transfer pricing disclosure is needed for the period.',
      },
      {
        title: 'Tax Computation',
        desc: 'Starting from accounting profit, we make the adjustments, apply exempt income, reliefs and elections, offset losses within the 75% limit, and calculate tax at 0% and 9%.',
      },
      {
        title: 'Your Review & Approval',
        desc: 'You receive the draft return with a plain-English summary of each adjustment. We answer your questions and update the figures before you approve the final version.',
      },
      {
        title: 'Submission & Payment',
        desc: 'We prepare and submit the return through your EmaraTax account, with any disclosure forms attached, and confirm the tax payable and how to pay it before the deadline.',
      },
      {
        title: 'Archive & Next Year',
        desc: 'We archive the computation and working papers, note losses and elections carrying into next year, and diarise your next filing deadline.',
      },
    ],
    eligibility: {
      heading: 'Who files a corporate tax return',
      points: [
        'Every company registered for corporate tax, including free zone and offshore companies',
        'Companies with a loss, nil taxable income or tax at 0%',
        'Businesses electing Small Business Relief for the period',
        'Tax groups, which file one return through the parent company',
        'Individuals registered because their business turnover exceeded AED 1 million',
      ],
    },
    requirements: [
      'Financial statements for the tax period (audited where required)',
      'Trial balance and general ledger',
      'Fixed asset register and depreciation schedule',
      'Related-party and connected-person transaction details',
      'Previous returns and losses brought forward',
      'Dividend, shareholding and investment details',
      'Free zone licence and substance evidence, if claiming QFZP status',
      'EmaraTax access for the authorised user',
    ],
    included: [
      {
        group: 'Computation & Return',
        desc: 'From the profit in your accounts to the figure on the return.',
        items: [
          'Accounting-to-taxable-income reconciliation',
          'Non-deductible and partly deductible expense review',
          'Exempt income and participation exemption',
          'Loss carry-forward within the 75% limit',
          'Small Business Relief eligibility and election',
          'Return preparation and EmaraTax submission',
        ],
      },
      {
        group: 'Specialist Computations',
        desc: 'Returns that need more than a standard computation.',
        items: [
          'QFZP qualifying and non-qualifying income split',
          'Tax group consolidated return',
          'Transfer pricing disclosure form, where required',
          'Audited financial statements coordination',
          'Interest deduction limitation check',
        ],
      },
      {
        group: 'Payment & Aftercare',
        desc: 'Everything that follows the submission.',
        items: [
          'Tax payable confirmation and payment guidance',
          'Working papers archive for the retention period',
          'Voluntary disclosure if an error surfaces later',
          'Responses to FTA queries on the return',
          'Next-period deadline and data calendar',
        ],
      },
    ],
    faqs: [
      {
        q: 'When is the corporate tax return due?',
        a: 'The return must be filed, and any tax paid, within 9 months of the end of your tax period, which is usually your financial year. For a financial year ending 31 December, that means filing and paying by 30 September the following year. There are no quarterly corporate tax returns — it is one annual return per tax period.',
      },
      {
        q: 'Do I have to file if my company made a loss?',
        a: 'Yes. A return is due for every tax period, even when the result is a loss or nil tax. Filing is also how the loss is established for later use: tax losses can be carried forward and set against up to 75% of taxable income in a later period, subject to conditions such as continuity of ownership or of the business.',
      },
      {
        q: 'How do I claim Small Business Relief?',
        a: 'Small Business Relief is elected in the return itself. If you are a resident business with revenue of AED 3 million or less, you can elect to be treated as having no taxable income for tax periods ending on or before 31 December 2026. It is not available to Qualifying Free Zone Persons or members of large multinational groups, and you still file the return and keep records.',
      },
      {
        q: 'Do I need audited financial statements to file?',
        a: 'For corporate tax, audited statements are required if your revenue is above AED 50 million or you are a Qualifying Free Zone Person — and your licensing authority may require an audit anyway. Otherwise you file from financial statements prepared under IFRS, or IFRS for SMEs where revenue is under AED 50 million. Audits are carried out and signed by UAE-registered auditors independent of your bookkeeping; we manage the engagement.',
      },
      {
        q: 'What if I find a mistake after filing?',
        a: 'Errors in a submitted return are corrected through a voluntary disclosure on EmaraTax. Correcting a mistake yourself is generally treated better than the FTA finding it in an audit, so it pays to act once an error is spotted. We quantify the difference, prepare the disclosure and supporting reconciliation, and confirm any additional tax to pay. Penalties are set by the FTA and depend on the circumstances.',
      },
      {
        q: 'Can I use the corporate tax calculator to work out my tax?',
        a: 'The calculator gives a quick estimate by applying 0% up to AED 375,000 and 9% above it. Your actual liability depends on the computation that produces your taxable income — non-deductible costs, exempt income, reliefs, losses brought forward and elections such as Small Business Relief. Treat the result as a guide, then let us build the full computation from your accounts.',
      },
    ],
    related: ['corporate-tax-registration', 'accounting-services', 'external-audit', 'transfer-pricing'],
    tool: 'corporate-tax-calculator',
  },

  /* ───────────────────────── CORPORATE TAX ADVISORY ───────────────────────── */
  {
    slug: 'corporate-tax-advisory',
    category: 'tax-services',
    navLabel: 'Corporate Tax Advisory',
    icon: Compass,
    eyebrow: 'Corporate Tax',
    blurb: 'QFZP, reliefs, tax groups and health checks',
    title: 'Corporate Tax Advisory for UAE Businesses',
    heroSubtitle:
      'We advise on the decisions that change your corporate tax position — QFZP status, Small Business Relief, tax groups, exemptions and restructures — review past filings for errors, and support you when the FTA asks questions.',
    heroHighlights: ['QFZP Assessments', 'Tax Groups & Exemptions', 'Health Checks & FTA Audits'],
    metaTitle: 'Corporate Tax Advisory UAE | QFZP & Health Checks | Smartgic Visa',
    metaDescription:
      'Corporate tax advisory in the UAE — QFZP tests, Small Business Relief planning, tax groups, health checks of past returns and FTA audit support. Talk to us.',
    keywords: [
      'corporate tax advisory uae',
      'corporate tax consultant dubai',
      'qualifying free zone person assessment',
      'uae tax group corporate tax',
      'corporate tax health check uae',
      'fta tax audit support uae',
    ],
    overview: {
      heading: 'The big corporate tax numbers are decided before the return',
      body: [
        'Much of your corporate tax position is settled long before the return is filed — by whether your free zone company really meets the QFZP conditions, whether Small Business Relief still applies, how group companies are owned and how related parties charge each other. These choices carry conditions, and getting one wrong can cost more than a single year’s tax. With Small Business Relief unavailable for tax periods ending after 31 December 2026, many businesses face these questions now.',
        'Smartgic gives you written, practical advice on these decisions and the evidence to support them. We assess QFZP status condition by condition, plan for life after Small Business Relief, test tax group and participation exemption options, and review related-party and connected-person arrangements. Our health checks review past filings against your accounts and the law, so errors can be corrected through a voluntary disclosure before the FTA finds them — and when the FTA does write, we help you respond.',
      ],
    },
    stats: [
      { value: '95%', label: 'Common ownership needed to form a tax group' },
      { value: '5%', label: 'Shareholding broadly needed for participation exemption' },
      { value: '31 Dec 2026', label: 'Latest period end eligible for Small Business Relief' },
      { value: '0% / 9%', label: 'QFZP rates on qualifying and other income' },
    ],
    benefits: [
      {
        title: 'QFZP Status Tested',
        desc: 'We test substance, qualifying activities and income, audited accounts and transfer pricing before you rely on 0%, not after the FTA questions it.',
      },
      {
        title: 'Planning Beyond Small Business Relief',
        desc: 'Relief only covers tax periods ending on or before 31 December 2026, so we plan your books, computation and cash flow for the periods after.',
      },
      {
        title: 'Group Options Compared',
        desc: 'We test whether a tax group, participation exemption or qualifying group relief suits your companies, and what conditions and liabilities come with each.',
      },
      {
        title: 'Related Parties in Order',
        desc: 'Payments to owners, directors and group companies are reviewed against the arm’s-length and market-value rules before they become a deductibility problem.',
      },
      {
        title: 'Mistakes Caught Early',
        desc: 'A health check compares past returns with your accounts and the law, so mistakes are corrected by voluntary disclosure rather than discovered in an audit.',
      },
      {
        title: 'Support When the FTA Asks',
        desc: 'When the FTA queries a return or opens an audit, we prepare reconciliations and responses within the time it allows and keep every submission consistent.',
      },
    ],
    process: [
      {
        title: 'Scoping Call',
        desc: 'We discuss your structure, the decision or concern behind the request and any FTA correspondence, then agree the questions to answer and the documents we need.',
      },
      {
        title: 'Review & Analysis',
        desc: 'We work through your accounts, filings, agreements and ownership records against the Corporate Tax Law and the FTA’s published guidance, testing each condition that applies.',
      },
      {
        title: 'Written Advice',
        desc: 'You receive a clear memo: our findings, the options open to you, the tax effect of each, and the evidence you’ll need to support the position.',
      },
      {
        title: 'Implementation',
        desc: 'We help put the decision into effect — elections, tax group applications, voluntary disclosures, clarification requests, agreements or policy changes — and update your compliance calendar.',
      },
      {
        title: 'Ongoing Support',
        desc: 'As your business changes, or when the FTA asks questions, we revisit the analysis and help you respond with consistent figures and documents.',
      },
    ],
    eligibility: {
      heading: 'When to get corporate tax advice',
      points: [
        'Your free zone company plans to apply 0% as a Qualifying Free Zone Person',
        'You have relied on Small Business Relief and need a plan for later periods',
        'You own several companies, or hold shares in other businesses',
        'You are planning a restructure, a sale, a new holding company or a share transfer',
        'Past returns were filed without a professional review',
        'The FTA has sent a query, an audit notice or a request for documents',
      ],
    },
    requirements: [
      'Financial statements for recent periods',
      'Filed corporate tax returns and computations',
      'Group structure chart with ownership percentages',
      'Intercompany and related-party agreements',
      'Trade licences and MOAs for each entity',
      'Any FTA letters, queries or audit notices',
      'Details of the transaction or change you are planning',
    ],
    included: [
      {
        group: 'Status & Reliefs',
        desc: 'The elections and conditions that set your rate.',
        items: [
          'Qualifying Free Zone Person assessment',
          'Small Business Relief and transition planning',
          'Tax group feasibility and application',
          'Participation exemption tests (5% holding, 12 months)',
          'Loss utilisation planning',
        ],
      },
      {
        group: 'Reviews & Health Checks',
        desc: 'A second look at what has already been filed.',
        items: [
          'Corporate tax health check of past filings',
          'Compliance audit against accounts and records',
          'Related-party and connected-person review',
          'Restructuring and share transfer impact analysis',
          'Prioritised findings and correction plan',
        ],
      },
      {
        group: 'FTA Interaction',
        desc: 'Support whenever the authority is involved.',
        items: [
          'FTA query and audit preparation',
          'Voluntary disclosure preparation',
          'Clarification requests to the FTA',
          'Reconsideration request drafting',
          'Document packs and reconciliations',
        ],
      },
    ],
    faqs: [
      {
        q: 'How do I know if my free zone company qualifies for 0%?',
        a: 'A Qualifying Free Zone Person pays 0% on qualifying income and 9% on other income, but only while every condition is met: adequate substance in the free zone, qualifying activities and income, audited financial statements, compliance with transfer pricing rules, and no election to be taxed at the standard rate. We test each condition against your contracts, customers and accounts and tell you where the risks sit.',
      },
      {
        q: 'What happens when Small Business Relief ends?',
        a: 'Small Business Relief is available only for tax periods ending on or before 31 December 2026. For later periods, your return is based on a full computation — taxable income from your accounts, with 0% up to AED 375,000 and 9% above. Bookkeeping quality, expense evidence and related-party pricing then matter much more, so we review them before your first full period starts, not after it ends.',
      },
      {
        q: 'Should our companies form a tax group?',
        a: 'UAE-resident companies with 95% common ownership can apply to form a tax group that files a single return, with transactions between members eliminated. Members need the same financial year and accounting standards, and exempt persons and Qualifying Free Zone Persons cannot join. The trade-off is that members become jointly and severally liable for the group’s tax. We compare the group result with filing separately before you apply.',
      },
      {
        q: 'What is a corporate tax health check?',
        a: 'A health check — sometimes called a corporate tax compliance audit — is a review of returns already filed. We reconcile each return to your financial statements, test the adjustments, elections and exemptions claimed, check related-party dealings, and confirm your records meet the 7-year retention rule. You receive a prioritised list of findings, and where something was wrong, we prepare the voluntary disclosure to correct it.',
      },
      {
        q: 'The FTA has contacted us about our return — can you help?',
        a: 'Yes. We read the request with you, work out exactly what the FTA is asking for, and prepare the reconciliations, explanations and supporting documents within the time it allows. If the query points to an error, we advise on correcting it through a voluntary disclosure. No adviser can promise how the FTA will decide, but a clear, consistent and well-documented response puts your position on solid ground.',
      },
      {
        q: 'Can we ask the FTA for a ruling on an uncertain point?',
        a: 'You can submit a clarification request through EmaraTax, setting out the facts and asking how the FTA applies the law to them. It suits genuinely uncertain points — a restructure, an unusual income stream, a free zone activity question. The answer is specific to your facts, so the request has to be precise. We draft it, attach the evidence and follow it through.',
      },
    ],
    related: ['transfer-pricing', 'corporate-tax-filing', 'holding-company-setup', 'share-transfer'],
  },

  /* ───────────────────────── CORPORATE TAX DEREGISTRATION ───────────────────────── */
  {
    slug: 'corporate-tax-deregistration',
    category: 'tax-services',
    navLabel: 'Corporate Tax Deregistration',
    icon: FileX2,
    eyebrow: 'Corporate Tax',
    blurb: 'Close your TRN when the business ends',
    title: 'Corporate Tax Deregistration in the UAE',
    heroSubtitle:
      'Closing, liquidating or merging your company? We handle the corporate tax deregistration the FTA requires within 3 months of cessation — application, final return and settlement — and align it with your licence cancellation and VAT deregistration.',
    heroHighlights: ['Final Return Filed', 'Dues Cleared Before Approval', 'Licence & VAT Aligned'],
    metaTitle: 'Corporate Tax Deregistration UAE | Final Return | Smartgic Visa',
    metaDescription:
      'Corporate tax deregistration in the UAE — EmaraTax application within 3 months of cessation, final return, dues settled, and VAT and licence closure aligned.',
    keywords: [
      'corporate tax deregistration uae',
      'cancel corporate tax registration uae',
      'emaratax corporate tax deregistration',
      'corporate tax deregistration after liquidation',
      'final corporate tax return uae',
    ],
    overview: {
      heading: 'A cancelled licence doesn’t close your tax registration',
      body: [
        'When a business ceases — through liquidation, dissolution or a merger in which the company ceases to exist — its corporate tax registration stays open until you apply to cancel it. The application is due within 3 months of cessation, and the FTA approves it only once every return, including the final one, has been filed and all tax and penalties are paid. Until then, your TRN stays live and returns keep falling due.',
        'Smartgic runs the tax side of the closure alongside the legal one. We confirm the cessation date, check that past returns are filed and balances are clear, and prepare the deregistration application with evidence of the cessation. We then prepare the final computation and return, confirm what must be paid, and answer FTA questions through to approval — sequencing it all with your liquidation, licence cancellation and VAT deregistration, in the order each authority expects.',
      ],
    },
    stats: [
      { value: '3 months', label: 'From cessation to apply for deregistration' },
      { value: 'Separate', label: 'From licence cancellation and VAT deregistration' },
      { value: 'EmaraTax', label: 'Where the application is submitted and tracked' },
      { value: '7 years', label: 'Records kept after the final tax period' },
    ],
    benefits: [
      {
        title: 'Deadline Planned From Cessation',
        desc: 'We agree the cessation date with you and plan back from the 3-month deadline, so the application isn’t late while the liquidation is still running.',
      },
      {
        title: 'Past Filings Cleared',
        desc: 'Missing or incorrect returns are found and fixed early, because the FTA won’t approve deregistration while any return or payment is outstanding.',
      },
      {
        title: 'Final Return Prepared',
        desc: 'We prepare the closing computation — asset disposals, write-offs and settlements included — and submit the final return through your EmaraTax account.',
      },
      {
        title: 'Payments Before Accounts Close',
        desc: 'We confirm the tax and any penalties outstanding, so payments are made before the company’s bank account closes and nothing is left unpaid.',
      },
      {
        title: 'Closure Steps in Sequence',
        desc: 'Liquidation, licence cancellation, VAT deregistration and corporate tax deregistration are sequenced so each authority receives the evidence it expects.',
      },
      {
        title: 'Records Archived Properly',
        desc: 'Accounts, returns and supporting documents are handed over as an organised archive, since the 7-year record-keeping duty continues after closure.',
      },
    ],
    process: [
      {
        title: 'Cessation Review',
        desc: 'We confirm the date and reason the business ceased, check every past return and payment, and list what the FTA will need before it can approve deregistration.',
      },
      {
        title: 'Deregistration Application',
        desc: 'As early in the 3-month window as the paperwork allows, we submit the application through your EmaraTax account with supporting evidence — such as the liquidation resolution, liquidator’s report or licence cancellation.',
      },
      {
        title: 'Final Return',
        desc: 'We prepare the closing financial information and final tax computation, you review and approve it, and we submit the final return through EmaraTax.',
      },
      {
        title: 'Settlement & FTA Queries',
        desc: 'We confirm the tax and any penalties to pay, check the payments are reflected in your EmaraTax account, and answer any questions the FTA raises on the application.',
      },
      {
        title: 'Approval & Close-Out',
        desc: 'Once the FTA approves, we add the confirmation to your closure file, finish any VAT or licence steps still open in the order your authorities require, and hand over the records archive.',
      },
    ],
    eligibility: {
      heading: 'When you must deregister',
      points: [
        'Your company is being liquidated or has been dissolved',
        'The business or business activity has ceased for good',
        'Your company has merged into another and no longer exists separately',
        'Your licence is being cancelled as part of closing the business',
        'You registered as an individual and have stopped your business',
      ],
    },
    requirements: [
      'Trade licence and MOA, with any amendments',
      'Shareholder resolution to cease, liquidate or merge',
      'Liquidator’s appointment and report, where applicable',
      'Licence cancellation or dissolution documents, if issued',
      'Financial statements up to the cessation date',
      'Copies of past corporate tax returns and payments',
      'EmaraTax login for the authorised signatory',
      'VAT registration details, if VAT-registered',
    ],
    included: [
      {
        group: 'Pre-Closure Review',
        desc: 'Everything the FTA checks before it approves.',
        items: [
          'Cessation date and reason confirmed',
          'Past return and payment reconciliation',
          'Outstanding penalty check',
          'Missing returns and voluntary disclosures cleared',
          'Closure timetable across authorities',
        ],
      },
      {
        group: 'Deregistration & Final Return',
        desc: 'The application and the return the FTA needs to close your TRN.',
        items: [
          'Deregistration application on EmaraTax',
          'Supporting evidence of cessation',
          'Final-period tax computation',
          'Final corporate tax return submission',
          'Payment confirmation and FTA query responses',
        ],
      },
      {
        group: 'Wider Closure Alignment',
        desc: 'The tax steps fitted around the rest of the shutdown.',
        items: [
          'Liquidation and licence cancellation coordination',
          'VAT deregistration, if registered',
          'Liquidation audit or liquidator’s report coordination',
          'Final bank account timing',
          'Records archive for the retention period',
        ],
      },
    ],
    faqs: [
      {
        q: 'Is corporate tax deregistration automatic when my licence is cancelled?',
        a: 'No. Cancelling a licence or liquidating a company doesn’t close your corporate tax registration — that needs a separate application to the FTA through EmaraTax, with its own deadline. Until the FTA approves it, your TRN remains active and the FTA expects returns for each tax period. Plan it alongside the liquidation rather than after it.',
      },
      {
        q: 'What is the deadline to deregister for corporate tax?',
        a: 'You must apply within 3 months of the date the business ceased — whether through cessation of activity, liquidation or dissolution. Applying late can attract a penalty, the amount of which is set by the FTA. Because the cessation date drives the deadline, we agree it with you at the start, using the resolution, liquidation documents or licence cancellation as evidence.',
      },
      {
        q: 'Do I still need to file a final corporate tax return?',
        a: 'Yes. The FTA approves deregistration only after all returns have been filed — including the return for the final tax period — and all tax and penalties have been paid. The final computation often includes items that don’t arise in a normal year, such as gains or losses on selling assets and write-offs of balances, so it needs careful preparation.',
      },
      {
        q: 'What happens to our VAT registration?',
        a: 'VAT is a separate registration with its own deregistration application and its own deadline — 20 business days from the date you become required to deregister, for example when you stop making taxable supplies. The two are usually handled together at closure. We prepare both, so the final VAT return and the final corporate tax return draw on the same closing figures.',
      },
      {
        q: 'Our company has stopped trading but still has a licence — should we deregister?',
        a: 'Usually not yet. While the company still exists and holds a licence, it generally remains a taxable person and keeps filing returns, even nil ones. Deregistration follows the actual closure — liquidation, dissolution or a similar cessation — and the FTA asks for evidence of it. If you have decided to close, plan the liquidation and the tax steps together, because the 3-month clock starts at cessation.',
      },
      {
        q: 'How long do we need to keep records after closing?',
        a: 'Corporate tax records must be kept for at least 7 years after the end of the tax period they relate to, and closing the company doesn’t shorten that. Before closure, agree who will hold the accounts, returns, contracts and supporting documents. We hand over an organised archive so they can be produced if the FTA asks.',
      },
    ],
    related: ['liquidation-deregistration', 'vat-deregistration', 'liquidation-audit', 'licence-cancellation'],
  },

  /* ───────────────────────── TRANSFER PRICING ───────────────────────── */
  {
    slug: 'transfer-pricing',
    category: 'tax-services',
    navLabel: 'Transfer Pricing',
    icon: Network,
    eyebrow: 'Transfer Pricing',
    blurb: 'Arm’s-length pricing and TP documentation',
    title: 'Transfer Pricing Compliance in the UAE',
    heroSubtitle:
      'We help you set and document arm’s-length prices for dealings with related parties and connected persons — benchmarking, intercompany agreements, the disclosure form, and master and local files where required — ready for when the FTA asks.',
    heroHighlights: ['Benchmarking Studies', 'Intercompany Agreements', 'Mainland & Free Zone Groups'],
    metaTitle: 'Transfer Pricing in the UAE | TP Documentation | Smartgic Visa',
    metaDescription:
      'Transfer pricing in the UAE — arm’s-length benchmarking, intercompany agreements, the TP disclosure form and master and local files, ready for FTA requests.',
    keywords: [
      'transfer pricing uae',
      'transfer pricing documentation uae',
      'transfer pricing disclosure form uae',
      'master file and local file uae',
      'transfer pricing benchmarking dubai',
      'related party transactions corporate tax uae',
    ],
    overview: {
      heading: 'Your group’s internal prices are now part of your tax return',
      body: [
        'Under the Corporate Tax Law, transactions with related parties must be priced as if the parties were independent — the arm’s-length principle — and payments to connected persons, such as owners and directors, are deductible only to the extent they reflect market value. Domestic dealings count too, such as sales between a mainland company and a sister company in a free zone. Where the rules require, a disclosure form goes with your return, and larger businesses and members of large multinational groups must keep a master file and local file.',
        'Smartgic maps every related-party and connected-person flow, analyses who does what and carries which risks, and selects the most appropriate pricing method. We run benchmarking studies, draft intercompany agreements and a transfer pricing policy, prepare the disclosure form with your return, and build master and local files where you need them. For free zone companies, we check transfer pricing as one of the conditions for QFZP status, so your 0% isn’t lost on a pricing point.',
      ],
    },
    stats: [
      { value: 'Arm’s length', label: 'The pricing standard for related-party dealings' },
      { value: 'TP form', label: 'Disclosure filed with the return where required' },
      { value: 'Two files', label: 'Master and local, for larger businesses and groups' },
      { value: 'QFZP', label: 'Status depends on transfer pricing compliance' },
    ],
    benefits: [
      {
        title: 'Every Flow Mapped',
        desc: 'Goods, services, loans, cost sharing, management fees and owner payments are listed across the group, so your disclosure starts from a complete picture.',
      },
      {
        title: 'Benchmarks You Can Show',
        desc: 'Prices and margins are tested against comparable independent data using a recognised method, giving you an arm’s-length range the FTA can follow.',
      },
      {
        title: 'Agreements That Match Reality',
        desc: 'Intercompany agreements are drafted to reflect what each entity actually does, because the FTA looks at conduct as well as contracts.',
      },
      {
        title: 'Disclosure That Matches the Return',
        desc: 'We confirm whether the transfer pricing disclosure form applies to you and prepare it from the same figures as your corporate tax return.',
      },
      {
        title: 'Files Ready on Request',
        desc: 'Where you must keep a master file and local file, they are prepared and updated so you can provide them when the FTA asks.',
      },
      {
        title: 'QFZP Condition Supported',
        desc: 'Free zone companies dealing with related mainland entities get pricing and documentation that support the transfer pricing condition for 0% treatment.',
      },
    ],
    process: [
      {
        title: 'Transaction Mapping',
        desc: 'We chart your group and connected persons, then list every transaction between them — type, value, direction and terms — for the tax period under review.',
      },
      {
        title: 'Functional Analysis',
        desc: 'Through interviews and documents, we establish the functions each entity performs, the assets it uses and the risks it bears — the basis for choosing a pricing method.',
      },
      {
        title: 'Benchmarking',
        desc: 'We select the most appropriate method — such as comparable uncontrolled price, cost plus or transactional net margin — and test your pricing against comparable independent data.',
      },
      {
        title: 'Documentation & Disclosure',
        desc: 'We draft intercompany agreements and your transfer pricing policy, prepare the disclosure form with your return where required, and build the master file and local file where you need them.',
      },
      {
        title: 'Annual Review',
        desc: 'Each year we update the analysis for new transactions and results, recommend any year-end adjustments, and keep the file ready for an FTA request.',
      },
    ],
    eligibility: {
      heading: 'Who transfer pricing affects',
      points: [
        'Groups whose companies sell goods or services to each other or share costs',
        'Businesses that lend to, borrow from or provide credit support to related parties',
        'Companies paying salaries, fees or rent to owners, directors or their relatives',
        'Free zone companies with related mainland entities, especially those claiming QFZP status',
        'Larger businesses and members of large multinational groups that must keep a master file and local file',
      ],
    },
    requirements: [
      'Group structure chart with ownership percentages',
      'List of related parties and connected persons',
      'Intercompany agreements, invoices and loan documents',
      'Financial statements for each entity involved',
      'Details of salaries, fees and other payments to owners and directors',
      'Description of each entity’s activities, staff and key assets',
      'Any existing transfer pricing policy or earlier documentation',
    ],
    included: [
      {
        group: 'Analysis & Benchmarking',
        desc: 'Evidence that your prices are at arm’s length.',
        items: [
          'Related-party and connected-person mapping',
          'Functional and risk analysis',
          'Method selection and economic analysis',
          'Benchmarking studies with comparable data',
          'Intercompany loan and service fee pricing',
        ],
      },
      {
        group: 'Documentation & Filing',
        desc: 'The documents the rules ask for, kept consistent.',
        items: [
          'Transfer pricing disclosure form, where required',
          'Master file and local file, where required',
          'Intercompany agreements',
          'Group transfer pricing policy',
          'Year-end adjustment calculations',
        ],
      },
      {
        group: 'Ongoing Support',
        desc: 'Keeping the position current as the business changes.',
        items: [
          'Annual documentation refresh',
          'QFZP transfer pricing condition review',
          'Connected-person payment reviews',
          'Pricing for new transactions or restructures',
          'Support with FTA documentation requests',
        ],
      },
    ],
    faqs: [
      {
        q: 'Do transfer pricing rules apply to transactions inside the UAE?',
        a: 'Yes. UAE transfer pricing rules aren’t limited to cross-border dealings. A mainland company trading with a sister company in a free zone, two companies controlled by the same owner, or a company paying its shareholder a management fee are all within scope. Domestic transactions still need arm’s-length pricing and, where the rules require, appear on the disclosure form filed with your return.',
      },
      {
        q: 'What is the transfer pricing disclosure form?',
        a: 'It is a schedule submitted with your corporate tax return, setting out transactions with related parties and payments to connected persons by type and value. Whether you need to file it depends on the value of those transactions, against thresholds set by the authority. We confirm whether it applies for each period and prepare it from the same figures as your return.',
      },
      {
        q: 'Do we need a master file and local file?',
        a: 'Larger businesses and members of large multinational groups must keep a master file, describing the group and its pricing policies, and a local file covering the UAE entity’s own transactions — and provide them when the FTA asks. The thresholds are set by ministerial decision, and we check where you stand each year. Businesses below them still need evidence that their prices are at arm’s length.',
      },
      {
        q: 'What is a benchmarking study?',
        a: 'A benchmarking study compares your prices or margins with those of independent businesses in comparable transactions, usually drawn from commercial databases. The result is an arm’s-length range: if your pricing falls inside it, you have evidence to support it; if it falls outside, an adjustment may be needed. The study records the method chosen, the search process and why each comparable was kept or rejected.',
      },
      {
        q: 'How does transfer pricing affect a Qualifying Free Zone Person?',
        a: 'Complying with the transfer pricing rules is one of the conditions for QFZP status, alongside adequate substance, qualifying activities and income, audited financial statements and not electing the standard rate. Dealings with related mainland companies need particular care, because pricing them too favourably shifts profit into the 0% entity. We review and document those prices so the condition can be evidenced.',
      },
      {
        q: 'Are salaries and fees paid to owners covered?',
        a: 'Yes. Owners, directors and their relatives are connected persons, and payments to them — salaries, bonuses, consultancy fees, rent — are generally deductible only to the extent they reflect the market value of what was provided. Any excess is added back in the computation. We benchmark these payments and, where the rules require, include them on the disclosure form.',
      },
    ],
    related: ['corporate-tax-advisory', 'corporate-tax-filing', 'holding-company-setup', 'financial-reporting'],
  },

  /* ───────────────────────── TAX RESIDENCY CERTIFICATE ───────────────────────── */
  {
    slug: 'tax-residency-certificate',
    category: 'tax-services',
    navLabel: 'Tax Residency Certificate',
    icon: BadgeCheck,
    eyebrow: 'Tax Residency',
    blurb: 'FTA certificates for companies and individuals',
    title: 'Tax Residency Certificate (TRC) in the UAE',
    heroSubtitle:
      'We prepare and submit your Tax Residency Certificate application to the FTA through EmaraTax — for your company or for you personally, for domestic use or a named treaty country — with every document checked for consistency first.',
    heroHighlights: ['Company & Personal TRCs', 'Document Set Checked', 'Renewal Reminders'],
    metaTitle: 'Tax Residency Certificate UAE | TRC Application | Smartgic Visa',
    metaDescription:
      'Apply for a UAE tax residency certificate for your company or yourself — domestic or treaty TRC, documents checked and submitted to the FTA via EmaraTax.',
    keywords: [
      'tax residency certificate uae',
      'trc uae',
      'tax residency certificate dubai',
      'uae tax residency certificate for individuals',
      'tax residency certificate for companies uae',
      'fta tax residency certificate',
    ],
    overview: {
      heading: 'A residency claim is only as strong as its documents',
      body: [
        'A Tax Residency Certificate is the FTA’s official confirmation that a company or individual is resident in the UAE for tax purposes. It is issued through EmaraTax, either for general domestic use or for a named country, where it is used to claim the benefits of that country’s tax treaty with the UAE. Foreign tax authorities, banks and payers often ask for one before they will apply treaty rates or accept a UAE residence claim.',
        'Smartgic prepares the application so the FTA has what it needs from the start. We confirm the right certificate type, country and period, assemble the document set for your company or for you personally, and check that names, addresses, dates and figures agree across every document, since mismatches are a common reason applications are returned. We submit through EmaraTax, handle any request for further information, and track the certificate’s validity so a new one can be requested when you need it.',
      ],
    },
    stats: [
      { value: 'FTA', label: 'Reviews applications and issues certificates' },
      { value: 'EmaraTax', label: 'Where the application and documents are filed' },
      { value: 'Two types', label: 'Domestic use, or a named treaty country' },
      { value: 'Set term', label: 'Per certificate — reapply for later periods' },
    ],
    benefits: [
      {
        title: 'Right Type, Country and Period',
        desc: 'We confirm whether you need a domestic or treaty certificate, for which country and period, before anything is submitted to the FTA.',
      },
      {
        title: 'Consistent Document Set',
        desc: 'Names, addresses, dates and figures are checked across your licence, passport, tenancy, statements and accounts, so the FTA sees one coherent picture.',
      },
      {
        title: 'Company Evidence Assembled',
        desc: 'Licence, MOA, financial statements, office tenancy, bank statements and owner and manager IDs are gathered into the set the FTA expects from companies.',
      },
      {
        title: 'Personal Residence Evidenced',
        desc: 'For individuals we pull together residence, address, income and travel-history evidence, and check it against the UAE’s residency conditions before applying.',
      },
      {
        title: 'Follow-Up Requests Handled',
        desc: 'If the FTA asks for more information or a clearer document, we prepare the response quickly so the application keeps moving.',
      },
      {
        title: 'Renewal Dates Tracked',
        desc: 'We note each certificate’s period and remind you in good time, so the next application goes in before a payer or authority asks for it.',
      },
    ],
    process: [
      {
        title: 'Purpose & Eligibility',
        desc: 'We confirm why you need the certificate, which type and country apply, the period it should cover, and whether you or your company meet the residency conditions.',
      },
      {
        title: 'Document Collection & Check',
        desc: 'You send the documents on our checklist. We check every name, address, date and figure for consistency and arrange certified copies or reports where they’re needed.',
      },
      {
        title: 'EmaraTax Application',
        desc: 'We complete the application in your EmaraTax account, upload the document set and arrange payment of the FTA’s fee, which is set by the authority.',
      },
      {
        title: 'FTA Review',
        desc: 'The FTA reviews the application and may ask for further information. We prepare any response, resubmit and keep you updated until a decision is made.',
      },
      {
        title: 'Certificate & Renewal',
        desc: 'Once the FTA issues the certificate, we pass it to you, record the period it covers and remind you when a new application is needed.',
      },
    ],
    eligibility: {
      heading: 'Who can apply for a TRC',
      points: [
        'Companies established on the UAE mainland or in a free zone',
        'Individuals who live in the UAE and meet its tax residency conditions',
        'Businesses earning income from a treaty country that asks for proof of residence',
        'Residents asked by a bank, payer or foreign authority to prove UAE tax residence',
      ],
    },
    requirementsHeading: 'Documents usually requested',
    requirements: [
      'Companies: trade licence and MOA or articles of association',
      'Companies: latest audited financial statements',
      'Companies: passports and Emirates IDs of owners and managers',
      'Tenancy contract (Ejari in Dubai) or title deed',
      'Recent bank statements certified by the bank',
      'Individuals: passport, Emirates ID and residence details',
      'Individuals: entry and exit report from the immigration authority',
      'Individuals: salary certificate or other proof of income',
    ],
    included: [
      {
        group: 'Company Certificates',
        desc: 'For mainland and free zone companies.',
        items: [
          'Certificate type, country and period check',
          'Licence and constitutional document review',
          'Financial statement and bank evidence check',
          'Office tenancy evidence',
          'Application on your EmaraTax account',
        ],
      },
      {
        group: 'Individual Certificates',
        desc: 'For UAE residents who need to prove it.',
        items: [
          'Residency position review',
          'Immigration entry and exit report',
          'Address and income evidence',
          'Bank statement certification',
          'FTA follow-up and resubmission',
        ],
      },
      {
        group: 'Treaty Use & Renewals',
        desc: 'The right certificate for where it is going.',
        items: [
          'Treaty certificate for a named country',
          'Separate applications where several countries apply',
          'Certificate period tracking',
          'Reapplication for later periods',
          'Review and resubmission after a rejection',
        ],
      },
    ],
    faqs: [
      {
        q: 'What is a UAE Tax Residency Certificate?',
        a: 'It is an official certificate issued by the Federal Tax Authority, through EmaraTax, confirming that a company or individual is resident in the UAE for tax purposes over a stated period. Companies and individuals can both apply. It is issued either for domestic use or for a named country, where it supports a claim to benefits under that country’s tax treaty with the UAE.',
      },
      {
        q: 'What is the difference between a domestic and a treaty certificate?',
        a: 'A treaty certificate names a specific country and shows its tax authority or payer that you are a UAE tax resident — usually the first document needed to claim treaty benefits such as a lower withholding rate. A domestic certificate is general proof of UAE tax residence for institutions that ask for it. Each treaty country needs its own certificate.',
      },
      {
        q: 'Can an individual get a tax residency certificate?',
        a: 'Yes. Individuals who meet the UAE’s tax residency conditions can apply. Those conditions look at factors such as where your usual home and your personal and financial interests are, and the time you spend in the UAE; the exact tests are set by the authority. Typical evidence includes your passport and Emirates ID, an entry and exit report, a tenancy contract and proof of income.',
      },
      {
        q: 'How long is a tax residency certificate valid?',
        a: 'Each certificate is issued for a set period, shown on the certificate itself, and does not renew automatically. When a payer or authority needs evidence for a later period — a new financial year, for example — you apply again with updated documents. We record the period of every certificate we apply for on your behalf and remind you in good time to reapply.',
      },
      {
        q: 'Why are TRC applications rejected or returned?',
        a: 'The usual reasons are missing documents and records that don’t match — a name spelt differently on the passport and the licence, a tenancy in a different name or address, bank statements that aren’t certified, or an expired licence or tenancy. Applying for the wrong certificate type, country or period causes problems too. We check each of these before submitting.',
      },
      {
        q: 'Will a TRC reduce the tax I pay abroad?',
        a: 'The certificate proves UAE tax residence; it doesn’t decide your tax position in another country. Whether a treaty lowers tax on a payment, and which forms the other country requires, depends on that treaty and that country’s rules — matters for your adviser there. Our role is the UAE side: preparing and submitting the application for a certificate covering the right country and period.',
      },
    ],
    related: ['corporate-tax-registration', 'external-audit', 'investor-visa', 'holding-company-setup'],
  },
];
