import { PillButton } from "@/components/ui/pill-button";
import { site } from "@/content/site";

export function Sauces() {
  return (
    <section id="salsas" className="px-[2.5rem] py-section-y text-center">
      <p className="mb-[1rem] font-display text-[1.5rem] text-brand">{site.sauces.eyebrow}</p>
      <h2 className="mx-auto mb-[1.5rem] max-w-[40rem] text-[4rem] text-brand">
        {site.sauces.title}
      </h2>
      <p className="mx-auto mb-[2.5rem] max-w-[36rem] font-body text-[1.1rem] text-brand/70">
        {site.sauces.body}
      </p>
      <ul className="mx-auto mb-[2.5rem] flex max-w-[40rem] flex-col gap-[0.5rem] font-body text-[1.1rem] text-brand/80">
        {site.sauces.items.map((sauce) => (
          <li key={sauce.name}>
            <span className="font-medium text-brand">{sauce.name}</span> — {sauce.description}
          </li>
        ))}
      </ul>
      <PillButton href={site.sauces.cta.href} variant="outline">
        {site.sauces.cta.label}
      </PillButton>
    </section>
  );
}
