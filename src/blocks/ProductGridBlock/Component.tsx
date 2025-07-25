import { getPayload } from 'payload';

import configPromise from '@payload-config';
import * as motion from 'motion/react-client';

import { CollectionProductGrid } from '@/components/CollectionProductGrid';
import RichText from '@/components/RichText';
import { SectionBackground } from '@/components/SectionBackground';
import { SectionTitle } from '@/components/SectionTitle';
import type { Post, ProductGridBlock as ProductGridBlockProps } from '@/payload-types';

export const ProductGridBlock: React.FC<
  ProductGridBlockProps & {
    id?: string;
  }
> = async (props) => {
  const {
    id,
    title,
    background,
    theme,
    categories,
    introContent,
    limit: limitFromProps,
    populateBy,
    selectedDocs,
  } = props;

  const limit = limitFromProps || 8;

  let posts: Post[] = [];

  if (populateBy === 'collection') {
    const payload = await getPayload({ config: configPromise });

    const flattenedCategories = categories?.map((category) => {
      if (typeof category === 'object') return category.id;
      else return category;
    });

    const fetchedPosts = await payload.find({
      collection: 'posts',
      depth: 1,
      limit,
      ...(flattenedCategories && flattenedCategories.length > 0
        ? {
            where: {
              categories: {
                in: flattenedCategories,
              },
            },
          }
        : {}),
    });

    posts = fetchedPosts.docs;
  } else {
    if (selectedDocs?.length) {
      const filteredSelectedPosts = selectedDocs.map((post) => {
        if (typeof post.value === 'object') return post.value;
      }) as Post[];

      posts = filteredSelectedPosts;
    }
  }

  return (
    <section className="relative overflow-hidden py-32" id={`block-${id}`} data-theme={theme}>
      <SectionBackground {...background} theme={theme} />

      {introContent && (
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="mx-auto mb-24 max-w-3xl text-center"
          >
            <SectionTitle {...title} title={title?.title || ''} theme={theme} />
          </motion.div>
          <RichText className="ms-0 max-w-3xl" data={introContent} enableGutter={false} />
        </div>
      )}
      <CollectionProductGrid posts={posts} />
    </section>
  );
};
