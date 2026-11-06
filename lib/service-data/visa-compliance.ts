import {
  BriefcaseBusiness,
  UserPlus,
  Heart,
  CalendarClock,
  FileX2,
  ShieldCheck,
  ShieldAlert,
  Network,
  Compass,
} from 'lucide-react';
import type { Service } from '../service-types';

/*
 * Visa & immigration and compliance & risk service pages.
 * Visa eligibility thresholds, fees, grace periods, fine amounts and processing
 * times are deliberately never stated: they are set by GDRFA / ICP / MOHRE and
 * the free zone authorities, change often, and are confirmed per case.
 */
export const visaComplianceServices: Service[] = [
  /* ───────────────────────── INVESTOR & PARTNER VISA ───────────────────────── */
  {
    slug: 'investor-visa',
    category: 'visa-immigration',
    navLabel: 'Investor & Partner Visa',
    icon: BriefcaseBusiness,
    eyebrow: 'Investor Residence',
    blurb: 'Residence through the company you own',
    title: 'Investor & Partner Visa in Dubai & the UAE',
    heroSubtitle:
      'Live in the UAE on the strength of the company you own or co-own. We line up your licence, establishment card and quota, then take your partner or investor visa from entry permit to Emirates ID.',
    heroHighlights: ['Mainland Partner Visas', 'Free Zone Investor Visas', 'Entry Permit to Emirates ID'],
    metaTitle: 'Investor & Partner Visa UAE | Dubai Residence | Smartgic Visa',
    metaDescription:
      'Investor visa in Dubai and the UAE through your own company — mainland partner or free zone investor visa, from quota check to Emirates ID. Speak to an advisor.',
    keywords: [
      'investor visa dubai',
      'partner visa uae',
      'free zone investor visa',
      'business owner visa uae',
      'investor visa requirements uae',
    ],
    overview: {
      heading: 'Your company is your sponsor — so it has to be ready first',
      body: [
        'An investor or partner visa is residence sponsored by the business you own. On the mainland, shareholders apply for a partner visa through the immigration authority; in a free zone, the authority processes an investor visa for its licensees. Either way, the company must be licensed, hold a valid establishment card and have quota available before anything else moves. Shareholding, licence status and the authority’s current criteria all decide whether each owner can be sponsored.',
        'We start with the company: we check the licence, the establishment card and your quota, and fix any gaps before applying. Then we run the residence chain — entry permit or change of status, medical fitness test, Emirates ID biometrics and issue — booking each appointment and tracking the file. Once your residence is issued, we can process visas for your spouse and children, and tell you honestly whether the Golden Visa is worth exploring as a longer-term route.',
      ],
    },
    stats: [
      { value: '2 routes', label: 'Mainland partner visa or free zone investor visa' },
      { value: 'Quota', label: 'Must be available on the company’s file first' },
      { value: 'GDRFA', label: 'Handles Dubai residence; ICP the other emirates' },
      { value: 'EID', label: 'Emirates ID is the proof of residence' },
    ],
    benefits: [
      { title: 'Company Readiness Check', desc: 'We confirm your licence, establishment card and quota are valid before you apply, so the file is not rejected at the first step.' },
      { title: 'Right Route for Each Owner', desc: 'Mainland partner visa or free zone investor visa — we match each shareholder to the route their company and shareholding support.' },
      { title: 'Inside or Outside the UAE', desc: 'If you are already in the country we arrange a change of status; if not, we apply for your entry permit first.' },
      { title: 'Appointments Booked for You', desc: 'Medical fitness test and Emirates ID biometrics are scheduled around your diary, with the documents for each appointment prepared in advance.' },
      { title: 'Family on the Same File', desc: 'Once your residence is issued, we move straight on to visas for your spouse and children, using the documents we already hold.' },
      { title: 'Golden Visa Comparison', desc: 'If your investment or profile may qualify for the long-term Golden Visa, we explain the trade-offs before you commit to either route.' },
    ],
    process: [
      { title: 'Company & Quota Review', desc: 'We check your trade licence, establishment card, quota and each owner’s shareholding against the authority’s current criteria, and resolve any gaps before an application is made.' },
      { title: 'Entry Permit or Status Change', desc: 'We apply for the entry permit through GDRFA, ICP or your free zone authority. If you are already in the UAE, we follow it with a change of status.' },
      { title: 'Medical & Biometrics', desc: 'We book your medical fitness test and Emirates ID biometrics, arrange health insurance where your emirate requires it, and track results so nothing waits on a missing document.' },
      { title: 'Residence Issued', desc: 'Your residence is approved and your Emirates ID is issued as proof of it. We record the expiry date so renewal starts well before it falls due.' },
      { title: 'Family Sponsorship', desc: 'With your own residence in place, we arrange the attested certificates, tenancy and insurance needed to sponsor your spouse and children, and run their files in parallel.' },
    ],
    requirements: [
      'Passport copy and personal photograph',
      'Current UAE visa or entry record, if you are in the country',
      'Trade licence and Memorandum of Association',
      'Establishment card copy',
      'Share certificate or register showing your shareholding',
      'Tenancy contract / Ejari (mainland companies)',
      'Health insurance details, where required',
    ],
    eligibility: {
      heading: 'Who this route suits',
      points: [
        'Shareholders or partners in a UAE mainland company',
        'Owners of a free zone company with visa quota',
        'Founders who have just set up and need their own residence',
        'Investors joining a company after a share transfer',
        'Business owners planning to sponsor their family next',
      ],
    },
    faqs: [
      {
        q: 'What is the difference between a partner visa and an investor visa?',
        a: 'Both are residence visas sponsored by a company you own. On the mainland, shareholders usually receive a partner or investor visa through GDRFA in Dubai or ICP in the other emirates. In a free zone, the authority processes an investor visa for its shareholders. The residence works the same way once issued; the route, documents and criteria are what differ.',
      },
      {
        q: 'How much do I need to invest to get an investor visa?',
        a: 'There is no single figure. The criteria depend on whether the company is mainland or free zone, the authority, and in some cases the value of your shareholding. They are set by the authority and change, so we confirm the current requirement for your company before you apply rather than quoting a number that may be out of date.',
      },
      {
        q: 'Can an offshore company sponsor my residence visa?',
        a: 'No. UAE offshore companies cannot trade inside the UAE or sponsor residence visas. If residence is the goal, you need a mainland or free zone company with visa quota. Some owners keep an offshore company for holding purposes and set up an operating company alongside it, which then sponsors their visa.',
      },
      {
        q: 'Is an investor visa the same as the Golden Visa?',
        a: 'No. An investor or partner visa depends on the company that sponsors you and stays linked to it. The Golden Visa is a separate long-term residence route with its own eligibility categories, set by the authorities, and it does not rely on a company sponsor in the same way. Some owners start on an investor visa and apply for the Golden Visa later.',
      },
      {
        q: 'Can I sponsor my family on a partner or investor visa?',
        a: 'Generally yes, once your own residence has been issued. You will need attested marriage and birth certificates, a tenancy contract and health insurance for your dependants, and you must meet the income and accommodation requirements the authority sets at the time. We check those against your situation before applying, then process each family member’s residence.',
      },
      {
        q: 'I manage the company but don’t own shares. Can I get an investor visa?',
        a: 'Not on that basis. An investor or partner visa follows ownership, so a manager without shares is usually sponsored as an employee instead — through a MOHRE work permit on the mainland or through the free zone authority. If you are acquiring shares, the new shareholding has to be registered with the authority before an investor visa can be applied for.',
      },
    ],
    included: [
      {
        group: 'Company Preparation',
        desc: 'The sponsor side, checked and fixed before you apply.',
        items: [
          'Licence and activity review',
          'Establishment card issue or renewal',
          'Visa quota check and increase request',
          'Shareholding and document review',
          'Ejari alignment for mainland quota',
        ],
      },
      {
        group: 'Investor Residence Chain',
        desc: 'Every stage from permit to Emirates ID, tracked on one file.',
        items: [
          'Partner or investor entry permit',
          'Change of status inside the UAE',
          'Medical fitness test booking',
          'Emirates ID biometrics',
          'Health insurance coordination',
          'Residence issue and expiry tracking',
        ],
      },
      {
        group: 'After Your Visa',
        desc: 'What usually comes next for a resident business owner.',
        items: [
          'Spouse and children sponsorship',
          'Golden Visa suitability review',
          'Visas for incoming partners',
          'Residence renewal reminders',
          'Cancellation when a partner exits',
        ],
      },
    ],
    related: ['visa-services', 'family-visa', 'mainland-company-formation', 'free-zone-company-formation'],
  },

  /* ───────────────────────── EMPLOYMENT VISA ───────────────────────── */
  {
    slug: 'employment-visa',
    category: 'visa-immigration',
    navLabel: 'Employment Visa',
    icon: UserPlus,
    eyebrow: 'Staff Visas',
    blurb: 'Work permits & residence for your team',
    title: 'Employment Visas & Work Permits in Dubai & the UAE',
    heroSubtitle:
      'We handle the MOHRE work permit and labour contract for mainland hires, or processing through your free zone authority, then take each employee through medical, Emirates ID and residence — whether you are hiring one person or a whole team.',
    heroHighlights: ['MOHRE Work Permits', 'Free Zone Staff Visas', 'Single or Group Hiring'],
    metaTitle: 'Employment Visa UAE | Work Permits for Staff | Smartgic Visa',
    metaDescription:
      'Employment visa services in Dubai and the UAE: MOHRE work permits, labour contracts and free zone staff visas, from offer letter to Emirates ID. Talk to us.',
    keywords: [
      'employment visa uae',
      'work permit dubai',
      'employee visa dubai',
      'mohre work permit',
      'free zone employment visa',
      'staff visa processing dubai',
    ],
    overview: {
      heading: 'Every hire is a sponsorship — and the employer carries it',
      body: [
        'When you hire someone into the UAE, your company becomes their sponsor. On the mainland that means a MOHRE work permit and a registered labour contract alongside the residence visa; in a free zone, the authority handles the employment side under its own rules. You need quota available, an offer whose terms match the contract, and health insurance in place — and your obligations as sponsor continue until the visa is cancelled.',
        'We run the whole sequence for each hire: offer letter and work permit, entry permit or change of status, medical fitness test, Emirates ID biometrics and residence. For several hires at once, we keep one tracker so you can see where every employee stands. We also set up what follows — the employee records your payroll needs for WPS, renewal dates and a clean cancellation when someone leaves.',
      ],
    },
    stats: [
      { value: 'MOHRE', label: 'Work permit and labour contract for mainland staff' },
      { value: 'Free zone', label: 'Authority processes staff visas under its own rules' },
      { value: 'WPS', label: 'Mainland salaries paid through the Wage Protection System' },
      { value: 'Insurance', label: 'Health cover required under each emirate’s rules' },
    ],
    benefits: [
      { title: 'Mainland or Free Zone Route', desc: 'We follow the MOHRE process for mainland employees and your free zone authority’s process for zone staff, so each file meets the right rules.' },
      { title: 'Quota Checked Before Offers', desc: 'We confirm you have visa quota available before you make an offer, so a candidate is never left waiting on a quota increase.' },
      { title: 'Contract Terms That Match', desc: 'The offer letter, MOHRE contract and salary details are prepared consistently, avoiding the mismatches that hold up approvals and cause disputes later.' },
      { title: 'Group Onboarding', desc: 'For several hires at once, we batch medical tests and biometrics where possible and keep one tracker showing every employee’s stage.' },
      { title: 'Insurance in Place', desc: 'We coordinate health insurance that meets your emirate’s rules, because residence cannot be completed without valid cover where it is mandatory.' },
      { title: 'Employer Duties Covered', desc: 'From payroll records for WPS to renewal dates and cancellation on exit, we keep the obligations that follow each visa on your calendar.' },
    ],
    process: [
      { title: 'Quota & Offer', desc: 'We confirm available quota, prepare the offer letter in the authority’s format and have the employee sign it, checking that job title, skill level and salary line up.' },
      { title: 'Work Permit & Entry Permit', desc: 'On the mainland we apply for MOHRE approval of the work permit; in a free zone we submit through the authority. The entry permit or change of status follows.' },
      { title: 'Medical, Insurance & Biometrics', desc: 'We book the employee’s medical fitness test and Emirates ID biometrics and confirm health insurance is active, so the residence application is complete when submitted.' },
      { title: 'Residence & Labour Contract', desc: 'Residence is issued with the Emirates ID as proof. For mainland staff, the labour contract is signed and registered with MOHRE and the work permit issued.' },
      { title: 'Ongoing Employer File', desc: 'We hand over the employee’s records for payroll and WPS, log visa and contract expiry dates, and stay on hand for renewals, amendments and cancellation.' },
    ],
    requirements: [
      'Trade licence and establishment card copies',
      'Employee’s passport copy and photograph',
      'Signed offer letter with agreed salary and job title',
      'Attested education certificate, if the job title needs one',
      'Employee’s current visa or entry record (if in the UAE)',
      'Health insurance details, or a request to arrange cover',
      'Authorised signatory’s Emirates ID or passport',
      'MOHRE or free zone portal access, where you hold it',
    ],
    eligibility: {
      heading: 'When you need this service',
      points: [
        'You are hiring from abroad or from inside the UAE',
        'A new company is sponsoring its first employees',
        'You are onboarding several hires at the same time',
        'An employee is moving to you from another UAE employer',
        'You are moving staff between your mainland and free zone entities',
      ],
    },
    faqs: [
      {
        q: 'What is the difference between a work permit and an employment visa?',
        a: 'On the mainland, the MOHRE work permit and labour contract authorise someone to work for you, while the residence visa — evidenced by the Emirates ID — allows them to live in the UAE. You need both, issued through one linked process. In free zones, the authority handles the employment approval and residence together under its own rules.',
      },
      {
        q: 'How many employees can my company sponsor?',
        a: 'That depends on your visa quota. On the Dubai mainland, quota generally follows the size of your registered office; in a free zone, it depends on your licence package or office. Quota can often be increased by taking more space or upgrading your package. We check your current allocation before you make offers, so no candidate is left waiting.',
      },
      {
        q: 'Who pays for an employee’s visa?',
        a: 'The employer. On the mainland, the UAE Labour Law makes recruitment and visa costs the employer’s responsibility, and they cannot be charged to the employee; free zone rules generally take the same approach. The fees themselves are set by the authorities and vary by route, so we give you an itemised quote once we know the employee’s details and your jurisdiction.',
      },
      {
        q: 'Can I hire someone who is already in the UAE on another visa?',
        a: 'Yes. If they are on a visit visa, we apply for a change of status so they do not need to leave the country, where the authority permits it. If they are moving from another employer, their existing visa and work permit must be cancelled or transferred before your sponsorship can begin. We check their status before you set a start date.',
      },
      {
        q: 'Is health insurance mandatory for employees?',
        a: 'Health insurance for employees is required under the rules of each emirate and free zone, and in Dubai valid cover is needed before residence can be issued or renewed. Minimum benefits differ between emirates and change from time to time, so we confirm what your jurisdiction requires and coordinate a policy that satisfies it before the residence step.',
      },
      {
        q: 'What are my obligations once an employee is on my visa?',
        a: 'On the mainland you pay salaries through the Wage Protection System, provide health insurance where required, keep the labour contract and work permit current, renew the visa before it expires and cancel it when employment ends. End-of-service gratuity is calculated under the UAE Labour Law. Free zones apply similar duties under their own employment rules.',
      },
    ],
    included: [
      {
        group: 'Before the Offer',
        desc: 'The checks that stop a hire stalling halfway.',
        items: [
          'Quota check and increase request',
          'Job title and skill level review',
          'Offer letter preparation',
          'Certificate attestation coordination',
          'Employer portal set-up support',
        ],
      },
      {
        group: 'Visa & Permit Processing',
        desc: 'Each employee taken from permit to Emirates ID.',
        items: [
          'MOHRE work permit application',
          'Free zone employment processing',
          'Entry permit or change of status',
          'Medical fitness test booking',
          'Emirates ID biometrics',
          'Labour contract registration',
        ],
      },
      {
        group: 'Employer Compliance',
        desc: 'What you owe each employee once they are on your visa.',
        items: [
          'Health insurance coordination',
          'Employee records for WPS payroll',
          'Expiry and renewal tracking',
          'Contract amendments',
          'Cancellation and final settlement support',
        ],
      },
    ],
    related: ['visa-services', 'payroll-services', 'corporate-pro-services', 'visa-cancellation'],
  },

  /* ───────────────────────── FAMILY VISA ───────────────────────── */
  {
    slug: 'family-visa',
    category: 'visa-immigration',
    navLabel: 'Family Visa',
    icon: Heart,
    eyebrow: 'Family Sponsorship',
    blurb: 'Spouse, children & parents sponsorship',
    title: 'Family Visa Sponsorship in Dubai & the UAE',
    heroSubtitle:
      'Bring your spouse, children and, in some cases, parents to live with you in the UAE. We get your certificates attested, line up tenancy and health insurance, and take each family member through to Emirates ID.',
    heroHighlights: ['Spouse & Children', 'Certificate Attestation', 'Newborn Residence'],
    metaTitle: 'Family Visa Dubai | Sponsor Spouse & Children | Smartgic Visa',
    metaDescription:
      'Family visa sponsorship in Dubai and the UAE for your spouse, children and parents. Attestation, tenancy, insurance and Emirates ID handled. See what you need.',
    keywords: [
      'family visa dubai',
      'sponsor wife visa uae',
      'family residence visa uae',
      'newborn visa dubai',
      'sponsor parents visa uae',
      'dependant visa dubai',
    ],
    overview: {
      heading: 'Most family visa delays start with a certificate, not the application',
      body: [
        'To sponsor your family you must hold a valid UAE residence yourself and meet the income and accommodation requirements the authority sets. Each relationship has to be proved with official documents: marriage and birth certificates issued abroad must be legalised in the country of issue and attested by the UAE Ministry of Foreign Affairs. You also need a registered tenancy and health insurance for each dependant. A single unattested certificate can hold up the whole household.',
        'We start by checking your own visa, your documents and the authority’s current criteria, then arrange attestation and legal translation where needed. We prepare one file per family member, apply for entry permits or changes of status, book medical tests and biometrics where required, and track every application to issue. When a baby is born in the UAE, we apply for the newborn’s residence within the authority’s deadline, and we keep everyone’s renewal dates in line with yours.',
      ],
    },
    stats: [
      { value: 'MOFA', label: 'Attests marriage and birth certificates in the UAE' },
      { value: 'Ejari', label: 'Registered tenancy needed for Dubai sponsorship' },
      { value: 'Sponsor', label: 'Your own residence must be valid first' },
      { value: 'Newborn', label: 'Residence applied for after a UAE birth' },
    ],
    benefits: [
      { title: 'Attestation Handled', desc: 'We coordinate legalisation abroad, MOFA attestation in the UAE and legal translation, so each relationship document is in the form the authority accepts.' },
      { title: 'Requirements Checked Upfront', desc: 'We check your residence, income evidence and tenancy against the authority’s current requirements before any government fee is paid.' },
      { title: 'One File per Family Member', desc: 'Spouse, each child and any parent get their own tracked application, so one missing document does not quietly delay the others.' },
      { title: 'Newborn Residence on Time', desc: 'We guide you through the birth certificate and your baby’s passport, then apply for residence within the deadline the authority sets.' },
      { title: 'Insurance for Dependants', desc: 'Health insurance for each family member is arranged to meet your emirate’s rules, as cover is a condition of residence where it is mandatory.' },
      { title: 'Renewals Kept Together', desc: 'We track your family’s expiry dates alongside your own, so the household can renew in one round rather than piecemeal.' },
    ],
    process: [
      { title: 'Eligibility & Document Review', desc: 'We confirm your own residence is valid, check the authority’s current income and accommodation requirements against your situation, and list every document each family member needs.' },
      { title: 'Attestation & Translation', desc: 'Marriage and birth certificates issued abroad are legalised in the issuing country and attested by MOFA in the UAE, with legal translation into Arabic where required.' },
      { title: 'Entry Permits or Status Change', desc: 'We apply for each dependant’s entry permit, or for a change of status if they are already in the UAE, with tenancy and insurance attached.' },
      { title: 'Medical & Emirates ID', desc: 'We book medical fitness tests for the family members who need them and Emirates ID biometrics where required, then track every file to issue.' },
      { title: 'Family Residence Issued', desc: 'Each family member’s residence is issued, with the Emirates ID as proof. We record expiry dates alongside yours so renewals can run together.' },
    ],
    requirements: [
      'Sponsor’s passport, residence details and Emirates ID',
      'Salary certificate or labour contract (company documents for owners)',
      'Attested marriage certificate',
      'Attested birth certificate for each child',
      'Passport and photograph for each family member',
      'Tenancy contract (Ejari in Dubai)',
      'Health insurance for each dependant',
      'Extra documents for parents or step-children, where required',
    ],
    eligibility: {
      heading: 'Who you can sponsor',
      points: [
        'Your spouse, once your own residence is issued',
        'Your children, within the age and status rules the authority sets',
        'A baby born to you in the UAE',
        'Your parents, in some cases and subject to extra requirements',
        'Step-children, with the consent and custody documents the authority requires',
      ],
    },
    faqs: [
      {
        q: 'How much salary do I need to sponsor my family in the UAE?',
        a: 'The income and accommodation requirements are set by the immigration authority, differ by emirate and family member, and change from time to time — so we do not quote a figure that may be out of date. We check the current requirement against your salary certificate or company documents before you apply, and tell you plainly if you do not yet qualify.',
      },
      {
        q: 'Do my marriage and birth certificates need to be attested?',
        a: 'Yes, where they were issued outside the UAE. They must be legalised in the country of issue — usually by its foreign ministry and the UAE embassy there — and then attested by the Ministry of Foreign Affairs in the UAE. Documents in other languages may also need legal translation into Arabic. We coordinate each step and check the result before it is submitted.',
      },
      {
        q: 'Can I sponsor my parents?',
        a: 'In some cases, yes. Parent sponsorship comes with extra requirements beyond those for a spouse or children — on income, accommodation, health insurance and supporting documents — and these are set by the authority and can change. We review your situation against the current rules and tell you what would be needed before you commit to an application.',
      },
      {
        q: 'How do I get a residence visa for a baby born in the UAE?',
        a: 'After the birth you obtain the UAE birth certificate, with any attestation the authority asks for, and apply for the baby’s passport through your embassy. The residence application must then be made within the deadline the authority sets, and late applications attract fines. We confirm the current deadline at the start, arrange health insurance for the baby and handle the residence application.',
      },
      {
        q: 'What happens to my family’s visas if I change jobs?',
        a: 'Your family’s residence is linked to yours, so it is affected when your own visa is cancelled. Dependants’ visas generally have to be cancelled, or moved to another sponsor, before the sponsor’s own residence can be cancelled. Once your new residence is issued, the family can be sponsored again. We plan the order so nobody is left without status or exposed to overstay fines.',
      },
      {
        q: 'Can a woman sponsor her husband and children?',
        a: 'Yes. A female resident can sponsor her husband and children, subject to the criteria the authority sets on matters such as income and accommodation. The rules have changed over time and can differ between emirates, so we check the current position for your emirate and your circumstances before preparing the application.',
      },
    ],
    included: [
      {
        group: 'Document Preparation',
        desc: 'Getting relationship papers into the form the authority accepts.',
        items: [
          'Marriage certificate attestation',
          'Birth certificate attestation',
          'Legalisation coordination abroad',
          'Legal translation into Arabic',
          'Tenancy and Ejari check',
        ],
      },
      {
        group: 'Dependant Visa Processing',
        desc: 'Each family member taken from permit to Emirates ID.',
        items: [
          'Spouse residence visa',
          'Children’s residence visas',
          'Parent sponsorship applications',
          'Entry permit or change of status',
          'Medical and biometrics booking',
          'Health insurance coordination',
        ],
      },
      {
        group: 'Life Events',
        desc: 'Changes that need action on a family file.',
        items: [
          'Newborn residence application',
          'Adding a family member later',
          'Renewals in line with the sponsor',
          'Sponsor change for dependants',
          'Cancellation ahead of the sponsor’s',
        ],
      },
    ],
    related: ['document-clearing-services', 'visa-renewal', 'investor-visa', 'employment-visa'],
  },

  /* ───────────────────────── VISA RENEWAL ───────────────────────── */
  {
    slug: 'visa-renewal',
    category: 'visa-immigration',
    navLabel: 'Visa Renewal',
    icon: CalendarClock,
    eyebrow: 'Residence Renewal',
    blurb: 'Renew residence for you, staff & family',
    title: 'UAE Residence Visa Renewal in Dubai',
    heroSubtitle:
      'Renew residence visas for yourself, your staff and your family before they expire. We check the documents each renewal depends on, book medical tests and biometrics where needed, and renew Emirates IDs in the same round.',
    heroHighlights: ['Personal, Staff & Family', 'Emirates ID Renewed Too', 'Expiry Tracking'],
    metaTitle: 'Visa Renewal Dubai | Residence & Emirates ID | Smartgic Visa',
    metaDescription:
      'Residence visa renewal in Dubai and the UAE for you, your staff and family. Medical, Emirates ID and insurance checked before expiry to avoid overstay fines.',
    keywords: [
      'visa renewal dubai',
      'residence visa renewal uae',
      'emirates id renewal',
      'employee visa renewal dubai',
      'family visa renewal uae',
    ],
    overview: {
      heading: 'Renewals stall on the documents behind the visa, not the visa itself',
      body: [
        'A residence visa can only be renewed if everything it depends on is still valid: the sponsor’s trade licence and establishment card, the passport, health insurance and, for mainland staff, the MOHRE work permit. Some renewals also need a fresh medical fitness test, and the Emirates ID is renewed with the residence. Leave it too late and an expired document can delay the renewal past the visa’s expiry — and overstaying attracts fines.',
        'We keep a register of every expiry date in your household or company — visas, Emirates IDs, passports, insurance, licence and establishment card — and start each renewal early enough to fix what is out of date. We prepare the applications, book medical tests and biometrics where they are required, and renew a family or a team in one coordinated round rather than one visa at a time.',
      ],
    },
    stats: [
      { value: 'Expiry', label: 'Tracked for visas, IDs, passports and insurance' },
      { value: 'EID', label: 'Emirates ID renewed along with the residence' },
      { value: 'Medical', label: 'Fitness test repeated for renewals that require it' },
      { value: 'Household', label: 'Sponsor and dependants renewed in one round' },
    ],
    benefits: [
      { title: 'One Expiry Calendar', desc: 'Every visa, Emirates ID, passport and insurance policy you depend on is tracked in one place, with reminders well ahead of each date.' },
      { title: 'Dependencies Checked First', desc: 'We confirm the licence, establishment card, work permit and insurance are valid before applying, because an expired link blocks the renewal.' },
      { title: 'Whole-Household Renewals', desc: 'Sponsor first, then spouse and children, in one coordinated round, so the family’s visas stay aligned and nobody is overlooked.' },
      { title: 'Team Renewals in Batches', desc: 'For employers, we group renewals falling due together, keep work permits and visas in step, and report each employee’s status.' },
      { title: 'Appointments Booked', desc: 'Medical fitness tests and Emirates ID biometrics are booked where the renewal requires them, at times that suit you and your staff.' },
      { title: 'No Overstay Surprises', desc: 'Starting early leaves room to fix a passport or insurance problem before the visa lapses and overstay fines become a risk.' },
    ],
    process: [
      { title: 'Expiry Review', desc: 'We list every visa due for renewal with its linked documents — passport, insurance, licence, establishment card and work permit — and flag anything that will expire first.' },
      { title: 'Fix the Links', desc: 'Where a passport, insurance policy, licence or establishment card is out of date, we sort it out first — or tell you what to obtain — so the renewal can be submitted.' },
      { title: 'Medical & Biometrics Booked', desc: 'We book the medical fitness test where the renewal needs one and Emirates ID biometrics where required, and send each person the documents to bring.' },
      { title: 'Renewal Submitted', desc: 'We submit the residence renewal to GDRFA, ICP or your free zone authority — sponsor first, then dependants — and renew mainland work permits alongside.' },
      { title: 'New Expiry Logged', desc: 'The renewed residence and Emirates ID are issued, and we record the new expiry dates so the next renewal starts on time without a reminder from you.' },
    ],
    requirements: [
      'Passport with enough remaining validity',
      'Current Emirates ID',
      'Valid health insurance for each person',
      'Trade licence and establishment card (company sponsors)',
      'Tenancy contract (family renewals)',
      'Salary certificate or labour contract (family renewals)',
      'Photograph for each person renewing',
    ],
    eligibility: {
      heading: 'Renewals we handle',
      points: [
        'Your own investor, partner or employment residence',
        'Employee visas across your mainland or free zone company',
        'Spouse, children and parents you sponsor',
        'Renewals that need a new passport, insurance or licence first',
        'A household or team with several expiry dates to align',
      ],
    },
    faqs: [
      {
        q: 'When should I start renewing my residence visa?',
        a: 'Before it expires — and early enough to deal with anything else that has lapsed, such as a passport, an insurance policy or the company’s establishment card. The authority decides how far ahead a renewal can be submitted, and this can differ by visa type, so we confirm the window for your case and start as soon as it opens.',
      },
      {
        q: 'What happens if my visa expires before I renew it?',
        a: 'Once a residence visa has expired, overstay fines can build up for each day you remain without valid status, after any grace period the authority allows. Grace periods and fine amounts are set by the authority and change, so we do not quote them. If your visa has already lapsed, contact us straight away — we check the position and renew or regularise it as quickly as the authority allows.',
      },
      {
        q: 'Do I need a new medical test to renew my visa?',
        a: 'Often, yes. Many residence renewals need a fresh medical fitness test, although the authority exempts some categories and age groups. Emirates ID biometrics may also be needed if your fingerprints are due for an update. We check what applies to each person in your renewal and book only the appointments that are actually required.',
      },
      {
        q: 'Can I renew my family’s visas before my own?',
        a: 'Usually not. A dependant’s residence depends on the sponsor’s, so the sponsor’s visa is renewed first or at the same time, and a dependant’s residence generally cannot run beyond it. We sequence the household’s renewals so yours goes in first and your family’s follow straight after, with insurance and tenancy already checked.',
      },
      {
        q: 'My passport is about to expire — can I still renew my visa?',
        a: 'A residence renewal needs a passport with enough remaining validity, and the authority sets the minimum. If yours is close to expiry, renew it with your embassy first, then we renew the residence against the new passport. If the visa itself is about to lapse, tell us early so we can work out the order that avoids a gap.',
      },
      {
        q: 'Do employees’ work permits need renewing too?',
        a: 'On the mainland, yes. The MOHRE work permit and labour contract are renewed alongside the residence, and the employer needs a valid licence and establishment card, with no outstanding issues on its MOHRE file, for the renewal to go through. In free zones, the authority renews employment and residence together. We keep both in step for every employee.',
      },
    ],
    included: [
      {
        group: 'Personal & Family Renewals',
        desc: 'Your residence and your dependants’, in one round.',
        items: [
          'Sponsor residence renewal',
          'Spouse and children renewals',
          'Parent visa renewals',
          'Emirates ID renewal',
          'Health insurance renewal check',
        ],
      },
      {
        group: 'Employer Renewals',
        desc: 'Staff visas kept in step with permits and licences.',
        items: [
          'Employee residence renewals',
          'MOHRE work permit renewal',
          'Free zone staff visa renewals',
          'Establishment card validity check',
          'Batch renewals and status report',
        ],
      },
      {
        group: 'Tracking & Prevention',
        desc: 'The calendar that stops renewals becoming emergencies.',
        items: [
          'Expiry register for every visa',
          'Passport and insurance alerts',
          'Licence renewal alignment',
          'Overstay risk review',
          'Next-renewal reminders',
        ],
      },
    ],
    related: ['trade-license-renewals', 'family-visa', 'employment-visa', 'corporate-pro-services'],
  },

  /* ───────────────────────── VISA CANCELLATION ───────────────────────── */
  {
    slug: 'visa-cancellation',
    category: 'visa-immigration',
    navLabel: 'Visa Cancellation',
    icon: FileX2,
    eyebrow: 'Residence Cancellation',
    blurb: 'Clean exits for staff, family & owners',
    title: 'Visa Cancellation in Dubai & the UAE',
    heroSubtitle:
      'When an employee leaves, a company closes or a family leaves the UAE, residence visas must be cancelled in the right order. We cancel work permits and residence cleanly, so nobody overstays or finds a new visa blocked.',
    heroHighlights: ['Employee Exits', 'Dependants Cancelled First', 'Change of Sponsor'],
    metaTitle: 'Visa Cancellation UAE | Employee & Family Visas | Smartgic Visa',
    metaDescription:
      'Visa cancellation in Dubai and the UAE for employees, family members and owners. Work permit and residence cancelled in the right order to avoid overstay fines.',
    keywords: [
      'visa cancellation dubai',
      'cancel employee visa uae',
      'residence visa cancellation',
      'cancel family visa dubai',
      'mohre work permit cancellation',
    ],
    overview: {
      heading: 'Cancelling a visa is a sequence, and the order matters',
      body: [
        'A residence visa does not end when someone stops working or moves away — it has to be cancelled. For mainland staff, the MOHRE work permit and labour contract are cancelled first, then the residence. Dependants must be cancelled before their sponsor. Final dues should be settled as part of the exit, and once residence is cancelled the person must leave or change status within the period allowed, or overstay fines apply.',
        'We plan each cancellation from the end point back: who is leaving, who is staying, and whether a new sponsor is lined up. We prepare the MOHRE or free zone cancellation, coordinate the final settlement with your payroll, cancel dependants first, then the residence, and confirm each person’s status afterwards. For company closures, we clear every visa on the file so the establishment card and licence can be cancelled.',
      ],
    },
    stats: [
      { value: 'MOHRE', label: 'Work permit cancelled first for mainland staff' },
      { value: 'Family', label: 'Dependants cancelled before their sponsor' },
      { value: 'Payroll', label: 'Final settlement linked to the cancellation' },
      { value: 'Overstay', label: 'Fines apply if you stay without valid status' },
    ],
    benefits: [
      { title: 'Steps in the Right Order', desc: 'Work permit, dependants, then residence — we sequence each cancellation so no step is rejected because an earlier one was missed.' },
      { title: 'Final Settlement Aligned', desc: 'We coordinate with your payroll so gratuity, unpaid salary and leave are settled and documented alongside the cancellation, not as an afterthought.' },
      { title: 'Overstay Risk Managed', desc: 'We confirm each person’s status after cancellation and the date by which they must leave or change status, so no fines build up unnoticed.' },
      { title: 'Sponsor Changes Without Exit', desc: 'Where someone is staying with a new sponsor, we time the cancellation so the new visa can follow by change of status, where the authority allows.' },
      { title: 'Closures Fully Cleared', desc: 'When a company closes, we cancel every visa on its file, and the dependants linked to them, so the establishment card and licence can follow.' },
      { title: 'Cancellation From Abroad', desc: 'Cancellations can usually be processed whether the person is still here or has already left; we prepare the right documents for each case.' },
    ],
    process: [
      { title: 'Exit Plan', desc: 'We confirm who is leaving or changing sponsor, any dependants linked to them, the last working day and whether the person is inside or outside the UAE.' },
      { title: 'Final Settlement', desc: 'We work with your payroll team or provider to calculate and document final dues — salary, leave and end-of-service gratuity under the Labour Law — before cancellation is submitted.' },
      { title: 'Work Permit Cancellation', desc: 'For mainland employees, we submit the MOHRE work permit and labour contract cancellation for the employee’s confirmation. In a free zone, we file the cancellation through the authority.' },
      { title: 'Residence Cancellation', desc: 'Dependants’ visas are cancelled first, then the sponsor’s residence with GDRFA, ICP or the free zone authority. The Emirates ID ceases to be valid once residence is cancelled.' },
      { title: 'Status Confirmed', desc: 'We send you the cancellation records, confirm the date by which the person must leave or change status, and note the quota freed on your company file.' },
    ],
    requirements: [
      'Employee’s passport and Emirates ID copies',
      'Last working day and reason for leaving',
      'Final settlement details from payroll',
      'Trade licence and establishment card copies',
      'Dependants’ passports and Emirates IDs, if any',
      'New sponsor details, if the person is staying in the UAE',
      'Authorised signatory’s approval to cancel',
    ],
    eligibility: {
      heading: 'When a visa needs cancelling',
      points: [
        'An employee resigns, is dismissed or retires',
        'Your company is closing or being deregistered',
        'Someone is moving to a new employer or sponsor',
        'A partner exits after a share transfer',
        'A family member or the whole household is leaving the UAE',
      ],
    },
    faqs: [
      {
        q: 'What is the right order for cancelling visas?',
        a: 'For a mainland employee, the MOHRE work permit and labour contract are cancelled first, then the residence. If that person sponsors family members, the dependants’ visas must be cancelled — or moved to another sponsor — before the sponsor’s own residence can be cancelled. For a company that is closing, every visa on its file is cleared before the establishment card and licence.',
      },
      {
        q: 'How long can I stay in the UAE after my visa is cancelled?',
        a: 'There is a period after cancellation in which you can leave the country or move to a new visa without fines, but its length is set by the authority, depends on the visa type and has changed in recent years. We confirm the current period for your case on the day of cancellation, so you know exactly when you need to have left or changed status.',
      },
      {
        q: 'Can I change employers without cancelling my visa?',
        a: 'Your current visa still has to be cancelled, or the work permit transferred, because residence is tied to the sponsor. What you can often avoid is leaving the country: the new employer applies for your new permit and visa, and the switch happens by change of status. We coordinate both sides so the new visa can follow the cancellation without a gap.',
      },
      {
        q: 'Can a visa be cancelled if the person has already left the UAE?',
        a: 'Yes, in most cases. The sponsor can apply to cancel the residence of someone who is outside the country, although the documents differ — usually a passport copy and, for mainland employees, the work permit cancellation first. Leaving a former employee’s visa active keeps them on your quota and your sponsor obligations running, so it is worth cancelling promptly.',
      },
      {
        q: 'Do I have to pay the final settlement before cancelling an employee’s visa?',
        a: 'The final settlement — unpaid salary, untaken leave and end-of-service gratuity calculated under the UAE Labour Law — is owed when employment ends. Settling it alongside the cancellation keeps the exit clean and avoids later complaints. We coordinate the figures with your payroll team or provider so the payment and the employee’s acknowledgement are documented together.',
      },
      {
        q: 'What happens to visas when a company is closed?',
        a: 'Every residence visa the company sponsors must be cancelled before its establishment card and licence can be cancelled, including the owners’ own investor or partner visas and the dependants linked to them. Anyone staying in the UAE needs a new sponsor or route lined up first. We plan the cancellations as part of the closure so the deregistration is not held up.',
      },
    ],
    included: [
      {
        group: 'Employee Cancellations',
        desc: 'A clean exit for each member of staff.',
        items: [
          'MOHRE work permit cancellation',
          'Labour contract cancellation',
          'Free zone employment cancellation',
          'Residence and Emirates ID cancellation',
          'Final settlement coordination',
        ],
      },
      {
        group: 'Family & Owner Cancellations',
        desc: 'Dependants and partners cancelled in the right order.',
        items: [
          'Dependants cancelled before the sponsor',
          'Partner and investor visa cancellation',
          'Cancellation from outside the UAE',
          'Change of sponsor without exit',
          'Status confirmation after cancellation',
        ],
      },
      {
        group: 'Company Closure Support',
        desc: 'Every visa cleared before the licence goes.',
        items: [
          'Full visa list for the company',
          'Bulk cancellation planning',
          'Establishment card cancellation',
          'Quota and immigration file closure',
          'Handover to licence cancellation',
        ],
      },
    ],
    related: ['payroll-services', 'liquidation-deregistration', 'licence-cancellation', 'employment-visa'],
  },

  /* ───────────────────────── AML COMPLIANCE ───────────────────────── */
  {
    slug: 'aml-compliance',
    category: 'compliance-risk',
    navLabel: 'AML Compliance',
    icon: ShieldCheck,
    eyebrow: 'AML / CFT',
    blurb: 'Risk assessment, policies, CDD & training',
    title: 'AML Compliance Programmes in Dubai & the UAE',
    heroSubtitle:
      'If your business falls under the UAE’s AML rules, you need a programme that works in practice. We build your risk assessment, policies, due diligence and screening, train your team and prepare you for supervisor inspections.',
    heroHighlights: ['Risk Assessment & Policies', 'CDD, EDD & Screening', 'Inspection Readiness'],
    metaTitle: 'AML Compliance Dubai | AML/CFT Programmes | Smartgic Visa',
    metaDescription:
      'AML compliance in Dubai for DNFBPs: risk assessment, AML/CFT policies, CDD, sanctions screening, compliance officer support and training, ready for inspection.',
    keywords: [
      'aml compliance dubai',
      'aml compliance uae',
      'aml cft policy uae',
      'dnfbp aml compliance',
      'aml consultants dubai',
      'aml risk assessment uae',
    ],
    overview: {
      heading: 'A policy on file is not a programme that works',
      body: [
        'Real estate brokers, dealers in precious metals and stones, accountants, auditors, corporate service providers and other designated businesses must comply with the UAE’s AML/CFT rules. That means a documented enterprise-wide risk assessment, policies and procedures, customer due diligence — enhanced where risk is higher — sanctions screening, a named compliance officer, staff training, records kept for at least five years and reporting to the Financial Intelligence Unit. Supervisors inspect whether all of it actually operates.',
        'We start by confirming whether and how your activity is in scope, then build the programme around how you really do business: your customers, products, delivery channels and geographies. We write the risk assessment and policies, design due diligence and screening workflows your staff can follow, support the compliance officer, train the team and arrange an independent review of how it is working before your supervisor looks.',
      ],
    },
    stats: [
      { value: 'DNFBPs', label: 'Designated businesses and professions in scope' },
      { value: '5 years', label: 'Minimum period AML records must be kept' },
      { value: 'MoE', label: 'Supervises most DNFBPs; MoJ covers lawyers and notaries' },
      { value: 'FIU', label: 'Receives suspicious transaction reports through goAML' },
    ],
    benefits: [
      { title: 'Scope Confirmed First', desc: 'We confirm whether your licensed activity makes you a DNFBP, which supervisor applies and which obligations follow, before anything is drafted.' },
      { title: 'Risk Assessment That Fits', desc: 'An enterprise-wide risk assessment built on your real customers, products, channels and countries, not a template from another sector.' },
      { title: 'Usable Policies and Procedures', desc: 'Policies your staff can actually follow, with clear steps for onboarding, due diligence, escalation, reporting and record keeping.' },
      { title: 'CDD, EDD and Screening', desc: 'Customer due diligence forms, risk ratings, enhanced checks for higher-risk clients and screening against the UAE local terrorist list and UN lists.' },
      { title: 'Compliance Officer Support', desc: 'We help you appoint and equip a compliance officer, with a clear role, reporting lines and a monitoring routine they can maintain.' },
      { title: 'Ready for Inspection', desc: 'Training logs, screening records, risk ratings and review findings organised so you can show a supervisor the programme operating day to day.' },
    ],
    process: [
      { title: 'Scope & Gap Review', desc: 'We review your licence, activities, customer base and any existing AML documents to confirm your obligations, your supervisor and the gaps that need closing first.' },
      { title: 'Enterprise-Wide Risk Assessment', desc: 'We assess money-laundering, terrorist-financing and sanctions risk across customers, products, channels and geographies, and record the ratings and reasoning your supervisor expects to see.' },
      { title: 'Policies, Procedures & Tools', desc: 'We draft the AML/CFT policy and procedures, CDD and EDD forms, the risk-rating method, the screening process and the internal reporting route for suspicious activity.' },
      { title: 'Implementation & Training', desc: 'We help the compliance officer put the programme into use, register on goAML where needed, and train staff on red flags, due diligence and escalation.' },
      { title: 'Review & Inspection Readiness', desc: 'We test files, screening and records against your own policies, arrange an independent review, and prepare the evidence pack you would show a supervisor at inspection.' },
    ],
    requirementsHeading: 'Information we’ll need',
    requirements: [
      'Trade licence and list of licensed activities',
      'Description of your customers, products and payment methods',
      'Countries your customers and transactions involve',
      'Organisation chart and the proposed compliance officer',
      'Any existing AML policies, forms or screening tools',
      'Previous supervisor correspondence or inspection findings',
      'Sample customer files for testing',
    ],
    eligibility: {
      heading: 'Who must have an AML programme',
      points: [
        'Real estate brokers and agents',
        'Dealers in precious metals and stones',
        'Accountants, auditors and corporate service providers',
        'Lawyers and notaries, supervised by the Ministry of Justice',
        'Designated businesses in DIFC or ADGM, supervised by the DFSA or FSRA',
        'Other businesses your supervisor treats as in scope',
      ],
    },
    faqs: [
      {
        q: 'Does my business need an AML compliance programme?',
        a: 'If your activity makes you a financial institution or a designated non-financial business or profession — for example real estate brokerage, trading in gold or precious stones, accounting, auditing or corporate services — then yes. Being in scope depends on what you actually do, not only on the licence title, so we review your activities and transactions before advising.',
      },
      {
        q: 'What is an enterprise-wide risk assessment?',
        a: 'It is your documented assessment of how exposed the business is to money laundering, terrorist financing and sanctions breaches, looking at your customers, products and services, delivery channels and the countries involved. It drives everything else — how much due diligence you do, when you apply enhanced checks and what you monitor — so it has to be updated when the business changes.',
      },
      {
        q: 'Who can be our compliance officer?',
        a: 'The compliance officer should be suitably qualified and experienced, with the independence and authority to do the job, access to the records they need and a direct line to senior management. Many smaller businesses appoint an existing manager and train them. We help you define the role, document the appointment and give the officer the procedures and tools to run the programme.',
      },
      {
        q: 'How long must we keep AML records?',
        a: 'At least five years under the UAE’s AML rules. That covers customer due diligence documents, transaction records, screening results and internal reports, generally counted from the end of the business relationship or the date of a one-off transaction. Records should be retrievable promptly when your supervisor or the Financial Intelligence Unit asks for them.',
      },
      {
        q: 'What does a supervisor check during an AML inspection?',
        a: 'Typically your risk assessment, policies and procedures, a sample of customer files, screening records, training logs, the compliance officer’s reports and how suspicious activity is escalated and reported. Supervisors look for evidence that the programme operates in practice. Findings can lead to remediation demands and administrative penalties, so we test files and prepare an evidence pack beforehand.',
      },
      {
        q: 'Do we also need to register on goAML?',
        a: 'Yes, if you are in scope of the AML rules. goAML is the Financial Intelligence Unit’s reporting platform, and businesses that must report suspicious transactions — and dealers in precious metals and stones filing cash transaction reports — need to be registered on it. Registration is one part of the programme; our goAML registration service covers it in detail.',
      },
    ],
    included: [
      {
        group: 'Programme Design',
        desc: 'The documents your obligations require, written for your business.',
        items: [
          'Enterprise-wide risk assessment',
          'AML/CFT policy and procedures',
          'Customer risk-rating method',
          'CDD and EDD forms',
          'Sanctions screening procedure',
          'Suspicious activity escalation route',
        ],
      },
      {
        group: 'People & Operation',
        desc: 'Making the programme run, not just exist.',
        items: [
          'Compliance officer role and reporting lines',
          'goAML registration support',
          'Staff AML training sessions',
          'Screening and record-keeping set-up',
          'Ongoing monitoring routine',
        ],
      },
      {
        group: 'Assurance & Inspections',
        desc: 'Evidence that stands up when the supervisor visits.',
        items: [
          'File and screening testing',
          'Independent review coordination',
          'Inspection preparation pack',
          'Response to supervisor findings',
          'Annual programme refresh',
        ],
      },
    ],
    related: ['goaml-registration', 'ubo-filing', 'risk-advisory', 'internal-audit'],
  },

  /* ───────────────────────── goAML REGISTRATION ───────────────────────── */
  {
    slug: 'goaml-registration',
    category: 'compliance-risk',
    navLabel: 'goAML Registration',
    icon: ShieldAlert,
    eyebrow: 'FIU Reporting',
    blurb: 'FIU portal registration & reporting set-up',
    title: 'goAML Registration in Dubai & the UAE',
    heroSubtitle:
      'Register your business and compliance officer on goAML, the Financial Intelligence Unit’s reporting platform. We prepare the documents, set up user roles and train your team to file suspicious transaction and other required reports correctly.',
    heroHighlights: ['Business & Officer Set-Up', 'STR, SAR & DPMS Reports', 'Team Filing Training'],
    metaTitle: 'goAML Registration UAE | FIU Reporting Set-Up | Smartgic Visa',
    metaDescription:
      'goAML registration in Dubai and the UAE: your business and compliance officer registered with the FIU, user roles set up and your team trained to file reports.',
    keywords: [
      'goaml registration uae',
      'goaml registration dubai',
      'goaml portal uae',
      'fiu goaml reporting',
      'goaml registration for real estate',
      'dpms goaml reporting',
    ],
    overview: {
      heading: 'You cannot report to the FIU until you are registered to',
      body: [
        'Businesses that fall under the UAE’s AML rules must register on goAML, the platform the Financial Intelligence Unit uses to receive reports. Registration covers the business itself and its compliance officer, who becomes the main user. Through it you file suspicious transaction and activity reports, dealers in precious metals and stones file reports on cash transactions of AED 55,000 or more, and real estate businesses file activity reports on the transactions the rules specify.',
        'We prepare the registration from start to finish: the organisation details, the compliance officer’s documents and appointment letter, and the submission for FIU review. Once approved, we help the compliance officer activate the account, add any deputy or additional users, and set up the reporting workflow. Then we train the people who will file — what to report, what must not be said to the customer, and how to complete each report type correctly.',
      ],
    },
    stats: [
      { value: 'FIU', label: 'Financial Intelligence Unit runs the goAML platform' },
      { value: '55,000', label: 'AED or more in cash triggers a DPMS report' },
      { value: 'STR / SAR', label: 'Suspicious transaction and activity reports filed here' },
      { value: 'Officer', label: 'Compliance officer registered as the main user' },
    ],
    benefits: [
      { title: 'Registration Prepared Correctly', desc: 'Organisation details, licence data and the compliance officer’s documents are prepared to match exactly, avoiding the mismatches that get requests returned.' },
      { title: 'Clear User Roles', desc: 'The compliance officer is set up as the main user, with deputies or additional users added only where you need them.' },
      { title: 'Right Reports for Your Sector', desc: 'We map which reports apply to you — STRs and SARs for every reporting entity, DPMS cash reports for dealers, activity reports for real estate.' },
      { title: 'Team Trained to File', desc: 'The people who file learn to complete each report type, attach supporting documents and write a clear narrative the FIU can act on.' },
      { title: 'Tipping-Off Avoided', desc: 'Your team learns what must not be disclosed to a customer once a report is considered or filed, protecting the business and the investigation.' },
      { title: 'Profile Kept Up to Date', desc: 'When your compliance officer, contact details or licence change, we update the goAML profile so your reporting cover is not interrupted.' },
    ],
    process: [
      { title: 'Scope & Reporting Map', desc: 'We confirm your business is in scope, identify your supervisor, and list the report types you will need to file, so the registration is set up for them.' },
      { title: 'Documents & Appointment', desc: 'We prepare the compliance officer’s appointment letter, collect the licence and identity documents, and check that every detail matches across the registration.' },
      { title: 'Registration Submitted', desc: 'We complete the organisation and user registration on goAML and submit it for review, then respond to any queries raised while the FIU considers it.' },
      { title: 'Account Activation & Users', desc: 'Once approved, the compliance officer activates the account. We help add deputy or additional users and set up secure handling for report drafts and evidence.' },
      { title: 'Filing Training', desc: 'We train your team on each report type that applies, using worked examples, and give you a short internal procedure for deciding, drafting and filing reports.' },
    ],
    requirements: [
      'Trade licence copy',
      'Compliance officer’s passport and Emirates ID',
      'Appointment letter for the compliance officer',
      'Authorised signatory’s details and ID',
      'Business contact details and official email address',
      'Details of any deputy or additional users',
      'Your supervisor and sector details',
    ],
    eligibility: {
      heading: 'Who needs to register on goAML',
      points: [
        'Real estate brokers and agents',
        'Dealers in precious metals and stones',
        'Accountants, auditors and corporate service providers',
        'Lawyers and notaries',
        'Other businesses in scope of the UAE’s AML rules',
        'Registered businesses changing their compliance officer',
      ],
    },
    faqs: [
      {
        q: 'What is goAML and who has to register?',
        a: 'goAML is the reporting platform of the UAE Financial Intelligence Unit. Financial institutions and designated non-financial businesses and professions — real estate brokers, dealers in precious metals and stones, accountants, auditors, corporate service providers, lawyers and notaries — register on it so they can file the reports the AML rules require. If you are unsure whether you are in scope, we check your activities first.',
      },
      {
        q: 'What reports are filed through goAML?',
        a: 'The main ones are suspicious transaction reports and suspicious activity reports, which any business in scope must file when it suspects money laundering or terrorist financing. Dealers in precious metals and stones also report cash transactions of AED 55,000 or more, and real estate businesses file activity reports on the property transactions the rules specify. Sanctions screening matches are reported through the platform too.',
      },
      {
        q: 'Who should be the main goAML user?',
        a: 'Normally the compliance officer, who registers as the organisation’s main user and is responsible for the reports it files. You can add a deputy or other users, such as an alternate who covers absences, under the organisation’s account. Access should be limited to the people who genuinely need it, because reports and their contents are confidential.',
      },
      {
        q: 'What happens after the goAML registration is approved?',
        a: 'The compliance officer activates the account and can then submit reports and receive messages from the FIU through the platform. Registration alone does not make you compliant: you still need the risk assessment, due diligence, screening and training that sit behind each report. We can set those up through our AML compliance programme service if they are not yet in place.',
      },
      {
        q: 'Can we tell a customer we have filed a report about them?',
        a: 'No. Disclosing to a customer, or to anyone else, that a suspicious transaction report has been or may be filed — known as tipping off — is prohibited under the UAE’s AML rules. Reports and the information in them must be kept confidential. Our training covers how staff should deal with a customer while a report is being considered.',
      },
      {
        q: 'What if our compliance officer leaves?',
        a: 'You need to appoint a replacement and update the goAML registration so the new officer can access the account and file reports, and notify your supervisor where its rules require it. A gap in reporting cover is a compliance risk in itself, so we help you appoint a deputy in advance and handle the handover on the platform.',
      },
    ],
    included: [
      {
        group: 'Registration',
        desc: 'Getting the business and its officer onto the platform.',
        items: [
          'Scope and supervisor confirmation',
          'Compliance officer appointment letter',
          'Organisation registration on goAML',
          'Compliance officer user registration',
          'Follow-up on review queries',
        ],
      },
      {
        group: 'Account Set-Up',
        desc: 'An account that is ready to report from the start.',
        items: [
          'Account activation support',
          'Deputy and additional users',
          'Report types mapped to your sector',
          'Internal reporting procedure',
          'Secure evidence handling',
        ],
      },
      {
        group: 'Training & Upkeep',
        desc: 'People who can file correctly, and a profile kept current.',
        items: [
          'STR and SAR drafting training',
          'DPMS and real estate report training',
          'Tipping-off awareness',
          'Profile updates when details change',
          'Officer handover on change',
        ],
      },
    ],
    related: ['aml-compliance', 'ubo-filing', 'risk-advisory', 'corporate-pro-services'],
  },

  /* ───────────────────────── UBO FILING ───────────────────────── */
  {
    slug: 'ubo-filing',
    category: 'compliance-risk',
    navLabel: 'UBO Filing',
    icon: Network,
    eyebrow: 'Beneficial Ownership',
    blurb: 'Owner registers filed & kept up to date',
    title: 'UBO Filing & Beneficial Ownership Registers in Dubai',
    heroSubtitle:
      'UAE companies must identify the people who ultimately own or control them, keep the registers the UBO rules require and file them with their licensing authority. We trace your ownership chain, prepare the registers and keep them current.',
    heroHighlights: ['Ownership Chain Traced', 'UBO & Partner Registers', 'Updates on Every Change'],
    metaTitle: 'UBO Filing UAE | Beneficial Ownership Register | Smartgic Visa',
    metaDescription:
      'UBO filing in Dubai and the UAE: beneficial owners traced through your ownership chain, registers prepared and filed with DET or your free zone, kept current.',
    keywords: [
      'ubo filing uae',
      'ubo register dubai',
      'beneficial ownership uae',
      'ubo declaration dubai',
      'ultimate beneficial owner uae',
    ],
    overview: {
      heading: 'The name on the licence is not always the beneficial owner',
      body: [
        'The UBO rules require companies to keep a register of beneficial owners, a register of partners or shareholders and, where relevant, a register of nominee directors — and to file them with their licensing authority. A beneficial owner is broadly a natural person who ultimately owns or controls 25% or more of the shares or voting rights, or controls the company by other means. Where ownership runs through other companies, trusts or nominees, identifying that person takes work.',
        'We map your ownership chain from your company up to the individuals at the top, apply the 25% and control tests at each level, and record the senior managing official where nobody qualifies. We prepare all the registers and supporting documents, file them with DET or your free zone authority, and update them whenever shares are transferred, partners join or leave, or control changes.',
      ],
    },
    stats: [
      { value: '25%', label: 'Ownership or voting rights that make a beneficial owner' },
      { value: '3', label: 'Registers: beneficial owners, partners and nominee directors' },
      { value: 'SMO', label: 'Senior managing official recorded when no owner qualifies' },
      { value: 'DET', label: 'Or your free zone authority receives the filing' },
    ],
    benefits: [
      { title: 'Ownership Chain Mapped', desc: 'We trace every layer between your company and the individuals at the top, including corporate shareholders, holding companies and trusts.' },
      { title: 'Tests Applied Properly', desc: 'The 25% ownership test, control by other means and the senior managing official fallback are applied and documented, so each conclusion can be explained.' },
      { title: 'Complete Register Set', desc: 'Beneficial owner, partner or shareholder and nominee director registers prepared in the form your licensing authority expects to receive.' },
      { title: 'Filed With Your Authority', desc: 'We submit the filing through DET or your free zone authority’s system and keep a copy of what was filed with the supporting evidence.' },
      { title: 'Updates When Ownership Moves', desc: 'Share transfers, new partners, exits and changes in control trigger updates; we file them within the period the rules allow.' },
      { title: 'Consistent Across Records', desc: 'Your registers, MOA, licence and bank KYC tell the same ownership story, which matters when banks, auditors or authorities compare them.' },
    ],
    process: [
      { title: 'Ownership Information', desc: 'We collect your MOA, share register and details of every corporate or individual shareholder, nominee arrangement and agreement that could give someone control.' },
      { title: 'Chain Analysis', desc: 'We trace ownership through each layer to natural persons, apply the 25% test and the control-by-other-means test, and identify the senior managing official if needed.' },
      { title: 'Registers Prepared', desc: 'We draft the beneficial owner, partner and nominee director registers with the identity details required, and you review and sign them off before filing.' },
      { title: 'Filing', desc: 'We file the registers with DET or your free zone authority through its system, answer any queries and give you a record of what was filed.' },
      { title: 'Ongoing Updates', desc: 'When shares are transferred, partners join or leave, or control changes, we update the registers and refile within the period the UBO rules set.' },
    ],
    requirements: [
      'Trade licence and MOA or articles',
      'Current shareholder or partner register',
      'Passports and Emirates IDs (where held) of individual owners',
      'Corporate shareholder documents for each ownership layer',
      'Nominee, trust or shareholder agreements, if any',
      'Details of directors and senior managers',
      'Dates and documents of recent ownership changes',
    ],
    eligibility: {
      heading: 'When UBO filing is needed',
      points: [
        'A new company is being licensed',
        'Shares are transferred or a new partner joins',
        'A shareholder’s own ownership or control changes',
        'Your authority asks you to confirm or refresh your registers',
        'You have never filed, or are unsure what was filed',
      ],
    },
    faqs: [
      {
        q: 'Who counts as a beneficial owner of a UAE company?',
        a: 'Broadly, any natural person who ultimately owns or controls 25% or more of the company’s shares or voting rights, directly or through other entities, or who controls it by other means — for example through the right to appoint most of the directors. If no one meets either test, the senior managing official is recorded instead. We document how each conclusion was reached.',
      },
      {
        q: 'What registers does a company need to keep?',
        a: 'A register of beneficial owners, a register of partners or shareholders and, where the company has them, a register of nominee directors. Each records the identity details the UBO rules require and when people became or ceased to be owners. The registers are kept by the company and filed with its licensing authority, such as DET on the Dubai mainland or the relevant free zone.',
      },
      {
        q: 'Do we need to update the UBO register after a share transfer?',
        a: 'Yes. Any change to ownership or control — a share transfer, a new partner, an exit, or a change further up the chain — means the registers must be updated and the change filed with your licensing authority within the period the UBO rules set. We can handle the update as part of the share transfer, so the registers and the MOA change together.',
      },
      {
        q: 'What if our shareholder is another company or a trust?',
        a: 'Then the analysis continues up the chain until it reaches natural persons. A corporate shareholder’s own owners, a trust’s settlor, trustees and beneficiaries, or anyone with control through agreements may need to be considered. Documents from foreign entities usually need to be attested before they are accepted. We map each layer and keep the evidence on file.',
      },
      {
        q: 'What happens if we don’t file or update the UBO registers?',
        a: 'Failing to keep, file or update the registers breaches the UBO rules and can lead to administrative penalties from your licensing authority, as well as problems at licence renewal and with banks and auditors who rely on accurate ownership records. Penalty amounts are set by the rules; the practical fix is to file correctly now and keep the registers current.',
      },
      {
        q: 'Is UBO information made public?',
        a: 'No. The registers are filed with your licensing authority and are not published as a public register. They can be accessed by the authorities the UBO rules allow, such as supervisors and law enforcement, for compliance and investigation purposes. Banks will usually ask you for the same information directly as part of their own due diligence.',
      },
    ],
    included: [
      {
        group: 'Ownership Analysis',
        desc: 'Working out who really owns and controls the company.',
        items: [
          'Ownership chain mapping',
          '25% ownership and voting test',
          'Control by other means review',
          'Senior managing official identification',
          'Nominee and trust arrangements review',
        ],
      },
      {
        group: 'Registers & Filing',
        desc: 'The registers the UBO rules require, filed with your authority.',
        items: [
          'Register of beneficial owners',
          'Register of partners or shareholders',
          'Register of nominee directors',
          'Filing with DET or your free zone',
          'Filing record and evidence file',
        ],
      },
      {
        group: 'Keeping It Current',
        desc: 'Updates when ownership or control changes.',
        items: [
          'Updates after share transfers',
          'New partner and exit updates',
          'Change-of-control reviews',
          'Alignment with MOA and licence',
          'Ownership confirmations for banks and auditors',
        ],
      },
    ],
    related: ['share-transfer', 'moa-amendments', 'aml-compliance', 'bank-account-opening'],
  },

  /* ───────────────────────── RISK ADVISORY ───────────────────────── */
  {
    slug: 'risk-advisory',
    category: 'compliance-risk',
    navLabel: 'Risk Advisory',
    icon: Compass,
    eyebrow: 'Business Risk',
    blurb: 'Risk registers, controls & action plans',
    title: 'Business Risk Advisory Services in Dubai',
    heroSubtitle:
      'Understand the risks that could hurt your business and the controls that should stop them. We assess risk across operations, finance, fraud, third parties, continuity and compliance, and give you a prioritised plan to act on.',
    heroHighlights: ['Risk Register & Heat Map', 'Internal Control Design', 'Prioritised Action Plan'],
    metaTitle: 'Risk Advisory Dubai | Business Risk & Controls | Smartgic Visa',
    metaDescription:
      'Risk advisory in Dubai: enterprise risk assessment, risk registers, internal control design, fraud and vendor risk, continuity planning and an action plan.',
    keywords: [
      'risk advisory dubai',
      'business risk assessment uae',
      'enterprise risk management dubai',
      'internal controls consultant uae',
      'fraud risk assessment dubai',
    ],
    overview: {
      heading: 'Know which risks matter before they cost you',
      body: [
        'Most businesses carry more risk than they have written down: a supplier you cannot replace, payments one person can approve alone, contracts nobody tracks, systems with no backup, regulatory duties that changed last year. Without a structured view, controls end up where problems happened before rather than where the next one is likely. Banks, investors, auditors and regulators increasingly expect to see that risks have been identified, owned and managed.',
        'We run a structured risk assessment with your management team, building a risk register that rates each risk by likelihood and impact and shows it on a heat map. We then review the controls in place, design the ones that are missing, and look specifically at fraud, third-party, continuity and compliance risk. This is advisory work that helps you design and improve controls — internal audit, by contrast, gives independent assurance that they operate.',
      ],
    },
    stats: [
      { value: 'Register', label: 'Every key risk rated, owned and tracked' },
      { value: 'Heat map', label: 'Likelihood and impact shown at a glance' },
      { value: 'Controls', label: 'Matrix linking each key risk to its control' },
      { value: 'Plan', label: 'Prioritised actions with owners and target dates' },
    ],
    benefits: [
      { title: 'A Clear Risk Picture', desc: 'One risk register covering strategic, operational, financial, fraud, third-party and compliance risks, rated consistently and owned by named people.' },
      { title: 'Controls Where They Count', desc: 'Control design focused on your highest-rated risks, with approval limits, segregation of duties and reconciliations matched to how you operate.' },
      { title: 'Fraud Gaps Closed', desc: 'We look for the gaps fraud exploits — in payments, procurement, payroll, cash and inventory — and design checks that close them.' },
      { title: 'Third Parties Under Control', desc: 'Suppliers, distributors and agents are assessed for dependency, integrity and compliance risk, with due diligence proportionate to what each one handles.' },
      { title: 'Continuity Planned', desc: 'We identify the processes, people and systems you cannot do without, and help you plan how the business keeps running if one fails.' },
      { title: 'Actions, Not Just Findings', desc: 'Every recommendation comes with a priority, an owner and a target date, so the report turns into work your team can actually complete.' },
    ],
    process: [
      { title: 'Scope & Context', desc: 'We agree the scope with management — the whole business or chosen areas — and review your structure, key processes, contracts, systems and any past incidents or audit findings.' },
      { title: 'Risk Identification Workshops', desc: 'Through interviews and workshops with your managers, we identify the risks in each area and rate them by likelihood and impact on a consistent scale.' },
      { title: 'Control Review & Design', desc: 'We map existing controls against the key risks, assess how well they are designed, and propose new or improved controls where gaps remain, recorded in a control matrix.' },
      { title: 'Report & Heat Map', desc: 'You receive a risk report with the register, heat map and control matrix, written for management and the board rather than for specialists.' },
      { title: 'Action Plan & Follow-Up', desc: 'We agree a prioritised action plan with owners and target dates, and can return to check progress and refresh the register as the business changes.' },
    ],
    requirementsHeading: 'Information we’ll need',
    requirements: [
      'Organisation chart and key roles',
      'Overview of main processes and systems',
      'Policies, approval limits and authority matrix',
      'Key contracts, suppliers and distributors',
      'Recent financial statements or management accounts',
      'Past audit findings, incidents or losses',
      'Time with management for interviews and workshops',
    ],
    eligibility: {
      heading: 'When risk advisory helps',
      points: [
        'Your business has grown faster than its controls',
        'A bank, investor or board has asked for a risk assessment',
        'You have had a fraud, loss or control failure',
        'You depend heavily on a few suppliers, customers or people',
        'You are preparing for an internal or external audit',
      ],
    },
    faqs: [
      {
        q: 'What is the difference between risk advisory and internal audit?',
        a: 'Risk advisory helps you identify risks and design or improve the controls that manage them — it is forward-looking and done with management. Internal audit gives independent assurance that controls work as intended, testing them and reporting to management or the board. Many businesses use advisory first to build the framework, then internal audit to check it operates; to keep that assurance independent, the people who designed a control should not be the ones auditing it.',
      },
      {
        q: 'What will we receive at the end of a risk review?',
        a: 'A risk report covering the scope and method, the risk register with ratings and owners, a heat map showing likelihood and impact, a control matrix linking key risks to controls and gaps, and a prioritised action plan with owners and target dates. Everything is delivered in editable form so your team can keep the register up to date.',
      },
      {
        q: 'Do you follow a recognised framework?',
        a: 'Yes. Our approach draws on widely used frameworks such as ISO 31000 for risk management and COSO for internal control, scaled to the size of your business. We use them as structure, not paperwork — a small company gets a short, usable register and control matrix rather than a long manual nobody reads.',
      },
      {
        q: 'How do you assess fraud risk?',
        a: 'We look at where money, goods or data move and who controls each step — payments, procurement, payroll, expenses, cash, inventory and system access. We identify where one person can both initiate and approve, where reconciliations are missing, and where pressure or incentives exist, then design preventive and detective controls that fit the size of your team.',
      },
      {
        q: 'Does a small company really need a business continuity plan?',
        a: 'A small company often depends more on single points of failure — one key person, one bank, one system or one supplier. A continuity plan does not need to be long: it identifies the critical activities, what would stop them and how you would keep operating or recover. We keep it proportionate to your size and walk through the essentials with you.',
      },
      {
        q: 'How often should a risk assessment be updated?',
        a: 'Typically once a year, and whenever something significant changes — a new product or market, a major customer or supplier, a system change, an acquisition or a control failure. The register is a working document: owners should update their risks and actions between reviews. We can return periodically to refresh it and track progress on the action plan.',
      },
    ],
    included: [
      {
        group: 'Risk Assessment',
        desc: 'A structured view of what could go wrong and how much it matters.',
        items: [
          'Enterprise risk assessment',
          'Risk register and rating scale',
          'Heat map and risk profile',
          'Compliance risk review',
          'Board and management reporting',
        ],
      },
      {
        group: 'Controls & Fraud',
        desc: 'Designing the controls that address your key risks.',
        items: [
          'Internal control design',
          'Control matrix',
          'Segregation of duties review',
          'Fraud risk assessment',
          'Approval limits and authority matrix',
        ],
      },
      {
        group: 'Resilience & Third Parties',
        desc: 'The risks that sit beyond your own processes.',
        items: [
          'Third-party and vendor risk review',
          'Supplier due diligence approach',
          'Business continuity planning',
          'Key person and system dependency review',
          'Prioritised action plan and follow-up',
        ],
      },
    ],
    related: ['internal-audit', 'aml-compliance', 'cfo-services', 'external-audit'],
  },
];
