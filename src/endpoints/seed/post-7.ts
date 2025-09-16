import { RequiredDataFromCollectionSlug } from 'payload';

import type { PostArgs } from './post-1';

// Ukrainian version
export const post7: (args: PostArgs) => RequiredDataFromCollectionSlug<'posts'> = ({
  heroImage,
  blockImage,
  author,
}) => {
  return {
    slug: 'digital-farming-revolution',
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
                text: 'Цифрова революція в сільському господарстві: IoT, дрони та штучний інтелект на наших полях.',
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
                text: 'Впровадження цифрових технологій дозволяє нам оптимізувати всі процеси - від посіву до збирання врожаю. Використання IoT-датчиків, дронів та систем штучного інтелекту підвищує ефективність на 25%.',
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
      'Цифрова трансформація АПК набирає обертів: IoT-датчики, дрони для моніторингу, системи штучного інтелекту підвищили нашу ефективність на 25%. Познайомтесь з передовими рішеннями, що революціонізують процеси від посіву до збирання.',
    meta: {
      description:
        'Цифрові технології в аграрному секторі: IoT, дрони, ШІ та їх вплив на підвищення ефективності.',
      image: heroImage.id,
      title: 'Цифрова революція в сільському господарстві',
    },
    relatedPosts: [],
    title: 'Цифрова революція в сільському господарстві',
  };
};

// English version
export const post7_en: (args: PostArgs) => RequiredDataFromCollectionSlug<'posts'> = ({
  heroImage,
  blockImage,
  author,
}) => {
  return {
    slug: 'digital-farming-revolution',
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
                text: 'Digital Revolution in Agriculture: IoT, Drones and Artificial Intelligence on Our Fields.',
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
                text: 'Implementation of digital technologies allows us to optimize all processes - from sowing to harvesting. The use of IoT sensors, drones, and artificial intelligence systems increases efficiency by 25%.',
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
      'Digital transformation of agriculture is gaining momentum: IoT sensors, monitoring drones, and artificial intelligence systems have increased our efficiency by 25%. Explore cutting-edge solutions revolutionizing processes from sowing to harvesting.',
    meta: {
      description:
        'Digital technologies in the agricultural sector: IoT, drones, AI and their impact on efficiency improvement.',
      image: heroImage.id,
      title: 'Digital Revolution in Agriculture',
    },
    relatedPosts: [],
    title: 'Digital Revolution in Agriculture',
  };
};
