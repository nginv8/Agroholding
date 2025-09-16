import { getPayload, TypedLocale } from 'payload';

import React, { cache } from 'react';
import type { Metadata } from 'next';
import { draftMode } from 'next/headers';
import configPromise from '@payload-config';

import { LivePreviewListener } from '@/components/LivePreviewListener';
import { PayloadRedirects } from '@/components/PayloadRedirects';
import Post from '@/components/Post';
import { generateMeta } from '@/utilities/generateMeta';
import { COLLECTION_NAMES, PAGINATION_LIMITS } from '@/constants/app';
import type { Post as PostType } from '@/payload-types';

const COLLECTION_NAME = COLLECTION_NAMES.POSTS;

export async function generateStaticParams() {
  const payload = await getPayload({ config: configPromise });
  const posts = await payload.find({
    collection: COLLECTION_NAME,
    draft: false,
    limit: PAGINATION_LIMITS.MAX_STATIC_PAGES,
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

export default async function PostPage({ params: paramsPromise }: Args) {
  const { slug = '', locale } = await paramsPromise;
  const url = `/${COLLECTION_NAME}/` + slug;
  const post = await queryPost({ slug, locale });
  const { isEnabled: draft } = await draftMode();

  if (!post) return <PayloadRedirects url={url} />;

  const relatedPosts = post.relatedPosts
    ? post.relatedPosts.filter(
        (relatedPost): relatedPost is PostType => typeof relatedPost === 'object'
      )
    : [];

  return (
    <>
      {/* Allows redirects for valid pages too */}
      <PayloadRedirects disableNotFound url={url} />

      {draft && <LivePreviewListener />}

      <Post post={post} relatedPosts={relatedPosts} />
    </>
  );
}

export async function generateMetadata({ params: paramsPromise }: Args): Promise<Metadata> {
  const { slug = '', locale } = await paramsPromise;
  const post = await queryPost({ slug, locale });

  return generateMeta({ doc: post, locale });
}

const queryPost = cache(async ({ slug, locale }: { slug: string; locale?: TypedLocale }) => {
  const { isEnabled: draft } = await draftMode();

  const payload = await getPayload({ config: configPromise });
  const localeParam = locale ? { locale } : {};

  const result = await payload.find({
    collection: COLLECTION_NAME,
    draft,
    limit: 2,
    overrideAccess: draft,
    ...localeParam,
    where: {
      slug: {
        equals: slug,
      },
    },
  });

  return result.docs?.[0] || null;
});
