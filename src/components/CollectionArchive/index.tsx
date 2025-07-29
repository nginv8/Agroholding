import React from 'react';

import { Card, CardCollectionData } from '@/components/Card';

export type Props = {
  collection: CardCollectionData[];
  collectionName?: 'posts' | 'products';
};

export const CollectionArchive: React.FC<Props> = (props) => {
  const { collection, collectionName = 'posts' } = props;

  return (
    <div className="container relative z-10 grid gap-8 sm:grid-cols-2 md:grid-cols-3 md:gap-10 md:gap-y-12 lg:grid-cols-4">
      {collection?.map((result, index) => {
        if (typeof result === 'object' && result !== null) {
          return (
            <div key={index}>
              <Card
                className="h-full"
                doc={result}
                collectionName={collectionName}
                showCategories={false}
              />
            </div>
          );
        }

        return null;
      })}
    </div>
  );
};
