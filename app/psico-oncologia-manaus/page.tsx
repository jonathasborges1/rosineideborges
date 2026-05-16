import type { Metadata } from "next";
import { Heart, ShieldCheck, Users, Globe, ChevronDown } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import WaveDivider from "@/components/ui/WaveDivider";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import { siteUrl, WA_AGENDAR } from "@/lib/constants";

const pageUrl = `${siteUrl}/psico-oncologia-manaus`;

export const metadata: Metadata = {
  title: { absolute: "Psico-oncologia em Manaus | Suporte Emocional Oncológico" },
  description:
    "Psicóloga pós-graduada em Psico-oncologia (CRP20/02777) para pacientes e familiares em tratamento do câncer em Manaus. Presencial na Praça 14 e online. Agende pelo WhatsApp.",
  keywords:
    "psico-oncologia manaus, psicóloga oncológica manaus, apoio psicológico cancer manaus, suporte emocional oncologia manaus, psicólogo para paciente com câncer manaus, apoio emocional tratamento oncológico manaus, psicoterapia oncologia manaus",
  alternates: { canonical: pageUrl },
  openGraph: {
    title: "Psico-oncologia em Manaus | Suporte Emocional Oncológico",
    description:
      "Acompanhamento psicológico para pacientes em tratamento oncológico e seus familiares. Pós-graduada em Psico-oncologia, presencial em Manaus e online.",
    url: pageUrl,
    type: "website",
    locale: "pt_BR",
    siteName: "Rosineide B. Cavalcante — Psicóloga",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Psico-oncologia em Manaus — Rosineide B. Cavalcante" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Psico-oncologia em Manaus | Suporte Emocional Oncológico",
    description: "Acompanhamento psicológico para pacientes em tratamento oncológico e familiares. Presencial em Manaus e online.",
    images: ["/og-image.jpg"],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-snippet": -1 } },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": `${pageUrl}/#servico`,
      name: "Psico-oncologia em Manaus",
      description:
        "Acompanhamento psicológico especializado para pacientes em tratamento oncológico e seus familiares, conduzido pela psicóloga Rosineide B. Cavalcante (CRP20/02777), pós-graduada em Psico-oncologia. Presencial em Manaus e online para todo o Brasil.",
      url: pageUrl,
      provider: {
        "@type": "Person",
        name: "Rosineide B. Cavalcante",
        jobTitle: "Psicóloga",
        telephone: "+5592988443673",
        hasCredential: { "@type": "EducationalOccupationalCredential", credentialCategory: "CRP20/02777" },
      },
      areaServed: [
        { "@type": "City", name: "Manaus" },
        { "@type": "Country", name: "Brasil" },
      ],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Início", item: siteUrl },
        { "@type": "ListItem", position: 2, name: "Psico-oncologia em Manaus", item: pageUrl },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "O que é Psico-oncologia?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Psico-oncologia é a especialidade da Psicologia que atua junto a pacientes com câncer e seus familiares. O acompanhamento psicológico ajuda a lidar com o impacto emocional do diagnóstico, os desafios do tratamento, o medo da recorrência e a reintegração à vida após o término da terapêutica médica.",
          },
        },
        {
          "@type": "Question",
          name: "Quem pode se beneficiar do acompanhamento em Psico-oncologia?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Pacientes em qualquer fase do tratamento oncológico — do diagnóstico à remissão — e seus familiares e cuidadores diretos. O suporte se estende a quem perdeu um ente querido para o câncer e precisa atravessar o luto.",
          },
        },
        {
          "@type": "Question",
          name: "O acompanhamento psicológico interfere no tratamento médico?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Não interfere — complementa. Estudos mostram que pacientes com suporte psicológico apresentam melhor adesão ao tratamento, menor nível de ansiedade e melhor qualidade de vida. A psicóloga atua em conjunto, respeitando integralmente o protocolo da equipe médica.",
          },
        },
        {
          "@type": "Question",
          name: "A família também pode participar das sessões?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sim. Em muitos casos, sessões com familiares ou cuidadores fortalecem a rede de apoio ao paciente. A psicóloga pode orientar como comunicar-se, como lidar com o medo e como cuidar da própria saúde emocional sem negligenciar quem precisa de cuidado.",
          },
        },
        {
          "@type": "Question",
          name: "Como agendar uma consulta de Psico-oncologia?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "O agendamento é feito diretamente pelo WhatsApp. Clique no botão desta página, envie uma mensagem e combinamos o melhor horário — presencial no consultório em Manaus ou online para qualquer cidade do Brasil.",
          },
        },
      ],
    },
  ],
};

