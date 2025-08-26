import type { Metadata } from 'next';

import type { Media, Page, Post } from '../payload-types';
import { getServerSideURL } from './getURL';
import { mergeOpenGraph } from './mergeOpenGraph';

const getImageURL = (image?: Media | number | null) => {
  const serverUrl = getServerSideURL();

  const fallbackUrl = serverUrl + '/website-template-OG.webp';

  if (image && typeof image === 'object' && image.cloudinary?.secure_url) {
    const baseUrl = image.cloudinary.secure_url;

    const transformations = 'w_1200,h_630,c_fill,q_auto';

    return baseUrl.replace('/upload/', `/upload/${transformations}/`);
  }

  return fallbackUrl;
};

export const generateMeta = async (args: {
  doc: Partial<Page> | Partial<Post> | null;
}): Promise<Metadata> => {
  const { doc } = args;

  const ogImage = getImageURL(doc?.meta?.image);

  const title = doc?.meta?.title ? doc?.meta?.title + ' | Payload Website' : 'Payload Website';

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
