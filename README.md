# Smartgic Immigration — Official Website

A modern, high-conversion marketing website for **Smartgic Immigration Business Set Up Services EST.** — a Dubai-licensed business setup, PRO and immigration consultancy.

Built with the current industry-best stack for Vercel:

| Layer | Technology |
|-------|-----------|
| Framework | **Next.js 16** (App Router, React 19, Turbopack) |
| Styling | **Tailwind CSS 3.4** with a custom brand design system |
| Animation | CSS keyframes + Framer Motion + scroll-reveal (`IntersectionObserver`) |
| Icons | `lucide-react` |
| Fonts | Plus Jakarta Sans (self-hosted via `next/font`) |
| Hosting | **Vercel** (zero-config, fully static) |

---

## ✨ What's included

- **Sticky glass navigation** with mobile drawer and prominent CTA
- **Animated hero** with a live "Setup Tracker" dashboard, DET license badge & Golden Visa badge
- **12 services** — company formation, trade license, residence & Golden visas, PRO, attestation, MOA/AOA, tax/VAT, banking, and more
- **Free-zone marquee** (IFZA, DMCC, Meydan, DAFZA, JAFZA, RAKEZ, DIFC…)
- **4-step process**, **3 transparent pricing packages**, **Golden Visa** spotlight
- **Testimonials**, **FAQ accordion**, **CTA band**
- **Contact form** that opens WhatsApp with pre-filled details (works with no backend)
- **Floating WhatsApp button**
- SEO: metadata, Open Graph, JSON-LD `ProfessionalService` + FAQ schema, `sitemap.xml`, `robots.txt`
- Fully responsive, accessible, and `prefers-reduced-motion` aware

---

## 🚀 Run locally

```bash
npm install
npm run dev
```

Open <http://localhost:3000>.

Production build:

```bash
npm run build
npm start
```

---

## ▲ Deploy to Vercel

### Option A — Vercel Dashboard (easiest)
1. Push this folder to a GitHub/GitLab/Bitbucket repo.
2. Go to <https://vercel.com/new> and **import** the repo.
3. Vercel auto-detects Next.js — no configuration needed. Click **Deploy**.
4. Add your custom domain (`smartgic.ae`) under **Settings → Domains**.

### Option B — Vercel CLI
```bash
npm i -g vercel
vercel          # preview deployment
vercel --prod   # production deployment
```

> No environment variables are required. The site is fully static.

---

## ✏️ Editing content (no code needed)

Almost all text, services, prices, FAQs and contact details live in **one file**:

```
lib/data.ts
```

**Before going live, update these placeholders** in `lib/data.ts` (the `company` object):

| Field | Replace with |
|-------|--------------|
| `phone` / `phoneHref` | Your real phone number |
| `whatsapp` | Your WhatsApp number (digits only, e.g. `9715XXXXXXXX`) |
| `email` | Your real email (e.g. `info@smartgic.ae`) |
| `address` | Your exact office address |

Other quick edits:
- **Services** → `services` array
- **Pricing** → `packages` array (prices are indicative — set your real ones)
- **Free zones** → `freeZones` array
- **FAQs** → `faqs` array
- **Testimonials** → `testimonials` array
- **Social links** → `components/Footer.tsx` (`socials` array)

### Brand assets
- Logo: `public/logo.png` (replace with any updated logo — keep the name)
- Favicon: `public/favicon.svg`
- Brand colours: `tailwind.config.ts` → `theme.extend.colors.brand`

---

## 📁 Project structure

```
app/
  layout.tsx        # fonts, metadata, SEO
  page.tsx          # page composition + JSON-LD
  globals.css       # design tokens & component classes
  sitemap.ts / robots.ts
components/
  Header.tsx, Footer.tsx
  sections/         # Hero, Services, FreeZones, Process, WhyUs,
                    # Packages, GoldenVisa, Testimonials, FAQ, CTABand, Contact
  ui/               # Reveal, SectionHeading, BrandMark, WhatsAppButton
lib/
  data.ts           # ← all editable content
public/
  logo.png, favicon.svg
```

---

## 📝 Company details (from DET Professional License)

- **Legal name:** Smartgic Immigration Business Set Up Services EST.
- **License No.:** 1394564
- **Licensing authority:** Dubai Department of Economy & Tourism (DET)
- **Jurisdiction:** Dubai, United Arab Emirates

---

© Smartgic Immigration. All rights reserved.
