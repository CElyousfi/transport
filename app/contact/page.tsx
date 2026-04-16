"use client";

import Link from "next/link";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { useLanguage } from "@/components/LanguageProvider";
import { SITE_CONTENT } from "@/lib/siteContent";
import MailIcon from "@/icons/mail-icon";
import PhoneIcon from "@/icons/phone-icon";
import PinIcon from "@/icons/pin-icon";
import ClockIcon from "@/icons/clock-icon";
import GlobeIcon from "@/icons/globe-icon";
import ArrowRightIcon from "@/icons/arrow-right-icon";

export default function ContactPage() {
  const { lang } = useLanguage();
  const copy = SITE_CONTENT[lang];

  const addressLabel = lang === "fr" ? "Adresse" : lang === "es" ? "Dirección" : "Address";
  const hoursLabel = lang === "fr" ? "Horaires" : lang === "es" ? "Horario" : "Hours";
  const address = "Casablanca, Maroc";
  const hours = lang === "fr" ? "Lun - Ven : 8h00 - 18h00" : lang === "es" ? "Lun - Vie: 8:00 - 18:00" : "Mon - Fri: 8:00 AM - 6:00 PM";
  const getQuote = lang === "fr" ? "Demander un devis" : lang === "es" ? "Solicitar presupuesto" : "Request a quote";
  const getQuoteDesc = lang === "fr" ? "Communiquez-nous vos coordonnées afin de vous aider à choisir la solution la plus adaptée à vos besoins." : lang === "es" ? "Comparta sus datos para que podamos ofrecerle la solución más adecuada." : "Share your details so we can find the best solution for your needs.";
  const becomePartner = lang === "fr" ? "Devenir partenaire" : lang === "es" ? "Ser socio" : "Become a partner";
  const becomePartnerDesc = lang === "fr" ? "Rejoignez-nous pour offrir vos services de transport dans votre région. Envoyez-nous votre demande." : lang === "es" ? "Únase a nosotros para ofrecer servicios de transporte en su región." : "Join us to offer transport services in your region. Send us your request.";
  const findUs = lang === "fr" ? "Où nous trouver" : lang === "es" ? "Dónde encontrarnos" : "Where to find us";
  const offices = lang === "fr" ? "Nos bureaux" : lang === "es" ? "Nuestras oficinas" : "Our offices";
  const hqLabel = lang === "fr" ? "Siège social" : lang === "es" ? "Sede social" : "Headquarters";
  const networkLabel = lang === "fr" ? "Réseau européen" : lang === "es" ? "Red europea" : "European network";
  const networkDesc = lang === "fr" ? "Notre réseau couvre 11 pays européens avec des départs quotidiens. Pour toute demande de transport, contactez-nous." : lang === "es" ? "Nuestra red cubre 11 países europeos con salidas diarias." : "Our network covers 11 European countries with daily departures. Contact us for any transport request.";

  const inputStyle: React.CSSProperties = {
    border: "1.5px solid #d6dbe3", borderRadius: 10, padding: "12px 14px",
    fontSize: 15, color: "#202124", background: "#fff", outline: "none",
    width: "100%", fontFamily: "inherit",
  };
  const labelStyle: React.CSSProperties = { fontSize: 14, fontWeight: 500, color: "#5B5555" };
  const fieldStyle: React.CSSProperties = { display: "flex", flexDirection: "column", gap: 6 };

  return (
    <>
      <Navbar />
      <main>
        {/* ══ 1. Hero title — cta-component no-padding-top (like Wallbox contact) ══ */}
        <div className="cta-component large-padding" style={{ "--439b4506": "#FFFFFF", "--43eebefe": "none" } as any}>
          <h2 className="cta-component__text is-display-02" style={{ marginBottom: 8 }}>{copy.contact.title}</h2>
          <p className="cta-component__text is-h3">{copy.hero.subtitle}</p>
        </div>

        {/* ══ 2. Action cards — cards-component (like Wallbox green cards) ══ */}
        <div className="cards-component" style={{ "--3467eec0": "#FFFFFF" } as any}>
          <div className="cards-component__column">
            <Link href="#form" className="cards-component-item text-white" style={{ "--0632786e": "#192538", textDecoration: "none" } as any}>
              <h4 className="cards-component-item__title">{getQuote}</h4>
              <p className="cards-component-item__description">{getQuoteDesc}</p>
              <span style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: 40, height: 40, borderRadius: "50%", border: "2px solid #fff", marginTop: "auto" }}>
                <ArrowRightIcon size={20} color="#fff" />
              </span>
            </Link>
          </div>
          <div className="cards-component__column">
            <Link
              className="cards-component-item custom-bg text-white"
              href="/contact#partner"
              style={{ "--0632786e": "#FFFFFF", "--058b847e": "url('https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&q=80')", "--d0bc404a": "url('https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80')", "--d0bc41d0": "url('https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80')" } as any}
            >
              <div className="cards-component-item__content">
                <h4 className="cards-component-item__title">{becomePartner}</h4>
                <p className="cards-component-item__description">{becomePartnerDesc}</p>
                <span style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: 40, height: 40, borderRadius: "50%", border: "2px solid #fff", marginTop: "auto" }}>
                  <ArrowRightIcon size={20} color="#fff" />
                </span>
              </div>
            </Link>
          </div>
        </div>

        {/* ══ 3. Contact channels — cta + awards (like Wallbox "Assistance technique") ══ */}
        <div className="cta-component large-padding" style={{ "--439b4506": "#FFFFFF", "--43eebefe": "none" } as any}>
          <h5 className="cta-component__kicker">{copy.companyName}</h5>
          <h3 className="cta-component__text is-h3">{copy.contact.title}</h3>
        </div>
        <div className="awards-component kicker-gray custom-overlay" style={{ "--5e2e2337": "#ffffff", "--55d833ba": "#ffffff" } as any}>
          <div className="awards-component__container">
            <div className="awards-component__body">
              <div className="awards-item text-semibold">
                <div className="awards-item__icon">
                  <MailIcon size={48} strokeWidth={1.5} />
                </div>
                <h3 className="awards-item__title">{copy.contact.emailLabel}</h3>
                <p className="awards-item__text"><span><a href="mailto:sales@ssw.ma" style={{ color: "#192538" }}>sales@ssw.ma</a></span></p>
              </div>
              <div className="awards-item text-semibold">
                <div className="awards-item__icon">
                  <PhoneIcon size={48} strokeWidth={1.5} />
                </div>
                <h3 className="awards-item__title">{copy.contact.phoneLabel}</h3>
                <p className="awards-item__text"><span><a href="tel:+212700745971" style={{ color: "#192538" }}>+212 (0) 700 74 59 71</a></span></p>
              </div>
              <div className="awards-item text-semibold">
                <div className="awards-item__icon">
                  <PinIcon size={48} strokeWidth={1.5} />
                </div>
                <h3 className="awards-item__title">{addressLabel}</h3>
                <p className="awards-item__text"><span>{address}</span></p>
              </div>
              <div className="awards-item text-semibold">
                <div className="awards-item__icon">
                  <ClockIcon size={48} strokeWidth={1.5} />
                </div>
                <h3 className="awards-item__title">{hoursLabel}</h3>
                <p className="awards-item__text"><span>{hours}</span></p>
              </div>
            </div>
          </div>
        </div>

        {/* ══ 4. "Où nous trouver" — clean white section ══ */}
        <section style={{ background: "#fff", padding: "80px 24px" }}>
          <div style={{ maxWidth: 1120, margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: 48 }}>
              <h5 style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#5B5555", marginBottom: 12 }}>{offices}</h5>
              <h2 style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 500, color: "#202124", lineHeight: 1.12 }}>{findUs}</h2>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40, alignItems: "center" }}>
              <div>
                <div style={{ marginBottom: 40 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
                    <span style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 40, height: 40, borderRadius: 10, background: "rgba(25,37,56,0.08)", color: "#192538" }}>
                      <PinIcon size={20} strokeWidth={1.5} />
                    </span>
                    <h3 style={{ fontSize: 20, fontWeight: 600, color: "#202124" }}>{hqLabel}</h3>
                  </div>
                  <p style={{ fontSize: 16, color: "#5B5555", paddingLeft: 52 }}>Casablanca, Maroc</p>
                </div>
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
                    <span style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 40, height: 40, borderRadius: 10, background: "rgba(25,37,56,0.08)", color: "#192538" }}>
                      <GlobeIcon size={20} strokeWidth={1.5} />
                    </span>
                    <h3 style={{ fontSize: 20, fontWeight: 600, color: "#202124" }}>{networkLabel}</h3>
                  </div>
                  <p style={{ fontSize: 16, color: "#5B5555", paddingLeft: 52, lineHeight: 1.6 }}>{networkDesc}</p>
                </div>
              </div>
              <div style={{ borderRadius: 16, overflow: "hidden" }}>
                <img src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&q=80" alt={findUs} loading="lazy" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", aspectRatio: "4/3" }} />
              </div>
            </div>
          </div>
        </section>

        {/* ══ 5. Contact form — clean section ══ */}
        <section id="form" style={{ background: "#fff", padding: "80px 24px" }}>
          <div style={{ maxWidth: 960, margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: 40 }}>
              <h5 style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#192538", marginBottom: 12 }}>{copy.contact.person}</h5>
              <h2 style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 500, color: "#202124", lineHeight: 1.12, marginBottom: 8 }}>{copy.contact.formTitle}</h2>
              <p style={{ fontSize: 16, color: "#5B5555" }}>{copy.contact.role}</p>
            </div>
            <div style={{ background: "#f0f4f8", borderRadius: 16, padding: "40px 36px" }}>
              <form onSubmit={(e) => e.preventDefault()} className="ssw-contact-form">
                <div style={fieldStyle}>
                  <label style={labelStyle}>{copy.contact.fields.fullName}</label>
                  <input style={inputStyle} type="text" name="fullName" required />
                </div>
                <div style={fieldStyle}>
                  <label style={labelStyle}>{copy.contact.fields.company}</label>
                  <input style={inputStyle} type="text" name="company" />
                </div>
                <div style={fieldStyle}>
                  <label style={labelStyle}>{copy.contact.fields.email}</label>
                  <input style={inputStyle} type="email" name="email" required />
                </div>
                <div style={fieldStyle}>
                  <label style={labelStyle}>{copy.contact.fields.phone}</label>
                  <input style={inputStyle} type="tel" name="phone" />
                </div>
                <div style={fieldStyle}>
                  <label style={labelStyle}>{copy.contact.fields.service}</label>
                  <select style={inputStyle} name="service" required>
                    <option value="">{lang === "fr" ? "Sélectionnez..." : lang === "es" ? "Seleccione..." : "Select..."}</option>
                    {copy.contact.serviceOptions.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>
                <div style={fieldStyle}>
                  <label style={labelStyle}>{copy.contact.fields.route}</label>
                  <input style={inputStyle} type="text" name="route" />
                </div>
                <div style={{ ...fieldStyle, gridColumn: "1 / -1" }}>
                  <label style={labelStyle}>{copy.contact.fields.message}</label>
                  <textarea style={{ ...inputStyle, resize: "vertical" as const, minHeight: 120 }} name="message" rows={5} required />
                </div>
                <div style={{ gridColumn: "1 / -1" }}>
                  <button className="button primary short" type="submit">{copy.contact.fields.submit}</button>
                </div>
              </form>
            </div>
          </div>
        </section>

        {/* ══ 6. Final CTA ══ */}
        <section
          className="cta-component text-white custom-bg cta-overlay large-padding"
          style={{
            "--439b4506": "#0a1628",
            "--43eebefe": "url('https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=1600&q=80')",
          } as any}
        >
          <h5 className="cta-component__kicker">{copy.companyName}</h5>
          <h2 className="cta-component__text is-h3">{copy.hero.subtitle}</h2>
          <Link href="/" className="button primary short">{copy.hero.ctaPrimary}</Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
