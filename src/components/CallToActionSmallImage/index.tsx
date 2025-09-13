import { ArrowRight } from 'lucide-react';
import * as motion from 'motion/react-client';

import { CMSLink } from '@/components/Link';
import RichText from '@/components/RichText';
import { cn } from '@/utilities/ui';
import type { CallToActionBlock as CTABlockProps } from '@/payload-types';

import { Media } from '../Media';

type CallToActionSmallImageProps = {
  richText?: CTABlockProps['richText'];
  links?: CTABlockProps['links'];
  image?: CTABlockProps['image'];
  imageSide: CTABlockProps['imageSide'];
};

export const CallToActionSmallImage: React.FC<CallToActionSmallImageProps> = ({
  richText,
  links,
  image,
  imageSide = 'left',
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.6 }}
      className="grid items-center gap-8 md:grid-cols-2 md:overflow-hidden md:rounded-2xl md:border md:border-gray-200 md:bg-gray-100 lg:gap-20 md:dark:border-primary-800 md:dark:bg-primary-950"
    >
      <Media
        resource={image}
        className={cn(
          'aspect-video h-64 min-h-full w-full overflow-hidden rounded-2xl md:rounded-none',
          {
            'md:order-2': imageSide === 'right',
          }
        )}
        imgClassName="size-full object-cover object-center"
      />

      <div
        className={cn('space-y-8 pl-0 md:py-8 md:pr-8 lg:space-y-12 lg:py-12 lg:pr-12', {
          'pr-0 md:order-1 md:pl-8 lg:pl-12': imageSide === 'right',
        })}
      >
        {richText && <RichText className="max-w-3xl" data={richText} enableGutter={false} />}

        {links && links.length && (
          <div className="flex flex-wrap gap-4">
            {links?.map(({ link }, i) => {
              return (
                <CMSLink key={i} {...link} className="group w-full sm:w-auto">
                  <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
                </CMSLink>
              );
            })}
          </div>
        )}
      </div>
    </motion.div>
  );
};
