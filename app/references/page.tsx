"use client";

import Link from "next/link";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { useLanguage } from "@/components/LanguageProvider";
import { SITE_CONTENT } from "@/lib/siteContent";

type TestimonialData = {
  text: { fr: string; en: string; es: string };
  author: string;
  company: string;
};

const TESTIMONIALS: TestimonialData[] = [
  {
    text: {
      fr: "SAFE SOLUTION WHEELS MOROCCO a transformé notre chaîne d'approvisionnement. Leurs délais de livraison sont exceptionnels et le suivi GPS en temps réel nous donne une tranquillité totale.",
      en: "SAFE SOLUTION WHEELS MOROCCO has transformed our supply chain. Their delivery times are exceptional and real-time GPS tracking gives us total peace of mind.",
      es: "SAFE SOLUTION WHEELS MOROCCO ha transformado nuestra cadena de suministro. Sus tiempos de entrega son excepcionales y el rastreo GPS en tiempo real nos da total tranquilidad.",
    },
    author: "Directeur Logistique",
    company: "Agroalimentaire — France",
  },
  {
    text: {
      fr: "Le professionnalisme de l'équipe SSW est remarquable. La gestion du transport frigorifique pour nos produits pharmaceutiques est irréprochable.",
      en: "The professionalism of the SSW team is remarkable. The management of refrigerated transport for our pharmaceutical products is impeccable.",
      es: "La profesionalidad del equipo de SSW es notable. La gestión del transporte refrigerado para nuestros productos farmacéuticos es impecable.",
    },
    author: "Responsable Supply Chain",
    company: "Pharmaceutique — Belgique",
  },
  {
    text: {
      fr: "Nous travaillons avec SSW depuis plusieurs années. Leur réseau européen est solide, et leur flexibilité face aux imprévus est un vrai atout.",
      en: "We've been working with SSW for several years. Their European network is solid, and their flexibility in the face of unforeseen events is a real asset.",
      es: "Llevamos varios años trabajando con SSW. Su red europea es sólida y su flexibilidad ante imprevistos es una verdadera ventaja.",
    },
    author: "Gérant",
    company: "Export Agricole — Maroc",
  },
  {
    text: {
      fr: "Service impeccable pour le transport de nos fruits et légumes. Les camions frigorifiques sont toujours en parfait état et les conducteurs très professionnels.",
      en: "Impeccable service for transporting our fruits and vegetables. The refrigerated trucks are always in perfect condition and the drivers very professional.",
      es: "Servicio impecable para el transporte de nuestras frutas y verduras. Los camiones frigoríficos siempre están en perfecto estado y los conductores son muy profesionales.",
    },
    author: "Directeur Commercial",
    company: "Distribution — Espagne",
  },
];

type ClientEntry = {
  name: string;
  sector: { fr: string; en: string; es: string };
};

const SECTOR_ICONS: Record<string, React.ReactNode> = {
  Agroalimentaire: <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M7 20h10"/><path d="M10 20c5.5-2.5.8-6.4 3-10"/><path d="M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8Z"/><path d="M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2Z"/></svg>,
  Pharmaceutique: <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z"/><path d="m8.5 8.5 7 7"/></svg>,
  Industriel: <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z"/><path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/><path d="M12 2v2"/><path d="M12 22v-2"/><path d="m17 20.66-1-1.73"/><path d="M11 10.27 7 3.34"/><path d="m20.66 17-1.73-1"/><path d="m3.34 7 1.73 1"/><path d="M14 12h8"/><path d="M2 12h2"/><path d="m20.66 7-1.73 1"/><path d="m3.34 17 1.73-1"/><path d="m17 3.34-1 1.73"/><path d="m11 13.73-4 6.93"/></svg>,
  Distribution: <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7"/><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4"/><path d="M2 7h20"/><path d="M22 7v3a2 2 0 0 1-2 2a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12a2 2 0 0 1-2-2V7"/></svg>,
  Export: <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>,
  Textile: <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>,
  Automobile: <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><path d="M9 17h6"/><circle cx="17" cy="17" r="2"/></svg>,
  Cosmétique: <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"/><circle cx="12" cy="8" r="6"/></svg>,
};

const CLIENT_SECTORS: ClientEntry[] = [
  { name: "Agroalimentaire", sector: { fr: "Fruits & Légumes", en: "Fruits & Vegetables", es: "Frutas y Verduras" } },
  { name: "Pharmaceutique", sector: { fr: "Produits de santé", en: "Health products", es: "Productos de salud" } },
  { name: "Industriel", sector: { fr: "Pièces & composants", en: "Parts & components", es: "Piezas y componentes" } },
  { name: "Distribution", sector: { fr: "Grande distribution", en: "Retail", es: "Gran distribución" } },
  { name: "Export", sector: { fr: "Commerce international", en: "International trade", es: "Comercio internacional" } },
  { name: "Textile", sector: { fr: "Mode & habillement", en: "Fashion & clothing", es: "Moda y vestimenta" } },
  { name: "Automobile", sector: { fr: "Pièces automobiles", en: "Auto parts", es: "Piezas automotrices" } },
  { name: "Cosmétique", sector: { fr: "Beauté & soins", en: "Beauty & care", es: "Belleza y cuidado" } },
];

