import { Media } from '@/components/Media';
import { cn } from '@/utilities/ui';
import { Media as MediaType } from '@/payload-types';

type SectionBackgroundProps = {
  className?: string;
  theme?: 'dark' | 'light' | null;
  img?: MediaType | number | null;
  variant?: 'gradient' | 'image' | 'gradient and image' | 'none' | null;
  gradientType?: 'bottom' | 'top' | 'top and bottom' | null;
};

type getBgClassesArgs = {
  variant: SectionBackgroundProps['variant'];
  gradientType: SectionBackgroundProps['gradientType'];
  theme: SectionBackgroundProps['theme'];
};

const getBgClasses = ({ variant, gradientType, theme }: getBgClassesArgs): string => {
  const colors = {
    light: {
      top: 'before:from-secondary-100',
      bottom: 'after:from-secondary-100',
      bg: 'bg-white',
    },
    dark: {
      top: 'before:from-primary-950',
      bottom: 'after:from-primary-950',
      bg: 'bg-primary-900',
    },
  };

  if (!theme) theme = 'light';
  if (variant !== 'gradient' && variant !== 'gradient and image') return colors[theme].bg;

  const classes = [colors[theme].bg];
  const top = `before:absolute before:inset-0 before:bg-gradient-to-b before:to-trasparent before:to-40% ${colors[theme].top}`;
  const bottom = `after:absolute after:inset-0 after:bg-gradient-to-t after:to-trasparent after:to-40% ${colors[theme].bottom}`;

  if (gradientType === 'top') classes.push(top);
  else if (gradientType === 'bottom') classes.push(bottom);
  else if (gradientType === 'top and bottom') classes.push(top, bottom);

  return cn(...classes);
};

export const SectionBackground = ({
  className = '',
  theme = 'light',
  img = null,
  variant = 'none',
  gradientType = 'top and bottom',
}: SectionBackgroundProps) => {
  const gradientClasses = getBgClasses({ variant, gradientType, theme });

  return (
    <div className={cn('absolute inset-0 z-0', gradientClasses, className)}>
      {(variant === 'image' || variant === 'gradient and image') && img && (
        <Media
          resource={img}
          alt="Background image"
          fill
          className={cn(
            'absolute inset-0 opacity-20',
            theme === 'dark' ? 'opacity-20 mix-blend-multiply' : 'saturate-30 opacity-5'
          )}
          imgClassName="size-full object-cover"
        />
      )}
    </div>
  );
};
