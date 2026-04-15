"use client";

import Link from "next/link";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { useLanguage } from "@/components/LanguageProvider";
import { SITE_CONTENT } from "@/lib/siteContent";
import TruckIcon from "@/icons/truck-icon";
import ClockIcon from "@/icons/clock-icon";
import CrosshairIcon from "@/icons/crosshair-icon";
import GlobeIcon from "@/icons/globe-icon";

export default function AboutPage() {
  const { lang } = useLanguage();
  const copy = SITE_CONTENT[lang];

  const kpis = [
    { value: "+180", label: lang === "fr" ? "Cartes grises partenaires" : lang === "es" ? "Tarjetas de circulación" : "Partner registrations" },
    { value: "11", label: lang === "fr" ? "Pays desservis" : lang === "es" ? "Países atendidos" : "Countries served" },
    { value: "100%", label: lang === "fr" ? "Flotte géolocalisable" : lang === "es" ? "Flota geolocalizable" : "GPS-trackable fleet" },
    { value: "3 ans", label: lang === "fr" ? "Renouvellement flotte" : lang === "es" ? "Renovación de flota" : "Fleet renewal cycle" },
  ];

  const whatWeDo = lang === "fr" ? "Ce que nous faisons" : lang === "es" ? "Lo que hacemos" : "What we do";
  const ourMission = lang === "fr" ? "Notre mission" : lang === "es" ? "Nuestra misión" : "Our mission";
  const ourStrategy = lang === "fr" ? "Notre stratégie" : lang === "es" ? "Nuestra estrategia" : "Our strategy";
  const ourCommitment = lang === "fr" ? "Notre engagement" : lang === "es" ? "Nuestro compromiso" : "Our commitment";
  const atAGlance = lang === "fr" ? `${copy.companyName} en un coup d'œil` : lang === "es" ? `${copy.companyName} de un vistazo` : `${copy.companyName} at a glance`;

  return (
    <>
      <Navbar />
      <main>
        {/* ══ 1. Hero — usp-component dark (like Wallbox "Nous sommes Wallbox") ══ */}
        <section className="usp-component text-white" style={{ "--430aca47": "#192538" } as any}>
          <div className="usp-component__heading">
            <h2 className="usp-component__title">{copy.about.title}</h2>
          </div>
          <div className="usp-component__text">
            <p>{copy.about.paragraphs[0]}</p>
          </div>
        </section>

        {/* ══ 2. "Ce que nous faisons" — cta intro (like Wallbox) ══ */}
        <div className="cta-component large-padding" style={{ "--439b4506": "#FFFFFF", "--43eebefe": "none" } as any}>
          <h5 className="cta-component__kicker">{whatWeDo}</h5>
          <h3 className="cta-component__text is-h3">{copy.about.paragraphs[1]}</h3>
        </div>

        {/* ══ 3. Director message — slider-up with image ══ */}
        <div
          className="slider-up-component custom-overlay"
          style={{ "--64155f60": "#f0f4f8", "--c1a3637e": "#ffffff" } as React.CSSProperties}
        >
          <div className="slider-up-component__container">
            <h2 className="slider-up-component__header-title">
              <span>{copy.about.director}</span>
            </h2>
            <div className="slider-up-component__body">
              <div className="slider-up-component__text-list">
                <div className="slider-up-item text-item is-active">
                  <div className="slider-up-item__media-block">
                    <img src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=80" className="slider-up-item__img" alt={copy.companyName} loading="lazy" />
                  </div>
                  <div className="slider-up-item__text-block" style={{ opacity: 1 }}>
                    <h5 className="slider-up-item__kicker">{ourMission}</h5>
                    <h3 className="slider-up-item__title">{copy.about.paragraphs[2]}</h3>
                  </div>
                </div>
                <div className="slider-up-item text-item is-active">
                  <div className="slider-up-item__media-block">
                    <img src="https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&q=80" className="slider-up-item__img" alt={copy.companyName} loading="lazy" />
                  </div>
                  <div className="slider-up-item__text-block" style={{ opacity: 1 }}>
                    <h5 className="slider-up-item__kicker">{ourStrategy}</h5>
                    <h3 className="slider-up-item__title">{copy.about.paragraphs[4]}</h3>
                  </div>
                </div>
                <div className="slider-up-item text-item is-active">
                  <div className="slider-up-item__media-block">
                    <img src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80" className="slider-up-item__img" alt={copy.companyName} loading="lazy" />
                  </div>
                  <div className="slider-up-item__text-block" style={{ opacity: 1 }}>
                    <h5 className="slider-up-item__kicker">{ourCommitment}</h5>
                    <h3 className="slider-up-item__title">{copy.about.paragraphs[6]}</h3>
                  </div>
                </div>
              </div>
              <div className="slider-up-component__img-list">
                <div className="slider-up-item img-item is-active" style={{ display: "block", position: "relative" }}>
                  <div className="slider-up-item__media-block" style={{ display: "block", position: "relative", borderRadius: 12, overflow: "hidden", opacity: 1 }}>
                    <img src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=80" alt={copy.companyName} loading="lazy" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ══ 4. "SSWM en un coup d'œil" — awards stats (like Wallbox) ══ */}
        <div className="cta-component large-padding" style={{ "--439b4506": "#FFFFFF", "--43eebefe": "none" } as any}>
          <h3 className="cta-component__text is-h3">{atAGlance}</h3>
        </div>
        <div className="awards-component kicker-gray custom-overlay" style={{ "--5e2e2337": "#ffffff", "--55d833ba": "#f0f4f8" } as any}>
          <div className="awards-component__container">
            <div className="awards-component__body">
              <div className="awards-item text-semibold">
                <div className="awards-item__icon"><TruckIcon size={48} strokeWidth={1.5} /></div>
                <h3 className="awards-item__title">{kpis[0].value}</h3>
                <p className="awards-item__text"><span>{kpis[0].label}</span></p>
              </div>
              <div className="awards-item text-semibold">
                <div className="awards-item__icon"><GlobeIcon size={48} strokeWidth={1.5} /></div>
                <h3 className="awards-item__title">{kpis[1].value}</h3>
                <p className="awards-item__text"><span>{kpis[1].label}</span></p>
              </div>
              <div className="awards-item text-semibold">
                <div className="awards-item__icon"><CrosshairIcon size={48} strokeWidth={1.5} /></div>
                <h3 className="awards-item__title">{kpis[2].value}</h3>
                <p className="awards-item__text"><span>{kpis[2].label}</span></p>
              </div>
              <div className="awards-item text-semibold">
                <div className="awards-item__icon"><ClockIcon size={48} strokeWidth={1.5} /></div>
                <h3 className="awards-item__title">{kpis[3].value}</h3>
                <p className="awards-item__text"><span>{kpis[3].label}</span></p>
              </div>
            </div>
          </div>
        </div>

        {/* ══ 5. Sustainability-style — key figures detail (like Wallbox main-features) ══ */}
        <section className="usp-component" style={{ "--430aca47": "#f0f4f8" } as any}>
          <div className="usp-component__heading">
            <h5 className="usp-component__kicker">{copy.keyFiguresTitle}</h5>
            <h2 className="usp-component__title">{copy.about.paragraphs[3]}</h2>
          </div>
        </section>

        {/* ══ 6. Values — content-card-component grid ══ */}
        <div className="content-card-component kicker-gray custom-overlay" style={{ "--323e8b66": "#ffffff", "--53fc90eb": "#f0f4f8", "--3292055e": "none" } as any}>
          <div className="content-card-component__container">
            <div className="content-card-component__header">
              <h5 className="content-card-component__kicker">{copy.valuesTitle}</h5>
              <h2 className="content-card-component__title">{copy.hero.tagline}</h2>
            </div>
            <div className="content-card-component__body">
              {copy.values.map((value, i) => (
                <div key={value} className="content-card-item" style={{ "--544cc3b0": "#192538" } as any}>
                  <div className="content-card-item__wrapper less-padding">
                    <div className="content-card-item__text-block">
                      <h4 className="content-card-item__title" style={{ color: "#fff" }}>{value}</h4>
                      <p className="content-card-item__text" style={{ color: "rgba(255,255,255,0.85)" }}>{copy.about.paragraphs[Math.min(i + 2, copy.about.paragraphs.length - 1)].slice(0, 100)}…</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ══ 7. Final CTA — cta-component with image (like Wallbox "Get in charge") ══ */}
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
