import { CMSLink } from '@/components/Link';
import RichText from '@/components/RichText';
import type { CallToActionBlock as CTABlockProps } from '@/payload-types';

type CallToActionTextProps = {
  richText?: CTABlockProps['richText'];
  links?: CTABlockProps['links'];
};

export const CallToActionText: React.FC<CallToActionTextProps> = ({ richText, links }) => {
  return (
    <div className="flex flex-col gap-12 rounded-lg border border-border bg-card p-12 md:flex-row md:items-center md:justify-between lg:gap-20">
      <div className="flex max-w-3xl items-center">
        {richText && <RichText className="mb-0" data={richText} enableGutter={false} />}
      </div>
      <div className="flex flex-col justify-center gap-4">
        {(links || []).map(({ link }, i) => {
          return <CMSLink key={i} size="lg" {...link} />;
        })}
      </div>
    </div>
  );
};
