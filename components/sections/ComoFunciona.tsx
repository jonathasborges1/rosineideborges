import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import { WA_AGENDAR } from "@/lib/constants";
import { passos } from "@/lib/data/passos";

export default function ComoFunciona() {
  return (
    <section
      id="como-funciona"
      className="bg-espresso py-14 md:py-24 lg:py-28 px-4 sm:px-6 md:px-8 scroll-mt-24"
    >
      <div className="max-w-6xl mx-auto">
        <Reveal className="text-center mb-9 md:mb-12 lg:mb-14 max-w-xl mx-auto" delay={40}>
          <div className="inline-flex items-center gap-3 mb-3">
            <span className="h-px w-6 bg-sand/40 rounded-full" aria-hidden="true" />
            <span className="font-sans text-xs font-semibold tracking-widest uppercase text-sand">
              Como funciona
            </span>
            <span className="h-px w-6 bg-sand/40 rounded-full" aria-hidden="true" />
          </div>
          <h2 className="font-serif text-[1.75rem] sm:text-3xl md:text-[2.35rem] lg:text-4xl font-semibold text-cream mb-3 md:mb-4 leading-snug">
            Começar é mais simples do que parece
          </h2>
          <p className="font-sans text-cream/70 leading-relaxed">
            Em apenas 3 passos você já estará cuidando da sua saúde emocional.
          </p>
        </Reveal>

        <ol
          className="grid grid-cols-1 md:grid-cols-3 gap-0 md:gap-5 lg:gap-6 mb-10 md:mb-12"
          role="list"
        >
          {passos.map((p, i) => (
            <li
              key={p.numero}
              className="group relative flex md:flex-col gap-4 md:gap-4 py-5 md:py-0 border-b border-sand/20 md:border-none last:border-none"
            >
              {/* Conector horizontal no desktop */}
              {i < passos.length - 1 && (
                <div className="hidden md:block absolute top-6 left-full w-full h-px bg-sand/30 -translate-x-6 z-0" />
              )}

              {/* Número + ícone */}
              <Reveal
                variant="fade-up"
                delay={i * 120}
                className="shrink-0 w-12 md:w-auto flex md:flex-col items-center md:items-start gap-3 md:gap-2"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-accent/20 flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 motion-reduce:transition-none">
                  <p.icon size={20} className="text-accent" />
                </div>
                <span className="font-serif text-2xl md:text-4xl font-semibold text-sand/40 leading-none hidden md:block">
                  {p.numero}
                </span>
              </Reveal>

              {/* Conteúdo */}
              <Reveal
                variant="fade-up"
                delay={i * 120 + 60}
                className="flex flex-col gap-2"
              >
                <h3 className="font-serif text-lg md:text-xl font-semibold text-cream">
                  {p.titulo}
                </h3>
                <p className="font-sans text-sm text-cream/70 leading-relaxed">
                  {p.desc}
                </p>
              </Reveal>
            </li>
          ))}
        </ol>

        <div className="flex justify-center">
          <Button
            as="a"
            href={WA_AGENDAR}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-accent hover:bg-sand hover:text-ink border-accent"
          >
            Quero começar agora
          </Button>
        </div>
      </div>
    </section>
  );
}
