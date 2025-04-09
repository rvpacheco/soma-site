import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpBackend from 'i18next-http-backend';

i18n
  .use(HttpBackend)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    supportedLngs: ['en', 'es'],
    lng: 'en', // valor por defecto
    debug: false,
    backend: {
      loadPath: '/locales/{{lng}}/common.json',
    },
    interpolation: {
      escapeValue: false, // React ya escapa
    },
  });

export default i18n;
