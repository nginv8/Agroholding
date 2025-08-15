import React from 'react';
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';

import type { NavigationControlsProps } from './types';

export const NavigationControls: React.FC<NavigationControlsProps> = ({
  scrollPrev,
  scrollNext,
  isPlaying,
  toggleAutoplay,
}) => (
  <div className="group/panel absolute right-6 top-6 z-30 hidden items-center gap-1 rounded-lg backdrop-blur-md transition-colors duration-300 hover:bg-black/10 md:flex">
    {/* Previous Button */}
    <button
      onClick={scrollPrev}
      className="group relative size-10 rounded-md transition-all duration-200 hover:bg-black/20"
      aria-label="Previous slide"
    >
      <ChevronLeft className="absolute left-1/2 top-1/2 size-4 -translate-x-1/2 -translate-y-1/2 text-white/50 transition-transform hover:text-white group-hover:scale-125 group-hover/panel:text-white/70" />
    </button>

    {/* Play/Pause Button */}
    <button
      onClick={toggleAutoplay}
      className="group relative size-10 rounded-md transition-all duration-200 hover:bg-black/20"
      aria-label={isPlaying ? 'Pause autoplay' : 'Start autoplay'}
    >
      {isPlaying ? (
        <Pause className="absolute left-1/2 top-1/2 size-4 -translate-x-1/2 -translate-y-1/2 text-white/50 transition-transform hover:text-white group-hover:scale-110 group-hover/panel:text-white/70" />
      ) : (
        <Play className="absolute left-1/2 top-1/2 size-4 -translate-x-1/2 -translate-y-1/2 text-white/50 transition-transform hover:text-white group-hover:scale-110 group-hover/panel:text-white/70" />
      )}
    </button>

    {/* Next Button */}
    <button
      onClick={scrollNext}
      className="group relative size-10 rounded-md transition-all duration-200 hover:bg-black/20"
      aria-label="Next slide"
    >
      <ChevronRight className="absolute left-1/2 top-1/2 size-4 -translate-x-1/2 -translate-y-1/2 text-white/50 transition-transform hover:text-white group-hover:scale-125 group-hover/panel:text-white/70" />
    </button>
  </div>
);
