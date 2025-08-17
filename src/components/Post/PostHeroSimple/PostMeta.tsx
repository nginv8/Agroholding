'use client';

import { Calendar, Tag } from 'lucide-react';
import * as motion from 'motion/react-client';

import { formatDateTime } from '@/utilities/formatDateTime';
import type { Post } from '@/payload-types';

import { getCategoryName } from '../utils';

interface PostMetaProps {
  post: Post;
}

export const PostMeta = ({ post }: PostMetaProps) => {
  const categoryName = getCategoryName(post);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="mb-6 flex flex-wrap items-center gap-4"
    >
      {categoryName && (
        <span className="inline-flex items-center rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-800">
          <Tag className="mr-1 size-3" />
          {categoryName}
        </span>
      )}
      {post.publishedAt && (
        <div className="flex items-center text-sm text-gray-500">
          <Calendar className="mr-2 size-4" />
          {formatDateTime(post.publishedAt)}
        </div>
      )}
      {post.readTime && (
        <div className="flex items-center text-sm text-gray-500">
          <Calendar className="mr-2 size-4" />
          {post.readTime}
        </div>
      )}
    </motion.div>
  );
};
