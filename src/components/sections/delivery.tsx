import { MediaPlaceholder } from "@/components/ui/media-placeholder";
import { PillButton } from "@/components/ui/pill-button";
import { site } from "@/content/site";

/** Bloque invertido de Story — equivalente al "food truck" del original. */
export function Delivery() {
  return (
    <section id="delivery" className="grid grid-cols-1 items-center gap-[3rem] px-[2.5rem] py-section-y md:grid-cols-2">
      <div className="order-2 md:order-1">
        <p className="mb-[0.5rem] font-display text-[1.5rem] text-brand">
          {site.delivery.eyebrow}
        </p>
        <h2 className="mb-[1.5rem] text-[3.5rem] text-brand">{site.delivery.title}</h2>
        <p className="mb-[2rem] max-w-[32rem] font-body text-[1.1rem] text-brand/70">
          {site.delivery.body}
        </p>
        <PillButton href={site.delivery.cta.href} variant="outline">
          {site.delivery.cta.label}
        </PillButton>
      </div>
      <div className="order-1 md:order-2">
        <MediaPlaceholder ratio="4 / 3" rotate={2} label="Foto — delivery" />
      </div>
    </section>
  );
}
