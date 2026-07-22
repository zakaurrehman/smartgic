import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/ui/WhatsAppButton';
import PageHero from '@/components/ui/PageHero';
import { company } from '@/lib/data';

const SITE = 'https://www.smartgicvisa.com';
const url = `${SITE}/privacy`;
const title = 'Privacy Policy | Smartgic Visa';
const description =
  'How Smartgic Visa collects, uses and protects your personal information across our website and client portal app.';

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: url },
  robots: { index: true, follow: true },
};

const sections = [
  {
    h: '1. Who we are',
    p: [
      `${company.legalName} ("Smartgic", "we", "us") is a consultancy licensed by the Dubai Department of Economy & Tourism (Licence No. ${company.licenseNo}), located at ${company.address}. This policy covers our website (smartgicvisa.com) and the Smartgic Client Portal mobile application.`,
    ],
  },
  {
    h: '2. Information we collect',
    p: [
      'Contact details you provide — name, email address, phone number and message content when you submit an enquiry, contact us on WhatsApp, or create a portal account.',
      'Service information — details about your company formation, visa, licensing or related applications that you ask us to process, including documents you upload to the client portal (such as passport copies, certificates and licences).',
      'Technical data — basic device and usage information (IP address, browser/app version, pages viewed) collected through standard logs and, where enabled, analytics.',
    ],
  },
  {
    h: '3. How we use your information',
    p: [
      'To respond to enquiries and provide the services you request — company setup, visa processing, PRO, attestation, banking assistance and related government transactions.',
      'To show you the live status of your applications in the client portal and notify you of required actions, status changes and upcoming renewals.',
      'To comply with UAE legal and regulatory obligations, including identity verification requirements applicable to our licensed activities.',
      'We do not sell your personal information to anyone.',
    ],
  },
  {
    h: '4. Sharing with authorities and partners',
    p: [
      'Delivering our services requires submitting your information and documents to relevant authorities and partners on your behalf — for example the Dubai Department of Economy & Tourism, GDRFA, MOHRE, MOFA, free zone authorities, banks and insurance providers. We share only what is required for the specific service you have engaged us for.',
      'We may use trusted service providers (such as hosting and communication platforms) that process data on our behalf under appropriate safeguards.',
    ],
  },
  {
    h: '5. Document storage and security',
    p: [
      'Documents uploaded to the client portal are stored securely with access restricted to you and the Smartgic team members handling your file. We apply reasonable technical and organisational measures to protect your information against unauthorised access, loss or misuse.',
      'We retain personal data only as long as needed to provide our services and to meet legal, regulatory and accounting requirements, after which it is deleted or anonymised.',
    ],
  },
  {
    h: '6. Your rights',
    p: [
      'You may request access to, correction of, or deletion of your personal information, and you may ask us to close your portal account, subject to documents we are legally required to retain. Contact us using the details below and we will respond promptly.',
    ],
  },
  {
    h: '7. Children',
    p: [
      'Our website and app are intended for adults. Where family visa services involve information about minors, it is provided by and processed on the instruction of a parent or guardian.',
    ],
  },
  {
    h: '8. Changes to this policy',
    p: [
      'We may update this policy from time to time. The latest version will always be available at this page, with material changes highlighted on the site.',
    ],
  },
  {
    h: '9. Contact us',
    p: [
      `Email: ${company.email}`,
      `Phone / WhatsApp: ${company.phone}`,
      `Address: ${company.address}`,
    ],
  },
];

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Legal"
          title={
            <>
              Privacy <span className="gradient-text">Policy</span>
            </>
          }
          subtitle="How we collect, use and protect your information across the Smartgic website and client portal app. Last updated: 23 June 2026."
          crumbs={[{ label: 'Home', href: '/' }, { label: 'Privacy Policy' }]}
        />
        <section className="section bg-white">
          <div className="container-x">
            <div className="mx-auto max-w-3xl space-y-10">
              {sections.map((s) => (
                <div key={s.h}>
                  <h2 className="text-xl font-extrabold text-ink-900">{s.h}</h2>
                  {s.p.map((para, i) => (
                    <p key={i} className="mt-3 text-[0.95rem] leading-relaxed text-ink-500">
                      {para}
                    </p>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
