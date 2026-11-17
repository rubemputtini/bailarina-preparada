import { Suspense, lazy } from "react";
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
import { useBlackFridayFromLayout } from "@/hooks/useBlackFriday";

// Carregada só quando a campanha está ativa — fora dela, ninguém baixa esse código.
const BlackFridayClubePage = lazy(() =>
  import("./black-friday/BlackFridayClubePage").then((m) => ({ default: m.BlackFridayClubePage }))
);

export default function ClubePage() {
  // No dia 19/11 o /clube vira a página de Black Friday e volta sozinho ao normal depois.
  const blackFriday = useBlackFridayFromLayout();

  return (
    <>
      <PageHead
        title={
          blackFriday
            ? "Black Friday do Clube Bailarina Preparada — R$ 200 OFF no Plano Anual"
            : "Clube Bailarina Preparada — Assinatura com Aulas ao Vivo"
        }
        description="Treinos de força, flexibilidade e cardio específicos para ballet, aulas ao vivo de PBT e Solo e rotina personalizada. Mais de 500 bailarinas já fazem parte."
        path="/clube"
        ogImage={`${BASE_URL}${cardClube}`}
        jsonLd={serviceSchema(
          "Clube Bailarina Preparada",
          "Treinos de força, flexibilidade e cardio específicos para ballet, aulas ao vivo de PBT e Solo e rotina personalizada.",
          "/clube"
        )}
      />
      {blackFriday ? (
        <Suspense fallback={<div className="min-h-screen bg-bf" />}>
          <BlackFridayClubePage />
        </Suspense>
      ) : (
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
      )}
    </>
  );
}
