import { Star } from "lucide-react";

const testimonials = [
  {
    initials: "AM",
    name: "Ana Martins",
    role: "Ballet clássico · São Paulo",
    text: "Depois de entrar no Clube, minha resistência nas aulas de ballet mudou completamente. Os treinos são pensados para quem dança de verdade. Nunca achei que musculação pudesse fazer tanta diferença na minha performance.",
  },
  {
    initials: "LC",
    name: "Larissa Costa",
    role: "Dança contemporânea · Rio de Janeiro",
    text: "A Isabella consegue unir ciência e dança de um jeito que nenhum outro profissional que eu conheci conseguiu. Me sinto mais segura, mais forte e com muito menos lesões.",
  },
  {
    initials: "FO",
    name: "Fernanda Oliveira",
    role: "Ballet · Curitiba",
    text: "Sempre tive medo de malhar com peso por achar que ia ficar 'grande demais'. O Clube me mostrou que é exatamente o contrário. Hoje danço melhor, com mais controle e muito mais energia.",
  },
  {
    initials: "JS",
    name: "Juliana Santos",
    role: "Jazz · Belo Horizonte",
    text: "O conteúdo novo todo mês me mantém motivada. São treinos que eu consigo encaixar na minha rotina de ensaios sem sentir que estou me destruindo. Mudou minha relação com o treino.",
  },
  {
    initials: "BR",
    name: "Beatriz Rocha",
    role: "Balé contemporâneo · Florianópolis",
    text: "Fiz a consultoria personalizada e foi um divisor de águas. Finalmente tenho um plano que respeita minha agenda de bailarina. A Isabella entende as nossas limitações e potencialidades como ninguém.",
  },
  {
    initials: "CP",
    name: "Carolina Pires",
    role: "Dança do ventre · Brasília",
    text: "Indico para todas as minhas alunas. É o único programa que vejo com credibilidade científica voltado para dançarinas. A comunidade também é incrível, me sinto acolhida.",
  },
];

function Stars() {
  return (
    <div className="flex gap-0.5 mb-4">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} size={14} className="text-brand-accent fill-brand-accent" />
      ))}
    </div>
  );
}

export function TestimonialsSection() {
  return (
    <section className="py-24 px-6" style={{ background: "#403b4d" }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-brand-accent text-sm font-semibold tracking-[0.2em] uppercase">
            Quem já transformou
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mt-3 mb-4">
            O que as bailarinas dizem
          </h2>
          <p className="text-white/50 max-w-xl mx-auto text-base">
            Mais de 500 bailarinas e dançarinas já transformaram sua performance com a Bailarina Preparada.
          </p>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="break-inside-avoid rounded-2xl p-7 flex flex-col gap-4"
              style={{ background: "#302539", border: "1px solid rgba(184,159,212,0.1)" }}
            >
              <Stars />
              <p className="text-white/70 text-sm leading-relaxed">"{t.text}"</p>
              <div className="flex items-center gap-3 mt-2">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold text-brand-deep flex-shrink-0"
                  style={{ background: "#b89fd4" }}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="text-white text-sm font-semibold">{t.name}</p>
                  <p className="text-white/40 text-xs">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
