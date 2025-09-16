import { RequiredDataFromCollectionSlug } from 'payload';

import type { PostArgs } from './post-1';

// Ukrainian version
export const post5: (args: PostArgs) => RequiredDataFromCollectionSlug<'posts'> = ({
  heroImage,
  blockImage,
  author,
}) => {
  return {
    slug: 'sustainable-agriculture-practices',
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
                text: 'Сталий розвиток в сільському господарстві: наш внесок у збереження довкілля та родючості ґрунтів.',
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
            type: 'block',
            fields: {
              blockName: 'Екологічна відповідальність',
              blockType: 'banner',
              content: {
                root: {
                  type: 'root',
                  children: [
                    {
                      type: 'paragraph',
                      children: [
                        {
                          type: 'text',
                          detail: 0,
                          format: 1,
                          mode: 'normal',
                          style: '',
                          text: 'Зелені технології:',
                          version: 1,
                        },
                        {
                          type: 'text',
                          detail: 0,
                          format: 0,
                          mode: 'normal',
                          style: '',
                          text: ' 30% наших полів обробляється за технологією No-Till, що зберігає органічну речовину ґрунту та зменшує ерозію на 65%.',
                          version: 1,
                        },
                      ],
                      direction: 'ltr',
                      format: '',
                      indent: 0,
                      textFormat: 0,
                      version: 1,
                    },
                  ],
                  direction: 'ltr',
                  format: '',
                  indent: 0,
                  version: 1,
                },
              },
              style: 'success',
            },
            format: '',
            version: 2,
          },
          {
            type: 'heading',
            children: [
              {
                type: 'text',
                detail: 0,
                format: 0,
                mode: 'normal',
                style: '',
                text: 'Збереження родючості ґрунтів',
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
                text: 'Наша компанія активно впроваджує принципи сталого розвитку в аграрне виробництво. Ми використовуємо мінімальний обробіток ґрунту, що допомагає зберегти його структуру та біологічну активність.',
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
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                detail: 0,
                format: 0,
                mode: 'normal',
                style: '',
                text: 'Регулярне використання сидератів та дотримання науково обґрунтованих сівозмін дозволяє нам підтримувати та навіть покращувати родючість ґрунтів з кожним роком.',
                version: 1,
              },
            ],
            direction: 'ltr',
            format: '',
            indent: 0,
            textFormat: 0,
            version: 1,
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
      'Екологічна відповідальність - основа нашої діяльності. Впровадження No-Till технологій, органічні добрива, збереження біорізноманіття та зменшення викидів CO₂ на 30%. Дізнайтеся, як ми будуємо сталий агробізнес для майбутніх поколінь.',
    meta: {
      description:
        'Сталий розвиток в агросекторі: No-Till технології, збереження родючості ґрунтів та екологічна відповідальність.',
      image: heroImage.id,
      title: 'Сталий розвиток в сільському господарстві',
    },
    relatedPosts: [],
    title: 'Сталий розвиток в сільському господарстві',
  };
};

// English version
export const post5_en: (args: PostArgs) => RequiredDataFromCollectionSlug<'posts'> = ({
  heroImage,
  blockImage,
  author,
}) => {
  return {
    slug: 'sustainable-agriculture-practices',
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
                text: 'Sustainable Development in Agriculture: Our Contribution to Environmental Conservation and Soil Fertility Preservation.',
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
            type: 'block',
            fields: {
              blockName: 'Environmental Responsibility',
              blockType: 'banner',
              content: {
                root: {
                  type: 'root',
                  children: [
                    {
                      type: 'paragraph',
                      children: [
                        {
                          type: 'text',
                          detail: 0,
                          format: 1,
                          mode: 'normal',
                          style: '',
                          text: 'Green Technologies:',
                          version: 1,
                        },
                        {
                          type: 'text',
                          detail: 0,
                          format: 0,
                          mode: 'normal',
                          style: '',
                          text: ' 30% of our fields are managed using No-Till technology, which preserves soil organic matter and reduces erosion by 65%.',
                          version: 1,
                        },
                      ],
                      direction: 'ltr',
                      format: '',
                      indent: 0,
                      textFormat: 0,
                      version: 1,
                    },
                  ],
                  direction: 'ltr',
                  format: '',
                  indent: 0,
                  version: 1,
                },
              },
              style: 'success',
            },
            format: '',
            version: 2,
          },
          {
            type: 'heading',
            children: [
              {
                type: 'text',
                detail: 0,
                format: 0,
                mode: 'normal',
                style: '',
                text: 'Soil Fertility Preservation',
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
                text: 'Our company actively implements sustainable development principles in agricultural production. We use minimal soil cultivation, which helps preserve its structure and biological activity.',
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
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                detail: 0,
                format: 0,
                mode: 'normal',
                style: '',
                text: 'Regular use of cover crops and adherence to scientifically-based crop rotations allows us to maintain and even improve soil fertility year after year.',
                version: 1,
              },
            ],
            direction: 'ltr',
            format: '',
            indent: 0,
            textFormat: 0,
            version: 1,
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
      'Environmental responsibility is the foundation of our activities. Implementation of No-Till technologies, organic fertilizers, biodiversity conservation, and 30% reduction in CO₂ emissions. Learn how we build sustainable agribusiness for future generations.',
    meta: {
      description:
        'Sustainable development in the agricultural sector: No-Till technologies, soil fertility preservation, and environmental responsibility.',
      image: heroImage.id,
      title: 'Sustainable Development in Agriculture',
    },
    relatedPosts: [],
    title: 'Sustainable Development in Agriculture',
  };
};
