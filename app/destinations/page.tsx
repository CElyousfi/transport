"use client";

import Link from "next/link";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { useLanguage } from "@/components/LanguageProvider";
import { SERVED_COUNTRIES, SITE_CONTENT } from "@/lib/siteContent";
import GlobeIcon from "@/icons/globe-icon";
import ClockIcon from "@/icons/clock-icon";
import TruckIcon from "@/icons/truck-icon";
import PinIcon from "@/icons/pin-icon";

const COUNTRY_DATA: Record<string, { img: string; nameFr: string; nameEs: string }> = {
  Morocco:     { img: "https://flagcdn.com/w640/ma.png", nameFr: "Maroc", nameEs: "Marruecos" },
  France:      { img: "https://flagcdn.com/w640/fr.png", nameFr: "France", nameEs: "Francia" },
  Spain:       { img: "https://flagcdn.com/w640/es.png", nameFr: "Espagne", nameEs: "España" },
  Germany:     { img: "https://flagcdn.com/w640/de.png", nameFr: "Allemagne", nameEs: "Alemania" },
  Belgium:     { img: "https://flagcdn.com/w640/be.png", nameFr: "Belgique", nameEs: "Bélgica" },
  Italy:       { img: "https://flagcdn.com/w640/it.png", nameFr: "Italie", nameEs: "Italia" },
  Netherlands: { img: "https://flagcdn.com/w640/nl.png", nameFr: "Pays-Bas", nameEs: "Países Bajos" },
  Bulgaria:    { img: "https://flagcdn.com/w640/bg.png", nameFr: "Bulgarie", nameEs: "Bulgaria" },
  Poland:      { img: "https://flagcdn.com/w640/pl.png", nameFr: "Pologne", nameEs: "Polonia" },
  England:     { img: "https://flagcdn.com/w640/gb.png", nameFr: "Angleterre", nameEs: "Inglaterra" },
  Portugal:    { img: "https://flagcdn.com/w640/pt.png", nameFr: "Portugal", nameEs: "Portugal" },
};

export default function DestinationsPage() {
  const { lang } = useLanguage();
  const copy = SITE_CONTENT[lang];

  const getCountryName = (key: string) => {
    const data = COUNTRY_DATA[key];
    if (!data) return key;
    if (lang === "fr") return data.nameFr;
    if (lang === "es") return data.nameEs;
    return key;
  };

  const roleLabel = lang === "fr" ? "Liaisons régulières" : lang === "es" ? "Conexiones regulares" : "Regular connections";
  const originLabel = lang === "fr" ? "Origine & Destination" : lang === "es" ? "Origen y Destino" : "Origin & Destination";

  return (
    <>
      <Navbar />
      <main>
        {/* ══ 1. Hero — usp-component dark ══ */}
        <section className="usp-component text-white" style={{ "--430aca47": "#192538" } as any}>
          <div className="usp-component__heading">
            <h2 className="usp-component__title">{copy.destinationsTitle}</h2>
          </div>
          <div className="usp-component__text">
            <p>{copy.routesIntro}</p>
          </div>
        </section>

        {/* ══ 2. Intro ══ */}
        <div className="cta-component large-padding" style={{ "--439b4506": "#FFFFFF", "--43eebefe": "none" } as any}>
          <h5 className="cta-component__kicker">{copy.nav.destinations}</h5>
          <h3 className="cta-component__text is-h3">{copy.destinationsInline}</h3>
        </div>

        {/* ── Country Cards ── */}
        <div className="content-card-component kicker-gray" style={{ "--323e8b66": "#ffffff" } as any}>
          <div className="content-card-component__container">
            <div className="content-card-component__header">
              <h5 className="content-card-component__kicker">{copy.nav.destinations}</h5>
              <h2 className="content-card-component__title">{copy.destinationsTitle}</h2>
            </div>
            <div className="content-card-component__body">
              {SERVED_COUNTRIES.map((country) => {
                const data = COUNTRY_DATA[country];
                return (
                  <div key={country} className="content-card-item" style={{ "--544cc3b0": "#ffffff" } as any}>
                    <img
                      className="content-card-item__image"
                      src={data?.img || "https://flagcdn.com/w640/eu.png"}
                      alt={getCountryName(country)}
                      loading="lazy"
                    />
                    <div className="content-card-item__wrapper less-padding">
                      <div className="content-card-item__text-block">
                        <h5 className="content-card-item__kicker">{country === "Morocco" ? originLabel : roleLabel}</h5>
                        <h4 className="content-card-item__title">{getCountryName(country)}</h4>
                      </div>
                      <Link href="/contact" className="content-card-item__link">{copy.hero.ctaSecondary} →</Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* ── Stats (awards-component) ── */}
        <div className="awards-component kicker-gray custom-overlay" style={{ "--5e2e2337": "#ffffff", "--55d833ba": "#ffffff" } as any}>
          <div className="awards-component__container">
            <div className="awards-component__header">
              <h5 className="awards-component__kicker">{copy.keyFiguresTitle}</h5>
              <h2 className="awards-component__title">{copy.hero.subtitle}</h2>
            </div>
            <div className="awards-component__body">
              <div className="awards-item text-semibold">
                <div className="awards-item__icon">
                  <GlobeIcon size={48} strokeWidth={1.5} />
                </div>
                <h3 className="awards-item__title">11</h3>
                <p className="awards-item__text"><span>{lang === "fr" ? "Pays desservis" : lang === "es" ? "Países atendidos" : "Countries served"}</span></p>
              </div>
              <div className="awards-item text-semibold">
                <div className="awards-item__icon">
                  <ClockIcon size={48} strokeWidth={1.5} />
                </div>
                <h3 className="awards-item__title">365</h3>
                <p className="awards-item__text"><span>{lang === "fr" ? "Jours par an" : lang === "es" ? "Días al año" : "Days per year"}</span></p>
              </div>
              <div className="awards-item text-semibold">
                <div className="awards-item__icon">
                  <TruckIcon size={48} strokeWidth={1.5} />
                </div>
                <h3 className="awards-item__title">+180</h3>
                <p className="awards-item__text"><span>{lang === "fr" ? "Véhicules partenaires" : lang === "es" ? "Vehículos socios" : "Partner vehicles"}</span></p>
              </div>
              <div className="awards-item text-semibold">
                <div className="awards-item__icon">
                  <PinIcon size={48} strokeWidth={1.5} />
                </div>
                <h3 className="awards-item__title">24/7</h3>
                <p className="awards-item__text"><span>{lang === "fr" ? "Suivi GPS" : lang === "es" ? "Rastreo GPS" : "GPS Tracking"}</span></p>
              </div>
            </div>
          </div>
        </div>

        {/* ══ Final CTA ══ */}
        <section
          className="cta-component text-white custom-bg cta-overlay large-padding"
          style={{
            "--439b4506": "#0a1628",
            "--43eebefe": "url('https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=1600&q=80')",
          } as any}
        >
          <h5 className="cta-component__kicker">{copy.companyName}</h5>
          <h2 className="cta-component__text is-h3">{copy.hero.subtitle}</h2>
          <Link href="/contact" className="button primary short">{copy.hero.ctaSecondary}</Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