const cream = "#F5EFE6";
const white = "#FFFFFF";
const espresso = "#5C3D2E";

const beneficios = [
  {
    icon: Heart,
    titulo: "Acolhimento sem julgamentos",
    desc: "Espaço seguro para expressar medo, raiva, tristeza e incerteza — emoções naturais diante do diagnóstico e do tratamento.",
  },
  {
    icon: Users,
    titulo: "Suporte à família e cuidadores",
    desc: "Orientação para familiares sobre como apoiar o paciente e cuidar da própria saúde emocional ao mesmo tempo.",
  },
  {
    icon: Globe,
    titulo: "Presencial ou online",
    desc: "Consultório na Praça 14 de Janeiro, Manaus. Para pacientes com mobilidade reduzida, o atendimento online é igualmente eficaz.",
  },
  {
    icon: ShieldCheck,
    titulo: "Especialização pós-graduada",
    desc: "Formação específica em Psico-oncologia — não apenas psicologia clínica geral. Conhecimento das particularidades emocionais do adoecimento oncológico.",
  },
];

const temas = [
  "Impacto emocional do diagnóstico",
  "Ansiedade durante o tratamento",
  "Medo da recorrência",
  "Depressão e perda de sentido",
  "Luto antecipatório e real",
  "Adaptação à nova imagem corporal",
  "Suporte ao cuidador familiar",
  "Reintegração após o tratamento",
];

const passos = [
  {
    numero: "01",
    titulo: "Entre em contato pelo WhatsApp",
    desc: "Paciente, familiar ou cuidador pode entrar em contato. Combinamos o formato mais adequado: presencial em Manaus ou online.",
  },
  {
    numero: "02",
    titulo: "Primeira sessão de acolhimento",
    desc: "Sessão dedicada a compreender a história, o momento do tratamento e as necessidades emocionais de forma individualizada e sem pressa.",
  },
  {
    numero: "03",
    titulo: "Acompanhamento contínuo",
    desc: "Processo terapêutico com frequência adaptada à rotina de tratamento — incluindo períodos de internação ou limitação de mobilidade.",
  },
];

const faqItems = [
  {
    pergunta: "O que é Psico-oncologia?",
    resposta:
      "Psico-oncologia é a especialidade da Psicologia que atua junto a pacientes com câncer e seus familiares. O acompanhamento ajuda a lidar com o impacto emocional do diagnóstico, os desafios do tratamento, o medo da recorrência e a reintegração à vida após o término da terapêutica médica.",
  },
  {
    pergunta: "Quem pode se beneficiar do acompanhamento?",
    resposta:
      "Pacientes em qualquer fase do tratamento oncológico — do diagnóstico à remissão — e seus familiares e cuidadores. O suporte também se estende a quem perdeu um ente querido para o câncer e precisa atravessar o luto.",
  },
  {
    pergunta: "O acompanhamento psicológico interfere no tratamento médico?",
    resposta:
      "Não — complementa. Estudos mostram que pacientes com suporte psicológico apresentam melhor adesão ao tratamento, menor nível de ansiedade e melhor qualidade de vida. A psicóloga atua respeitando integralmente o protocolo da equipe médica.",
  },
  {
    pergunta: "A família também pode participar?",
    resposta:
      "Sim. Em muitos casos, sessões com familiares ou cuidadores fortalecem a rede de apoio ao paciente. A psicóloga pode orientar como comunicar-se, lidar com o medo e cuidar da própria saúde emocional sem negligenciar quem precisa de cuidado.",
  },
  {
    pergunta: "Como agendar uma consulta?",
    resposta:
      "O agendamento é feito pelo WhatsApp. Clique no botão desta página, envie uma mensagem e combinamos o melhor horário — presencial em Manaus ou online para qualquer cidade do Brasil.",
  },
];

