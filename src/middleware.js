import { NextResponse } from 'next/server'
import { match as matchLocale } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'

const locales = ['en', 'es']
const defaultLocale = 'en'

function getLocale(request) {
  const negotiatorHeaders = {}
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value))
  const languages = new Negotiator({ headers: negotiatorHeaders }).languages()
  return matchLocale(languages, locales, defaultLocale)
}

export function middleware(request) {
  const pathname = request.nextUrl.pathname

  // Skip next internal paths
  if (pathname.startsWith('/_next') || pathname.includes('.')) return

  // If already has locale, do nothing
  if (locales.some((loc) => pathname.startsWith(`/${loc}`))) return

  // Detect and redirect
  const locale = getLocale(request)
  return NextResponse.redirect(new URL(`/${locale}${pathname}`, request.url))
}
