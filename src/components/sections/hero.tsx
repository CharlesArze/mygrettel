import { MediaPlaceholder } from "@/components/ui/media-placeholder";

export function Hero() {
  return (
    <section className="min-h-[55vh] px-[1.25rem] pt-[7rem]">
      <MediaPlaceholder ratio="16 / 7" className="w-full" label="Video / foto hero" />
    </section>
  );
}
