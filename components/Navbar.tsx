"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/components/LanguageProvider";
import { LANG_OPTIONS, SITE_CONTENT } from "@/lib/siteContent";
import type { Lang } from "@/lib/siteContent";
import GlobeIconAnimated from "@/icons/globe-icon";


export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const lastScrollY = useRef(0);
  const pathname = usePathname();
  const { lang, setLang } = useLanguage();
  const copy = SITE_CONTENT[lang];
  const langRef = useRef<HTMLDivElement>(null);

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
      if (open) { setHidden(false); return; }
      const y = window.scrollY;
      setHidden(y > lastScrollY.current && y > 80);
      lastScrollY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [open]);

  useEffect(() => { setOpen(false); setHidden(false); setLangOpen(false); }, [pathname]);

  useEffect(() => {
    document.body.classList.toggle("no-overflow", open);
    return () => document.body.classList.remove("no-overflow");
  }, [open]);

  useEffect(() => {
    const close = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) setLangOpen(false);
    };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, []);

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
                <Link href={link.href} className={`header-item__title expand-button${pathname === link.href ? " is-active" : ""}`}>
                  <p>{link.label}</p>
                </Link>
              </div>
            ))}
          </div>

          <Link className="button button-text secondary short internal-link nav-bar__button" href="/contact">
            {copy.hero.ctaSecondary}
          </Link>

          {/* Language dropdown */}
          <div ref={langRef} className="ssw-lang-dropdown" style={{ position: "relative", marginLeft: 8 }}>
            <button
              type="button"
              onClick={() => setLangOpen((p) => !p)}
              className="ssw-lang-toggle"
              aria-expanded={langOpen}
              aria-haspopup="listbox"
            >
              <GlobeIconAnimated size={16} strokeWidth={1.5} />
              <span>{lang.toUpperCase()}</span>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" style={{ transition: "transform .2s", transform: langOpen ? "rotate(180deg)" : "none" }}>
                <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            {langOpen && (
              <ul className="ssw-lang-menu" role="listbox">
                {LANG_OPTIONS.map((option) => (
                  <li key={option.key} role="option" aria-selected={lang === option.key}>
                    <button
                      type="button"
                      onClick={() => { setLang(option.key); setLangOpen(false); }}
                      className={`ssw-lang-option${lang === option.key ? " active" : ""}`}
                    >
                      <span style={{ fontWeight: 500 }}>{option.label}</span>
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <button className="menu-hamburger" type="button" onClick={() => setOpen((prev) => !prev)} aria-label="Toggle menu" aria-expanded={open}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 20" className="nuxt-icon nav-bar__icon" name="burger-menu" style={{ width: 24, height: 20 }}>
              {open
                ? <path stroke="#192538" strokeWidth="1.5" d="M4 4l16 12M4 16L20 4" />
                : <path stroke="#192538" strokeWidth="1.5" d="M2 2h20M2 10h20M2 18h20" />
              }
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        <div className="burger-menu" style={{ display: open ? "block" : "none" }} aria-hidden={!open}>
          {links.map((link) => (
            <div key={link.href} className="burger-menu__item">
              <Link href={link.href} className="burger-menu__text" onClick={() => setOpen(false)}>
                <span>{link.label}</span>
              </Link>
            </div>
          ))}
          <div style={{ display: "flex", gap: 8, padding: "24px 0", justifyContent: "center" }}>
            {LANG_OPTIONS.map((option) => (
              <button
                key={option.key}
                type="button"
                onClick={() => { setLang(option.key); setOpen(false); }}
                className={`ssw-lang-option-mobile${lang === option.key ? " active" : ""}`}
              >
                {option.label}
              </button>
            ))}
          </div>
          <div style={{ textAlign: "center", padding: "12px 0" }}>
            <a href="mailto:sales@ssw.ma" style={{ color: "#192538", fontSize: 18, fontWeight: 500 }}>sales@ssw.ma</a>
          </div>
        </div>
      </nav>
    </header>
  );
}
