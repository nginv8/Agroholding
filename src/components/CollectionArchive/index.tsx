import React from 'react';

import { Card, CardCollectionData } from '@/components/Card';

type ResponsiveLimits = {
  mobile: number;
  tablet: number;
  desktop: number;
};

export type Props = {
  collection: CardCollectionData[];
  collectionName?: 'posts' | 'products';
  animationType?: 'onView' | 'immediate';
  limits?: ResponsiveLimits;
};

const DEFAULT_LIMITS: ResponsiveLimits = {
  mobile: 4,
  tablet: 6,
  desktop: 8,
};

const renderCard = (
  result: CardCollectionData,
  index: number,
  collectionName: 'posts' | 'products',
  animationType?: 'onView' | 'immediate'
) => {
  if (typeof result !== 'object' || result === null) return null;

  return (
    <Card
      className="h-full"
      doc={result}
      collectionName={collectionName}
      showCategories={true}
      index={index}
      animationType={animationType}
      key={result.slug}
    />
  );
};

const ResponsiveGrid: React.FC<{
  items: CardCollectionData[];
  className: string;
  collectionName: 'posts' | 'products';
  animationType?: 'onView' | 'immediate';
}> = ({ items, className, collectionName, animationType }) => (
  <div className={className}>
    {items.map((result, index) => renderCard(result, index, collectionName, animationType))}
  </div>
);

export const CollectionArchive: React.FC<Props> = (props) => {
  const { collection, collectionName = 'posts', animationType, limits = DEFAULT_LIMITS } = props;

  const responsiveItems = {
    mobile: collection?.slice(0, limits.mobile) || [],
    tablet: collection?.slice(0, limits.tablet) || [],
    desktop: collection?.slice(0, limits.desktop) || [],
  };

  return (
    <div className="content-container">
      <ResponsiveGrid
        items={responsiveItems.mobile}
        className="grid min-h-80 gap-8 sm:grid-cols-2 md:hidden"
        collectionName={collectionName}
        animationType={animationType}
      />

      <ResponsiveGrid
        items={responsiveItems.tablet}
        className="hidden min-h-80 gap-8 gap-y-12 md:grid md:grid-cols-3 lg:hidden"
        collectionName={collectionName}
        animationType={animationType}
      />

      <ResponsiveGrid
        items={responsiveItems.desktop}
        className="hidden min-h-80 gap-8 gap-y-12 lg:grid lg:grid-cols-4"
        collectionName={collectionName}
        animationType={animationType}
      />
    </div>
  );
};
