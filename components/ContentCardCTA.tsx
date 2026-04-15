"use client";

import Link from "next/link";

const CARDS = [
  {
    href: "/contact",
    img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=640&q=80",
    kicker: "Pour les importateurs et exportateurs",
    title: "Obtenez votre devis transport + logistique",
    text: "Nos experts conçoivent des solutions de transport personnalisées pour vos marchandises, en import et en export. Pour vous lancer, contactez-nous.",
    link: "Nous contacter",
  },
  {
    href: "/contact",
    img: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=640&q=80",
    kicker: "Pour les partenaires et affréteurs",
    title: "Rejoindre le réseau SSW Morocco",
    text: "Plus de 180 cartes grises de partenaires affrétés. Rejoignez un réseau solide pour des liaisons régulières Maroc ↔ Europe avec une flotte renouvelée tous les 3 ans.",
    link: "Devenir partenaire",
  },
];

export default function ContentCardCTA() {
  return (
    <div
      className="content-card-component custom-overlay"
      style={{ "--323e8b66": "#ffffff", "--53fc90eb": "#ffffff", "--3292055e": "none" } as any}
    >
      <div className="content-card-component__container">
        <div className="content-card-component__header">
          <h2 className="content-card-component__title">
            Prêt à confier votre fret à un partenaire de confiance&nbsp;?
          </h2>
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
          <div className="content-card-component__cta">
            <h6></h6>
          </div>
        </div>
      </div>
    </div>
  );
}
