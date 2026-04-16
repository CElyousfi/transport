"use client";

import { useLanguage } from "@/components/LanguageProvider";
import type { Lang } from "@/lib/siteContent";

type SliderItem = { kicker: Record<Lang, string>; title: Record<Lang, string>; img: string };

const ITEMS: SliderItem[] = [
  {
    kicker: { fr: "Transport Routier", en: "Road Transport", es: "Transporte por Carretera" },
    title: { fr: "Qualité constante. Transport de tous types de produits.", en: "Consistent quality. All product types transported.", es: "Calidad constante. Transporte de todo tipo de productos." },
    img: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&q=80",
  },
  {
    kicker: { fr: "Notre Flotte", en: "Our Fleet", es: "Nuestra Flota" },
    title: { fr: "KRONE, SCHMITZ, DAF, MERCEDES. +180 partenaires. Renouvelée tous les 3 ans.", en: "KRONE, SCHMITZ, DAF, MERCEDES. +180 partners. Renewed every 3 years.", es: "KRONE, SCHMITZ, DAF, MERCEDES. +180 socios. Renovada cada 3 años." },
    img: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=800&q=80",
  },
  {
    kicker: { fr: "Température Dirigée", en: "Temperature-Controlled", es: "Temperatura Controlada" },
    title: { fr: "Conditions optimales pour vos denrées périssables et produits pharmaceutiques.", en: "Optimal conditions for perishables and pharmaceuticals.", es: "Condiciones óptimas para perecederos y farmacéuticos." },
    img: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800&q=80",
  },
  {
    kicker: { fr: "Traçabilité", en: "Traceability", es: "Trazabilidad" },
    title: { fr: "Flotte 100% géolocalisable. Suivi en temps réel de vos marchandises.", en: "100% GPS-tracked fleet. Real-time cargo monitoring.", es: "Flota 100% geolocalizable. Seguimiento en tiempo real." },
    img: "https://images.unsplash.com/photo-1494412651409-8963ce7935a7?w=800&q=80",
  },
];

const HEADER: Record<Lang, string> = {
  fr: "Des solutions adaptées à chaque besoin.",
  en: "Solutions tailored to every need.",
  es: "Soluciones adaptadas a cada necesidad.",
};

export default function SliderUp() {
  const { lang } = useLanguage();
  return (
    <div
      className="slider-up-component custom-overlay"
      style={{ "--64155f60": "#ffffff", "--c1a3637e": "#ffffff" } as React.CSSProperties}
    >
      <div className="slider-up-component__container">
        <h2 className="slider-up-component__header-title">
          <span>{HEADER[lang]}</span>
        </h2>
        <div className="slider-up-component__body">
          <div className="slider-up-component__text-list">
            {ITEMS.map((item, i) => (
              <div key={i} className="slider-up-item text-item is-active">
                <div className="slider-up-item__media-block">
                  <img src={item.img} className="slider-up-item__img" alt={item.kicker[lang]} loading="lazy" />
                </div>
                <div className="slider-up-item__text-block" style={{ opacity: 1 }}>
                  <h5 className="slider-up-item__kicker">{item.kicker[lang]}</h5>
                  <h3 className="slider-up-item__title">{item.title[lang]}</h3>
                </div>
              </div>
            ))}
          </div>

          <div className="slider-up-component__img-list" style={{ position: "sticky", top: "20vh" }}>
            {ITEMS.map((item, i) => (
              <div
                key={i}
                className="slider-up-item img-item is-active"
                style={{ display: "block", margin: 0, position: i === 0 ? "relative" : "absolute", top: 0, left: 0, width: "100%", height: i === 0 ? "auto" : "100%" }}
              >
                <div
                  className="slider-up-item__media-block"
                  style={{
                    display: "block",
                    position: i === 0 ? "relative" : "absolute",
                    top: 0, left: 0, right: 0,
                    bottom: i === 0 ? undefined : 0,
                    width: "100%",
                    opacity: i === 0 ? 1 : 0,
                    borderRadius: 12,
                    overflow: "hidden",
                  }}
                >
                  <img
                    src={item.img}
                    alt={item.kicker[lang]}
                    loading="lazy"
                    style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
