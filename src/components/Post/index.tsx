import * as motion from 'motion/react-client';

import RichText from '@/components/RichText';
import { getCachedGlobal } from '@/utilities/getGlobals';
import type { Post, PostPageSetting } from '@/payload-types';

import { PostGallery } from './PostGallery';
import { PostHeroFullscreen } from './PostHeroFullscreen';
import { PostHeroSimple } from './PostHeroSimple';
import { PostTags } from './PostTags';
import { RelatedPostsSection } from './RelatedPostsSection';

interface PostComponentProps {
  post: Post;
  relatedPosts?: Post[];
}

export default async function PostComponent({ post, relatedPosts }: PostComponentProps) {
  const { heroLayout, relatedPostsTitle, relatedPostsDescription } = (await getCachedGlobal(
    'postPageSettings',
    1
  )()) as PostPageSetting;

  return (
    <main className="min-h-screen">
      {heroLayout === 'full' && <PostHeroFullscreen post={post} />}
      {heroLayout === 'simple' && <PostHeroSimple post={post} />}

      <div className="container mx-auto p-4 lg:py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="prose prose-lg prose-green mb-8 max-w-5xl"
        >
          <RichText data={post.content} enableGutter={false} />
        </motion.div>

        <PostGallery post={post} />
        <PostTags post={post} />
        <RelatedPostsSection
          relatedPosts={relatedPosts}
          title={relatedPostsTitle}
          description={relatedPostsDescription}
        />
      </div>
    </main>
  );
}
