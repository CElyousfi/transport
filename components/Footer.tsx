"use client";

import Link from "next/link";
import { useLanguage } from "@/components/LanguageProvider";
import { SITE_CONTENT } from "@/lib/siteContent";

export default function Footer() {
  const { lang } = useLanguage();
  const copy = SITE_CONTENT[lang];

  return (
    <footer className="footer">
      <div className="footer-container footer-title-container">
        <Link href="/" style={{ display: "inline-block", marginBottom: 16 }}>
          <img src="/images/logo-ssw.png" alt="SSW Morocco" style={{ height: 50, width: "auto", filter: "brightness(0) invert(1)" }} />
        </Link>
        <p className="footer-title">Votre fret, notre priorité.</p>
      </div>

      <div className="footer-menu footer-container">
        <div className="footer-menu-container">
          <div className="footer-menu__column">
            <h5 className="footer-description">
              {copy.companyName}. {copy.footer.strapline}
            </h5>
            <Link className="button button-text secondary short internal-link nav-bar__button" href="/contact">
              {copy.nav.contact}
            </Link>
          </div>
          <div className="footer-menu__column" />
        </div>

        <div className="footer-menu-container">
          <nav>
            <div className="footer-navigation">
              <ul className="footer-navigation__left">
                <li className="nav-item">
                  <div className="nav-item-label-container expand-button">
                    <span className="nav-item-label">SSW</span>
                  </div>
                  <ul className="nav-item-submenu featured">
                    <li><Link href="/about" className="footer-navigation__link footer-link"><span>{copy.nav.about}</span></Link></li>
                    <li><Link href="/references" className="footer-navigation__link footer-link"><span>{copy.nav.references}</span></Link></li>
                    <li><a href="mailto:sales@ssw.ma" className="footer-navigation__link footer-link"><span>sales@ssw.ma</span></a></li>
                    <li><a href="tel:+212700745971" className="footer-navigation__link footer-link"><span>+212 (0) 700 74 59 71</span></a></li>
                  </ul>
                </li>
              </ul>

              <ul className="footer-navigation__right">
                <li className="nav-item">
                  <div className="nav-item-label-container expand-button">
                    <span className="nav-item-label">{copy.nav.services}</span>
                  </div>
                  <ul className="nav-item-submenu">
                    <li><Link href="/services" className="footer-navigation__link footer-link"><span>{copy.nav.services}</span></Link></li>
                    <li><Link href="/destinations" className="footer-navigation__link footer-link"><span>{copy.nav.destinations}</span></Link></li>
                    <li><Link href="/contact" className="footer-navigation__link footer-link"><span>{copy.nav.contact}</span></Link></li>
                  </ul>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>

      <div className="footer-container">
        <div className="footer-submenu">
          <div className="footer-submenu-container">
            <div className="footer-navigation__socials footer-navigation">
              <span className="title">Réseaux sociaux</span>
              <ul>
                <li><a className="footer-navigation__link footer-sub-link" href="https://www.linkedin.com" target="_blank">LinkedIn</a></li>
                <li><a className="footer-navigation__link footer-sub-link" href="https://www.facebook.com" target="_blank">Facebook</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-submenu-container">
            <div className="footer-copyright-container">
              <p className="footer-copyright">© {new Date().getFullYear()}, Safe Solution Wheels Morocco. {copy.footer.rights}</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
