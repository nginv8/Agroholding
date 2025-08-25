import type { FieldHook } from 'payload';

import slugifyLibrary from 'slugify';

export const formatSlug = (val: string): string => {
  return slugifyLibrary(val, {
    lower: true,
    strict: true,
    locale: 'uk',
    trim: true,
  });
};

export const formatSlugHook =
  (fallback: string): FieldHook =>
  ({ data, operation, value }) => {
    if (typeof value === 'string') {
      return formatSlug(value);
    }

    if (operation === 'create' || !data?.slug) {
      const fallbackData = data?.[fallback] || data?.[fallback];

      if (fallbackData && typeof fallbackData === 'string') {
        return formatSlug(fallbackData);
      }
    }

    return value;
  };
