"use client";

import Link from "next/link";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { useLanguage } from "@/components/LanguageProvider";
import { SITE_CONTENT } from "@/lib/siteContent";
import TruckIcon from "@/icons/truck-icon";
import ClockIcon from "@/icons/clock-icon";
import PinIcon from "@/icons/pin-icon";
import GlobeIcon from "@/icons/globe-icon";

const SERVICE_IMAGES = [
  "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=900&q=80",
  "https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=900&q=80",
  "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=900&q=80",
  "https://images.unsplash.com/photo-1494412651409-8963ce7935a7?w=900&q=80",
  "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=900&q=80",
  "https://images.unsplash.com/photo-1553413077-190dd305871c?w=900&q=80",
];

export default function ServicesPage() {
  const { lang } = useLanguage();
  const copy = SITE_CONTENT[lang];

  return (
    <>
      <Navbar />
      <main>
        {/* ══ 1. Hero — usp-component dark ══ */}
        <section className="usp-component text-white" style={{ "--430aca47": "#192538" } as any}>
          <div className="usp-component__heading">
            <h2 className="usp-component__title">{copy.servicesPageIntro}</h2>
          </div>
          <div className="usp-component__text">
            <p>{copy.hero.subtitle}</p>
          </div>
        </section>

        {/* ══ 2. Intro — cta-component ══ */}
        <div className="cta-component large-padding" style={{ "--439b4506": "#FFFFFF", "--43eebefe": "none" } as any}>
          <h5 className="cta-component__kicker">{copy.nav.services}</h5>
          <h3 className="cta-component__text is-h3">{copy.routesIntro}</h3>
        </div>

        {/* ══ 3. Key Figures (awards-component) ══ */}
        <div className="awards-component kicker-gray custom-overlay" style={{ "--5e2e2337": "#ffffff", "--55d833ba": "#ffffff" } as any}>
          <div className="awards-component__container">
            <div className="awards-component__body">
              {copy.keyFigures.slice(0, 4).map((kf, i) => (
                <div key={i} className="awards-item text-semibold">
                  <div className="awards-item__icon">
                    {i === 0 && <TruckIcon size={48} strokeWidth={1.5} />}
                    {i === 1 && <ClockIcon size={48} strokeWidth={1.5} />}
                    {i === 2 && <PinIcon size={48} strokeWidth={1.5} />}
                    {i === 3 && <GlobeIcon size={48} strokeWidth={1.5} />}
                  </div>
                  <h3 className="awards-item__title">{kf.match(/\d+/)?.[0] || "-"}</h3>
                  <p className="awards-item__text"><span>{kf}</span></p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Service Cards ── */}
        <div className="content-card-component kicker-gray" style={{ "--323e8b66": "#ffffff" } as any}>
          <div className="content-card-component__container">
            <div className="content-card-component__header">
              <h5 className="content-card-component__kicker">{copy.nav.services}</h5>
              <h2 className="content-card-component__title">{copy.servicesPageIntro}</h2>
            </div>
            <div className="content-card-component__body">
              {copy.services.map((service, idx) => (
                <div key={service.id} className="content-card-item" style={{ "--544cc3b0": "#ffffff" } as any}>
                  <img
                    className="content-card-item__image"
                    src={SERVICE_IMAGES[idx] || SERVICE_IMAGES[0]}
                    alt={service.title}
                    loading="lazy"
                  />
                  <div className="content-card-item__wrapper">
                    <div className="content-card-item__text-block">
                      <h5 className="content-card-item__kicker">0{idx + 1}</h5>
                      <h4 className="content-card-item__title">{service.title}</h4>
                      <p className="content-card-item__text">{service.intro || service.bullets.join(" · ")}</p>
                    </div>
                    <Link href="/contact" className="content-card-item__link">{copy.hero.ctaSecondary} →</Link>
                  </div>
                </div>
              ))}
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
