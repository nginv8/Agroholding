import React from 'react';

import { cn } from '@/utilities/ui';

import { BackgroundImage } from './BackgroundImage';
import { HeroDescription } from './HeroDescription';
import { HeroLinks } from './HeroLinks';
import { HeroSubtitle } from './HeroSubtitle';
import { HeroTitle } from './HeroTitle';
import type { HeroBlock } from './types';

export const Hero1: React.FC<HeroBlock> = ({ layout, title, backgroundImage, links, isFirst }) => {
  if (layout !== 'hero1') return null;

  const alignment = title?.alignment || 'left';
  const variant = title?.variant || 'colorAccent';

  return (
    <section className="relative flex grow items-center overflow-hidden bg-black" data-theme="dark">
      <BackgroundImage backgroundImage={backgroundImage} isFirst={isFirst} />

      <div
        className={cn('content-container relative z-20 py-10 text-white lg:py-16', {
          'items-start justify-start text-left': alignment === 'left',
          'items-center justify-center text-center': alignment === 'center',
          'items-end justify-end text-right': alignment === 'right',
        })}
      >
        {title?.subtitle && <HeroSubtitle subtitle={title.subtitle} />}

        {title?.title && <HeroTitle title={title.title} variant={variant} />}

        {title?.description && <HeroDescription description={title.description} />}

        {links && Array.isArray(links) && links.length > 0 && (
          <HeroLinks links={links} alignment={title?.alignment} />
        )}
      </div>
    </section>
  );
};
