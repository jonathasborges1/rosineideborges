import {
  Heart,
  Monitor,
  MapPin,
  Users,
  Ribbon,
  type LucideIcon,
} from "lucide-react";

export interface Servico {
  icon: LucideIcon;
  titulo: string;
  desc: string;
}

export const servicos: Servico[] = [
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
