"use client";

import Link from "next/link";

const DESTINATIONS = [
  { name: "Maroc", role: "Origine & Destination", img: "https://flagcdn.com/w640/ma.png" },
  { name: "France", role: "Liaisons régulières", img: "https://flagcdn.com/w640/fr.png" },
  { name: "Espagne", role: "Liaisons régulières", img: "https://flagcdn.com/w640/es.png" },
  { name: "Allemagne", role: "Liaisons régulières", img: "https://flagcdn.com/w640/de.png" },
  { name: "Belgique", role: "Liaisons régulières", img: "https://flagcdn.com/w640/be.png" },
  { name: "Italie", role: "Liaisons régulières", img: "https://flagcdn.com/w640/it.png" },
];

export default function StatsSection() {
  return (
    <div className="content-card-component kicker-gray custom-overlay" style={{ "--323e8b66": "#ffffff", "--53fc90eb": "#f0f4f8", "--3292055e": "none" } as any} id="destinations">
      <div className="content-card-component__container">
        <div className="content-card-component__header">
          <h5 className="content-card-component__kicker">Nos Destinations</h5>
          <h2 className="content-card-component__title">
            11 pays desservis. Maroc&nbsp;↔&nbsp;Europe.
          </h2>
        </div>
        <div className="content-card-component__body">
          {DESTINATIONS.map((dest, idx) => (
            <Link
              key={idx}
              className="content-card-item internal-link"
              href="/destinations"
              style={{ "--544cc3b0": "#FFFFFF" } as any}
            >
              <img
                className="content-card-item__image"
                alt={dest.name}
                src={dest.img}
              />
              <div className="content-card-item__wrapper less-padding">
                <div className="content-card-item__text-block">
                  <h5 className="content-card-item__kicker">{dest.role}</h5>
                  <h4 className="content-card-item__title">{dest.name}</h4>
                </div>
                <p className="content-card-item__link">En savoir plus</p>
              </div>
            </Link>
          ))}
        </div>
        <div className="content-card-component__cta">
          <h6></h6>
          <Link className="button primary" href="/destinations">
            Voir toutes les destinations
          </Link>
        </div>
      </div>
    </div>
  );
}
