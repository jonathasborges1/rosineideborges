"use client";

import { useEffect, useState } from "react";
import { CalendarDays, Clock, MapPin, Video } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { waLink } from "@/lib/constants";

type Modalidade = "presencial" | "online";

const HORARIOS_SEMANA = [
  "08:00",
  "09:00",
  "10:00",
  "11:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
];
const HORARIOS_SABADO = ["08:00", "09:00", "10:00", "11:00"];
const DIAS_VISIVEIS = 12;

function horariosDoDia(data: Date): string[] {
  if (data.getDay() === 6) return HORARIOS_SABADO;
  return HORARIOS_SEMANA;
}

/* Próximos dias úteis (seg–sáb), começando amanhã. */
function proximosDias(): Date[] {
  const dias: Date[] = [];
  const cursor = new Date();
  cursor.setDate(cursor.getDate() + 1);
  while (dias.length < DIAS_VISIVEIS) {
    if (cursor.getDay() !== 0) dias.push(new Date(cursor));
    cursor.setDate(cursor.getDate() + 1);
  }
  return dias;
}

const fmtDiaSemana = new Intl.DateTimeFormat("pt-BR", { weekday: "short" });
const fmtMes = new Intl.DateTimeFormat("pt-BR", { month: "short" });
const fmtLongo = new Intl.DateTimeFormat("pt-BR", {
  weekday: "long",
  day: "2-digit",
  month: "2-digit",
});

