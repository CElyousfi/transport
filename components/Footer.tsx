"use client";

import Link from "next/link";
import { useLanguage } from "@/components/LanguageProvider";
import { SITE_CONTENT } from "@/lib/siteContent";
import type { Lang } from "@/lib/siteContent";

const T = {
  social: { fr: "Suivez-nous", en: "Follow us", es: "Siguenos" } as Record<Lang, string>,
  slogan: { fr: "Votre partenaire transport Maroc-Europe.", en: "Your Morocco-Europe transport partner.", es: "Su socio de transporte Marruecos-Europa." } as Record<Lang, string>,
  company: { fr: "Entreprise", en: "Company", es: "Empresa" } as Record<Lang, string>,
  services: { fr: "Solutions", en: "Solutions", es: "Soluciones" } as Record<Lang, string>,
};

const LinkedInIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
);

const FacebookIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
);

const MailIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
);

const PhoneIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
);

const PinIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
);

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
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="ssw-footer-social-link"><LinkedInIcon /></a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="ssw-footer-social-link"><FacebookIcon /></a>
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
              <span className="ssw-footer-icon"><MailIcon /></span>
              <a href="mailto:sales@ssw.ma">sales@ssw.ma</a>
            </li>
            <li>
              <span className="ssw-footer-icon"><PhoneIcon /></span>
              <a href="tel:+212700745971">+212 700 74 59 71</a>
            </li>
            <li>
              <span className="ssw-footer-icon"><PinIcon /></span>
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
