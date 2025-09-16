'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useDebounce } from '@/utilities/useDebounce';

export const Search: React.FC = () => {
  const [value, setValue] = useState('');
  const router = useRouter();
  const t = useTranslations();

  const debouncedValue = useDebounce(value);

  useEffect(() => {
    router.push(`/search${debouncedValue ? `?q=${debouncedValue}` : ''}`);
  }, [debouncedValue, router]);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
      className="mx-auto max-w-[50rem]"
    >
      <Label htmlFor="search" className="sr-only">
        Search
      </Label>
      <Input
        id="search"
        onChange={(event) => {
          setValue(event.target.value);
        }}
        placeholder={t('search')}
      />
      <button type="submit" className="sr-only">
        submit
      </button>
    </form>
  );
};
