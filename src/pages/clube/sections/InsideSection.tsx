import { insideItems } from "@/data/clube";

export function InsideSection() {
  return (
    <section className="py-28 px-6" style={{ background: "#302539" }}>
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-6 mb-20">
          <span className="text-brand-accent text-xs font-bold tracking-[0.3em] uppercase whitespace-nowrap">
            Dentro do Clube
          </span>
          <div className="flex-1 h-px" style={{ background: "rgba(184,159,212,0.15)" }} />
        </div>

        <div>
          {insideItems.map((item) => (
            <div
              key={item.title}
              className="group grid md:grid-cols-[180px_1fr_1fr] gap-6 md:gap-12 items-start py-10 border-t border-white/[0.06] hover:border-brand-accent/20 transition-all duration-300 last:border-b"
            >
              <span
                className="text-xs font-bold tracking-[0.2em] uppercase pt-1"
                style={{ color: "rgba(184,159,212,0.5)" }}
              >
                {item.label}
              </span>
              <p className="text-white font-bold text-xl md:text-2xl leading-snug group-hover:text-brand-accent transition-colors duration-300">
                {item.title}
              </p>
              <p className="text-white/40 text-base leading-relaxed">{item.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
