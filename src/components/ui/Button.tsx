import { type ComponentPropsWithoutRef } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

type Variant = "primary" | "ink" | "outline" | "outline-dark";

// Renderiza <Link> com `to` (rotas internas), <a> com `href` (links externos)
// e <button> sem nenhum dos dois (ex.: submit de formulário).
type ButtonProps = { variant?: Variant } & (
  | ({ to: string; href?: never } & Omit<ComponentPropsWithoutRef<typeof Link>, "to">)
  | ({ href: string; to?: never } & ComponentPropsWithoutRef<"a">)
  | ({ to?: never; href?: never } & ComponentPropsWithoutRef<"button">)
);

export function Button({ variant = "primary", className, ...props }: ButtonProps) {
  const classes = cn(
    "group inline-flex items-center justify-center gap-3 whitespace-nowrap rounded-full px-8 py-4 text-xs font-semibold uppercase tracking-[0.2em] transition-all duration-300",
    variant === "primary" && "bg-accent text-ink hover:bg-accent-soft",
    variant === "ink" && "bg-deep text-white hover:bg-ink",
    variant === "outline" && "border border-white/20 text-white hover:border-accent hover:text-accent",
    variant === "outline-dark" && "border border-deep/25 text-deep hover:border-deep hover:bg-deep hover:text-white",
    className
  );

  if (props.to !== undefined) {
    return <Link {...props} className={classes} />;
  }
  if (props.href !== undefined) {
    return <a {...props} className={classes} />;
  }
  return <button type="button" {...props} className={classes} />;
}
