import Image from 'next/image';
import type { ReactNode } from 'react';
import type { SiteImage } from '@/lib/site-images';

/**
 * Framed photo for the right-hand column of a page hero, with an optional glass
 * panel overlapping its lower edge (a service label, or a jurisdiction's facts).
 *
 * Loaded with priority: on desktop it sits in the first viewport beside the H1.
 */
export default function HeroPhoto({
  image,
  children,
}: {
  image: SiteImage;
  /** Glass panel laid over the bottom of the photo. */
  children?: ReactNode;
}) {
  return (
    <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
      {/* Soft brand glow behind the frame, so the photo sits in the navy hero
          rather than on top of it. */}
      <div
        className="pointer-events-none absolute -inset-3 rounded-[2rem] bg-brand-gradient opacity-25 blur-2xl"
        aria-hidden="true"
      />

      <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-white/15 bg-brand-navy-soft shadow-2xl">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          priority
          placeholder="blur"
          sizes="(min-width: 1280px) 560px, (min-width: 1024px) 45vw, (min-width: 544px) 512px, 100vw"
          className="object-cover"
          style={{ objectPosition: image.position ?? '50% 50%' }}
        />
        {/* A short fade at the base so the panel's edge sits softly on the photo. */}
        {children && (
          <div
            className="absolute inset-x-0 bottom-0 h-1/5 bg-gradient-to-t from-brand-navy/50 to-transparent"
            aria-hidden="true"
          />
        )}
      </div>

      {/* The panel straddles the photo's lower edge rather than sitting inside
          it: several photos carry their subject low in the frame (the company
          registration folder and passport, for one), and a deeper overlap
          covered exactly that detail. */}
      {children && <div className="relative -mt-6 px-4 sm:-mt-8 sm:px-6">{children}</div>}
    </div>
  );
}
