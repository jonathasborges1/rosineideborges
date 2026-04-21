import { Heart, Monitor, MapPin, Users, Ribbon } from "lucide-react";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";

const WA_LINK =
  "https://wa.me/5592988443673?text=Ola%2C%20gostaria%20de%20saber%20mais%20sobre%20os%20servicos.";

const servicos = [
  {
    icon: Heart,
    titulo: "Psicoterapia Individual",
    desc: "Espaço terapêutico focado em autoconhecimento, manejo de emoções, ansiedade, depressão, luto e crescimento pessoal.",
  },
  {
    icon: Monitor,
    titulo: "Atendimento Online",
    desc: "Sessões de terapia por videochamada para qualquer cidade do Brasil. Mesma qualidade, no conforto da sua casa.",
  },
  {
    icon: MapPin,
    titulo: "Atendimento Presencial",
    desc: "Consultório localizado na Praça 14 de Janeiro, Manaus/AM. Um ambiente acolhedor e reservado para o seu cuidado.",
  },
  {
    icon: Users,
    titulo: "Atenção ao Idoso",
    desc: "Especializada em Gerontologia, oferece cuidado psicológico dedicado à terceira idade e às famílias.",
  },
  {
    icon: Ribbon,
    titulo: "Suporte Oncológico",
    desc: "Psico-oncologia para pacientes em tratamento e familiares, com acolhimento, força e qualidade de vida.",
  },
];

export default function Servicos() {
  return (
    <section
      id="servicos"
      className="bg-cream py-14 md:py-24 lg:py-28 px-4 sm:px-6 md:px-8 scroll-mt-24"
    >
      <div className="max-w-6xl mx-auto">
        <Reveal className="text-center mb-9 md:mb-12 lg:mb-14 max-w-xl mx-auto" delay={40}>
          <div className="inline-flex items-center gap-3 mb-3">
            <span className="h-px w-6 bg-accent/40 rounded-full" aria-hidden="true" />
            <span className="font-sans text-xs font-semibold tracking-widest uppercase text-accent">
              Serviços
            </span>
            <span className="h-px w-6 bg-accent/40 rounded-full" aria-hidden="true" />
          </div>
          <h2 className="font-serif text-[1.75rem] sm:text-3xl md:text-[2.35rem] lg:text-4xl font-semibold text-ink mb-3 md:mb-4 leading-snug">
            Como posso te ajudar
          </h2>
          <p className="font-sans text-muted leading-relaxed">
            Atendimento especializado para diferentes necessidades, sempre com
            escuta ativa e compromisso com o seu bem-estar.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 lg:gap-6">
          {servicos.map((servico, index) => (
            <Reveal
              key={servico.titulo}
              delay={index * 90}
              variant="fade-up"
              className={
                index === servicos.length - 1
                  ? "sm:col-span-2 lg:col-span-1"
                  : ""
              }
            >
              <Card className="group flex flex-col gap-4 h-full">
                <div className="w-10 h-10 rounded-lg bg-accent/10 group-hover:bg-accent/20 flex items-center justify-center transition-colors duration-300">
                  <servico.icon size={20} className="text-accent" />
                </div>
                <h3 className="font-serif text-lg font-semibold text-ink">
                  {servico.titulo}
                </h3>
                <p className="font-sans text-sm text-muted leading-relaxed">
                  {servico.desc}
                </p>
              </Card>
            </Reveal>
          ))}
        </div>

        <Reveal delay={420} variant="fade-up" className="mt-4 md:mt-5 lg:mt-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5 rounded-lg border border-accent bg-accent p-5 md:p-6 shadow-card">
            <p className="font-serif text-lg sm:text-xl font-semibold text-white leading-snug">
              Ainda com duvidas sobre qual servico e o certo para voce?
            </p>
            <Button
              as="a"
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              variant="outline"
              className="shrink-0 border-white text-white hover:bg-white hover:text-accent"
            >
              Falar no WhatsApp
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
