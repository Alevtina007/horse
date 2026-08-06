import type { Metadata } from "next";
import { Hero } from "@/components/home/hero";
import { Highlights } from "@/components/home/highlights";
import { FeaturedHorses } from "@/components/home/featured-horses";
import { Process } from "@/components/home/process";
import { TestimonialsPreview } from "@/components/home/testimonials-preview";
import { CtaBanner } from "@/components/cta-banner";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: `${siteConfig.name} — ${siteConfig.tagline}`,
  description: siteConfig.description,
};

export default function Home() {
  return (
    <>
      <Hero />
      <Highlights />
      <FeaturedHorses />
      <Process />
      <TestimonialsPreview />
      <CtaBanner />
    </>
  );
}

