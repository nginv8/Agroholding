import React from 'react';
import * as motion from 'motion/react-client';

import type { StatItemProps } from './types';

export const StatItem: React.FC<StatItemProps> = ({ stat, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.6 + index * 0.1, duration: 1 }}
    className="text-center text-foreground"
  >
    <div className="mb-2 text-3xl font-bold text-accent-400">{stat.number}</div>
    <div className="text-sm uppercase tracking-wider text-muted-foreground">{stat.label}</div>
  </motion.div>
);
