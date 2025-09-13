'use client';

import { FC, useCallback } from 'react';
import { EmblaCarouselType, EmblaOptionsType } from 'embla-carousel';
import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';

import { cn } from '@/utilities/ui';
import type { TestimonialBlock as TestimonialBlockProps } from '@/payload-types';

import { NextButton, PrevButton, usePrevNextButtons } from './CarouselArrowButtons';
import { DotButton, useDotButton } from './CarouselDotButton';
import { CarouselSlide } from './CarouselSlide';

type CarouselProps = {
  slides?: TestimonialBlockProps['testimonials'];
  options?: EmblaOptionsType & { autoplay: boolean };
};

export const TestimonialCarousel: FC<CarouselProps> = (props) => {
  const { slides = [], options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options, options?.autoplay ? [Autoplay()] : []);

  const onNavButtonClick = useCallback((emblaApi: EmblaCarouselType) => {
    const autoplay = emblaApi?.plugins()?.autoplay;
    if (!autoplay) return;

    const resetOrStop =
      autoplay.options.stopOnInteraction === false ? autoplay.reset : autoplay.stop;

    resetOrStop();
  }, []);

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi, onNavButtonClick);

  const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } =
    usePrevNextButtons(emblaApi, onNavButtonClick);

  const canNavigate = scrollSnaps.length > 1;

  return (
    <div className="relative z-10 mx-auto w-full select-none space-y-8">
      <div className="overflow-hidden" ref={emblaRef}>
        <div
          className="flex touch-pan-y"
          style={{ marginLeft: 'calc(var(--testimonials-slide-spacing) * -1)' }}
        >
          {slides?.map((slide) => (
            <CarouselSlide
              key={slide.id}
              className="min-w-0 flex-none"
              style={{
                flexBasis: 'var(--testimonials-slide-size)',
                paddingLeft: 'var(--testimonials-slide-spacing)',
              }}
              slide={slide}
            />
          ))}
        </div>
      </div>

      {canNavigate && (
        <div className="flex w-full items-end justify-between">
          <div className="flex items-center space-x-2">
            {scrollSnaps.map((_, index) => (
              <DotButton
                key={index}
                onClick={() => onDotButtonClick(index)}
                className="group relative"
              >
                <div
                  className={cn(
                    'relative h-1.5 overflow-hidden transition-all duration-500 ease-in-out',
                    index === selectedIndex
                      ? 'w-10 bg-gradient-to-r from-green-400 to-green-600 shadow-lg shadow-green-400/50'
                      : 'w-6 bg-black/10 group-hover:w-8 group-hover:bg-black/20 dark:bg-white/20 group-hover:dark:bg-white/30'
                  )}
                  style={{
                    clipPath:
                      index === selectedIndex
                        ? 'polygon(10% 0, 100% 0, 90% 100%, 0 100%)'
                        : 'polygon(20% 0, 100% 0, 80% 100%, 0 100%)',
                  }}
                />
                <div
                  className={cn(
                    'absolute -top-10 left-1/2 -translate-x-1/2 rounded bg-black/60 text-white/80 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100',
                    { 'text-green-400': index === selectedIndex }
                  )}
                >
                  <span className="px-2 py-1 font-mono text-xs">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
              </DotButton>
            ))}
          </div>

          <div className="group/panel flex items-center gap-1 rounded-lg bg-black/10 backdrop-blur-md">
            <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
            <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
          </div>
        </div>
      )}
    </div>
  );
};
