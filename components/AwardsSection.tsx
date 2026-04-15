"use client";

import { ReactNode } from "react";
import TruckIcon from "@/icons/truck-icon";
import ClockIcon from "@/icons/clock-icon";
import CrosshairIcon from "@/icons/crosshair-icon";
import GlobeIcon from "@/icons/globe-icon";

const AWARDS: { icon: ReactNode; value: string; text: string }[] = [
  { icon: <TruckIcon size={48} strokeWidth={1.5} />, value: "+180", text: "cartes grises partenaires affrétés" },
  { icon: <ClockIcon size={48} strokeWidth={1.5} />, value: "Daily", text: "Départs quotidiens vers l'Europe" },
  { icon: <CrosshairIcon size={48} strokeWidth={1.5} />, value: "100%", text: "Flotte géolocalisable et traçable" },
  { icon: <GlobeIcon size={48} strokeWidth={1.5} />, value: "11", text: "pays desservis Maroc ↔ Europe" },
];

export default function AwardsSection() {
  return (
    <div className="awards-component kicker-gray custom-overlay" style={{ "--5e2e2337": "#ffffff", "--55d833ba": "#f0f4f8" } as any}>
      <div className="awards-component__container">
        <div className="awards-component__header">
          <h5 className="awards-component__kicker">SSW Morocco en chiffres</h5>
          <h2 className="awards-component__title">Ensemble, nous construisons un avenir plus durable.</h2>
        </div>
        <div className="awards-component__body">
          {AWARDS.map((award, i) => (
            <div key={i} className="awards-item text-semibold">
              <div className="awards-item__icon">{award.icon}</div>
              <h3 className="awards-item__title">{award.value}</h3>
              <p className="awards-item__text">
                <span>{award.text}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
