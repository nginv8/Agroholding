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
  const collectionName = 'posts';
  const itemsLimit = 8;
  const { locale = 'uk' } = await params;
  const t = await getTranslations();
  const payload = await getPayload({ config: configPromise });

  const posts = await payload.find({
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
    <div className="py-24">
      <PageClient />
      <div className="container mb-16">
        <div className="prose max-w-none dark:prose-invert">
          <h1>{t(collectionName)}</h1>
        </div>
      </div>

      <div className="container mb-8">
        <PageRange
          collection={collectionName}
          currentPage={posts.page}
          limit={itemsLimit}
          totalDocs={posts.totalDocs}
        />
      </div>

      <CollectionArchive
        collection={posts.docs}
        collectionName={collectionName}
        animationType="immediate"
      />

      <div className="container">
        {posts.totalPages > 1 && posts.page && (
          <Pagination page={posts.page} totalPages={posts.totalPages} />
        )}
      </div>
    </div>
  );
}

export function generateMetadata(): Metadata {
  return {
    title: `Posts`,
  };
}
