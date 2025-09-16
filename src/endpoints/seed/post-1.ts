import { RequiredDataFromCollectionSlug } from 'payload';

import type { Media, User } from '@/payload-types';

export type PostArgs = {
  heroImage: Media;
  blockImage: Media;
  author: User;
};

// Ukrainian version
export const post1: (args: PostArgs) => RequiredDataFromCollectionSlug<'posts'> = ({
  heroImage,
  blockImage,
  author,
}) => {
  return {
    slug: 'modern-corn-technologies',
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
                text: 'Сучасні технології вирощування кукурудзи відкривають нові можливості для підвищення врожайності та якості продукції.',
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
              blockName: 'Важливо',
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
                          text: 'Увага:',
                          version: 1,
                        },
                        {
                          type: 'text',
                          detail: 0,
                          format: 0,
                          mode: 'normal',
                          style: '',
                          text: ' Наш агрохолдинг використовує лише екологічно чисті технології та сертифіковане насіння. Всі методи вирощування відповідають найвищим міжнародним стандартам якості.',
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
                text: 'Точне землеробство та GPS-технології',
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
                text: 'Сучасні технології точного землеробства революціонізують спосіб вирощування кукурудзи. Використання GPS-навігації дозволяє нам точно контролювати кожен гектар поля, забезпечуючи оптимальне внесення добрив та засобів захисту рослин. Це не лише підвищує врожайність, але й значно зменшує екологічний вплив на навколишнє середовище.',
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
            type: 'heading',
            children: [
              {
                type: 'text',
                detail: 0,
                format: 0,
                mode: 'normal',
                style: '',
                text: 'Моніторинг полів за допомогою дронів',
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
                text: 'Використання безпілотних літальних апаратів (дронів) дозволяє нам здійснювати регулярний моніторинг стану посівів. Високоточні камери та сенсори виявляють ранні ознаки захворювань, шкідників або проблем з поживністю ґрунту ще до того, як вони стануть помітними неозброєним оком.',
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
            type: 'heading',
            children: [
              {
                type: 'text',
                detail: 0,
                format: 0,
                mode: 'normal',
                style: '',
                text: 'Селекція та гібриди нового покоління',
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
                text: 'Селекційна робота є основою успішного вирощування кукурудзи. Ми співпрацюємо з провідними селекційними центрами світу для створення гібридів, адаптованих до українських кліматичних умов. Наші гібриди характеризуються високою врожайністю, стійкістю до посухи та основних захворювань.',
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
            type: 'paragraph',
            children: [
              {
                type: 'text',
                detail: 0,
                format: 0,
                mode: 'normal',
                style: '',
                text: 'Кожен новий гібрид проходить багаторічні випробування в різних ґрунтово-кліматичних зонах України. Це дозволяє нам гарантувати фермерам стабільно високі врожаї незалежно від погодних умов сезону.',
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
            type: 'block',
            fields: {
              blockName: 'Майбутнє сільського господарства',
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
                          text: 'Інноваційні технології та сучасні методи вирощування кукурудзи - це не просто тренд, а необхідність для забезпечення продовольчої безпеки майбутнього. Ми вкладаємо в розвиток нових технологій, щоб залишатися лідерами галузі.',
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
              style: 'info',
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
      'Відкрийте для себе передові методи вирощування кукурудзи: від GPS-навігації та дронового моніторингу до селекції гібридів нового покоління. Наш досвід показує, як сучасні технології підвищують врожайність та зменшують екологічний вплив.',
    meta: {
      description:
        'Сучасні технології вирощування кукурудзи: від точного землеробства до селекції нового покоління. Дізнайтеся про інноваційні методи підвищення врожайності.',
      image: heroImage.id,
      title: 'Сучасні технології вирощування кукурудзи',
    },
    relatedPosts: [], // this is populated by the seed script
    title: 'Сучасні технології вирощування кукурудзи',
  };
};

// English version
export const post1_en: (args: PostArgs) => RequiredDataFromCollectionSlug<'posts'> = ({
  heroImage,
  blockImage,
  author,
}) => {
  return {
    slug: 'modern-corn-technologies',
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
                text: 'Modern corn growing technologies open up new opportunities for increasing yield and product quality.',
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
              blockName: 'Important',
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
                          text: 'Attention:',
                          version: 1,
                        },
                        {
                          type: 'text',
                          detail: 0,
                          format: 0,
                          mode: 'normal',
                          style: '',
                          text: ' Our agricultural holding uses only environmentally friendly technologies and certified seeds. All growing methods comply with the highest international quality standards.',
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
                text: 'Precision Agriculture and GPS Technologies',
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
                text: 'Modern precision agriculture technologies are revolutionizing the way corn is grown. The use of GPS navigation allows us to precisely control every hectare of field, ensuring optimal application of fertilizers and plant protection products. This not only increases yields, but also significantly reduces environmental impact.',
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
            type: 'heading',
            children: [
              {
                type: 'text',
                detail: 0,
                format: 0,
                mode: 'normal',
                style: '',
                text: 'Field Monitoring with Drones',
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
                text: 'The use of unmanned aerial vehicles (drones) allows us to conduct regular monitoring of crop conditions. High-precision cameras and sensors detect early signs of diseases, pests or soil nutrition problems before they become visible to the naked eye.',
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
            type: 'heading',
            children: [
              {
                type: 'text',
                detail: 0,
                format: 0,
                mode: 'normal',
                style: '',
                text: 'Breeding and Next-Generation Hybrids',
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
                text: 'Breeding work is the foundation of successful corn cultivation. We collaborate with leading breeding centers around the world to create hybrids adapted to Ukrainian climatic conditions. Our hybrids are characterized by high yield, drought tolerance and resistance to major diseases.',
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
            type: 'paragraph',
            children: [
              {
                type: 'text',
                detail: 0,
                format: 0,
                mode: 'normal',
                style: '',
                text: 'Each new hybrid undergoes multi-year trials in different soil and climate zones of Ukraine. This allows us to guarantee farmers consistently high yields regardless of the weather conditions of the season.',
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
            type: 'block',
            fields: {
              blockName: 'The Future of Agriculture',
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
                          text: 'Innovative technologies and modern corn growing methods are not just a trend, but a necessity to ensure future food security. We invest in the development of new technologies to remain industry leaders.',
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
              style: 'info',
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
      'Discover advanced corn growing methods: from GPS navigation and drone monitoring to next-generation hybrid breeding. Our experience shows how modern technologies increase yields and reduce environmental impact.',
    meta: {
      description:
        'Modern corn growing technologies: from precision agriculture to next-generation breeding. Learn about innovative methods to increase productivity.',
      image: heroImage.id,
      title: 'Modern Corn Growing Technologies',
    },
    relatedPosts: [], // this is populated by the seed script
    title: 'Modern Corn Growing Technologies',
  };
};
