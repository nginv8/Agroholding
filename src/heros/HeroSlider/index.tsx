'use client';

import React from 'react';

import { NavigationControls } from './NavigationControls';
import { SlideContainer } from './SlideContainer';
import type { HeroSliderProps } from './types';
import { useSlider } from './useSlider';
import { VerticalNavigation } from './VerticalNavigation';

export const HeroSlider: React.FC<HeroSliderProps> = ({ children }) => {
  const {
    emblaRef,
    selectedIndex,
    progress,
    isMobile,
    isPlaying,
    scrollPrev,
    scrollNext,
    scrollTo,
    toggleAutoplay,
  } = useSlider();

  return (
    <div className="relative select-none">
      <SlideContainer emblaRef={emblaRef}>{children}</SlideContainer>

      <NavigationControls
        scrollPrev={scrollPrev}
        scrollNext={scrollNext}
        isPlaying={isPlaying}
        toggleAutoplay={toggleAutoplay}
      />

      <VerticalNavigation
        selectedIndex={selectedIndex}
        scrollTo={scrollTo}
        progress={progress}
        isPlaying={isPlaying}
        isMobile={isMobile}
      >
        {children}
      </VerticalNavigation>
    </div>
  );
};
