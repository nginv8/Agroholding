import { getPayload, TypedLocale } from 'payload';

import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import configPromise from '@payload-config';
import { getTranslations } from 'next-intl/server';

import { CollectionArchive } from '@/components/CollectionArchive';
import { PageRange } from '@/components/PageRange';
import { Pagination } from '@/components/Pagination';

import PageClient from './page.client';

export const dynamic = 'force-static';

type Args = {
  params: Promise<{
    pageNumber: string;
    locale: TypedLocale;
  }>;
};

export default async function Page({ params }: Args) {
  const { pageNumber, locale = 'uk' } = await params;
  const currentPage = parseInt(pageNumber, 10);
  const t = await getTranslations();

  if (!currentPage || isNaN(currentPage) || currentPage < 1) {
    return notFound();
  }

  const payload = await getPayload({ config: configPromise });

  const products = await payload.find({
    collection: 'products',
    locale,
    depth: 1,
    limit: 12,
    page: currentPage,
    overrideAccess: false,
    select: {
      title: true,
      slug: true,
      categories: true,
      meta: true,
    },
  });

  if (currentPage > products.totalPages) {
    return notFound();
  }

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

export function generateMetadata({ params }: Args): Promise<Metadata> {
  return Promise.resolve({
    title: `Products Page ${params}`,
  });
}

export async function generateStaticParams(): Promise<Array<{ pageNumber: string }>> {
  const payload = await getPayload({ config: configPromise });
  const products = await payload.find({
    collection: 'products',
    limit: 1,
    depth: 0,
  });

  const totalPages = products.totalPages || 1;

  const params: Array<{ pageNumber: string }> = [];

  for (let i = 1; i <= totalPages; i++) {
    params.push({ pageNumber: String(i) });
  }

  return params;
}
