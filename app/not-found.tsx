import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { siteUrl } from "@/lib/constants";

export const metadata: Metadata = {
  title: { absolute: "Página não encontrada | Rosineide B. Cavalcante — Psicóloga" },
  description: "A página que você procurou não existe. Volte para o site da psicóloga Rosineide B. Cavalcante e encontre o que precisa.",
  alternates: { canonical: `${siteUrl}/404` },
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="min-h-[calc(100vh-3.25rem)] bg-[#F5EFE6] flex flex-col items-center justify-center px-4 py-24 text-center">
        <p className="font-sans text-xs font-semibold tracking-widest uppercase text-[#B07055] mb-4">
          Erro 404
        </p>
        <h1 className="font-serif text-4xl sm:text-5xl font-semibold text-[#2C1810] mb-4 leading-tight">
          Página não encontrada
        </h1>
        <p className="font-sans text-[#6B5B4E] text-sm sm:text-base leading-relaxed max-w-md mb-10">
          O endereço que você acessou não existe ou foi movido. Use os links abaixo para continuar navegando.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-full border border-[#B07055] bg-[#B07055] px-7 py-3 font-sans text-sm font-semibold text-white transition-colors hover:bg-[#5C3D2E] hover:border-[#5C3D2E]"
          >
            Voltar ao início
          </a>
          <a
            href="/terapia-online-manaus"
            className="inline-flex items-center justify-center rounded-full border border-[#D4B99A] bg-transparent px-7 py-3 font-sans text-sm font-semibold text-[#5C3D2E] transition-colors hover:border-[#B07055]"
          >
            Terapia Online
          </a>
          <a
            href="/psicoterapia-para-idosos-manaus"
            className="inline-flex items-center justify-center rounded-full border border-[#D4B99A] bg-transparent px-7 py-3 font-sans text-sm font-semibold text-[#5C3D2E] transition-colors hover:border-[#B07055]"
          >
            Para Idosos
          </a>
        </div>
      </main>
      <Footer />
    </>
  );
}
