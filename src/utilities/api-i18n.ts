import { getTranslations } from 'next-intl/server';

import { routing, type Locale } from '@/i18n/routing';

export function isValidLocale(locale: string): locale is Locale {
  return routing.locales.includes(locale as Locale);
}

export function normalizeLocale(locale?: string): Locale {
  if (locale && isValidLocale(locale)) {
    return locale;
  }
  return routing.defaultLocale as Locale;
}

export async function getAPITranslations(locale: string) {
  const validLocale = normalizeLocale(locale);
  try {
    return await getTranslations({ locale: validLocale });
  } catch {
    return await getTranslations({ locale: routing.defaultLocale as Locale });
  }
}
