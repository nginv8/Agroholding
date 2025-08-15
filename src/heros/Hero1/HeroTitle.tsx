import React from 'react';
import * as motion from 'motion/react-client';

import type { HeroTitleProps } from './types';

export const HeroTitle: React.FC<HeroTitleProps> = ({ beforeText, accentStyles, afterText }) => (
  <motion.h1
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.2 }}
    className="mb-6 max-w-4xl text-pretty text-4xl font-bold leading-tight md:text-5xl lg:text-6xl"
  >
    {beforeText}
    {accentStyles && <span className={accentStyles.className}>{accentStyles.text}</span>}
    {afterText}
  </motion.h1>
);
