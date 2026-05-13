interface CardBaseProps {
  children: React.ReactNode;
  className?: string;
}

type CardProps =
  | (CardBaseProps & { as?: "div"; href?: never })
  | (CardBaseProps & { as: "a"; href: string });

const base =
  "bg-white border border-sand rounded-lg p-5 md:p-6 lg:p-8 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-md motion-reduce:transition-none";

export default function Card({ children, className = "", ...rest }: CardProps) {
  if (rest.as === "a") {
    return (
      <a href={rest.href} className={`block ${base} ${className}`}>
        {children}
      </a>
    );
  }
  return (
    <div className={`${base} ${className}`}>
      {children}
    </div>
  );
}
