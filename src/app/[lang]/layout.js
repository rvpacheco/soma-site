// src/app/[lang]/layout.js
import "@/app/globals.css";
import { dir } from "i18next";
import { languages } from "@/i18n/settings";
import I18nProvider from "@/i18n-provider";

// Genera rutas estáticas para cada idioma
export async function generateStaticParams() {
  return languages.map((lang) => ({ lang }));
}

export const metadata = {
  title: "SOMA",
  description: "AI-powered web experiences",
};

export default function RootLayout({ children, params }) {
  const locale = params.lang;

  return (
    <html lang={locale} dir={dir(locale)}>
      <body>
        <I18nProvider lang={locale}>{children}</I18nProvider>
      </body>
    </html>
  );
}
