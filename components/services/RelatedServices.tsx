import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { getService, type Service } from '@/lib/services';
import { categoriesBySlug } from '@/lib/catalog';
import { getServiceImage } from '@/lib/site-images';
import SectionHeading from '../ui/SectionHeading';
import Reveal from '../ui/Reveal';

/** Photo cards linking to related services. */
export default function RelatedServices({
  slugs,
  eyebrow = 'Often combined',
  title,
  description = 'Most clients combine these. We run them as one engagement with a single point of contact.',
}: {
  slugs: string[];
  eyebrow?: string;
  title?: React.ReactNode;
  description?: string;
}) {
  const related = slugs.map(getService).filter((s): s is Service => Boolean(s));
  if (related.length === 0) return null;

  return (
    <section className="section bg-surface">
      <div className="container-x">
        <SectionHeading
          eyebrow={eyebrow}
          title={
            title ?? (
              <>
                Related <span className="accent">services</span>
              </>
            )
          }
          description={description}
        />
        <div className={`mt-14 grid gap-5 sm:grid-cols-2 ${related.length > 3 ? 'lg:grid-cols-4' : 'lg:grid-cols-3'}`}>
          {related.map((s, i) => (
            <Reveal key={s.slug} delay={(i % 4) * 70} className="h-full">
              <ServiceCard service={s} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ServiceCard({ service, priority = false }: { service: Service; priority?: boolean }) {
  const img = getServiceImage(service.slug, service.category);
  const category = categoriesBySlug[service.category];
  return (
    <Link
      href={`/services/${service.slug}`}
      className="group card card-hover flex h-full flex-col overflow-hidden p-2"
    >
      <div className="photo-frame aspect-[16/10] !rounded-[1.25rem] !shadow-none">
        <Image
          src={img.src}
          alt=""
          fill
          priority={priority}
          sizes="(min-width: 1280px) 300px, (min-width: 640px) 45vw, 100vw"
          className="object-cover"
          style={{ objectPosition: img.position ?? '50% 50%' }}
        />
      </div>
      <div className="flex flex-1 flex-col p-4 pt-5">
        <span className="font-mono text-[0.65rem] uppercase tracking-[0.16em] text-teal">
          {category?.short ?? service.eyebrow}
        </span>
        <h3 className="mt-2 text-[1.05rem] font-semibold text-ink-900 transition-colors group-hover:text-brand-blue">
          {service.navLabel}
        </h3>
        <p className="mt-1.5 flex-1 text-sm leading-relaxed text-ink-500">{service.blurb ?? service.eyebrow}</p>
        <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-brand-blue">
          Learn more
          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
        </span>
      </div>
    </Link>
  );
}
