"use client";

import Link from "next/link";
import { useLanguage } from "@/components/LanguageProvider";
import type { Lang } from "@/lib/siteContent";

type Dest = { name: Record<Lang, string>; role: Record<Lang, string>; img: string };

const DESTINATIONS: Dest[] = [
  { name: { fr: "Maroc", en: "Morocco", es: "Marruecos" }, role: { fr: "Origine & Destination", en: "Origin & Destination", es: "Origen y Destino" }, img: "https://flagcdn.com/w640/ma.png" },
  { name: { fr: "France", en: "France", es: "Francia" }, role: { fr: "Liaisons régulières", en: "Regular connections", es: "Conexiones regulares" }, img: "https://flagcdn.com/w640/fr.png" },
  { name: { fr: "Espagne", en: "Spain", es: "España" }, role: { fr: "Liaisons régulières", en: "Regular connections", es: "Conexiones regulares" }, img: "https://flagcdn.com/w640/es.png" },
  { name: { fr: "Allemagne", en: "Germany", es: "Alemania" }, role: { fr: "Liaisons régulières", en: "Regular connections", es: "Conexiones regulares" }, img: "https://flagcdn.com/w640/de.png" },
  { name: { fr: "Belgique", en: "Belgium", es: "Bélgica" }, role: { fr: "Liaisons régulières", en: "Regular connections", es: "Conexiones regulares" }, img: "https://flagcdn.com/w640/be.png" },
  { name: { fr: "Italie", en: "Italy", es: "Italia" }, role: { fr: "Liaisons régulières", en: "Regular connections", es: "Conexiones regulares" }, img: "https://flagcdn.com/w640/it.png" },
];

const KICKER: Record<Lang, string> = { fr: "Nos Destinations", en: "Our Destinations", es: "Nuestros Destinos" };
const TITLE: Record<Lang, string> = { fr: "11 pays desservis. Maroc ↔ Europe.", en: "11 countries served. Morocco ↔ Europe.", es: "11 países atendidos. Marruecos ↔ Europa." };
const MORE: Record<Lang, string> = { fr: "En savoir plus", en: "Learn more", es: "Más información" };
const ALL: Record<Lang, string> = { fr: "Toutes les destinations", en: "All destinations", es: "Todos los destinos" };

export default function StatsSection() {
  const { lang } = useLanguage();
  return (
    <div className="content-card-component kicker-gray custom-overlay" style={{ "--323e8b66": "#ffffff", "--53fc90eb": "#ffffff", "--3292055e": "none" } as any} id="destinations">
      <div className="content-card-component__container">
        <div className="content-card-component__header">
          <h5 className="content-card-component__kicker">{KICKER[lang]}</h5>
          <h2 className="content-card-component__title">{TITLE[lang]}</h2>
        </div>
        <div className="content-card-component__body">
          {DESTINATIONS.map((dest, idx) => (
            <Link key={idx} className="content-card-item internal-link" href="/destinations" style={{ "--544cc3b0": "#FFFFFF" } as any}>
              <img className="content-card-item__image" alt={dest.name[lang]} src={dest.img} />
              <div className="content-card-item__wrapper less-padding">
                <div className="content-card-item__text-block">
                  <h5 className="content-card-item__kicker">{dest.role[lang]}</h5>
                  <h4 className="content-card-item__title">{dest.name[lang]}</h4>
                </div>
                <p className="content-card-item__link">{MORE[lang]}</p>
              </div>
            </Link>
          ))}
        </div>
        <div className="content-card-component__cta">
          <h6></h6>
          <Link className="button primary" href="/destinations">{ALL[lang]}</Link>
        </div>
      </div>
    </div>
  );
}
