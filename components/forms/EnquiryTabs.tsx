'use client';

import { useId, useState } from 'react';
import { CalendarCheck, PhoneCall } from 'lucide-react';
import { cn } from '@/lib/cn';
import LeadForm from './LeadForm';
import CallbackForm from './CallbackForm';

/** Tabbed card: full consultation request, or a quick callback request. */
export default function EnquiryTabs({ source, defaultService = '' }: { source: string; defaultService?: string }) {
  const [tab, setTab] = useState<'consult' | 'callback'>('consult');
  const id = useId();
  const tabs = [
    { key: 'consult' as const, label: 'Send your plan', icon: CalendarCheck },
    { key: 'callback' as const, label: 'Request a callback', icon: PhoneCall },
  ];

  return (
    <div className="card p-2 sm:p-2.5">
      <div role="tablist" aria-label="How would you like us to get in touch?" className="grid grid-cols-2 gap-1 rounded-[1.25rem] bg-surface p-1">
        {tabs.map((t) => {
          const Icon = t.icon;
          const selected = tab === t.key;
          return (
            <button
              key={t.key}
              type="button"
              role="tab"
              id={`${id}-${t.key}-tab`}
              aria-selected={selected}
              aria-controls={`${id}-${t.key}-panel`}
              tabIndex={selected ? 0 : -1}
              onClick={() => setTab(t.key)}
              onKeyDown={(e) => {
                if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
                  const next = t.key === 'consult' ? 'callback' : 'consult';
                  setTab(next);
                  document.getElementById(`${id}-${next}-tab`)?.focus();
                }
              }}
              className={cn(
                'flex min-h-[48px] items-center justify-center gap-2 rounded-2xl px-3 text-sm font-medium transition-all duration-300',
                selected ? 'bg-white text-ink-900 shadow-card' : 'text-ink-500 hover:text-ink-900',
              )}
            >
              <Icon className={cn('h-4 w-4', selected ? 'text-brand-blue' : 'text-ink-400')} aria-hidden="true" />
              {t.label}
            </button>
          );
        })}
      </div>
      <div className="p-4 pt-6 sm:p-7">
        <div role="tabpanel" id={`${id}-consult-panel`} aria-labelledby={`${id}-consult-tab`} hidden={tab !== 'consult'}>
          <LeadForm source={source} defaultService={defaultService} />
        </div>
        <div role="tabpanel" id={`${id}-callback-panel`} aria-labelledby={`${id}-callback-tab`} hidden={tab !== 'callback'}>
          <CallbackForm source={source} service={defaultService} />
        </div>
      </div>
    </div>
  );
}
