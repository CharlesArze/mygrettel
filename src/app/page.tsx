import { SiteHeader } from "@/components/sections/site-header";
import { Hero } from "@/components/sections/hero";
import { Intro } from "@/components/sections/intro";
import { Carousel } from "@/components/sections/carousel";
import { Story } from "@/components/sections/story";
import { Delivery } from "@/components/sections/delivery";
import { IllustrationBand } from "@/components/sections/illustration-band";
import { Sauces } from "@/components/sections/sauces";
import { Instagram } from "@/components/sections/instagram";
import { SiteFooter } from "@/components/sections/site-footer";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Intro />
        <Carousel />
        <Story />
        <Delivery />
        <IllustrationBand />
        <Sauces />
        <Instagram />
      </main>
      <SiteFooter />
    </>
  );
}
