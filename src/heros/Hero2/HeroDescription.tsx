import React from 'react';
import * as motion from 'motion/react-client';

import type { HeroDescriptionProps } from './types';

export const HeroDescription: React.FC<HeroDescriptionProps> = ({ description }) => (
  <motion.p
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.4, duration: 1 }}
    className="mb-12 text-balance text-lg text-secondary-200"
  >
    {description}
  </motion.p>
);
