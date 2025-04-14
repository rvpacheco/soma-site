import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import resourcesToBackend from 'i18next-resources-to-backend';
import { getOptions } from './settings';

i18n
  .use(initReactI18next)
  .use(
    resourcesToBackend((language, namespace) =>
      import(`./locales/${language}/${namespace}.json`)
    )
  )
  .init({
    ...getOptions(),
    lng: typeof window !== 'undefined' ? undefined : getOptions().lng,
    preload: typeof window === 'undefined' ? getOptions().supportedLngs : [],
  });

export default i18n;
