import { categories } from './catalog';
import { services } from './services';
import { jurisdictions } from './freezones';
import { getAllPosts } from './blog';

export type SearchEntry = {
  title: string;
  href: string;
  group: 'Services' | 'Categories' | 'Jurisdictions' | 'Guides' | 'Tools' | 'Pages';
  desc: string;
  /** Lower-case text the palette matches against. */
  terms: string;
};

const pages: Omit<SearchEntry, 'terms'>[] = [
  { title: 'Book a free consultation', href: '/contact', group: 'Pages', desc: 'Call, WhatsApp or send us your plan' },
  { title: 'Packages & pricing', href: '/pricing', group: 'Pages', desc: 'Starting prices for our core setup packages' },
  { title: 'UAE Golden Visa', href: '/golden-visa', group: 'Pages', desc: '10-year renewable residency' },
  { title: 'About Smartgic Visa', href: '/about', group: 'Pages', desc: 'DET-licensed consultancy in Deira, Dubai' },
  { title: 'All services', href: '/services', group: 'Pages', desc: 'The full catalogue, by category' },
  { title: 'Guides & insights', href: '/blog', group: 'Pages', desc: 'Plain-English guides to UAE business' },
];

const tools: Omit<SearchEntry, 'terms'>[] = [
  { title: 'Setup cost estimator', href: '/cost-estimator', group: 'Tools', desc: 'Match your plan to a jurisdiction and cost tier' },
  { title: 'Golden Visa eligibility check', href: '/golden-visa/eligibility', group: 'Tools', desc: 'See which category fits your profile' },
  { title: 'Corporate tax calculator', href: '/corporate-tax-calculator', group: 'Tools', desc: 'Estimate UAE corporate tax at 0% and 9%' },
  { title: 'VAT calculator', href: '/vat-calculator', group: 'Tools', desc: 'Add or remove 5% UAE VAT' },
  { title: 'Compare jurisdictions', href: '/free-zones', group: 'Tools', desc: 'Search and filter every UAE option' },
];

function withTerms(e: Omit<SearchEntry, 'terms'>, extra: string[] = []): SearchEntry {
  return { ...e, terms: [e.title, e.desc, ...extra].join(' ').toLowerCase() };
}

export function buildSearchIndex(): SearchEntry[] {
  return [
    ...services.map((s) =>
      withTerms(
        { title: s.navLabel, href: `/services/${s.slug}`, group: 'Services', desc: s.blurb ?? s.eyebrow },
        [s.title, s.eyebrow, ...s.keywords],
      ),
    ),
    ...categories.map((c) =>
      withTerms({ title: c.label, href: `/services/${c.slug}`, group: 'Categories', desc: c.tagline }, c.keywords),
    ),
    ...tools.map((t) => withTerms(t)),
    ...jurisdictions.map((j) =>
      withTerms(
        { title: j.name, href: `/free-zones/${j.slug}`, group: 'Jurisdictions', desc: `${j.emirate} · ${j.category} · ${j.tagline}` },
        [j.abbr, ...j.sectors, ...j.keywords],
      ),
    ),
    ...getAllPosts().map((p) =>
      withTerms({ title: p.title, href: `/blog/${p.slug}`, group: 'Guides', desc: p.category }, p.keywords),
    ),
    ...pages.map((p) => withTerms(p)),
  ];
}
