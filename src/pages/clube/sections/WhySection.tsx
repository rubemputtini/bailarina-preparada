const reasons = [
  {
    bold: "Treino específico para ballet.",
    rest: " Nenhum exercício genérico de academia. Cada movimento foi pensado para o que você executa na aula e no palco.",
  },
  {
    bold: "Conteúdo novo todo mês.",
    rest: " Seu corpo não se adapta ao mesmo estímulo. Por isso o Clube se renova — e você continua evoluindo.",
  },
  {
    bold: "Método com resultado comprovado.",
    rest: " Mais de 431 bailarinas já sentiram a diferença — na força, na mobilidade e na segurança para dançar.",
  },
];

export function WhySection() {
  return (
    <section className="relative overflow-hidden py-28 px-6" style={{ background: "#403b4d" }}>
      <div
        className="absolute right-0 top-0 h-full w-1/2 pointer-events-none opacity-5"
        style={{ backgroundImage: "radial-gradient(circle at 80% 50%, #b89fd4 0%, transparent 60%)" }}
      />
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <div>
            <p className="text-brand-accent text-xs font-bold tracking-[0.3em] uppercase mb-6">
              Por que funciona
            </p>
            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
              A dança exige um corpo preparado. O Clube entrega isso.
            </h2>
          </div>
          <div className="space-y-8">
            {reasons.map((item) => (
              <div key={item.bold} className="flex gap-5 items-start">
                <span
                  className="w-5 h-5 rounded-full flex-shrink-0 mt-1 flex items-center justify-center"
                  style={{ background: "rgba(184,159,212,0.15)", border: "1px solid rgba(184,159,212,0.3)" }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-accent block" />
                </span>
                <p className="text-white/65 text-lg leading-relaxed">
                  <span className="text-white font-semibold">{item.bold}</span>{item.rest}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
