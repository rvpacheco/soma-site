/** @type {import('next-i18next').UserConfig} */
const i18nConfig = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
  },
  localePath: './public/locales',
  reloadOnPrerender: process.env.NODE_ENV === 'development',
};

module.exports = i18nConfig;
