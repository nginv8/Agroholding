import { Media } from '@/components/Media';
import { cn } from '@/utilities/ui';
import { Media as MediaType } from '@/payload-types';

type SectionBackgroundProps = {
  className?: string;
  img?: MediaType | number | null;
  variant?: 'gradient' | 'image' | 'gradient and image' | 'none' | null;
  gradientType?: 'bottom' | 'top' | 'top and bottom' | null;
};

type getBgClassesArgs = {
  variant: SectionBackgroundProps['variant'];
  gradientType: SectionBackgroundProps['gradientType'];
};

const getBgClasses = ({ variant, gradientType }: getBgClassesArgs): string => {
  const colors = {
    top: 'before:from-secondary-100 dark:before:from-primary-950',
    bottom: 'after:from-secondary-100 dark:after:from-primary-950',
    bg: 'bg-white dark:bg-primary-900',
  };

  if (variant !== 'gradient' && variant !== 'gradient and image') return colors.bg;

  const classes = [colors.bg];
  const top = `before:absolute before:inset-0 before:bg-gradient-to-b before:to-trasparent before:to-40% ${colors.top}`;
  const bottom = `after:absolute after:inset-0 after:bg-gradient-to-t after:to-trasparent after:to-40% ${colors.bottom}`;

  if (gradientType === 'top') classes.push(top);
  else if (gradientType === 'bottom') classes.push(bottom);
  else if (gradientType === 'top and bottom') classes.push(top, bottom);

  return cn(...classes);
};

export const SectionBackground = ({
  className = '',
  img = null,
  variant = 'none',
  gradientType = 'top and bottom',
}: SectionBackgroundProps) => {
  const gradientClasses = getBgClasses({ variant, gradientType });

  return (
    <div className={cn('absolute inset-0 z-0', gradientClasses, className)}>
      {(variant === 'image' || variant === 'gradient and image') && img && (
        <Media
          resource={img}
          fill
          className="absolute inset-0 opacity-5 dark:opacity-20 dark:mix-blend-multiply"
          imgClassName="size-full object-cover"
        />
      )}
    </div>
  );
};
