import React from 'react';
import * as motion from 'motion/react-client';

import type { HeroSubtitleProps } from './types';

export const HeroSubtitle: React.FC<HeroSubtitleProps> = ({ subtitle }) => (
  <motion.span
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.2, duration: 1, ease: [0.16, 1, 0.3, 1] }}
    className="mb-4 inline-block text-sm font-medium uppercase tracking-wider text-accent-400 md:mb-5 lg:mb-6"
  >
    {subtitle}
  </motion.span>
);
