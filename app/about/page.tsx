"use client";

import Link from "next/link";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { useLanguage } from "@/components/LanguageProvider";
import { SITE_CONTENT } from "@/lib/siteContent";
import type { Lang } from "@/lib/siteContent";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import TruckIcon from "@/icons/truck-icon";
import ClockIcon from "@/icons/clock-icon";
import CrosshairIcon from "@/icons/crosshair-icon";
import GlobeIcon from "@/icons/globe-icon";
import UsersIcon from "@/icons/users-icon";
import ShieldIcon from "@/icons/shield-icon";
import StarIcon from "@/icons/star-icon";
import MailIcon from "@/icons/mail-icon";

const T = {
  heroTitle: { fr: "A propos de SSWM", en: "About SSWM", es: "Acerca de SSWM" } as Record<Lang, string>,
  heroSub: { fr: "Transport routier international entre le Maroc et l'Europe depuis Casablanca.", en: "International road transport between Morocco and Europe from Casablanca.", es: "Transporte internacional por carretera entre Marruecos y Europa desde Casablanca." } as Record<Lang, string>,
  whatWeDo: { fr: "Ce que nous faisons", en: "What we do", es: "Lo que hacemos" } as Record<Lang, string>,
  whatWeDoText: { fr: "Solutions de transport et logistique reliant le Maroc a l'Europe. Departs quotidiens, flotte geolocalise, temperature dirigee.", en: "Transport and logistics solutions connecting Morocco to Europe. Daily departures, GPS-tracked fleet, temperature-controlled.", es: "Soluciones de transporte y logistica conectando Marruecos con Europa. Salidas diarias, flota geolocalizada, temperatura controlada." } as Record<Lang, string>,
  directorTitle: { fr: "Le mot de la Directrice", en: "Director's Message", es: "Mensaje de la Directora" } as Record<Lang, string>,
  mission: { fr: "Notre mission", en: "Our mission", es: "Nuestra mision" } as Record<Lang, string>,
  missionText: { fr: "Rapprocher les entreprises par un service fiable, ponctuel et transparent.", en: "Bringing businesses closer through reliable, punctual and transparent service.", es: "Acercar empresas mediante un servicio fiable, puntual y transparente." } as Record<Lang, string>,
  strategy: { fr: "Notre strategie", en: "Our strategy", es: "Nuestra estrategia" } as Record<Lang, string>,
  strategyText: { fr: "Un reseau europeen solide. 11 pays, des departs quotidiens, un engagement sans faille.", en: "A strong European network. 11 countries, daily departures, unwavering commitment.", es: "Una red europea solida. 11 paises, salidas diarias, compromiso inquebrantable." } as Record<Lang, string>,
  commitment: { fr: "Notre engagement", en: "Our commitment", es: "Nuestro compromiso" } as Record<Lang, string>,
  commitmentText: { fr: "Ecoute client, maitrise reglementaire et amelioration continue.", en: "Client care, regulatory expertise and continuous improvement.", es: "Atencion al cliente, dominio regulatorio y mejora continua." } as Record<Lang, string>,
  atGlance: { fr: "SSWM en chiffres", en: "SSWM at a glance", es: "SSWM en cifras" } as Record<Lang, string>,
  valuesTitle: { fr: "Nos valeurs", en: "Our values", es: "Nuestros valores" } as Record<Lang, string>,
  valuesSubtitle: { fr: "Les piliers de notre excellence.", en: "The pillars of our excellence.", es: "Los pilares de nuestra excelencia." } as Record<Lang, string>,
};

const KPIS = (lang: Lang) => [
  { icon: <TruckIcon size={48} strokeWidth={1.5} />, value: "+180", label: { fr: "Partenaires", en: "Partners", es: "Socios" }[lang] },
  { icon: <GlobeIcon size={48} strokeWidth={1.5} />, value: "11", label: { fr: "Pays desservis", en: "Countries served", es: "Paises atendidos" }[lang] },
  { icon: <CrosshairIcon size={48} strokeWidth={1.5} />, value: "100%", label: { fr: "Flotte GPS", en: "GPS fleet", es: "Flota GPS" }[lang] },
  { icon: <ClockIcon size={48} strokeWidth={1.5} />, value: "3", label: { fr: "Ans renouvellement", en: "Year renewal", es: "Anos renovacion" }[lang] },
];

const VALUE_ICONS = [
  <MailIcon key="0" size={32} strokeWidth={1.5} />,
  <UsersIcon key="1" size={32} strokeWidth={1.5} />,
  <ShieldIcon key="2" size={32} strokeWidth={1.5} />,
  <GlobeIcon key="3" size={32} strokeWidth={1.5} />,
  <StarIcon key="4" size={32} strokeWidth={1.5} />,
  <UsersIcon key="5" size={32} strokeWidth={1.5} />,
];

type TDict = Record<Lang, string>;
type TShape = Record<string, TDict>;

