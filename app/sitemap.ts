import type { MetadataRoute } from 'next';
import { serviceSlugs } from '@/lib/services';

const SITE = 'https://www.smartgicvisa.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticPages = ['free-zones', 'pricing', 'golden-visa'];
  return [
    {
      url: `${SITE}/`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1,
    },
    ...staticPages.map((path) => ({
      url: `${SITE}/${path}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
    ...serviceSlugs.map((slug) => ({
      url: `${SITE}/services/${slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
  ];
}
