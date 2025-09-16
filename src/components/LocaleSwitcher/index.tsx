'use client';

import { TypedLocale } from 'payload';

import { useState, useTransition } from 'react';
import { useParams } from 'next/navigation';
import { useLocale } from 'next-intl';

import localization from '@/i18n/localization';
import { usePathname, useRouter } from '@/i18n/routing';
import { cn } from '@/utilities/ui';

import { Button } from '../ui/button';

export default function LocaleSwitcher({ className }: { className?: string }) {
  const locale = useLocale();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const params = useParams();
  const [newValue, setNewValue] = useState<TypedLocale | null>(null);

  const handleLocaleChange = (value: TypedLocale) => {
    if (value === locale) return;
    setNewValue(value);

    startTransition(() => {
      router.replace(
        // @ts-expect-error -- TypeScript will validate that only known `params`
        // are used in combination with a given `pathname`. Since the two will
        // always match for the current route, we can skip runtime checks.
        { pathname, params },
        { locale: value }
      );
    });
  };

  return (
    <div className={cn('flex justify-center gap-1', className)}>
      {localization.locales
        .sort((a, b) => a.label.localeCompare(b.label))
        .map((localeItem) => (
          <Button
            key={localeItem.code}
            onClick={() => handleLocaleChange(localeItem.code as TypedLocale)}
            disabled={localeItem.code === locale}
            size="clear"
            variant="ghost"
            className={cn(
              'inline-block px-1.5 py-0.5 text-xs disabled:border-2 disabled:border-muted-foreground/50',
              localeItem.code === newValue &&
                isPending &&
                'animate-pulse border-none disabled:opacity-50'
            )}
          >
            {localeItem.code.toUpperCase()}
          </Button>
        ))}
    </div>
  );
}
