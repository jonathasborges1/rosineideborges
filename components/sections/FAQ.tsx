"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { faqs } from "@/lib/data/faqs";

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
