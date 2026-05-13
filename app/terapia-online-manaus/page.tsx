import type { Metadata } from "next";
import { ShieldCheck, Globe, Clock, Smartphone, ChevronDown } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import WaveDivider from "@/components/ui/WaveDivider";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import { siteUrl, WA_AGENDAR } from "@/lib/constants";

const pageUrl = `${siteUrl}/terapia-online-manaus`;

export const metadata: Metadata = {
  title: "Terapia Online em Manaus | Psicóloga Rosineide Borges | Agende pelo WhatsApp",
  description:
    "Psicoterapia online com psicóloga registrada (CRP20/02777) em Manaus. Sigilosa, flexível e pelo celular ou PC. Agende pelo WhatsApp.",
  keywords:
    "terapia online manaus, psicóloga online manaus, psicoterapia online manaus, consulta psicológica online manaus, sessão de terapia pelo celular manaus, psicóloga online para ansiedade manaus",
  alternates: { canonical: pageUrl },
  openGraph: {
    title: "Terapia Online em Manaus | Psicóloga Rosineide Borges",
    description:
      "Atendimento psicológico online com psicóloga registrada em Manaus. Sigiloso, humanizado e flexível. Agende pelo WhatsApp.",
    url: pageUrl,
    type: "website",
    locale: "pt_BR",
    siteName: "Rosineide B. Cavalcante — Psicóloga",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Terapia Online em Manaus — Rosineide B. Cavalcante" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Terapia Online em Manaus | Psicóloga Rosineide Borges",
    description: "Psicoterapia online com psicóloga registrada em Manaus. Sigiloso e humanizado.",
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
      name: "Terapia Online em Manaus",
      description:
        "Atendimento psicológico online via videoconferência com a psicóloga Rosineide B. Cavalcante (CRP20/02777). Sessões individuais, sigilosas e humanizadas para moradores de Manaus e de todo o Brasil.",
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
      availableChannel: {
        "@type": "ServiceChannel",
        serviceType: "Videoconferência",
        availableLanguage: "pt-BR",
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "A terapia online tem o mesmo efeito que a presencial?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sim. Estudos clínicos confirmam que a psicoterapia online é tão eficaz quanto a presencial para a maioria dos quadros, incluindo ansiedade, depressão e estresse. O vínculo terapêutico e o sigilo são preservados integralmente.",
          },
        },
        {
          "@type": "Question",
          name: "Quais equipamentos preciso para fazer terapia online?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Basta um celular, tablet ou computador com câmera e microfone, e uma conexão de internet estável. A sessão ocorre por videoconferência em plataforma segura indicada pela psicóloga.",
          },
        },
        {
          "@type": "Question",
          name: "A terapia online em Manaus é sigilosa?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sim. O sigilo é garantido pelo Código de Ética do Conselho Federal de Psicologia, independentemente de o atendimento ser presencial ou online. Nenhuma informação compartilhada na sessão é divulgada.",
          },
        },
        {
          "@type": "Question",
          name: "Como agendar uma sessão de terapia online?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "O agendamento é feito diretamente pelo WhatsApp. Clique no botão 'Agendar pelo WhatsApp', envie uma mensagem e combinamos juntos o melhor horário para você.",
          },
        },
        {
          "@type": "Question",
          name: "O plano de saúde cobre a terapia online?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "O atendimento é particular. Emitimos recibo para reembolso, caso seu plano preveja essa cobertura. Consulte as condições do seu convênio.",
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
    icon: Globe,
    titulo: "Sem deslocamento",
    desc: "Faça sua sessão de casa, do trabalho ou de qualquer lugar de Manaus. Sem trânsito, sem estacionamento.",
  },
  {
    icon: Clock,
    titulo: "Horários flexíveis",
    desc: "Agendamentos que se adaptam à sua rotina, incluindo opções para quem trabalha em horário comercial.",
  },
  {
    icon: Smartphone,
    titulo: "Pelo celular ou PC",
    desc: "Qualquer dispositivo com câmera e internet. Nenhum aplicativo especial — apenas você e seu processo.",
  },
  {
    icon: ShieldCheck,
    titulo: "Sigilo garantido",
    desc: "Confidencialidade assegurada pelo Código de Ética do CFP, igual ao atendimento presencial.",
  },
];

const passos = [
  {
    numero: "01",
    titulo: "Agende pelo WhatsApp",
    desc: "Envie uma mensagem e combinamos data, horário e plataforma de videoconferência.",
  },
  {
    numero: "02",
    titulo: "Prepare seu espaço",
    desc: "Um lugar tranquilo, com privacidade. Fone de ouvido ajuda a manter o sigilo.",
  },
  {
    numero: "03",
    titulo: "Inicie sua jornada",
    desc: "A psicóloga conduz a sessão com escuta ativa, ética e cuidado. Sem julgamentos.",
  },
];

