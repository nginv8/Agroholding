import React from 'react';

import { Media } from '@/components/Media';

import type { BackgroundImageProps } from './types';

export const BackgroundImage: React.FC<BackgroundImageProps> = ({ backgroundImage, isFirst }) => (
  <div className="absolute inset-0">
    {backgroundImage && typeof backgroundImage === 'object' && (
      <Media resource={backgroundImage} fill imgClassName="object-cover" priority={isFirst} />
    )}
    <div className="absolute inset-0 bg-black/50" />
  </div>
);
