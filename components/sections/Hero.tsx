import Image from "next/image";
import { HeartHandshake, ShieldCheck, Globe, ChevronDown } from "lucide-react";
import Button from "@/components/ui/Button";
import Counter from "@/components/ui/Counter";
import { WA_AGENDAR } from "@/lib/constants";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-cream min-h-[calc(100svh-3.25rem)] md:min-h-screen flex items-start md:items-center pt-[3.25rem] md:pt-16"
    >
      <div className="absolute inset-x-0 top-0 h-24 md:h-40 bg-gradient-to-b from-white/55 to-transparent pointer-events-none" />
      <div className="animate-drift  hidden md:block absolute -top-16 right-[-4rem] h-52 w-52 rounded-full bg-sand/20 blur-3xl pointer-events-none" />
      <div className="animate-drift-2 hidden md:block absolute bottom-0 left-[-3rem] h-44 w-44 rounded-full bg-accent/10 blur-3xl pointer-events-none" />

      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-6 sm:py-8 md:py-24 lg:py-28 grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_minmax(320px,0.86fr)] gap-7 md:gap-12 lg:gap-16 items-center">

        {/* ── Imagem ── */}
        <div className="relative flex items-center justify-center order-2 md:order-2">

          {/* Mobile */}
          <div
            className="hero-enter relative w-full aspect-[1.08/1] max-h-64 rounded-xl overflow-hidden border border-sand shadow-card-lg md:hidden"
            style={{ animationDelay: "60ms" }}
          >
            <Image
              src="/rosineideborges.jpg"
              alt="Rosineide B. Cavalcante - Psicologa em Manaus"
              fill
              className="object-cover object-top"
              priority
              fetchPriority="high"
              sizes="(max-width: 767px) calc(100vw - 2rem), 600px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/45 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 z-10 flex items-end justify-between gap-4">
              <div>
                <p className="font-serif text-white text-base font-medium drop-shadow">
                  Rosineide B. Cavalcante
                </p>
                <p className="font-sans text-white/85 text-[0.7rem] tracking-wide drop-shadow">
                  Psicologa - CRP20/02777
                </p>
              </div>
              <span className="rounded-pill bg-white/90 px-3 py-1 font-sans text-[0.65rem] font-semibold uppercase tracking-widest text-accent">
                Manaus
              </span>
            </div>
          </div>

          {/* Desktop */}
          <div
            className="hero-enter relative w-full hidden md:block"
            style={{ animationDelay: "80ms" }}
          >
            <div className="absolute -inset-4 rounded-2xl border border-sand/70" />
            <div className="relative w-full aspect-[0.95/1] rounded-2xl overflow-hidden border border-white/70 shadow-card-lg bg-white">
              <Image
                src="/rosineideborges.jpg"
                alt="Rosineide B. Cavalcante - Psicologa em Manaus"
                fill
                className="object-cover object-top"
                priority
                fetchPriority="high"
                sizes="(max-width: 1023px) 42vw, 520px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/25 via-transparent to-transparent" />
            </div>
            <div className="animate-float absolute -bottom-4 -right-4 w-32 h-32 rounded-xl bg-accent/10 border border-accent/20 motion-reduce:animate-none" />
            <div className="animate-float-2 absolute -top-4 -left-4 w-20 h-20 rounded-xl bg-sand/30 border border-sand motion-reduce:animate-none" />
            <div className="absolute bottom-5 left-5 right-5 rounded-lg border border-white/60 bg-white/88 px-5 py-4 shadow-card backdrop-blur">
              <p className="font-serif text-lg font-semibold text-ink">
                Rosineide B. Cavalcante
              </p>
              <p className="font-sans text-xs tracking-widest uppercase text-muted">
                Psicologa - CRP20/02777
              </p>
            </div>
          </div>
        </div>

        {/* ── Texto ── */}
        <div className="flex flex-col gap-4 md:gap-5 lg:gap-6 order-1 md:order-1">
          <span
            className="hero-enter inline-flex w-fit items-center rounded-pill border border-sand bg-white/70 px-3 py-1.5 font-sans text-[0.68rem] sm:text-xs font-semibold tracking-widest uppercase text-accent shadow-sm"
            style={{ animationDelay: "0ms" }}
          >
            Psicoterapia online e presencial
          </span>

          <h1
            className="hero-enter font-serif text-[2.18rem] sm:text-[2.75rem] md:text-5xl lg:text-6xl font-semibold text-ink leading-[1.04] max-w-[13ch]"
            style={{ animationDelay: "120ms" }}
          >
            Um espaco seguro para cuidar da sua{" "}
            <em className="not-italic text-gradient-accent">saude emocional</em>
          </h1>

          <p
            className="hero-enter font-sans text-sm sm:text-base lg:text-lg text-muted leading-relaxed max-w-lg"
            style={{ animationDelay: "220ms" }}
          >
            Atendimento psicologico em Manaus e online para todo o Brasil, com
            escuta acolhedora, sigilo e cuidado em cada etapa do processo.
          </p>

          <div
            className="hero-enter flex flex-wrap items-center gap-2 text-xs font-sans text-muted"
            style={{ animationDelay: "310ms" }}
          >
            <span className="inline-flex items-center gap-1.5 rounded-pill border border-sand bg-white/70 px-3 py-1.5 shadow-sm">
              <HeartHandshake size={12} className="text-accent shrink-0" />
              Escuta acolhedora
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-pill border border-sand bg-white/70 px-3 py-1.5 shadow-sm">
              <ShieldCheck size={12} className="text-accent shrink-0" />
              Sigilo e etica
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-pill border border-sand bg-white/70 px-3 py-1.5 shadow-sm">
              <Globe size={12} className="text-accent shrink-0" />
              Online e presencial
            </span>
          </div>

          <div
            className="hero-enter grid grid-cols-1 sm:flex sm:flex-row gap-3 md:gap-4 mt-1"
            style={{ animationDelay: "390ms" }}
          >
            <Button as="a" href={WA_AGENDAR} target="_blank" rel="noopener noreferrer">
              Agendar pelo WhatsApp
            </Button>
            <Button as="a" href="#sobre" variant="ghost">
              Conhecer mais
            </Button>
          </div>

          <div
            className="hero-enter grid grid-cols-3 gap-3 rounded-lg border border-sand/80 bg-white/55 p-3 md:p-4"
            style={{ animationDelay: "460ms" }}
          >
            <StatCounter target={10} suffix="+" label="Anos de experiencia" />
            <Stat value="Online" label="Todo o Brasil" />
            <Stat value="Manaus" label="Presencial" />
          </div>
        </div>
      </div>

      {/* Scroll cue — desktop only */}
      <a
        href="#sobre"
        aria-label="Ver mais"
        className="animate-bounce-soft absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-1 text-muted/50 hover:text-accent transition-colors duration-300 motion-reduce:hidden"
      >
        <span className="font-sans text-[0.6rem] tracking-widest uppercase">Explorar</span>
        <ChevronDown size={16} strokeWidth={1.5} />
      </a>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex min-w-0 flex-col">
      <span className="font-serif text-base md:text-lg font-semibold text-accent leading-tight">
        {value}
      </span>
      <span className="font-sans text-[0.68rem] sm:text-xs text-muted leading-snug">
        {label}
      </span>
    </div>
  );
}

function StatCounter({ target, suffix, label }: { target: number; suffix?: string; label: string }) {
  return (
    <div className="flex min-w-0 flex-col">
      <Counter
        target={target}
        suffix={suffix}
        className="font-serif text-base md:text-lg font-semibold text-accent leading-tight"
      />
      <span className="font-sans text-[0.68rem] sm:text-xs text-muted leading-snug">
        {label}
      </span>
    </div>
  );
}
