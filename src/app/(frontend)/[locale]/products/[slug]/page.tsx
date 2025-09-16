import { getPayload, TypedLocale } from 'payload';

import React, { cache } from 'react';
import type { Metadata } from 'next';
import { draftMode } from 'next/headers';
import configPromise from '@payload-config';

import { LivePreviewListener } from '@/components/LivePreviewListener';
import { PayloadRedirects } from '@/components/PayloadRedirects';
import Product from '@/components/Product';
import { generateMeta } from '@/utilities/generateMeta';
import { COLLECTION_NAMES, PAGINATION_LIMITS } from '@/constants/app';
import type { Product as ProductType } from '@/payload-types';

const COLLECTION_NAME = COLLECTION_NAMES.PRODUCTS;

type Args = {
  params: Promise<{
    slug?: string;
    locale?: TypedLocale;
  }>;
};

export default async function ProductPage({ params: paramsPromise }: Args) {
  const { slug = '', locale } = await paramsPromise;
  const url = `/${COLLECTION_NAME}/` + slug;
  const product = await queryProduct({ slug, locale });
  const { isEnabled: draft } = await draftMode();

  if (!product) return <PayloadRedirects url={url} />;

  const relatedProducts = product.relatedProducts
    ? product.relatedProducts.filter(
        (relatedProduct): relatedProduct is ProductType => typeof relatedProduct === 'object'
      )
    : [];

  return (
    <article>
      {/* Allows redirects for valid pages too */}
      <PayloadRedirects disableNotFound url={url} />

      {draft && <LivePreviewListener />}

      <Product product={product} relatedProducts={relatedProducts} />
    </article>
  );
}

export async function generateMetadata({ params: paramsPromise }: Args): Promise<Metadata> {
  const { slug = '', locale } = await paramsPromise;
  const product = await queryProduct({ slug, locale });

  return generateMeta({ doc: product, locale });
}

export async function generateStaticParams() {
  const payload = await getPayload({ config: configPromise });
  const products = await payload.find({
    collection: COLLECTION_NAME,
    draft: false,
    limit: PAGINATION_LIMITS.MAX_STATIC_PAGES,
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

const queryProduct = cache(async ({ slug, locale }: { slug: string; locale?: TypedLocale }) => {
  const { isEnabled: draft } = await draftMode();

  const payload = await getPayload({ config: configPromise });
  const localeParam = locale ? { locale } : {};

  const result = await payload.find({
    overrideAccess: draft,
    collection: COLLECTION_NAME,
    draft,
    limit: 1,
    depth: 2,
    ...localeParam,
    where: {
      slug: {
        equals: slug,
      },
    },
  });

  return result.docs?.[0] || null;
});
