"use client";

import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { ContactForm } from "@/components/ContactForm";
import { HeroPortrait } from "@/components/HeroPortrait";
import {
  HOME_LOCALE_STORAGE,
  type HomeLocale,
  homeCopy,
} from "@/content/home-locale";

export function HomePageContent() {
  const [locale, setLocale] = useState<HomeLocale>("en");

  useEffect(() => {
    try {
      const stored = localStorage.getItem(HOME_LOCALE_STORAGE) as HomeLocale | null;
      if (stored === "en" || stored === "he") setLocale(stored);
    } catch {
      /* ignore */
    }
  }, []);

  const setLocalePersist = useCallback((next: HomeLocale) => {
    setLocale(next);
    try {
      localStorage.setItem(HOME_LOCALE_STORAGE, next);
    } catch {
      /* ignore */
    }
  }, []);

  const t = homeCopy[locale];
  const isHe = locale === "he";
  const titleFont = isHe
    ? "font-[family-name:var(--font-rubik)]"
    : "font-[family-name:var(--font-syne)]";
  const headingFont = isHe
    ? "font-[family-name:var(--font-rubik)]"
    : "font-[family-name:var(--font-syne)]";
  const textAlign =
    "text-center " + (isHe ? "lg:text-right" : "lg:text-left");
  const flexJustify =
    "sm:justify-center " + (isHe ? "lg:justify-end" : "lg:justify-start");
  const quoteBorder = isHe
    ? "border-r-2 border-fuchsia-500/40 pr-4 lg:pr-5"
    : "border-l-2 border-fuchsia-500/40 pl-4 lg:pl-5";
  const introMargins = isHe ? "lg:mr-0 lg:ml-auto" : "lg:mx-0";

  return (
    <main className="pt-14" dir={isHe ? "rtl" : "ltr"} lang={isHe ? "he" : "en"}>
      <section
        className="relative flex min-h-[calc(100vh-3.5rem)] flex-col justify-center overflow-hidden px-4 sm:px-6 lg:px-8"
        aria-label={t.heroAria}
      >
        <div className="hero-grid pointer-events-none absolute inset-0" aria-hidden />
        <div className="hero-blobs pointer-events-none absolute inset-0" aria-hidden />
        <div className="hero-orb absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" aria-hidden />
        <div
          className="hero-orb hero-orb--warm absolute top-1/3 right-[10%] translate-x-1/4 sm:right-[20%]"
          aria-hidden
        />
        <div className="scan-line absolute inset-0" aria-hidden />

        <div className="relative z-10 mx-auto mb-8 flex w-full max-w-6xl justify-center lg:absolute lg:top-20 lg:mb-0 lg:w-auto lg:max-w-none lg:justify-end lg:pe-6">
          <div
            className="inline-flex rounded-full border border-white/10 bg-[#06040c]/90 p-1 shadow-lg backdrop-blur-md"
            role="group"
            aria-label={isHe ? "בחירת שפה" : "Language"}
          >
            <button
              type="button"
              onClick={() => setLocalePersist("en")}
              className={
                "rounded-full px-4 py-1.5 text-xs font-semibold transition sm:text-sm " +
                (locale === "en"
                  ? "bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white shadow-md"
                  : "text-slate-400 hover:text-white")
              }
            >
              EN
            </button>
            <button
              type="button"
              onClick={() => setLocalePersist("he")}
              className={
                "rounded-full px-4 py-1.5 text-xs font-semibold transition sm:text-sm " +
                (locale === "he"
                  ? "bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white shadow-md"
                  : "text-slate-400 hover:text-white")
              }
            >
              עב
            </button>
          </div>
        </div>

        <div className="relative mx-auto grid w-full max-w-6xl items-center gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(260px,1fr)] lg:gap-14 xl:gap-16">
          <div className={`min-w-0 ${textAlign}`}>
            <p
              className={`eyebrow-gradient mb-4 font-[family-name:var(--font-mono)] text-xs tracking-[0.25em] uppercase sm:text-sm`}
            >
              {t.eyebrow}
            </p>

            <h1
              className={`${titleFont} text-4xl leading-[1.05] font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl`}
            >
              Ron
              <span className="mt-1 block text-slate-400">
                {t.titleDev}
                <span className="headline-accent">{t.titleCreator}</span>
              </span>
            </h1>

            <p
              className={`mt-5 font-[family-name:var(--font-mono)] text-sm font-medium tracking-wide text-violet-300/95 sm:text-base`}
            >
              {t.programmerLine}
            </p>

            <p
              className={`mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-slate-400 sm:text-xl ${introMargins} ${isHe ? "font-[family-name:var(--font-rubik)]" : ""}`}
            >
              {t.intro}
            </p>

            <p
              className={`mx-auto mt-5 max-w-2xl ${quoteBorder} text-base leading-relaxed text-slate-300 sm:text-lg ${introMargins} ${isHe ? "font-[family-name:var(--font-rubik)]" : ""}`}
            >
              <span className="font-semibold text-white">{t.businessLead}</span>{" "}
              {t.businessRest}
            </p>

            <div
              className={`mt-10 flex flex-col gap-3 sm:flex-row sm:items-center ${flexJustify}`}
            >
              <Link
                href="/#projects"
                className="cta-primary inline-flex items-center justify-center rounded-lg px-6 py-3 text-center text-sm font-semibold text-white shadow-[0_0_32px_-6px_rgba(167,139,250,0.55)] transition hover:brightness-110"
              >
                {t.ctaProjects}
              </Link>
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center rounded-lg border border-fuchsia-400/35 bg-fuchsia-500/10 px-6 py-3 text-center text-sm font-semibold text-fuchsia-100 transition hover:border-amber-400/45 hover:bg-amber-500/10 hover:text-amber-50"
              >
                {t.ctaContact}
              </Link>
            </div>
          </div>

          <HeroPortrait />
        </div>

        <div
          className="pointer-events-none absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 opacity-50"
          aria-hidden
        >
          <span
            className={`font-[family-name:var(--font-mono)] text-[10px] text-slate-500 uppercase`}
          >
            {t.scroll}
          </span>
          <span className="h-8 w-px animate-pulse bg-gradient-to-b from-violet-500/0 via-fuchsia-400/70 to-amber-400/0" />
        </div>
      </section>

      <section
        className="scroll-mt-20 border-t border-white/5 px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
        aria-label={t.offerAria}
      >
        <div className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-2 sm:gap-5">
          <div className="rounded-2xl border border-violet-500/20 bg-violet-500/5 p-6 sm:p-7">
            <p
              className={`font-[family-name:var(--font-mono)] text-xs tracking-wider text-cyan-400/90 uppercase`}
            >
              {t.card1Label}
            </p>
            <p
              className={`mt-3 text-lg font-semibold text-white sm:text-xl ${isHe ? "font-[family-name:var(--font-rubik)]" : ""}`}
            >
              {t.card1Title}
            </p>
            <p
              className={`mt-2 text-sm leading-relaxed text-slate-400 sm:text-base ${isHe ? "font-[family-name:var(--font-rubik)]" : ""}`}
            >
              {t.card1Body}
            </p>
          </div>
          <div className="rounded-2xl border border-fuchsia-500/20 bg-fuchsia-500/5 p-6 sm:p-7">
            <p
              className={`font-[family-name:var(--font-mono)] text-xs tracking-wider text-fuchsia-300/90 uppercase`}
            >
              {t.card2Label}
            </p>
            <p
              className={`mt-3 text-lg font-semibold text-white sm:text-xl ${isHe ? "font-[family-name:var(--font-rubik)]" : ""}`}
            >
              {t.card2Title}
            </p>
            <p
              className={`mt-2 text-sm leading-relaxed text-slate-400 sm:text-base ${isHe ? "font-[family-name:var(--font-rubik)]" : ""}`}
            >
              {t.card2Body}
            </p>
          </div>
        </div>
      </section>

      <section
        id="projects"
        className="scroll-mt-20 border-t border-violet-500/10 bg-gradient-to-b from-[#0a0714] to-[#08080f] px-4 py-24 sm:px-6 lg:px-8"
      >
        <div className="mx-auto max-w-4xl">
          <h2
            className={`${headingFont} text-2xl font-bold text-white sm:text-3xl`}
          >
            {t.projectsTitle}
          </h2>
          <p
            className={`mt-3 max-w-xl text-slate-400 ${isHe ? "font-[family-name:var(--font-rubik)]" : ""}`}
          >
            {t.projectsBody}
          </p>
        </div>
      </section>

      <section
        id="contact"
        className="scroll-mt-20 border-t border-amber-500/10 bg-gradient-to-b from-[#0c0a08] to-transparent px-4 py-24 sm:px-6 lg:px-8"
      >
        <div className="mx-auto max-w-4xl">
          <h2
            className={`${headingFont} text-2xl font-bold text-white sm:text-3xl`}
          >
            {t.contactTitle}
          </h2>
          <p
            className={`mt-3 max-w-2xl text-slate-400 ${isHe ? "font-[family-name:var(--font-rubik)]" : ""}`}
          >
            {t.contactBody}{" "}
            <a
              href="mailto:poznerron2@gmail.com"
              className="text-cyan-300 underline decoration-cyan-500/40 underline-offset-2 hover:text-cyan-200"
            >
              poznerron2@gmail.com
            </a>
          </p>
          <div className={`mt-12 ${isHe ? "font-[family-name:var(--font-rubik)]" : ""}`}>
            <ContactForm copy={t.contactForm} />
          </div>
        </div>
      </section>
    </main>
  );
}
