import { Media } from '@/components/Media'
import { Star, Quote } from 'lucide-react'
import type { TestimonialBlock as TestimonialBlockProps } from '@/payload-types'
import { cn } from '@/utilities/ui'

type CarouselSlideProps = {
  slide: NonNullable<NonNullable<TestimonialBlockProps['testimonials']>[number]>
  style?: React.CSSProperties
  className?: string
}

export function CarouselSlide({ slide, className, style }: CarouselSlideProps) {
  return (
    <div className={cn('group', className)} style={style}>
      {slide.image && (
        <div className="relative h-48 rounded-lg overflow-hidden">
          <Media
            resource={slide.image}
            className="size-full "
            imgClassName="size-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </div>
      )}

      <div className="py-8 relative">
        {slide.image && (
          <div className="absolute -top-8 right-8 w-16 h-16 bg-accent-500 rounded-full flex items-center justify-center shadow-lg">
            <Quote className="w-8 h-8 text-white" />
          </div>
        )}

        <div className="flex items-center mb-6">
          <Media
            resource={slide.avatar}
            className="size-14 rounded-full aspect-square border-4 border-white shadow-lg overflow-hidden"
            imgClassName="size-full object-cover"
          />
          <div className="ml-4">
            <h3 className="font-bold text-gray-900 dark:text-white">{slide.name}</h3>
            <p className="text-gray-600 dark:text-white/80">{slide.role}</p>
          </div>
        </div>

        <div className="flex mb-4">
          {[...Array(slide.rating)].map((_, i) => (
            <Star key={i} className="w-5 h-5 text-accent-500 fill-current" />
          ))}
        </div>

        <p className="text-gray-600 leading-relaxed dark:text-white/80">{slide.content}</p>
      </div>
    </div>
  )
}
