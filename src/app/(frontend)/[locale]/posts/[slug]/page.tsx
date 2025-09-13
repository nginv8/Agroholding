import { getPayload, TypedLocale } from 'payload';

import React, { cache } from 'react';
import type { Metadata } from 'next';
import { draftMode } from 'next/headers';
import configPromise from '@payload-config';

import { LivePreviewListener } from '@/components/LivePreviewListener';
import { PayloadRedirects } from '@/components/PayloadRedirects';
import PostComponent from '@/components/Post';
import { generateMeta } from '@/utilities/generateMeta';
import type { Post } from '@/payload-types';

import PageClient from './page.client';

export async function generateStaticParams() {
  const payload = await getPayload({ config: configPromise });
  const posts = await payload.find({
    collection: 'posts',
    draft: false,
    limit: 1000,
    overrideAccess: false,
    pagination: false,
    select: {
      slug: true,
    },
  });

  const params = posts.docs.map(({ slug }) => {
    return { slug };
  });

  return params;
}

type Args = {
  params: Promise<{
    slug?: string;
    locale?: TypedLocale;
  }>;
};

export default async function Post({ params: paramsPromise }: Args) {
  const { slug = '', locale = 'uk' } = await paramsPromise;
  const url = '/posts/' + slug;
  const post = await queryPost({ slug, locale });
  const { isEnabled: draft } = await draftMode();

  if (!post) return <PayloadRedirects url={url} />;

  const relatedPosts = post.relatedPosts
    ? post.relatedPosts.filter(
        (relatedPost): relatedPost is Post => typeof relatedPost === 'object'
      )
    : [];

  return (
    <>
      <PageClient />

      {/* Allows redirects for valid pages too */}
      <PayloadRedirects disableNotFound url={url} />

      {draft && <LivePreviewListener />}

      <PostComponent post={post} relatedPosts={relatedPosts} />
    </>
  );
}

export async function generateMetadata({ params: paramsPromise }: Args): Promise<Metadata> {
  const { slug = '', locale = 'en' } = await paramsPromise;
  const post = await queryPost({ slug, locale });

  return generateMeta({ doc: post });
}

const queryPost = cache(async ({ slug, locale }: { slug: string; locale: TypedLocale }) => {
  const { isEnabled: draft } = await draftMode();

  const payload = await getPayload({ config: configPromise });

  const result = await payload.find({
    collection: 'posts',
    draft,
    limit: 1,
    overrideAccess: draft,
    locale,
    where: {
      slug: {
        equals: slug,
      },
    },
    select: {
      id: true,
      title: true,
      excerpt: true,
      content: true,
      heroImage: true,
      gallery: true,
      tags: true,
      readTime: true,
      categories: true,
      relatedPosts: true,
      authors: true,
      populatedAuthors: true,
      publishedAt: true,
      slug: true,
      meta: true,
      updatedAt: true,
      createdAt: true,
    },
  });

  return result.docs?.[0] || null;
});
