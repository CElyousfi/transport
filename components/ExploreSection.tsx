"use client";

import Link from "next/link";
import { useLanguage } from "@/components/LanguageProvider";
import type { Lang } from "@/lib/siteContent";

type ECard = { href: string; img: string; kicker: Record<Lang, string>; title: Record<Lang, string>; text: Record<Lang, string>; link: Record<Lang, string> };

const CARDS: ECard[] = [
  {
    href: "/about",
    img: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=640&q=80",
    kicker: { fr: "Notre entreprise", en: "About us", es: "Sobre nosotros" },
    title: { fr: "Le mot de notre Directrice", en: "Our Director's message", es: "Mensaje de nuestra Directora" },
    text: { fr: "Vision et engagements de SSWM.", en: "SSWM's vision and commitments.", es: "Visión y compromisos de SSWM." },
    link: { fr: "Lire le message", en: "Read the message", es: "Leer el mensaje" },
  },
  {
    href: "/services",
    img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=640&q=80",
    kicker: { fr: "Nos services", en: "Our services", es: "Nuestros servicios" },
    title: { fr: "Nos solutions de transport", en: "Our transport solutions", es: "Nuestras soluciones" },
    text: { fr: "Routier, frigorifique, pharmaceutique, industriel.", en: "Road, refrigerated, pharma, industrial.", es: "Carretera, frigorífico, farmacéutico, industrial." },
    link: { fr: "Découvrir", en: "Discover", es: "Descubrir" },
  },
  {
    href: "/contact",
    img: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=640&q=80",
    kicker: { fr: "Contact", en: "Contact", es: "Contacto" },
    title: { fr: "Demander un devis", en: "Request a quote", es: "Solicitar presupuesto" },
    text: { fr: "sales@ssw.ma", en: "sales@ssw.ma", es: "sales@ssw.ma" },
    link: { fr: "Nous contacter", en: "Contact us", es: "Contáctenos" },
  },
];

const KICKER: Record<Lang, string> = { fr: "En savoir plus", en: "Learn more", es: "Más información" };
const TITLE: Record<Lang, string> = { fr: "Tout sur SSWM.", en: "All about SSWM.", es: "Todo sobre SSWM." };

export default function ExploreSection() {
  const { lang } = useLanguage();
  return (
    <div className="content-card-component kicker-gray custom-overlay" style={{ "--323e8b66": "#ffffff", "--53fc90eb": "#ffffff", "--3292055e": "none" } as any}>
      <div className="content-card-component__container">
        <div className="content-card-component__header">
          <h5 className="content-card-component__kicker">{KICKER[lang]}</h5>
          <h2 className="content-card-component__title">{TITLE[lang]}</h2>
        </div>
        <div className="content-card-component__body">
          {CARDS.map((card, idx) => (
            <Link key={idx} className="content-card-item internal-link" href={card.href} style={{ "--544cc3b0": "#FFFFFF" } as any}>
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
