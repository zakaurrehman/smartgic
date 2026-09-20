import BrandMark from '@/components/ui/BrandMark';

/** Branded route-transition fallback, shown while a page streams in. */
export default function Loading() {
  return (
    <div
      className="grid min-h-screen place-items-center bg-brand-navy"
      role="status"
      aria-live="polite"
    >
      <div className="flex flex-col items-center gap-6">
        <BrandMark className="h-14 w-14 animate-pulse" />
        <div className="h-1.5 w-44 overflow-hidden rounded-full bg-white/10">
          <div className="h-full w-1/2 animate-progress rounded-full bg-brand-gradient" />
        </div>
        <span className="sr-only">Loading</span>
      </div>
    </div>
  );
}
