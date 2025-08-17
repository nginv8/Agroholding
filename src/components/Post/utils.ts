import type { Post } from '@/payload-types';

/**
 * Get author information from post
 */
export const getAuthorInfo = (post: Post) => {
  if (post.populatedAuthors && post.populatedAuthors.length > 0) {
    return post.populatedAuthors[0];
  }
  if (post.authors && post.authors.length > 0) {
    const author = post.authors[0];
    if (typeof author === 'object') {
      return {
        name: author.name || '',
      };
    }
  }
  return null;
};

/**
 * Get category name from post
 */
export const getCategoryName = (post: Post): string => {
  if (post.categories && post.categories.length > 0) {
    const category = post.categories[0];
    return typeof category === 'object' ? category.title : String(category);
  }
  return '';
};

/**
 * Check if post has authors
 */
export const hasAuthors = (authors: Post['populatedAuthors']): boolean => {
  return authors !== undefined && authors !== null && authors.length > 0;
};
