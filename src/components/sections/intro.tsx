import { site } from "@/content/site";

export function Intro() {
  return (
    <section className="grid grid-cols-1 gap-[2rem] px-[2.5rem] py-section-y md:grid-cols-[2fr_1fr]">
      <p className="font-body text-[2.75rem] leading-[1.15] text-brand">{site.intro.statement}</p>
      <div className="font-body text-[1.1rem] leading-loose text-brand/80">
        <p className="mb-2 font-medium text-brand">{site.intro.infoTitle}</p>
        {site.intro.channels.map((channel) => (
          <p key={channel}>{channel}</p>
        ))}
      </div>
    </section>
  );
}
