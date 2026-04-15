"use client";

import Link from "next/link";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { useLanguage } from "@/components/LanguageProvider";
import { SITE_CONTENT } from "@/lib/siteContent";

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
        <div className="awards-component kicker-gray custom-overlay" style={{ "--5e2e2337": "#f0f4f8", "--55d833ba": "#f0f4f8" } as any}>
          <div className="awards-component__container">
            <div className="awards-component__body">
              {copy.keyFigures.slice(0, 4).map((kf, i) => (
                <div key={i} className="awards-item text-semibold">
                  <div className="awards-item__icon">
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      {i === 0 && <><path d="M5 18H3c-.6 0-1-.4-1-1V7c0-.6.4-1 1-1h10c.6 0 1 .4 1 1v11"/><path d="M14 9h4l4 4v4c0 .6-.4 1-1 1h-2"/><circle cx="7" cy="18" r="2"/><circle cx="17" cy="18" r="2"/></>}
                      {i === 1 && <><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></>}
                      {i === 2 && <><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></>}
                      {i === 3 && <><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></>}
                    </svg>
                  </div>
                  <h3 className="awards-item__title">{kf.match(/\d+/)?.[0] || "✓"}</h3>
                  <p className="awards-item__text"><span>{kf}</span></p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Services (slider-up layout) ── */}
        <div
          className="slider-up-component custom-overlay"
          style={{ "--64155f60": "#ffffff", "--c1a3637e": "#f0f4f8" } as React.CSSProperties}
        >
          <div className="slider-up-component__container">
            <h2 className="slider-up-component__header-title">
              <span>{copy.servicesPageIntro}</span>
            </h2>
            <div className="slider-up-component__body">
              <div className="slider-up-component__text-list">
                {copy.services.map((service, idx) => (
                  <div key={service.id} className="slider-up-item text-item is-active">
                    <div className="slider-up-item__media-block">
                      <img
                        src={SERVICE_IMAGES[idx] || SERVICE_IMAGES[0]}
                        alt={service.title}
                        loading="lazy"
                      />
                    </div>
                    <div className="slider-up-item__text-block" style={{ opacity: 1 }}>
                      <h5 className="slider-up-item__kicker">0{idx + 1}</h5>
                      <h3 className="slider-up-item__title">{service.title}</h3>
                      <p className="slider-up-item__text">
                        {service.intro || service.bullets[0]}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="slider-up-component__img-list" style={{ position: "sticky", top: "20vh" }}>
                <div className="slider-up-item img-item is-active" style={{ display: "block", position: "relative" }}>
                  <div className="slider-up-item__media-block" style={{ display: "block", position: "relative", borderRadius: 12, overflow: "hidden", opacity: 1 }}>
                    <img
                      src={SERVICE_IMAGES[0]}
                      alt={copy.nav.services}
                      loading="lazy"
                      style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Service Detail Cards (content-card-component) ── */}
        <div className="content-card-component kicker-gray" style={{ "--323e8b66": "#f0f4f8" } as any}>
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
