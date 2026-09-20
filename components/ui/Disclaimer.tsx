import { Info } from 'lucide-react';
import { company } from '@/lib/data';

/**
 * Independence and accuracy notice.
 *
 * Immigration and company-formation content is routinely mistaken for official
 * government guidance. This makes Smartgic's status explicit and flags that
 * fees, timelines and eligibility are set by the authorities, not by us.
 */
export default function Disclaimer({ className = '' }: { className?: string }) {
  return (
    <section className={`bg-white pb-12 pt-4 ${className}`}>
      <div className="container-x">
        <div className="rounded-2xl border border-slate-100 bg-slate-50/70 p-6 sm:p-7">
          <h2 className="flex items-center gap-2 text-sm font-bold text-ink-900">
            <Info className="h-4.5 w-4.5 shrink-0 text-brand-cyan-dark" />
            Independence &amp; accuracy notice
          </h2>
          <p className="mt-3 text-xs leading-relaxed text-ink-400">
            {company.legalName} is a privately owned business setup and immigration consultancy
            licensed by the {company.authority} under licence {company.licenseNo}. We are not a
            government entity and are not affiliated with, endorsed by or acting on behalf of any UAE
            government authority, free zone authority or their agencies. Information on this website
            is general guidance only and does not constitute legal, tax or immigration advice.
            Government fees, processing times, visa eligibility and approvals are determined solely
            by the relevant authorities, vary case by case and are not guaranteed. Always confirm
            current requirements for your specific circumstances with us or with the relevant
            authority before acting. All third-party names, free zone names and trademarks are the
            property of their respective owners.
          </p>
        </div>
      </div>
    </section>
  );
}
