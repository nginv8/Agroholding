'use client';

import React from 'react';
import type { StaticImageData } from 'next/image';
import NextImage from 'next/image';

import { cloudinaryLoader } from '@/utilities/cloudinaryLoader';
import { cn } from '@/utilities/ui';
import { cssVariables } from '@/cssVariables';
import type { Media } from '@/payload-types';

import type { Props as MediaProps } from '../types';

const { breakpoints } = cssVariables;

interface ImageConfig {
  width?: number;
  height?: number;
  alt: string;
  src: StaticImageData | string;
  blurDataURL: string;
}

const PLACEHOLDER_BLUR =
  'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAKAAoDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAgQFCP/EACIQAAEDAwMFAAAAAAAAAAAAAAECAxEABAUHISISMTJBkf/EABQBAQAAAAAAAAAAAAAAAAAAAAX/xAAaEQACAwEBAAAAAAAAAAAAAAABAgADIRES/9oADAMBAAIRAxEAPwCrh9SbKytEsuWzNyvp5KdUYO09htRK1gZCiE4fGQDtxrPYWsSQpQJZBJn3FIFxc+avtD+LGOuYnyoDEn//2Q==';

const generateSizes = (sizeFromProps?: string): string => {
  return (
    sizeFromProps ||
    Object.entries(breakpoints)
      .map(([, value]) => `(max-width: ${value}px) ${value * 2}w`)
      .join(', ')
  );
};

const getImageConfigFromResource = (props: Partial<MediaProps>, resource: Media): ImageConfig => {
  const result: ImageConfig = {
    alt: props.alt || '',
    src: props.src || '',
    blurDataURL: PLACEHOLDER_BLUR,
    width: undefined,
  };
  if (!props.src && resource && typeof resource === 'object') {
    result.width = resource.width !== null ? resource.width : undefined;
    result.height = resource.height !== null ? resource.height : undefined;
    result.alt = resource.alt || props.alt || '';
    result.src = resource.url || '';
    result.blurDataURL = resource.thumbnailURL || PLACEHOLDER_BLUR;
  }
  return result;
};

export const ImageMedia: React.FC<MediaProps> = ({
  fill,
  imgClassName,
  priority,
  loading,
  size,
  resource,
  ...restProps
}) => {
  let imageConfig;

  if (!restProps.src && resource && typeof resource === 'object') {
    imageConfig = getImageConfigFromResource(restProps, resource);
  }

  const computedLoading = loading || (priority ? 'eager' : 'lazy');
  const sizes = generateSizes(size);

  if (!imageConfig?.src) return null;

  return (
    <NextImage
      loader={cloudinaryLoader}
      className={cn('select-none', imgClassName)}
      fill={fill}
      height={!fill ? imageConfig.height : undefined}
      width={!fill ? imageConfig.width : undefined}
      placeholder="blur"
      blurDataURL={imageConfig.blurDataURL}
      priority={priority}
      loading={computedLoading}
      sizes={sizes}
      src={imageConfig.src}
      alt={imageConfig.alt}
    />
  );
};
