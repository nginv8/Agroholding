'use client';

import * as motion from 'motion/react-client';

import type { Post } from '@/payload-types';

interface PostHeaderProps {
  post: Post;
}

export const PostHeader = ({ post }: PostHeaderProps) => {
  return (
    <>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mb-6 text-3xl font-bold leading-tight text-gray-900 lg:text-5xl"
      >
        {post.title}
      </motion.h1>

      {post.excerpt && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-8 text-lg leading-relaxed text-gray-600 lg:text-xl"
        >
          {post.excerpt}
        </motion.p>
      )}
    </>
  );
};
