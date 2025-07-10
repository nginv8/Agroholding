import { SectionTitle } from '@/components/SectionTitle'
import { SectionBackground } from '@/components/SectionBackground'
import type { TestimonialBlock as TestimonialBlockProps } from '@/payload-types'
import { TestimonialCarousel } from '@/components/TestimonialCarousel'

export const TestimonialBlock: React.FC<TestimonialBlockProps> = (props) => {
  const { title, background, theme, testimonials = [] } = props

  if (!testimonials || testimonials.length === 0) return null

  return (
    <section className="relative py-32 overflow-hidden" data-theme={theme}>
      <SectionBackground {...background} theme={theme} />
      <div className="container mx-auto px-4">
        <SectionTitle {...title} title={title?.title || ''} theme={theme} />
        <TestimonialCarousel
          slides={testimonials}
          options={{ align: 'start', loop: true, autoplay: true }}
        />
      </div>
    </section>
  )
}
