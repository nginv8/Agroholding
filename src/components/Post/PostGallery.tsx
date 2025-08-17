'use client';

import * as motion from 'motion/react-client';
import { useTranslations } from 'next-intl';

import { Media } from '@/components/Media';
import { useLightbox } from '@/hooks/useLightbox';
import type { Media as MediaType, Post } from '@/payload-types';

import { Lightbox } from './Lightbox';

interface PostGalleryProps {
  post: Post;
}

export const PostGallery = ({ post }: PostGalleryProps) => {
  const t = useTranslations();
  const { selectedImage, openLightbox, closeLightbox, handleKeyDown } = useLightbox();

  if (!post.gallery || post.gallery.length === 0) {
    return null;
  }

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
      >
        <h3 className="mb-6 text-2xl font-bold text-gray-900">{t('photo-gallery')}</h3>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {post.gallery.map(
            (item, index) =>
              typeof item.image === 'object' && (
                <div key={index} onClick={() => openLightbox(item.image as MediaType)}>
                  <Media
                    resource={item.image}
                    alt={item.caption || `${t('gallery-item')} ${index + 1}`}
                    className="group relative aspect-[4/3] cursor-pointer overflow-hidden rounded-lg"
                    imgClassName="object-cover object-center transition-transform duration-300 ease-in-out group-hover:scale-105"
                  />
                </div>
              )
          )}
        </div>
      </motion.div>

      <Lightbox selectedImage={selectedImage} onClose={closeLightbox} onKeyDown={handleKeyDown} />
    </>
  );
};
