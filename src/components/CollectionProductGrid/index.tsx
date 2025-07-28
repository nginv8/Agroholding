import React from 'react';

import { CardPostData, ProductCard } from '@/components/ProductCard';

export type Props = {
  posts: CardPostData[];
  relationTo?: 'posts' | 'products';
};

export const CollectionProductGrid: React.FC<Props> = (props) => {
  const { posts, relationTo = 'posts' } = props;

  return (
    <div className="container relative z-10 grid gap-8 sm:grid-cols-2 md:grid-cols-3 md:gap-10 md:gap-y-12 lg:grid-cols-4">
      {posts?.map((result, index) => {
        if (typeof result === 'object' && result !== null) {
          return (
            <div key={index}>
              <ProductCard
                className="h-full"
                doc={result}
                relationTo={relationTo}
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
