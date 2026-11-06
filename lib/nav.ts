import type { StaticImageData } from 'next/image';
import { categories, type CategorySlug } from './catalog';
import { servicesBySlug } from './services';
import { featuredZoneSlugs, jurisdictionsBySlug, jurisdictionSlugs } from './freezones';
import { categoryImages } from './site-images';

/**
 * Navigation data, built on the server and handed to the (client) header and
 * footer as plain props. Keeping this out of the client bundle means the menu
 * no longer ships the full service and jurisdiction datasets to every visitor.
 * Icons travel as names and are resolved on the client (components/layout/nav-icons).
 */

export type NavIcon =
  | 'building'
  | 'briefcase'
  | 'landmark'
  | 'plane'
  | 'receipt'
  | 'calculator'
  | 'clipboard'
  | 'tag'
  | 'globe'
  | 'crown'
  | 'sparkles'
  | 'book'
  | 'percent'
  | 'shield';

const categoryIcon: Record<CategorySlug, NavIcon> = {
  'business-setup': 'building',
  'corporate-services': 'briefcase',
  'licensing-government': 'landmark',
  'visa-immigration': 'plane',
  'tax-services': 'receipt',
  'compliance-risk': 'shield',
  'accounting-bookkeeping': 'calculator',
  'audit-assurance': 'clipboard',
};

const linkIcon: Record<string, NavIcon> = {
  '/pricing': 'tag',
  '/cost-estimator': 'calculator',
  '/free-zones': 'globe',
  '/golden-visa': 'crown',
  '/golden-visa/eligibility': 'sparkles',
  '/corporate-tax-calculator': 'percent',
  '/vat-calculator': 'calculator',
};

export type NavLink = { label: string; href: string; blurb: string; icon?: NavIcon };

export type NavCategory = {
  slug: CategorySlug;
  label: string;
  short: string;
  tagline: string;
  href: string;
  icon: NavIcon;
  image?: { src: StaticImageData; alt: string };
  services: NavLink[];
  links: NavLink[];
};

export type NavData = {
  categories: NavCategory[];
  zones: { slug: string; abbr: string; label: string; blurb: string }[];
  zoneCount: number;
  resources: NavLink[];
  serviceCount: number;
};

export function getNavData(): NavData {
  const navCategories: NavCategory[] = categories.map((c) => {
    const img = categoryImages[c.slug];
    return {
      slug: c.slug,
      label: c.label,
      short: c.short,
      tagline: c.tagline,
      href: `/services/${c.slug}`,
      icon: categoryIcon[c.slug],
      image: img ? { src: img.src, alt: img.alt } : undefined,
      services: c.services
        .map((slug) => servicesBySlug[slug])
        .filter(Boolean)
        .map((s) => ({ label: s.navLabel, href: `/services/${s.slug}`, blurb: s.blurb ?? s.eyebrow })),
      links: (c.links ?? []).map((l) => ({ label: l.label, href: l.href, blurb: l.blurb, icon: linkIcon[l.href] })),
    };
  });

  const zones = featuredZoneSlugs
    .map((slug) => jurisdictionsBySlug[slug])
    .filter(Boolean)
    .map((z) => ({
      slug: z.slug,
      abbr: z.abbr,
      label: z.name.split(' — ')[0],
      blurb: `${z.emirate} · ${z.category} · ${z.costTier}`,
    }));

  return {
    categories: navCategories,
    zones,
    zoneCount: jurisdictionSlugs.length,
    serviceCount: navCategories.reduce((n, c) => n + c.services.length, 0),
    resources: [
      { label: 'Setup cost estimator', href: '/cost-estimator', blurb: 'Match your plan to a jurisdiction', icon: 'calculator' },
      { label: 'Golden Visa eligibility', href: '/golden-visa/eligibility', blurb: 'See which category fits your profile', icon: 'sparkles' },
      { label: 'Corporate tax calculator', href: '/corporate-tax-calculator', blurb: 'Estimate tax at the 0% and 9% rates', icon: 'percent' },
      { label: 'VAT calculator', href: '/vat-calculator', blurb: 'Add or remove 5% UAE VAT', icon: 'calculator' },
      { label: 'Packages & pricing', href: '/pricing', blurb: 'Starting prices for our core packages', icon: 'tag' },
      { label: 'Guides & insights', href: '/blog', blurb: 'Plain-English guides to UAE business', icon: 'book' },
    ],
  };
}
