"use client";

import Link from "next/link";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { useLanguage } from "@/components/LanguageProvider";
import { SITE_CONTENT } from "@/lib/siteContent";
import type { Lang } from "@/lib/siteContent";
import LeafIcon from "@/icons/leaf-icon";
import PillIcon from "@/icons/pill-icon";
import SettingsIcon from "@/icons/settings-icon";
import PackageIcon from "@/icons/package-icon";
import GlobeIcon from "@/icons/globe-icon";
import ShoppingBagIcon from "@/icons/shopping-bag-icon";
import TruckIcon from "@/icons/truck-icon";
import StarIcon from "@/icons/star-icon";
import BuildingIcon from "@/icons/building-icon";
import ShieldIcon from "@/icons/shield-icon";

type TestimonialData = {
  text: Record<Lang, string>;
  author: Record<Lang, string>;
  company: string;
};

const TESTIMONIALS: TestimonialData[] = [
  {
    text: {
      fr: "Delais exceptionnels et suivi GPS en temps reel. SSW a transforme notre supply chain.",
      en: "Exceptional delivery times and real-time GPS tracking. SSW transformed our supply chain.",
      es: "Plazos excepcionales y rastreo GPS en tiempo real. SSW transformo nuestra cadena.",
    },
    author: { fr: "Directeur Logistique", en: "Logistics Director", es: "Director de Logistica" },
    company: "Agroalimentaire — France",
  },
  {
    text: {
      fr: "Gestion irreprochable du transport frigorifique pour nos produits pharmaceutiques.",
      en: "Impeccable management of refrigerated transport for our pharmaceutical products.",
      es: "Gestion impecable del transporte refrigerado para nuestros productos farmaceuticos.",
    },
    author: { fr: "Responsable Supply Chain", en: "Supply Chain Manager", es: "Responsable Supply Chain" },
    company: "Pharmaceutique — Belgique",
  },
  {
    text: {
      fr: "Reseau europeen solide, flexibilite remarquable face aux imprevus.",
      en: "Solid European network, remarkable flexibility with unexpected situations.",
      es: "Red europea solida, flexibilidad notable ante imprevistos.",
    },
    author: { fr: "Gerant", en: "Manager", es: "Gerente" },
    company: "Export Agricole — Maroc",
  },
  {
    text: {
      fr: "Service impeccable. Camions frigorifiques en parfait etat, conducteurs professionnels.",
      en: "Impeccable service. Refrigerated trucks in perfect condition, professional drivers.",
      es: "Servicio impecable. Camiones frigorificos en perfecto estado, conductores profesionales.",
    },
    author: { fr: "Directeur Commercial", en: "Sales Director", es: "Director Comercial" },
    company: "Distribution — Espagne",
  },
];

type ClientEntry = {
  name: string;
  sector: { fr: string; en: string; es: string };
};

const SECTOR_ICONS: Record<string, React.ReactNode> = {
  Agroalimentaire: <LeafIcon size={36} strokeWidth={1.5} />,
  Pharmaceutique: <PillIcon size={36} strokeWidth={1.5} />,
  Industriel: <SettingsIcon size={36} strokeWidth={1.5} />,
  Distribution: <PackageIcon size={36} strokeWidth={1.5} />,
  Export: <GlobeIcon size={36} strokeWidth={1.5} />,
  Textile: <ShoppingBagIcon size={36} strokeWidth={1.5} />,
  Automobile: <TruckIcon size={36} strokeWidth={1.5} />,
  "Cosmétique": <StarIcon size={36} strokeWidth={1.5} />,
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
          <h3 className="cta-component__text is-h3">{copy.hero.subtitle}</h3>
        </div>

        {/* ── Testimonials ── */}
        <div className="content-card-component kicker-gray" style={{ "--323e8b66": "#ffffff" } as any}>
          <div className="content-card-component__container">
            <div className="content-card-component__header">
              <h5 className="content-card-component__kicker">{lang === "fr" ? "Temoignages" : lang === "es" ? "Testimonios" : "Testimonials"}</h5>
              <h2 className="content-card-component__title">{copy.referencesTitle}</h2>
            </div>
            <div className="content-card-component__body">
              {TESTIMONIALS.map((t, idx) => (
                <div key={idx} className="content-card-item width-50" style={{ "--544cc3b0": "#ffffff" } as any}>
                  <div className="content-card-item__wrapper">
                    <div className="content-card-item__text-block">
                      <h5 className="content-card-item__kicker" style={{ color: "#f4b400", display: "flex", gap: 2 }}>
                        {[0,1,2,3,4].map(s => <StarIcon key={s} size={16} color="#f4b400" fill="#f4b400" strokeWidth={0} />)}
                      </h5>
                      <p className="content-card-item__text">&ldquo;{t.text[lang]}&rdquo;</p>
                    </div>
                    <div>
                      <h4 className="content-card-item__title" style={{ fontSize: 18 }}>{t.author[lang]}</h4>
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
                  background: "#fff",
                  border: "1px solid #e5e8ed",
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
        <div className="awards-component kicker-gray custom-overlay" style={{ "--5e2e2337": "#ffffff", "--55d833ba": "#ffffff" } as any}>
          <div className="awards-component__container">
            <div className="awards-component__header">
              <h5 className="awards-component__kicker">{copy.keyFiguresTitle}</h5>
              <h2 className="awards-component__title">{copy.hero.subtitle}</h2>
            </div>
            <div className="awards-component__body">
              <div className="awards-item text-semibold">
                <div className="awards-item__icon">
                  <TruckIcon size={48} strokeWidth={1.5} />
                </div>
                <h3 className="awards-item__title">+180</h3>
                <p className="awards-item__text"><span>{lang === "fr" ? "Partenaires affrétés" : lang === "es" ? "Socios fletadores" : "Chartered partners"}</span></p>
              </div>
              <div className="awards-item text-semibold">
                <div className="awards-item__icon">
                  <GlobeIcon size={48} strokeWidth={1.5} />
                </div>
                <h3 className="awards-item__title">11</h3>
                <p className="awards-item__text"><span>{lang === "fr" ? "Pays desservis" : lang === "es" ? "Países atendidos" : "Countries served"}</span></p>
              </div>
              <div className="awards-item text-semibold">
                <div className="awards-item__icon">
                  <BuildingIcon size={48} strokeWidth={1.5} />
                </div>
                <h3 className="awards-item__title">8+</h3>
                <p className="awards-item__text"><span>{lang === "fr" ? "Secteurs d'activité" : lang === "es" ? "Sectores de actividad" : "Industry sectors"}</span></p>
              </div>
              <div className="awards-item text-semibold">
                <div className="awards-item__icon">
                  <ShieldIcon size={48} strokeWidth={1.5} />
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
