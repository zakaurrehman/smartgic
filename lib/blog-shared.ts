/**
 * Client-safe blog types and helpers.
 *
 * Kept separate from `lib/blog.ts`, which reads the filesystem. Client
 * components (the blog index filter) must not pull `fs` into the browser
 * bundle, so anything they need lives here.
 */

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string; // ISO yyyy-mm-dd
  author: string;
  category: string;
  keywords: string[];
  /** Optional real cover image path (e.g. /blog-images/my-post.jpg in public/). */
  image?: string;
  content: string; // raw markdown
  readingTime: number; // minutes
};

/**
 * Serialisable post shape for client components. Drops `content`, which is the
 * bulk of the payload and is never needed by the index.
 */
export type BlogCard = Omit<BlogPost, 'content'> & { searchIndex: string };

export function formatDate(iso: string): string {
  const d = new Date(`${iso}T00:00:00Z`);
  return d.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  });
}
