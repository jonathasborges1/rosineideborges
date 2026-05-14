import type { Metadata } from "next";
import { Heart, ShieldCheck, Users, Clock, ChevronDown, Globe } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import WaveDivider from "@/components/ui/WaveDivider";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import { siteUrl } from "@/lib/constants";

const pageUrl = `${siteUrl}/psicoterapia-para-idosos-manaus`;

export const metadata: Metadata = {
  title: "Psicóloga para Idosos em Manaus | Gerontologia | Rosineide B. Cavalcante",
  description:
    "Psicóloga especialista em Gerontologia (CRP20/02777) para idosos em Manaus. Presencial na Praça 14 e online. Agende pelo WhatsApp.",
  keywords:
    "psicóloga para idosos em manaus, gerontologia manaus, psicoterapia para idosos manaus, psicólogo para terceira idade manaus, acompanhamento psicológico idoso manaus, saúde mental idoso manaus",
  alternates: { canonical: pageUrl },
  openGraph: {
    title: "Psicóloga para Idosos em Manaus | Gerontologia | Rosineide B. Cavalcante",
    description:
      "Atendimento psicológico especializado para a terceira idade. Pós-graduada em Gerontologia, presencial em Manaus e online.",
    url: pageUrl,
    type: "website",
    locale: "pt_BR",
    siteName: "Rosineide B. Cavalcante — Psicóloga",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Psicóloga para Idosos em Manaus — Gerontologia" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Psicóloga para Idosos em Manaus | Gerontologia",
    description: "Atendimento psicológico especializado para a terceira idade em Manaus. Pós-graduada em Gerontologia.",
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
      name: "Psicoterapia para Idosos em Manaus — Gerontologia",
      description:
        "Atendimento psicológico especializado para a terceira idade com a psicóloga Rosineide B. Cavalcante (CRP20/02777), pós-graduada em Gerontologia. Presencial em Manaus e online para todo o Brasil.",
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
        { "@type": "ListItem", position: 2, name: "Psicóloga para Idosos em Manaus", item: pageUrl },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Por que idosos precisam de acompanhamento psicológico?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "O envelhecimento traz mudanças físicas, emocionais e sociais significativas — aposentadoria, perdas de entes queridos, limitações físicas e isolamento. A Gerontologia Psicológica atua justamente nesse cuidado, promovendo qualidade de vida, autonomia e bem-estar emocional na terceira idade.",
          },
        },
        {
          "@type": "Question",
          name: "O que é Gerontologia e por que ela é importante?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Gerontologia é a ciência que estuda o envelhecimento em seus aspectos biológicos, psicológicos e sociais. Um psicólogo com pós-graduação em Gerontologia tem formação especializada para lidar com as particularidades emocionais e cognitivas da terceira idade — algo que um psicólogo clínico generalista não necessariamente possui.",
          },
        },
        {
          "@type": "Question",
          name: "A família pode participar do processo terapêutico?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sim. Em muitos casos a participação dos familiares fortalece o processo e ajuda na adaptação do ambiente doméstico. A psicóloga pode orientar os cuidadores sobre como lidar com situações específicas do envelhecimento.",
          },
        },
        {
          "@type": "Question",
          name: "O atendimento pode ser feito online para idosos?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sim. Para idosos com dificuldade de locomoção ou que residem em outras cidades, o atendimento online por videochamada é uma alternativa segura e eficaz. Auxiliamos na orientação técnica para que o idoso consiga participar das sessões com conforto.",
          },
        },
        {
          "@type": "Question",
          name: "Como agendar uma consulta para meu familiar idoso?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "O agendamento é feito pelo WhatsApp. Clique no botão desta página, envie uma mensagem e combinamos o melhor horário — presencial em Manaus ou online.",
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
    titulo: "Especialista em envelhecimento",
    desc: "Pós-graduada em Gerontologia — formação específica para as demandas emocionais, cognitivas e sociais da terceira idade.",
  },
  {
    icon: Users,
    titulo: "Suporte à família",
    desc: "Orientação para cuidadores e familiares sobre como apoiar o idoso no dia a dia sem sobrecarga emocional.",
  },
  {
    icon: Globe,
    titulo: "Presencial ou online",
    desc: "Consultório na Praça 14 de Janeiro, Manaus. Para idosos com dificuldade de locomoção, o atendimento online é uma alternativa segura.",
  },
  {
    icon: ShieldCheck,
    titulo: "Sigilo e ética",
    desc: "Confidencialidade garantida pelo Código de Ética do CFP. Ambiente acolhedor, sem julgamentos.",
  },
];

const temas = [
  "Depressão e ansiedade na terceira idade",
  "Luto e perdas recorrentes",
  "Adaptação à aposentadoria",
  "Isolamento social e solidão",
  "Conflitos familiares e de cuidado",
  "Enfrentamento de doenças crônicas",
  "Perda de autonomia e autoestima",
  "Suporte ao cuidador",
];

const passos = [
  {
    numero: "01",
    titulo: "Entre em contato pelo WhatsApp",
    desc: "Familiar ou o próprio idoso pode entrar em contato. Combinamos o formato mais adequado: presencial ou online.",
  },
  {
    numero: "02",
    titulo: "Primeira sessão de avaliação",
    desc: "Sessão dedicada a entender a história, as demandas e os objetivos terapêuticos de forma individualizada.",
  },
  {
    numero: "03",
    titulo: "Acompanhamento contínuo",
    desc: "Processo terapêutico com frequência e duração adaptadas às necessidades do idoso e da família.",
  },
];

