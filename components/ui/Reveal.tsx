"use client";

import { useEffect, useRef, useState } from "react";

type RevealVariant = "fade-up" | "fade-right" | "fade-left";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  variant?: RevealVariant;
}

export default function Reveal({
  children,
  className = "",
  delay = 0,
  variant = "fade-up",
}: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reducedMotion) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.18,
        rootMargin: "0px 0px -8% 0px",
      },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  const variantClasses: Record<RevealVariant, string> = {
    "fade-up": "translate-y-5",
    "fade-right": "-translate-x-5",
    "fade-left": "translate-x-5",
  };

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-[opacity,transform] duration-700 ease-out motion-reduce:transition-none motion-reduce:transform-none ${
        isVisible
          ? "opacity-100 translate-x-0 translate-y-0"
          : `opacity-0 ${variantClasses[variant]}`
      } ${className}`}
    >
      {children}
    </div>
  );
}
