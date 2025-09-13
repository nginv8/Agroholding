import { ArrowRight } from 'lucide-react';
import * as motion from 'motion/react-client';

import { CMSLink } from '@/components/Link';
import RichText from '@/components/RichText';
import { cn } from '@/utilities/ui';
import type { CallToActionBlock as CTABlockProps } from '@/payload-types';

import { Media } from '../Media';

type CallToActionLargeImageeProps = {
  richText?: CTABlockProps['richText'];
  links?: CTABlockProps['links'];
  image?: CTABlockProps['image'];
  imageSide: CTABlockProps['imageSide'];
};

export const CallToActionLargeImage: React.FC<CallToActionLargeImageeProps> = ({
  richText,
  links,
  image,
  imageSide,
}) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6 }}
        className="grid items-center gap-8 md:gap-12 lg:grid-cols-2 lg:gap-20"
      >
        <div
          className={cn('relative', {
            'lg:order-2': imageSide === 'right',
          })}
        >
          <Media
            resource={image}
            className="aspect-video overflow-hidden rounded-2xl shadow-xl lg:aspect-square"
            imgClassName="size-full object-cover object-center"
          />

          <div className="absolute -bottom-8 -right-8 size-64 rounded-full bg-yellow-500/10 blur-3xl" />
        </div>

        <div
          className={cn('space-y-8 lg:space-y-12 lg:py-8', {
            'lg:order-1': imageSide === 'right',
          })}
        >
          {richText && <RichText className="max-w-3xl" data={richText} enableGutter={false} />}

          {links && links.length && (
            <div className="flex flex-wrap gap-4">
              {links?.map(({ link }, i) => {
                return (
                  <CMSLink key={i} size="lg" {...link} className="group w-full sm:w-auto">
                    <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
                  </CMSLink>
                );
              })}
            </div>
          )}
        </div>
      </motion.div>
    </>
  );
};
