'use client';

import { useParams } from 'next/navigation';

import { usePathname, useRouter } from '@/i18n/routing';
import { cn } from '@/utilities/ui';

import { Button } from '../ui/button';

export default function LocaleSwitcher({ className }: { className?: string }) {
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();

  const locales = ['en', 'uk'];
  const activeLocale = params.locale as string;

  const handleLocaleChange = (locale: string) => {
    router.push(pathname, { locale });
  };

  return (
    <div className={cn('flex justify-center gap-1', className)}>
      {locales?.map((locale) => (
        <Button
          key={locale}
          onClick={() => handleLocaleChange(locale)}
          disabled={locale === activeLocale}
          size="clear"
          variant="ghost"
          className="inline-block px-1.5 py-0.5 text-xs disabled:border-2 disabled:border-muted-foreground/50"
        >
          {locale.toUpperCase()}
        </Button>
      ))}
    </div>
  );
}
