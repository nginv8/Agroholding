import { NextRequest, NextResponse } from 'next/server';

import { routing, type Locale } from '@/i18n/routing';
import { createErrorResponse, validateRequired } from '@/utilities/api-error';
import { getAPITranslations, normalizeLocale } from '@/utilities/api-i18n';
import { normalizeEmail, validateEmail } from '@/utilities/email-validation';
import { findExistingSubscriber, unsubscribeSubscriber } from '@/utilities/newsletter';

interface RequestBody {
  email: string;
  locale?: string;
}

export async function POST(request: NextRequest) {
  let locale: Locale = routing.defaultLocale as Locale;

  try {
    const { email: rawEmail, locale: requestLocale }: RequestBody = await request.json();
    locale = normalizeLocale(requestLocale);

    validateRequired({ email: rawEmail }, locale);

    const email = normalizeEmail(rawEmail);
    validateEmail(email, locale);

    const existingSubscriber = await findExistingSubscriber(email);
    const t = await getAPITranslations(locale);

    if (existingSubscriber && existingSubscriber.status !== 'unsubscribed') {
      await unsubscribeSubscriber(existingSubscriber.id);
    }

    return NextResponse.json({
      success: true,
      message: t('api-unsubscription-success'),
      email,
    });
  } catch (error: unknown) {
    const t = await getAPITranslations(locale);
    const fallbackMessage = t('api-newsletter-unsubscription-failed');
    return await createErrorResponse(error, fallbackMessage);
  }
}
