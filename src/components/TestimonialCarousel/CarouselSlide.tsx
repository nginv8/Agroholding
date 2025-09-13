import { Quote, Star } from 'lucide-react';

import { Media } from '@/components/Media';
import { cn } from '@/utilities/ui';
import type { TestimonialBlock as TestimonialBlockProps } from '@/payload-types';

type CarouselSlideProps = {
  slide: NonNullable<NonNullable<TestimonialBlockProps['testimonials']>[number]>;
  style?: React.CSSProperties;
  className?: string;
};

export function CarouselSlide({ slide, className, style }: CarouselSlideProps) {
  return (
    <div className={cn('group', className)} style={style}>
      {slide.image && (
        <div className="relative h-56 overflow-hidden rounded-lg">
          <Media
            resource={slide.image}
            className="size-full"
            imgClassName="size-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </div>
      )}

      <div className="relative py-8">
        {slide.image && (
          <div className="absolute -top-8 right-8 flex size-16 items-center justify-center rounded-full bg-accent-500 shadow-lg">
            <Quote className="size-8 text-white" />
          </div>
        )}

        <div className="mb-6 flex items-center">
          <Media
            resource={slide.avatar}
            className="aspect-square size-14 flex-none overflow-hidden rounded-full border-4 border-white shadow-lg"
            imgClassName="size-full object-cover"
          />
          <div className="ml-4">
            <h3 className="font-bold text-gray-900 dark:text-white">{slide.name}</h3>
            <p className="text-gray-600 dark:text-white/80">{slide.role}</p>
          </div>
        </div>

        <div className="mb-4 flex">
          {[...Array(slide.rating)].map((_, i) => (
            <Star key={i} className="size-5 fill-current text-accent-500" />
          ))}
        </div>

        <p className="leading-relaxed text-gray-600 dark:text-white/80">{slide.content}</p>
      </div>
    </div>
  );
}
