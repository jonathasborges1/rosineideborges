import { MapPin, Clock, Phone } from "lucide-react";
import LazyMap from "@/components/LazyMap";
import Reveal from "@/components/ui/Reveal";

export default function Localizacao() {
  return (
    <section
      id="localizacao"
      className="bg-white py-14 md:py-24 lg:py-28 px-4 sm:px-6 md:px-8 scroll-mt-24"
    >
      <div className="max-w-6xl mx-auto">
        <Reveal className="text-center mb-9 md:mb-12 lg:mb-14 max-w-xl mx-auto" delay={40}>
          <div className="inline-flex items-center gap-3 mb-3">
            <span className="h-px w-6 bg-accent/40 rounded-full" aria-hidden="true" />
            <span className="font-sans text-xs font-semibold tracking-widest uppercase text-accent">
              Onde nos encontrar
            </span>
            <span className="h-px w-6 bg-accent/40 rounded-full" aria-hidden="true" />
          </div>
          <h2 className="font-serif text-[1.75rem] sm:text-3xl md:text-[2.35rem] lg:text-4xl font-semibold text-ink mb-3 md:mb-4 leading-snug">
            Consultório em Manaus
          </h2>
          <p className="font-sans text-muted leading-relaxed">
            Localização central e de fácil acesso na Praça 14 de Janeiro.
            Atendimento também disponível online para todo o Brasil.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-7 lg:gap-8 items-start">
          <Reveal variant="fade-right" delay={80}>
            <LazyMap />
          </Reveal>

          <div className="flex flex-col gap-4 md:gap-5 lg:gap-6">
            <Reveal delay={120}>
              <div className="flex gap-3 md:gap-4 p-5 rounded-lg border border-sand bg-white shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:shadow-card-md">
                <MapPin size={20} className="text-accent shrink-0 mt-0.5" />
                <div>
                  <p className="font-sans text-sm font-semibold text-ink mb-1">
                    Endereço
                  </p>
                  <p className="font-sans text-sm text-muted">
                    Av. Álvaro Maia, nº 1444
                    <br />
                    Praça 14 de Janeiro — Manaus/AM
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={190}>
              <div className="flex gap-3 md:gap-4 p-5 rounded-lg border border-sand bg-white shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:shadow-card-md">
                <Phone size={20} className="text-accent shrink-0 mt-0.5" />
                <div>
                  <p className="font-sans text-sm font-semibold text-ink mb-1">
                    WhatsApp
                  </p>
                  <a
                    href="https://wa.me/5592988443673"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-sans text-sm text-accent hover:underline"
                  >
                    (92) 98844-3673
                  </a>
                </div>
              </div>
            </Reveal>

            <Reveal delay={260}>
              <div className="flex gap-3 md:gap-4 p-5 rounded-lg border border-sand bg-white shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:shadow-card-md">
                <Clock size={20} className="text-accent shrink-0 mt-0.5" />
                <div>
                  <p className="font-sans text-sm font-semibold text-ink mb-1">
                    Horários
                  </p>
                  <p className="font-sans text-sm text-muted">
                    Segunda a Sexta — 8h às 18h
                    <br />
                    Sábado — com agendamento prévio
                    <br />
                    <span className="text-accent font-medium">
                      Online disponível com flexibilidade
                    </span>
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={330}>
              <a
                href="https://maps.google.com/?q=Av.+Álvaro+Maia,+1444,+Praça+14+de+Janeiro,+Manaus,+AM"
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-sm text-accent underline underline-offset-4 hover:text-espresso transition-colors"
              >
                Abrir no Google Maps →
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
