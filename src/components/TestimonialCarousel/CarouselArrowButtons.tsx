'use client';

import React, { ComponentPropsWithRef, useCallback, useEffect, useState } from 'react';
import { EmblaCarouselType } from 'embla-carousel';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import { cn } from '@/utilities/ui';

type UsePrevNextButtonsType = {
  prevBtnDisabled: boolean;
  nextBtnDisabled: boolean;
  onPrevButtonClick: () => void;
  onNextButtonClick: () => void;
};

export const usePrevNextButtons = (
  emblaApi: EmblaCarouselType | undefined,
  onButtonClick?: (emblaApi: EmblaCarouselType) => void
): UsePrevNextButtonsType => {
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

  const onPrevButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
    if (onButtonClick) onButtonClick(emblaApi);
  }, [emblaApi, onButtonClick]);

  const onNextButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
    if (onButtonClick) onButtonClick(emblaApi);
  }, [emblaApi, onButtonClick]);

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect(emblaApi);
    emblaApi.on('reInit', onSelect).on('reInit', onSelect).on('select', onSelect);
  }, [emblaApi, onSelect]);

  return {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  };
};

type ArrowButtonProps = ComponentPropsWithRef<'button'> & {
  className?: string;
};

export const PrevButton: React.FC<ArrowButtonProps> = (props) => {
  const { children, className, ...restProps } = props;

  return (
    <button
      type="button"
      className={cn(
        'group relative size-10 rounded-md transition-all duration-200 hover:bg-black/20 disabled:hover:bg-transparent',
        className
      )}
      {...restProps}
    >
      <ChevronLeft className="absolute left-1/2 top-1/2 size-4 -translate-x-1/2 -translate-y-1/2 text-white/50 transition-transform group-hover:scale-125 group-hover:text-white group-[:disabled:hover]:text-white/50" />
      {children}
    </button>
  );
};

export const NextButton: React.FC<ArrowButtonProps> = (props) => {
  const { children, className, ...restProps } = props;

  return (
    <button
      type="button"
      className={cn(
        'group peer relative size-10 rounded-md transition-all duration-200 hover:bg-black/20 disabled:hover:bg-transparent',
        className
      )}
      {...restProps}
    >
      <ChevronRight className="absolute left-1/2 top-1/2 size-4 -translate-x-1/2 -translate-y-1/2 text-white/50 transition-transform group-hover:scale-125 group-hover:text-white group-[:disabled:hover]:text-white/50" />
      {children}
    </button>
  );
};
