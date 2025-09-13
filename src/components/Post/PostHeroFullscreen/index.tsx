import React from 'react';

import { Breadcrumbs } from '@/components/Breadcrumbs';
import type { Post } from '@/payload-types';

import { HeroAuthorInfo } from './HeroAuthorInfo';
import { HeroBackground } from './HeroBackground';
import { HeroCategories } from './HeroCategories';

interface PostHeroFullscreenProps {
  post: Post;
}

export const PostHeroFullscreen = ({ post }: PostHeroFullscreenProps) => {
  const { categories, heroImage, populatedAuthors, publishedAt, title } = post;

  const theme = heroImage && typeof heroImage === 'object' ? { 'data-theme': 'dark' } : {};

  return (
    <div className="relative flex items-end" {...theme}>
      <div className="absolute inset-x-0 top-0 z-10 bg-gradient-to-b from-black/90 to-transparent pb-20 pt-8">
        <Breadcrumbs
          className="content-container"
          items={[
            { label: 'Статті', href: '/posts' },
            { label: post.title, isActive: true },
          ]}
        />
      </div>

      <div className="content-container relative z-10 pb-8 pt-24 text-white">
        <HeroCategories categories={categories} />

        <div className="mb-6">
          <h1 className="text-3xl md:text-5xl lg:text-6xl">{title}</h1>
        </div>

        <HeroAuthorInfo populatedAuthors={populatedAuthors} publishedAt={publishedAt} />
      </div>

      <HeroBackground heroImage={heroImage} />
    </div>
  );
};
