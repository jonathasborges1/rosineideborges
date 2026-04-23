"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Button from "@/components/ui/Button";

const links = [
  { label: "Sobre", href: "#sobre" },
  { label: "Servicos", href: "#servicos" },
  { label: "Como Funciona", href: "#como-funciona" },
  { label: "Localizacao", href: "#localizacao" },
];


export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("#hero");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12);
    handleScroll();

    const sections = links
      .map((link) => document.querySelector(link.href))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target instanceof HTMLElement) {
          setActiveLink(`#${visible.target.id}`);
        }
      },
      {
        threshold: [0.35, 0.5, 0.65],
        rootMargin: "-18% 0px -55% 0px",
      },
    );

    window.addEventListener("scroll", handleScroll, { passive: true });
    sections.forEach((section) => observer.observe(section));

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 border-b border-sand/70 sm:backdrop-blur-md transition-all duration-300 motion-reduce:transition-none ${
        scrolled ? "bg-white sm:bg-white/90 shadow-card" : "bg-white sm:bg-white/80 shadow-none"
      }`}
    >
      <nav
        className={`max-w-6xl mx-auto px-4 sm:px-6 md:px-8 flex items-center justify-between gap-3 transition-all duration-300 ${
          scrolled ? "h-[3.25rem] md:h-14" : "h-[3.25rem] md:h-16"
        }`}
      >
        <a
          href="#"
          className="min-w-0 font-serif text-[0.95rem] md:text-lg font-semibold text-ink leading-[1.05] transition-transform duration-300 hover:-translate-y-0.5"
          onClick={() => setOpen(false)}
        >
          <span className="block truncate">Rosineide B. Cavalcante</span>
          <span className="block truncate pt-1 text-[0.56rem] sm:text-[0.62rem] md:text-xs font-sans font-normal text-muted tracking-widest uppercase leading-none">
            Psicologa - CRP20/02777
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-8" role="list">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                aria-current={activeLink === link.href ? "page" : undefined}
                className={`relative font-sans text-sm py-1 transition-colors duration-200 after:absolute after:left-0 after:-bottom-0.5 after:h-px after:bg-accent after:transition-all after:duration-300 ${
                  activeLink === link.href
                    ? "text-accent after:w-full"
                    : "text-muted hover:text-accent after:w-0 hover:after:w-full"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <a
            href="/obrigado"
            className="inline-flex min-h-9 items-center justify-center rounded-pill border border-accent bg-accent px-5 py-2 font-sans text-[0.72rem] font-semibold uppercase tracking-[0.16em] leading-none text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-espresso hover:shadow-md"
          >
            Agendar Consulta
          </a>
        </div>

        <button
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          className="md:hidden text-ink p-2 min-h-9 min-w-9 flex items-center justify-center rounded-full border border-transparent hover:border-sand hover:bg-white/70 transition-colors duration-200"
        >
          {open ? <X size={19} /> : <Menu size={19} />}
        </button>
      </nav>

      <div
        id="mobile-menu"
        role="navigation"
        aria-label="Menu mobile"
        className={`absolute left-0 right-0 top-full md:hidden bg-white border-t border-sand/70 px-5 pb-5 pt-3 flex flex-col gap-3 shadow-card transition-all duration-300 ${
          open
            ? "opacity-100 pointer-events-auto translate-y-0 max-h-[calc(100svh-3.25rem)] overflow-y-auto"
            : "opacity-0 pointer-events-none -translate-y-2 max-h-0 overflow-hidden py-0"
        }`}
      >
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setOpen(false)}
            className={`font-sans text-sm py-2.5 transition-colors duration-200 ${
              activeLink === link.href
                ? "text-accent"
                : "text-muted hover:text-accent"
            }`}
          >
            {link.label}
          </a>
        ))}
        <Button
          as="a"
          href="/obrigado"
          className="mt-2 justify-center"
        >
          Agendar Consulta
        </Button>
      </div>
    </header>
  );
}
