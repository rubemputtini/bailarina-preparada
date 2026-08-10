import { type ReactNode } from "react";
import { Link } from "react-router-dom";

interface LegalPageProps {
  title: string;
  updated: string;
  children: ReactNode;
}

export function LegalPage({ title, updated, children }: LegalPageProps) {
  return (
    <main>
      <section className="bg-deep pt-40 pb-16">
        <div className="container-site max-w-3xl">
          <nav className="flex items-center gap-2 text-xs text-white/35">
            <Link to="/" className="transition-colors hover:text-accent">
              Início
            </Link>
            <span>/</span>
            <span className="text-white/60">{title}</span>
          </nav>
          <h1 className="mt-10 font-display text-4xl leading-tight text-white md:text-5xl">
            {title}
          </h1>
          <p className="mt-4 text-sm text-white/40">Última atualização: {updated}</p>
        </div>
      </section>

      <section className="bg-paper py-20 text-deep">
        <div className="container-site max-w-3xl">
          <div className="space-y-10 [&_h2]:font-display [&_h2]:text-2xl [&_p]:mt-3 [&_p]:text-[15px] [&_p]:leading-relaxed [&_p]:text-deep/70 [&_ul]:mt-3 [&_ul]:space-y-2 [&_ul]:pl-5 [&_li]:list-disc [&_li]:text-[15px] [&_li]:leading-relaxed [&_li]:text-deep/70">
            {children}
          </div>
        </div>
      </section>
    </main>
  );
}
