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
    <div className="pb-24">
      <PageClient />

      <Breadcrumbs items={[{ label: t(collectionName), isActive: true }]} withSection={true} />

      <div className="content-container">
        <h1 className="my-8 text-3xl capitalize leading-tight md:text-4xl lg:text-5xl">
          {t(collectionName)}
        </h1>

        <PageRange
          collection={collectionName}
          currentPage={posts.page}
          limit={itemsLimit}
          totalDocs={posts.totalDocs}
          className="mb-8"
        />
      </div>

      <CollectionArchive
        collection={posts.docs}
        collectionName={collectionName}
        animationType="immediate"
      />

      <div className="content-container">
        {posts.totalPages > 1 && posts.page && (
          <Pagination page={posts.page} totalPages={posts.totalPages} collectionName="posts" />
        )}
      </div>
    </div>
  );
}

export async function generateMetadata({ params }: Args): Promise<Metadata> {
  const { locale = 'uk' } = await params;
  const t = await getTranslations({ locale });

  return {
    title: t('posts'),
  };
}
