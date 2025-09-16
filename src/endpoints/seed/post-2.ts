import { RequiredDataFromCollectionSlug } from 'payload';

import type { PostArgs } from './post-1';

// Ukrainian version
export const post2: (args: PostArgs) => RequiredDataFromCollectionSlug<'posts'> = ({
  heroImage,
  blockImage,
  author,
}) => {
  return {
    slug: 'corn-export-markets',
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
                text: 'Україна на світових ринках кукурудзи: перспективи експорту та логістичні рішення для забезпечення стабільних поставок.',
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
              blockName: 'Ключова інформація',
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
                          text: 'Обсяги експорту:',
                          version: 1,
                        },
                        {
                          type: 'text',
                          detail: 0,
                          format: 0,
                          mode: 'normal',
                          style: '',
                          text: ' У 2023 році наш агрохолдинг експортував понад 500 тисяч тонн кукурудзи до країн ЄС, Азії та Близького Сходу.',
                          version: 1,
                        },
                      ],
                      direction: 'ltr',
                      format: '',
                      indent: 0,
                      textFormat: 1,
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
                text: 'Логістичні рішення та інфраструктура',
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
                text: 'Одним із ключових чинників успішного експорту сільськогосподарської продукції є надійна логістична мережа. Наша компанія інвестувала мільйони доларів у створення сучасних елеваторів, зерносховищ та ліній перевалки, що дозволяє нам оптимально обробляти та зберігати більше 500 тисяч тонн кукурудзи одночасно.',
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
            type: 'heading',
            children: [
              {
                type: 'text',
                detail: 0,
                format: 0,
                mode: 'normal',
                style: '',
                text: 'Міжнародні стандарти якості',
                version: 1,
              },
            ],
            direction: 'ltr',
            format: '',
            indent: 0,
            tag: 'h3',
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
                text: 'Кожен лот нашої продукції супроводжується міжнародними сертифікатами якості, що гарантує її відповідність найвищим світовим стандартам. Ми працюємо з провідними міжнародними лабораторіями та систематично проходимо аудит якості для підтримки нашої репутації надійного постачальника.',
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
              blockName: 'Перспективи розвитку',
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
                          format: 0,
                          mode: 'normal',
                          style: '',
                          text: 'Наша стратегія розвитку передбачає подальше розширення мережі елеваторів та інвестиції в портову інфраструктуру. Наша мета - стати одним із найбільших експортерів кукурудзи у регіоні до 2030 року.',
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
              style: 'warning',
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
      'Україна стрімко розвиває експортний потенціал на світових зернових ринках. Дізнайтеся, як наша сучасна логістична мережа, міжнародні сертифікати якості та стратегічні інвестиції забезпечують стабільні поставки понад 500 тисяч тонн кукурудзи щорічно.',
    meta: {
      description:
        'Перспективи експорту української кукурудзи: логістичні рішення, міжнародні стандарти якості та стратегічні партнерства.',
      image: heroImage.id,
      title: 'Перспективи експорту української кукурудзи',
    },
    relatedPosts: [], // this is populated by the seed script
    title: 'Перспективи експорту української кукурудзи',
  };
};

// English version
export const post2_en: (args: PostArgs) => RequiredDataFromCollectionSlug<'posts'> = ({
  heroImage,
  blockImage,
  author,
}) => {
  return {
    slug: 'corn-export-markets',
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
                text: 'Ukraine in Global Corn Markets: Export Prospects and Logistics Solutions for Stable Supply.',
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
              blockName: 'Key Information',
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
                          text: 'Export Volumes:',
                          version: 1,
                        },
                        {
                          type: 'text',
                          detail: 0,
                          format: 0,
                          mode: 'normal',
                          style: '',
                          text: ' In 2023, our agricultural holding exported over 500 thousand tons of corn to EU countries, Asia, and the Middle East.',
                          version: 1,
                        },
                      ],
                      direction: 'ltr',
                      format: '',
                      indent: 0,
                      textFormat: 1,
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
                text: 'Logistics Solutions and Infrastructure',
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
                text: 'One of the key factors for successful agricultural product exports is a reliable logistics network. Our company has invested millions of dollars in creating modern elevators, grain storage facilities, and transshipment lines, allowing us to optimally process and store more than 500 thousand tons of corn simultaneously.',
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
            type: 'heading',
            children: [
              {
                type: 'text',
                detail: 0,
                format: 0,
                mode: 'normal',
                style: '',
                text: 'International Quality Standards',
                version: 1,
              },
            ],
            direction: 'ltr',
            format: '',
            indent: 0,
            tag: 'h3',
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
                text: 'Each lot of our products is accompanied by international quality certificates, guaranteeing compliance with the highest global standards. We work with leading international laboratories and systematically undergo quality audits to maintain our reputation as a reliable supplier.',
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
              blockName: 'Development Prospects',
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
                          format: 0,
                          mode: 'normal',
                          style: '',
                          text: 'Our development strategy includes further expansion of the elevator network and investments in port infrastructure. Our goal is to become one of the largest corn exporters in the region by 2030.',
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
              style: 'warning',
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
      'Ukraine is rapidly developing its export potential in global grain markets. Learn how our modern logistics network, international quality certificates, and strategic investments ensure stable supplies of over 500 thousand tons of corn annually.',
    meta: {
      description:
        'Ukrainian corn export prospects: logistics solutions, international quality standards, and strategic partnerships.',
      image: heroImage.id,
      title: 'Ukrainian Corn Export Prospects',
    },
    relatedPosts: [], // this is populated by the seed script
    title: 'Ukrainian Corn Export Prospects',
  };
};