export default function ReferencesPage() {
  const { lang } = useLanguage();
  const copy = SITE_CONTENT[lang];

  return (
    <>
      <Navbar />
      <main>
        {/* ══ 1. Hero — usp-component dark ══ */}
        <section className="usp-component text-white" style={{ "--430aca47": "#192538" } as any}>
          <div className="usp-component__heading">
            <h2 className="usp-component__title">{copy.referencesTitle}</h2>
          </div>
          <div className="usp-component__text">
            <p>{copy.hero.subtitle}</p>
          </div>
        </section>

        {/* ══ 2. Intro ══ */}
        <div className="cta-component large-padding" style={{ "--439b4506": "#FFFFFF", "--43eebefe": "none" } as any}>
          <h5 className="cta-component__kicker">{copy.nav.references}</h5>
          <h3 className="cta-component__text is-h3">{copy.referencesPlaceholder}</h3>
        </div>

        {/* ══ 3. USP ══ */}
        <section className="usp-component" style={{ "--430aca47": "#f0f4f8" } as any}>
          <div className="usp-component__heading">
            <h2 className="usp-component__title">{copy.referencesTitle}</h2>
          </div>
          <div className="usp-component__text">
            <p>{copy.referencesPlaceholder}</p>
          </div>
        </section>

        {/* ── Testimonials (content-card-component) ── */}
        <div className="content-card-component kicker-gray" style={{ "--323e8b66": "#f0f4f8" } as any}>
          <div className="content-card-component__container">
            <div className="content-card-component__header">
              <h5 className="content-card-component__kicker">{copy.nav.references}</h5>
              <h2 className="content-card-component__title">{copy.referencesTitle}</h2>
            </div>
            <div className="content-card-component__body">
              {TESTIMONIALS.map((t, idx) => (
                <div key={idx} className="content-card-item width-50" style={{ "--544cc3b0": "#ffffff" } as any}>
                  <div className="content-card-item__wrapper">
                    <div className="content-card-item__text-block">
                      <h5 className="content-card-item__kicker" style={{ color: "#f4b400" }}>★★★★★</h5>
                      <p className="content-card-item__text">&ldquo;{t.text[lang]}&rdquo;</p>
                    </div>
                    <div>
                      <h4 className="content-card-item__title" style={{ fontSize: 18 }}>{t.author}</h4>
                      <span className="content-card-item__kicker">{t.company}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Client Sectors ── */}
        <section style={{ background: "#fff", padding: "80px 24px" }}>
          <div style={{ maxWidth: 1120, margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: 48 }}>
              <h5 style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#192538", marginBottom: 12 }}>{copy.companyName}</h5>
              <h2 style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 500, color: "#202124", lineHeight: 1.12 }}>
                {lang === "fr" ? "Secteurs de nos clients" : lang === "es" ? "Sectores de nuestros clientes" : "Our clients' sectors"}
              </h2>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: 20 }}>
              {CLIENT_SECTORS.map((client) => (
                <div key={client.name} style={{
                  background: "#f0f4f8",
                  borderRadius: 16,
                  padding: "32px 24px",
                  textAlign: "center",
                  transition: "transform 0.2s, box-shadow 0.2s",
                }}>
                  <div style={{ width: 56, height: 56, borderRadius: 14, background: "rgba(25,37,56,0.08)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px", color: "#192538" }}>{SECTOR_ICONS[client.name]}</div>
                  <h4 style={{ fontSize: 18, fontWeight: 600, color: "#202124", marginBottom: 6 }}>{client.name}</h4>
                  <p style={{ fontSize: 14, color: "#5B5555", lineHeight: 1.5 }}>{client.sector[lang]}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Stats (awards-component) ── */}
        <div className="awards-component kicker-gray custom-overlay" style={{ "--5e2e2337": "#f0f4f8", "--55d833ba": "#ffffff" } as any}>
          <div className="awards-component__container">
            <div className="awards-component__header">
              <h5 className="awards-component__kicker">{copy.keyFiguresTitle}</h5>
              <h2 className="awards-component__title">{copy.hero.subtitle}</h2>
            </div>
            <div className="awards-component__body">
              <div className="awards-item text-semibold">
                <div className="awards-item__icon">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 18H3c-.6 0-1-.4-1-1V7c0-.6.4-1 1-1h10c.6 0 1 .4 1 1v11"/><path d="M14 9h4l4 4v4c0 .6-.4 1-1 1h-2"/><circle cx="7" cy="18" r="2"/><circle cx="17" cy="18" r="2"/></svg>
                </div>
                <h3 className="awards-item__title">+180</h3>
                <p className="awards-item__text"><span>{lang === "fr" ? "Partenaires affrétés" : lang === "es" ? "Socios fletadores" : "Chartered partners"}</span></p>
              </div>
              <div className="awards-item text-semibold">
                <div className="awards-item__icon">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
                </div>
                <h3 className="awards-item__title">11</h3>
                <p className="awards-item__text"><span>{lang === "fr" ? "Pays desservis" : lang === "es" ? "Países atendidos" : "Countries served"}</span></p>
              </div>
              <div className="awards-item text-semibold">
                <div className="awards-item__icon">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="16" height="20" x="4" y="2" rx="2" ry="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01M16 6h.01M12 6h.01M12 10h.01M12 14h.01M16 10h.01M16 14h.01M8 10h.01M8 14h.01"/></svg>
                </div>
                <h3 className="awards-item__title">8+</h3>
                <p className="awards-item__text"><span>{lang === "fr" ? "Secteurs d'activité" : lang === "es" ? "Sectores de actividad" : "Industry sectors"}</span></p>
              </div>
              <div className="awards-item text-semibold">
                <div className="awards-item__icon">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/><path d="m9 12 2 2 4-4"/></svg>
                </div>
                <h3 className="awards-item__title">100%</h3>
                <p className="awards-item__text"><span>{lang === "fr" ? "Satisfaction client" : lang === "es" ? "Satisfacción del cliente" : "Client satisfaction"}</span></p>
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
