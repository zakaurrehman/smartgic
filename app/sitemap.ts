import type { MetadataRoute } from 'next';
import { serviceSlugs } from '@/lib/services';
import { jurisdictionSlugs } from '@/lib/freezones';
import { getAllPosts } from '@/lib/blog';

const SITE = 'https://www.smartgicvisa.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  /** Conversion and discovery pages — crawled more often, weighted higher. */
  const primaryPages = [
    'services',
    'free-zones',
    'pricing',
    'golden-visa',
    'contact',
    'cost-estimator',
    'golden-visa/eligibility',
  ];

  const secondaryPages = ['about', 'blog'];
  const legalPages = ['privacy', 'terms'];

  return [
    {
      url: `${SITE}/`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1,
    },
    ...primaryPages.map((path) => ({
      url: `${SITE}/${path}`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    })),
    ...secondaryPages.map((path) => ({
      url: `${SITE}/${path}`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    })),
    ...serviceSlugs.map((slug) => ({
      url: `${SITE}/services/${slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
    ...jurisdictionSlugs.map((slug) => ({
      url: `${SITE}/free-zones/${slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
    ...getAllPosts().map((post) => ({
      url: `${SITE}/blog/${post.slug}`,
      lastModified: new Date(`${post.date}T00:00:00Z`),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    })),
    ...legalPages.map((path) => ({
      url: `${SITE}/${path}`,
      lastModified: now,
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    })),
  ];
}