const faqItems = [
  {
    pergunta: "A terapia online tem o mesmo efeito que a presencial?",
    resposta:
      "Sim. Estudos clínicos confirmam que a psicoterapia online é tão eficaz quanto a presencial para a maioria dos quadros, incluindo ansiedade, depressão e estresse. O vínculo terapêutico e o sigilo são preservados integralmente.",
  },
  {
    pergunta: "Quais equipamentos preciso?",
    resposta:
      "Basta um celular, tablet ou computador com câmera e microfone, e uma conexão de internet estável. A sessão ocorre por videoconferência em plataforma segura indicada pela psicóloga.",
  },
  {
    pergunta: "O atendimento é sigiloso?",
    resposta:
      "Sim. O sigilo é garantido pelo Código de Ética do Conselho Federal de Psicologia, independentemente de o atendimento ser presencial ou online. Nenhuma informação compartilhada na sessão é divulgada.",
  },
  {
    pergunta: "Como agendar minha primeira sessão?",
    resposta:
      "O agendamento é feito pelo WhatsApp. Clique no botão desta página, envie uma mensagem e combinamos o melhor horário para você.",
  },
  {
    pergunta: "O plano de saúde cobre a terapia online?",
    resposta:
      "O atendimento é particular. Emitimos recibo para reembolso, caso seu plano preveja essa cobertura. Consulte as condições do seu convênio.",
  },
];

