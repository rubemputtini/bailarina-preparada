import { painPoints } from "@/data/clube";

export function PainPointsSection() {
  return (
    <section className="py-28 px-6" style={{ background: "#302539" }}>
      <div className="max-w-4xl mx-auto">
        <p className="text-white/30 text-xs font-bold tracking-[0.3em] uppercase mb-12">
          Você se identifica?
        </p>

        <div className="space-y-0">
          {painPoints.map((point) => (
            <div
              key={point}
              className="group flex items-start gap-6 py-7 border-b border-white/[0.06] hover:border-white/20 transition-colors duration-300 cursor-default"
            >
              <span
                className="w-6 h-6 rounded-full border flex-shrink-0 mt-1 transition-colors duration-300"
                style={{ borderColor: "rgba(184,159,212,0.3)" }}
              />
              <p className="text-white/50 text-xl md:text-2xl font-light leading-snug group-hover:text-white/80 transition-colors duration-300">
                {point}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-12 border-t border-white/10">
          <p className="text-2xl md:text-3xl font-bold text-white leading-snug max-w-2xl">
            Se você marcou qualquer um desses — o Clube foi criado exatamente para você.
          </p>
        </div>
      </div>
    </section>
  );
}
