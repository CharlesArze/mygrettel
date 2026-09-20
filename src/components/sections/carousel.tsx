"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { MediaPlaceholder } from "@/components/ui/media-placeholder";
import { site } from "@/content/site";
import "swiper/css";
import "swiper/css/navigation";

export function Carousel() {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  return (
    <section id="menu" className="relative px-[2.5rem] py-section-y">
      <button
        ref={prevRef}
        aria-label="Anterior"
        className="absolute left-[1rem] top-1/2 z-10 hidden h-[3rem] w-[3rem] -translate-y-1/2 items-center justify-center rounded-full border border-brand/30 text-brand md:flex"
      >
        <ChevronLeft className="h-[1.25rem] w-[1.25rem]" />
      </button>
      <button
        ref={nextRef}
        aria-label="Siguiente"
        className="absolute right-[1rem] top-1/2 z-10 hidden h-[3rem] w-[3rem] -translate-y-1/2 items-center justify-center rounded-full border border-brand/30 text-brand md:flex"
      >
        <ChevronRight className="h-[1.25rem] w-[1.25rem]" />
      </button>

      <Swiper
        modules={[Navigation]}
        onBeforeInit={(swiper) => {
          // @ts-expect-error swiper types navigation params as possibly boolean
          swiper.params.navigation.prevEl = prevRef.current;
          // @ts-expect-error swiper types navigation params as possibly boolean
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        spaceBetween={24}
        slidesPerView={1.15}
        breakpoints={{ 768: { slidesPerView: 3 } }}
      >
        {site.carousel.items.map((item, i) => (
          <SwiperSlide key={item.name}>
            <div className={i % 2 === 1 ? "mt-[6rem]" : ""}>
              <MediaPlaceholder ratio={i % 2 === 1 ? "3 / 4.75" : "3 / 3"} label={item.name} />
              <p className="mt-[1rem] font-display text-[1.5rem] text-brand">{item.name}</p>
              <p className="font-body text-[1rem] text-brand/70">{item.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