export default function Agendamento() {
  // Gerados no cliente para evitar divergência de data entre servidor e navegador
  const [dias, setDias] = useState<Date[]>([]);
  const [dataSelecionada, setDataSelecionada] = useState<Date | null>(null);
  const [horario, setHorario] = useState<string | null>(null);
  const [modalidade, setModalidade] = useState<Modalidade>("presencial");

  useEffect(() => {
    setDias(proximosDias());
  }, []);

  const pronto = dataSelecionada !== null && horario !== null;

  const mensagem = pronto
    ? `Olá! Gostaria de agendar uma consulta ${
        modalidade === "online" ? "online" : "presencial"
      } para ${fmtLongo.format(dataSelecionada!)} às ${horario}. Esse horário está disponível?`
    : "";

  const registrarConversao = () => {
    if (typeof window !== "undefined" && typeof (window as any).gtag === "function") {
      (window as any).gtag("event", "agendar_whatsapp", {
        event_category: "conversao",
        event_label: "Widget de agendamento",
      });
    }
  };

  return (
    <section
      id="agendamento"
      className="relative bg-cream py-14 md:py-24 lg:py-28 px-4 sm:px-6 md:px-8 scroll-mt-24"
    >
      <div className="max-w-4xl mx-auto">
        <Reveal className="text-center flex flex-col items-center gap-4 mb-10 md:mb-14">
          <span className="font-sans text-xs font-semibold tracking-widest uppercase text-accent">
            Agendamento
          </span>
          <h2 className="font-serif text-[1.75rem] sm:text-3xl md:text-4xl font-semibold text-ink leading-tight">
            Escolha o melhor horário para você
          </h2>
          <p className="font-sans text-muted text-sm sm:text-base leading-relaxed max-w-lg">
            Selecione a modalidade, a data e o horário de sua preferência. Você
            será direcionada ao WhatsApp para confirmar com a Dra. Rosineide.
          </p>
        </Reveal>

        <Reveal delay={80}>
          <div className="bg-white border border-sand/70 rounded-2xl shadow-card-md p-5 sm:p-8 md:p-10 flex flex-col gap-8">
            {/* Modalidade */}
            <div className="flex flex-col gap-3">
              <p className="font-sans text-xs font-semibold tracking-widest uppercase text-muted">
                Modalidade
              </p>
              <div className="flex flex-col sm:flex-row gap-3" role="group" aria-label="Modalidade da consulta">
                {(
                  [
                    { valor: "presencial", rotulo: "Presencial em Manaus", Icone: MapPin },
                    { valor: "online", rotulo: "Online (todo o Brasil)", Icone: Video },
                  ] as const
                ).map(({ valor, rotulo, Icone }) => (
                  <button
                    key={valor}
                    type="button"
                    onClick={() => setModalidade(valor)}
                    aria-pressed={modalidade === valor}
                    className={`flex-1 inline-flex items-center justify-center gap-2 rounded-pill border px-5 py-3 font-sans text-sm transition-all duration-300 ${
                      modalidade === valor
                        ? "border-accent bg-accent text-white shadow-sm"
                        : "border-sand text-muted hover:border-accent hover:text-accent"
                    }`}
                  >
                    <Icone size={16} aria-hidden="true" />
                    {rotulo}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Data */}
              <div className="flex flex-col gap-3">
                <p className="font-sans text-xs font-semibold tracking-widest uppercase text-muted inline-flex items-center gap-2">
                  <CalendarDays size={14} className="text-accent" aria-hidden="true" />
                  Escolha a data
                </p>
                <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-4 gap-2">
                  {dias.length === 0
                    ? Array.from({ length: DIAS_VISIVEIS }).map((_, i) => (
                        <div
                          key={i}
                          className="h-[4.5rem] rounded-lg border border-sand/50 bg-cream/60 animate-pulse"
                          aria-hidden="true"
                        />
                      ))
                    : dias.map((dia) => {
                        const ativo =
                          dataSelecionada?.toDateString() === dia.toDateString();
                        return (
                          <button
                            key={dia.toISOString()}
                            type="button"
                            onClick={() => {
                              setDataSelecionada(dia);
                              setHorario(null);
                            }}
                            aria-pressed={ativo}
                            className={`h-[4.5rem] rounded-lg border flex flex-col items-center justify-center gap-0.5 font-sans transition-all duration-300 ${
                              ativo
                                ? "border-accent bg-accent text-white shadow-sm"
                                : "border-sand/70 bg-white text-ink hover:border-accent hover:-translate-y-0.5"
                            }`}
                          >
                            <span
                              className={`text-[0.6rem] uppercase tracking-wider ${
                                ativo ? "text-white/80" : "text-muted"
                              }`}
                            >
                              {fmtDiaSemana.format(dia).replace(".", "")}
                            </span>
                            <span className="text-lg font-semibold leading-none">
                              {dia.getDate()}
                            </span>
                            <span
                              className={`text-[0.6rem] uppercase tracking-wider ${
                                ativo ? "text-white/80" : "text-muted"
                              }`}
                            >
                              {fmtMes.format(dia).replace(".", "")}
                            </span>
                          </button>
                        );
                      })}
                </div>
              </div>

              {/* Horário */}
              <div className="flex flex-col gap-3">
                <p className="font-sans text-xs font-semibold tracking-widest uppercase text-muted inline-flex items-center gap-2">
                  <Clock size={14} className="text-accent" aria-hidden="true" />
                  Escolha o horário
                </p>
                {dataSelecionada === null ? (
                  <div className="flex-1 min-h-[8rem] rounded-lg border border-dashed border-sand flex items-center justify-center p-6">
                    <p className="font-sans text-sm text-muted text-center">
                      Selecione uma data para ver os horários disponíveis.
                    </p>
                  </div>
                ) : (
                  <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-3 gap-2">
                    {horariosDoDia(dataSelecionada).map((hora) => {
                      const ativo = horario === hora;
                      return (
                        <button
                          key={hora}
                          type="button"
                          onClick={() => setHorario(hora)}
                          aria-pressed={ativo}
                          className={`rounded-lg border px-3 py-3 font-sans text-sm font-medium transition-all duration-300 ${
                            ativo
                              ? "border-accent bg-accent text-white shadow-sm"
                              : "border-sand/70 bg-white text-ink hover:border-accent hover:-translate-y-0.5"
                          }`}
                        >
                          {hora}
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>

            {/* Confirmação */}
            <div className="flex flex-col items-center gap-3 pt-2 border-t border-sand/50">
              {pronto ? (
                <a
                  href={waLink(mensagem)}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={registrarConversao}
                  className="btn-shimmer inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-pill border border-accent bg-accent px-8 py-4 mt-4 font-sans text-xs md:text-sm font-semibold tracking-widest uppercase text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-espresso hover:shadow-md"
                >
                  Confirmar horário pelo WhatsApp
                </a>
              ) : (
                <button
                  type="button"
                  disabled
                  className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-pill border border-sand bg-sand/40 px-8 py-4 mt-4 font-sans text-xs md:text-sm font-semibold tracking-widest uppercase text-muted cursor-not-allowed"
                >
                  Confirmar horário pelo WhatsApp
                </button>
              )}
              <p className="font-sans text-xs text-muted">
                Sem compromisso &bull; Resposta rápida &bull; Horário sujeito à
                confirmação
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
