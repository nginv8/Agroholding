import React from 'react';
import * as motion from 'motion/react-client';

import type { HeroTitleProps } from './types';

export const HeroTitle: React.FC<HeroTitleProps> = ({ beforeText, accentStyles, afterText }) => (
  <motion.h1
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.3, duration: 1 }}
    className="mb-4 text-pretty text-4xl font-bold leading-tight sm:text-5xl lg:mb-8 xl:text-6xl"
  >
    {beforeText}
    {accentStyles && <span className={accentStyles.className}>{accentStyles.text}</span>}
    {afterText}
  </motion.h1>
);
