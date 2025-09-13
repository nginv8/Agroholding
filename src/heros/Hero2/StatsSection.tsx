import React from 'react';

import { cn } from '@/utilities/ui';

import { StatItem } from './StatItem';
import type { StatsSectionProps } from './types';

export const StatsSection: React.FC<StatsSectionProps> = ({ stats }) => (
  <div className="z-20 max-w-full bg-black/30 backdrop-blur-sm">
    <div className="content-container py-8">
      <div
        className={cn('grid justify-items-center gap-8', {
          'mx-auto max-w-xs grid-cols-1': stats.length === 1,
          'mx-auto max-w-2xl grid-cols-2': stats.length === 2,
          'grid-cols-1 md:grid-cols-3': stats.length === 3,
          'grid-cols-2 md:grid-cols-4': stats.length >= 4,
        })}
      >
        {stats.map((stat, index) => (
          <StatItem key={index} stat={stat} index={index} />
        ))}
      </div>
    </div>
  </div>
);
