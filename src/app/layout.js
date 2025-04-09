import "./globals.css";
import I18nProvider from "@/i18n-provider";
import { dir } from 'i18next';
import { languages } from '../../next-i18next.config';

export const metadata = {
  title: "SOMA",
  description: "AI + Human Creativity",
};

export default function RootLayout({ children }) {
  const locale = 'en'; 

  return (
    <html lang={locale} dir={dir(locale)}>
      <body>
        <I18nProvider>{children}</I18nProvider>
      </body>
    </html>
  );
}
