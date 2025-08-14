'use client';

import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';
import * as motion from 'motion/react-client';

import { Button } from '@/components/ui/button';

type Props = {
  slides: {
    title: string;
    subtitle?: string;
    description?: string;
    backgroundImage?: string;
    primaryButton?: {
      text: string;
      url: string;
    };
    secondaryButton?: {
      text: string;
      url: string;
    };
  }[];
};

export const Slider: React.FC<Props> = ({ slides = [] }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (!isPlaying || slides.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPlaying, slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  if (!slides.length) return null;

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Slides */}

      <motion.div
        key={currentSlide}
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
        className="absolute inset-0"
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${slides[currentSlide].backgroundImage || '/agricultural-landscape.png'})`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-transparent to-black/60" />

        {/* Content */}
        <div className="relative z-10 flex h-full items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                {slides[currentSlide].subtitle && (
                  <p className="mb-4 text-sm font-medium uppercase tracking-wider text-green-400">
                    {slides[currentSlide].subtitle}
                  </p>
                )}
                <h1 className="mb-6 text-4xl font-bold leading-tight text-white md:text-6xl lg:text-7xl">
                  {slides[currentSlide].title}
                </h1>
                {slides[currentSlide].description && (
                  <p className="mb-8 text-lg text-gray-200 md:text-xl">
                    {slides[currentSlide].description}
                  </p>
                )}
                <div className="flex flex-wrap gap-4">
                  {slides[currentSlide].primaryButton && (
                    <Button size="lg" className="bg-green-600 hover:bg-green-700">
                      {slides[currentSlide].primaryButton.text}
                    </Button>
                  )}
                  {slides[currentSlide].secondaryButton && (
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-white/30 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20"
                    >
                      {slides[currentSlide].secondaryButton.text}
                    </Button>
                  )}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Navigation Controls - Top Right */}
      <div className="absolute right-8 top-8 z-20 flex items-center gap-3">
        {/* Previous Button - Diamond Shape */}
        <button
          onClick={prevSlide}
          className="group relative size-12 backdrop-blur-md"
          style={{
            clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
            background: 'rgba(255, 255, 255, 0.1)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
          }}
        >
          <ChevronLeft className="absolute left-1/2 top-1/2 size-5 -translate-x-1/2 -translate-y-1/2 text-white transition-transform group-hover:scale-110" />
        </button>

        {/* Next Button - Diamond Shape */}
        <button
          onClick={nextSlide}
          className="group relative size-12 backdrop-blur-md"
          style={{
            clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
            background: 'rgba(255, 255, 255, 0.1)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
          }}
        >
          <ChevronRight className="absolute left-1/2 top-1/2 size-5 -translate-x-1/2 -translate-y-1/2 text-white transition-transform group-hover:scale-110" />
        </button>

        {/* Play/Pause Button - Hexagon Shape */}
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="group relative size-12 backdrop-blur-md"
          style={{
            clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
            background: 'rgba(255, 255, 255, 0.1)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
          }}
        >
          {isPlaying ? (
            <Pause className="absolute left-1/2 top-1/2 size-4 -translate-x-1/2 -translate-y-1/2 text-white transition-transform group-hover:scale-110" />
          ) : (
            <Play className="absolute left-1/2 top-1/2 size-4 -translate-x-1/2 -translate-y-1/2 text-white transition-transform group-hover:scale-110" />
          )}
        </button>
      </div>

      {/* Vertical Dots Navigation - Right Edge */}
      <div className="absolute right-6 top-1/2 z-20 flex -translate-y-1/2 flex-col gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className="group relative overflow-hidden"
          >
            {/* Line indicator */}
            <div
              className="h-12 w-1 transition-all duration-300"
              style={{
                clipPath: 'polygon(0 10%, 100% 0%, 100% 90%, 0% 100%)',
                background:
                  index === currentSlide
                    ? 'linear-gradient(to bottom, #10b981, #059669)'
                    : 'rgba(255, 255, 255, 0.3)',
              }}
            />

            {/* Slide number on hover */}
            <div className="absolute right-6 top-1/2 -translate-y-1/2 opacity-0 transition-opacity group-hover:opacity-100">
              <span className="rounded bg-black/80 px-2 py-1 font-mono text-xs text-white backdrop-blur-sm">
                {String(index + 1).padStart(2, '0')}
              </span>
            </div>
          </button>
        ))}
      </div>

      {/* Progress Counter - Bottom Left */}
      <div className="absolute bottom-8 left-8 z-20">
        <div className="flex items-center gap-4 rounded-lg bg-black/20 p-4 backdrop-blur-md">
          <div className="text-white">
            <span className="font-mono text-2xl font-bold">
              {String(currentSlide + 1).padStart(2, '0')}
            </span>
            <span className="mx-2 text-white/60">/</span>
            <span className="text-sm text-white/80">{String(slides.length).padStart(2, '0')}</span>
          </div>

          {/* Progress bar */}
          <div className="h-1 w-16 overflow-hidden rounded-full bg-white/20">
            <motion.div
              className="h-full bg-gradient-to-r from-green-400 to-green-600"
              initial={{ width: '0%' }}
              animate={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Bottom Center */}
      <div className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          className="flex flex-col items-center gap-2 text-white/80"
        >
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <div className="flex h-6 w-4 items-start justify-center rounded-full border border-white/30 p-1">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
              className="size-1 rounded-full bg-white"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
