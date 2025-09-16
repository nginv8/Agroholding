import { NextResponse } from 'next/server';

import type { Locale } from '@/i18n/routing';

import { getAPITranslations } from './api-i18n';

export type APIMessageKey =
  | 'api-email-required'
  | 'api-invalid-email'
  | 'api-subscription-success'
  | 'api-unsubscription-success'
  | 'api-internal-error'
  | 'api-newsletter-subscription-failed'
  | 'api-newsletter-unsubscription-failed';

export const ERROR_CODE_TO_MESSAGE_KEY: Record<string, APIMessageKey> = {
  'email-required': 'api-email-required',
  'invalid-email': 'api-invalid-email',
  'subscription-success': 'api-subscription-success',
  'unsubscription-success': 'api-unsubscription-success',
  'internal-error': 'api-internal-error',
  'newsletter-subscription-failed': 'api-newsletter-subscription-failed',
  'newsletter-unsubscription-failed': 'api-newsletter-unsubscription-failed',
};

export class APIError extends Error {
  constructor(
    message: string,
    public status: number = 500,
    public code?: string,
    public locale?: Locale
  ) {
    super(message);
    this.name = 'APIError';
  }

  async getLocalizedMessage(): Promise<string> {
    if (this.locale && this.code) {
      try {
        const t = await getAPITranslations(this.locale);
        const messageKey = ERROR_CODE_TO_MESSAGE_KEY[this.code];

        if (messageKey) {
          return t(messageKey);
        }
      } catch {}
    }
    return this.message;
  }
}

export async function createErrorResponse(
  error: unknown,
  fallbackMessage: string = 'Internal Server Error'
) {
  console.error('API Error:', error);

  if (error instanceof APIError) {
    const localizedMessage = await error.getLocalizedMessage();
    return NextResponse.json(
      {
        message: localizedMessage,
        code: error.code,
      },
      { status: error.status }
    );
  }

  if (error instanceof Error) {
    return NextResponse.json(
      {
        message: error.message,
      },
      { status: 500 }
    );
  }

  return NextResponse.json(
    {
      message: fallbackMessage,
    },
    { status: 500 }
  );
}

export function validateRequired(fields: Record<string, unknown>, locale?: Locale) {
  for (const [key, value] of Object.entries(fields)) {
    if (!value || (typeof value === 'string' && !value.trim())) {
      if (key === 'email') {
        throw new APIError('Email is required', 400, 'email-required', locale);
      }
      throw new APIError(`${key} is required`, 400, 'missing-field', locale);
    }
  }
}
