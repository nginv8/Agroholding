'use client';

import type React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import * as motion from 'motion/react-client';
import { useTranslations } from 'next-intl';

import { Media } from '@/components/Media';
import { cn } from '@/utilities/ui';
import useClickableCard from '@/utilities/useClickableCard';
import type { Post, Product } from '@/payload-types';

export type CardCollectionData = Pick<Post | Product, 'slug' | 'categories' | 'meta' | 'title'>;

export const Card: React.FC<{
  alignItems?: 'center';
  className?: string;
  doc?: CardCollectionData;
  collectionName: 'posts' | 'products';
  showCategories?: boolean;
  title?: string;
  index?: number;
}> = (props) => {
  const { card, link } = useClickableCard({});
  const {
    className,
    doc,
    collectionName,
    showCategories,
    title: titleFromProps,
    index = 0,
  } = props;
  const { slug, categories, meta, title } = doc || {};
  const { description, image: metaImage } = meta || {};
  const t = useTranslations();

  const hasCategories = categories && Array.isArray(categories) && categories.length > 0;
  const titleToUse = titleFromProps || title;
  const sanitizedDescription = description?.replace(/\s/g, ' '); // replace non-breaking space with white space
  const href = `/${collectionName}/${slug}`;

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className={cn('group block', className)}
      ref={card.ref}
    >
      <Link href={href} ref={link.ref} className="group block">
        <div className="relative mb-6 aspect-square overflow-hidden rounded-xl bg-muted">
          {!metaImage && (
            <div className="flex h-full items-center justify-center text-muted-foreground">
              No image
            </div>
          )}
          {metaImage && typeof metaImage !== 'string' && (
            <Media
              resource={metaImage}
              size="33vw"
              className="size-full transition-transform duration-300 group-hover:scale-105"
              imgClassName="object-cover size-full"
            />
          )}
        </div>

        <div className="space-y-3">
          {showCategories && hasCategories && (
            <div className="flex flex-wrap gap-2">
              {categories?.map((category, categoryIndex) => {
                if (typeof category === 'object') {
                  const { title: titleFromCategory } = category;
                  const categoryTitle = titleFromCategory || 'Untitled category';

                  return (
                    <span
                      key={categoryIndex}
                      className="inline-block rounded-full bg-primary/10 px-2 py-1 text-xs font-medium text-primary"
                    >
                      {categoryTitle}
                    </span>
                  );
                }
                return null;
              })}
            </div>
          )}

          {titleToUse && (
            <h3 className="mb-2 text-xl font-semibold text-foreground transition-colors group-hover:text-primary dark:group-hover:text-white">
              {titleToUse}
            </h3>
          )}

          {description && (
            <p className="mb-4 line-clamp-2 text-muted-foreground dark:text-white/80">
              {sanitizedDescription}
            </p>
          )}

          <span className="inline-flex items-center font-medium text-primary transition-colors group-hover:text-primary/80 dark:text-accent-500 dark:group-hover:text-accent-400">
            {t('read-more')}
            <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
          </span>
        </div>
      </Link>
    </motion.article>
  );
};
