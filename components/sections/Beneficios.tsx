import Reveal from "@/components/ui/Reveal";
import { beneficios } from "@/lib/data/beneficios";

export default function Beneficios() {
  return (
    <section
      id="beneficios"
      className="bg-white py-14 md:py-24 lg:py-28 px-4 sm:px-6 md:px-8 scroll-mt-24"
    >
      <div className="max-w-6xl mx-auto">
        <Reveal className="text-center mb-9 md:mb-12 lg:mb-14 max-w-xl mx-auto" delay={40}>
          <div className="inline-flex items-center gap-3 mb-3">
            <span className="h-px w-6 bg-accent/40 rounded-full" aria-hidden="true" />
            <span className="font-sans text-xs font-semibold tracking-widest uppercase text-accent">
              Por que escolher
            </span>
            <span className="h-px w-6 bg-accent/40 rounded-full" aria-hidden="true" />
          </div>
          <h2 className="font-serif text-[1.75rem] sm:text-3xl md:text-[2.35rem] lg:text-4xl font-semibold text-ink mb-3 md:mb-4 leading-snug">
            O que você encontra aqui
          </h2>
          <p className="font-sans text-muted leading-relaxed">
            Um espaço construído para que você se sinta seguro, respeitado e
            pronto para dar os próximos passos na sua vida.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 lg:gap-6">
          {beneficios.map((b, index) => (
            <Reveal key={b.titulo} delay={index * 80} variant="fade-up">
              <div className="group flex gap-3 md:gap-4 p-5 md:p-6 rounded-lg border border-sand/50 hover:border-accent/30 hover:bg-accent/[0.03] hover:shadow-card transition-all duration-300 h-full">
                <div className="mt-0.5 w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110 motion-reduce:transition-none">
                  <b.icon size={16} className="text-accent" />
                </div>
                <div>
                  <p className="font-sans text-sm font-semibold text-ink mb-1">
                    {b.titulo}
                  </p>
                  <p className="font-sans text-sm text-muted leading-relaxed">
                    {b.desc}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
