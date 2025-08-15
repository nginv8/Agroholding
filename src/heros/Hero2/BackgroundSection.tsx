import React from 'react';

import { Media } from '@/components/Media';

import type { BackgroundSectionProps } from './types';

export const BackgroundSection: React.FC<BackgroundSectionProps> = ({ backgroundImage, isFirst }) => (
  <div className="absolute inset-0">
    {backgroundImage && typeof backgroundImage === 'object' && (
      <Media resource={backgroundImage} fill imgClassName="object-cover" priority={isFirst} />
    )}
    <div className="absolute inset-0 bg-black/50" />
    <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/50 to-transparent" />
    <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/50 to-transparent" />
  </div>
);
