import { homeTestimonials } from "@/data/clube";
import { TestimonialCard } from "@/components/ui/TestimonialCard";

export function TestimonialsSection() {
  return (
    <section className="bg-paper py-28 text-deep">
      <div className="container-site">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <p className="eyebrow text-mid">Depoimentos</p>
            <h2 className="mt-6 font-display text-4xl leading-tight md:text-5xl">
              O nosso objetivo é colecionar histórias como <em>essas</em>
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-deep/50">
            Estas são algumas das bailarinas que já passaram pela Bailarina
            Preparada.
          </p>
        </div>

        <div className="mt-16 grid gap-px border border-deep/10 bg-deep/10 md:grid-cols-2">
          {homeTestimonials.map((t) => (
            <TestimonialCard key={t.name} {...t} />
          ))}
        </div>
      </div>
    </section>
  );
}
