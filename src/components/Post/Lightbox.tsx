'use client';

import { X } from 'lucide-react';
import { useTranslations } from 'next-intl';

import { Media } from '@/components/Media';
import type { Media as MediaType } from '@/payload-types';

interface LightboxProps {
  selectedImage: MediaType | null;
  onClose: () => void;
  onKeyDown: (e: React.KeyboardEvent<HTMLDivElement>) => void;
}

export const Lightbox = ({ selectedImage, onClose, onKeyDown }: LightboxProps) => {
  const t = useTranslations();

  if (!selectedImage) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
      onClick={onClose}
      onKeyDown={onKeyDown}
      tabIndex={0}
    >
      <button
        onClick={onClose}
        className="absolute right-4 top-4 z-10 flex size-10 items-center justify-center rounded-full border-2 border-white/50 text-white shadow-lg transition-colors hover:border-white"
        aria-label={t('close')}
      >
        <X className="size-6" />
      </button>

      <div onClick={(e: React.MouseEvent<HTMLElement>) => e.stopPropagation()}>
        <Media
          resource={selectedImage}
          className="bg-black"
          imgClassName="max-h-[calc(90vh-2rem)] max-w-[calc(90vw-2rem)] w-auto object-contain"
        />
      </div>
    </div>
  );
};
