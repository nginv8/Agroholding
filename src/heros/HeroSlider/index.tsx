'use client';

import React, { useCallback, useEffect } from 'react';
import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';
import * as motion from 'motion/react-client';

import { cn } from '@/utilities/ui';

interface HeroSliderProps {
  children: React.ReactNode[];
}

export const HeroSlider: React.FC<HeroSliderProps> = ({ children }) => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [progress, setProgress] = React.useState(0);
  const [isMobile, setIsMobile] = React.useState(false);

  const mobileBreakpoint = 768;
  const autoplayOptions = {
    delay: 4000,
    stopOnInteraction: true,
    playOnInit: true,
    stopOnMouseEnter: false,
    stopOnFocusIn: true,
    stopOnLastSnap: false,
  };

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      duration: 30,
    },
    [Autoplay(autoplayOptions)]
  );

  const getAutoplay = useCallback(() => {
    if (!emblaApi) return null;
    return emblaApi.plugins().autoplay;
  }, [emblaApi]);

  const isPlaying = getAutoplay()?.isPlaying() || false;

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < mobileBreakpoint);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    const selectHandler = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
      setProgress(0);
    };

    emblaApi.on('select', selectHandler);
    emblaApi.on('init', selectHandler);

    const autoplay = getAutoplay();
    if (autoplay && isMobile) {
      autoplay.stop();
    } else if (autoplay && !isMobile && !autoplay.isPlaying()) {
      autoplay.play();
    }

    return () => {
      emblaApi.off('select', selectHandler);
      emblaApi.off('init', selectHandler);
    };
  }, [emblaApi, isMobile, getAutoplay]);

  useEffect(() => {
    if (!emblaApi || isMobile) return;

    const autoplay = getAutoplay();
    if (!autoplay) return;

    const updateProgress = () => {
      const timeUntilNext = autoplay.timeUntilNext();
      if (timeUntilNext !== null) {
        const progressPercent =
          ((autoplayOptions.delay - timeUntilNext) / autoplayOptions.delay) * 100;
        setProgress(Math.max(0, Math.min(100, progressPercent)));
      } else {
        setProgress(0);
      }
    };

    const handleTimerSet = () => {
      setProgress(0);
    };

    const handleTimerStopped = () => {
      setProgress(0);
    };

    emblaApi.on('autoplay:timerset', handleTimerSet);
    emblaApi.on('autoplay:timerstopped', handleTimerStopped);

    const interval = setInterval(updateProgress, 50);

    return () => {
      clearInterval(interval);
      emblaApi.off('autoplay:timerset', handleTimerSet);
      emblaApi.off('autoplay:timerstopped', handleTimerStopped);
    };
  }, [emblaApi, selectedIndex, isMobile, autoplayOptions.delay, getAutoplay]);

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  const toggleAutoplay = useCallback(() => {
    const autoplay = getAutoplay();
    if (!autoplay) return;

    if (autoplay.isPlaying()) {
      autoplay.stop();
    } else {
      autoplay.play();
    }
  }, [getAutoplay]);

  const handleMouseEnter = useCallback(() => {
    const autoplay = getAutoplay();
    if (autoplay && autoplay.isPlaying()) {
      autoplay.stop();
    }
  }, [getAutoplay]);

  const handleMouseLeave = useCallback(() => {
    const autoplay = getAutoplay();
    if (autoplay && !autoplay.isPlaying()) {
      autoplay.play();
    }
  }, [getAutoplay]);

  return (
    <div
      className="relative flex min-h-[calc(100vh-112px)] select-none flex-col"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
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
                {index === selectedIndex && getAutoplay()?.isPlaying() && !isMobile && (
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

      {/* Scroll Indicator - Bottom Right */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="absolute bottom-8 left-8 z-20 hidden w-4 flex-col items-center space-y-2 lg:flex"
      >
        <span className="mb-4 origin-center rotate-90 text-xs font-medium text-white/60">
          SCROLL
        </span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          className="h-12 w-px bg-gradient-to-b from-transparent via-white/60 to-transparent"
        />
      </motion.div>

      {/* Progress Counter - Bottom Right */}
      <div className="absolute bottom-8 right-8 z-30 flex items-center gap-4 rounded-lg bg-black/20 p-4 opacity-50 backdrop-blur-md transition-all hover:opacity-100">
        <div className="text-white">
          <span className="font-mono text-2xl font-bold">
            {String(selectedIndex + 1).padStart(2, '0')}
          </span>
          <span className="mx-2 text-white/60">/</span>
          <span className="text-sm text-white/80">{String(children.length).padStart(2, '0')}</span>
        </div>

        <div className="h-1 w-16 overflow-hidden rounded-full bg-white/20">
          <motion.div
            className="h-full bg-gradient-to-r from-primary-400 to-primary-600"
            initial={{ width: '0%' }}
            animate={{ width: `${((selectedIndex + 1) / children.length) * 100}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>
    </div>
  );
};
