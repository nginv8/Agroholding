import React from 'react';

import { Card, CardPostData } from '@/components/Card';
import { cn } from '@/utilities/ui';

export type Props = {
  posts: CardPostData[];
};

export const CollectionArchive: React.FC<Props> = (props) => {
  const { posts } = props;

  return (
    <div className={cn('container')}>
      <div>
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {posts?.map((result, index) => {
            if (typeof result === 'object' && result !== null) {
              return (
                <div key={index}>
                  <Card className="h-full" doc={result} relationTo="posts" showCategories={false} />
                </div>
              );
            }

            return null;
          })}
        </div>
      </div>
    </div>
  );
};
