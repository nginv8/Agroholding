'use client';

import React, { useCallback, useEffect, useMemo, useState } from 'react';
import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';

import { cn } from '@/utilities/ui';

interface HeroSliderProps {
  children: React.ReactNode[];
}

const MOBILE_BREAKPOINT = 768;
const AUTOPLAY_DELAY = 8000;
const PROGRESS_UPDATE_INTERVAL = 50;

export const HeroSlider: React.FC<HeroSliderProps> = ({ children }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const autoplayOptions = useMemo(
    () => ({
      delay: AUTOPLAY_DELAY,
      stopOnInteraction: true,
      playOnInit: true,
      stopOnMouseEnter: false,
      stopOnFocusIn: false,
      stopOnLastSnap: false,
    }),
    []
  );

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      duration: 30,
    },
    [Autoplay(autoplayOptions)]
  );

  const autoplay = useMemo(() => {
    if (!emblaApi) return null;
    return emblaApi.plugins().autoplay;
  }, [emblaApi]);

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => {
      emblaApi?.scrollTo(index);
    },
    [emblaApi]
  );

  const toggleAutoplay = useCallback(() => {
    if (!autoplay) return;

    if (autoplay.isPlaying()) {
      autoplay.stop();
      setIsPlaying(false);
    } else {
      autoplay.play();
      setIsPlaying(true);
    }
  }, [autoplay]);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    const updateSelectedIndex = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
      setProgress(0);
    };

    const updateAutoplayState = () => {
      setIsPlaying(autoplay?.isPlaying() ?? false);
    };

    emblaApi.on('select', updateSelectedIndex);
    emblaApi.on('init', updateSelectedIndex);
    emblaApi.on('autoplay:play', updateAutoplayState);
    emblaApi.on('autoplay:stop', updateAutoplayState);

    updateSelectedIndex();
    updateAutoplayState();

    return () => {
      emblaApi.off('select', updateSelectedIndex);
      emblaApi.off('init', updateSelectedIndex);
      emblaApi.off('autoplay:play', updateAutoplayState);
      emblaApi.off('autoplay:stop', updateAutoplayState);
    };
  }, [emblaApi, autoplay]);

  useEffect(() => {
    if (!autoplay) return;

    if (isMobile) {
      autoplay.stop();
    } else if (!autoplay.isPlaying()) {
      autoplay.play();
    }
  }, [autoplay, isMobile]);

  useEffect(() => {
    if (!autoplay || isMobile || !isPlaying) return;

    const updateProgress = () => {
      const timeUntilNext = autoplay.timeUntilNext();
      if (timeUntilNext !== null) {
        const progressPercent = ((AUTOPLAY_DELAY - timeUntilNext) / AUTOPLAY_DELAY) * 100;
        setProgress(Math.max(0, Math.min(100, progressPercent)));
      } else {
        setProgress(0);
      }
    };

    const resetProgress = () => setProgress(0);

    emblaApi?.on('autoplay:timerset', resetProgress);
    emblaApi?.on('autoplay:timerstopped', resetProgress);

    const interval = setInterval(updateProgress, PROGRESS_UPDATE_INTERVAL);

    return () => {
      clearInterval(interval);
      emblaApi?.off('autoplay:timerset', resetProgress);
      emblaApi?.off('autoplay:timerstopped', resetProgress);
    };
  }, [emblaApi, autoplay, isMobile, isPlaying]);

  return (
    <div className="relative flex min-h-[calc(100vh-112px)] select-none flex-col">
      <div className="flex flex-1 overflow-hidden" ref={emblaRef}>
        <div className="flex flex-1 touch-pan-y touch-pinch-zoom">
          {React.Children.map(children, (child, index) => (
            <div key={index} className="min-w-0 flex-[0_0_100%] transform-gpu">
              {child}
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Controls - Top Right */}
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

      {/* Vertical Navigation - Right Edge */}
      {children.length > 1 && (
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
      )}
    </div>
  );
};
