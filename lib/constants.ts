export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://rosineideborges.com.br";

const WA_BASE = "https://wa.me/5592988443673";

export const WA_AGENDAR = `${WA_BASE}?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20consulta.`;
export const WA_SERVICOS = `${WA_BASE}?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os.`;

export const LOADING_STEPS = [
  "Preparando a pagina",
  "Carregando imagens",
  "Ajustando fontes",
  "Quase pronto",
] as const;
