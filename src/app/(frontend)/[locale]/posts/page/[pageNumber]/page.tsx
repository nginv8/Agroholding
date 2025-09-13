import { getPayload, TypedLocale } from 'payload';

import React from 'react';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next/types';
import configPromise from '@payload-config';
import { getTranslations } from 'next-intl/server';

import { CollectionArchive } from '@/components/CollectionArchive';
import { PageRange } from '@/components/PageRange';
import { Pagination } from '@/components/Pagination';

import PageClient from './page.client';

export const revalidate = 600;

type Args = {
  params: Promise<{
    pageNumber: string;
    locale: TypedLocale;
  }>;
};

const itemsLimit = 8;

export default async function Page({ params: paramsPromise }: Args) {
  const collectionName = 'posts';
  const { pageNumber, locale } = await paramsPromise;
  const payload = await getPayload({ config: configPromise });
  const t = await getTranslations();

  const sanitizedPageNumber = Number(pageNumber);

  if (!Number.isInteger(sanitizedPageNumber)) notFound();

  const posts = await payload.find({
    collection: collectionName,
    depth: 1,
    limit: itemsLimit,
    locale,
    page: sanitizedPageNumber,
    overrideAccess: false,
  });

  return (
    <div className="py-24">
      <PageClient />
      <div className="content-container mb-16">
        <div className="prose max-w-none dark:prose-invert">
          <h1>{t(collectionName)}</h1>
        </div>
      </div>

      <div className="content-container mb-8">
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

      <div className="content-container">
        {posts?.page && posts?.totalPages > 1 && (
          <Pagination page={posts.page} totalPages={posts.totalPages} collectionName="posts" />
        )}
      </div>
    </div>
  );
}

export async function generateMetadata({ params: paramsPromise }: Args): Promise<Metadata> {
  const { pageNumber, locale = 'uk' } = await paramsPromise;
  const t = await getTranslations({ locale });

  return {
    title: `${t('posts')} - ${t('page')} ${pageNumber || ''}`,
  };
}

export async function generateStaticParams() {
  const payload = await getPayload({ config: configPromise });
  const { totalDocs } = await payload.count({
    collection: 'posts',
    overrideAccess: false,
  });

  const totalPages = Math.ceil(totalDocs / itemsLimit);

  const pages: { pageNumber: string }[] = [];

  for (let i = 1; i <= totalPages; i++) {
    pages.push({ pageNumber: String(i) });
  }

  return pages;
}
