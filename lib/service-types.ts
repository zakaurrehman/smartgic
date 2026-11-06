import type { LucideIcon } from 'lucide-react';
import type { CategorySlug } from './catalog';

/*
 * Service content types. Kept in their own module (no runtime imports beyond
 * types) so content files in lib/service-data/ can be type-checked in isolation.
 */

export type ServiceStat = { value: string; label: string };
export type ServiceBenefit = { title: string; desc: string };
export type ServiceStep = { title: string; desc: string };
export type ServicePackage = {
  name: string;
  badge: string;
  featured?: boolean;
  price: string;
  period: string;
  features: string[];
};
export type ServiceFaq = { q: string; a: string };
export type ServiceScopeGroup = { group: string; desc: string; items: string[] };

/**
 * A service page at /services/<slug>.
 *
 * Content rules: `stats` are "at a glance" facts and must be checkable —
 * statutory figures, scope or how we work — never volumes, success rates or
 * other performance claims. Government fees, processing-time promises and visa
 * eligibility thresholds are never stated; route those to a consultation.
 */
export type Service = {
  slug: string;
  category: CategorySlug;
  navLabel: string;
  icon: LucideIcon;
  eyebrow: string;
  /** Short description shown under the label in the mega-menu. */
  blurb?: string;
  title: string;
  heroSubtitle: string;
  heroHighlights: string[];
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  overview: {
    heading: string;
    body: string[];
  };
  stats: ServiceStat[];
  benefits: ServiceBenefit[];
  process: ServiceStep[];
  requirements: string[];
  /** "What's included" — grouped sub-services rendered on the service page. */
  included?: ServiceScopeGroup[];
  packages?: ServicePackage[];
  faqs: ServiceFaq[];
  related: string[];
  /** "Who this is for" — eligibility or trigger points, shown beside requirements. */
  eligibility?: { heading: string; points: string[] };
  /** Heading override for the requirements list (default: documents). */
  requirementsHeading?: string;
  /** Interactive tool rendered on the page. */
  tool?: 'corporate-tax-calculator' | 'vat-calculator';
};
