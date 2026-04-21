"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

const faqs = [
  {
    pergunta: "O que é psicoterapia e para quem é indicada?",
    resposta:
      "Psicoterapia é um processo terapêutico conduzido por um psicólogo para ajudar a compreender emoções, comportamentos e padrões de pensamento. É indicada para qualquer pessoa que deseja melhorar a saúde mental, lidar com ansiedade, depressão, luto, estresse, ou simplesmente buscar autoconhecimento.",
  },
  {
    pergunta: "Qual a diferença entre atendimento online e presencial?",
    resposta:
      "A eficácia terapêutica é equivalente nos dois formatos. O atendimento presencial acontece no consultório em Manaus, na Praça 14 de Janeiro. O online é realizado por videochamada e atende pacientes de qualquer cidade do Brasil, com toda a privacidade e qualidade da sessão presencial.",
  },
  {
    pergunta: "Quantas sessões serão necessárias?",
    resposta:
      "Cada pessoa tem um ritmo único. Na maioria dos casos, os primeiros resultados são percebidos entre 4 e 8 sessões. O processo terapêutico completo é acordado individualmente, respeitando os objetivos e necessidades de cada paciente.",
  },
  {
    pergunta: "O atendimento é sigiloso?",
    resposta:
      "Sim, absolutamente. O sigilo profissional é garantido pelo Código de Ética dos Psicólogos. Tudo o que é compartilhado nas sessões é estritamente confidencial, com exceção de situações previstas em lei.",
  },
  {
    pergunta: "Vocês atendem por plano de saúde?",
    resposta:
      "Atualmente o atendimento é realizado de forma particular. Entre em contato pelo WhatsApp para saber mais sobre os valores e formas de pagamento disponíveis.",
  },
  {
    pergunta: "Como é a primeira consulta?",
    resposta:
      "A primeira sessão é um espaço de acolhimento e escuta, sem pressa. Você conta um pouco sobre você, seus objetivos e o que te trouxe à terapia. Não há julgamentos — é o início de uma parceria de cuidado.",
  },
  {
    pergunta: "Psicóloga em Manaus atende em qual bairro?",
    resposta:
      "O consultório presencial está localizado na Av. Álvaro Maia, nº 1444, no bairro Praça 14 de Janeiro, em Manaus/AM — área central, de fácil acesso.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section
      id="faq"
      className="bg-cream py-14 md:py-24 lg:py-28 px-4 sm:px-6 md:px-8 scroll-mt-24"
    >
      <div className="max-w-3xl mx-auto">
        <Reveal className="text-center mb-9 md:mb-12 lg:mb-14" delay={40}>
          <div className="inline-flex items-center gap-3 mb-3">
            <span className="h-px w-6 bg-accent/40 rounded-full" aria-hidden="true" />
            <span className="font-sans text-xs font-semibold tracking-widest uppercase text-accent">
              Dúvidas frequentes
            </span>
            <span className="h-px w-6 bg-accent/40 rounded-full" aria-hidden="true" />
          </div>
          <h2 className="font-serif text-[1.75rem] sm:text-3xl md:text-[2.35rem] lg:text-4xl font-semibold text-ink mb-3 md:mb-4 leading-snug">
            Perguntas frequentes
          </h2>
          <p className="font-sans text-muted leading-relaxed">
            Respondemos as dúvidas mais comuns sobre psicoterapia e nosso
            atendimento.
          </p>
        </Reveal>

        <dl className="flex flex-col">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                className={`border-b border-sand/60 transition-colors duration-300 ${
                  isOpen ? "border-sand/30" : ""
                }`}
              >
                <dt>
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="w-full flex items-center justify-between gap-4 py-4 md:py-5 min-h-[54px] md:min-h-[56px] text-left group"
                  >
                    <span
                      className={`font-sans text-sm font-semibold transition-colors duration-200 ${
                        isOpen ? "text-accent" : "text-ink group-hover:text-accent"
                      }`}
                    >
                      {faq.pergunta}
                    </span>
                    <span
                      className={`shrink-0 flex items-center justify-center w-7 h-7 rounded-full transition-all duration-300 ${
                        isOpen
                          ? "bg-accent text-white rotate-180"
                          : "bg-sand/40 text-muted group-hover:bg-accent/20 group-hover:text-accent"
                      }`}
                    >
                      <ChevronDown size={15} aria-hidden="true" />
                    </span>
                  </button>
                </dt>
                <dd
                  className={`overflow-hidden transition-all duration-300 ease-in-out motion-reduce:transition-none ${
                    isOpen ? "max-h-[34rem] opacity-100 pb-5" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="font-sans text-sm text-muted leading-relaxed border-l-2 border-accent/30 pl-4">
                    {faq.resposta}
                  </p>
                </dd>
              </div>
            );
          })}
        </dl>
      </div>
    </section>
  );
}
