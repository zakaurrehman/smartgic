'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { AlertTriangle, Phone, RotateCcw } from 'lucide-react';
import { company } from '@/lib/data';

/**
 * Route-level error boundary. Keeps the visitor on a branded page with a working
 * phone number rather than dropping them on the default Next.js error screen.
 */
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Surfaced in the browser console and Vercel logs for diagnosis.
    console.error('Route error:', error);
  }, [error]);

  return (
    <main id="main" className="grid min-h-screen place-items-center bg-brand-navy px-5 text-white">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="aurora left-[-10%] top-[-10%] h-[360px] w-[360px] bg-brand-cyan/30" />
        <div className="aurora right-[-8%] bottom-[-10%] h-[440px] w-[440px] bg-brand-blue/40" />
      </div>

      <div className="relative mx-auto max-w-lg text-center">
        <span className="mx-auto grid h-16 w-16 place-items-center rounded-2xl border border-white/15 bg-white/5 backdrop-blur">
          <AlertTriangle className="h-7 w-7 text-brand-cyan" />
        </span>
        <h1 className="mt-7 text-3xl font-extrabold leading-tight !text-white sm:text-4xl">
          Something went wrong
        </h1>
        <p className="mt-4 text-base leading-relaxed text-slate-300">
          Sorry — that page failed to load. Trying again usually fixes it. If it keeps happening,
          call us and we will help you directly.
        </p>

        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <button type="button" onClick={reset} className="btn-gradient w-full sm:w-auto">
            <RotateCcw className="h-4 w-4" /> Try again
          </button>
          <a href={`tel:${company.phoneHref}`} className="btn-white w-full sm:w-auto">
            <Phone className="h-4 w-4" /> {company.phone}
          </a>
        </div>

        <p className="mt-8 text-sm text-slate-400">
          <Link href="/" className="font-semibold text-brand-cyan hover:underline">
            Return to the homepage
          </Link>
        </p>
      </div>
    </main>
  );
}
