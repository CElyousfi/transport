"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/components/LanguageProvider";
import { LANG_OPTIONS, SITE_CONTENT } from "@/lib/siteContent";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastScrollY = useRef(0);
  const pathname = usePathname();
  const { lang, setLang } = useLanguage();
  const copy = SITE_CONTENT[lang];

  const links = [
    { href: "/", label: copy.nav.home },
    { href: "/about", label: copy.nav.about },
    { href: "/services", label: copy.nav.services },
    { href: "/destinations", label: copy.nav.destinations },
    { href: "/references", label: copy.nav.references },
    { href: "/contact", label: copy.nav.contact },
  ];

  useEffect(() => {
    const onScroll = () => {
      if (open) {
        setHidden(false);
        return;
      }
      const y = window.scrollY;
      setHidden(y > lastScrollY.current && y > 80);
      lastScrollY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [open]);

  useEffect(() => {
    setOpen(false);
    setHidden(false);
  }, [pathname]);

  useEffect(() => {
    document.body.classList.toggle("no-overflow", open);
    return () => document.body.classList.remove("no-overflow");
  }, [open]);

  return (
    <header className={`header ${hidden ? "hide-header" : ""}`}>
      <nav>
        <div className="nav-bar">
          <Link href="/" className="nav-bar__logo" onClick={() => setOpen(false)}>
            <img src="/images/logo-ssw.png" alt="SSW Morocco" style={{ height: 40, width: "auto" }} />
          </Link>

          <div className="nav-bar__items">
            {links.map((link) => (
              <div className="header-item" key={link.href}>
                <Link href={link.href} className="header-item__title expand-button">
                  <p>{link.label}</p>
                </Link>
              </div>
            ))}
          </div>

          <Link className="button button-text secondary short internal-link nav-bar__button" href="/contact">
            {copy.hero.ctaSecondary}
          </Link>

          <div className="language-button light" style={{ marginLeft: "10px" }}>
            {LANG_OPTIONS.map((option) => (
              <button
                key={option.key}
                type="button"
                className="language-button__text"
                style={{ opacity: lang === option.key ? 1 : 0.56 }}
                onClick={() => setLang(option.key)}
              >
                {option.label}
              </button>
            ))}
          </div>

          <button className="menu-hamburger" type="button" onClick={() => setOpen((prev) => !prev)} aria-label="Toggle menu" aria-expanded={open}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 20" className="nuxt-icon nav-bar__icon" name="burger-menu">
              <path stroke="#192538" strokeWidth="1.5" d="M2 2h20M2 10h20M2 18h20" />
            </svg>
          </button>
        </div>

        <div className="burger-menu" style={{ display: open ? "block" : "none" }} aria-hidden={!open}>
          {links.map((link) => (
            <div key={link.href} className="burger-menu__item">
              <Link href={link.href} className="burger-menu__text" onClick={() => setOpen(false)}>
                <span>{link.label}</span>
              </Link>
            </div>
          ))}
          <div className="burger-menu__bottom">
            <div className="burger-menu__bottom-item">
              <div className="burger-menu__subitem-text">
                <a href="mailto:sales@ssw.ma">sales@ssw.ma</a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