function DirectorSection({ lang, T, companyName }: { lang: Lang; T: TShape; companyName: string }) {
  const items = [
    { kicker: T.mission[lang], text: T.missionText[lang] },
    { kicker: T.strategy[lang], text: T.strategyText[lang] },
    { kicker: T.commitment[lang], text: T.commitmentText[lang] },
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % items.length), 3500);
    return () => clearInterval(id);
  }, [items.length]);

  return (
    <div className="ssw-director-section">
      {/* ── Mobile layout ── */}
      <div className="ssw-director-mobile">
        <div className="ssw-director-mobile__photo-wrap">
          <img src="/images/ZainabOutana.jpeg" alt="La Directrice" className="ssw-director-mobile__photo" />
        </div>
        <div className="ssw-director-mobile__text-wrap">
          <h2 className="ssw-director-mobile__title">{T.directorTitle[lang]}</h2>
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <p className="ssw-director-mobile__kicker">{items[index].kicker}</p>
              <p className="ssw-director-mobile__text">{items[index].text}</p>
            </motion.div>
          </AnimatePresence>
          <div className="ssw-director-mobile__dots">
            {items.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`ssw-director-mobile__dot${i === index ? " active" : ""}`}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* ── Desktop layout ── */}
      <div className="ssw-director-desktop">
        <div className="ssw-director-desktop__container">
          <h2 className="ssw-director-desktop__title">{T.directorTitle[lang]}</h2>
          <div className="ssw-director-desktop__body">
            <div className="ssw-director-desktop__items">
              {items.map((item, i) => (
                <div
                  key={i}
                  className={`ssw-director-desktop__item${i === index ? " active" : ""}`}
                  onMouseEnter={() => setIndex(i)}
                >
                  <p className="ssw-director-desktop__kicker">{item.kicker}</p>
                  <p className="ssw-director-desktop__text">{item.text}</p>
                </div>
              ))}
            </div>
            <div className="ssw-director-desktop__photo-wrap">
              <img src="/images/ZainabOutana.jpeg" alt={companyName} className="ssw-director-desktop__photo" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function AboutPage() {
  const { lang } = useLanguage();
  const copy = SITE_CONTENT[lang];
  const kpis = KPIS(lang);

  return (
    <>
      <Navbar />
      <main>
        {/* 1. Hero */}
        <section className="usp-component text-white" style={{ "--430aca47": "#192538" } as any}>
          <div className="usp-component__heading">
            <h2 className="usp-component__title">{T.heroTitle[lang]}</h2>
          </div>
          <div className="usp-component__text">
            <p>{T.heroSub[lang]}</p>
          </div>
        </section>

        {/* 2. What we do */}
        <div className="cta-component large-padding" style={{ "--439b4506": "#FFFFFF", "--43eebefe": "none" } as any}>
          <h5 className="cta-component__kicker">{T.whatWeDo[lang]}</h5>
          <h3 className="cta-component__text is-h3">{T.whatWeDoText[lang]}</h3>
        </div>

        {/* 3. Mission / Strategy / Commitment */}
        <DirectorSection lang={lang} T={T} companyName={copy.companyName} />

        {/* 4. KPIs */}
        <div className="awards-component kicker-gray custom-overlay" style={{ "--5e2e2337": "#ffffff", "--55d833ba": "#ffffff" } as any}>
          <div className="awards-component__container">
            <div className="awards-component__header">
              <h5 className="awards-component__kicker">{T.atGlance[lang]}</h5>
            </div>
            <div className="awards-component__body">
              {kpis.map((kpi, i) => (
                <div key={i} className="awards-item text-semibold">
                  <div className="awards-item__icon">{kpi.icon}</div>
                  <h3 className="awards-item__title">{kpi.value}</h3>
                  <p className="awards-item__text"><span>{kpi.label}</span></p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 5. Values */}
        <div className="cta-component large-padding" style={{ "--439b4506": "#FFFFFF", "--43eebefe": "none" } as any}>
          <h5 className="cta-component__kicker">{T.valuesTitle[lang]}</h5>
          <h3 className="cta-component__text is-h3">{T.valuesSubtitle[lang]}</h3>
        </div>
        <section style={{ background: "#fff", padding: "0 24px 80px" }}>
          <div style={{ maxWidth: 1120, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
            {copy.values.map((value, i) => (
              <div key={value} style={{ background: "#192538", borderRadius: 14, padding: "32px 28px", color: "#fff" }}>
                <div style={{ marginBottom: 16, color: "rgba(255,255,255,0.7)" }}>{VALUE_ICONS[i]}</div>
                <h4 style={{ fontSize: 20, fontWeight: 600, marginBottom: 4 }}>{value}</h4>
              </div>
            ))}
          </div>
        </section>

        {/* 6. Final CTA */}
        <section
          className="cta-component text-white custom-bg cta-overlay large-padding"
          style={{ "--439b4506": "#0a1628", "--43eebefe": "url('https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=1600&q=80')" } as any}
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
