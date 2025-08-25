import { getPayload, TypedLocale } from 'payload';

import React from 'react';
import type { Metadata } from 'next/types';
import configPromise from '@payload-config';
import { getTranslations } from 'next-intl/server';

import { Breadcrumbs } from '@/components/Breadcrumbs';
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
  const collectionName = 'products';
  const itemsLimit = 8;

  const { locale = 'uk' } = await params;
  const t = await getTranslations();
  const payload = await getPayload({ config: configPromise });

  const products = await payload.find({
    collection: collectionName,
    locale,
    depth: 1,
    limit: itemsLimit,
    overrideAccess: false,
    select: {
      title: true,
      slug: true,
      categories: true,
      meta: true,
    },
  });

  return (
    <div className="pb-24">
      <PageClient />

      <Breadcrumbs items={[{ label: t(collectionName), isActive: true }]} withSection={true} />

      <div className="container my-8 px-4">
        <h1 className="text-3xl capitalize leading-tight md:text-4xl lg:text-5xl">
          {t(collectionName)}
        </h1>
      </div>

      <div className="container px-4">
        <PageRange
          collection={collectionName}
          currentPage={products.page}
          limit={itemsLimit}
          totalDocs={products.totalDocs}
          className="mb-8"
        />
      </div>

      <CollectionArchive
        collection={products.docs}
        collectionName={collectionName}
        animationType="immediate"
      />

      <div className="container px-4">
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
