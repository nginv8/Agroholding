import * as React from 'react';

import { cn } from '@/utilities/ui';

export const Width: React.FC<{
  children: React.ReactNode;
  className?: string;
  width?: number | string;
}> = ({ children, className, width }) => {
  return (
    <div
      className={cn('mb-6 box-border w-full space-y-2 px-3 last:mb-0', className)}
      style={{ flex: width ? `0 0 ${width}%` : '0 0 100%' }}
    >
      {children}
    </div>
  );
};
