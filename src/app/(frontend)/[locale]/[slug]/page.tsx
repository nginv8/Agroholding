import { getPayload, TypedLocale, type RequiredDataFromCollectionSlug } from 'payload';

import React, { cache } from 'react';
import type { Metadata } from 'next';
import { draftMode } from 'next/headers';
import configPromise from '@payload-config';

import { RenderBlocks } from '@/blocks/RenderBlocks';
import { LivePreviewListener } from '@/components/LivePreviewListener';
import { PayloadRedirects } from '@/components/PayloadRedirects';
import { RenderHero } from '@/heros/RenderHero';
import { generateMeta } from '@/utilities/generateMeta';

import PageClient from './page.client';

export async function generateStaticParams() {
  const payload = await getPayload({ config: configPromise });
  const pages = await payload.find({
    collection: 'pages',
    draft: false,
    limit: 1000,
    overrideAccess: false,
    pagination: false,
    select: {
      slug: true,
      locale: true,
    },
  });

  const params = pages.docs
    ?.filter((doc) => {
      return doc.slug !== 'home';
    })
    .map(({ slug }) => {
      return { slug };
    });

  return params;
}

type Args = {
  params: Promise<{
    slug?: string;
    locale: TypedLocale;
  }>;
};

export default async function Page({ params: paramsPromise }: Args) {
  const { isEnabled: draft } = await draftMode();
  const { slug = 'home', locale = 'en' } = await paramsPromise;
  const url = '/' + slug;

  const page: RequiredDataFromCollectionSlug<'pages'> | null = await queryPage({
    slug,
    locale,
  });

  if (!page) {
    return <PayloadRedirects url={url} />;
  }

  const { hero, layout } = page;

  return (
    <article>
      <PageClient />
      {/* Allows redirects for valid pages too */}
      <PayloadRedirects disableNotFound url={url} />

      {draft && <LivePreviewListener />}

      <RenderHero hero={hero} />
      <RenderBlocks blocks={layout} locale={locale} />
    </article>
  );
}

export async function generateMetadata({ params: paramsPromise }: Args): Promise<Metadata> {
  const { slug = 'home', locale = 'uk' } = await paramsPromise;
  const page = await queryPage({
    slug,
    locale,
  });

  return generateMeta({ doc: page });
}

const queryPage = cache(async ({ slug, locale }: { slug: string; locale: TypedLocale }) => {
  const { isEnabled: draft } = await draftMode();

  const payload = await getPayload({ config: configPromise });

  const result = await payload.find({
    collection: 'pages',
    draft,
    limit: 1,
    locale,
    overrideAccess: draft,
    where: {
      slug: {
        equals: slug,
      },
    },
  });

  return result.docs?.[0] || null;
});
