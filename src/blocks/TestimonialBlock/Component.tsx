import { SectionBackground } from '@/components/SectionBackground';
import { SectionTitle } from '@/components/SectionTitle';
import { TestimonialCarousel } from '@/components/TestimonialCarousel';
import type { TestimonialBlock as TestimonialBlockProps } from '@/payload-types';

export const TestimonialBlock: React.FC<TestimonialBlockProps> = (props) => {
  const { title, sbg, theme, testimonials = [] } = props;

  if (!testimonials || testimonials.length === 0) return null;

  return (
    <section className="content-section" data-theme={theme}>
      <SectionBackground {...sbg} />
      <div className="content-container">
        <SectionTitle {...title} title={title?.title || ''} />
        <TestimonialCarousel
          slides={testimonials}
          options={{ align: 'start', loop: true, autoplay: true }}
        />
      </div>
    </section>
  );
};
