import Image from 'next/image';
import type { CSSProperties } from 'react';
import { ArrowRight, Building2, ClipboardCheck, Crown, MessageCircle, Receipt, ShieldCheck } from 'lucide-react';
import { company } from '@/lib/data';
import { siteImages } from '@/lib/site-images';
import VideoBackground from '../ui/VideoBackground';
import WordReveal from '../ui/WordReveal';
import Magnetic from '../ui/Magnetic';
import Aurora from '../ui/Aurora';
import GlassMark from '../three/GlassMark';

const whatsappHref = `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(
  "Hello Smartgic, I'd like to book a consultation.",
)}`;

/** Service chips that float around the glass mark — labels of real services. */
const orbit = [
  { label: 'Company formation', icon: Building2, className: 'left-[2%] top-[18%]', delay: '0s' },
  { label: 'Golden Visa', icon: Crown, className: 'right-[0%] top-[8%]', delay: '-2.5s' },
  { label: 'Corporate tax & VAT', icon: Receipt, className: 'bottom-[16%] right-[-2%]', delay: '-4s' },
  { label: 'Audit & assurance', icon: ClipboardCheck, className: 'bottom-[6%] left-[8%]', delay: '-1.2s' },
];

/**
 * Homepage hero: a looping dawn video of Downtown Dubai under a navy wash, the
 * headline rising word by word, and the Smartgic mark rendered as 3D glass
 * floating over the skyline. The poster image is the first paint; the video
 * and the WebGL mark load after it, and neither runs for reduced-motion
 * visitors.
 */
export default function HomeHero({ serviceCount, zoneCount }: { serviceCount: number; zoneCount: number }) {
  const poster = siteImages.dubaiSkylineDawn;

  return (
    <section className="on-dark relative isolate overflow-hidden bg-navy-950 text-slate-300 lg:min-h-[min(100svh,980px)]">
      <VideoBackground
        className="-z-10"
        sources={[{ src: '/video/dubai-skyline-dawn-720.mp4', type: 'video/mp4' }]}
        mobileSources={[{ src: '/video/dubai-skyline-dawn-540.mp4', type: 'video/mp4' }]}
        poster={
          <Image
            src={poster.src}
            alt=""
            fill
            priority
            fetchPriority="high"
            placeholder="blur"
            sizes="100vw"
            className="object-cover"
            style={{ objectPosition: poster.position }}
          />
        }
        videoClassName="object-[45%_60%]"
      />
      {/* Washes: solid navy behind the copy, opening up toward the skyline. */}
      <div
        className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,#050B1A_0%,rgba(5,11,26,0.9)_32%,rgba(5,11,26,0.45)_62%,rgba(5,11,26,0.12)_100%)] max-lg:bg-navy-950/70"
        aria-hidden="true"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-navy-950 via-transparent to-navy-950/45" aria-hidden="true" />
      <Aurora intensity="subtle" grid={false} className="-z-10" />

      <div className="container-wide relative grid items-center gap-10 pb-20 pt-[calc(var(--header-h)+3rem)] lg:min-h-[min(100svh,980px)] lg:grid-cols-[1.12fr_0.88fr] lg:pb-24 lg:pt-[calc(var(--header-h)+1rem)]">
        <div className="max-w-3xl">
          <p className="rise-in inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/[0.06] py-1.5 pl-2 pr-4 text-xs text-slate-200 backdrop-blur-md">
            <span className="relative grid h-5 w-5 place-items-center">
              <span className="absolute inset-0 animate-pulse-ring rounded-full bg-brand-cyan/50" aria-hidden="true" />
              <span className="relative h-2 w-2 rounded-full bg-brand-cyan" />
            </span>
            DET-licensed consultancy · Deira, Dubai
          </p>

          <WordReveal
            className="mt-7 text-display-2xl font-semibold text-white"
            delay={120}
            parts={['Build your UAE business', { accent: 'the smart way.' }]}
          />

          <p className="lead rise-in mt-7 max-w-xl !text-slate-300" style={{ '--d': '520ms' } as CSSProperties}>
            Company formation, visas, PRO, corporate tax, VAT, accounting and audit — planned, filed and kept compliant
            by one licensed team in Dubai.
          </p>

          <div className="rise-in mt-10 flex flex-col gap-3 sm:flex-row sm:items-center" style={{ '--d': '640ms' } as CSSProperties}>
            <Magnetic>
              <a href="#contact" className="btn-primary btn-sheen btn-lg">
                Book a free consultation <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </Magnetic>
            <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="btn-glass btn-lg">
              <MessageCircle className="h-4 w-4 text-[#25D366]" aria-hidden="true" /> WhatsApp us
            </a>
          </div>

          <ul className="rise-in mt-12 flex flex-wrap gap-2" style={{ '--d': '760ms' } as CSSProperties} aria-label="About Smartgic">
            <li className="chip-dark">
              <ShieldCheck className="h-3.5 w-3.5 text-brand-cyan" aria-hidden="true" /> DET licence{' '}
              <span className="font-mono text-white">{company.licenseNo}</span>
            </li>
            <li className="chip-dark">{serviceCount} services, one team</li>
            <li className="chip-dark">{zoneCount} jurisdictions compared</li>
            <li className="chip-dark">Mon–Sat, 9am–6pm</li>
          </ul>
        </div>

        {/* The glass mark, floating over the skyline. Decorative. */}
        <div className="relative mx-auto hidden aspect-square w-full max-w-[560px] lg:block" aria-hidden="true">
          <GlassMark className="absolute inset-0" />
          {orbit.map((o) => {
            const Icon = o.icon;
            return (
              <span
                key={o.label}
                className={`absolute ${o.className} inline-flex animate-float items-center gap-2 rounded-full border border-white/15 bg-navy-900/55 px-3.5 py-2 text-xs font-medium text-white shadow-float backdrop-blur-md`}
                style={{ animationDelay: o.delay }}
              >
                <Icon className="h-3.5 w-3.5 text-brand-cyan" />
                {o.label}
              </span>
            );
          })}
        </div>
      </div>

      {/* Scroll cue */}
      <div className="pointer-events-none absolute inset-x-0 bottom-6 hidden justify-center lg:flex" aria-hidden="true">
        <span className="flex h-10 w-6 justify-center rounded-full border border-white/25 pt-2">
          <span className="h-2 w-0.5 animate-float rounded-full bg-white/70 [animation-duration:2s]" />
        </span>
      </div>
    </section>
  );
}
