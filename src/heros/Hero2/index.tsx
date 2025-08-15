import React from 'react';
import * as motion from 'motion/react-client';

import { getAccentTextStyles, getAlignmentClasses, getTitleParts } from '@/utilities/titleHelpers';
import { cn } from '@/utilities/ui';

import { BackgroundSection } from './BackgroundSection';
import { HeroDescription } from './HeroDescription';
import { HeroLinks } from './HeroLinks';
import { HeroSubtitle } from './HeroSubtitle';
import { HeroTitle } from './HeroTitle';
import { SideImage } from './SideImage';
import { StatsSection } from './StatsSection';
import type { HeroBlock } from './types';

export const Hero2: React.FC<HeroBlock> = ({
  layout,
  title,
  backgroundImage,
  sideImage,
  imageSide,
  links,
  stats,
}) => {
  if (layout !== 'hero2') return null;

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
    <section data-theme="dark" className="relative flex flex-1 flex-col overflow-hidden">
      <BackgroundSection backgroundImage={backgroundImage} />

      <div
        className={cn(
          'container relative z-20 mx-auto grid grow items-center justify-center gap-12 px-4 py-10 lg:grid-cols-2 lg:py-16',
          imageSide === 'left' && 'lg:grid-flow-col-dense'
        )}
      >
        {/* Content column */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className={cn(
            'order-1 max-w-xl text-white lg:order-none',
            imageSide === 'left' && 'lg:col-start-2',
            imageSide !== 'left' && 'lg:col-start-1',
            alignmentClasses
          )}
        >
          {title?.subtitle && <HeroSubtitle subtitle={title.subtitle} />}

          {title?.title && (
            <HeroTitle beforeText={beforeText} accentStyles={accentStyles} afterText={afterText} />
          )}

          {title?.description && <HeroDescription description={title.description} />}

          {/* Mobile Image - показується тільки на мобільних між описом і кнопками */}
          <div className="my-12 lg:hidden">
            <SideImage sideImage={sideImage} imageSide={imageSide} />
          </div>

          {links && links.length > 0 && <HeroLinks links={links} alignment={title?.alignment} />}
        </motion.div>

        {/* Desktop Image - показується тільки на десктопі */}
        <div className="hidden lg:block">
          <SideImage sideImage={sideImage} imageSide={imageSide} />
        </div>
      </div>

      {stats && stats.length > 0 && <StatsSection stats={stats} />}
    </section>
  );
};
