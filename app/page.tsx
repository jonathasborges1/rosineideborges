import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Sobre from "@/components/sections/Sobre";
import Servicos from "@/components/sections/Servicos";
import ComoFunciona from "@/components/sections/ComoFunciona";
import Beneficios from "@/components/sections/Beneficios";
import FAQ from "@/components/sections/FAQ";
import Localizacao from "@/components/sections/Localizacao";
import CTAFinal from "@/components/sections/CTAFinal";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import WaveDivider from "@/components/ui/WaveDivider";
import { jsonLd } from "@/lib/jsonld";

const cream = "#F5EFE6";
const white = "#FFFFFF";
const espresso = "#5C3D2E";

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-96 bg-[radial-gradient(circle_at_top,rgba(212,185,154,0.18),transparent_62%)]" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-80 bg-[radial-gradient(circle_at_center,rgba(176,120,85,0.08),transparent_68%)]" />
        <Hero />
        <WaveDivider from={cream} to={white} />
        <Sobre />
        <WaveDivider from={white} to={cream} flip />
        <Servicos />
        <WaveDivider from={cream} to={espresso} />
        <ComoFunciona />
        <WaveDivider from={espresso} to={white} flip />
        <Beneficios />
        <WaveDivider from={white} to={cream} />
        <FAQ />
        <WaveDivider from={cream} to={white} flip />
        <Localizacao />
        <WaveDivider from={white} to={espresso} />
        <CTAFinal />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
