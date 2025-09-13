import { getPayload, TypedLocale } from 'payload';

import React from 'react';
import configPromise from '@payload-config';
import { getLocale } from 'next-intl/server';

import { CollectionArchive } from '@/components/CollectionArchive';
import RichText from '@/components/RichText';
import { SectionBackground } from '@/components/SectionBackground';
import { SectionTitle } from '@/components/SectionTitle';
import type { ArchiveBlock as ArchiveBlockProps, Post, Product } from '@/payload-types';

import { ArchiveButton } from './ArchiveButton';

export type CollectionTypes = Post | Product;

export const ArchiveBlock: React.FC<
  ArchiveBlockProps & {
    id?: string;
  }
> = async (props) => {
  const {
    id,
    title,
    sbg,
    theme,
    categories,
    introContent,
    limit: limitFromProps,
    populateBy,
    selectedDocs,
    relationTo,
  } = props;
  const collectionName = relationTo ? relationTo : 'posts';
  const limit = limitFromProps || 8;
  const locale = (await getLocale()) as TypedLocale;

  let collection: CollectionTypes[] = [];

  if (populateBy === 'collection') {
    const payload = await getPayload({ config: configPromise });

    const flattenedCategories = categories?.map((category) => {
      if (typeof category === 'object') return category.id;
      else return category;
    });

    const fetchedCollection = await payload.find({
      collection: collectionName,
      depth: 1,
      limit,
      locale,
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

    collection = fetchedCollection.docs;
  } else {
    if (selectedDocs?.length) {
      const filteredSelectedCollection = selectedDocs.map((item) => {
        if (typeof item.value === 'object') return item.value;
      }) as CollectionTypes[];

      collection = filteredSelectedCollection;
    }
  }

  return (
    <section className="content-section" id={`block-${id}`} data-theme={theme}>
      <SectionBackground {...sbg} />

      <div className="content-container">
        <SectionTitle {...title} />

        {introContent && (
          <RichText className="ms-0 max-w-3xl" data={introContent} enableGutter={false} />
        )}
      </div>
      <CollectionArchive collection={collection} collectionName={collectionName} />
      <ArchiveButton collectionName={collectionName} hasItems={collection.length > 0} />
    </section>
  );
};
