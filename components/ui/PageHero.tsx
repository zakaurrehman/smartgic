import Image from 'next/image';
import Link from 'next/link';
import type { CSSProperties, ReactNode } from 'react';
import { ArrowRight, CheckCircle2, MessageCircle } from 'lucide-react';
import type { SiteImage } from '@/lib/site-images';
import { company } from '@/lib/data';
import { cn } from '@/lib/cn';
import Breadcrumbs, { type Crumb } from './Breadcrumbs';
import Aurora from './Aurora';

const whatsappHref = `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(
  "Hello Smartgic, I'd like to book a consultation.",
)}`;

/**
 * Hero for inner pages, on navy.
 *
 * - `split` (default when an image is given): copy left, framed photo right
 *   with an optional glass panel (`aside`) overlapping its lower edge.
 * - `center`: centred copy over the photo, washed with navy for contrast.
 *
 * Put the accent word of `title` in <span className="accent">.
 */
export default function PageHero({
  eyebrow,
  title,
  subtitle,
  crumbs,
  ctaHref = '#contact',
  ctaLabel = 'Book a free consultation',
  image,
  variant,
  highlights,
  aside,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  subtitle: ReactNode;
  crumbs: Crumb[];
  /** Where the primary CTA points; pages without an in-page #contact pass "/contact". */
  ctaHref?: string;
  ctaLabel?: string;
  image?: SiteImage;
  variant?: 'split' | 'center';
  highlights?: string[];
  /** Glass panel laid over the photo's lower edge (split variant). */
  aside?: ReactNode;
  /** Extra content under the CTAs (e.g. a facts strip). */
  children?: ReactNode;
}) {
  const layout = variant ?? (image ? 'split' : 'center');
  const centered = layout === 'center';

  const copy = (
    <div className={cn('relative', centered && 'mx-auto max-w-3xl text-center')}>
      <Breadcrumbs light items={crumbs} className={cn('rise-in', centered && 'flex justify-center')} />
      <p className="eyebrow-dark rise-in mt-7" style={{ '--d': '60ms' } as CSSProperties}>
        {eyebrow}
      </p>
      <h1
        className="rise-in mt-5 text-display-xl font-semibold text-white"
        style={{ '--d': '120ms' } as CSSProperties}
      >
        {title}
      </h1>
      <p
        className={cn('lead rise-in mt-6 max-w-2xl !text-slate-300', centered && 'mx-auto')}
        style={{ '--d': '200ms' } as CSSProperties}
      >
        {subtitle}
      </p>
      {highlights && highlights.length > 0 && (
        <ul
          className={cn('rise-in mt-7 flex flex-wrap gap-x-6 gap-y-2.5', centered && 'justify-center')}
          style={{ '--d': '260ms' } as CSSProperties}
        >
          {highlights.map((h) => (
            <li key={h} className="flex items-center gap-2 text-sm text-slate-200">
              <CheckCircle2 className="h-4 w-4 text-brand-cyan" aria-hidden="true" />
              {h}
            </li>
          ))}
        </ul>
      )}
      <div
        className={cn('rise-in mt-9 flex flex-col gap-3 sm:flex-row', centered && 'sm:justify-center')}
        style={{ '--d': '320ms' } as CSSProperties}
      >
        {ctaHref.startsWith('#') ? (
          <a href={ctaHref} className="btn-primary btn-sheen">
            {ctaLabel} <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        ) : (
          <Link href={ctaHref} className="btn-primary btn-sheen">
            {ctaLabel} <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        )}
        <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="btn-glass">
          <MessageCircle className="h-4 w-4 text-[#25D366]" aria-hidden="true" /> WhatsApp us
        </a>
      </div>
      {children}
    </div>
  );

  return (
    <section className="on-dark relative isolate overflow-hidden bg-navy-900 pt-[calc(var(--header-h)+1rem)] text-slate-300">
      <Aurora intensity={image ? 'subtle' : 'normal'} />

      {centered && image && (
        <div className="absolute inset-0 -z-10">
          <Image
            src={image.src}
            alt=""
            fill
            priority
            placeholder="blur"
            sizes="100vw"
            className="object-cover object-[var(--pos-sm)] sm:object-[var(--pos)]"
            style={
              {
                '--pos': image.position ?? '50% 50%',
                '--pos-sm': image.mobilePosition ?? image.position ?? '50% 50%',
              } as CSSProperties
            }
          />
          <div className="absolute inset-0 bg-navy-900/80" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_65%_at_50%_50%,rgba(10,23,48,0.55),transparent)]" />
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-navy-900 to-transparent" />
        </div>
      )}

      <div className="container-x relative pb-16 pt-8 sm:pb-20 lg:pb-24 lg:pt-12">
        {centered || !image ? (
          copy
        ) : (
          <div className="grid items-center gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:gap-14">
            {copy}
            <div className="rise-in relative" style={{ '--d': '180ms' } as CSSProperties}>
              <div
                className="pointer-events-none absolute -inset-4 rounded-[2.5rem] bg-brand-gradient opacity-20 blur-3xl"
                aria-hidden="true"
              />
              <div className="relative aspect-[4/3.1] overflow-hidden rounded-[1.75rem] border border-white/15 bg-navy-800 shadow-float">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  priority
                  placeholder="blur"
                  sizes="(min-width: 1280px) 540px, (min-width: 1024px) 44vw, 100vw"
                  className="object-cover"
                  style={{ objectPosition: image.position ?? '50% 50%' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/45 via-transparent to-transparent" aria-hidden="true" />
              </div>
              {aside && <div className="relative -mt-10 px-4 sm:-mt-12 sm:px-8">{aside}</div>}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
