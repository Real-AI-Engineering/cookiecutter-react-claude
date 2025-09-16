{% if cookiecutter.use_i18n == "y" and cookiecutter.app_type == "spa" -%}
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import HttpBackend from 'i18next-http-backend'

const supportedLanguages = ['en', 'ru']

i18n
  .use(HttpBackend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    supportedLngs: supportedLanguages,
    defaultNS: 'common',
    ns: ['common'],
    debug: false,
    interpolation: {
      escapeValue: false,
    },
    backend: {
      loadPath: '/locales/{{"{{lng}}"}}/{{"{{ns}}"}}.json',
    },
    detection: {
      order: ['querystring', 'localStorage', 'sessionStorage', 'navigator'],
      caches: ['localStorage'],
    },
  })

export default i18n
{% else -%}
// i18n is disabled for this template variant
export {}
{% endif -%}
