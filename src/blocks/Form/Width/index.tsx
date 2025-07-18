import * as React from 'react';

import { cn } from '@/utilities/ui';

export const Width: React.FC<{
  children: React.ReactNode;
  className?: string;
  width?: number | string;
}> = ({ children, className, width }) => {
  return (
    <div
      className={cn('mb-6 last:mb-0', className)}
      style={{ maxWidth: width ? `${width}%` : '100%' }}
    >
      {children}
    </div>
  );
};
