import { PageHead } from "@/components/PageHead";
import { HeroSection } from "./sections/HeroSection";
import { TickerSection } from "./sections/TickerSection";
import { VideoSection } from "./sections/VideoSection";
import { PainPointsSection } from "./sections/PainPointsSection";
import { WhySection } from "./sections/WhySection";
import { InsideSection } from "./sections/InsideSection";
import { TestimonialsSection } from "./sections/TestimonialsSection";
import { PricingSection } from "./sections/PricingSection";
import { FaqSection } from "./sections/FaqSection";
import { ClosingSection } from "./sections/ClosingSection";

export default function ClubePage() {
  return (
    <>
      <PageHead
        title="Clube da Bailarina Preparada — Treino Mensal para Bailarinas"
        description="Treinos de força, flexibilidade e cardio específicos para ballet, aulas ao vivo de PBT e Solo, e plano personalizado. Mais de 431 bailarinas já transformaram sua performance."
        path="/clube"
      />
      <main>
        <HeroSection />
        <TickerSection />
        <VideoSection />
        <PainPointsSection />
        <WhySection />
        <InsideSection />
        <TestimonialsSection />
        <PricingSection />
        <FaqSection />
        <ClosingSection />
      </main>
    </>
  );
}
