import { RequiredDataFromCollectionSlug } from 'payload';

import type { PostArgs } from './post-1';

// Ukrainian version
export const post9: (args: PostArgs) => RequiredDataFromCollectionSlug<'posts'> = ({
  heroImage,
  blockImage,
  author,
}) => {
  return {
    slug: 'climate-change-adaptation',
    _status: 'published',
    slugLock: false,
    authors: [author],
    content: {
      root: {
        type: 'root',
        children: [
          {
            type: 'heading',
            children: [
              {
                type: 'text',
                detail: 0,
                format: 0,
                mode: 'normal',
                style: '',
                text: 'Адаптація до зміни клімату: стійкі сорти кукурудзи та водозберігаючі технології.',
                version: 1,
              },
            ],
            direction: 'ltr',
            format: '',
            indent: 0,
            tag: 'h2',
            version: 1,
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                detail: 0,
                format: 0,
                mode: 'normal',
                style: '',
                text: 'Зміна клімату вимагає нових підходів до вирощування сільськогосподарських культур. Ми інвестуємо в розробку посухостійких сортів та впроваджуємо системи краплинного зрошення.',
                version: 1,
              },
            ],
            direction: 'ltr',
            format: '',
            indent: 0,
            textFormat: 0,
            version: 1,
          },
          {
            type: 'block',
            fields: {
              blockName: '',
              blockType: 'mediaBlock',
              media: blockImage.id,
              position: 'default',
            },
            format: '',
            version: 2,
          },
        ],
        direction: 'ltr',
        format: '',
        indent: 0,
        version: 1,
      },
    },
    heroImage: heroImage.id,
    excerpt:
      'Кліматичні виклики вимагають нових рішень: розробка посухостійких сортів, системи краплинного зрошення, мікроклімат-контроль. Дізнайтесь, як ми адаптуємо агротехнології для стабільного виробництва в умовах мінливого клімату.',
    meta: {
      description:
        'Стратегії адаптації до зміни клімату: посухостійкі сорти та водозберігаючі технології.',
      image: heroImage.id,
      title: 'Адаптація до зміни клімату',
    },
    relatedPosts: [],
    title: 'Адаптація до зміни клімату',
  };
};

// English version
export const post9_en: (args: PostArgs) => RequiredDataFromCollectionSlug<'posts'> = ({
  heroImage,
  blockImage,
  author,
}) => {
  return {
    slug: 'climate-change-adaptation',
    _status: 'published',
    slugLock: false,
    authors: [author],
    content: {
      root: {
        type: 'root',
        children: [
          {
            type: 'heading',
            children: [
              {
                type: 'text',
                detail: 0,
                format: 0,
                mode: 'normal',
                style: '',
                text: 'Climate Change Adaptation: Drought-Resistant Corn Varieties and Water-Saving Technologies.',
                version: 1,
              },
            ],
            direction: 'ltr',
            format: '',
            indent: 0,
            tag: 'h2',
            version: 1,
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                detail: 0,
                format: 0,
                mode: 'normal',
                style: '',
                text: 'Climate change demands new approaches to crop cultivation. We invest in developing drought-resistant varieties and implement drip irrigation systems.',
                version: 1,
              },
            ],
            direction: 'ltr',
            format: '',
            indent: 0,
            textFormat: 0,
            version: 1,
          },
          {
            type: 'block',
            fields: {
              blockName: '',
              blockType: 'mediaBlock',
              media: blockImage.id,
              position: 'default',
            },
            format: '',
            version: 2,
          },
        ],
        direction: 'ltr',
        format: '',
        indent: 0,
        version: 1,
      },
    },
    heroImage: heroImage.id,
    excerpt:
      'Climate challenges require new solutions: development of drought-resistant varieties, drip irrigation systems, microclimate control. Learn how we adapt agricultural technologies for stable production in changing climate conditions.',
    meta: {
      description:
        'Climate change adaptation strategies: drought-resistant varieties and water-saving technologies.',
      image: heroImage.id,
      title: 'Climate Change Adaptation',
    },
    relatedPosts: [],
    title: 'Climate Change Adaptation',
  };
};
