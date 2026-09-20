"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // duration/easing por defecto de Lenis (1.2s, easeOutExpo largo) se sentía
    // "flotante"; recortado para que el scroll responda de inmediato.
    const lenis = new Lenis({
      autoRaf: false,
      duration: 0.7,
      wheelMultiplier: 1.2,
      easing: (t: number) => 1 - Math.pow(1 - t, 3), // easeOutCubic: frena rápido, sin cola larga
    });
    document.documentElement.classList.add("lenis", "lenis-smooth");

    lenis.on("scroll", ScrollTrigger.update);
    const tick = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(tick);
      lenis.destroy();
      document.documentElement.classList.remove("lenis", "lenis-smooth");
    };
  }, []);

  return null;
}
