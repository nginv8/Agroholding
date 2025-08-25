'use client';

import { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';
import Fade from 'embla-carousel-fade';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import * as motion from 'motion/react-client';

import { Media } from '@/components/Media';
import { cn } from '@/utilities/ui';
import type { Product } from '@/payload-types';

interface ProductImageSliderProps {
  product: Product;
  className: string;
}

export default function ProductImageSlider({ product, className }: ProductImageSliderProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 1280px)');
    setIsDesktop(mediaQuery.matches);

    const handler = (e: MediaQueryListEvent) => setIsDesktop(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  const [emblaMainRef, emblaMainApi] = useEmblaCarousel({ loop: true }, [Fade()]);
  const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
    containScroll: 'keepSnaps',
    dragFree: true,
    axis: isDesktop ? 'y' : 'x',
  });

  const onThumbClick = useCallback(
    (index: number) => {
      if (!emblaMainApi || !emblaThumbsApi) return;
      emblaMainApi.scrollTo(index);
    },
    [emblaMainApi, emblaThumbsApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaMainApi || !emblaThumbsApi) return;
    setSelectedIndex(emblaMainApi.selectedScrollSnap());
    emblaThumbsApi.scrollTo(emblaMainApi.selectedScrollSnap());
  }, [emblaMainApi, emblaThumbsApi]);

  useEffect(() => {
    if (!emblaMainApi) return;
    onSelect();
    emblaMainApi.on('select', onSelect);
    emblaMainApi.on('reInit', onSelect);
    return () => {
      emblaMainApi.off('select', onSelect);
      emblaMainApi.off('reInit', onSelect);
    };
  }, [emblaMainApi, onSelect]);

  const scrollPrev = useCallback(() => {
    if (emblaMainApi) emblaMainApi.scrollPrev();
  }, [emblaMainApi]);

  const scrollNext = useCallback(() => {
    if (emblaMainApi) emblaMainApi.scrollNext();
  }, [emblaMainApi]);

  if (!product.images || product.images.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className={cn('space-y-4', className)}
      >
        <div className="relative aspect-square overflow-hidden rounded-2xl bg-secondary-100">
          <Image src="/placeholder.svg" alt={product.title} fill className="object-cover" />
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className={cn(
        'flex select-none flex-col xl:aspect-[1.224] xl:flex-row-reverse xl:items-stretch xl:gap-x-4',
        className
      )}
    >
      {/* Main image carousel wrapper */}
      <div className="relative xl:w-5/6">
        <div className="overflow-hidden rounded-2xl" ref={emblaMainRef}>
          <div className="flex">
            {product.images.map((imageItem, index) => {
              return (
                <div
                  key={index}
                  className="relative aspect-square min-w-0 flex-[0_0_100%] bg-secondary-100"
                >
                  <Media
                    resource={imageItem.image}
                    alt={`${product.title} ${index + 1}`}
                    fill
                    className="object-cover"
                    priority={index === 0}
                    loading={index === 0 ? 'eager' : 'lazy'}
                  />
                </div>
              );
            })}
          </div>
        </div>

        {/* Navigation arrows */}
        {product.images.length > 1 && (
          <div className="group/panel absolute bottom-6 right-6 z-30 hidden items-center gap-1 rounded-lg backdrop-blur-md transition-colors duration-300 hover:bg-black/10 md:flex">
            <button
              onClick={scrollPrev}
              className="group relative size-10 rounded-md transition-all duration-200 hover:bg-black/20"
              aria-label="Previous image"
            >
              <ChevronLeft className="absolute left-1/2 top-1/2 size-4 -translate-x-1/2 -translate-y-1/2 text-white/50 transition-transform hover:text-white group-hover:scale-125 group-hover/panel:text-white/70" />
            </button>
            <button
              onClick={scrollNext}
              className="group relative size-10 rounded-md transition-all duration-200 hover:bg-black/20"
              aria-label="Next image"
            >
              <ChevronRight className="absolute left-1/2 top-1/2 size-4 -translate-x-1/2 -translate-y-1/2 text-white/50 transition-transform hover:text-white group-hover:scale-125 group-hover/panel:text-white/70" />
            </button>
          </div>
        )}
      </div>

      {/* Thumbnails wrapper */}
      {product.images.length > 0 && (
        <div className="mt-4 flex flex-col rounded-lg bg-muted/30 p-2 xl:mt-0 xl:w-1/6">
          <div className="h-full min-h-0 overflow-hidden rounded-lg" ref={emblaThumbsRef}>
            <div className="flex gap-4 xl:h-full xl:flex-col">
              {product.images.map((imageItem, index) => {
                return (
                  <div key={index} className="min-w-0 flex-[0_0_20%] xl:w-full xl:flex-none">
                    <button
                      onClick={() => onThumbClick(index)}
                      className={cn(
                        'relative aspect-square w-full cursor-pointer overflow-hidden rounded-lg opacity-70 transition-opacity',
                        index === selectedIndex ? 'opacity-100' : 'hover:opacity-90'
                      )}
                      aria-label={`Select image ${index + 1}`}
                    >
                      <Media
                        resource={imageItem.image}
                        alt={`${product.title} thumbnail ${index + 1}`}
                        fill
                        className="object-cover"
                        loading="lazy"
                      />
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );
}
