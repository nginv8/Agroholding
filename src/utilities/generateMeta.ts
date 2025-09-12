import type { Metadata } from 'next';

import type { Media, Page, Post } from '../payload-types';
import { getServerSideURL } from './getURL';
import { mergeOpenGraph } from './mergeOpenGraph';

const getImageURL = (image?: Media | number | null) => {
  const serverUrl = getServerSideURL();

  const fallbackUrl = serverUrl + '/polisky-agroholding-og.webp';

  if (image && typeof image === 'object') {
    if (image.url) {
      const transformations = 'w_1200,h_630,c_fill,q_auto';
      return image.url.replace('/upload/', `/upload/${transformations}/`);
    }

    if (image.filename) {
      const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
      const folder = process.env.NEXT_PUBLIC_CLOUDINARY_FOLDER_NAME;

      if (cloudName) {
        const publicId = image.filename.replace(/\.[^/.]+$/, '');
        const transformations = 'w_1200,h_630,c_fill,q_auto';
        return `https://res.cloudinary.com/${cloudName}/image/upload/${transformations}${folder ? '/' + folder : ''}/${publicId}`;
      }
    }
  }

  return fallbackUrl;
};

export const generateMeta = async (args: {
  doc: Partial<Page> | Partial<Post> | null;
}): Promise<Metadata> => {
  const { doc } = args;

  const ogImage = getImageURL(doc?.meta?.image);

  const title = doc?.meta?.title
    ? doc?.meta?.title + ' | Polisky Agroholding'
    : 'Polisky Agroholding';

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
