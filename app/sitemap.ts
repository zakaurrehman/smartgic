import type { MetadataRoute } from 'next';
import { serviceSlugs } from '@/lib/services';
import { categorySlugs } from '@/lib/catalog';
import { jurisdictionSlugs } from '@/lib/freezones';
import { getAllPosts } from '@/lib/blog';

const SITE = 'https://www.smartgicvisa.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  /** Conversion and discovery pages — crawled more often, weighted higher. */
  const primaryPages = ['services', 'free-zones', 'pricing', 'golden-visa', 'contact'];
  const toolPages = ['cost-estimator', 'golden-visa/eligibility', 'corporate-tax-calculator', 'vat-calculator'];
  const secondaryPages = ['about', 'blog'];
  const legalPages = ['privacy', 'terms'];

  const page = (path: string, priority: number, changeFrequency: 'weekly' | 'monthly' | 'yearly') => ({
    url: `${SITE}/${path}`,
    lastModified: now,
    changeFrequency,
    priority,
  });

  return [
    { url: `${SITE}/`, lastModified: now, changeFrequency: 'weekly', priority: 1 },
    ...primaryPages.map((p) => page(p, 0.9, 'weekly')),
    ...categorySlugs.map((slug) => page(`services/${slug}`, 0.9, 'weekly')),
    ...serviceSlugs.map((slug) => page(`services/${slug}`, 0.8, 'monthly')),
    ...toolPages.map((p) => page(p, 0.8, 'monthly')),
    ...jurisdictionSlugs.map((slug) => page(`free-zones/${slug}`, 0.8, 'monthly')),
    ...secondaryPages.map((p) => page(p, 0.7, 'weekly')),
    ...getAllPosts().map((post) => ({
      url: `${SITE}/blog/${post.slug}`,
      lastModified: new Date(`${post.date}T00:00:00Z`),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
    ...legalPages.map((p) => page(p, 0.3, 'yearly')),
  ];
}
