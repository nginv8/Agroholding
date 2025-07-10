'use client'

import { FC, useCallback } from 'react'
import { EmblaOptionsType, EmblaCarouselType } from 'embla-carousel'
import { DotButton, useDotButton } from './CarouselDotButton'
import { PrevButton, NextButton, usePrevNextButtons } from './CarouselArrowButtons'
import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel from 'embla-carousel-react'
import type { TestimonialBlock as TestimonialBlockProps } from '@/payload-types'
import { CarouselSlide } from './CarouselSlide'
import { cn } from '@/utilities/ui'

type CarouselProps = {
  slides?: TestimonialBlockProps['testimonials']
  options?: EmblaOptionsType & { autoplay: boolean }
}

export const TestimonialCarousel: FC<CarouselProps> = (props) => {
  const { slides = [], options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options, options?.autoplay ? [Autoplay()] : [])

  const onNavButtonClick = useCallback((emblaApi: EmblaCarouselType) => {
    const autoplay = emblaApi?.plugins()?.autoplay
    if (!autoplay) return

    const resetOrStop =
      autoplay.options.stopOnInteraction === false ? autoplay.reset : autoplay.stop

    resetOrStop()
  }, [])

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi, onNavButtonClick)

  const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } =
    usePrevNextButtons(emblaApi, onNavButtonClick)

  return (
    <div className="relative z-10 w-full mx-auto xl:-mt-32">
      <div className="hidden xl:flex justify-end items-center gap-4 mb-16 px-4">
        <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
        <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
      </div>

      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex touch-pan-y" style={{ marginLeft: 'calc(var(--slide-spacing) * -1)' }}>
          {slides?.map((slide) => (
            <CarouselSlide
              key={slide.id}
              className="flex-none min-w-0 translate-z-0"
              style={{
                flexBasis: 'var(--slide-size)',
                paddingLeft: 'var(--slide-spacing)',
              }}
              slide={slide}
            />
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between w-full">
        <div className="flex flex-wrap items-center justify-center gap-4 xl:absolute xl:flex-col xl:-right-16 xl:top-1/2 xl:-translate-y-1/2 xl:gap-y-6">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={cn(
                'rounded-xl cursor-pointer transition-colors duration-200 ease-in-out',
                index === selectedIndex
                  ? 'bg-primary-500 h-4 w-2 xl:h-2 xl:w-4 dark:bg-accent-300'
                  : 'bg-secondary-200 size-2 dark:bg-white/30',
              )}
            />
          ))}
        </div>

        <div className="flex xl:hidden justify-end items-center">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
      </div>
    </div>
  )
}
