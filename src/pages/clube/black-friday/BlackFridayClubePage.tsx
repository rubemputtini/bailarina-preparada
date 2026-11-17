import { useRef } from "react";
import { bfFaqs } from "@/data/blackFriday";
import { faqs } from "@/data/clube";
import { VideoSection } from "../sections/VideoSection";
import { PainPointsSection } from "../sections/PainPointsSection";
import { WhySection } from "../sections/WhySection";
import { InsideSection } from "../sections/InsideSection";
import { AppSection } from "../sections/AppSection";
import { TestimonialsSection } from "../sections/TestimonialsSection";
import { FaqSection } from "../sections/FaqSection";
import { BfHeroSection } from "./BfHeroSection";
import { BfStatsSection } from "./BfStatsSection";
import { BfOfferSection } from "./BfOfferSection";
import { BfClosingSection, BfFooter } from "./BfClosingSection";
import { BfStickyBar } from "./BfStickyBar";

// Versão de Black Friday do /clube. As seções atuais continuam, só com os fundos
// roxos trocados por preto (classe .bf-theme no index.css).
export function BlackFridayClubePage() {
  const heroCtaRef = useRef<HTMLAnchorElement>(null);

  return (
    <div className="bf-theme min-h-screen bg-bf text-white">
      <main>
        <BfHeroSection ctaRef={heroCtaRef} />
        <BfStatsSection />
        <VideoSection />
        <PainPointsSection />
        <WhySection />
        <InsideSection />
        <AppSection />
        <TestimonialsSection />
        <BfOfferSection />
        <FaqSection items={[...bfFaqs, ...faqs]} />
        <BfClosingSection />
      </main>
      <BfFooter />
      <BfStickyBar heroCtaRef={heroCtaRef} />
    </div>
  );
}
