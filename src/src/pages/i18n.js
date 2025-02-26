import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import translationEN from "./locales/en/translation.json";
import translationRU from "./locales/ru/translation.json";

const resources = {
  en: { translation: translationEN },
  ru: { translation: translationRU },
};

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources,
    fallbackLng: "en",
    debug: true, // Выводит в консоль текущий язык
    interpolation: { escapeValue: false },
    cache: { enabled: false }, // <== Добавь этот параметр
  });

export default i18n;

