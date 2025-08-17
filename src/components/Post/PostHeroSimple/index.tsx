'use client';

import * as motion from 'motion/react-client';
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
        <div className="container px-4">
          <Breadcrumbs
            items={[
              { label: t('posts'), href: '/posts' },
              { label: post.title, isActive: true },
            ]}
            className="mb-8"
          />
          <PostMeta post={post} />
          <PostHeader post={post} />
          <AuthorAndShare post={post} />
        </div>
      </section>

      {post.heroImage && typeof post.heroImage === 'object' && (
        <section>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="container px-4"
          >
            <Media
              resource={post.heroImage}
              fill
              className="relative aspect-[2/1] overflow-hidden rounded-2xl shadow-2xl"
              imgClassName="object-cover"
            />
          </motion.div>
        </section>
      )}
    </>
  );
};
