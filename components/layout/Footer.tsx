import { MapPin, Phone, Instagram } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

export default function Footer() {
  return (
    <footer className="bg-ink text-cream/80 py-12 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <Reveal delay={0}>
          <p className="font-serif text-xl text-cream font-semibold mb-1">
            Rosineide B. Cavalcante
          </p>
          <p className="font-sans text-xs tracking-widest uppercase text-cream/50 mb-4">
            Psicóloga · CRP20/02777
          </p>
          <p className="font-sans text-sm leading-relaxed">
            Especializada em Psicoterapia, Gerontologia e Psico-oncologia.
            Atendimento presencial em Manaus e online para todo o Brasil.
          </p>
        </Reveal>

        <Reveal delay={80}>
          <p className="font-serif text-base text-cream font-medium mb-4">
            Contato
          </p>
          <ul className="space-y-3 font-sans text-sm">
            <li className="flex items-start gap-2">
              <MapPin size={16} className="text-accent mt-0.5 shrink-0" />
              Av. Álvaro Maia, nº 1444, Praça 14 de Janeiro — Manaus/AM
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} className="text-accent shrink-0" />
              <a
                href="https://wa.me/5592988443673"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors"
              >
                (92) 98844-3673
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Instagram size={16} className="text-accent shrink-0" />
              <a
                href="https://instagram.com/rosineideborgesc"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors"
              >
                @rosineideborgesc
              </a>
            </li>
          </ul>
        </Reveal>

        <Reveal delay={160}>
          <p className="font-serif text-base text-cream font-medium mb-4">
            Atendimento
          </p>
          <ul className="space-y-2 font-sans text-sm">
            <li>Psicoterapia Individual</li>
            <li>Atenção ao Idoso (Gerontologia)</li>
            <li>Suporte Oncológico</li>
            <li>Atendimento Online — Todo o Brasil</li>
            <li>Atendimento Presencial — Manaus/AM</li>
          </ul>
        </Reveal>
      </div>

      <div className="max-w-6xl mx-auto mt-10 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-2 font-sans text-xs text-cream/40">
        <p>
          © {new Date().getFullYear()} Rosineide B. Cavalcante · CRP20/02777
        </p>
        <p>Psicóloga em Manaus — Praça 14 de Janeiro</p>
      </div>
    </footer>
  );
}
