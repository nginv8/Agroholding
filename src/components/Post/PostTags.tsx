'use client';

import * as motion from 'motion/react-client';
import { useTranslations } from 'next-intl';

import type { Post } from '@/payload-types';

interface PostTagsProps {
  post: Post;
}

export const PostTags = ({ post }: PostTagsProps) => {
  const t = useTranslations();

  if (!post.tags || post.tags.length === 0) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.8 }}
      className="mt-12 border-t border-gray-200 pt-8"
    >
      <h4 className="mb-4 text-lg font-semibold text-gray-900">{t('tags')}</h4>
      <div className="flex flex-wrap gap-2">
        {post.tags.map((tagItem, index) => (
          <span
            key={index}
            className="inline-flex cursor-pointer items-center rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700 transition-colors hover:bg-green-100 hover:text-green-800"
          >
            #{tagItem.tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
};
