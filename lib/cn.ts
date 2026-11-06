/**
 * Joins class names, skipping falsy values. A dependency-free stand-in for
 * clsx — conflicting Tailwind classes are not merged, so callers should avoid
 * passing two values for the same property.
 */
export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(' ');
}
