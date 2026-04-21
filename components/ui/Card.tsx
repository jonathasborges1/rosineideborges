interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export default function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`bg-white border border-sand rounded-lg p-5 md:p-6 lg:p-8 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-md motion-reduce:transition-none ${className}`}
    >
      {children}
    </div>
  );
}
