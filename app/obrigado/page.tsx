"use client";

import { useEffect, useState } from "react";
import { WA_AGENDAR } from "@/lib/constants";

export default function Obrigado() {
  const [count, setCount] = useState(3);

  useEffect(() => {
    // Dispara evento de conversão para Google Ads / GA4
    // Após configurar o Google Ads, substitua os valores abaixo:
    // gtag("event", "conversion", { send_to: "AW-XXXXXXXXXX/XXXXXXXXXXXXXXXXXXXX" });
    if (typeof window !== "undefined" && typeof (window as any).gtag === "function") {
      (window as any).gtag("event", "agendar_whatsapp", {
        event_category: "conversao",
        event_label: "Redirecionamento WhatsApp",
      });
    }

    const timer = setInterval(() => {
      setCount((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          window.location.href = WA_AGENDAR;
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <main className="min-h-screen bg-[#F5EFE6] flex flex-col items-center justify-center px-4 py-16">
      <div className="text-center max-w-md w-full mx-auto">

        {/* Ícone WhatsApp */}
        <div className="mx-auto mb-6 w-20 h-20 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="white"
            className="w-10 h-10"
            aria-hidden="true"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        </div>

        {/* Título */}
        <h1 className="font-serif text-3xl sm:text-4xl font-semibold text-[#2C1810] mb-3 leading-snug">
          Quase lá!
        </h1>

        {/* Descrição */}
        <p className="font-sans text-[#6B5B4E] text-sm sm:text-base leading-relaxed mb-8">
          Você será redirecionado para o{" "}
          <span className="font-semibold text-[#25D366]">WhatsApp</span> em
          instantes para confirmar seu agendamento com a Dra. Rosineide.
        </p>

        {/* Countdown */}
        <div className="flex flex-col items-center gap-2 mb-10">
          <div className="relative w-20 h-20 flex items-center justify-center">
            <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 80 80">
              <circle
                cx="40" cy="40" r="34"
                fill="none"
                stroke="#E8DDD2"
                strokeWidth="6"
              />
              <circle
                cx="40" cy="40" r="34"
                fill="none"
                stroke="#B07055"
                strokeWidth="6"
                strokeLinecap="round"
                strokeDasharray={`${2 * Math.PI * 34}`}
                strokeDashoffset={`${2 * Math.PI * 34 * (1 - count / 3)}`}
                style={{ transition: "stroke-dashoffset 0.9s linear" }}
              />
            </svg>
            <span className="font-serif text-3xl font-semibold text-[#B07055] relative z-10">
              {count}
            </span>
          </div>
          <p className="font-sans text-xs text-[#9C8070]">
            {count === 1 ? "segundo" : "segundos"} para o redirecionamento
          </p>
        </div>

        {/* Botão de ação imediata */}
        <a
          href={WA_AGENDAR}
          className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20b858] text-white font-sans font-semibold text-sm px-8 py-3.5 rounded-full transition-colors shadow-md w-full sm:w-auto"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-5 h-5 shrink-0"
            aria-hidden="true"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          Ir para o WhatsApp agora
        </a>

        <p className="font-sans text-xs text-[#B0A090] mt-4">
          Caso não seja redirecionado automaticamente, clique no botão acima.
        </p>

        {/* Voltar ao site */}
        <a
          href="/"
          className="block font-sans text-xs text-[#B07055] hover:underline mt-6 transition-colors"
        >
          ← Voltar ao site
        </a>
      </div>
    </main>
  );
}