export default function PsicoOncologiaManaus() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main className="relative overflow-hidden">

        {/* Hero */}
        <section className="relative bg-cream min-h-[calc(100svh-3.25rem)] md:min-h-screen flex items-center pt-[3.25rem] px-4 sm:px-6 md:px-8">
          <div className="absolute inset-x-0 top-0 h-24 md:h-40 bg-gradient-to-b from-white/55 to-transparent pointer-events-none" />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-96 bg-[radial-gradient(circle_at_top,rgba(212,185,154,0.18),transparent_62%)]" />

          <div className="max-w-3xl mx-auto w-full py-14 md:py-24 flex flex-col gap-5 md:gap-7">
            <Reveal delay={0}>
              <span className="inline-flex w-fit items-center rounded-pill border border-sand bg-white/70 px-3 py-1.5 font-sans text-[0.68rem] sm:text-xs font-semibold tracking-widest uppercase text-accent shadow-sm">
                Psico-oncologia · Manaus e Brasil
              </span>
            </Reveal>

            <Reveal delay={60}>
              <h1 className="font-serif text-[2.18rem] sm:text-[2.75rem] md:text-5xl lg:text-[3.25rem] font-semibold text-ink leading-[1.04]">
                Suporte psicológico para{" "}
                <em className="not-italic text-gradient-accent">pacientes oncológicos em Manaus</em>
              </h1>
            </Reveal>

            <Reveal delay={120}>
              <p className="font-sans text-sm sm:text-base lg:text-lg text-muted leading-relaxed max-w-xl">
                Acompanhamento psicológico especializado para pacientes em tratamento do câncer e seus
                familiares. Conduzido pela psicóloga Rosineide B. Cavalcante (CRP20/02777), pós-graduada
                em Psico-oncologia — presencial em Manaus e online para todo o Brasil.
              </p>
            </Reveal>

            <Reveal delay={180}>
              <div className="flex flex-wrap gap-2 text-xs font-sans text-muted">
                {["CRP20/02777", "Pós-graduada em Psico-oncologia", "Presencial e online", "Suporte à família"].map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1.5 rounded-pill border border-sand bg-white/70 px-3 py-1.5 shadow-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Reveal>

            <Reveal delay={240}>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mt-1">
                <Button as="a" href="/obrigado">
                  Agendar pelo WhatsApp
                </Button>
                <Button as="a" href="#temas" variant="ghost">
                  Ver temas atendidos
                </Button>
              </div>
            </Reveal>

            <Reveal delay={300}>
              <div className="grid grid-cols-3 gap-3 rounded-lg border border-sand/80 bg-white/55 p-3 md:p-4 max-w-sm">
                <Stat value="10+" label="Anos de experiência" />
                <Stat value="Pós-grad." label="Psico-oncologia" />
                <Stat value="Manaus" label="Presencial" />
              </div>
            </Reveal>
          </div>

          <a
            href="#beneficios"
            aria-label="Ver mais"
            className="animate-bounce-soft absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-1 text-muted/50 hover:text-accent transition-colors duration-300 motion-reduce:hidden"
          >
            <span className="font-sans text-[0.6rem] tracking-widest uppercase">Explorar</span>
            <ChevronDown size={16} strokeWidth={1.5} />
          </a>
        </section>

        <WaveDivider from={cream} to={white} />

        {/* Benefícios */}
        <section id="beneficios" className="bg-white py-14 md:py-24 lg:py-28 px-4 sm:px-6 md:px-8 scroll-mt-24">
          <div className="max-w-6xl mx-auto">
            <Reveal className="text-center mb-9 md:mb-12 max-w-xl mx-auto" delay={40}>
              <div className="inline-flex items-center gap-3 mb-3">
                <span className="h-px w-6 bg-accent/40 rounded-full" aria-hidden="true" />
                <span className="font-sans text-xs font-semibold tracking-widest uppercase text-accent">
                  Diferenciais
                </span>
                <span className="h-px w-6 bg-accent/40 rounded-full" aria-hidden="true" />
              </div>
              <h2 className="font-serif text-[1.75rem] sm:text-3xl md:text-[2.35rem] font-semibold text-ink mb-3 leading-snug">
                Por que buscar um especialista em Psico-oncologia
              </h2>
              <p className="font-sans text-muted leading-relaxed">
                O adoecimento oncológico exige um olhar treinado. Não é psicologia clínica geral — é uma especialidade com método próprio.
              </p>
            </Reveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
              {beneficios.map((item, i) => (
                <Reveal key={item.titulo} delay={i * 80} variant="fade-up">
                  <div className="flex flex-col gap-4 rounded-xl border border-sand/60 bg-cream/50 p-5 md:p-6 h-full hover:border-accent/30 hover:shadow-card transition-all duration-300">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                      <item.icon size={20} className="text-accent" />
                    </div>
                    <h3 className="font-serif text-lg font-semibold text-ink">{item.titulo}</h3>
                    <p className="font-sans text-sm text-muted leading-relaxed">{item.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <WaveDivider from={white} to={cream} flip />

        {/* Temas atendidos */}
        <section id="temas" className="bg-cream py-14 md:py-24 lg:py-28 px-4 sm:px-6 md:px-8 scroll-mt-24">
          <div className="max-w-4xl mx-auto">
            <Reveal className="text-center mb-9 md:mb-12" delay={40}>
              <div className="inline-flex items-center gap-3 mb-3">
                <span className="h-px w-6 bg-accent/40 rounded-full" aria-hidden="true" />
                <span className="font-sans text-xs font-semibold tracking-widest uppercase text-accent">
                  Temas atendidos
                </span>
                <span className="h-px w-6 bg-accent/40 rounded-full" aria-hidden="true" />
              </div>
              <h2 className="font-serif text-[1.75rem] sm:text-3xl md:text-[2.35rem] font-semibold text-ink mb-3 leading-snug">
                O que trabalhamos juntos
              </h2>
              <p className="font-sans text-muted leading-relaxed">
                O câncer afeta muito além do corpo. O acompanhamento psicológico age em cada dimensão desse impacto.
              </p>
            </Reveal>

            <Reveal delay={80} variant="fade-up">
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {temas.map((tema) => (
                  <li
                    key={tema}
                    className="flex items-center gap-3 rounded-lg border border-sand/60 bg-white/70 px-4 py-3 font-sans text-sm text-ink"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" aria-hidden="true" />
                    {tema}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>

        <WaveDivider from={cream} to={espresso} />

        {/* Como funciona */}
        <section className="bg-espresso py-14 md:py-24 px-4 sm:px-6 md:px-8">
          <div className="max-w-4xl mx-auto">
            <Reveal className="text-center mb-9 md:mb-12" delay={40}>
              <span className="font-sans text-xs font-semibold tracking-widest uppercase text-sand">
                Passo a passo
              </span>
              <h2 className="mt-3 font-serif text-[1.75rem] sm:text-3xl md:text-[2.35rem] font-semibold text-cream mb-3 leading-snug">
                Como iniciar o acompanhamento
              </h2>
            </Reveal>

            <div className="flex flex-col gap-4 md:gap-5">
              {passos.map((passo, i) => (
                <Reveal key={passo.numero} delay={i * 100} variant="fade-right">
                  <div className="flex items-start gap-5 rounded-xl border border-white/10 bg-white/10 p-5 md:p-6">
                    <span className="font-serif text-3xl md:text-4xl font-semibold text-sand/40 leading-none shrink-0 w-10 text-center">
                      {passo.numero}
                    </span>
                    <div className="flex flex-col gap-1">
                      <h3 className="font-serif text-lg font-semibold text-cream">{passo.titulo}</h3>
                      <p className="font-sans text-sm text-cream/70 leading-relaxed">{passo.desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={320} variant="fade-up" className="mt-6 md:mt-8 text-center">
              <Button as="a" href="/obrigado">
                Agendar consulta pelo WhatsApp
              </Button>
            </Reveal>
          </div>
        </section>

        <WaveDivider from={espresso} to={white} flip />

        {/* Credencial */}
        <section className="bg-white py-14 md:py-24 px-4 sm:px-6 md:px-8">
          <div className="max-w-3xl mx-auto">
            <Reveal className="text-center mb-8" delay={40}>
              <div className="inline-flex items-center gap-3 mb-3">
                <span className="h-px w-6 bg-accent/40 rounded-full" aria-hidden="true" />
                <span className="font-sans text-xs font-semibold tracking-widest uppercase text-accent">
                  Especialista
                </span>
                <span className="h-px w-6 bg-accent/40 rounded-full" aria-hidden="true" />
              </div>
              <h2 className="font-serif text-[1.75rem] sm:text-3xl md:text-[2.35rem] font-semibold text-ink mb-3 leading-snug">
                Rosineide B. Cavalcante
              </h2>
              <p className="font-sans text-muted leading-relaxed max-w-xl mx-auto">
                Psicóloga registrada no CRP20/02777, com mais de 10 anos de atuação clínica em Manaus e
                pós-graduação em Psico-oncologia. Atende pacientes em tratamento oncológico e seus familiares
                com escuta ativa, ética e sigilo — presencialmente na Praça 14 de Janeiro e online para todo
                o Brasil.
              </p>
            </Reveal>

            <Reveal delay={120} variant="fade-up">
              <div className="rounded-xl border border-sand/60 bg-cream/50 p-5 md:p-6">
                <p className="font-sans text-xs font-semibold tracking-widest uppercase text-accent mb-3">
                  Também atendemos
                </p>
                <div className="flex flex-col gap-3">
                  <a
                    href="/psicoterapia-para-idosos-manaus"
                    className="font-sans text-sm font-semibold text-accent hover:text-espresso transition-colors"
                  >
                    Psicóloga para idosos — Gerontologia →
                  </a>
                  <a
                    href="/terapia-online-manaus"
                    className="font-sans text-sm font-semibold text-accent hover:text-espresso transition-colors"
                  >
                    Terapia online para todo o Brasil →
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <WaveDivider from={white} to={cream} />

        {/* FAQ */}
        <section id="faq" className="bg-cream py-14 md:py-24 lg:py-28 px-4 sm:px-6 md:px-8 scroll-mt-24">
          <div className="max-w-3xl mx-auto">
            <Reveal className="text-center mb-9 md:mb-12" delay={40}>
              <div className="inline-flex items-center gap-3 mb-3">
                <span className="h-px w-6 bg-accent/40 rounded-full" aria-hidden="true" />
                <span className="font-sans text-xs font-semibold tracking-widest uppercase text-accent">
                  Dúvidas frequentes
                </span>
                <span className="h-px w-6 bg-accent/40 rounded-full" aria-hidden="true" />
              </div>
              <h2 className="font-serif text-[1.75rem] sm:text-3xl md:text-[2.35rem] font-semibold text-ink mb-3 leading-snug">
                Perguntas sobre Psico-oncologia
              </h2>
            </Reveal>
            <dl className="flex flex-col">
              {faqItems.map((item, i) => (
                <FaqItem key={i} pergunta={item.pergunta} resposta={item.resposta} defaultOpen={i === 0} />
              ))}
            </dl>
          </div>
        </section>

        <WaveDivider from={cream} to={espresso} />

        {/* CTA Final */}
        <section className="relative overflow-hidden bg-espresso py-14 pb-24 md:py-24 lg:py-28 px-4 sm:px-6 md:px-8">
          <div className="absolute -top-8 left-[-4rem] h-64 w-64 rounded-full bg-accent/10 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-16 right-[-3rem] h-56 w-56 rounded-full bg-sand/10 blur-3xl pointer-events-none" />
          <Reveal className="max-w-3xl mx-auto text-center flex flex-col items-center gap-5 md:gap-7" delay={40}>
            <span className="font-sans text-xs font-semibold tracking-widest uppercase text-sand">
              Não precisa enfrentar isso sozinho
            </span>
            <h2 className="font-serif text-[1.75rem] sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-cream leading-tight">
              O cuidado emocional faz parte do tratamento.
            </h2>
            <p className="font-sans text-cream/70 text-sm sm:text-base leading-relaxed max-w-lg">
              Paciente, familiar ou cuidador — o primeiro passo é uma mensagem. Atendimento presencial
              em Manaus e online para todo o Brasil.
            </p>
            <Button as="a" href="/obrigado" className="text-sm sm:text-base px-8 sm:px-10 py-4">
              Agendar pelo WhatsApp
            </Button>
            <p className="font-sans text-sm text-cream/40">
              Psicóloga registrada — CRP20/02777 · Psico-oncologia · Manaus/AM
            </p>
          </Reveal>
        </section>

      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex min-w-0 flex-col">
      <span className="font-serif text-base md:text-lg font-semibold text-accent leading-tight">{value}</span>
      <span className="font-sans text-[0.68rem] sm:text-xs text-muted leading-snug">{label}</span>
    </div>
  );
}

function FaqItem({ pergunta, resposta, defaultOpen = false }: { pergunta: string; resposta: string; defaultOpen?: boolean }) {
  return (
    <details className="group border-b border-sand/60" open={defaultOpen}>
      <summary className="flex cursor-pointer items-center justify-between gap-4 py-4 md:py-5 min-h-[54px] list-none">
        <span className="font-sans text-sm font-semibold text-ink group-open:text-accent transition-colors duration-200">
          {pergunta}
        </span>
        <span className="shrink-0 flex items-center justify-center w-7 h-7 rounded-full bg-sand/40 text-muted group-open:bg-accent group-open:text-white group-open:rotate-180 transition-all duration-300">
          <ChevronDown size={15} aria-hidden="true" />
        </span>
      </summary>
      <p className="font-sans text-sm text-muted leading-relaxed border-l-2 border-accent/30 pl-4 pb-5">
        {resposta}
      </p>
    </details>
  );
}
