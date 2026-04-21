import {
  MessageCircle,
  CalendarCheck,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

export interface Passo {
  numero: string;
  icon: LucideIcon;
  titulo: string;
  desc: string;
}

export const passos: Passo[] = [
  {
    numero: "01",
    icon: MessageCircle,
    titulo: "Entre em contato",
    desc: "Mande uma mensagem pelo WhatsApp. Não precisa ter certeza sobre nada — só dar o primeiro passo já é suficiente.",
  },
  {
    numero: "02",
    icon: CalendarCheck,
    titulo: "Agendamos sua sessão",
    desc: "Escolhemos juntos o melhor dia e horário para você, de forma online ou presencial em Manaus.",
  },
  {
    numero: "03",
    icon: Sparkles,
    titulo: "Inicie sua jornada",
    desc: "Na primeira sessão, você fala, eu escuto. Sem pressão. É o começo de um cuidado que respeita o seu ritmo.",
  },
];