export default function TerapiaOnlineManaus() {
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
                Psicoterapia Online · Manaus e Brasil
              </span>
            </Reveal>

            <Reveal delay={60}>
              <h1 className="font-serif text-[2.18rem] sm:text-[2.75rem] md:text-5xl lg:text-[3.25rem] font-semibold text-ink leading-[1.04]">
                Terapia online em Manaus com{" "}
                <em className="not-italic text-gradient-accent">psicóloga registrada</em>
              </h1>
            </Reveal>

            <Reveal delay={120}>
              <p className="font-sans text-sm sm:text-base lg:text-lg text-muted leading-relaxed max-w-xl">
                Sessões individuais por videoconferência, com a psicóloga Rosineide B. Cavalcante
                (CRP20/02777). Sigilo, escuta acolhedora e flexibilidade de horário — sem sair de casa.
              </p>
            </Reveal>

            <Reveal delay={180}>
              <div className="flex flex-wrap gap-2 text-xs font-sans text-muted">
                {["CRP20/02777", "Sigilo garantido", "Celular ou PC", "Horários flexíveis"].map((tag) => (
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
                <Button as="a" href="#como-funciona" variant="ghost">
                  Como funciona
                </Button>
              </div>
            </Reveal>

            <Reveal delay={300}>
              <div className="grid grid-cols-3 gap-3 rounded-lg border border-sand/80 bg-white/55 p-3 md:p-4 max-w-sm">
                <Stat value="10+" label="Anos de experiência" />
                <Stat value="100%" label="Sigiloso" />
                <Stat value="Online" label="Todo o Brasil" />
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
                  Vantagens
                </span>
                <span className="h-px w-6 bg-accent/40 rounded-full" aria-hidden="true" />
              </div>
              <h2 className="font-serif text-[1.75rem] sm:text-3xl md:text-[2.35rem] font-semibold text-ink mb-3 leading-snug">
                Por que fazer terapia online em Manaus
              </h2>
              <p className="font-sans text-muted leading-relaxed">
                O formato online elimina barreiras sem abrir mão da qualidade e do cuidado que você merece.
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

        {/* Como funciona */}
        <section id="como-funciona" className="bg-cream py-14 md:py-24 lg:py-28 px-4 sm:px-6 md:px-8 scroll-mt-24">
          <div className="max-w-4xl mx-auto">
            <Reveal className="text-center mb-9 md:mb-12" delay={40}>
              <div className="inline-flex items-center gap-3 mb-3">
                <span className="h-px w-6 bg-accent/40 rounded-full" aria-hidden="true" />
                <span className="font-sans text-xs font-semibold tracking-widest uppercase text-accent">
                  Passo a passo
                </span>
                <span className="h-px w-6 bg-accent/40 rounded-full" aria-hidden="true" />
              </div>
              <h2 className="font-serif text-[1.75rem] sm:text-3xl md:text-[2.35rem] font-semibold text-ink mb-3 leading-snug">
                Como funciona a terapia online
              </h2>
              <p className="font-sans text-muted leading-relaxed">
                Mais simples do que parece. Três etapas e você já está dentro do processo.
              </p>
            </Reveal>

            <div className="flex flex-col gap-4 md:gap-5">
              {passos.map((passo, i) => (
                <Reveal key={passo.numero} delay={i * 100} variant="fade-right">
                  <div className="flex items-start gap-5 rounded-xl border border-sand/60 bg-white/70 p-5 md:p-6">
                    <span className="font-serif text-3xl md:text-4xl font-semibold text-accent/30 leading-none shrink-0 w-10 text-center">
                      {passo.numero}
                    </span>
                    <div className="flex flex-col gap-1">
                      <h3 className="font-serif text-lg font-semibold text-ink">{passo.titulo}</h3>
                      <p className="font-sans text-sm text-muted leading-relaxed">{passo.desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={320} variant="fade-up" className="mt-6 md:mt-8 text-center">
              <Button as="a" href="/obrigado">
                Agendar minha sessão online
              </Button>
            </Reveal>
          </div>
        </section>

        <WaveDivider from={cream} to={espresso} />

        {/* Sobre a psicóloga — credibilidade */}
        <section className="bg-espresso py-14 md:py-24 px-4 sm:px-6 md:px-8">
          <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-5 md:gap-6">
            <Reveal delay={40}>
              <span className="font-sans text-xs font-semibold tracking-widest uppercase text-sand">
                Quem faz o atendimento
              </span>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="font-serif text-[1.75rem] sm:text-3xl md:text-4xl font-semibold text-cream leading-snug">
                Rosineide B. Cavalcante
              </h2>
            </Reveal>
            <Reveal delay={160}>
              <p className="font-sans text-cream/70 text-sm sm:text-base leading-relaxed max-w-xl">
                Psicóloga registrada no CRP20/02777, com mais de 10 anos de atuação clínica em Manaus.
                Pós-graduada em Gerontologia e Psico-oncologia. Atende online desde a pandemia, com método
                humanizado e sigilo absoluto.
              </p>
            </Reveal>
            <Reveal delay={220}>
              <div className="flex flex-wrap justify-center gap-2 text-xs font-sans">
                {["CRP20/02777", "Gerontologia", "Psico-oncologia", "Manaus/AM"].map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center rounded-pill border border-white/20 bg-white/10 px-3 py-1.5 text-cream/80"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Reveal>
            <Reveal delay={280}>
              <a
                href="/psicoterapia-para-idosos-manaus"
                className="font-sans text-sm text-sand/70 hover:text-sand transition-colors underline-offset-2 hover:underline"
              >
                Conheça também o atendimento especializado para idosos (Gerontologia) →
              </a>
            </Reveal>
          </div>
        </section>

        <WaveDivider from={espresso} to={white} flip />

        {/* FAQ */}
        <section id="faq" className="bg-white py-14 md:py-24 lg:py-28 px-4 sm:px-6 md:px-8 scroll-mt-24">
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
                Perguntas sobre terapia online
              </h2>
            </Reveal>
            <dl className="flex flex-col">
              {faqItems.map((item, i) => (
                <FaqItem key={i} pergunta={item.pergunta} resposta={item.resposta} />
              ))}
            </dl>
          </div>
        </section>

        <WaveDivider from={white} to={espresso} />

        {/* CTA Final */}
        <section className="relative overflow-hidden bg-espresso py-14 pb-24 md:py-24 lg:py-28 px-4 sm:px-6 md:px-8">
          <div className="absolute -top-8 left-[-4rem] h-64 w-64 rounded-full bg-accent/10 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-16 right-[-3rem] h-56 w-56 rounded-full bg-sand/10 blur-3xl pointer-events-none" />
          <Reveal className="max-w-3xl mx-auto text-center flex flex-col items-center gap-5 md:gap-7" delay={40}>
            <span className="font-sans text-xs font-semibold tracking-widest uppercase text-sand">
              Pronta para começar?
            </span>
            <h2 className="font-serif text-[1.75rem] sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-cream leading-tight">
              Sua primeira sessão de terapia online começa com uma mensagem.
            </h2>
            <p className="font-sans text-cream/70 text-sm sm:text-base leading-relaxed max-w-lg">
              Atendimento sigiloso, humanizado e sem deslocamento. Moradores de Manaus e de todo o Brasil
              podem agendar agora pelo WhatsApp.
            </p>
            <Button as="a" href="/obrigado" className="text-sm sm:text-base px-8 sm:px-10 py-4">
              Agendar pelo WhatsApp
            </Button>
            <p className="font-sans text-sm text-cream/40">
              Psicóloga registrada — CRP20/02777 · Manaus/AM
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

function FaqItem({ pergunta, resposta }: { pergunta: string; resposta: string }) {
  return (
    <details className="group border-b border-sand/60">
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
