import { ImageIcon } from "lucide-react";

/**
 * Sustituye toda imagen/video del clon: mismo radio de 30px y misma huella
 * (ratio, rotación) que el original, marcado como pendiente de reemplazar.
 */
export function MediaPlaceholder({
  ratio = "4 / 3",
  rotate = 0,
  label,
  className = "",
}: {
  ratio?: string;
  rotate?: number;
  label?: string;
  className?: string;
}) {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-3 rounded-[var(--radius-card)] border-2 border-dashed border-ink/20 bg-ink/5 text-ink/40 ${className}`}
      style={{ aspectRatio: ratio, transform: rotate ? `rotate(${rotate}deg)` : undefined }}
    >
      <ImageIcon className="h-[2.5rem] w-[2.5rem]" strokeWidth={1.5} />
      {label && <span className="text-[0.9rem] uppercase tracking-wide">{label}</span>}
    </div>
  );
}
