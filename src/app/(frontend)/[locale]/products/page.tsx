import { getPayload, TypedLocale } from 'payload';

import React from 'react';
import type { Metadata } from 'next';
import configPromise from '@payload-config';
import { getTranslations } from 'next-intl/server';

import { Breadcrumbs } from '@/components/Breadcrumbs';
import { CollectionArchive } from '@/components/CollectionArchive';
import { PageRange } from '@/components/PageRange';
import { Pagination } from '@/components/Pagination';
import { COLLECTION_NAMES, PAGINATION_LIMITS } from '@/constants/app';

export const dynamic = 'force-static';
export const revalidate = 600;

type Args = {
  params: Promise<{
    locale: TypedLocale;
  }>;
};

const COLLECTION_NAME = COLLECTION_NAMES.PRODUCTS;
const ITEMS_LIMIT = PAGINATION_LIMITS.DEFAULT;

export default async function Page({ params }: Args) {
  const { locale } = await params;
  const t = await getTranslations();
  const payload = await getPayload({ config: configPromise });

  const products = await payload.find({
    collection: COLLECTION_NAME,
    locale,
    depth: 1,
    limit: ITEMS_LIMIT,
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
      <Breadcrumbs items={[{ label: t(COLLECTION_NAME), isActive: true }]} withSection={true} />

      <div className="content-container mb-8 space-y-8 lg:flex lg:items-end lg:justify-between lg:space-y-0">
        <div className="prose max-w-none dark:prose-invert">
          <h1>{t(COLLECTION_NAME)}</h1>
        </div>

        <PageRange
          collection={COLLECTION_NAME}
          currentPage={products.page}
          limit={ITEMS_LIMIT}
          totalDocs={products.totalDocs}
        />
      </div>

      <CollectionArchive
        collection={products.docs}
        collectionName={COLLECTION_NAME}
        animationType="immediate"
        limit={ITEMS_LIMIT}
      />

      <div className="content-container">
        {products.totalPages > 1 && products.page && (
          <Pagination
            page={products.page}
            totalPages={products.totalPages}
            collectionName={COLLECTION_NAME}
          />
        )}
      </div>
    </div>
  );
}

export async function generateMetadata({ params }: Args): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale });

  return {
    title: t(COLLECTION_NAME),
  };
}
