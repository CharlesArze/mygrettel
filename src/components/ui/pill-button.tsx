"use client";

import Link from "next/link";
import { useRef, type MouseEvent } from "react";
import gsap from "gsap";
import type { ReactNode } from "react";

type Variant = "solid" | "outline" | "outline-light";

const variants: Record<Variant, string> = {
  solid: "border-2 border-brand bg-brand text-paper",
  outline: "border-2 border-brand text-brand",
  "outline-light": "border-2 border-paper text-paper",
};

/** Fracción del desplazamiento del cursor que se le "pega" al botón. */
const MAGNET_STRENGTH = 0.35;

export function PillButton({
  href,
  variant = "outline",
  className = "inline-flex",
  children,
}: {
  href: string;
  variant?: Variant;
  /** Clases de display (p. ej. "hidden md:inline-flex" para ocultar en mobile). Default: "inline-flex". */
  className?: string;
  children: ReactNode;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const quick = useRef<{ x: gsap.QuickToFunc; y: gsap.QuickToFunc } | null>(null);

  const getQuick = () => {
    if (quick.current || !ref.current) return quick.current;
    quick.current = {
      x: gsap.quickTo(ref.current, "x", { duration: 0.4, ease: "power3" }),
      y: gsap.quickTo(ref.current, "y", { duration: 0.4, ease: "power3" }),
    };
    return quick.current;
  };

  const onMouseMove = (e: MouseEvent<HTMLAnchorElement>) => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const q = getQuick();
    if (!q || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    q.x((e.clientX - (rect.left + rect.width / 2)) * MAGNET_STRENGTH);
    q.y((e.clientY - (rect.top + rect.height / 2)) * MAGNET_STRENGTH);
  };

  const onMouseLeave = () => {
    const q = getQuick();
    q?.x(0);
    q?.y(0);
  };

  return (
    <Link
      ref={ref}
      href={href}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className={`${className} items-center justify-center rounded-full px-[1.5rem] py-[0.5rem] text-[1rem] md:px-[2.5rem] md:py-[1rem] md:text-[1.25rem] font-button uppercase transition-opacity duration-150 ease-[cubic-bezier(0.4,0,0.2,1)] hover:opacity-50 ${variants[variant]}`}
    >
      {children}
    </Link>
  );
}
