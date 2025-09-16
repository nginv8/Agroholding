import type { Locale } from '@/i18n/routing';

import { APIError } from './api-error';

export const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateEmail(email: string, locale?: Locale): void {
  if (!EMAIL_REGEX.test(email)) {
    throw new APIError('Invalid email address', 400, 'invalid-email', locale);
  }
}

export function normalizeEmail(email: string): string {
  return email.toLowerCase().trim();
}
