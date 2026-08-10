import { testimonials } from "@/data/clube";
import { TestimonialCard } from "@/components/ui/TestimonialCard";

export function TestimonialsSection() {
  return (
    <section className="bg-deep py-28">
      <div className="container-site">
        <p className="eyebrow text-center text-white/30">Histórias reais de assinantes</p>

        <div className="mt-14 grid gap-px border border-white/[0.08] bg-white/[0.08] md:grid-cols-2">
          {testimonials.map((t) => (
            <TestimonialCard key={t.name} {...t} role="Aluna do Clube" dark />
          ))}
        </div>
      </div>
    </section>
  );
}
