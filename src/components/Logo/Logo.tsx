import React from 'react';
import { useLocale } from 'next-intl';

import { cn } from '@/utilities/ui';

interface Props {
  className?: string;
  variant?: 'dark' | 'light';
  loading?: 'lazy' | 'eager';
  priority?: 'auto' | 'high' | 'low';
}

export const Logo = (props: Props) => {
  const {
    loading: loadingFromProps,
    priority: priorityFromProps,
    className,
    variant = 'dark',
  } = props;

  const locale = useLocale();

  const logoUrls = {
    light: `/logo-light-${locale}.svg`,
    dark: `/logo-${locale}.svg`,
  };

  const loading = loadingFromProps || 'lazy';
  const priority = priorityFromProps || 'low';

  return (
    /* eslint-disable @next/next/no-img-element */
    <img
      alt="Logo"
      width={176}
      height={56}
      loading={loading}
      fetchPriority={priority}
      decoding="async"
      className={cn('h-14 w-full max-w-44', className)}
      src={logoUrls[variant]}
    />
  );
};
