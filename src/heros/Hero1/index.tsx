import React from 'react';

import { getAccentTextStyles, getAlignmentClasses, getTitleParts } from '@/utilities/titleHelpers';
import { cn } from '@/utilities/ui';

import { BackgroundImage } from './BackgroundImage';
import { HeroDescription } from './HeroDescription';
import { HeroLinks } from './HeroLinks';
import { HeroSubtitle } from './HeroSubtitle';
import { HeroTitle } from './HeroTitle';
import type { HeroBlock } from './types';

export const Hero1: React.FC<HeroBlock> = ({ layout, title, backgroundImage, links }) => {
  if (layout !== 'hero1') return null;

  const { beforeText, accentText, afterText } = getTitleParts(
    title?.title ?? undefined,
    title?.accentPart || ''
  );

  const accentStyles = getAccentTextStyles({
    accentText,
    variant: title?.variant || 'colorAccent',
    theme: 'dark',
  });

  const alignmentClasses = getAlignmentClasses(title?.alignment);

  return (
    <section
      className="relative flex w-full items-center overflow-hidden bg-black"
      data-theme="dark"
    >
      <BackgroundImage backgroundImage={backgroundImage} />

      <div
        className={cn(
          'container relative z-20 mx-auto px-4 py-10 text-white lg:py-16',
          alignmentClasses
        )}
      >
        {title?.subtitle && <HeroSubtitle subtitle={title.subtitle} />}

        {title?.title && (
          <HeroTitle beforeText={beforeText} accentStyles={accentStyles} afterText={afterText} />
        )}

        {title?.description && <HeroDescription description={title.description} />}

        {links && Array.isArray(links) && links.length > 0 && (
          <HeroLinks links={links} alignment={title?.alignment} />
        )}
      </div>
    </section>
  );
};
