"use client";

import Link from "next/link";
import { useLanguage } from "@/components/LanguageProvider";
import type { Lang } from "@/lib/siteContent";

type CCard = { href: string; img: string; kicker: Record<Lang, string>; title: Record<Lang, string>; text: Record<Lang, string>; link: Record<Lang, string> };

const CARDS: CCard[] = [
  {
    href: "/contact",
    img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=640&q=80",
    kicker: { fr: "Importateurs & Exportateurs", en: "Importers & Exporters", es: "Importadores y Exportadores" },
    title: { fr: "Obtenez votre devis", en: "Get your quote", es: "Obtenga su presupuesto" },
    text: { fr: "Solutions personnalisées pour vos marchandises, import et export.", en: "Tailored solutions for your goods, import and export.", es: "Soluciones personalizadas para sus mercancías." },
    link: { fr: "Nous contacter", en: "Contact us", es: "Contáctenos" },
  },
  {
    href: "/contact",
    img: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=640&q=80",
    kicker: { fr: "Partenaires & Affréteurs", en: "Partners & Carriers", es: "Socios y Transportistas" },
    title: { fr: "Rejoindre le réseau SSW", en: "Join the SSW network", es: "Únase a la red SSW" },
    text: { fr: "+180 partenaires. Liaisons régulières Maroc ↔ Europe.", en: "+180 partners. Regular Morocco ↔ Europe connections.", es: "+180 socios. Conexiones regulares Marruecos ↔ Europa." },
    link: { fr: "Devenir partenaire", en: "Become a partner", es: "Ser socio" },
  },
];

const HEADER: Record<Lang, string> = {
  fr: "Prêt à confier votre fret ?",
  en: "Ready to entrust your freight?",
  es: "¿Listo para confiar su carga?",
};

export default function ContentCardCTA() {
  const { lang } = useLanguage();
  return (
    <div
      className="content-card-component custom-overlay"
      style={{ "--323e8b66": "#ffffff", "--53fc90eb": "#ffffff", "--3292055e": "none" } as any}
    >
      <div className="content-card-component__container">
        <div className="content-card-component__header">
          <h2 className="content-card-component__title">{HEADER[lang]}</h2>
        </div>
        <div className="content-card-component__body">
          {CARDS.map((card, idx) => (
            <Link
              key={idx}
              className="content-card-item internal-link"
              href={card.href}
              style={{ "--544cc3b0": "#FFFFFF" } as any}
            >
              <img className="content-card-item__image" alt="" src={card.img} />
              <div className="content-card-item__wrapper less-padding">
                <div className="content-card-item__text-block">
                  <h5 className="content-card-item__kicker">{card.kicker[lang]}</h5>
                  <h4 className="content-card-item__title">{card.title[lang]}</h4>
                  <p className="content-card-item__text"><span>{card.text[lang]}</span></p>
                </div>
                <p className="content-card-item__link">{card.link[lang]}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
