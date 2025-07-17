import { ArrowRight } from 'lucide-react';
import * as motion from 'motion/react-client';

import { CMSLink } from '@/components/Link';
import RichText from '@/components/RichText';

import type { CallToActionBlock as CTABlockProps } from '@/payload-types';
import { cn } from '@/utilities/ui';

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
        className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20"
      >
        <div
          className={cn('relative', {
            'md:order-2': imageSide === 'right',
          })}
        >
          <Media
            resource={image}
            className="aspect-square overflow-hidden rounded-2xl shadow-xl"
            imgClassName="size-full object-cover object-center"
          />

          <div className="absolute -bottom-8 -right-8 h-64 w-64 rounded-full bg-yellow-500/10 blur-3xl" />
        </div>

        <div
          className={cn({
            'md:order-1': imageSide === 'right',
          })}
        >
          {richText && <RichText className="max-w-[48rem]" data={richText} enableGutter={false} />}

          {(links || []).map(({ link }, i) => {
            return (
              <CMSLink key={i} size="lg" {...link} className="group mr-4 mt-8">
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </CMSLink>
            );
          })}
        </div>
      </motion.div>
    </>
  );
};
