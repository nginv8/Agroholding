import React from 'react';

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
  const logoUrls = {
    light: '/logo-light.svg',
    dark: '/logo.svg',
  };

  const loading = loadingFromProps || 'lazy';
  const priority = priorityFromProps || 'low';

  return (
    /* eslint-disable @next/next/no-img-element */
    <img
      alt="Payload Logo"
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
