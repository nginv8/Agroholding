import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { Button } from '@/components/ui/button';

export default function ProductNotFound() {
  const t = useTranslations();

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white px-4">
      <div className="mx-auto max-w-md text-center">
        <div className="mb-8">
          <div className="mx-auto mb-4 flex size-20 items-center justify-center rounded-full bg-secondary-100">
            <svg
              className="size-10 text-secondary-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.467-.881-6.08-2.33M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </div>
          <h1 className="mb-2 text-2xl font-bold text-secondary-900">{t('product-not-found')}</h1>
          <p className="text-secondary-600">{t('product-not-found-description')}</p>
        </div>

        <Button asChild>
          <Link href="/products" className="inline-flex">
            {t('go-back-to-products')}
          </Link>
        </Button>
      </div>
    </div>
  );
}
