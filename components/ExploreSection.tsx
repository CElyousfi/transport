"use client";

import Link from "next/link";

const CARDS = [
  {
    href: "/about",
    img: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=640&q=80",
    kicker: "Notre entreprise",
    title: "Le mot de notre Directrice Commerciale",
    text: "Zainab Outana vous présente la vision et les engagements de SAFE SOLUTION WHEELS MOROCCO.",
    link: "Lire le message",
  },
  {
    href: "/services",
    img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=640&q=80",
    kicker: "Nos services",
    title: "Tous nos services de transport",
    text: "Transport routier, température dirigée, denrées périssables, et produits industriels.",
    link: "Découvrir nos services",
  },
  {
    href: "/contact",
    img: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=640&q=80",
    kicker: "Contact",
    title: "Demander un devis",
    text: "Contactez nos équipes pour toute demande de transport : sales@ssw.ma",
    link: "Nous contacter",
  },
];

export default function ExploreSection() {
  return (
    <div className="content-card-component kicker-gray custom-overlay" style={{ "--323e8b66": "#f0f4f8", "--53fc90eb": "#ffffff", "--3292055e": "none" } as any}>
      <div className="content-card-component__container">
        <div className="content-card-component__header">
          <h5 className="content-card-component__kicker">En savoir plus</h5>
          <h2 className="content-card-component__title">Tout ce que vous devez savoir sur SSWM.</h2>
        </div>
        <div className="content-card-component__body">
          {CARDS.map((card, idx) => (
            <Link
              key={idx}
              className="content-card-item internal-link"
              href={card.href}
              style={{ "--544cc3b0": "#FFFFFF" } as any}
            >
              <img
                className="content-card-item__image"
                alt=""
                src={card.img}
              />
              <div className="content-card-item__wrapper less-padding">
                <div className="content-card-item__text-block">
                  <h5 className="content-card-item__kicker">{card.kicker}</h5>
                  <h4 className="content-card-item__title">{card.title}</h4>
                  <p className="content-card-item__text">
                    <span>{card.text}</span>
                  </p>
                </div>
                <p className="content-card-item__link">{card.link}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
