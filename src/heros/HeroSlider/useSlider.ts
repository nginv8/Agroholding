import { useCallback, useEffect, useMemo, useState } from 'react';
import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';

const MOBILE_BREAKPOINT = 768;
const AUTOPLAY_DELAY = 8000;
const PROGRESS_UPDATE_INTERVAL = 50;

export const useSlider = () => {
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
    autoplay?.stop();
    emblaApi?.scrollPrev();
  }, [emblaApi, autoplay]);

  const scrollNext = useCallback(() => {
    autoplay?.stop();
    emblaApi?.scrollNext();
  }, [emblaApi, autoplay]);

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

  // Screen size effect
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // Embla API event listeners
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
    emblaApi.on('pointerDown', updateAutoplayState);
    emblaApi.on('settle', updateAutoplayState);

    updateSelectedIndex();
    updateAutoplayState();

    return () => {
      emblaApi.off('select', updateSelectedIndex);
      emblaApi.off('init', updateSelectedIndex);
      emblaApi.off('autoplay:play', updateAutoplayState);
      emblaApi.off('autoplay:stop', updateAutoplayState);
      emblaApi.off('pointerDown', updateAutoplayState);
      emblaApi.off('settle', updateAutoplayState);
    };
  }, [emblaApi, autoplay]);

  // Mobile autoplay control
  useEffect(() => {
    if (!autoplay) return;

    if (isMobile) {
      autoplay.stop();
    } else if (!autoplay.isPlaying()) {
      autoplay.play();
    }
  }, [autoplay, isMobile]);

  // Progress tracking
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

  // Autoplay state sync
  useEffect(() => {
    if (!autoplay) return;

    const syncAutoplayState = () => {
      const currentIsPlaying = autoplay.isPlaying();
      if (currentIsPlaying !== isPlaying) {
        setIsPlaying(currentIsPlaying);
      }
    };

    const syncInterval = setInterval(syncAutoplayState, 200);

    return () => {
      clearInterval(syncInterval);
    };
  }, [autoplay, isPlaying]);

  return {
    emblaRef,
    selectedIndex,
    progress,
    isMobile,
    isPlaying,
    scrollPrev,
    scrollNext,
    scrollTo,
    toggleAutoplay,
  };
};
