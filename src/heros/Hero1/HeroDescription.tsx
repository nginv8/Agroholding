import React from 'react';
import * as motion from 'motion/react-client';

import type { HeroDescriptionProps } from './types';

export const HeroDescription: React.FC<HeroDescriptionProps> = ({ description }) => (
  <motion.p
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.4 }}
    className="mb-8 max-w-2xl text-pretty text-lg text-gray-200 md:text-xl"
  >
    {description}
  </motion.p>
);
