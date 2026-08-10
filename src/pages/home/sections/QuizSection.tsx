import { useState } from "react";
import { ArrowRight, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { quizQuestions } from "@/data/quiz";
import { services } from "@/data/services";
import { cn } from "@/lib/utils";

function computeResult(answers: number[]) {
  const scores: Record<string, number> = {};
  answers.forEach((optionIndex, questionIndex) => {
    const { points } = quizQuestions[questionIndex].options[optionIndex];
    for (const [slug, value] of Object.entries(points)) {
      scores[slug] = (scores[slug] ?? 0) + value;
    }
  });
  // Empate: vence o serviço que aparece primeiro em services.ts
  return services.reduce((winner, service) =>
    (scores[service.slug] ?? 0) > (scores[winner.slug] ?? 0) ? service : winner
  );
}

export function QuizSection() {
  const [answers, setAnswers] = useState<number[]>([]);

  // O passo é derivado das respostas: cliques duplicados não desalinham os estados
  const step = answers.length;
  const finished = step >= quizQuestions.length;
  const result = finished ? computeResult(answers) : null;

  function answer(optionIndex: number) {
    setAnswers((prev) => (prev.length < quizQuestions.length ? [...prev, optionIndex] : prev));
  }

  function restart() {
    setAnswers([]);
  }

  return (
    <section id="quiz" className="bg-ink py-28">
      <div className="container-site max-w-3xl">
        <div className="text-center">
          <p className="eyebrow text-accent">Qual serviço é para você?</p>
          <h2 className="mt-6 font-display text-4xl leading-tight text-white md:text-5xl">
            Descubra o seu próximo <em className="text-accent">passo</em>
          </h2>
          <p className="mx-auto mt-6 max-w-md leading-relaxed text-white/50">
            Responda algumas perguntas rápidas e receba a indicação do serviço
            ideal para o seu momento na dança.
          </p>
        </div>

        <div className="mt-14 border border-white/[0.08] p-8 md:p-12">
          {!finished ? (
            <>
              <div className="flex items-center justify-between">
                <p className="eyebrow text-white/40">
                  Pergunta {step + 1} de {quizQuestions.length}
                </p>
                <div className="flex gap-1.5">
                  {quizQuestions.map((_, i) => (
                    <span
                      key={i}
                      className={cn("h-1 w-6", i <= step ? "bg-accent" : "bg-white/15")}
                    />
                  ))}
                </div>
              </div>

              <p className="mt-8 font-display text-2xl text-white md:text-3xl">
                {quizQuestions[step].question}
              </p>

              <div className="mt-8 flex flex-col gap-3">
                {quizQuestions[step].options.map((option, i) => (
                  <button
                    key={option.label}
                    onClick={() => answer(i)}
                    className="group flex items-center justify-between gap-4 border border-white/15 px-6 py-4 text-left text-sm text-white/70 transition-colors duration-200 hover:border-accent hover:text-white"
                  >
                    {option.label}
                    <ArrowRight
                      size={15}
                      className="shrink-0 text-white/25 transition-all group-hover:translate-x-1 group-hover:text-accent"
                    />
                  </button>
                ))}
              </div>
            </>
          ) : (
            <div className="text-center">
              <p className="eyebrow text-white/40">Nossa indicação para você</p>
              <p className="mt-6 font-display text-4xl text-white">{result!.title}</p>
              <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-white/50">
                {result!.description}
              </p>
              <div className="mt-10 flex flex-col items-center gap-5">
                <Button to={result!.slug}>
                  Conhecer {result!.label}
                  <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
                </Button>
                <button
                  onClick={restart}
                  className="inline-flex items-center gap-2 text-sm text-white/35 transition-colors hover:text-white/70"
                >
                  <RotateCcw size={13} />
                  Refazer o quiz
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
