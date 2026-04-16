"use client";

import { ReactNode } from "react";
import TruckIcon from "@/icons/truck-icon";
import ClockIcon from "@/icons/clock-icon";
import CrosshairIcon from "@/icons/crosshair-icon";
import GlobeIcon from "@/icons/globe-icon";
import { useLanguage } from "@/components/LanguageProvider";
import type { Lang } from "@/lib/siteContent";

type Award = { icon: ReactNode; value: string; text: Record<Lang, string> };

const AWARDS: Award[] = [
  { icon: <TruckIcon size={48} strokeWidth={1.5} />, value: "+180", text: { fr: "Partenaires affrétés", en: "Chartered partners", es: "Socios fletadores" } },
  { icon: <ClockIcon size={48} strokeWidth={1.5} />, value: "24/7", text: { fr: "Départs quotidiens", en: "Daily departures", es: "Salidas diarias" } },
  { icon: <CrosshairIcon size={48} strokeWidth={1.5} />, value: "100%", text: { fr: "Flotte géolocalisable", en: "GPS-tracked fleet", es: "Flota geolocalizable" } },
  { icon: <GlobeIcon size={48} strokeWidth={1.5} />, value: "11", text: { fr: "Pays desservis", en: "Countries served", es: "Países atendidos" } },
];

const KICKER: Record<Lang, string> = { fr: "SSW Morocco en chiffres", en: "SSW Morocco in numbers", es: "SSW Morocco en cifras" };
const TITLE: Record<Lang, string> = { fr: "Performance et fiabilité au quotidien.", en: "Daily performance and reliability.", es: "Rendimiento y fiabilidad diarios." };

export default function AwardsSection() {
  const { lang } = useLanguage();
  return (
    <div className="awards-component kicker-gray custom-overlay" style={{ "--5e2e2337": "#ffffff", "--55d833ba": "#ffffff" } as any}>
      <div className="awards-component__container">
        <div className="awards-component__header">
          <h5 className="awards-component__kicker">{KICKER[lang]}</h5>
          <h2 className="awards-component__title">{TITLE[lang]}</h2>
        </div>
        <div className="awards-component__body">
          {AWARDS.map((award, i) => (
            <div key={i} className="awards-item text-semibold">
              <div className="awards-item__icon">{award.icon}</div>
              <h3 className="awards-item__title">{award.value}</h3>
              <p className="awards-item__text"><span>{award.text[lang]}</span></p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
