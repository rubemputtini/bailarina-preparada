const categories = [
  "Força",
  "Flexibilidade",
  "Cardio",
  "Core",
  "Pés",
  "En dehors",
  "PBT",
  "Solo",
  "Mobilidade",
  "Resistência",
];

export function TickerSection() {
  return (
    <div className="overflow-hidden border-y border-white/[0.06] bg-ink py-6">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...Array(2)].map((_, pass) => (
          <span key={pass} className="flex items-center" aria-hidden={pass === 1}>
            {categories.map((cat) => (
              <span key={cat} className="mx-8 inline-flex items-center gap-8">
                <span className="font-display text-xl italic text-white/30">{cat}</span>
                <span className="h-1 w-1 rounded-full bg-accent/40" />
              </span>
            ))}
          </span>
        ))}
      </div>
    </div>
  );
}
