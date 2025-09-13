'use client';

import { useTheme } from 'next-themes';
import { Toaster as Sonner } from 'sonner';

type ToasterProps = React.ComponentProps<typeof Sonner> & {
  showCloseButton?: boolean;
};

const Toaster = ({ showCloseButton = false, ...props }: ToasterProps) => {
  const { theme = 'light' } = useTheme();

  return (
    <Sonner
      theme={theme as ToasterProps['theme']}
      className="group/toaster"
      closeButton={showCloseButton}
      toastOptions={{
        classNames: {
          toast:
            'group/toast group/toaster:bg-background group/toaster:text-foreground group/toaster:border-border group/toaster:shadow-lg group/toast:flex group/toast:items-start [&>[data-icon]]:self-start [&>[data-icon]]:mt-0.5',
          description: 'group/toast:text-muted-foreground',
          actionButton: 'group/toast:bg-primary group/toast:text-primary-foreground',
          cancelButton: 'group/toast:bg-muted group/toast:text-muted-foreground',
          closeButton:
            'group/toast:bg-background group/toast:text-foreground group/toast:border-0 group/toast:hover:bg-muted',
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
