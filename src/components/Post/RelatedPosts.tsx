import Link from 'next/link';
import * as motion from 'motion/react-client';

import { Media } from '@/components/Media';
import { formatDateTime } from '@/utilities/formatDateTime';
import { cn } from '@/utilities/ui';
import type { Post } from '@/payload-types';

interface RelatedPostsProps {
  relatedPosts?: Post[];
  title: string;
  description: string;
  variant?: 'default' | 'sidebar';
}

export const RelatedPosts = async ({
  relatedPosts,
  title,
  description,
  variant = 'default',
}: RelatedPostsProps) => {
  if (!relatedPosts || relatedPosts.length === 0) return null;

  if (variant === 'sidebar') {
    return (
      <div className="space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {title && <h2 className="mb-2 text-xl font-bold text-gray-900">{title}</h2>}
          {description && <p className="mb-4 text-sm text-gray-600">{description}</p>}
        </motion.div>

        <div className="space-y-4">
          {relatedPosts.slice(0, 5).map((relatedPost, index) => (
            <motion.article
              key={relatedPost.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <Link
                href={`/posts/${relatedPost.slug}`}
                className="flex gap-3 overflow-hidden rounded-lg bg-white p-3 shadow-sm transition-shadow hover:shadow-md"
              >
                {relatedPost.meta?.image && typeof relatedPost.meta.image === 'object' && (
                  <div className="relative size-16 shrink-0 overflow-hidden rounded">
                    <Media
                      resource={relatedPost.meta.image}
                      className="size-full transition-transform duration-300 group-hover:scale-105"
                      imgClassName="size-full object-cover"
                    />
                  </div>
                )}
                <div className="flex-1">
                  {relatedPost.publishedAt && (
                    <div className="mb-1 text-xs text-gray-500">
                      {formatDateTime(relatedPost.publishedAt)}
                    </div>
                  )}
                  <h3 className="mb-1 line-clamp-2 text-base font-semibold text-gray-900 transition-colors group-hover:text-green-700">
                    {relatedPost.title}
                  </h3>
                  {relatedPost.meta?.description && (
                    <p className="line-clamp-2 text-sm text-gray-600">
                      {relatedPost.meta?.description}
                    </p>
                  )}
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    );
  }

  return (
    <section className="bg-secondary-100 py-8 lg:py-16">
      <div className="content-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto text-center"
        >
          {title && <h2 className="mb-2 text-3xl font-bold text-gray-900 lg:mb-4">{title}</h2>}
          {description && <p className="mb-6 text-gray-600 lg:mb-12">{description}</p>}
        </motion.div>

        <div
          className={cn('mx-auto grid gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-8', {
            'xl:grid-cols-4': relatedPosts?.length > 3,
          })}
        >
          {relatedPosts.slice(0, 4).map((relatedPost, index) => (
            <motion.article
              key={relatedPost.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <Link
                href={`/posts/${relatedPost.slug}`}
                className="inline-block size-full overflow-hidden rounded-xl bg-white shadow-lg transition-shadow hover:shadow-xl"
              >
                {relatedPost.meta?.image && typeof relatedPost.meta.image === 'object' && (
                  <div className="relative h-48 overflow-hidden">
                    <Media
                      resource={relatedPost.meta.image}
                      className="size-full transition-transform duration-300 group-hover:scale-105"
                      imgClassName="size-full object-cover"
                    />
                  </div>
                )}
                <div className="p-6">
                  {relatedPost.publishedAt && (
                    <div className="mb-2 text-sm text-gray-500">
                      {formatDateTime(relatedPost.publishedAt)}
                    </div>
                  )}
                  <h3 className="mb-2 text-lg font-semibold text-gray-900 transition-colors group-hover:text-green-700">
                    {relatedPost.title}
                  </h3>
                  {relatedPost.meta?.description && (
                    <p className="text-sm text-gray-600">{relatedPost.meta?.description}</p>
                  )}
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
