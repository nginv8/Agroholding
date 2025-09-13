import * as motion from 'motion/react-client';

import { getTitleParts } from '@/utilities/titleHelpers';
import { cn } from '@/utilities/ui';

interface SectionTitleProps {
  title?: string | null;
  subtitle?: string | null;
  description?: string | null;
  variant?: 'colorAccent' | 'weightAccent' | null;
  alignment?: 'left' | 'center' | 'right' | null;
  className?: string;
}

export function SectionTitle({
  title,
  subtitle,
  description,
  variant = 'colorAccent',
  alignment = 'left',
  className,
}: SectionTitleProps) {
  if (!title) return null;

  const { parts } = getTitleParts(title);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className={cn(
        'relative mb-10 max-w-2xl md:mb-16',
        {
          'text-left': alignment === 'left',
          'mx-auto text-center': alignment === 'center',
          'ml-auto text-right': alignment === 'right',
        },
        className
      )}
    >
      {variant === 'weightAccent' && (
        <>
          <h2 className="mb-4 text-3xl font-light capitalize leading-tight text-secondary-800 md:mb-8 md:text-4xl lg:text-5xl dark:text-white">
            {parts.map((part, index) =>
              part.isAccent ? (
                <span key={index} className="font-semibold">
                  {part.text}
                </span>
              ) : (
                <span key={index}>{part.text}</span>
              )
            )}
          </h2>
          <div
            className={cn(
              'mb-5 flex after:block after:h-1 after:w-32 after:bg-accent-500 md:mb-8',
              {
                'justify-start': alignment === 'left',
                'justify-center': alignment === 'center',
                'justify-end': alignment === 'right',
              }
            )}
          />
          {description && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-lg font-light leading-relaxed text-secondary-600 md:text-xl dark:text-secondary-200"
            >
              {description}
            </motion.p>
          )}
        </>
      )}

      {variant === 'colorAccent' && (
        <>
          {subtitle && (
            <span className="mb-4 inline-block text-sm font-medium uppercase tracking-wider text-accent-600 md:mb-8 dark:text-accent-400">
              {subtitle}
            </span>
          )}
          <h2 className="mb-5 text-4xl font-bold leading-tight text-secondary-900 md:mb-8 lg:text-5xl dark:text-white">
            {parts.map((part, index) =>
              part.isAccent ? (
                <span key={index} className="text-primary-700 dark:text-accent-400">
                  {part.text}
                </span>
              ) : (
                <span key={index}>{part.text}</span>
              )
            )}
          </h2>
          {description && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-xl leading-relaxed text-secondary-600 dark:text-secondary-100"
            >
              {description}
            </motion.p>
          )}
        </>
      )}
    </motion.div>
  );
}
