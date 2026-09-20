import { MediaPlaceholder } from "@/components/ui/media-placeholder";
import { site } from "@/content/site";

const collageRotations = [-4, 3, -2, 5, -3, 2];

export function Instagram() {
  return (
    <section id="instagram" className="px-[2.5rem] py-section-y text-center">
      <p className="mb-[0.5rem] font-display text-[1.5rem] text-brand">
        {site.instagram.eyebrow}
      </p>
      <h2 className="mb-[3rem] flex items-center justify-center gap-[0.5rem] normal-case">
        <span aria-hidden="true" className="font-display text-[3rem] text-brand">
          @
        </span>
        {/* eslint-disable-next-line @next/next/no-img-element -- SVG del logo oficial */}
        <img src="/brand/wordmark.svg" alt={site.instagram.handle} className="h-[3rem] w-auto" />
      </h2>
      <div className="grid grid-cols-2 gap-[1.5rem] sm:grid-cols-3 md:grid-cols-6">
        {collageRotations.map((rotate, i) => (
          <MediaPlaceholder key={i} ratio="1 / 1" rotate={rotate} />
        ))}
      </div>
    </section>
  );
}
