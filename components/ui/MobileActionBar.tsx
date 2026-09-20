'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { CalendarCheck, MessageCircle, Phone } from 'lucide-react';
import { company } from '@/lib/data';

/**
 * Sticky mobile conversion bar.
 *
 * Mobile visitors rarely scroll back to the header for a phone number, so the
 * three primary actions stay pinned. Appears after the hero so it never covers
 * the first screen, and hides on desktop where the header CTA is always visible.
 */
export default function MobileActionBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 520);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const whatsappHref = `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(
    "Hello Smartgic, I'd like to know more about business setup in Dubai.",
  )}`;

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-slate-200 bg-white/95 backdrop-blur-xl transition-transform duration-300 lg:hidden ${
        visible ? 'translate-y-0' : 'translate-y-full'
      }`}
      style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
      aria-hidden={!visible}
    >
      <div className="grid grid-cols-3 gap-2 px-3 py-2.5">
        <a
          href={`tel:${company.phoneHref}`}
          className="flex min-h-[48px] flex-col items-center justify-center gap-0.5 rounded-xl text-ink-700 transition-colors active:bg-slate-100"
          tabIndex={visible ? 0 : -1}
        >
          <Phone className="h-5 w-5 text-brand-blue" />
          <span className="text-[0.7rem] font-semibold">Call</span>
        </a>

        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="flex min-h-[48px] flex-col items-center justify-center gap-0.5 rounded-xl text-ink-700 transition-colors active:bg-slate-100"
          tabIndex={visible ? 0 : -1}
        >
          <MessageCircle className="h-5 w-5 text-[#25D366]" />
          <span className="text-[0.7rem] font-semibold">WhatsApp</span>
        </a>

        <Link
          href="/contact"
          className="flex min-h-[48px] flex-col items-center justify-center gap-0.5 rounded-xl bg-brand-gradient text-white shadow-glow"
          tabIndex={visible ? 0 : -1}
        >
          <CalendarCheck className="h-5 w-5" />
          <span className="text-[0.7rem] font-bold">Free consult</span>
        </Link>
      </div>
    </div>
  );
}
