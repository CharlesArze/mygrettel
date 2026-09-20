import { PillButton } from "@/components/ui/pill-button";
import { site } from "@/content/site";

export function SiteFooter() {
  return (
    <footer id="contacto" className="bg-brand text-paper">
      <div
        className="h-[2rem]"
        style={{
          backgroundImage: `
            linear-gradient(45deg, var(--color-paper) 25%, transparent 25%, transparent 75%, var(--color-paper) 75%, var(--color-paper)),
            linear-gradient(45deg, var(--color-paper) 25%, transparent 25%, transparent 75%, var(--color-paper) 75%, var(--color-paper))
          `,
          backgroundSize: "2rem 2rem",
          backgroundPosition: "0 0, 1rem 1rem",
        }}
      />

      <nav className="flex flex-wrap justify-center gap-x-[2.5rem] gap-y-[0.75rem] px-[2.5rem] py-[2.5rem] font-body text-[1.1rem]">
        {site.footer.nav.map((link) => (
          <a key={link.label} href={link.href} className="hover:opacity-70">
            {link.label}
          </a>
        ))}
      </nav>

      <div className="flex flex-wrap justify-center gap-[1rem] px-[2.5rem] pb-[3rem]">
        <PillButton href={site.footer.ctaRappi.href} variant="outline-light">
          {site.footer.ctaRappi.label}
        </PillButton>
        <PillButton href={site.footer.ctaPedidosYa.href} variant="outline-light">
          {site.footer.ctaPedidosYa.label}
        </PillButton>
      </div>

      {/* eslint-disable-next-line @next/next/no-img-element -- SVG del logo oficial, variante blanca */}
      <img
        src="/brand/wordmark-white.svg"
        alt="Grettel"
        className="mx-auto w-full max-w-[64rem] select-none px-[1rem]"
      />

      <div className="flex flex-col items-center justify-between gap-[0.5rem] px-[2.5rem] py-[1.5rem] text-[0.85rem] text-paper/70 md:flex-row">
        <p>{site.footer.legal}</p>
        <p>{site.footer.credit}</p>
        <a href={site.footer.privacy.href} className="hover:opacity-70">
          {site.footer.privacy.label}
        </a>
      </div>
    </footer>
  );
}
