import React from 'react';

import { cn } from '@/utilities/ui';

import type { VerticalNavigationProps } from './types';

export const VerticalNavigation: React.FC<VerticalNavigationProps> = ({
  children,
  selectedIndex,
  scrollTo,
  progress,
  isPlaying,
  isMobile,
}) => {
  if (children.length <= 1) return null;

  return (
    <div className="absolute right-6 top-1/2 z-40 hidden -translate-y-1/2 flex-col items-center space-y-6 md:flex">
      {React.Children.map(children, (_, index) => (
        <button
          key={index}
          onClick={() => scrollTo(index)}
          className="group relative"
          aria-label={`Go to slide ${index + 1}`}
        >
          <div
            className={cn(
              'relative w-1.5 overflow-hidden transition-all duration-500 ease-in-out',
              index === selectedIndex
                ? 'h-16 bg-gradient-to-b from-green-400 to-green-600 shadow-lg shadow-green-400/50'
                : 'h-8 bg-white/40 group-hover:h-12 group-hover:bg-white/70'
            )}
            style={{
              clipPath:
                index === selectedIndex
                  ? 'polygon(0 10%, 100% 0%, 100% 90%, 0 100%)'
                  : 'polygon(0 20%, 100% 0%, 100% 80%, 0 100%)',
            }}
          >
            {/* Progress indicator for active slide */}
            {index === selectedIndex && isPlaying && !isMobile && (
              <div
                className="absolute inset-x-0 top-0 bg-gradient-to-b from-accent-600 to-accent-400 transition-all duration-75 ease-linear"
                style={{
                  height: `${progress}%`,
                }}
              />
            )}
          </div>

          <div
            className={cn(
              'absolute -left-10 top-1/2 -translate-y-1/2 rounded bg-black/60 text-white/80 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100',
              { 'text-green-400': index === selectedIndex }
            )}
          >
            <span className="px-2 py-1 font-mono text-xs">
              {String(index + 1).padStart(2, '0')}
            </span>
          </div>
        </button>
      ))}
    </div>
  );
};
