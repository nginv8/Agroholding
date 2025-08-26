'use client';

import React from 'react';
import type { StaticImageData } from 'next/image';
import NextImage from 'next/image';

import { cn } from '@/utilities/ui';
import { cssVariables } from '@/cssVariables';

import type { Props as MediaProps } from '../types';

const { breakpoints } = cssVariables;

const placeholderBlur =
  'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAKAAoDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAgQFCP/EACIQAAEDAwMFAAAAAAAAAAAAAAECAxEABAUHISISMTJBkf/EABQBAQAAAAAAAAAAAAAAAAAAAAX/xAAaEQACAwEBAAAAAAAAAAAAAAABAgADIRES/9oADAMBAAIRAxEAPwCrh9SbKytEsuWzNyvp5KdUYO09htRK1gZCiE4fGQDtxrPYWsSQpQJZBJn3FIFxc+avtD+LGOuYnyoDEn//2Q==';

export const ImageMedia: React.FC<MediaProps> = (props) => {
  const {
    alt: altFromProps,
    fill,
    imgClassName,
    priority,
    resource,
    size: sizeFromProps,
    src: srcFromProps,
    loading: loadingFromProps,
  } = props;

  let width: number | undefined;
  let height: number | undefined;
  let alt = altFromProps;
  let src: StaticImageData | string = srcFromProps || '';

  if (!src && resource && typeof resource === 'object') {
    const { cloudinary, alt: altFromResource, width: fullWidth, height: fullHeight } = resource;

    if (cloudinary && cloudinary.secure_url) {
      src = cloudinary.secure_url;
    }

    width = fullWidth!;
    height = fullHeight!;
    alt = altFromResource || '';
  }

  const loading = loadingFromProps || (!priority ? 'lazy' : undefined);

  const sizes =
    sizeFromProps ||
    Object.entries(breakpoints)
      .map(([, value]) => `(max-width: ${value}px) ${value * 2}w`)
      .join(', ');

  return (
    src && (
      <NextImage
        alt={alt || ''}
        className={cn(imgClassName)}
        fill={fill}
        height={!fill ? height : undefined}
        width={!fill ? width : undefined}
        placeholder="blur"
        blurDataURL={placeholderBlur}
        priority={priority}
        loading={loading}
        sizes={sizes}
        src={src}
      />
    )
  );
};
