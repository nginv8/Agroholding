import React from 'react';
import * as motion from 'motion/react-client';

import { getTitleParts } from '@/utilities/titleHelpers';
import { cn } from '@/utilities/ui';

import type { HeroTitleProps } from './types';

export const HeroTitle: React.FC<HeroTitleProps> = ({ title, variant }) => {
  const { parts } = getTitleParts(title);

  return (
    <motion.h1
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3, duration: 1 }}
      className="mb-4 text-pretty text-4xl font-bold leading-tight sm:text-5xl lg:mb-8 xl:text-6xl"
    >
      {parts.map((part, index) =>
        part.isAccent ? (
          <span
            key={index}
            className={cn({
              'text-primary-700 dark:text-accent-400': variant === 'colorAccent',
              'font-light': variant === 'weightAccent',
            })}
          >
            {part.text}
          </span>
        ) : (
          <span key={index}>{part.text}</span>
        )
      )}
    </motion.h1>
  );
};
