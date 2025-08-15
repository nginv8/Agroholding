import React from 'react';
import * as motion from 'motion/react-client';

import type { HeroSubtitleProps } from './types';

export const HeroSubtitle: React.FC<HeroSubtitleProps> = ({ subtitle }) => (
  <motion.span
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="mb-6 inline-block max-w-4xl rounded-full border border-white/30 px-4 py-1.5 text-sm font-medium backdrop-blur-sm"
  >
    {subtitle}
  </motion.span>
);
