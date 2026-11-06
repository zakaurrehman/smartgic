# Smartgic Visa — website

Marketing site for **Smartgic Immigration Business Set Up Services EST.**, a Dubai consultancy licensed by the
Department of Economy and Tourism (DET licence 1394564). Live at <https://www.smartgicvisa.com>; every push to `main`
deploys on Vercel.

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router, React 19, Turbopack), fully static |
| Styling | Tailwind CSS 3.4 with the design tokens in `tailwind.config.ts` and component classes in `app/globals.css` |
| Motion | CSS keyframes (headline/hero entrances), framer-motion 11 (scroll-linked timelines, menus), all reduced-motion aware |
| 3D | `components/three/GlassMark.tsx` — the logo as raymarched glass in a hand-written WebGL shader (no 3D library); `components/home/EmiratesGlobe.tsx` — `cobe` 0.6.4 globe (~5 KB) |
| Fonts | Geist (UI and body), Instrument Serif italic (headline accents), Geist Mono (data labels) — self-hosted via `next/font` |
| Icons | `lucide-react` |

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run lint     # ESLint 9 flat config
npm run build    # also enforces catalogue integrity (see below)
```

## Where things live

```
app/
  layout.tsx                 fonts, site-wide metadata, header/footer/WhatsApp/mobile bar for every page
  page.tsx                   homepage
  services/page.tsx          all services, by category
  services/[slug]/page.tsx   renders BOTH the 8 category hubs and the 55 service pages
  corporate-tax-calculator/, vat-calculator/, cost-estimator/, golden-visa/eligibility/   free tools
  free-zones/, blog/, golden-visa/, pricing/, about/, contact/, privacy/, terms/
  search-index.json/route.ts static index for the ⌘K search palette
  sitemap.ts, robots.ts, opengraph-image.tsx
components/
  Header.tsx, Footer.tsx     mega menu, mobile sheet, search palette, full footer navigation
  home/                      homepage sections
  services/                  service + category page sections
  forms/                     LeadForm, CallbackForm, EnquiryTabs (consultation / callback)
  tools/                     calculators, cost estimator, Golden Visa eligibility
  three/                     WebGL glass logo
  ui/                        design-system primitives (Reveal, WordReveal, Spotlight, TiltCard, Marquee, Counter, …)
lib/
  catalog.ts                 the 8 service categories: hub copy, FAQs, and the ordered list of service slugs
  services.ts                the original 13 services + merging/ordering/integrity checks
  service-data/*.ts          the 42 services added in November 2026, one file per area
  service-types.ts           the Service type
  data.ts                    company details, packages, FAQs, reasons, sectors
  freezones.ts               20 jurisdictions (relative cost tiers only — never government fees)
  site-images.ts             every photo, its alt text, and which page uses it
  leads.ts                   lead submission (Web3Forms / WhatsApp), validation, service options
content/blog/*.md            blog posts
docs/media-credits.md        licences and credits for stock photos and video
```

## Content rules

These keep the site truthful. They are enforced by review, and partly by `npm run build`.

- **No invented figures.** Do not add client counts, success or approval rates, ratings, reviews or testimonials
  unless they come from a verifiable source (for example, a Google Business Profile). The template's
  "5,000+ companies", "98% success", "120+ nationalities", "4.9/5" and named testimonials were removed for this reason.
- **No government fees, processing-time promises or visa thresholds.** Use relative tiers or route to a consultation.
  Statutory tax figures (5% VAT, the AED 375,000 / 187,500 thresholds, 0% / 9% corporate tax, filing deadlines) are fine.
- **Prices:** only the three setup packages carry confirmed starting prices (Free Zone AED 5,750, Premium Free Zone
  AED 12,900, Mainland AED 18,900). Anything else is "On request" until the owner supplies a real figure.
- **Audit:** opinions are issued and signed by UAE-registered auditors, independent of the bookkeeping — never claim
  in-house auditors or FTA tax-agent status.
- **Out of scope:** company formation outside the UAE and international tax advisory are not offered.
- **People in stock photos are illustrative** — never caption them as Smartgic staff or clients (Pexels licence).

## Adding a service

1. Add the entry to the relevant file in `lib/service-data/` (or a new file exported from `lib/service-data/index.ts`).
   Copy an existing entry's shape; `stats` must be checkable facts, not performance claims.
2. Add its slug to the category's `services` list in `lib/catalog.ts` — this controls the menu, footer, hub page and
   sitemap order. A production build fails if a listed slug has no service, or a service is not listed anywhere.
3. Give it a photo in `serviceHeroImages` in `lib/site-images.ts` (otherwise it falls back to its category photo).

## Images and video

Photos are imported statically from `public/images` so `next/image` can size them, blur-load them and serve AVIF/WebP.
Register new photos in `lib/site-images.ts` with real alt text. The hero video is `public/video/dubai-skyline-dawn-*.mp4`
(720p on wide screens, 540p on tablets — ~1.7 MB / ~1 MB). It only loads after the page, never on phones (they show the poster), with reduced motion or with Save-Data.
Credits and licences: `docs/media-credits.md`.

## Lead capture

Forms post to Web3Forms when `NEXT_PUBLIC_WEB3FORMS_KEY` is set (Vercel → Settings → Environment Variables, then
redeploy — the key is inlined at build time). Without it, every form hands the enquiry to WhatsApp, pre-filled, so
nothing is lost. Callback requests use the same pipeline.

## Publishing a blog post

Add a markdown file to `content/blog/` (file name = URL slug) with front matter:

```markdown
---
title: "Your post title"
description: "One sentence for the card and Google (max ~155 characters)."
date: "2026-11-06"
author: "Smartgic Editorial Team"
category: "Business Setup"
image: "/blog-images/your-cover.jpg"   # optional; a generated cover is used otherwise
imageAlt: "What the cover shows"
keywords: ["keyword one", "keyword two"]
---
```

Push to `main`; the post appears on `/blog`, in search, in the sitemap and with article schema.
