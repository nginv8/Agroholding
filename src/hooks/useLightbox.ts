import { useState } from 'react';

import type { Media as MediaType } from '@/payload-types';

export const useLightbox = () => {
  const [selectedImage, setSelectedImage] = useState<MediaType | null>(null);

  const openLightbox = (image: MediaType) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Escape') {
      closeLightbox();
    }
  };

  return {
    selectedImage,
    openLightbox,
    closeLightbox,
    handleKeyDown,
  };
};
