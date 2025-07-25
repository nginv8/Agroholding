'use client';

import { useRouter } from 'next/router';

export default function LocaleSwitcher() {
  const router = useRouter();
  const { locales, locale: activeLocale } = router;

  const handleLocaleChange = (locale: string) => {
    router.push(router.asPath, router.asPath, { locale });
  };

  return (
    <div>
      {locales?.map((locale) => (
        <button
          key={locale}
          onClick={() => handleLocaleChange(locale)}
          disabled={locale === activeLocale}
        >
          {locale.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
