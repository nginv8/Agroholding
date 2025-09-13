import * as React from 'react';

import { cn } from '@/utilities/ui';

const Textarea: React.FC<
  {
    ref?: React.Ref<HTMLTextAreaElement>;
  } & React.TextareaHTMLAttributes<HTMLTextAreaElement>
> = ({ className, ref, ...props }) => {
  return (
    <textarea
      className={cn(
        'flex min-h-[80px] w-full rounded border border-border bg-background px-3 py-2 text-sm text-foreground ring-offset-background transition-colors placeholder:text-muted-foreground focus:border-ring focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:bg-muted disabled:opacity-50 dark:border-white/20 dark:bg-white/10 dark:text-white dark:placeholder:text-white/80 dark:focus:border-accent',
        className
      )}
      ref={ref}
      {...props}
    />
  );
};

export { Textarea };
