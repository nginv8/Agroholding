import React from 'react';

import { Media } from '@/components/Media';
import type { Post } from '@/payload-types';

interface HeroBackgroundProps {
  heroImage: Post['heroImage'];
}

export const HeroBackground = ({ heroImage }: HeroBackgroundProps) => {
  return (
    <div className="min-h-[80vh] select-none">
      {heroImage && typeof heroImage === 'object' && (
        <Media
          fill
          priority
          loading="eager"
          className="absolute inset-0"
          imgClassName="object-cover object-center"
          resource={heroImage}
        />
      )}
      <div className="pointer-events-none absolute bottom-0 left-0 h-1/2 w-full bg-gradient-to-t from-black to-transparent" />
    </div>
  );
};
