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
        'relative flex size-14 transform cursor-pointer items-center justify-center rounded-full text-primary-500 transition-all duration-200 ease-in-out hover:scale-125 hover:text-primary-600 dark:text-accent-400 dark:hover:text-accent-300',
        { 'text-secondary-200': props.disabled },
        className
      )}
      {...restProps}
    >
      <ChevronLeft className="size-4/5" />
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
        'relative flex size-14 transform cursor-pointer items-center justify-center rounded-full text-primary-500 transition-all duration-200 ease-in-out hover:scale-125 hover:text-primary-600 dark:text-accent-400 dark:hover:text-accent-300',
        { 'text-secondary-200': props.disabled },
        className
      )}
      {...restProps}
    >
      <ChevronRight className="size-4/5" />
      {children}
    </button>
  );
};
