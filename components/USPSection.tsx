"use client";

import { useLanguage } from "@/components/LanguageProvider";

const COPY = {
  fr: { title: "Transport Routier International", text: "Départs quotidiens vers 11 pays européens. Flotte géolocalisable. Température dirigée." },
  en: { title: "International Road Transport", text: "Daily departures to 11 European countries. GPS-tracked fleet. Temperature-controlled." },
  es: { title: "Transporte Internacional por Carretera", text: "Salidas diarias a 11 países europeos. Flota geolocalizable. Temperatura controlada." },
};

export default function USPSection() {
  const { lang } = useLanguage();
  const c = COPY[lang];
  return (
    <section className="usp-component" style={{ "--430aca47": "#ffffff" } as any}>
      <div className="usp-component__heading">
        <h2 className="usp-component__title">{c.title}</h2>
      </div>
      <div className="usp-component__text">
        <p>{c.text}</p>
      </div>
    </section>
  );
}
