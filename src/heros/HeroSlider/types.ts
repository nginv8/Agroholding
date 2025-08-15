import React from 'react';

export interface HeroSliderProps {
  children: React.ReactNode[];
}

export interface NavigationControlsProps {
  scrollPrev: () => void;
  scrollNext: () => void;
  isPlaying: boolean;
  toggleAutoplay: () => void;
}

export interface VerticalNavigationProps {
  children: React.ReactNode[];
  selectedIndex: number;
  scrollTo: (index: number) => void;
  progress: number;
  isPlaying: boolean;
  isMobile: boolean;
}

export interface SlideContainerProps {
  children: React.ReactNode[];
  emblaRef: (emblaRoot: HTMLElement | null) => void;
}
