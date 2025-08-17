import Link from 'next/link';
import * as motion from 'motion/react-client';

import { Media } from '@/components/Media';
import { formatDateTime } from '@/utilities/formatDateTime';
import type { Post } from '@/payload-types';

interface RelatedPostsSectionProps {
  relatedPosts?: Post[];
  title: string;
  description: string;
}

export const RelatedPostsSection = async ({
  relatedPosts,
  title,
  description,
}: RelatedPostsSectionProps) => {
  if (!relatedPosts || relatedPosts.length === 0) return null;

  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center"
          >
            {title && <h2 className="mb-4 text-3xl font-bold text-gray-900">{title}</h2>}
            {description && <p className="text-gray-600">{description}</p>}
          </motion.div>

          <div className="grid gap-8 md:grid-cols-3">
            {relatedPosts.slice(0, 3).map((relatedPost, index) => (
              <motion.article
                key={relatedPost.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <Link href={`/posts/${relatedPost.slug}`}>
                  <div className="overflow-hidden rounded-xl bg-white shadow-lg transition-shadow hover:shadow-xl">
                    {relatedPost.heroImage && typeof relatedPost.heroImage === 'object' && (
                      <div className="relative h-48 overflow-hidden">
                        <Media
                          resource={relatedPost.heroImage}
                          alt={relatedPost.title}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
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
                      {relatedPost.excerpt && (
                        <p className="text-sm text-gray-600">{relatedPost.excerpt}</p>
                      )}
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
