import type { MetadataRoute } from 'next';
import { serviceSlugs } from '@/lib/services';
import { getAllPosts } from '@/lib/blog';

const SITE = 'https://www.smartgicvisa.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticPages = ['about', 'services', 'free-zones', 'pricing', 'golden-visa', 'blog', 'privacy'];
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
    ...getAllPosts().map((post) => ({
      url: `${SITE}/blog/${post.slug}`,
      lastModified: new Date(`${post.date}T00:00:00Z`),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    })),
  ];
}
