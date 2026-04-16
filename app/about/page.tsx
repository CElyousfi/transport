"use client";

import Link from "next/link";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { useLanguage } from "@/components/LanguageProvider";
import { SITE_CONTENT } from "@/lib/siteContent";
import type { Lang } from "@/lib/siteContent";
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
        <div className="slider-up-component custom-overlay" style={{ "--64155f60": "#ffffff", "--c1a3637e": "#ffffff" } as React.CSSProperties}>
          <div className="slider-up-component__container">
            <h2 className="slider-up-component__header-title"><span>{T.directorTitle[lang]}</span></h2>
            <div className="slider-up-component__body">
              <div className="slider-up-component__text-list">
                {[
                  { kicker: T.mission[lang], text: T.missionText[lang], img: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=80" },
                  { kicker: T.strategy[lang], text: T.strategyText[lang], img: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&q=80" },
                  { kicker: T.commitment[lang], text: T.commitmentText[lang], img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80" },
                ].map((item, i) => (
                  <div key={i} className="slider-up-item text-item is-active">
                    <div className="slider-up-item__media-block">
                      <img src={item.img} className="slider-up-item__img" alt={item.kicker} loading="lazy" />
                    </div>
                    <div className="slider-up-item__text-block" style={{ opacity: 1 }}>
                      <h5 className="slider-up-item__kicker">{item.kicker}</h5>
                      <h3 className="slider-up-item__title">{item.text}</h3>
                    </div>
                  </div>
                ))}
              </div>
              <div className="slider-up-component__img-list">
                <div className="slider-up-item img-item is-active" style={{ display: "block", position: "relative" }}>
                  <div className="slider-up-item__media-block" style={{ display: "block", position: "relative", borderRadius: 12, overflow: "hidden", opacity: 1 }}>
                    <img src="/images/ZainabOutana.jpeg" alt={copy.companyName} loading="lazy" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

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
