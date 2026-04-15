"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";

const SLIDES = [
  {
    bg: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=1440&q=80",
    accent: "#192538",
    title: "Votre partenaire de confiance Maroc ↔ Europe",
    text: "Transport routier international fiable avec départs quotidiens vers toute l'Europe.",
    cta: "Découvrir nos solutions",
    href: "/#services",
  },
  {
    bg: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1440&q=80",
    accent: "#5B5555",
    title: "Spécialistes du transport frigorifique international",
    text: "Flotte 100% géolocalisable, renouvelée tous les 3 ans. KRONE, SCHMITZ, DAF, MERCEDES.",
    cta: "Notre flotte",
    href: "/#fleet",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [leaving, setLeaving] = useState<number | null>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const touchStartX = useRef(0);

  const goTo = useCallback((next: number | ((prev: number) => number)) => {
    setCurrent((prev) => {
      const nextIdx = typeof next === "function" ? next(prev) : next;
      if (nextIdx === prev) return prev;
      setLeaving(prev);
      setTimeout(() => setLeaving(null), 500);
      return nextIdx;
    });
  }, []);

  const resetTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      goTo((p: number) => (p + 1) % SLIDES.length);
    }, 5000);
  }, [goTo]);

  const prev = useCallback(() => {
    goTo((c: number) => (c - 1 + SLIDES.length) % SLIDES.length);
    resetTimer();
  }, [goTo, resetTimer]);

  const next = useCallback(() => {
    goTo((c: number) => (c + 1) % SLIDES.length);
    resetTimer();
  }, [goTo, resetTimer]);

  useEffect(() => {
    resetTimer();
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [resetTimer]);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      diff > 0 ? next() : prev();
    }
  };

  return (
    <div
      className="slider-banner text-white-theme"
      style={{ "--8190f8ce": "#ffffff" } as any}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <div className="slider-banner__wrapper">
        {SLIDES.map((slide, i) => {
          const isActive = i === current;
          const isLeaving = i === leaving;
          return (
            <div
              key={i}
              className={`slider-banner-item text-white ${isActive ? "is-active" : ""}`}
              style={{
                backgroundImage: `url('${slide.bg}')`,
                "--0ea8a2f8": slide.accent,
                display: isActive || isLeaving ? undefined : "none",
                opacity: isLeaving ? 0 : undefined,
                transition: "opacity .5s ease-in-out",
              } as any}
            >
              <div className="slider-banner-item__content">
                <h2 className="slider-banner-item__title">{slide.title}</h2>
                <p className="slider-banner-item__text">{slide.text}</p>
                <Link
                  href={slide.href}
                  className="button button-text secondary short internal-link slider-banner-item__button"
                >
                  {slide.cta}
                </Link>
              </div>
            </div>
          );
        })}
      </div>
      <div className="slider-banner__controls">
        <button type="button" aria-label="Previous" onClick={prev}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#fff" className="nuxt-icon slider-banner__arrow left arrow-color">
            <path fillRule="evenodd" d="M15.478 13.557H2.923v-3.114h12.554l-4.815-5.127 2.068-2.202L21.075 12l-8.344 8.886-2.068-2.202z" clipRule="evenodd" />
          </svg>
        </button>
        <div className="slider-banner__dots dots-color">
          {SLIDES.map((_, i) => (
            <button
              type="button"
              key={i}
              className={i === current ? "active" : ""}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => { goTo(i); resetTimer(); }}
            />
          ))}
        </div>
        <button type="button" aria-label="Next" onClick={next}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#fff" className="nuxt-icon slider-banner__arrow arrow-color">
            <path fillRule="evenodd" d="M15.478 13.557H2.923v-3.114h12.554l-4.815-5.127 2.068-2.202L21.075 12l-8.344 8.886-2.068-2.202z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
    </div>
  );
}
