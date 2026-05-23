import { type ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends ComponentPropsWithoutRef<"a"> {
  variant?: "primary" | "outline";
}

export function Button({ variant = "primary", className, children, ...props }: ButtonProps) {
  return (
    <a
      {...props}
      className={cn(
        "inline-flex items-center gap-3 font-bold transition-all duration-200 group",
        variant === "primary" && "bg-brand-accent text-brand-deep hover:bg-white",
        variant === "outline" && "border border-white/[0.12] text-white/50 hover:text-white hover:border-white/30",
        className
      )}
    >
      {children}
    </a>
  );
}
