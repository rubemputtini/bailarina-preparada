const categories = ["FORÇA", "FLEXIBILIDADE", "CARDIO", "CORE", "PÉS", "ENDEHORS", "PBT", "SOLO", "MOBILIDADE", "RESISTÊNCIA"];

export function TickerSection() {
  return (
    <div className="overflow-hidden py-5 border-y border-white/[0.06]" style={{ background: "#302539" }}>
      <div className="flex animate-marquee whitespace-nowrap">
        {[...Array(2)].map((_, pass) => (
          <span key={pass} className="flex items-center">
            {categories.map((cat) => (
              <span key={cat} className="inline-flex items-center gap-4 mx-6">
                <span className="text-white/20 text-xs font-black tracking-[0.3em]">{cat}</span>
                <span className="w-1 h-1 rounded-full bg-brand-accent/30" />
              </span>
            ))}
          </span>
        ))}
      </div>
    </div>
  );
}
