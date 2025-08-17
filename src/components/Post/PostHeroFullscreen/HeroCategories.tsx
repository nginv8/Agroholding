'use client';

import React from 'react';
import { useTranslations } from 'next-intl';

import type { Post } from '@/payload-types';

interface HeroCategoriesProps {
  categories: Post['categories'];
}

export const HeroCategories = ({ categories }: HeroCategoriesProps) => {
  const t = useTranslations();

  if (!categories || categories.length === 0) {
    return null;
  }

  return (
    <div className="mb-6 text-sm uppercase">
      {categories.map((category, index) => {
        if (typeof category === 'object' && category !== null) {
          const { title: categoryTitle } = category;
          const titleToUse = categoryTitle || t('untitled-category');
          const isLast = index === categories.length - 1;

          return (
            <React.Fragment key={index}>
              {titleToUse}
              {!isLast && <React.Fragment>, &nbsp;</React.Fragment>}
            </React.Fragment>
          );
        }
        return null;
      })}
    </div>
  );
};
