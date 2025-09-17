import { getPayload, TypedLocale } from 'payload';

import React from 'react';
import type { Metadata } from 'next';
import configPromise from '@payload-config';
import { getTranslations } from 'next-intl/server';

import { CardCollectionData } from '@/components/Card';
import { CollectionArchive } from '@/components/CollectionArchive';
import { Search } from '@/search/Component';

type Args = {
  searchParams: Promise<{
    q: string;
  }>;
  params: Promise<{
    locale: TypedLocale;
  }>;
};

export const dynamic = 'force-dynamic';

export default async function Page({
  searchParams: searchParamsPromise,
  params: paramsPromise,
}: Args) {
  const { q: query } = await searchParamsPromise;
  const { locale } = await paramsPromise;
  const payload = await getPayload({ config: configPromise });
  const t = await getTranslations();

  const results = await payload.find({
    collection: 'search',
    locale,
    depth: 1,
    limit: 12,
    select: {
      title: true,
      slug: true,
      categories: true,
      meta: true,
      relationTo: true,
    },
    // pagination: false reduces overhead if you don't need totalDocs
    pagination: false,
    ...(query
      ? {
          where: {
            or: [
              {
                title: {
                  like: query,
                },
              },
              {
                'meta.description': {
                  like: query,
                },
              },
              {
                'meta.title': {
                  like: query,
                },
              },
              {
                slug: {
                  like: query,
                },
              },
            ],
          },
        }
      : {}),
  });

  return (
    <div className="py-24">
      <div className="content-container mb-16">
        <div className="prose max-w-none text-center dark:prose-invert">
          <h1 className="mb-8 lg:mb-16">{t('search')}</h1>

          <Search />
        </div>
      </div>

      {results.totalDocs > 0 ? (
        <CollectionArchive
          collection={results.docs as CardCollectionData[]}
          animationType="immediate"
        />
      ) : (
        <div className="content-container">{t('no-results')}</div>
      )}
    </div>
  );
}

export async function generateMetadata({ params }: Args): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale });

  return {
    title: t('search'),
  };
}
