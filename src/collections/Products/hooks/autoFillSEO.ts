import { BeforeChangeHook } from 'node_modules/payload/dist/collections/config/types';

import type { Product } from '@/payload-types';

export const autoFillSEO: BeforeChangeHook<Product> = ({ data, operation }) => {
  if (operation === 'create' || operation === 'update') {
    const meta = data.meta || {};

    if (!meta.title && data.title) {
      meta.title = data.title;
    }

    if (!meta.description) {
      meta.description = data.shortDescription || data.title?.slice(0, 160) || '';
    }

    if (!meta.image && data.images && data.images[0]?.image) {
      meta.image = data.images[0].image;
    }

    data.meta = meta;
  }

  return data;
};
