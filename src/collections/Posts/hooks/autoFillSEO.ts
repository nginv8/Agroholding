import { BeforeChangeHook } from 'node_modules/payload/dist/collections/config/types';

import type { Post } from '@/payload-types';

export const autoFillSEO: BeforeChangeHook<Post> = ({ data, operation }) => {
  if (operation === 'create' || operation === 'update') {
    const meta = data.meta || {};

    if (!meta.title && data.title) {
      meta.title = data.title;
    }

    if (!meta.description) {
      meta.description = data.excerpt || data.title?.slice(0, 160) || '';
    }

    if (!meta.image && data.heroImage) {
      meta.image = data.heroImage;
    }

    data.meta = meta;
  }

  return data;
};
