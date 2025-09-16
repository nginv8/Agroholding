import { RequiredDataFromCollectionSlug } from 'payload';

import type { PostArgs } from './post-1';

// Ukrainian version
export const post10: (args: PostArgs) => RequiredDataFromCollectionSlug<'posts'> = ({
  heroImage,
  blockImage,
  author,
}) => {
  return {
    slug: 'young-farmers-program',
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
                text: 'Програма підтримки молодих фермерів: навчання, стажування та розвиток аграрного сектору.',
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
                text: 'Розвиток молодого покоління аграріїв - наш пріоритет. Щорічно 50 молодих фермерів проходять навчання та стажування в наших підрозділах, отримуючи сучасні знання та практичний досвід.',
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
      "Інвестуємо в майбутнє АПК через розвиток молодих кадрів: програми стажування, навчальні центри, сучасне обладнання для практики. За 3 роки підготували 150+ молодих спеціалістів. Дізнайтесь про можливості кар'єрного зростання в агросфері.",
    meta: {
      description:
        'Програма підтримки молодих фермерів: навчання, стажування та розвиток кадрового потенціалу.',
      image: heroImage.id,
      title: 'Програма підтримки молодих фермерів',
    },
    relatedPosts: [],
    title: 'Програма підтримки молодих фермерів',
  };
};

// English version
export const post10_en: (args: PostArgs) => RequiredDataFromCollectionSlug<'posts'> = ({
  heroImage,
  blockImage,
  author,
}) => {
  return {
    slug: 'young-farmers-program',
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
                text: 'Young Farmers Support Program: Training, Internships and Agricultural Sector Development.',
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
                text: 'Developing the young generation of farmers is our priority. Annually, 50 young farmers undergo training and internships in our divisions, gaining modern knowledge and practical experience.',
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
      'We invest in the future of agriculture through young talent development: internship programs, training centers, modern equipment for practice. Over 3 years, we have trained 150+ young specialists. Learn about career growth opportunities in agriculture.',
    meta: {
      description:
        'Young farmers support program: training, internships, and human resource development.',
      image: heroImage.id,
      title: 'Young Farmers Support Program',
    },
    relatedPosts: [],
    title: 'Young Farmers Support Program',
  };
};
