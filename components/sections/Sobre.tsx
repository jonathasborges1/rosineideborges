import Image from "next/image";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import { especialidades } from "@/lib/data/especialidades";

export default function Sobre() {
  return (
    <section
      id="sobre"
      className="bg-white py-14 md:py-24 lg:py-28 px-4 sm:px-6 md:px-8 scroll-mt-24"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14 lg:gap-20 items-center">
        {/* Imagem */}
        <Reveal variant="fade-right" delay={80}>
          {/* Mobile: avatar circular centralizado + badge */}
          <div className="md:hidden flex flex-col items-center gap-3">
            <div className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-full overflow-hidden border-4 border-sand shadow-card-md">
              <Image
                src="/rosineideborges2.png"
                alt="Rosineide B. Cavalcante — Psicóloga"
                fill
                className="object-cover object-top"
                sizes="192px"
              />
            </div>
            <span className="inline-flex items-center bg-accent text-white rounded-pill px-4 py-1.5 font-sans text-xs font-semibold tracking-widest">
              CRP 20/02777
            </span>
          </div>

          {/* Desktop: imagem quadrada com badge posicionado corretamente */}
          <div className="relative hidden md:block">
            <div className="w-full aspect-square rounded-2xl overflow-hidden border border-sand shadow-card-md">
              <Image
                src="/rosineideborges2.png"
                alt="Rosineide B. Cavalcante — Psicóloga especializada em Gerontologia e Psico-oncologia"
                fill
                className="object-cover object-top"
                sizes="45vw"
              />
            </div>
            {/* Badge posicionado relativo ao wrapper direto (relative) */}
            <div className="absolute -bottom-5 -right-5 bg-accent text-white rounded-xl px-5 py-4 shadow-card-md z-10">
              <p className="font-serif text-2xl font-semibold leading-none">
                CRP
              </p>
              <p className="font-sans text-xs tracking-widest mt-1">20/02777</p>
            </div>
          </div>
        </Reveal>

        {/* Texto */}
        <Reveal className="flex flex-col gap-4 md:gap-5 lg:gap-6" delay={140}>
          <div className="inline-flex items-center gap-3">
            <span className="h-px w-6 bg-accent/40 rounded-full" aria-hidden="true" />
            <span className="font-sans text-xs font-semibold tracking-widest uppercase text-accent">
              Sobre a psicóloga
            </span>
          </div>

          <h2 className="font-serif text-[1.75rem] sm:text-3xl md:text-[2.35rem] lg:text-4xl font-semibold text-ink leading-snug">
            Um cuidado que começa pela escuta genuína
          </h2>

          <p className="font-sans text-sm md:text-base text-muted leading-relaxed">
            Sou Rosineide B. Cavalcante, psicóloga registrada no CRP20/02777 e
            apaixonada pela saúde emocional em todas as fases da vida. Com
            especializações em Gerontologia e Psico-oncologia, ofereço um
            atendimento que une ciência, empatia e humanidade.
          </p>

          <p className="font-sans text-sm md:text-base text-muted leading-relaxed">
            Acredito que cada pessoa carrega uma história única. Meu papel é
            criar um espaço seguro e acolhedor onde você possa se expressar
            livremente, descobrir novos caminhos e transformar sua relação com
            as emoções.
          </p>

          <ul className="flex flex-col gap-3 md:gap-3.5 lg:gap-4 mt-1" role="list">
            {especialidades.map((e, index) => (
              <li
                key={e.titulo}
                className="flex gap-3 items-start"
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                <span
                  className="mt-0.5 w-7 h-7 rounded-lg bg-accent/10 flex items-center justify-center shrink-0"
                  aria-hidden="true"
                >
                  <e.icon size={15} className="text-accent" />
                </span>
                <div>
                  <p className="font-sans text-sm font-semibold text-ink">
                    {e.titulo}
                  </p>
                  <p className="font-sans text-sm text-muted">{e.desc}</p>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-1 w-full sm:w-auto">
            <Button
              as="a"
              href="/obrigado"
            >
              Agendar minha consulta
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
