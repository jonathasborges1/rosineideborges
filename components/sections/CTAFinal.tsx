import { Brain } from "lucide-react";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";

const WA_LINK =
  "https://wa.me/5592988443673?text=Olá%2C%20gostaria%20de%20agendar%20uma%20consulta.";

export default function CTAFinal() {
  return (
    <section
      id="contato"
      className="relative overflow-hidden bg-espresso py-14 pb-24 md:py-24 lg:py-28 px-4 sm:px-6 md:px-8 scroll-mt-24"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-white/10" />
      <div className="absolute -top-8 left-[-4rem] h-64 w-64 rounded-full bg-accent/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-16 right-[-3rem] h-56 w-56 rounded-full bg-sand/10 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-accent/5 blur-3xl pointer-events-none" />
      <Reveal
        className="max-w-3xl mx-auto text-center flex flex-col items-center gap-5 md:gap-7 lg:gap-8"
        delay={40}
      >
        <div className="w-14 h-14 rounded-2xl bg-accent/30 flex items-center justify-center" aria-hidden="true">
          <Brain size={28} className="text-sand" />
        </div>

        <span className="font-sans text-xs font-semibold tracking-widest uppercase text-sand">
          Pronta para começar?
        </span>

        <h2 className="font-serif text-[1.75rem] sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-cream leading-tight">
          Você merece se sentir bem. Agora.
        </h2>

        <p className="font-sans text-cream/70 text-sm sm:text-base lg:text-lg leading-relaxed max-w-lg">
          Dar o primeiro passo é o ato mais corajoso. Não espere o momento
          perfeito — ele começa com uma mensagem. Estou aqui para caminhar com
          você.
        </p>

        <Button
          as="a"
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm sm:text-base px-8 sm:px-10 py-4"
        >
          Agendar minha primeira sessão
        </Button>

        <p className="font-sans text-sm text-cream/40">
          Atendimento presencial em Manaus e online para todo o Brasil.
        </p>
      </Reveal>
    </section>
  );
}
