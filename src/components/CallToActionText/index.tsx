import { ArrowRight } from 'lucide-react';

import { CMSLink } from '@/components/Link';
import RichText from '@/components/RichText';
import type { CallToActionBlock as CTABlockProps } from '@/payload-types';

type CallToActionTextProps = {
  richText?: CTABlockProps['richText'];
  links?: CTABlockProps['links'];
};

export const CallToActionText: React.FC<CallToActionTextProps> = ({ richText, links }) => {
  return (
    <div className="flex flex-wrap gap-8 md:items-center md:justify-between md:gap-12 md:rounded-lg md:border md:border-border md:bg-card md:p-12 lg:gap-20">
      {richText && <RichText className="w-full flex-1" data={richText} enableGutter={false} />}

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
  );
};
