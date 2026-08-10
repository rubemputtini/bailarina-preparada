import { Avatar } from "@/components/ui/Avatar";
import { cn } from "@/lib/utils";

interface TestimonialCardProps {
  quote: string;
  name: string;
  photo?: string;
  /** Descrição sob o nome (ex.: "Aluna do Clube") */
  role: string;
  /** true = versão para fundos escuros */
  dark?: boolean;
}

export function TestimonialCard({ quote, name, photo, role, dark = false }: TestimonialCardProps) {
  return (
    <figure className={cn("flex flex-col p-10 md:p-12", dark ? "bg-deep" : "bg-paper")}>
      <span aria-hidden className="font-display text-6xl leading-none text-accent">
        “
      </span>
      <blockquote
        className={cn(
          "mt-2 flex-1 font-display text-xl leading-relaxed",
          dark ? "text-white/80" : "text-deep/85"
        )}
      >
        {quote}
      </blockquote>
      <figcaption className="mt-8 flex items-center gap-4">
        <Avatar name={name} photo={photo} />
        <div>
          <p className={cn("text-sm font-semibold", dark && "text-white")}>{name}</p>
          <p
            className={cn(
              "mt-1 text-xs uppercase tracking-[0.2em]",
              dark ? "text-white/35" : "text-deep/40"
            )}
          >
            {role}
          </p>
        </div>
      </figcaption>
    </figure>
  );
}
