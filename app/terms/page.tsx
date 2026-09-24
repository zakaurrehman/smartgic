import type { Metadata } from 'next';
import { DEFAULT_SHARE_IMAGE } from '@/lib/seo';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/ui/WhatsAppButton';
import MobileActionBar from '@/components/ui/MobileActionBar';
import PageHero from '@/components/ui/PageHero';
import { company } from '@/lib/data';

const SITE = 'https://www.smartgicvisa.com';
const url = `${SITE}/terms`;
const title = 'Terms of Service | Smartgic Visa';
const description =
  'The terms governing use of the Smartgic Visa website and our business setup, visa and PRO services in Dubai, UAE.';

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: url },
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    locale: 'en_AE',
    url,
    siteName: 'Smartgic Visa',
    title,
    description,
    images: [DEFAULT_SHARE_IMAGE],
  },
  twitter: { card: 'summary_large_image', title, description, images: [DEFAULT_SHARE_IMAGE] },
};

const sections: { heading: string; body: string[] }[] = [
  {
    heading: '1. Who we are',
    body: [
      `${company.legalName} ("Smartgic", "we", "us") is a business setup and immigration consultancy licensed by the ${company.authority} under commercial licence number ${company.licenseNo}, with its office at ${company.address}.`,
      'We are a privately owned company. We are not a government entity and we are not affiliated with, endorsed by, or acting on behalf of any UAE federal or emirate-level government authority, free zone authority, or any of their agencies.',
    ],
  },
  {
    heading: '2. Acceptance of these terms',
    body: [
      'By accessing this website or engaging our services, you agree to these terms. If you do not accept them, please do not use the site or engage us.',
      'We may update these terms from time to time. The version published on this page at the time you use the site or engage us is the version that applies.',
    ],
  },
  {
    heading: '3. Information on this website',
    body: [
      'Content on this website — including guidance on company formation, free zones, visas, licensing, tax and compliance — is general information only. It is not legal, tax, financial, accounting or immigration advice, and it is not a substitute for advice on your specific circumstances.',
      'UAE regulations, authority fees, processing times, visa categories and eligibility criteria change. While we take care to keep content current and accurate, we do not warrant that every page reflects the latest position at the moment you read it. Always confirm the current requirements with us or with the relevant authority before acting.',
      'Where this site references third-party organisations, free zones or government authorities, those names and trademarks remain the property of their respective owners, and the reference does not imply any partnership or endorsement.',
    ],
  },
  {
    heading: '4. Quotes, fees and estimates',
    body: [
      'Prices shown on this website are indicative starting points for our professional service charges. They are not offers capable of acceptance and do not constitute a quotation.',
      'Government and authority fees are set by the relevant authority, not by us. They vary according to your business activity, jurisdiction, visa count, workspace and shareholder structure, and they are subject to change by the authority at any time.',
      'Our tools — including the cost estimator and the Golden Visa eligibility check — produce indicative guidance based on the information you enter. They do not constitute a quotation, an eligibility decision or a guarantee of any outcome.',
      'A binding engagement arises only when we issue you a written quotation or engagement letter and you accept it. That document, together with these terms, governs the work.',
    ],
  },
  {
    heading: '5. Outcomes and approvals',
    body: [
      'Licence issuance, visa approvals, Emirates ID issuance, bank account opening and all other approvals are decisions of the relevant authority, free zone or financial institution. They are not within our control.',
      'We undertake to prepare and submit your application competently, to represent your file properly and to keep you informed. We cannot and do not guarantee that any application will be approved, or approved within any particular timeframe.',
      'Where an application is rejected or delayed for reasons outside our control, our fees for work already performed remain payable. We will always tell you candidly where we think an application is unlikely to succeed before you spend money on it.',
    ],
  },
  {
    heading: '6. Your responsibilities',
    body: [
      'You are responsible for the accuracy, completeness and authenticity of all information and documents you provide to us. Applications submitted on the basis of inaccurate or incomplete information may be rejected, and any resulting cost is yours.',
      'You must not ask us to submit, and we will not submit, any document or statement that we know or suspect to be false, forged or misleading. We will withdraw from an engagement where this occurs.',
      'You remain responsible for your own ongoing compliance obligations — including licence renewal, visa renewal, tax registration and filing — whether or not you engage us to assist with them.',
    ],
  },
  {
    heading: '7. Payments',
    body: [
      'Fees, payment schedules and refund arrangements are set out in your written quotation or engagement letter.',
      'Government and authority fees are typically payable in advance and are generally non-refundable once paid to the authority, regardless of the outcome of the application.',
    ],
  },
  {
    heading: '8. Confidentiality',
    body: [
      'We treat the information and documents you share with us as confidential and use them only for the purpose of delivering the services you have engaged us for, or where disclosure is required by law or by the relevant authority as part of your application.',
      'Our handling of personal data is described in our Privacy Policy.',
    ],
  },
  {
    heading: '9. Limitation of liability',
    body: [
      'To the fullest extent permitted by law, our total liability arising out of or in connection with any engagement is limited to the professional service fees you have paid us for that engagement.',
      'We are not liable for indirect or consequential loss, including loss of profit, loss of opportunity or business interruption.',
      'Nothing in these terms limits or excludes liability where it cannot lawfully be limited or excluded.',
    ],
  },
  {
    heading: '10. Third-party links',
    body: [
      'This website links to third-party sites, including government and free zone authority websites. We provide those links for convenience. We do not control those sites and are not responsible for their content, accuracy or availability.',
    ],
  },
  {
    heading: '11. Intellectual property',
    body: [
      'The content, design, branding and structure of this website are owned by Smartgic or used under licence. You may read and share our content for personal or internal business use. You may not republish, sell or systematically reproduce it without our written permission.',
    ],
  },
  {
    heading: '12. Governing law',
    body: [
      'These terms are governed by the laws of the United Arab Emirates as applied in the Emirate of Dubai. The courts of Dubai have exclusive jurisdiction over any dispute arising from them.',
    ],
  },
  {
    heading: '13. Contact',
    body: [
      `Questions about these terms can be sent to ${company.email} or raised by phone on ${company.phone}. Our office is at ${company.address}, open ${company.hours}.`,
    ],
  },
];

export default function TermsPage() {
  return (
    <>
      <Header />
      <main id="main">
        <PageHero
          eyebrow="Legal"
          title={
            <>
              Terms of <span className="gradient-text">Service</span>
            </>
          }
          subtitle="The terms that govern use of this website and our business setup, visa and PRO services. Written to be read, not to be skipped."
          crumbs={[{ label: 'Home', href: '/' }, { label: 'Terms of Service' }]}
          ctaHref="/contact"
        />

        <section className="section bg-white">
          <div className="container-x">
            <div className="mx-auto max-w-3xl">
              <p className="rounded-2xl border border-slate-100 bg-slate-50/70 p-5 text-sm text-ink-500">
                Last updated: 20 September 2026
              </p>

              <div className="mt-10 space-y-10">
                {sections.map((s) => (
                  <section key={s.heading}>
                    <h2 className="text-xl font-extrabold text-ink-900 sm:text-2xl">{s.heading}</h2>
                    <div className="mt-4 space-y-4">
                      {s.body.map((p) => (
                        <p key={p.slice(0, 40)} className="text-sm leading-relaxed text-ink-500">
                          {p}
                        </p>
                      ))}
                    </div>
                  </section>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
      <MobileActionBar />
    </>
  );
}
