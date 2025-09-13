import { TypedLocale } from 'payload';

import { getLocale } from 'next-intl/server';

import RichText from '@/components/RichText';
import { getCachedGlobal } from '@/utilities/getGlobals';
import type { Post, PostPageSetting } from '@/payload-types';

import { PostGallery } from './PostGallery';
import { PostHeroFullscreen } from './PostHeroFullscreen';
import { PostHeroSimple } from './PostHeroSimple';
import { PostTags } from './PostTags';
import { RelatedPosts } from './RelatedPosts';

interface PostComponentProps {
  post: Post;
  relatedPosts?: Post[];
}

export default async function PostComponent({ post, relatedPosts }: PostComponentProps) {
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

      <div className="content-container py-8 lg:py-16">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="space-y-8 lg:col-span-8">
            <RichText data={post.content} enableGutter={false} className="prose-lg" />
            <PostGallery post={post} />
            <PostTags post={post} />
          </div>

          <aside className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <RelatedPosts
                relatedPosts={relatedPosts}
                title={relatedPostsTitle}
                description={relatedPostsDescription}
                variant="sidebar"
              />
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
