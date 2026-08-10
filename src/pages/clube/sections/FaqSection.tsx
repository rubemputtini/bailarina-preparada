import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import { faqs } from "@/data/clube";

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-deep/10">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between gap-6 py-7 text-left"
      >
        <span className={`font-display text-xl transition-colors ${open ? "text-deep" : "text-deep/70"}`}>
          {q}
        </span>
        <span className="shrink-0 text-accent">
          {open ? <Minus size={18} /> : <Plus size={18} />}
        </span>
      </button>
      {open && (
        <p className="max-w-2xl pb-7 text-sm leading-relaxed text-deep/60">{a}</p>
      )}
    </div>
  );
}

export function FaqSection() {
  return (
    <section className="bg-paper py-28 text-deep">
      <div className="container-site max-w-3xl">
        <p className="eyebrow text-mid">Dúvidas frequentes</p>
        <h2 className="mt-6 font-display text-4xl leading-tight md:text-5xl">
          O que você precisa <em>saber</em>
        </h2>
        <div className="mt-12 border-t border-deep/10">
          {faqs.map((faq) => (
            <FaqItem key={faq.q} q={faq.q} a={faq.a} />
          ))}
        </div>
      </div>
    </section>
  );
}
