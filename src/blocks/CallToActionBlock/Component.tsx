import { CallToActionLargeImage } from '@/components/CallToActionLargeImage';
import { CallToActionSmallImage } from '@/components/CallToActionSmallImage';
import { CallToActionText } from '@/components/CallToActionText';
import { SectionBackground } from '@/components/SectionBackground';
import { cn } from '@/utilities/ui';
import type { CallToActionBlock as CTABlockProps } from '@/payload-types';

function getMarginClasses({
  marginTop,
  marginBottom,
}: {
  marginTop?: CTABlockProps['marginTop'];
  marginBottom?: CTABlockProps['marginBottom'];
}) {
  if (!marginTop || !marginBottom) return '';

  const marginValueList = {
    mobile: {
      none: '0',
      sm: '4',
      md: '8',
      lg: '12',
      xl: '16',
    },
    desktop: {
      none: '0',
      sm: '8',
      md: '16',
      lg: '24',
      xl: '32',
    },
  };

  return cn(
    `pt-${marginValueList.mobile[marginTop || 'none']} md:pt-${marginValueList.desktop[marginTop || 'none']}`,
    `pb-${marginValueList.mobile[marginBottom || 'none']} md:pb-${marginValueList.desktop[marginBottom || 'none']}`
  );
}

export const CallToActionBlock: React.FC<CTABlockProps> = ({
  background,
  theme,
  marginTop,
  marginBottom,
  layoutStyle,
  imageSide,
  image,
  links,
  richText,
}) => {
  const marginClasses = getMarginClasses({ marginTop, marginBottom });
  return (
    <section className={cn('relative overflow-hidden', marginClasses)} data-theme={theme}>
      <SectionBackground {...background} theme={theme} />
      <div className="container relative z-10 mx-auto px-4">
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
