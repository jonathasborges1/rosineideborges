export default function RouteLoadingScreen() {
  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-cream">
      <div className="flex flex-col items-center gap-3 px-6 text-center">
        <p className="font-serif text-xl md:text-2xl font-semibold text-ink tracking-tight">
          Rosineide B. Cavalcante
        </p>
        <p className="font-sans text-xs tracking-widest uppercase text-muted">
          Psicologa - CRP20/02777
        </p>
        <div
          className="mt-5 h-1 w-36 overflow-hidden rounded-full bg-sand relative"
          role="progressbar"
          aria-label="Carregando recursos do site"
        >
          <div className="absolute inset-y-0 left-0 w-14 rounded-full bg-accent loading-indeterminate" />
        </div>
        <p className="min-h-4 font-sans text-xs text-muted" aria-live="polite">
          Carregando conteudo
          <span className="loading-dots" aria-hidden="true" />
        </p>
      </div>
    </div>
  );
}
