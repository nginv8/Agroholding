// import { Post } from '@/payload-types'
import { getPayload, TypedLocale } from 'payload';

import React from 'react';
import type { Metadata } from 'next/types';
import configPromise from '@payload-config';
import { getTranslations } from 'next-intl/server';

import { CardCollectionData } from '@/components/Card';
import { CollectionArchive } from '@/components/CollectionArchive';
import { Search } from '@/search/Component';

import PageClient from './page.client';

type Args = {
  searchParams: Promise<{
    q: string;
  }>;
  params: Promise<{
    locale: TypedLocale;
  }>;
};

export default async function Page({
  searchParams: searchParamsPromise,
  // params: paramsPromise,
}: Args) {
  const { q: query } = await searchParamsPromise;
  // const { locale } = await paramsPromise
  const payload = await getPayload({ config: configPromise });
  const t = await getTranslations();

  const posts = await payload.find({
    collection: 'search',
    depth: 1,
    limit: 12,
    select: {
      title: true,
      slug: true,
      categories: true,
      meta: true,
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
      <PageClient />
      <div className="content-container mb-16">
        <div className="prose max-w-none text-center dark:prose-invert">
          <h1 className="mb-8 lg:mb-16">{t('search')}</h1>

          <div className="mx-auto max-w-[50rem]">
            <Search />
          </div>
        </div>
      </div>

      {posts.totalDocs > 0 ? (
        <CollectionArchive
          collection={posts.docs as CardCollectionData[]}
          collectionName="posts"
          animationType="immediate"
        />
      ) : (
        <div className="content-container">{t('no-results')}</div>
      )}
    </div>
  );
}

export function generateMetadata(): Metadata {
  return {
    title: `Search`,
  };
}
