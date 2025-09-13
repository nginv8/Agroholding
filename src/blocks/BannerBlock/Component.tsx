import React from 'react';
import type { BannerBlock as BannerBlockProps } from 'src/payload-types';

import RichText from '@/components/RichText';
import { cn } from '@/utilities/ui';

type Props = {
  className?: string;
} & BannerBlockProps;

export const BannerBlock: React.FC<Props> = ({ className, content, style }) => {
  return (
    <div className={cn('mx-auto my-8 w-full', className)}>
      <div
        className={cn('my-0 flex items-center rounded border px-6 py-3', {
          'border-info/80 bg-info/10': style === 'info',
          'border-error/80 bg-error/10': style === 'error',
          'border-success/80 bg-success/10': style === 'success',
          'border-warning/80 bg-warning/10': style === 'warning',
        })}
      >
        <RichText data={content} enableGutter={false} enableProse={false} />
      </div>
    </div>
  );
};
