"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { PillButton } from "@/components/ui/pill-button";
import { site } from "@/content/site";

/** Se oculta al bajar, reaparece al subir — igual que el header fijo del sitio de referencia. */
function useHideOnScrollDown() {
  const [hidden, setHidden] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    lastY.current = window.scrollY;

    const onScroll = () => {
      const y = window.scrollY;
      const goingDown = y > lastY.current;
      setHidden(goingDown && y > 80);
      lastY.current = y;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return hidden;
}

export function SiteHeader() {
  const hidden = useHideOnScrollDown();

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 flex items-center justify-between bg-transparent px-[2.5rem] pt-[2rem] pb-[1.5rem] transition-transform duration-300 ${
        hidden ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <Link href="/" aria-label="Grettel" className="flex items-center gap-[0.75rem]">
        {/* 1196x1124 — proporción real del PNG; w-auto evita que se aplaste al forzarlo a un cuadrado */}
        <Image
          src="/brand/logo.png"
          alt=""
          width={1196}
          height={1124}
          priority
          className="h-[3.25rem] w-auto"
        />
        {/* eslint-disable-next-line @next/next/no-img-element -- SVG del logo oficial, se sirve tal cual sin pasar por el optimizador de next/image */}
        <img src="/brand/wordmark.svg" alt="Grettel" className="h-[3.25rem] w-auto" />
      </Link>
      <nav className="flex items-center gap-[1rem]">
        {/* Único botón que se mantiene visible cuando el header se queda sin espacio. */}
        <PillButton href={site.header.ctaOrder.href} variant="solid">
          {site.header.ctaOrder.label}
        </PillButton>
        <PillButton
          href={site.header.ctaExplore.href}
          variant="outline"
          className="hidden lg:inline-flex"
        >
          {site.header.ctaExplore.label}
        </PillButton>
        <PillButton
          href={site.header.ctaContact.href}
          variant="outline"
          className="hidden lg:inline-flex"
        >
          {site.header.ctaContact.label}
        </PillButton>
      </nav>
    </header>
  );
}
