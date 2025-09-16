import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

import type { Locale } from '@/i18n/routing';
import type { Media, Page, Post } from '@/payload-types';

import { loadImageAdvanced } from './cloudinaryLoader/loader';
import { getServerSideURL } from './getURL';
import { mergeOpenGraph } from './mergeOpenGraph';

const getImageURL = (image?: Media | number | null) => {
  if (image && typeof image === 'object') {
    if (image.url || image.cloudinary?.url || image.cloudinary?.secureUrl) {
      return loadImageAdvanced({
        src: image.url || image.cloudinary?.url || image.cloudinary?.secureUrl || '',
        width: 1200,
        height: 630,
        crop: 'fill',
      });
    }

    if (image.filename) {
      const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
      const folder = process.env.NEXT_PUBLIC_CLOUDINARY_FOLDER_NAME;

      if (cloudName) {
        const publicId = image.filename.replace(/\.[^/.]+$/, '');
        const baseUrl = `https://res.cloudinary.com/${cloudName}/image/upload${folder ? '/' + folder : ''}/${publicId}`;

        return loadImageAdvanced({
          src: baseUrl,
          width: 1200,
          height: 630,
          crop: 'fill',
        });
      }
    }
  }

  const serverUrl = getServerSideURL();
  const fallbackUrl = serverUrl + '/polisky-agroholding-og.webp';
  return fallbackUrl;
};

export const generateMeta = async (args: {
  doc: Partial<Page> | Partial<Post> | null;
  locale?: Locale;
}): Promise<Metadata> => {
  const { doc, locale } = args;

  const ogImage = getImageURL(doc?.meta?.image);

  let siteName = 'Polisky Agroholding';

  if (locale) {
    try {
      const t = await getTranslations({ locale });
      siteName = t('site-name') || 'Polisky Agroholding';
    } catch {
      siteName = 'Polisky Agroholding';
    }
  }

  const title = doc?.meta?.title ? doc?.meta?.title + ' | ' + siteName : siteName;

  return {
    description: doc?.meta?.description,
    openGraph: mergeOpenGraph({
      description: doc?.meta?.description || '',
      images: ogImage
        ? [
            {
              url: ogImage,
            },
          ]
        : undefined,
      title,
      url: Array.isArray(doc?.slug) ? doc?.slug.join('/') : '/',
    }),
    title,
  };
};
