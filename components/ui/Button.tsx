import { ButtonHTMLAttributes } from "react";

type Variant = "primary" | "outline" | "ghost";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  as?: "button" | "a";
  href?: string;
  target?: string;
  rel?: string;
}

const styles: Record<Variant, string> = {
  primary:
    "btn-shimmer bg-accent text-white hover:bg-espresso border border-accent shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0",
  outline:
    "bg-transparent text-accent border border-accent hover:bg-accent hover:text-white hover:-translate-y-0.5 active:translate-y-0",
  ghost:
    "bg-transparent text-muted border border-sand hover:border-accent hover:text-accent hover:bg-white/60 hover:-translate-y-0.5 active:translate-y-0",
};

export default function Button({
  variant = "primary",
  as: Tag = "button",
  href,
  target,
  rel,
  children,
  className = "",
  ...props
}: ButtonProps) {
  const base =
    "inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-pill px-6 md:px-8 py-3 min-h-[44px] md:min-h-[46px] font-sans text-xs md:text-sm font-semibold tracking-widest uppercase leading-tight text-center whitespace-normal transition-all duration-300 cursor-pointer select-none motion-reduce:transition-none";

  if (Tag === "a") {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        className={`${base} ${styles[variant]} ${className}`}
      >
        {children}
      </a>
    );
  }

  return (
    <button className={`${base} ${styles[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}
