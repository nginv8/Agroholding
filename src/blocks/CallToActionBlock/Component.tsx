import { CallToActionLargeImage } from '@/components/CallToActionLargeImage';
import { CallToActionSmallImage } from '@/components/CallToActionSmallImage';
import { CallToActionText } from '@/components/CallToActionText';
import { SectionBackground } from '@/components/SectionBackground';
import { cn } from '@/utilities/ui';
import type { CallToActionBlock as CTABlockProps } from '@/payload-types';

export const CallToActionBlock: React.FC<CTABlockProps> = ({
  sbg,
  theme,
  marginTop,
  marginBottom,
  layoutStyle,
  imageSide,
  image,
  links,
  richText,
}) => {
  return (
    <section
      className={cn(
        'relative overflow-hidden',
        {
          'pt-0': marginTop === 'none',
          'pt-4 md:pt-8': marginTop === 'sm',
          'pt-8 md:pt-16': marginTop === 'md',
          'pt-12 md:pt-20': marginTop === 'lg',
          'pt-16 md:pt-24': marginTop === 'xl',
        },
        {
          'pb-0': marginBottom === 'none',
          'pb-4 md:pb-8': marginBottom === 'sm',
          'pb-8 md:pb-16': marginBottom === 'md',
          'pb-12 md:pb-20': marginBottom === 'lg',
          'pb-16 md:pb-24': marginBottom === 'xl',
        }
      )}
      data-theme={theme}
    >
      <SectionBackground {...sbg} />
      <div className="content-container">
        {layoutStyle === 'none' && <CallToActionText richText={richText} links={links} />}
        {layoutStyle === 'sm' && (
          <CallToActionSmallImage
            richText={richText}
            links={links}
            image={image}
            imageSide={imageSide}
          />
        )}
        {layoutStyle === 'lg' && (
          <CallToActionLargeImage
            richText={richText}
            links={links}
            image={image}
            imageSide={imageSide}
          />
        )}
      </div>
    </section>
  );
};
