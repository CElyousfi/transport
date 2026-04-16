"use client";

import Link from "next/link";
import { useLanguage } from "@/components/LanguageProvider";
import CircleArrowIcon from "@/icons/circle-arrow-icon";
import type { Lang } from "@/lib/siteContent";

type CardData = { href: string; title: Record<Lang, string>; desc: Record<Lang, string>; bgSm: string; bgMd: string; bgLg: string };

const CARDS: CardData[] = [
  {
    href: "/services",
    title: { fr: "Transport Routier", en: "Road Transport", es: "Transporte por Carretera" },
    desc: { fr: "Départs quotidiens Maroc ↔ Europe.", en: "Daily departures Morocco ↔ Europe.", es: "Salidas diarias Marruecos ↔ Europa." },
    bgSm: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=400&q=80",
    bgMd: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&q=80",
    bgLg: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=1100&q=80",
  },
  {
    href: "/services",
    title: { fr: "Température Dirigée", en: "Temperature-Controlled", es: "Temperatura Controlada" },
    desc: { fr: "Frigorifiques KRONE & SCHMITZ.", en: "KRONE & SCHMITZ reefer trailers.", es: "Frigoríficos KRONE & SCHMITZ." },
    bgSm: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=400&q=80",
    bgMd: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800&q=80",
    bgLg: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800&q=80",
  },
  {
    href: "/services",
    title: { fr: "Produits Industriels", en: "Industrial Products", es: "Productos Industriales" },
    desc: { fr: "Véhicules spécifiques Maroc ↔ Europe.", en: "Specialised vehicles Morocco ↔ Europe.", es: "Vehículos especializados Marruecos ↔ Europa." },
    bgSm: "https://images.unsplash.com/photo-1494412651409-8963ce7935a7?w=400&q=80",
    bgMd: "https://images.unsplash.com/photo-1494412651409-8963ce7935a7?w=800&q=80",
    bgLg: "https://images.unsplash.com/photo-1494412651409-8963ce7935a7?w=800&q=80",
  },
];

export default function CardsSection() {
  const { lang } = useLanguage();

  const Arrow = () => (
    <CircleArrowIcon size={64} className="nuxt-icon nuxt-icon--fill cards-component-item__icon icon-circled-arrow" />
  );

  return (
    <div className="cards-component" style={{ "--3467eec0": "#ffffff" } as any}>
      <div className="cards-component__central-block">
        <div className="cards-component__column">
          <Link
            className="cards-component-item custom-bg text-white"
            href={CARDS[0].href}
            style={{
              "--0632786e": "#FFFFFF",
              "--058b847e": `url('${CARDS[0].bgSm}')`,
              "--d0bc404a": `url('${CARDS[0].bgMd}')`,
              "--d0bc41d0": `url('${CARDS[0].bgLg}')`
            } as any}
          >
            <div className="cards-component-item__content">
              <h3 className="cards-component-item__title">{CARDS[0].title[lang]}</h3>
              <p className="cards-component-item__description">{CARDS[0].desc[lang]}</p>
              <Arrow />
            </div>
          </Link>
        </div>

        <div className="cards-component__column">
          {CARDS.slice(1).map((card, idx) => (
            <Link
              key={idx}
              className="cards-component-item custom-bg text-white"
              href={card.href}
              style={{
                "--0632786e": "#FFFFFF",
                "--058b847e": `url('${card.bgSm}')`,
                "--d0bc404a": `url('${card.bgMd}')`,
                "--d0bc41d0": `url('${card.bgLg}')`
              } as any}
            >
              <div className="cards-component-item__content">
                <h3 className="cards-component-item__title">{card.title[lang]}</h3>
                <p className="cards-component-item__description">{card.desc[lang]}</p>
                <Arrow />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
