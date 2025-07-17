import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/utilities/ui';

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    defaultVariants: {
      size: 'default',
      variant: 'default',
    },
    variants: {
      size: {
        clear: '',
        default: 'h-10 px-4 py-2',
        icon: 'flex size-10 shrink-0 items-center justify-center p-0',
        lg: 'h-11 rounded px-8',
        sm: 'h-9 rounded px-3',
      },
      variant: {
        default:
          'bg-primary text-primary-foreground hover:bg-primary/90 dark:bg-accent dark:text-accent-foreground dark:hover:bg-accent/90',
        destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/80',
        ghost: 'text-foreground hover:bg-foreground hover:text-background',
        link: 'text-primary underline-offset-4 hover:underline dark:text-accent',
        outline:
          'text-foreground border border-foreground bg-transparent hover:border-foreground hover:bg-foreground hover:text-background',
        secondary:
          'bg-secondary text-secondary-foreground hover:bg-secondary/60 dark:hover:bg-secondary/80',
      },
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  ref?: React.Ref<HTMLButtonElement>;
}

const Button: React.FC<ButtonProps> = ({
  asChild = false,
  className,
  size,
  variant,
  ref,
  ...props
}) => {
  const Comp = asChild ? Slot : 'button';
  return <Comp className={cn(buttonVariants({ className, size, variant }))} ref={ref} {...props} />;
};

export { Button, buttonVariants };
