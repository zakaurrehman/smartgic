import { Boxes, FileCheck2, FileX2, HandCoins, Network, ReceiptText, SearchCheck, Ship } from 'lucide-react';
import type { Service } from '../service-types';

/*
 * VAT and indirect tax services (category: tax-services).
 * Statutory figures are limited to the agreed fact sheet. No government fees,
 * penalty amounts, processing times or e-invoicing dates are stated.
 */

export const vatIndirectTaxServices: Service[] = [
  /* ───────────────────────── VAT REGISTRATION ───────────────────────── */
  {
    slug: 'vat-registration',
    category: 'tax-services',
    navLabel: 'VAT Registration',
    icon: FileCheck2,
    eyebrow: 'VAT',
    blurb: 'Mandatory, voluntary & tax group registration',
    title: 'VAT Registration in Dubai & the UAE',
    heroSubtitle:
      'We confirm whether you must register, can register voluntarily or should register as a tax group, then prepare your EmaraTax application and set up compliant invoicing so you are ready to charge VAT from your effective date.',
    heroHighlights: ['Mandatory & Voluntary', 'VAT Tax Groups', 'Filed on EmaraTax'],
    metaTitle: 'VAT Registration in Dubai & UAE | TRN on EmaraTax | Smartgic Visa',
    metaDescription:
      'VAT registration in the UAE: we test the AED 375,000 mandatory and AED 187,500 voluntary thresholds, file your EmaraTax application and set up your invoicing.',
    keywords: [
      'vat registration dubai',
      'vat registration uae',
      'vat registration threshold uae',
      'voluntary vat registration uae',
      'vat tax group registration uae',
      'how to get trn number uae',
    ],
    overview: {
      heading: 'The threshold is simple — what counts towards it is not',
      body: [
        'A UAE business must register for VAT once its taxable supplies and imports exceed AED 375,000 over the previous 12 months, or are expected to exceed that figure in the next 30 days. Zero-rated sales count towards the threshold; exempt sales do not. Registering late does not just bring a penalty — the FTA can set your effective date back to when you should have registered, leaving VAT due on sales you never charged it on.',
        'Smartgic tests your turnover the way the FTA will: month by month, splitting standard-rated, zero-rated and exempt income and adding imports. If you are below the mandatory threshold, we tell you whether voluntary registration above AED 187,500 makes sense. We then prepare and submit your EmaraTax application, respond to FTA queries, and set up compliant tax invoices and a filing calendar so your first return is on track.',
      ],
    },
    stats: [
      { value: '375,000', label: 'AED threshold for mandatory registration' },
      { value: '187,500', label: 'AED threshold for voluntary registration' },
      { value: '5%', label: 'Standard rate you charge once registered' },
      { value: 'TRN', label: 'Tax Registration Number issued by the FTA' },
    ],
    benefits: [
      {
        title: 'Right Date, Right Basis',
        desc: 'We rebuild your rolling 12-month turnover and 30-day forecast, so you apply when the obligation starts — not months late or needlessly early.',
      },
      {
        title: 'A Clear Voluntary Decision',
        desc: 'Below AED 375,000, we weigh the input tax you could recover against the filing work, so voluntary registration is a choice, not a guess.',
      },
      {
        title: 'Tax Groups Structured',
        desc: 'Related UAE companies under common control can register as one tax group, filing a single return and disregarding most supplies between members.',
      },
      {
        title: 'Late Registration Handled',
        desc: 'If you have already crossed the threshold, we file your application, work out the VAT due from your effective date and plan how to settle it.',
      },
      {
        title: 'Invoices Ready on Day One',
        desc: 'Tax invoice and credit note templates show your TRN and every required detail, so the first invoice you issue is compliant.',
      },
      {
        title: 'Filing Calendar Set',
        desc: 'We confirm the tax periods the FTA assigns, link your customs code if you import, and diarise every return deadline from the start.',
      },
    ],
    process: [
      {
        title: 'Threshold & Route Review',
        desc: 'We analyse your sales, imports and expenses for the previous 12 months and the next 30 days, then confirm whether registration is mandatory, voluntary or better handled as a tax group.',
      },
      {
        title: 'EmaraTax Application',
        desc: 'We set up or use your EmaraTax account, complete the VAT registration form, upload the licence, identity documents and turnover evidence, and submit it to the FTA.',
      },
      {
        title: 'FTA Queries & TRN',
        desc: 'If the FTA asks for clarification or extra documents, we prepare the response. Once approved, your Tax Registration Number and certificate are available in EmaraTax.',
      },
      {
        title: 'Post-Registration Set-Up',
        desc: 'We update your invoice templates, pricing and accounting tax codes, confirm your tax periods and first return deadline, and brief your team on what changes from the effective date.',
      },
    ],
    requirements: [
      'Trade licence and Memorandum or Articles of Association',
      'Passports and Emirates IDs of the owners and authorised signatory',
      'Proof of the signatory’s authority, such as a power of attorney',
      'Sales, purchase and import records supporting your turnover',
      'Contracts or orders, if you are registering on expected supplies',
      'Company contact details and a bank IBAN letter',
      'Customs code, if you import or export goods',
      'For tax groups: ownership and control details of each member',
    ],
    eligibility: {
      heading: 'When VAT registration applies',
      points: [
        'Mandatory: your taxable supplies and imports exceeded AED 375,000 over the previous 12 months',
        'Mandatory: you expect them to exceed AED 375,000 in the next 30 days',
        'Voluntary: your supplies, imports or taxable expenses exceed AED 187,500',
        'Tax group: two or more related UAE companies under common control want to file as one',
        'Non-resident businesses making taxable supplies in the UAE, where no one else accounts for the VAT, may need to register whatever their turnover',
      ],
    },
    faqs: [
      {
        q: 'What counts towards the AED 375,000 VAT threshold?',
        a: 'Taxable supplies — standard-rated and zero-rated — plus imports of goods and services that would be taxable if supplied in the UAE. Exempt supplies, such as certain financial services or bare land, and out-of-scope income do not count. The test is applied at the end of every month over the previous 12 months, and to your expected supplies for the next 30 days.',
      },
      {
        q: 'Should I register for VAT voluntarily?',
        a: 'It can make sense once your supplies, imports or taxable expenses exceed AED 187,500 — for example, if you sell mainly to VAT-registered businesses that can recover the VAT you charge, or you are carrying set-up costs whose VAT you want to recover. The trade-off is regular returns and record keeping, and you cannot simply deregister again straight away. We set out both sides using your figures.',
      },
      {
        q: 'How do I register for VAT on EmaraTax?',
        a: 'You create an EmaraTax user account, set up a taxable person profile for the business and complete the VAT registration application: business details, activities, turnover figures, bank details, any customs code and the authorised signatory. Supporting documents are uploaded with it. The FTA reviews the application, may ask questions, and issues your Tax Registration Number once approved. Review times are set by the FTA.',
      },
      {
        q: 'What changes once we are VAT registered?',
        a: 'From your effective date you charge 5% on standard-rated supplies, issue tax invoices showing your TRN within 14 days of each supply, and keep records of sales, purchases and imports. You file a return for every tax period — usually quarterly — by the 28th day after it ends, and pay any VAT due by then. You can also recover input tax on business costs, subject to the rules.',
      },
      {
        q: 'Can a group of companies register for VAT together?',
        a: 'Yes, if they qualify. Two or more UAE-established legal persons that are related parties under common control can apply to register as a tax group. The group files one return through a representative member, and most supplies between members are disregarded. Every member is jointly and severally liable for the group’s VAT, so the structure should be a deliberate choice.',
      },
      {
        q: 'What happens if we registered late?',
        a: 'The FTA can register you from the date you should have registered, so VAT becomes due on taxable sales from that date even if you did not charge it. A late-registration penalty can also apply; the amount is set by the authority, and we confirm the current figure for your case. We calculate the exposure, file the application and prepare the returns that need to follow.',
      },
    ],
    included: [
      {
        group: 'Threshold & Eligibility',
        desc: 'A clear answer on whether, when and how you register.',
        items: [
          'Rolling 12-month turnover test',
          '30-day forward-looking assessment',
          'Supply classification by VAT treatment',
          'Voluntary registration review',
          'Non-resident registration check',
        ],
      },
      {
        group: 'Registration on EmaraTax',
        desc: 'The application prepared, filed and followed through to your TRN.',
        items: [
          'EmaraTax account and taxable person profile',
          'VAT registration application',
          'Tax group and representative member set-up',
          'Customs code linked to your TRN',
          'Responses to FTA clarification requests',
        ],
      },
      {
        group: 'Ready to Trade',
        desc: 'What needs to be in place from your effective date.',
        items: [
          'Tax invoice and credit note templates',
          'VAT tax codes in your accounting system',
          'Pricing and quotation review for 5% VAT',
          'Tax period and return calendar',
          'Briefing for your finance team',
        ],
      },
    ],
    related: ['vat-return-filing', 'corporate-tax-registration', 'bookkeeping-services', 'company-registration'],
  },

  /* ───────────────────────── VAT RETURN FILING ───────────────────────── */
  {
    slug: 'vat-return-filing',
    category: 'tax-services',
    navLabel: 'VAT Return Filing',
    icon: ReceiptText,
    eyebrow: 'VAT',
    blurb: 'Quarterly & monthly returns on EmaraTax',
    title: 'VAT Return Filing in Dubai & the UAE',
    heroSubtitle:
      'We reconcile your sales, purchases and imports every period, prepare your VAT return and submit it through your EmaraTax account by the deadline — the 28th day after each tax period ends — with working papers behind every figure.',
    heroHighlights: ['Quarterly & Monthly Returns', 'Reverse Charge Handled', 'Reconciled to Your Books'],
    metaTitle: 'VAT Return Filing in Dubai | Quarterly & Monthly | Smartgic Visa',
    metaDescription:
      'VAT return filing in the UAE: input and output tax reconciled to your books, reverse charge handled and your return filed on EmaraTax by the 28th day.',
    keywords: [
      'vat return filing dubai',
      'vat return filing uae',
      'vat filing services uae',
      'vat return due date uae',
      'emaratax vat return',
      'vat 201 return uae',
    ],
    overview: {
      heading: 'A VAT return is only as good as the records behind it',
      body: [
        'Every VAT-registered business files a return for each tax period the FTA assigns — usually quarterly, sometimes monthly — by the 28th day after the period ends, and pays any VAT due by the same date. The return looks simple: output tax on your sales less recoverable input tax on your costs. The risk sits underneath — missing tax invoices, imports not reverse-charged, exempt sales treated as zero-rated, or input tax claimed on blocked costs.',
        'Smartgic prepares each return from your books, not from a summary. We reconcile output tax to your sales ledger and tax invoices, check that input tax is backed by valid invoices or import records, apply the reverse charge where it is due, and split standard-rated sales by emirate as the return requires. We submit through your EmaraTax account, tell you exactly what to pay, and flag any past error that needs a voluntary disclosure.',
      ],
    },
    stats: [
      { value: '28th', label: 'Day after period end — return and payment due' },
      { value: 'Quarterly', label: 'Usual tax period; some businesses file monthly' },
      { value: '14 days', label: 'To issue a tax invoice after the supply' },
      { value: 'VAT 201', label: 'The VAT return form filed on EmaraTax' },
    ],
    benefits: [
      {
        title: 'Reconciled, Not Estimated',
        desc: 'Output tax is tied to your sales ledger and invoices, and input tax to supplier invoices and import declarations, before anything is filed.',
      },
      {
        title: 'Reverse Charge Applied',
        desc: 'VAT on imported goods and on services from overseas suppliers is self-accounted, so it is declared and, where allowed, recovered in the same return.',
      },
      {
        title: 'Zero-Rated vs Exempt',
        desc: 'We separate zero-rated sales, which keep your input tax recovery, from exempt sales, which restrict it — a distinction that changes what you can claim.',
      },
      {
        title: 'Blocked Costs Filtered',
        desc: 'Input tax on costs the rules block — such as client entertainment and cars available for private use — is kept out of your claim.',
      },
      {
        title: 'Adjustments and Corrections',
        desc: 'Credit notes, bad-debt relief and errors in past returns are dealt with properly — in the current return or by voluntary disclosure, as the rules require.',
      },
      {
        title: 'Deadline Calendar Kept',
        desc: 'We track your tax periods, request records early and file through EmaraTax by the 28th day, with the payment amount and instructions ready.',
      },
    ],
    process: [
      {
        title: 'Records Collected',
        desc: 'Shortly after each period ends, we collect your sales and purchase registers, tax invoices, credit notes, import declarations and bank statements — or pull them from your accounting system.',
      },
      {
        title: 'Review & Reconciliation',
        desc: 'We classify each transaction, test input tax against the evidence and the blocking rules, apply the reverse charge, and reconcile the figures to your ledgers and prior returns.',
      },
      {
        title: 'Draft Return & Sign-Off',
        desc: 'You receive the draft return with a short summary of the main movements, any open queries and the VAT payable or refundable, for approval before anything is submitted.',
      },
      {
        title: 'Filing & Payment',
        desc: 'We submit the return through your EmaraTax account by the 28th day after the period ends, give you the payment details, and keep the working papers ready for any FTA query.',
      },
    ],
    requirements: [
      'Sales register and copies of tax invoices issued',
      'Purchase register with supplier tax invoices',
      'Credit and debit notes issued and received',
      'Import declarations and customs records',
      'Invoices for services bought from overseas suppliers',
      'Bank statements for the period',
      'EmaraTax access arranged with you for filing',
    ],
    faqs: [
      {
        q: 'When is the VAT return due in the UAE?',
        a: 'By the 28th day after the end of each tax period, and any VAT payable must be paid by the same date. Most businesses are on quarterly periods and some file monthly. The FTA assigns your periods at registration and they do not always follow calendar quarters, so work from the dates shown in your EmaraTax account rather than assuming.',
      },
      {
        q: 'What is the difference between output tax and input tax?',
        a: 'Output tax is the VAT you charge on your taxable sales. Input tax is the VAT you pay on purchases and imports used for your business. The return nets one against the other: if output tax is higher, you pay the difference; if recoverable input tax is higher, the excess can be carried forward or claimed as a refund.',
      },
      {
        q: 'How does the reverse charge work on imports?',
        a: 'When a VAT-registered business imports goods, or buys services from a supplier outside the UAE, it usually accounts for the VAT itself rather than being charged it by the supplier or paying it at the border. The VAT is declared as output tax and, where the costs relate to taxable activity, recovered as input tax in the same return — often a nil cash effect, but both entries are required.',
      },
      {
        q: 'Are zero-rated and exempt supplies the same?',
        a: 'No. Zero-rated supplies, such as qualifying exports and international transport, are taxable at 0%, so you can still recover input tax on related costs. Exempt supplies, such as certain financial services, bare land and residential property after its first supply, carry no VAT, and input tax on costs linked to them generally cannot be recovered. Mixing them up distorts both sides of the return.',
      },
      {
        q: 'When must a tax invoice be issued?',
        a: 'Within 14 days of the date of supply. A full tax invoice must be headed “Tax Invoice” and show your name, address and TRN, the customer’s details where required, a sequential number, the date, a description of the supply, the VAT rate and the VAT amount in dirhams. Late or incomplete invoices are commonly picked up in audits and can undermine your customer’s input tax claim.',
      },
      {
        q: 'Do we need to file a VAT return if we had no sales?',
        a: 'Yes. A registered business must file a return for every tax period, even when it made no sales or purchases — a nil return. Missing it attracts a late-filing penalty like any other return. If the business has stopped making taxable supplies altogether, you may need to apply for VAT deregistration rather than filing nil returns indefinitely.',
      },
    ],
    included: [
      {
        group: 'Return Preparation',
        desc: 'Every box on the return built from reconciled records.',
        items: [
          'Standard-rated sales split by emirate',
          'Zero-rated and exempt supplies reported',
          'Input tax review against valid invoices',
          'Reverse charge on imports and overseas services',
          'Import VAT matched to customs declarations',
        ],
      },
      {
        group: 'Adjustments & Corrections',
        desc: 'The items that fall outside a routine period.',
        items: [
          'Credit and debit note adjustments',
          'Bad-debt relief where conditions are met',
          'Input tax apportionment for exempt activity',
          'Voluntary disclosures for past errors',
          'Excess input tax: carry forward or refund',
        ],
      },
      {
        group: 'Filing & Records',
        desc: 'Submission, payment and a file ready for any FTA query.',
        items: [
          'Return submitted on EmaraTax',
          'Payment amount and instructions',
          'Working papers for each period',
          'Tax period and deadline calendar',
          'Responses to FTA queries on filed returns',
        ],
      },
    ],
    related: ['vat-compliance', 'bookkeeping-services', 'vat-refund', 'corporate-tax-filing'],
    tool: 'vat-calculator',
  },

  /* ───────────────────────── VAT COMPLIANCE & HEALTH CHECK ───────────────────────── */
  {
    slug: 'vat-compliance',
    category: 'tax-services',
    navLabel: 'VAT Compliance & Health Check',
    icon: SearchCheck,
    eyebrow: 'VAT',
    blurb: 'Return reviews, disclosures & audit support',
    title: 'VAT Health Check & Compliance Review in the UAE',
    heroSubtitle:
      'We review your filed VAT returns, invoices and contracts against the VAT Law, quantify any errors, prepare voluntary disclosures where needed and fix the processes behind them — so you meet an FTA audit with evidence, not surprises.',
    heroHighlights: ['Past Returns Reviewed', 'Voluntary Disclosures', 'FTA Audit Support'],
    metaTitle: 'VAT Health Check & Compliance Review in Dubai | Smartgic Visa',
    metaDescription:
      'VAT health check in the UAE: past returns and invoices reviewed, input tax and reverse charge tested, errors fixed by voluntary disclosure, FTA audit support.',
    keywords: [
      'vat health check uae',
      'vat compliance review dubai',
      'vat audit support uae',
      'fta vat audit',
      'vat voluntary disclosure uae',
      'vat compliance services dubai',
    ],
    overview: {
      heading: 'Most VAT errors repeat every period until someone looks',
      body: [
        'VAT mistakes rarely happen once. An exempt supply treated as zero-rated, input tax claimed on a blocked cost or a missed reverse charge on imported services is usually built into a process, so it repeats in every return. The FTA can audit past periods, and errors it finds bring tax, penalties and closer scrutiny — while an error you correct first through a voluntary disclosure is generally treated more favourably.',
        'Smartgic’s health check is a structured review, separate from routine filing. We reconcile your filed returns to the ledgers, test a sample of sales and purchase invoices, check the VAT treatment and place of supply of your main revenue streams, and review input tax recovery and the reverse charge. You receive a findings report ranked by risk, the corrections to make, and voluntary disclosures where they are needed.',
      ],
    },
    stats: [
      { value: 'Returns', label: 'Filed returns reconciled to your ledgers' },
      { value: 'Invoices', label: 'Sampled against the tax invoice requirements' },
      { value: 'Input tax', label: 'Recovery tested for evidence and blocked costs' },
      { value: 'Audit', label: 'FTA audit preparation and query responses' },
    ],
    benefits: [
      {
        title: 'Errors Found Before the FTA',
        desc: 'We look for the issues an FTA audit typically targets, so you can correct them on your terms rather than in response to an assessment.',
      },
      {
        title: 'Exposure Quantified',
        desc: 'Each finding comes with its tax effect by period, so you know what is at stake and which corrections matter most.',
      },
      {
        title: 'Treatment Confirmed',
        desc: 'Your main supplies are tested for the right rate and place of supply, including exports, services to overseas customers and designated zone sales.',
      },
      {
        title: 'Input Tax Protected',
        desc: 'We check recovered VAT is backed by valid invoices and excludes blocked items — and find VAT you were entitled to recover but missed.',
      },
      {
        title: 'Processes That Stay Fixed',
        desc: 'We correct tax codes, invoice templates and approval steps in your system, so the same errors do not reappear next quarter.',
      },
      {
        title: 'A Team That Knows VAT',
        desc: 'Practical training shows your finance and sales staff how to issue invoices, code purchases and spot transactions that need a second look.',
      },
    ],
    process: [
      {
        title: 'Scope & Data Request',
        desc: 'We agree the periods and areas to review, then request your filed returns, ledgers, invoice samples, contracts for key revenue streams and import records.',
      },
      {
        title: 'Review & Testing',
        desc: 'We reconcile returns to the books, test invoices and credit notes, and examine supply treatment, place of supply, input tax recovery, the reverse charge and any deemed supplies.',
      },
      {
        title: 'Findings Report',
        desc: 'You receive a report ranking each issue by risk, with the tax effect, the cause and the fix — and a clear view on which errors need a voluntary disclosure.',
      },
      {
        title: 'Corrections & Training',
        desc: 'We prepare and submit the voluntary disclosures you approve, update your VAT processes and system settings, train your team, and support you through any FTA audit that follows.',
      },
    ],
    requirements: [
      'VAT returns filed for the periods under review',
      'General ledger and VAT control account',
      'Sales and purchase registers with sample invoices',
      'Contracts for your main revenue streams',
      'Import declarations and overseas supplier invoices',
      'Previous voluntary disclosures and FTA correspondence',
      'A short description of your business model and customers',
    ],
    eligibility: {
      heading: 'When a VAT health check makes sense',
      points: [
        'You have been registered for some time and no one has reviewed past returns',
        'You have received an FTA audit notice or information request',
        'Your business model, systems or finance team has changed',
        'You make zero-rated, exempt or overseas supplies as well as standard-rated ones',
        'You are preparing for a sale, investment or due diligence',
        'Your input tax claims or refund requests are consistently large',
      ],
    },
    faqs: [
      {
        q: 'What is a VAT health check?',
        a: 'A structured review of how your business has applied VAT, carried out separately from preparing returns. We reconcile filed returns to your accounts, test invoices and contracts, and check supply treatment, place of supply, input tax recovery and the reverse charge. You receive a report of findings ranked by risk, with the tax effect and the corrections needed, including any voluntary disclosures.',
      },
      {
        q: 'What is a voluntary disclosure and when is it needed?',
        a: 'A voluntary disclosure is the EmaraTax submission used to correct an error or omission in a filed VAT return, a tax assessment or a refund application. It is generally required when the error affects the tax due, unless the FTA’s rules allow that particular error to be corrected in a later return. Disclosing before the FTA raises the issue is generally treated more favourably than waiting for an audit.',
      },
      {
        q: 'What happens during an FTA tax audit?',
        a: 'The FTA notifies you before the audit, then reviews your records — at your premises or at its offices — and may ask for documents, explanations and copies of records held on your systems. You must cooperate and provide what is requested. We prepare the reconciliations and supporting files, help you answer queries accurately, and advise on your position once the FTA issues its findings.',
      },
      {
        q: 'What kind of errors does a health check look for?',
        a: 'Typical issues include exempt supplies treated as zero-rated, input tax recovered on blocked costs or without a valid tax invoice, a missed reverse charge on imported services, the wrong place of supply for services to overseas customers, late or incomplete tax invoices, and deemed supplies — such as business gifts or goods taken for private use — that were never declared.',
      },
      {
        q: 'Can a health check cover a single issue?',
        a: 'Yes. A full review covers all your main transaction types, but a focused review of one area — export evidence, a property transaction, a new contract model, intercompany charges or a refund position — is often the better use of time before a decision or an FTA query. We agree the scope with you before starting.',
      },
      {
        q: 'How often should we have a VAT health check?',
        a: 'There is no legal requirement. A review is worth doing after your first year of registration, when your systems or business model change, before a sale or investment, or when the FTA contacts you. Larger or more complex businesses often schedule one every year, so that errors do not build up across several periods before anyone notices.',
      },
    ],
    included: [
      {
        group: 'Return & Invoice Review',
        desc: 'What you have already filed, tested against your books.',
        items: [
          'Returns reconciled to ledgers and VAT accounts',
          'Tax invoice and credit note testing',
          'Output tax by emirate checked',
          'Import VAT matched to customs data',
          'Prior voluntary disclosures reviewed',
        ],
      },
      {
        group: 'Technical Areas Tested',
        desc: 'The VAT positions where the money and the risk sit.',
        items: [
          'Standard, zero-rated and exempt treatment',
          'Place of supply for goods and services',
          'Input tax recovery and blocked costs',
          'Reverse charge on imported services',
          'Deemed supplies and related-party charges',
          'Apportionment for exempt activity',
        ],
      },
      {
        group: 'Corrections & Readiness',
        desc: 'Fixes made, disclosed where required, and kept in place.',
        items: [
          'Risk-ranked findings report',
          'Voluntary disclosure preparation and submission',
          'VAT process and tax code fixes',
          'Staff VAT training',
          'FTA audit preparation and query support',
        ],
      },
    ],
    related: ['vat-return-filing', 'backlog-accounting', 'internal-audit', 'e-invoicing'],
  },

  /* ───────────────────────── VAT REFUND SERVICES ───────────────────────── */
  {
    slug: 'vat-refund',
    category: 'tax-services',
    navLabel: 'VAT Refund Services',
    icon: HandCoins,
    eyebrow: 'VAT',
    blurb: 'Reclaim excess input tax from the FTA',
    title: 'VAT Refund Services in the UAE',
    heroSubtitle:
      'When your recoverable input tax exceeds your output tax, we check the claim, assemble the evidence the FTA expects and file the refund request through EmaraTax — then answer the FTA’s questions until it reaches a decision.',
    heroHighlights: ['Excess Input Tax Claims', 'Evidence Pack Prepared', 'FTA Queries Answered'],
    metaTitle: 'VAT Refund in the UAE | Excess Input Tax Claims | Smartgic Visa',
    metaDescription:
      'Claim back excess input tax in the UAE: we test the claim, prepare the supporting documents, file your VAT refund request on EmaraTax and answer FTA queries.',
    keywords: [
      'vat refund uae',
      'vat refund dubai',
      'excess input tax refund uae',
      'fta vat refund request',
      'how to claim vat refund uae',
      'vat refund for exporters uae',
    ],
    overview: {
      heading: 'A refund is a claim the FTA will test — build it that way',
      body: [
        'If the input tax you can recover in a period is more than the VAT you charged, the excess is a credit. You can carry it forward against future VAT or ask the FTA to pay it back through EmaraTax. Exporters, businesses with large capital purchases and companies in an investment phase often sit in this position. A refund request invites scrutiny: the FTA reviews the claim, can ask for evidence, and decides whether to pay.',
        'Smartgic prepares the claim as if it will be examined line by line. We reconcile the excess to your returns and ledgers, check that each significant input tax amount is backed by a valid tax invoice or import declaration, confirm export and zero-rating evidence, and correct anything that would weaken the request. We then submit it through your EmaraTax account and respond to the FTA’s queries until it reaches a decision.',
      ],
    },
    stats: [
      { value: 'Excess', label: 'Recoverable input tax above your output tax' },
      { value: 'EmaraTax', label: 'Where the refund request is submitted' },
      { value: 'Evidence', label: 'Invoices, import and export records prepared' },
      { value: 'FTA', label: 'Reviews each request and makes the decision' },
    ],
    benefits: [
      {
        title: 'Claim Checked First',
        desc: 'We test the refund figure against your returns and ledgers before submission, so the amount claimed is the amount you can support.',
      },
      {
        title: 'Evidence Ready to Send',
        desc: 'Supplier tax invoices, import declarations, contracts and payment proof are organised by value, ready when the FTA asks for them.',
      },
      {
        title: 'Zero-Rating Proven',
        desc: 'For exporters, we gather the customs exit documents, shipping records and contracts that support zero-rated sales — a common reason refunds arise.',
      },
      {
        title: 'Weak Points Fixed',
        desc: 'Blocked costs, missing invoices or earlier return errors are corrected before you claim, rather than discovered by the FTA during its review.',
      },
      {
        title: 'Queries Answered Properly',
        desc: 'We draft clear, documented responses to FTA information requests, keeping explanations consistent with your returns and records.',
      },
      {
        title: 'Right Route Chosen',
        desc: 'We advise whether to request a refund now or carry the credit forward, based on your cash position and upcoming VAT liabilities.',
      },
    ],
    process: [
      {
        title: 'Refund Position Review',
        desc: 'We confirm the excess recoverable tax shown in EmaraTax, reconcile it to your returns and ledgers, and identify the input tax amounts the FTA is likely to examine.',
      },
      {
        title: 'Evidence Pack',
        desc: 'We collect and index supplier tax invoices, import declarations, contracts, payment records and export evidence, and fix gaps or errors before anything is filed.',
      },
      {
        title: 'Refund Request Filed',
        desc: 'We complete and submit the refund request through your EmaraTax account, with the bank details the FTA needs to pay you, and keep a copy of everything submitted.',
      },
      {
        title: 'FTA Review & Decision',
        desc: 'If the FTA requests information or documents, we prepare the response. The FTA then approves the refund in full or in part, or rejects it, and we explain your options.',
      },
    ],
    requirements: [
      'VAT returns showing the excess recoverable tax',
      'Purchase register and supplier tax invoices',
      'Import declarations and customs payment records',
      'Sales invoices with export or shipping evidence',
      'Contracts for major purchases or zero-rated sales',
      'Bank statements showing payments to suppliers',
      'Bank letter confirming the account name and IBAN',
    ],
    eligibility: {
      heading: 'When a VAT refund arises',
      points: [
        'You export goods or services and most of your sales are zero-rated',
        'You have made large capital purchases, such as equipment or property for taxable use',
        'You are in an investment or set-up phase, with costs running ahead of revenue',
        'Excess recoverable tax has built up in your account over several periods',
      ],
    },
    faqs: [
      {
        q: 'How do I claim a VAT refund in the UAE?',
        a: 'Once a return shows excess recoverable tax, you can submit a refund request through EmaraTax for all or part of the credit, with validated bank details. The FTA reviews the request and may ask for supporting documents before deciding. If you do not claim a refund, the credit stays available to offset VAT due in later periods.',
      },
      {
        q: 'How long does a VAT refund take?',
        a: 'The FTA sets its own review timelines, and they can be extended when it asks for more information, so nobody can promise a payment date. What you can control is the quality of the claim: a request that reconciles to your returns, with invoices and export evidence ready to send, gives the FTA fewer reasons to come back with questions.',
      },
      {
        q: 'What documents does the FTA ask for?',
        a: 'Commonly, a list of your largest purchases with the matching tax invoices, import declarations, proof of payment and contracts, plus sales invoices with export or shipping evidence for zero-rated supplies. The FTA may also ask for ledgers or explanations of particular transactions. Exactly what it requests varies by business and claim, which is why we prepare the main evidence before filing.',
      },
      {
        q: 'Can the FTA reject or reduce a refund?',
        a: 'Yes. The FTA can approve a refund in full, approve part of it or reject it — for example, where input tax is not supported by a valid tax invoice, relates to blocked or exempt-related costs, or the zero-rating is not evidenced. If you disagree with the decision, you can ask the FTA to reconsider it within the time limit set by law, and we help you prepare that request.',
      },
      {
        q: 'Should we claim a refund or carry the credit forward?',
        a: 'It depends on the size of the credit, your cash needs and whether you expect VAT to become payable soon. A small credit that will be used up next period may not justify a claim; a large or recurring credit, typical for exporters, usually should be claimed. A refund request also means the FTA will look closely at your records, so they need to be in order first.',
      },
      {
        q: 'What about refunds for tourists, foreign businesses or new homes?',
        a: 'These are separate schemes outside the normal return. Tourists reclaim VAT on eligible purchases from participating retailers when they leave the UAE. Foreign businesses that are not established or registered here may reclaim VAT on certain business costs under the business visitor scheme. UAE nationals building a new home can reclaim VAT on eligible construction costs. Each has its own conditions and application route.',
      },
    ],
    included: [
      {
        group: 'Claim Preparation',
        desc: 'The refund figure tested before anyone else sees it.',
        items: [
          'Excess recoverable tax reconciled to returns',
          'Input tax tested against invoices and rules',
          'Blocked and exempt-related costs removed',
          'Errors corrected before filing',
          'Refund or carry-forward recommendation',
        ],
      },
      {
        group: 'Evidence & Submission',
        desc: 'The documents organised and the request filed on EmaraTax.',
        items: [
          'Indexed purchase invoice and import file',
          'Export and zero-rating evidence pack',
          'Bank details set up for the refund',
          'Refund request filed on EmaraTax',
          'Submission records kept for audit',
        ],
      },
      {
        group: 'FTA Review Support',
        desc: 'From the first query to the final decision.',
        items: [
          'Responses to FTA information requests',
          'Additional schedules and explanations',
          'Decision review and next steps',
          'Reconsideration request support',
          'Guidance on the tourist, visitor and new-home schemes',
        ],
      },
    ],
    related: ['vat-return-filing', 'vat-compliance', 'accounting-services', 'customs-services'],
  },

  /* ───────────────────────── VAT DEREGISTRATION ───────────────────────── */
  {
    slug: 'vat-deregistration',
    category: 'tax-services',
    navLabel: 'VAT Deregistration',
    icon: FileX2,
    eyebrow: 'VAT',
    blurb: 'Cancel your TRN when supplies stop or fall',
    title: 'VAT Deregistration in the UAE',
    heroSubtitle:
      'Stopping taxable supplies, closing the company or falling below the threshold? We confirm whether deregistration is required or optional, file the application on time, prepare your final return and clear the account so the FTA can approve it.',
    heroHighlights: ['Required or Optional', 'Final Return Prepared', 'Tax Group Changes'],
    metaTitle: 'VAT Deregistration in the UAE | Cancel Your TRN | Smartgic Visa',
    metaDescription:
      'VAT deregistration in the UAE: we check if you must or may deregister, apply within the 20-business-day window, file your final return and clear the account.',
    keywords: [
      'vat deregistration uae',
      'vat deregistration dubai',
      'cancel vat registration uae',
      'fta vat deregistration',
      'cancel trn number uae',
      'vat deregistration after licence cancellation',
    ],
    overview: {
      heading: 'Closing a TRN takes as much care as opening one',
      body: [
        'You must apply to deregister within 20 business days of stopping taxable supplies, or of your taxable supplies falling below the AED 187,500 voluntary threshold. Between AED 187,500 and AED 375,000, deregistering is usually your choice. Until the FTA approves the application you stay registered, returns keep falling due, and approval will not come while any return is missing or tax and penalties remain unpaid.',
        'Smartgic sequences the whole exit. We confirm which test applies and the date it was met, file the deregistration application on EmaraTax with the supporting evidence, and prepare your final return — including VAT that may be due on stock and assets you still hold. Where the company is closing, we line the VAT deregistration up with corporate tax deregistration and the licence cancellation, so no registration is left open behind you.',
      ],
    },
    stats: [
      { value: '20', label: 'Business days to apply once deregistration is required' },
      { value: '187,500', label: 'AED — falling below it triggers deregistration' },
      { value: 'Final', label: 'Return covering the period to deregistration' },
      { value: 'Nil', label: 'Outstanding tax and penalties before approval' },
    ],
    benefits: [
      {
        title: 'Right Test, Right Date',
        desc: 'We establish whether deregistration is mandatory or optional and the date the condition was met, because that date starts the 20-business-day clock.',
      },
      {
        title: 'On-Time Application',
        desc: 'Applying within the window avoids a late-deregistration penalty, and keeping returns filed in the meantime avoids late-filing penalties too.',
      },
      {
        title: 'A Clean Final Return',
        desc: 'Your last return covers every supply up to the effective date, including any VAT due on business assets you keep after trading stops.',
      },
      {
        title: 'Account Cleared for Approval',
        desc: 'Outstanding returns are filed and tax and penalties settled or reconciled, since the FTA will not approve deregistration while anything is open.',
      },
      {
        title: 'Tax Groups Handled',
        desc: 'If one member leaves or stops trading, we amend the tax group rather than closing it, and confirm who files the group’s remaining returns.',
      },
      {
        title: 'Closure in the Right Order',
        desc: 'VAT deregistration, corporate tax deregistration and licence cancellation are sequenced together, so one step does not stall the others.',
      },
    ],
    process: [
      {
        title: 'Eligibility & Date Check',
        desc: 'We review your supplies and plans to confirm whether deregistration is required or optional, and the date the condition was met, which sets the 20-business-day deadline.',
      },
      {
        title: 'Account Clean-Up',
        desc: 'We file any outstanding returns, reconcile your EmaraTax balance and arrange settlement of VAT and penalties due, so nothing blocks the application.',
      },
      {
        title: 'Deregistration Application',
        desc: 'We submit the deregistration application through EmaraTax with the reason, the supporting evidence — such as a licence cancellation or turnover records — and the requested effective date.',
      },
      {
        title: 'Final Return & Approval',
        desc: 'We answer FTA queries, file the final return to the effective date including any VAT on retained assets, and confirm once the FTA approves the deregistration.',
      },
    ],
    requirements: [
      'TRN and EmaraTax access',
      'Reason for deregistering and the date it arose',
      'Turnover records showing the fall in taxable supplies',
      'Licence cancellation, liquidation or closure documents, if closing',
      'Stock and fixed asset listing at the deregistration date',
      'Details of any unfiled returns or unpaid VAT',
      'For tax group changes: details of the leaving member',
    ],
    eligibility: {
      heading: 'When VAT deregistration applies',
      points: [
        'Required: you have stopped making taxable supplies',
        'Required: your taxable supplies have fallen below the AED 187,500 voluntary threshold',
        'Optional: your supplies are below AED 375,000 but above AED 187,500 — with limits if you registered voluntarily',
        'Closing: the company is being liquidated or its licence cancelled',
        'Tax groups: a member is leaving or the group no longer qualifies',
      ],
    },
    faqs: [
      {
        q: 'When must I deregister for VAT?',
        a: 'You must apply within 20 business days of stopping taxable supplies, or of your taxable supplies falling below the AED 187,500 voluntary threshold. If your supplies are below the AED 375,000 mandatory threshold but above AED 187,500, you may be able to deregister by choice, although a business that registered voluntarily must first complete a minimum period of registration.',
      },
      {
        q: 'Does cancelling my trade licence cancel my VAT registration?',
        a: 'No. Your TRN stays active until the FTA deregisters it — normally on your application — and returns keep falling due in the meantime. Licensing authorities, banks and liquidators may also ask for proof that tax registrations have been closed. Cancelling the licence first and dealing with the TRN later is a common cause of late-filing penalties, so we sequence the steps together.',
      },
      {
        q: 'What is included in the final VAT return?',
        a: 'All supplies and purchases up to the effective date of deregistration, plus any adjustments. VAT may also be due on business assets and stock you still hold at that date if you recovered input tax on them. Any tax due must be paid before the FTA completes the deregistration, so we calculate it in advance.',
      },
      {
        q: 'Can a tax group member deregister on its own?',
        a: 'A member does not deregister separately. Instead, the representative member applies through EmaraTax to remove it from the group — for example, when it is sold, stops trading or no longer meets the conditions. The remaining members continue under the group TRN, and the departing company may need its own VAT registration if it still makes taxable supplies.',
      },
      {
        q: 'What if I missed the 20-business-day deadline?',
        a: 'Apply as soon as possible. A late-deregistration penalty can apply, and you remain responsible for filing returns until the FTA deregisters you. We file the application, bring any missing returns up to date and calculate what is outstanding, so the account can be closed rather than continuing to build up penalties. Penalty amounts are set by the authority; we confirm the current figures for your case.',
      },
      {
        q: 'Do I need to deregister from corporate tax as well?',
        a: 'If the business is closing, yes — they are separate registrations. The corporate tax deregistration application is due within 3 months of the business ceasing — whether it stops trading, is liquidated or is dissolved — and needs all corporate tax returns filed and liabilities settled. A business that is only dropping below the VAT threshold stays registered for corporate tax. We run both deregistrations together when a company closes.',
      },
    ],
    included: [
      {
        group: 'Assessment',
        desc: 'Which rule applies to you, and from when.',
        items: [
          'Mandatory or optional deregistration test',
          'Date the condition was met',
          'Deadline and penalty exposure check',
          'Tax group impact review',
          'Corporate tax and licence closure mapping',
        ],
      },
      {
        group: 'Application & Final Return',
        desc: 'The filings that close the registration properly.',
        items: [
          'Outstanding returns brought up to date',
          'EmaraTax balance reconciled',
          'Deregistration application with evidence',
          'Final VAT return to the effective date',
          'VAT on stock and retained assets calculated',
        ],
      },
      {
        group: 'Group & Closure Changes',
        desc: 'Related registrations and records kept in line.',
        items: [
          'Tax group member removal',
          'Representative member changes',
          'Coordination with corporate tax deregistration',
          'Licence cancellation sequencing',
          'Records kept after deregistration',
        ],
      },
    ],
    related: ['corporate-tax-deregistration', 'licence-cancellation', 'liquidation-deregistration', 'vat-return-filing'],
  },

  /* ───────────────────────── E-INVOICING READINESS ───────────────────────── */
  {
    slug: 'e-invoicing',
    category: 'tax-services',
    navLabel: 'E-Invoicing Readiness',
    icon: Network,
    eyebrow: 'E-Invoicing',
    blurb: 'Get ready for the UAE’s e-invoicing mandate',
    title: 'E-Invoicing Readiness for UAE Businesses',
    heroSubtitle:
      'The UAE is moving to mandatory structured e-invoicing in phases. We confirm when your phase applies, map your invoice data and systems, help you choose and onboard an Accredited Service Provider, and test the flow before go-live.',
    heroHighlights: ['Phase & Date Confirmed', 'ASP Selection & Onboarding', 'Peppol-Based Exchange'],
    metaTitle: 'UAE E-Invoicing Readiness & ASP Onboarding | Smartgic Visa',
    metaDescription:
      'UAE e-invoicing readiness: we confirm your phase, map your invoice data, help you choose and onboard an Accredited Service Provider and test before go-live.',
    keywords: [
      'e-invoicing uae',
      'uae e-invoicing mandate',
      'e-invoicing readiness uae',
      'accredited service provider uae e-invoicing',
      'peppol uae',
      'fta e-invoicing',
    ],
    overview: {
      heading: 'E-invoicing changes how invoices are made, not just how they are sent',
      body: [
        'The UAE is replacing paper and PDF invoices with structured e-invoices for in-scope transactions. Each invoice is created as machine-readable data and exchanged through Accredited Service Providers on a Peppol-based network, with the tax data reported to the authorities. The mandate is being introduced in phases, starting with larger businesses, and once your phase goes live a PDF emailed to a customer will no longer meet the requirement.',
        'Smartgic starts with the facts that drive your plan: which phase and date apply to you, which transactions are in scope, and where your invoice data lives. We map your invoicing fields to the required data model, identify gaps in your ERP or accounting system, help you shortlist and onboard an Accredited Service Provider, and run test invoices with you. We also update the processes and train the people who create, approve and correct invoices.',
      ],
    },
    stats: [
      { value: 'Peppol', label: 'Network model for exchanging e-invoices' },
      { value: 'ASP', label: 'Accredited Service Provider transmits your invoices' },
      { value: 'Phased', label: 'Rollout, starting with larger businesses' },
      { value: 'Data', label: 'Structured invoice fields replace PDFs and paper' },
    ],
    benefits: [
      {
        title: 'Your Phase Confirmed',
        desc: 'We confirm which phase and go-live date apply to your business, so your project plan works back from the right deadline.',
      },
      {
        title: 'Data Gaps Found Early',
        desc: 'Mapping your invoice fields against the required data model shows missing customer, product or tax details long before testing exposes them.',
      },
      {
        title: 'An ASP That Fits',
        desc: 'We compare Accredited Service Providers on integration with your system, volumes, support and cost, and help you through contracting and onboarding.',
      },
      {
        title: 'System Changes Scoped',
        desc: 'Your ERP or accounting software is assessed for what it can already produce, what needs configuring and what needs an integration or upgrade.',
      },
      {
        title: 'Tested Before Go-Live',
        desc: 'Test invoices, credit notes and validation errors are run end to end, so problems surface in testing rather than with live customers.',
      },
      {
        title: 'Teams Ready to Operate',
        desc: 'Updated procedures and training cover invoice creation, approvals, corrections and exception handling under the new process.',
      },
    ],
    process: [
      {
        title: 'Readiness Assessment',
        desc: 'We confirm your phase and go-live date, the transactions in scope, your invoicing volumes and the systems involved, and set out a plan that works back from that date.',
      },
      {
        title: 'Data & System Mapping',
        desc: 'We map your invoice, credit note and master data fields to the required structured format, flag missing or inconsistent data, and scope the changes your ERP or accounting system needs.',
      },
      {
        title: 'ASP Selection & Onboarding',
        desc: 'We help you shortlist Accredited Service Providers, compare their integration options and terms, and coordinate onboarding and the connection between the provider and your system.',
      },
      {
        title: 'Testing',
        desc: 'We run test scenarios with you and the provider — standard invoices, credit notes, special cases and validation errors — and track every issue until it is resolved.',
      },
      {
        title: 'Go-Live & Process Change',
        desc: 'We update procedures for creating, approving and correcting invoices, train your team, and support the first live invoicing cycles so issues are fixed quickly.',
      },
    ],
    requirementsHeading: 'Information we’ll need',
    requirements: [
      'Revenue figures used to confirm your phase',
      'Sample invoices and credit notes for each transaction type',
      'Details of your ERP, accounting or billing systems',
      'Customer and supplier master data extracts',
      'Your current invoicing workflow and approval steps',
      'Invoice volumes by type and channel',
      'IT contacts and any existing integration providers',
    ],
    eligibility: {
      heading: 'Who should prepare now',
      points: [
        'Larger businesses, which fall into the first phase of the mandate',
        'Businesses that invoice other UAE businesses or government entities',
        'Companies still invoicing manually, in spreadsheets or word processors',
        'Groups running several entities, systems or invoicing platforms',
      ],
    },
    faqs: [
      {
        q: 'When does e-invoicing become mandatory for my business?',
        a: 'It depends on your phase. The UAE is introducing the mandate in stages, with larger businesses in the first phase and others following, and each phase has its own dates for appointing a provider and going live. Dates and criteria are set by the authorities and can be updated, so we confirm the phase and dates that apply to you and plan back from them.',
      },
      {
        q: 'What is an Accredited Service Provider?',
        a: 'An Accredited Service Provider (ASP) is a provider approved by the UAE authorities to exchange e-invoices on your behalf. Your system sends the invoice data to your ASP, which validates it and delivers it through the Peppol-based network to your customer’s provider, with the tax data reported to the authorities. Businesses in scope need to appoint an ASP ahead of their go-live date.',
      },
      {
        q: 'Is a PDF invoice still valid under e-invoicing?',
        a: 'For transactions within the mandate, once your phase is live, a PDF alone will not meet the requirement. An e-invoice is structured data in a defined format, exchanged through the network; a PDF, scan or email attachment is not an e-invoice, even if software generated it. Invoices therefore need to come from a system that can produce the required data.',
      },
      {
        q: 'Does e-invoicing replace VAT returns?',
        a: 'No. E-invoicing changes how invoices are issued, exchanged and reported, but VAT returns are still filed through EmaraTax by the 28th day after each tax period. Because the authorities receive invoice data directly, differences between your e-invoices and your VAT returns become easier to spot, so the two need to reconcile.',
      },
      {
        q: 'Do we need a new accounting system?',
        a: 'Not necessarily. Many ERP and accounting platforms can produce the required data through configuration or a connector offered by the ASP. Others need an upgrade or middleware, and spreadsheet-based invoicing usually cannot cope. The readiness assessment tells you which situation you are in, and what the change involves, before you commit to a provider or a system.',
      },
      {
        q: 'What should we do now if our phase is later?',
        a: 'Use the time on the work that takes longest: cleaning customer and product master data, capturing the fields the format requires, deciding how your system will connect to an ASP and agreeing who owns invoice corrections. Businesses that leave this to the final months tend to discover data problems during testing, when there is little time left to fix them.',
      },
    ],
    included: [
      {
        group: 'Readiness Assessment',
        desc: 'Where you stand and what your deadline means.',
        items: [
          'Phase and go-live date confirmation',
          'Transaction scope review',
          'Current invoicing process walkthrough',
          'Gap analysis against the requirements',
          'Readiness plan and timeline',
        ],
      },
      {
        group: 'Data, Systems & ASP',
        desc: 'The technical groundwork for compliant e-invoices.',
        items: [
          'Invoice data mapping to the required format',
          'Master data clean-up plan',
          'ERP and accounting system gap review',
          'ASP shortlisting and comparison',
          'ASP onboarding coordination',
        ],
      },
      {
        group: 'Testing & Go-Live',
        desc: 'Confidence before your go-live date, and support after it.',
        items: [
          'Test scenarios and issue tracking',
          'Credit note and correction workflows',
          'Updated invoicing procedures',
          'Finance and sales team training',
          'Post-go-live support',
        ],
      },
    ],
    related: ['vat-compliance', 'accounting-services', 'vat-return-filing', 'cfo-services'],
  },

  /* ───────────────────────── CUSTOMS REGISTRATION & ADVISORY ───────────────────────── */
  {
    slug: 'customs-services',
    category: 'tax-services',
    navLabel: 'Customs Registration & Advisory',
    icon: Ship,
    eyebrow: 'Customs',
    blurb: 'Customs codes, HS classification & duty',
    title: 'Customs Registration & Advisory in the UAE',
    heroSubtitle:
      'We register your business with the relevant emirate’s customs authority, then help you classify, value and declare goods correctly — paying the duty that is due, reclaiming what can be refunded and moving goods across free zone borders without surprises.',
    heroHighlights: ['Customs Client Code', 'HS Classification', 'Free Zone & Mainland Moves'],
    metaTitle: 'Customs Registration & Advisory in Dubai | Smartgic Visa',
    metaDescription:
      'Customs registration and advice in the UAE: customs client codes, HS classification, CIF valuation, free zone to mainland moves, duty refunds and health checks.',
    keywords: [
      'customs registration dubai',
      'customs client code uae',
      'dubai customs code registration',
      'hs code classification uae',
      'customs duty uae',
      'import export code dubai',
    ],
    overview: {
      heading: 'Duty is decided by the declaration — get the details right',
      body: [
        'Any business that imports or exports goods needs a customs client code with the customs authority of the emirate it trades through. Most imports then carry 5% customs duty on their CIF value under the GCC Common Customs Law, but the amount actually paid depends on three details in each declaration: the HS code, the declared value and the origin. Goods moving from a free zone into the mainland are treated as imported at that point.',
        'Smartgic handles the registration and the advice around it. We prepare your customs client code application, link the code to your VAT registration so import VAT flows into your returns, and review how your main products are classified and valued. We advise on origin, duty exemptions and refunds, and on moving goods between free zones and the mainland — and run customs health checks on past declarations to find overpaid duty and errors to correct.',
      ],
    },
    stats: [
      { value: '5%', label: 'Customs duty on the CIF value of most imports' },
      { value: 'CIF', label: 'Cost, insurance and freight — the duty base' },
      { value: 'HS code', label: 'Classification that sets the duty treatment' },
      { value: 'Mainland', label: 'Goods arriving from a free zone count as imports' },
    ],
    benefits: [
      {
        title: 'Registered With the Right Authority',
        desc: 'Your customs client code is set up with the emirate’s customs authority that matches where your goods actually enter and leave the UAE.',
      },
      {
        title: 'Correct HS Classification',
        desc: 'Products are classified under the right HS code, which decides whether duty is due at 5%, exempt or charged differently.',
      },
      {
        title: 'Defensible Customs Value',
        desc: 'We check that declared values include freight, insurance and other costs that belong in the CIF value — and nothing that does not.',
      },
      {
        title: 'Origin Used Properly',
        desc: 'Certificates of origin are checked, so goods that qualify for GCC-origin treatment or another exemption are not charged duty unnecessarily.',
      },
      {
        title: 'Free Zone Moves Planned',
        desc: 'Goods leaving a free zone for the mainland are imported at that point, so we plan the declarations, duty and VAT before stock moves.',
      },
      {
        title: 'Refunds and Exemptions Pursued',
        desc: 'We identify duty that can be reclaimed on re-exports or exempted under a recognised regime, and prepare the applications for the customs authority.',
      },
    ],
    process: [
      {
        title: 'Trade Profile Review',
        desc: 'We review what you import or export, through which emirates and ports, your licence activities and your free zone or mainland set-up, to confirm the registrations you need.',
      },
      {
        title: 'Customs Code Registration',
        desc: 'We prepare and submit the customs client code application with the relevant customs authority — in Dubai, through Dubai Trade — and link the code to your VAT registration.',
      },
      {
        title: 'Classification & Valuation',
        desc: 'We review HS codes, customs values and origin documents for your main products, and set out the duty treatment, exemptions and documentation each shipment needs.',
      },
      {
        title: 'Ongoing Advice & Health Checks',
        desc: 'We advise on new products, free zone and mainland moves, exemptions and refund claims, and periodically review past declarations to find overpaid duty or errors to correct.',
      },
    ],
    requirements: [
      'Trade licence showing trading or import and export activities',
      'Memorandum of Association or free zone incorporation documents',
      'Passport and Emirates ID of the owner or manager',
      'Contact details and authorised signatory information',
      'TRN, if the business is VAT registered',
      'Product list with descriptions and specifications',
      'Sample commercial invoices, packing lists and certificates of origin',
    ],
    eligibility: {
      heading: 'Who needs a customs code',
      points: [
        'Mainland companies importing or exporting goods',
        'Free zone companies clearing goods through UAE customs',
        'Businesses moving goods from a free zone into the mainland',
        'Manufacturers importing raw materials or machinery',
        'Online sellers importing stock for sale in the UAE',
      ],
    },
    faqs: [
      {
        q: 'How do I get a customs client code in Dubai?',
        a: 'You register with Dubai Customs through the Dubai Trade portal, using your trade licence and the owner’s or manager’s identity documents; the licence normally needs activities that allow import or export. The code is then used on every declaration and should be kept up to date when your licence changes. VAT-registered businesses should also link it to their TRN in EmaraTax.',
      },
      {
        q: 'How is UAE customs duty calculated?',
        a: 'For most imports, duty is 5% of the CIF value — the cost of the goods plus insurance and freight to the UAE. Some goods are exempt and some are charged differently, depending on their HS classification and origin. Import VAT is due as well; VAT-registered importers usually account for it through the reverse charge on their VAT return rather than paying it at the border.',
      },
      {
        q: 'What happens when goods move from a free zone to the mainland?',
        a: 'They are treated as imported into the UAE at that point, so a customs declaration is needed and duty and import VAT become due as the goods enter the mainland, unless an exemption applies. Goods brought into a free zone from abroad are generally not charged duty while they remain there. Planning the move, and who acts as importer, keeps the duty and VAT position clear.',
      },
      {
        q: 'Can customs duty be refunded?',
        a: 'In some cases. Duty paid on goods that are later re-exported, returned or shown to qualify for an exemption may be refundable, subject to the conditions, documents and time limits set by the customs authority. Claims depend on matching the original import declaration to the exit evidence, so records matter. We assess eligibility and prepare the claim; the authority decides.',
      },
      {
        q: 'What is a customs health check?',
        a: 'A structured review of a sample of your past declarations, checking HS classification, declared values, origin claims, exemptions used and duty paid against your commercial records. It identifies duty that may have been overpaid and could be reclaimed, underpayments that should be corrected, and process gaps — for example, freight left out of the declared value or outdated product codes.',
      },
      {
        q: 'Which emirate’s customs authority should I register with?',
        a: 'Usually the one where your goods enter or leave the UAE, since declarations are filed with the customs authority that controls that port, airport or land border. Goods arriving through Jebel Ali are declared to Dubai Customs, for example, while shipments through Abu Dhabi or Sharjah go through those authorities. Businesses using several entry points may need more than one registration.',
      },
    ],
    included: [
      {
        group: 'Customs Registration',
        desc: 'The codes and links you need before goods move.',
        items: [
          'Customs client code application',
          'Registration with each relevant emirate',
          'Customs code linked to your TRN',
          'Licence activity check for import and export',
          'Registration updates when your licence changes',
        ],
      },
      {
        group: 'Classification, Value & Origin',
        desc: 'The three details that decide the duty you pay.',
        items: [
          'HS code classification review',
          'CIF valuation checks',
          'Certificate of origin review',
          'Duty exemption assessment',
          'Refund claims for re-exported goods',
        ],
      },
      {
        group: 'Movements & Health Checks',
        desc: 'Ongoing advice as your supply chain changes.',
        items: [
          'Free zone to mainland movement planning',
          'Temporary admission and transit advice',
          'Review of past declarations',
          'Overpaid duty identification',
          'Broker and process recommendations',
        ],
      },
    ],
    related: ['excise-tax', 'vat-return-filing', 'free-zone-company-formation', 'trade-licence'],
  },

  /* ───────────────────────── EXCISE TAX SERVICES ───────────────────────── */
  {
    slug: 'excise-tax',
    category: 'tax-services',
    navLabel: 'Excise Tax Services',
    icon: Boxes,
    eyebrow: 'Excise Tax',
    blurb: 'Registration, returns & checks on excise goods',
    title: 'Excise Tax Registration & Compliance in the UAE',
    heroSubtitle:
      'If you import, produce, stockpile or store excise goods in a designated zone, we confirm whether you must register, handle the FTA registration, prepare your excise returns and declarations, and review past filings before an audit does.',
    heroHighlights: ['Importers & Producers', 'Designated Zone Warehouses', 'Excise Health Checks'],
    metaTitle: 'Excise Tax Registration & Returns in the UAE | Smartgic Visa',
    metaDescription:
      'Excise tax in the UAE for tobacco, e-smoking products and energy, carbonated or sweetened drinks: FTA registration, returns, health checks and audit support.',
    keywords: [
      'excise tax uae',
      'excise tax registration uae',
      'excise tax dubai',
      'excise tax on energy drinks uae',
      'designated zone excise uae',
      'fta excise tax return',
    ],
    overview: {
      heading: 'Excise follows the goods — through every import, release and stock count',
      body: [
        'Excise tax applies to specific goods in the UAE: tobacco and tobacco products, electronic smoking devices and liquids, energy drinks, carbonated drinks and sweetened drinks. Importers and producers of these goods must register with the FTA, as must businesses stockpiling them above the threshold and warehouse keepers in designated zones. Because excise falls due at specific points — import, production, release from a designated zone — weak stock records and misclassified products are where unexpected liabilities usually start.',
        'Smartgic confirms which of your products are excise goods and which registration obligations you carry, then handles the FTA registration and any designated zone or warehouse keeper requirements. We prepare your excise returns and declarations from reconciled stock and sales data, run excise health checks on past filings and stock movements, and support you through FTA audits with the records, reconciliations and explanations the FTA asks for.',
      ],
    },
    stats: [
      { value: 'Tobacco', label: 'Plus e-smoking devices and their liquids' },
      { value: 'Drinks', label: 'Energy, carbonated and sweetened drinks' },
      { value: 'Importers', label: 'And producers must register with the FTA' },
      { value: 'Zones', label: 'Designated zone warehouse keepers must register too' },
    ],
    benefits: [
      {
        title: 'Products Classified Correctly',
        desc: 'We confirm which of your products fall within excise categories — for example, whether a drink counts as an energy, carbonated or sweetened drink.',
      },
      {
        title: 'Registration Obligations Clear',
        desc: 'Importer, producer, stockpiler and designated zone obligations are mapped to your actual activities, so you register for what applies and nothing else.',
      },
      {
        title: 'Returns From Reconciled Stock',
        desc: 'Each excise return is built from stock, production, import and sales records that reconcile with each other, not from estimates.',
      },
      {
        title: 'Designated Zone Controls',
        desc: 'Movements into, out of and between designated zones are documented and declared, so stock held under suspension stays properly accounted for.',
      },
      {
        title: 'Past Filings Checked',
        desc: 'Excise health checks test past returns, declarations and stock movements, so errors can be corrected through a voluntary disclosure before an audit.',
      },
      {
        title: 'Audit-Ready Records',
        desc: 'When the FTA audits, your stock reconciliations, declarations and supporting documents are already organised, and we help you answer its questions.',
      },
    ],
    process: [
      {
        title: 'Product & Activity Review',
        desc: 'We review your product range, suppliers and supply chain to confirm which goods are excise goods and whether you import, produce, stockpile or hold them in a designated zone.',
      },
      {
        title: 'FTA Registration',
        desc: 'We prepare and submit the excise registration through EmaraTax, including designated zone or warehouse keeper details where they apply, and respond to any FTA queries.',
      },
      {
        title: 'Returns & Declarations',
        desc: 'Each period, we reconcile stock, production, imports and releases, then prepare and file your excise return and the related declarations through your EmaraTax account.',
      },
      {
        title: 'Health Checks & Audit Support',
        desc: 'We review past filings and stock records for errors, prepare voluntary disclosures where needed, and support you through FTA audits with reconciliations and documented explanations.',
      },
    ],
    requirements: [
      'Trade licence and company documents',
      'Product list with ingredients, specifications and labels',
      'Customs client code and import records',
      'Production, stock and inventory records',
      'Sales and price records for excise goods',
      'Designated zone and warehouse details, if applicable',
      'Previous excise returns and declarations, if registered',
    ],
    eligibility: {
      heading: 'Who must register for excise tax',
      points: [
        'Importers of excise goods into the UAE',
        'Producers of excise goods in the UAE',
        'Businesses that stockpile excise goods above the stockpiling threshold',
        'Warehouse keepers operating in a designated zone',
      ],
    },
    faqs: [
      {
        q: 'Which goods are subject to excise tax in the UAE?',
        a: 'Tobacco and tobacco products, electronic smoking devices and tools, the liquids used in them, energy drinks, carbonated drinks and sweetened drinks. Whether a particular product falls into a category depends on its ingredients and characteristics, so drinks in particular should be checked product by product. Rates and the basis of calculation are set by the authorities and have changed over time, so we confirm the current treatment for each product.',
      },
      {
        q: 'Do I need to register for excise tax?',
        a: 'You must register if you import excise goods into the UAE, produce them here, stockpile them above the threshold, or operate a warehouse in a designated zone where excise goods are held. Businesses that only buy goods locally on which excise has already been paid, and sell them on, are generally not required to register. We review your activities and confirm the position before you apply.',
      },
      {
        q: 'What is a designated zone for excise purposes?',
        a: 'A designated zone is a fenced, controlled area — usually within a free zone — that has been specifically designated for excise purposes. Excise goods held there can be under tax suspension until they are released into the UAE market, at which point excise becomes due. Warehouse keepers in these zones must register and keep detailed records of goods entering, leaving and moving between zones.',
      },
      {
        q: 'How are excise returns filed?',
        a: 'Registered businesses file excise returns through EmaraTax for each tax period, reporting the excise goods released for consumption, imported or produced, and any deductible excise, and pay the tax by the statutory deadline. Separate declarations apply to certain movements, such as goods entering, leaving or moving between designated zones. Accurate returns depend on stock records that reconcile with production, purchases and sales.',
      },
      {
        q: 'Can excise tax be recovered on exports?',
        a: 'In some cases. Where excise has been paid on goods that are then exported, or used to produce other excise goods, the excise may be deductible or refundable, subject to the conditions and evidence the FTA requires. The export evidence and stock records need to line up, which is a common weak point. We assess what is claimable and prepare the supporting file.',
      },
      {
        q: 'What does an excise health check cover?',
        a: 'We review a sample of past returns and declarations against your stock, production, import and sales records, check product classification and the basis used to calculate excise, and test designated zone movements and any deductions claimed. You receive a list of findings with the tax effect, and we prepare voluntary disclosures where errors need correcting.',
      },
    ],
    included: [
      {
        group: 'Registration & Set-Up',
        desc: 'The right registrations for the way you handle excise goods.',
        items: [
          'Excise goods classification review',
          'Registration obligation assessment',
          'FTA excise registration on EmaraTax',
          'Designated zone warehouse keeper registration',
          'Customs details for excise imports',
        ],
      },
      {
        group: 'Returns & Declarations',
        desc: 'Period filings built from reconciled stock data.',
        items: [
          'Excise return preparation and filing',
          'Import and release declarations',
          'Designated zone movement declarations',
          'Deductible excise and refund claims',
          'Stock reconciliation each period',
        ],
      },
      {
        group: 'Health Checks & Audits',
        desc: 'Errors found and fixed before the FTA finds them.',
        items: [
          'Review of past returns and declarations',
          'Stock and movement testing',
          'Voluntary disclosure preparation',
          'FTA audit preparation and support',
          'Process and record-keeping improvements',
        ],
      },
    ],
    related: ['customs-services', 'vat-compliance', 'accounting-services', 'free-zone-company-formation'],
  },
];
