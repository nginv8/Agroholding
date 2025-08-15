import React from 'react';
import * as motion from 'motion/react-client';

import { Media } from '@/components/Media';
import { cn } from '@/utilities/ui';

import type { SideImageProps } from './types';

export const SideImage: React.FC<SideImageProps> = ({ sideImage, imageSide, className, isFirst }) => (
  <motion.div
    initial={{ opacity: 0, x: imageSide === 'left' ? -50 : 50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
    className={cn(
      'relative before:absolute before:size-64 before:rounded-full before:bg-primary-500/10 before:blur-3xl after:absolute after:size-64 after:rounded-full after:bg-accent-500/10 after:blur-3xl',
      'order-2 lg:order-none lg:block',
      imageSide === 'left' && 'lg:col-start-1',
      imageSide !== 'left' && 'lg:col-start-2',
      imageSide === 'left'
        ? 'before:-left-8 before:-top-8 after:-bottom-8 after:-right-8'
        : 'before:-right-8 before:-top-8 after:-bottom-8 after:-left-8',
      className
    )}
  >
    {sideImage && typeof sideImage === 'object' && (
      <Media
        resource={sideImage}
        className="mx-auto h-auto w-full max-w-[240px] sm:max-w-[320px] md:max-w-[400px] lg:max-w-[480px]"
        imgClassName="rounded-2xl object-contain size-full"
        priority={isFirst}
      />
    )}
  </motion.div>
);
