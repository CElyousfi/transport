"use client";

import { useLanguage } from "@/components/LanguageProvider";
import { SITE_CONTENT } from "@/lib/siteContent";

const iconBox: React.CSSProperties = {
  width: 44, height: 44, borderRadius: 12,
  background: "rgba(25,37,56,0.12)", display: "flex",
  alignItems: "center", justifyContent: "center", flexShrink: 0,
  color: "#192538",
};

const detailLabel: React.CSSProperties = {
  fontSize: 12, fontWeight: 600, color: "#5B5555",
  textTransform: "uppercase", letterSpacing: "0.08em",
};

export default function ContactFormSection() {
  const { lang } = useLanguage();
  const copy = SITE_CONTENT[lang];

  const addressLabel = lang === "fr" ? "Adresse" : lang === "es" ? "Dirección" : "Address";
  const hoursLabel = lang === "fr" ? "Horaires" : lang === "es" ? "Horario" : "Hours";
  const address = "Casablanca, Maroc";
  const hours =
    lang === "fr"
      ? "Lun - Ven : 8h00 - 18h00"
      : lang === "es"
        ? "Lun - Vie: 8:00 - 18:00"
        : "Mon - Fri: 8:00 AM - 6:00 PM";

  const inputStyle: React.CSSProperties = {
    border: "1.5px solid #d6dbe3",
    borderRadius: 10,
    padding: "12px 14px",
    fontSize: 15,
    color: "#202124",
    background: "#fafbfc",
    outline: "none",
    width: "100%",
    fontFamily: "inherit",
    transition: "border-color 0.2s, box-shadow 0.2s",
  };

  const labelStyle: React.CSSProperties = {
    fontSize: 14,
    fontWeight: 500,
    color: "#5B5555",
  };

  const fieldStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    gap: 6,
  };

  return (
    <section style={{ background: "#fff", padding: "80px 24px" }}>
      <div style={{ maxWidth: 1120, margin: "0 auto" }}>
        {/* Section header */}
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <h5 style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#192538", marginBottom: 12 }}>
            {copy.companyName}
          </h5>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 500, color: "#202124", lineHeight: 1.12 }}>
            {copy.contact.formTitle}
          </h2>
        </div>

        {/* Two-column grid: info left, form right */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 32 }}>
          {/* Contact info row */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: 20,
          }}>
            <div style={{ background: "#fff", borderRadius: 16, padding: "24px 20px", border: "1px solid #e5e8ed", display: "flex", alignItems: "center", gap: 14 }}>
              <div style={iconBox}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              </div>
              <div>
                <div style={detailLabel}>{copy.contact.emailLabel}</div>
                <a href="mailto:sales@ssw.ma" style={{ color: "#192538", fontSize: 16, fontWeight: 500 }}>sales@ssw.ma</a>
              </div>
            </div>
            <div style={{ background: "#fff", borderRadius: 16, padding: "24px 20px", border: "1px solid #e5e8ed", display: "flex", alignItems: "center", gap: 14 }}>
              <div style={iconBox}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              </div>
              <div>
                <div style={detailLabel}>{copy.contact.phoneLabel}</div>
                <a href="tel:+212700745971" style={{ color: "#192538", fontSize: 16, fontWeight: 500 }}>+212 (0) 700 74 59 71</a>
              </div>
            </div>
            <div style={{ background: "#fff", borderRadius: 16, padding: "24px 20px", border: "1px solid #e5e8ed", display: "flex", alignItems: "center", gap: 14 }}>
              <div style={iconBox}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
              </div>
              <div>
                <div style={detailLabel}>{addressLabel}</div>
                <span style={{ color: "#202124", fontSize: 16, fontWeight: 500 }}>{address}</span>
              </div>
            </div>
            <div style={{ background: "#fff", borderRadius: 16, padding: "24px 20px", border: "1px solid #e5e8ed", display: "flex", alignItems: "center", gap: 14 }}>
              <div style={iconBox}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              </div>
              <div>
                <div style={detailLabel}>{hoursLabel}</div>
                <span style={{ color: "#202124", fontSize: 16, fontWeight: 500 }}>{hours}</span>
              </div>
            </div>
          </div>

          {/* Form card */}
          <div style={{ background: "#fff", borderRadius: 16, padding: "40px 36px", border: "1px solid #e5e8ed" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
              <h3 style={{ fontSize: 22, fontWeight: 600, color: "#202124" }}>{copy.contact.person}</h3>
            </div>
            <p style={{ fontSize: 15, color: "#5B5555", marginBottom: 32 }}>{copy.contact.role}</p>
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
                <button className="button primary short" type="submit">
                  {copy.contact.fields.submit}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
