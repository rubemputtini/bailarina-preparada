import { PageHead } from "@/components/PageHead";
import { HeroSection } from "./sections/HeroSection";
import { ServicesSection } from "./sections/ServicesSection";
import { AboutSection } from "./sections/AboutSection";
import { TestimonialsSection } from "./sections/TestimonialsSection";
import { ContactSection } from "./sections/ContactSection";

export default function HomePage() {
  return (
    <>
      <PageHead
        title="Bailarina Preparada — Preparação Física para a Dança"
        description="A maior plataforma online do Brasil de preparação física para bailarinas e dançarinas. Treinos, consultorias e formações especializadas com Isabella Souza."
        path="/"
      />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <TestimonialsSection />
      <ContactSection />
    </>
  );
}
