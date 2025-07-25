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

  return (
    <div className="relative z-10 mx-auto w-full xl:-mt-32">
      <div className="mb-16 hidden items-center justify-end gap-4 px-4 xl:flex">
        <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
        <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
      </div>

      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex touch-pan-y" style={{ marginLeft: 'calc(var(--slide-spacing) * -1)' }}>
          {slides?.map((slide) => (
            <CarouselSlide
              key={slide.id}
              className="min-w-0 flex-none"
              style={{
                flexBasis: 'var(--slide-size)',
                paddingLeft: 'var(--slide-spacing)',
              }}
              slide={slide}
            />
          ))}
        </div>
      </div>

      <div className="flex w-full items-center justify-between">
        <div className="flex flex-wrap items-center justify-center gap-4 xl:absolute xl:-right-16 xl:top-1/2 xl:-translate-y-1/2 xl:flex-col xl:gap-y-6">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={cn(
                'cursor-pointer rounded-xl transition-colors duration-200 ease-in-out',
                index === selectedIndex
                  ? 'h-4 w-2 bg-primary-500 xl:h-2 xl:w-4 dark:bg-accent-300'
                  : 'size-2 bg-secondary-200 dark:bg-white/30'
              )}
            />
          ))}
        </div>

        <div className="flex items-center justify-end xl:hidden">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
      </div>
    </div>
  );
};
