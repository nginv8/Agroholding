'use client';

import { useTheme } from 'next-themes';
import { Toaster as Sonner } from 'sonner';

type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = 'system' } = useTheme();

  return (
    <Sonner
      theme={theme as ToasterProps['theme']}
      className="group/toaster"
      toastOptions={{
        classNames: {
          toast:
            'group/toast group/toaster:bg-background group/toaster:text-foreground group/toaster:border-border group/toaster:shadow-lg group/toast:flex group/toast:items-start',
          description: 'group/toast:text-muted-foreground',
          actionButton: 'group/toast:bg-primary group/toast:text-primary-foreground',
          cancelButton: 'group/toast:bg-muted group/toast:text-muted-foreground',
          success: 'group/toast border-green-500 [&>[data-icon]]:text-green-600',
          error: 'group/toast border-red-500 [&>[data-icon]]:text-red-600',
          warning: 'group/toast border-yellow-500 [&>[data-icon]]:text-yellow-600',
          info: 'group/toast border-blue-500 [&>[data-icon]]:text-blue-600',
        },
      }}
      {...props}
    />
  );
};

export { Toaster };
