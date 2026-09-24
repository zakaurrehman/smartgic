import Image from 'next/image';
import BlogCover from './BlogCover';
import type { PostSummary } from '@/lib/blog-shared';

/**
 * A post's cover, at its native 1200:630 ratio.
 *
 * Supplied covers carry baked-in headline text and the Smartgic logo, so they
 * are never cropped to fit a container and nothing is laid over them. Posts
 * without a cover fall back to the generative BlogCover at the same ratio, so a
 * grid mixing the two keeps every card's title on the same line.
 */
export default function PostCover({
  post,
  sizes,
  alt = '',
  priority = false,
  zoomOnHover = false,
  className = '',
}: {
  post: Pick<PostSummary, 'image' | 'category'>;
  /** Rendered width hints for the responsive srcset. */
  sizes: string;
  /**
   * Empty by default: inside a card the cover sits in a link that already
   * announces the title, so describing the artwork too would be repetition.
   * Pass the post's imageAlt where the cover stands on its own.
   */
  alt?: string;
  priority?: boolean;
  zoomOnHover?: boolean;
  className?: string;
}) {
  if (post.image) {
    return (
      <div className={`relative aspect-[1200/630] overflow-hidden bg-slate-100 ${className}`}>
        <Image
          src={post.image}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className={`object-cover ${
            zoomOnHover ? 'transition-transform duration-500 group-hover:scale-[1.03]' : ''
          }`}
        />
      </div>
    );
  }

  return (
    <BlogCover category={post.category} className={`aspect-[1200/630] ${className}`} />
  );
}
