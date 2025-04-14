export const fallbackLng = 'en';
export const languages = ['en', 'es'];

export function getOptions(lng = fallbackLng) {
  return {
    supportedLngs: languages,
    fallbackLng,
    lng,
    debug: false,
    defaultNS: 'common',
    ns: ['common'],
  };
}
