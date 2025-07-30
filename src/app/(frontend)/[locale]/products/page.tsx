import { getPayload, TypedLocale } from 'payload';

import React from 'react';
import type { Metadata } from 'next/types';
import configPromise from '@payload-config';
import { getTranslations } from 'next-intl/server';

import { CollectionArchive } from '@/components/CollectionArchive';
import { PageRange } from '@/components/PageRange';
import { Pagination } from '@/components/Pagination';

import PageClient from './page.client';

export const dynamic = 'force-static';
export const revalidate = 600;

type Args = {
  params: Promise<{
    locale: TypedLocale;
  }>;
};

export default async function Page({ params }: Args) {
  const { locale = 'uk' } = await params;
  const t = await getTranslations();
  const payload = await getPayload({ config: configPromise });

  const products = await payload.find({
    collection: 'products',
    locale,
    depth: 1,
    limit: 12,
    overrideAccess: false,
    select: {
      title: true,
      slug: true,
      categories: true,
      meta: true,
    },
  });

  return (
    <div className="py-24">
      <PageClient />
      <div className="container mb-16">
        <div className="prose max-w-none dark:prose-invert">
          <h1>{t('products')}</h1>
        </div>
      </div>

      <div className="container mb-8">
        <PageRange
          collection="products"
          currentPage={products.page}
          limit={12}
          totalDocs={products.totalDocs}
        />
      </div>

      <CollectionArchive
        collection={products.docs}
        collectionName="products"
        animationType="immediate"
      />

      <div className="container">
        {products.totalPages > 1 && products.page && (
          <Pagination page={products.page} totalPages={products.totalPages} />
        )}
      </div>
    </div>
  );
}

export function generateMetadata(): Metadata {
  return {
    title: `Products`,
  };
}
