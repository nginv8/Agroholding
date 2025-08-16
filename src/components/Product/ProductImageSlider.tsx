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
}

export default function ProductImageSlider({ product }: ProductImageSliderProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [emblaMainRef, emblaMainApi] = useEmblaCarousel({ loop: true }, [Fade()]);
  const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
    containScroll: 'keepSnaps',
    dragFree: true,
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
  }, [emblaMainApi, emblaThumbsApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaMainApi) return;
    onSelect();
    emblaMainApi.on('select', onSelect);
    emblaMainApi.on('reInit', onSelect);
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
        className="space-y-4"
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
      className="select-none space-y-4"
    >
      {/* Main image carousel */}
      <div className="relative">
        <div className="overflow-hidden rounded-2xl" ref={emblaMainRef}>
          <div className="flex">
            {product.images.map((imageItem, index) => {
              return (
                <div key={index} className="relative min-w-0 flex-[0_0_100%]">
                  <div className="relative aspect-square bg-secondary-100">
                    <Media
                      resource={imageItem.image}
                      alt={`${product.title} ${index + 1}`}
                      fill
                      className="object-cover"
                      priority={index === 0}
                      loading={index === 0 ? 'eager' : 'lazy'}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Navigation arrows */}
        {product.images.length > 1 && (
          <div className="group/panel absolute bottom-6 right-6 z-30 hidden items-center gap-1 rounded-lg backdrop-blur-md transition-colors duration-300 hover:bg-black/10 md:flex">
            {/* Previous Button */}
            <button
              onClick={scrollPrev}
              className="group relative size-10 rounded-md transition-all duration-200 hover:bg-black/20"
              aria-label="Previous image"
            >
              <ChevronLeft className="absolute left-1/2 top-1/2 size-4 -translate-x-1/2 -translate-y-1/2 text-white/50 transition-transform hover:text-white group-hover:scale-125 group-hover/panel:text-white/70" />
            </button>

            {/* Next Button */}
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

      {/* Thumbnails */}
      {product.images.length > 1 && (
        <div className="overflow-hidden" ref={emblaThumbsRef}>
          <div className="flex gap-4">
            {product.images.map((imageItem, index) => {
              return (
                <div key={index} className="min-w-0 flex-[0_0_20%] sm:flex-[0_0_25%]">
                  <button
                    onClick={() => onThumbClick(index)}
                    className={cn(
                      'relative aspect-square w-full cursor-pointer overflow-hidden rounded-lg opacity-60 transition-opacity',
                      index === selectedIndex ? 'opacity-100' : 'hover:opacity-80'
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
      )}
    </motion.div>
  );
}
