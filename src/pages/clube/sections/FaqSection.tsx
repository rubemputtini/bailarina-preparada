import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { faqs } from "@/data/clube";

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="border-b border-white/[0.07] cursor-pointer group"
      onClick={() => setOpen(!open)}
    >
      <div className="flex items-center justify-between gap-6 py-7">
        <p className={`text-base md:text-lg font-medium transition-colors duration-200 ${open ? "text-white" : "text-white/60 group-hover:text-white/80"}`}>
          {q}
        </p>
        <span className="flex-shrink-0 text-brand-accent">
          {open ? <Minus size={18} /> : <Plus size={18} />}
        </span>
      </div>
      {open && (
        <p className="text-white/45 text-base leading-relaxed pb-7 max-w-2xl">
          {a}
        </p>
      )}
    </div>
  );
}

export function FaqSection() {
  return (
    <section className="py-24 px-6" style={{ background: "#302539" }}>
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center gap-6 mb-14">
          <span className="text-brand-accent text-xs font-bold tracking-[0.3em] uppercase whitespace-nowrap">
            Dúvidas frequentes
          </span>
          <div className="flex-1 h-px" style={{ background: "rgba(184,159,212,0.15)" }} />
        </div>
        {faqs.map((faq) => (
          <FaqItem key={faq.q} q={faq.q} a={faq.a} />
        ))}
      </div>
    </section>
  );
}
