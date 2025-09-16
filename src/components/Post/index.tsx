import { TypedLocale } from 'payload';

import { getLocale } from 'next-intl/server';

import RichText from '@/components/RichText';
import { getCachedGlobal } from '@/utilities/getGlobals';
import type { PostPageSetting, Post as PostType } from '@/payload-types';

import { PostGallery } from './PostGallery';
import { PostHeroFullscreen } from './PostHeroFullscreen';
import { PostHeroSimple } from './PostHeroSimple';
import { PostTags } from './PostTags';
import { RelatedPosts } from './RelatedPosts';

interface PostProps {
  post: PostType;
  relatedPosts?: PostType[];
}

export default async function Post({ post, relatedPosts }: PostProps) {
  const locale = (await getLocale()) as TypedLocale;
  const { heroLayout, relatedPostsTitle, relatedPostsDescription } = (await getCachedGlobal(
    'postPageSettings',
    1,
    locale
  )()) as PostPageSetting;

  return (
    <main className="min-h-screen">
      {heroLayout === 'full' && <PostHeroFullscreen post={post} />}
      {heroLayout === 'simple' && <PostHeroSimple post={post} />}

      <div className="content-container my-8 space-y-8 lg:my-16 lg:grid lg:grid-cols-12 lg:gap-x-8 lg:space-y-0">
        <div className="space-y-8 lg:col-span-8">
          <RichText data={post.content} enableGutter={false} className="prose-lg" />
          <PostGallery post={post} />
          <PostTags post={post} />
        </div>

        <aside className="lg:col-span-4">
          <RelatedPosts
            className="lg:sticky lg:top-28"
            relatedPosts={relatedPosts}
            title={relatedPostsTitle}
            description={relatedPostsDescription}
            variant="sidebar"
          />
        </aside>
      </div>
    </main>
  );
}
