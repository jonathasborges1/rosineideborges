import {
  ShieldCheck,
  Award,
  HeartHandshake,
  CalendarCheck,
  GraduationCap,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";

export interface Beneficio {
  icon: LucideIcon;
  titulo: string;
  desc: string;
}

export const beneficios: Beneficio[] = [
  {
    icon: ShieldCheck,
    titulo: "Sigilo absoluto",
    desc: "Tudo que é dito na sessão permanece entre você e a psicóloga. Garantido pelo Código de Ética.",
  },
  {
    icon: Award,
    titulo: "Profissional registrada",
    desc: "CRP20/02777 — atuação legal e regulamentada pelo Conselho Federal de Psicologia.",
  },
  {
    icon: HeartHandshake,
    titulo: "Atendimento humanizado",
    desc: "Escuta ativa, sem julgamentos, com empatia e respeito à sua história.",
  },
  {
    icon: CalendarCheck,
    titulo: "Flexibilidade total",
    desc: "Você escolhe: presencial em Manaus ou online de qualquer lugar do Brasil.",
  },
  {
    icon: GraduationCap,
    titulo: "Especializações únicas",
    desc: "Expertise em Gerontologia e Psico-oncologia — áreas que exigem cuidado especializado.",
  },
  {
    icon: TrendingUp,
    titulo: "Foco em resultados",
    desc: "Cada sessão tem propósito. Trabalhamos juntos para transformações reais e duradouras.",
  },
];
