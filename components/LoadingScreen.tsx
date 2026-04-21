"use client";

import { useEffect, useState } from "react";

const LOADING_STEPS = [
  "Preparando a pagina",
  "Carregando imagens",
  "Ajustando fontes",
  "Quase pronto",
];

function waitForWindowLoad() {
  if (document.readyState === "complete") {
    return Promise.resolve();
  }

  return new Promise<void>((resolve) => {
    window.addEventListener("load", () => resolve(), { once: true });
  });
}

function waitForFonts() {
  if (!("fonts" in document)) {
    return Promise.resolve();
  }

  return document.fonts.ready.then(() => undefined);
}

function waitForVisibleImages() {
  const images = Array.from(document.images).filter(
    (image) => image.loading !== "lazy" && !image.complete
  );

  if (images.length === 0) {
    return Promise.resolve();
  }

  return Promise.all(
    images.map(
      (image) =>
        new Promise<void>((resolve) => {
          image.addEventListener("load", () => resolve(), { once: true });
          image.addEventListener("error", () => resolve(), { once: true });
        })
    )
  ).then(() => undefined);
}

export default function LoadingScreen() {
  const [show, setShow] = useState(false);
  const [progress, setProgress] = useState(4);
  const [step, setStep] = useState(0);
  const [stepVisible, setStepVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const startedAt = performance.now();
    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    const minVisibleMs = isMobile ? 500 : 320;
    const hardCapMs = isMobile ? 1400 : 900;
    const maxBeforeLoad = 95;
    let hideTimer: ReturnType<typeof setTimeout>;
    let removeTimer: ReturnType<typeof setTimeout>;
    let progressTimer: ReturnType<typeof setInterval>;
    let stepTimer: ReturnType<typeof setInterval>;
    let stepFadeTimer: ReturnType<typeof setTimeout>;
    let showTimer: ReturnType<typeof setTimeout>;
    let hardCapTimer: ReturnType<typeof setTimeout>;
    let resourcesReady = false;
    let hasDismissStarted = false;
    let isMounted = true;
    let isVisible = false;
    const previousOverflow = document.body.style.overflow;

    showTimer = setTimeout(() => {
      if (!isMounted || resourcesReady) return;
      isVisible = true;
      setShow(true);
      document.body.style.overflow = "hidden";
    }, 200);

    const scheduleDismiss = () => {
      if (hasDismissStarted) return;
      hasDismissStarted = true;

      const elapsed = performance.now() - startedAt;
      const waitMs = Math.max(0, minVisibleMs - elapsed);

      hideTimer = setTimeout(() => {
        setFadeOut(true);
        removeTimer = setTimeout(() => setHidden(true), 400);
      }, waitMs);
    };

    progressTimer = setInterval(() => {
      setProgress((current) => {
        if (resourcesReady) {
          const delta = Math.max((100 - current) * 0.24, 1.6);
          const next = Math.min(100, current + delta);

          if (next >= 100) {
            scheduleDismiss();
          }

          return next;
        }

        const delta = Math.max((maxBeforeLoad - current) * 0.06, 0.22);
        return Math.min(maxBeforeLoad, current + delta);
      });
    }, 90);

    stepTimer = setInterval(() => {
      setStepVisible(false);
      stepFadeTimer = setTimeout(() => {
        setStep((current) => (current + 1) % LOADING_STEPS.length);
        setStepVisible(true);
      }, 260);
    }, 2200);

    hardCapTimer = setTimeout(() => {
      if (!isMounted) return;
      resourcesReady = true;
      scheduleDismiss();
    }, hardCapMs);

    Promise.all([waitForWindowLoad(), waitForFonts(), waitForVisibleImages()]).then(
      () => {
        if (!isMounted) return;
        resourcesReady = true;
        setStep(LOADING_STEPS.length - 1);
        setStepVisible(true);
        if (!isVisible) {
          clearTimeout(showTimer);
          setHidden(true);
        }
      }
    );

    return () => {
      isMounted = false;
      clearInterval(progressTimer);
      clearInterval(stepTimer);
      clearTimeout(showTimer);
      clearTimeout(stepFadeTimer);
      clearTimeout(hideTimer);
      clearTimeout(removeTimer);
      clearTimeout(hardCapTimer);
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  useEffect(() => {
    if (hidden) {
      document.body.style.overflow = "";
    }
  }, [hidden]);

  if (hidden) return null;
  if (!show) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-cream transition-opacity duration-400 ${
        fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
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
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(progress)}
          aria-label="Carregando recursos do site"
        >
          <div
            className="absolute inset-y-0 left-0 rounded-full bg-accent transition-[width] duration-150 ease-out"
            style={{ width: `${progress}%` }}
          >
            <div className="absolute inset-y-0 left-0 w-16 bg-white/35 loading-indeterminate" />
          </div>
        </div>
        <p
          className={`min-h-4 font-sans text-xs text-muted transition-opacity duration-300 ${
            stepVisible ? "opacity-100" : "opacity-0"
          }`}
          aria-live="polite"
        >
          {LOADING_STEPS[step]}
          <span className="loading-dots" aria-hidden="true" />
        </p>
      </div>
    </div>
  );
}
