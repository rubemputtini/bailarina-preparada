import { PageHead } from "@/components/PageHead";
import { serviceSchema } from "@/constants/structuredData";
import { BASE_URL } from "@/constants/urls";
import cardClube from "@/assets/card-clube.jpg";
import { HeroSection } from "./sections/HeroSection";
import { TickerSection } from "./sections/TickerSection";
import { VideoSection } from "./sections/VideoSection";
import { PainPointsSection } from "./sections/PainPointsSection";
import { WhySection } from "./sections/WhySection";
import { InsideSection } from "./sections/InsideSection";
import { AppSection } from "./sections/AppSection";
import { TestimonialsSection } from "./sections/TestimonialsSection";
import { PricingSection } from "./sections/PricingSection";
import { FaqSection } from "./sections/FaqSection";
import { ClosingSection } from "./sections/ClosingSection";

export default function ClubePage() {
  return (
    <>
      <PageHead
        title="Clube Bailarina Preparada — Assinatura com Aulas ao Vivo"
        description="Treinos de força, flexibilidade e cardio específicos para ballet, aulas ao vivo de PBT e Solo e rotina personalizada. Mais de 500 bailarinas já fazem parte."
        path="/clube"
        ogImage={`${BASE_URL}${cardClube}`}
        jsonLd={serviceSchema(
          "Clube Bailarina Preparada",
          "Treinos de força, flexibilidade e cardio específicos para ballet, aulas ao vivo de PBT e Solo e rotina personalizada.",
          "/clube"
        )}
      />
      <main>
        <HeroSection />
        <TickerSection />
        <VideoSection />
        <PainPointsSection />
        <WhySection />
        <InsideSection />
        <AppSection />
        <TestimonialsSection />
        <PricingSection />
        <FaqSection />
        <ClosingSection />
      </main>
    </>
  );
}
