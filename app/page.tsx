import type { Metadata } from "next";
import { Hero } from "@/components/liquid/hero";
import { CheckPiece } from "@/components/liquid/check-piece";
import { LiquidScore } from "@/components/liquid/liquid-score";
import { RealCost } from "@/components/liquid/real-cost";
import { Services } from "@/components/liquid/services";
import { BrandIndex } from "@/components/liquid/brand-index";
import { Calculator } from "@/components/liquid/calculator";
import { HowItWorks } from "@/components/liquid/how-it-works";
import { Philosophy } from "@/components/liquid/philosophy";

export const metadata: Metadata = {
  title: "LIQUID — Fashion value intelligence",
  description: "Buy what holds value. LIQUID анализирует цену, спрос и потенциал перепродажи fashion- и luxury-вещей до того, как вы их купите.",
};

export default function Home() {
  return (
    <>
      <Hero />
      <CheckPiece />
      <LiquidScore />
      <RealCost />
      <Services />
      <BrandIndex />
      <Calculator />
      <HowItWorks />
      <Philosophy />
    </>
  );
}

