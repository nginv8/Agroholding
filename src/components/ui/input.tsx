import * as React from 'react';

import { cn } from '@/utilities/ui';

const Input: React.FC<
  {
    ref?: React.Ref<HTMLInputElement>;
  } & React.InputHTMLAttributes<HTMLInputElement>
> = ({ type, className, ref, ...props }) => {
  return (
    <input
      className={cn(
        'flex h-10 w-full rounded border border-border bg-background px-3 py-2 text-sm text-foreground ring-offset-background transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus:border-ring focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:bg-muted disabled:opacity-50 dark:border-white/20 dark:bg-white/10 dark:text-white dark:placeholder:text-white/80 dark:focus:border-accent',
        className
      )}
      ref={ref}
      type={type}
      {...props}
    />
  );
};

export { Input };
