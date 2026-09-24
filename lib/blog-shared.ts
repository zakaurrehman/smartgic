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
  /**
   * Optional real cover image, e.g. /blog-images/my-post.jpg in public/.
   * Covers are designed at 1200x630 — the Open Graph size — and are always
   * rendered at that ratio, because they carry baked-in headline text that any
   * crop would cut through.
   */
  image?: string;
  /** Description of the cover for screen readers and social cards. */
  imageAlt?: string;
  content: string; // raw markdown
  readingTime: number; // minutes
};

/**
 * Serialisable post shape for client components. Drops `content`, which is the
 * bulk of the payload and is never needed by the index.
 */
export type BlogCard = Omit<BlogPost, 'content'> & { searchIndex: string };

/** The minimum a post card needs — satisfied by both BlogPost and BlogCard. */
export type PostSummary = Pick<
  BlogPost,
  'slug' | 'title' | 'description' | 'date' | 'category' | 'readingTime' | 'image' | 'imageAlt'
>;

/** Native size of blog covers; also the Open Graph image size. */
export const COVER_WIDTH = 1200;
export const COVER_HEIGHT = 630;

export function formatDate(iso: string): string {
  const d = new Date(`${iso}T00:00:00Z`);
  return d.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  });
}
