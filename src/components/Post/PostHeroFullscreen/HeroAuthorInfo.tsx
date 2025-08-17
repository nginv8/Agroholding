'use client';

import React from 'react';
import { useTranslations } from 'next-intl';

import { formatDateTime } from '@/utilities/formatDateTime';
import type { Post } from '@/payload-types';

import { hasAuthors } from '../utils';

interface HeroAuthorInfoProps {
  populatedAuthors: Post['populatedAuthors'];
  publishedAt: Post['publishedAt'];
}

export const HeroAuthorInfo = ({ populatedAuthors, publishedAt }: HeroAuthorInfoProps) => {
  const t = useTranslations();
  const showAuthors = hasAuthors(populatedAuthors);

  const formatSimpleAuthors = (authors: Post['populatedAuthors']): string => {
    if (!authors || authors.length === 0) return '';
    return authors.map((author) => author?.name || t('unknown-author')).join(', ');
  };

  if (!showAuthors && !publishedAt) {
    return null;
  }

  return (
    <div className="flex flex-col gap-4 md:flex-row md:gap-16">
      {showAuthors && (
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <p className="text-sm">{t('author')}</p>
            <p>{formatSimpleAuthors(populatedAuthors)}</p>
          </div>
        </div>
      )}
      {publishedAt && (
        <div className="flex flex-col gap-1">
          <p className="text-sm">{t('date-published')}</p>
          <time dateTime={publishedAt}>{formatDateTime(publishedAt)}</time>
        </div>
      )}
    </div>
  );
};
