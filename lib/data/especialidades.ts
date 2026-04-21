import { Brain, Ribbon, Users2, type LucideIcon } from "lucide-react";

export interface Especialidade {
  icon: LucideIcon;
  titulo: string;
  desc: string;
}

export const especialidades: Especialidade[] = [
  {
    icon: Users2,
    titulo: "Gerontologia",
    desc: "Pós-graduada em Gerontologia — cuidado especializado para a terceira idade.",
  },
  {
    icon: Ribbon,
    titulo: "Psico-oncologia",
    desc: "Pós-graduada em Psico-oncologia — suporte emocional para pacientes e familiares.",
  },
  {
    icon: Brain,
    titulo: "Psicoterapia",
    desc: "Abordagem humanizada para ansiedade, depressão, luto e desenvolvimento pessoal.",
  },
];
