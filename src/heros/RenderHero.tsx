import React from 'react';

import { Hero1 } from '@/heros/Hero1';
import { Hero2 } from '@/heros/Hero2';
import { HeroSlider } from '@/heros/HeroSlider';
import type { Page } from '@/payload-types';

export const RenderHero: React.FC<{ hero?: Page['hero'] }> = ({ hero }) => {
  if (!hero || !Array.isArray(hero) || hero.length === 0) return null;

  // If only one slide
  if (hero.length === 1) {
    return (
      <div className="flex min-h-[calc(100vh-112px)] select-none items-stretch justify-stretch">
        {hero[0]?.layout === 'hero1' && <Hero1 {...hero[0]} isFirst />}
        {hero[0]?.layout === 'hero2' && <Hero2 {...hero[0]} isFirst />}
      </div>
    );
  }

  // Multiple slides - use carousel
  return (
    <HeroSlider>
      {hero.map((slide, index) => {
        if (slide?.layout === 'hero1')
          return <Hero1 key={index} {...slide} isFirst={index === 0} />;
        if (slide?.layout === 'hero2')
          return <Hero2 key={index} {...slide} isFirst={index === 0} />;
      })}
    </HeroSlider>
  );
};
