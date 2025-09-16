import { getPayload, TypedLocale } from 'payload';

import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import configPromise from '@payload-config';
import { getTranslations } from 'next-intl/server';

import { Breadcrumbs } from '@/components/Breadcrumbs';
import { CollectionArchive } from '@/components/CollectionArchive';
import { PageRange } from '@/components/PageRange';
import { Pagination } from '@/components/Pagination';
import { parsePageNumber } from '@/utilities/pagination';
import { COLLECTION_NAMES, PAGINATION_LIMITS } from '@/constants/app';

export const dynamic = 'force-static';
export const revalidate = 600;

type Args = {
  params: Promise<{
    pageNumber: string;
    locale: TypedLocale;
  }>;
};

const COLLECTION_NAME = COLLECTION_NAMES.POSTS;
const ITEMS_LIMIT = PAGINATION_LIMITS.DEFAULT;

export default async function Page({ params }: Args) {
  const { pageNumber, locale } = await params;
  const t = await getTranslations();
  const payload = await getPayload({ config: configPromise });

  const currentPage = parsePageNumber(pageNumber);

  if (!currentPage) return notFound();

  const posts = await payload.find({
    collection: COLLECTION_NAME,
    locale,
    depth: 1,
    limit: ITEMS_LIMIT,
    page: currentPage,
    overrideAccess: false,
    select: {
      title: true,
      slug: true,
      categories: true,
      meta: true,
    },
  });

  if (currentPage > posts.totalPages) {
    return notFound();
  }

  return (
    <>
      <Breadcrumbs items={[{ label: t(COLLECTION_NAME), isActive: true }]} withSection={true} />

      <div className="content-container mb-8 space-y-8 lg:flex lg:items-end lg:justify-between lg:space-y-0">
        <div className="prose max-w-none dark:prose-invert">
          <h1>{t(COLLECTION_NAME)}</h1>
        </div>

        <PageRange
          collection={COLLECTION_NAME}
          currentPage={posts.page}
          limit={ITEMS_LIMIT}
          totalDocs={posts.totalDocs}
        />
      </div>

      <CollectionArchive
        collection={posts.docs}
        collectionName={COLLECTION_NAME}
        animationType="immediate"
        limit={ITEMS_LIMIT}
      />

      <div className="content-container">
        {posts.page && posts.totalPages > 1 && (
          <Pagination
            page={posts.page}
            totalPages={posts.totalPages}
            collectionName={COLLECTION_NAME}
          />
        )}
      </div>
    </>
  );
}

export async function generateMetadata({ params }: Args): Promise<Metadata> {
  const { pageNumber, locale } = await params;
  const t = await getTranslations({ locale });

  return {
    title: `${t(COLLECTION_NAME)} - ${t('page')} ${pageNumber || ''}`,
  };
}

export async function generateStaticParams() {
  const payload = await getPayload({ config: configPromise });
  const { totalDocs } = await payload.count({
    collection: COLLECTION_NAME,
    overrideAccess: false,
  });

  const totalPages = Math.ceil(totalDocs / ITEMS_LIMIT);

  const pages: { pageNumber: string }[] = [];

  for (let i = 1; i <= totalPages; i++) {
    pages.push({ pageNumber: String(i) });
  }

  return pages;
}
