import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import translationEN from "./locales/en.json";
import translationFR from "./locales/fr.json";
import translationUA from "./locales/ua.json";

const resources = {
  en: { translation: translationEN },
  fr: { translation: translationFR },
  uk: { translation: translationUA },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "fr", // Французька за замовчуванням
    interpolation: {
      escapeValue: false,
    },
  });
if (!localStorage.getItem("i18nextLng")) {
  i18n.changeLanguage("fr");
}

export default i18n;