const faqItems = [
  {
    pergunta: "Por que idosos precisam de acompanhamento psicológico?",
    resposta:
      "O envelhecimento traz mudanças físicas, emocionais e sociais significativas — aposentadoria, perdas, limitações físicas e isolamento. A Gerontologia Psicológica atua justamente nesse cuidado, promovendo qualidade de vida, autonomia e bem-estar emocional na terceira idade.",
  },
  {
    pergunta: "O que é Gerontologia e por que ela é importante?",
    resposta:
      "Gerontologia é a ciência que estuda o envelhecimento em seus aspectos biológicos, psicológicos e sociais. Um psicólogo com pós-graduação em Gerontologia tem formação especializada para lidar com as particularidades da terceira idade — algo que um clínico generalista não necessariamente possui.",
  },
  {
    pergunta: "A família pode participar do processo terapêutico?",
    resposta:
      "Sim. Em muitos casos a participação dos familiares fortalece o processo e ajuda na adaptação do ambiente doméstico. A psicóloga pode orientar os cuidadores sobre como lidar com situações específicas do envelhecimento.",
  },
  {
    pergunta: "O atendimento pode ser online para idosos?",
    resposta:
      "Sim. Para idosos com dificuldade de locomoção ou que residem em outras cidades, o atendimento online é uma alternativa segura. Auxiliamos na orientação para que o idoso consiga participar das sessões com conforto.",
  },
  {
    pergunta: "Como agendar uma consulta para meu familiar idoso?",
    resposta:
      "O agendamento é feito pelo WhatsApp. Clique no botão desta página, envie uma mensagem e combinamos o melhor horário — presencial em Manaus ou online.",
  },
];

export default function PsicoterapiaParaIdososManaus() {
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
                Gerontologia · Manaus e Brasil
              </span>
            </Reveal>

            <Reveal delay={60}>
              <h1 className="font-serif text-[2.18rem] sm:text-[2.75rem] md:text-5xl lg:text-[3.25rem] font-semibold text-ink leading-[1.04]">
                Psicóloga para idosos em Manaus com{" "}
                <em className="not-italic text-gradient-accent">especialização em Gerontologia</em>
              </h1>
            </Reveal>

            <Reveal delay={120}>
              <p className="font-sans text-sm sm:text-base lg:text-lg text-muted leading-relaxed max-w-xl">
                Cuidado psicológico especializado para a terceira idade com a psicóloga Rosineide B.
                Cavalcante (CRP20/02777), pós-graduada em Gerontologia. Presencial em Manaus e online
                para todo o Brasil.
              </p>
            </Reveal>

            <Reveal delay={180}>
              <div className="flex flex-wrap gap-2 text-xs font-sans text-muted">
                {["CRP20/02777", "Pós-graduada em Gerontologia", "Presencial e online", "Suporte à família"].map((tag) => (
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
                <Stat value="Pós-grad." label="Gerontologia" />
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
                Por que escolher uma especialista em Gerontologia
              </h2>
              <p className="font-sans text-muted leading-relaxed">
                Não é só psicologia clínica geral. É um olhar treinado especificamente para o envelhecimento.
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
                Situações que tratamos juntos
              </h2>
              <p className="font-sans text-muted leading-relaxed">
                Cada fase do envelhecimento traz desafios únicos. Estamos preparados para todos eles.
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
                pós-graduação em Gerontologia. Atende idosos e famílias com escuta ativa, ética e cuidado
                individualizado — presencialmente na Praça 14 de Janeiro e online para todo o Brasil.
              </p>
            </Reveal>

            <Reveal delay={120} variant="fade-up">
              <div className="rounded-xl border border-sand/60 bg-cream/50 p-5 md:p-6">
                <p className="font-sans text-xs font-semibold tracking-widest uppercase text-accent mb-3">
                  Também atendemos online
                </p>
                <p className="font-sans text-sm text-muted leading-relaxed mb-4">
                  Idosos com dificuldade de deslocamento ou famílias em outras cidades podem optar pelo
                  atendimento por videochamada. Mesmo qualidade, no conforto de casa.
                </p>
                <a
                  href="/terapia-online-manaus"
                  className="font-sans text-sm font-semibold text-accent hover:text-espresso transition-colors"
                >
                  Saiba mais sobre a terapia online →
                </a>
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
                Perguntas sobre psicologia para idosos
              </h2>
            </Reveal>
            <dl className="flex flex-col">
              {faqItems.map((item, i) => (
                <FaqItem key={i} pergunta={item.pergunta} resposta={item.resposta} />
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
              Cuide de quem você ama
            </span>
            <h2 className="font-serif text-[1.75rem] sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-cream leading-tight">
              Seu familiar merece cuidado especializado. Agora.
            </h2>
            <p className="font-sans text-cream/70 text-sm sm:text-base leading-relaxed max-w-lg">
              O primeiro passo é o mais importante. Entre em contato pelo WhatsApp e veja como podemos
              ajudar — presencialmente em Manaus ou online para todo o Brasil.
            </p>
            <Button as="a" href="/obrigado" className="text-sm sm:text-base px-8 sm:px-10 py-4">
              Agendar pelo WhatsApp
            </Button>
            <p className="font-sans text-sm text-cream/40">
              Psicóloga registrada — CRP20/02777 · Gerontologia · Manaus/AM
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
