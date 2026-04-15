"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import type { Lang } from "@/lib/siteContent";

type LanguageContextType = {
  lang: Lang;
  setLang: (lang: Lang) => void;
};

const LanguageContext = createContext<LanguageContextType | null>(null);

const STORAGE_KEY = "ssw_lang";

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("fr");

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "fr" || stored === "en" || stored === "es") {
      setLangState(stored);
    }
  }, []);

  const setLang = (nextLang: Lang) => {
    setLangState(nextLang);
    localStorage.setItem(STORAGE_KEY, nextLang);
  };

  const value = useMemo(() => ({ lang, setLang }), [lang]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}
