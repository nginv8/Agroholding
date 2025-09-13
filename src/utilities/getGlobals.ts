import { getPayload, TypedLocale } from 'payload';

import { unstable_cache } from 'next/cache';

import type { Config } from '@/payload-types';
import configPromise from '@/payload.config';

type Global = keyof Config['globals'];

async function getGlobal(slug: Global, depth = 0, locale: TypedLocale) {
  const payload = await getPayload({ config: configPromise });

  const global = await payload.findGlobal({
    slug,
    depth,
    locale,
  });

  return global;
}

/**
 * Returns a unstable_cache function mapped with the cache tag for the slug
 */
export const getCachedGlobal = (slug: Global, depth = 0, locale: TypedLocale) =>
  unstable_cache(async () => getGlobal(slug, depth, locale), [String(slug), String(locale)], {
    tags: [`global_${String(slug)}`],
  });
