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
  imageSide,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.6 }}
      className="grid items-center gap-12 overflow-hidden rounded-2xl border border-gray-200 bg-gray-100 md:grid-cols-2 lg:gap-20 dark:border-primary-700 dark:bg-primary-950"
    >
      <Media
        resource={image}
        className={cn('aspect-auto h-64 min-h-full w-full overflow-hidden', {
          'md:order-2': imageSide === 'right',
        })}
        imgClassName="size-full object-cover object-center"
      />

      <div className={cn('py-12 pr-12', { 'pl-12 pr-0 md:order-1': imageSide === 'right' })}>
        {richText && <RichText className="max-w-3xl" data={richText} enableGutter={false} />}

        {(links || []).map(({ link }, i) => {
          return (
            <CMSLink key={i} size="lg" {...link} className="group mr-4 mt-8">
              <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
            </CMSLink>
          );
        })}
      </div>
    </motion.div>
  );
};
