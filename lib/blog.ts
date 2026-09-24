import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import type { BlogCard, BlogPost } from './blog-shared';

// Server-only module: reads content/blog from disk. Client components should
// import types and formatDate from './blog-shared' instead.
export type { BlogPost, BlogCard, PostSummary } from './blog-shared';
export { formatDate, COVER_WIDTH, COVER_HEIGHT } from './blog-shared';

const BLOG_DIR = path.join(process.cwd(), 'content', 'blog');

export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith('.md'))
    .map((file) => {
      const slug = file.replace(/\.md$/, '');
      const raw = fs.readFileSync(path.join(BLOG_DIR, file), 'utf8');
      const { data, content } = matter(raw);
      const words = content.trim().split(/\s+/).length;
      return {
        slug,
        title: String(data.title ?? slug),
        description: String(data.description ?? ''),
        date: String(data.date ?? '1970-01-01'),
        author: String(data.author ?? 'Smartgic Editorial Team'),
        category: String(data.category ?? 'Business Setup'),
        keywords: Array.isArray(data.keywords) ? data.keywords.map(String) : [],
        image: data.image ? String(data.image) : undefined,
        imageAlt: data.imageAlt ? String(data.imageAlt) : undefined,
        content,
        readingTime: Math.max(1, Math.round(words / 200)),
      } satisfies BlogPost;
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPost(slug: string): BlogPost | undefined {
  return getAllPosts().find((p) => p.slug === slug);
}

export function getPostSlugs(): string[] {
  return getAllPosts().map((p) => p.slug);
}

/** Category names with post counts, most populated first — powers the blog filter. */
export function getCategories(posts: BlogPost[]): { name: string; count: number }[] {
  const counts = new Map<string, number>();
  for (const post of posts) {
    counts.set(post.category, (counts.get(post.category) ?? 0) + 1);
  }
  return [...counts.entries()]
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count || a.name.localeCompare(b.name));
}

/** Strips `content` and builds a lowercase search index for the client filter. */
export function toCard(post: BlogPost): BlogCard {
  const { content: _content, ...rest } = post;
  return {
    ...rest,
    searchIndex: [post.title, post.description, post.category, ...post.keywords]
      .join(' ')
      .toLowerCase(),
  };
}

/** Posts related to `post`, preferring the same category before falling back to recency. */
export function getRelatedPosts(post: BlogPost, limit = 3): BlogPost[] {
  const others = getAllPosts().filter((p) => p.slug !== post.slug);
  const sameCategory = others.filter((p) => p.category === post.category);
  const rest = others.filter((p) => p.category !== post.category);
  return [...sameCategory, ...rest].slice(0, limit);
}

/** Posts for the given slugs, in the order given; unknown slugs are skipped. */
export function getPostsBySlugs(slugs: string[]): BlogPost[] {
  const bySlug = new Map(getAllPosts().map((p) => [p.slug, p]));
  return slugs.map((s) => bySlug.get(s)).filter((p): p is BlogPost => Boolean(p));
}
