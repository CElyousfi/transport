"use client";

import Link from "next/link";
import { useLanguage } from "@/components/LanguageProvider";
import { SITE_CONTENT } from "@/lib/siteContent";
import type { Lang } from "@/lib/siteContent";
import LinkedInIconAnimated from "@/icons/linkedin-icon";
import FacebookIconAnimated from "@/icons/facebook-icon";
import MailIconAnimated from "@/icons/mail-icon";
import PhoneIconAnimated from "@/icons/phone-icon";
import PinIconAnimated from "@/icons/pin-icon";

const T = {
  social: { fr: "Suivez-nous", en: "Follow us", es: "Siguenos" } as Record<Lang, string>,
  slogan: { fr: "Votre partenaire transport Maroc-Europe.", en: "Your Morocco-Europe transport partner.", es: "Su socio de transporte Marruecos-Europa." } as Record<Lang, string>,
  company: { fr: "Entreprise", en: "Company", es: "Empresa" } as Record<Lang, string>,
  services: { fr: "Solutions", en: "Solutions", es: "Soluciones" } as Record<Lang, string>,
};


export default function Footer() {
  const { lang } = useLanguage();
  const copy = SITE_CONTENT[lang];

  return (
    <footer className="ssw-footer">
      {/* ── Main grid ── */}
      <div className="ssw-footer-grid">
        {/* Brand column */}
        <div className="ssw-footer-brand">
          <Link href="/" aria-label="Home">
            <img
              src="/images/logo-ssw.png"
              alt="SSW Morocco"
              className="ssw-footer-logo"
            />
          </Link>
          <p className="ssw-footer-slogan">{T.slogan[lang]}</p>
          <div className="ssw-footer-socials">
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="ssw-footer-social-link"><LinkedInIconAnimated size={20} /></a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="ssw-footer-social-link"><FacebookIconAnimated size={20} /></a>
          </div>
        </div>

        {/* Company links */}
        <div className="ssw-footer-col">
          <h6 className="ssw-footer-heading">{T.company[lang]}</h6>
          <ul>
            <li><Link href="/about">{copy.nav.about}</Link></li>
            <li><Link href="/services">{copy.nav.services}</Link></li>
            <li><Link href="/destinations">{copy.nav.destinations}</Link></li>
            <li><Link href="/references">{copy.nav.references}</Link></li>
          </ul>
        </div>

        {/* Solutions links */}
        <div className="ssw-footer-col">
          <h6 className="ssw-footer-heading">{T.services[lang]}</h6>
          <ul>
            {copy.services.slice(0, 4).map((s) => (
              <li key={s.id}><Link href="/services">{s.title}</Link></li>
            ))}
          </ul>
        </div>

        {/* Contact info */}
        <div className="ssw-footer-col">
          <h6 className="ssw-footer-heading">{copy.nav.contact}</h6>
          <ul className="ssw-footer-contact-list">
            <li>
              <span className="ssw-footer-icon"><MailIconAnimated size={18} strokeWidth={1.5} /></span>
              <a href="mailto:sales@ssw.ma">sales@ssw.ma</a>
            </li>
            <li>
              <span className="ssw-footer-icon"><PhoneIconAnimated size={18} strokeWidth={1.5} /></span>
              <a href="tel:+212700745971">+212 700 74 59 71</a>
            </li>
            <li>
              <span className="ssw-footer-icon"><PinIconAnimated size={18} strokeWidth={1.5} /></span>
              <span>Casablanca, Maroc</span>
            </li>
          </ul>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="ssw-footer-bottom">
        <p>© {new Date().getFullYear()} Safe Solution Wheels Morocco. {copy.footer.rights}</p>
        <div className="ssw-footer-bottom-links">
          <Link href="/contact">{copy.hero.ctaSecondary}</Link>
        </div>
      </div>
    </footer>
  );
}
