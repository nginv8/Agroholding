'use client';

import { useTranslations } from 'next-intl';

import { Breadcrumbs } from '@/components/Breadcrumbs';
import { Media } from '@/components/Media';
import type { Post } from '@/payload-types';

import { AuthorAndShare } from './AuthorAndShare';
import { PostHeader } from './PostHeader';
import { PostMeta } from './PostMeta';

interface PostHeroSimpleProps {
  post: Post;
}

export const PostHeroSimple = ({ post }: PostHeroSimpleProps) => {
  const t = useTranslations();

  return (
    <>
      <section className="relative bg-gradient-to-b from-green-50 to-white py-4 lg:py-8">
        <div className="content-container space-y-8">
          <Breadcrumbs
            items={[
              { label: t('posts'), href: '/posts' },
              { label: post.title, isActive: true },
            ]}
          />
          <PostMeta post={post} />
          <PostHeader post={post} />
          <AuthorAndShare post={post} />

          {post.heroImage && typeof post.heroImage === 'object' && (
            <Media
              resource={post.heroImage}
              className="aspect-[2/1] overflow-hidden rounded-2xl shadow-2xl"
              imgClassName="size-full object-cover"
              priority={true}
              loading="eager"
            />
          )}
        </div>
      </section>
    </>
  );
};
