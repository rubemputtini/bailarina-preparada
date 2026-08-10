import { PageHead } from "@/components/PageHead";
import { organizationSchema, personSchema } from "@/constants/structuredData";
import { HeroSection } from "./sections/HeroSection";
import { AboutSection } from "./sections/AboutSection";
import { ServicesSection } from "./sections/ServicesSection";
import { TestimonialsSection } from "./sections/TestimonialsSection";
import { QuizSection } from "./sections/QuizSection";
import { ContactSection } from "./sections/ContactSection";

export default function HomePage() {
  return (
    <>
      <PageHead
        title="Bailarina Preparada — Preparação Física para a Dança"
        description="Referência no Brasil em preparação física para bailarinas. Musculação aplicada à dança, prevenção de lesões e performance, com Isabella Souza."
        path="/"
        jsonLd={[organizationSchema, personSchema]}
      />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <TestimonialsSection />
      <QuizSection />
      <ContactSection />
    </>
  );
}
