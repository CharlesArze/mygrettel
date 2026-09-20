import { MediaPlaceholder } from "@/components/ui/media-placeholder";
import { PillButton } from "@/components/ui/pill-button";
import { site } from "@/content/site";

export function Story() {
  return (
    <section id="nosotros" className="grid grid-cols-1 items-center gap-[3rem] px-[2.5rem] py-section-y md:grid-cols-2">
      <MediaPlaceholder ratio="3 / 4" rotate={-3} label="Foto — nuestra historia" />
      <div>
        <p className="mb-[0.5rem] font-display text-[1.5rem] text-brand">{site.story.eyebrow}</p>
        <h2 className="mb-[1.5rem] text-[3.5rem] text-brand">{site.story.title}</h2>
        <p className="mb-[2rem] max-w-[32rem] font-body text-[1.1rem] text-brand/70">
          {site.story.body}
        </p>
        <PillButton href={site.story.cta.href} variant="outline">
          {site.story.cta.label}
        </PillButton>
      </div>
    </section>
  );
}
