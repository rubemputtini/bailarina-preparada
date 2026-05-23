import { Star } from "lucide-react";
import { testimonials } from "@/data/clube";

export function TestimonialsSection() {
  return (
    <section className="py-24 px-6 overflow-hidden" style={{ background: "#403b4d" }}>
      <div className="max-w-6xl mx-auto">
        <p className="text-white/25 text-xs font-bold tracking-[0.3em] uppercase text-center mb-16">
          Histórias reais
        </p>

        <div className="grid md:grid-cols-2 gap-1">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className="p-10 flex flex-col justify-between min-h-[260px]"
              style={{
                background: i % 2 === 0 ? "rgba(48,37,57,0.6)" : "transparent",
                borderRight: i % 2 === 0 ? "1px solid rgba(184,159,212,0.08)" : "none",
                borderBottom: i < 2 ? "1px solid rgba(184,159,212,0.08)" : "none",
              }}
            >
              <div className="flex gap-0.5 mb-6">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} size={12} className="text-brand-accent fill-brand-accent" />
                ))}
              </div>
              <p className="text-white/70 text-lg leading-relaxed italic flex-1">
                "{t.quote}"
              </p>
              <p className="text-brand-accent text-sm font-semibold mt-6">{t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
