import { getPayload, TypedLocale } from 'payload';

import React, { cache } from 'react';
import type { Metadata } from 'next';
import { draftMode } from 'next/headers';
import configPromise from '@payload-config';

import Product from '@/components/demo/Product';
import { LivePreviewListener } from '@/components/LivePreviewListener';
import { PayloadRedirects } from '@/components/PayloadRedirects';
import { generateMeta } from '@/utilities/generateMeta';

import PageClient from './page.client';

export async function generateStaticParams() {
  const payload = await getPayload({ config: configPromise });
  const products = await payload.find({
    collection: 'products',
    draft: false,
    limit: 1000,
    overrideAccess: false,
    pagination: false,
    select: {
      slug: true,
    },
  });

  const params = products.docs.map(({ slug }) => {
    return { slug };
  });

  return params;
}

type Args = {
  params: Promise<{
    slug?: string;
    locale?: TypedLocale;
  }>;
};

export default async function ProductPage({ params: paramsPromise }: Args) {
  const { slug = '', locale = 'uk' } = await paramsPromise;
  const url = '/products/' + slug;
  const product = await queryProduct({ slug, locale });
  const { isEnabled: draft } = await draftMode();

  if (!product) return <PayloadRedirects url={url} />;

  return (
    <article>
      <PageClient />

      {/* Allows redirects for valid pages too */}
      <PayloadRedirects disableNotFound url={url} />

      {draft && <LivePreviewListener />}

      <Product />
    </article>
  );
}

export async function generateMetadata({ params: paramsPromise }: Args): Promise<Metadata> {
  const { slug = '', locale = 'en' } = await paramsPromise;
  const product = await queryProduct({ slug, locale });

  return generateMeta({ doc: product });
}

const queryProduct = cache(async ({ slug, locale }: { slug: string; locale: TypedLocale }) => {
  const { isEnabled: draft } = await draftMode();

  const payload = await getPayload({ config: configPromise });

  const result = await payload.find({
    collection: 'products',
    draft,
    limit: 1,
    overrideAccess: draft,
    locale,
    where: {
      slug: {
        equals: slug,
      },
    },
  });

  return result.docs?.[0] || null;
});
