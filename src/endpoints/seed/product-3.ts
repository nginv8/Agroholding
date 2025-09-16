import { RequiredDataFromCollectionSlug } from 'payload';

import type { ProductArgs } from './product-1';

export const product3: (args: ProductArgs) => RequiredDataFromCollectionSlug<'products'> = ({
  heroImage1,
  heroImage2,
  heroImage3,
  heroImage4,
  heroImage5,
  blockImage,
  author,
}) => {
  return {
    slug: 'hybrid-corn-seeds',
    _status: 'published',
    slugLock: false,
    authors: [author],
    shortDescription:
      'Гібридне насіння кукурудзи власної селекції з високою врожайністю та стійкістю до несприятливих умов.',
    itemCode: 'SEED-HYB-003',
    price: 'За запитом',
    availability: 'pre_order' as const,
    ratingEnabled: true,
    rating: 4,
    reviewsCount: 15,
    features: [
      { feature: 'Врожайність до 12 т/га' },
      { feature: 'Стійкість до посухи' },
      { feature: 'Холодостійкість' },
      { feature: 'Німа селекція' },
      { feature: '100% схожість' },
    ],
    images: [
      { image: heroImage1.id },
      { image: heroImage2.id },
      { image: heroImage3.id },
      { image: heroImage4.id },
      { image: heroImage5.id },
    ],
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
                text: 'Насіння кукурудзи гібридне - власна селекція з високою врожайністю та стійкістю.',
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
                text: 'Наше власне насіння кукурудзи створене в науково-дослідному центрі компанії. Гібриди адаптовані до українських умов та забезпечують врожайність до 12 т/га.',
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
            fields: { blockName: '', blockType: 'mediaBlock', media: blockImage.id },
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
    heroImage: heroImage1.id,
    meta: {
      description:
        'Гібридне насіння кукурудзи власної селекції з високою врожайністю та адаптацією до місцевих умов.',
      image: heroImage1.id,
      title: 'Насіння кукурудзи гібридне',
    },
    relatedPosts: [],
    title: 'Насіння кукурудзи гібридне',
    specifications: [
      { name: 'Схожість', value: 'не менше 95%' },
      { name: 'Чистота', value: '99.8%' },
      { name: 'Вологість', value: 'не більше 12%' },
    ],
    benefits: [
      {
        icon: 'LuSprout',
        title: 'Власна селекція',
        description: 'Створено в нашому науковому центрі',
      },
      {
        icon: 'LuTrendingUp',
        title: 'Висока врожайність',
        description: 'До 12 т/га за оптимальних умов',
      },
      { icon: 'LuShield', title: 'Стійкість', description: 'До основних хвороб та шкідників' },
    ],
  };
};

export const product3_en: (args: ProductArgs) => RequiredDataFromCollectionSlug<'products'> = ({
  heroImage1,
  heroImage2,
  heroImage3,
  heroImage4,
  heroImage5,
  blockImage,
  author,
}) => {
  return {
    slug: 'hybrid-corn-seeds',
    _status: 'published',
    slugLock: false,
    authors: [author],
    shortDescription:
      'Hybrid corn seeds of our own selection with high yield and resistance to adverse conditions.',
    itemCode: 'SEED-HYB-003',
    price: 'On request',
    availability: 'pre_order' as const,
    ratingEnabled: true,
    rating: 4,
    reviewsCount: 15,
    features: [
      { feature: 'Yield up to 12 t/ha' },
      { feature: 'Drought resistant' },
      { feature: 'Cold tolerant' },
      { feature: 'Own selection' },
      { feature: '100% germination' },
    ],
    images: [
      { image: heroImage1.id },
      { image: heroImage2.id },
      { image: heroImage3.id },
      { image: heroImage4.id },
      { image: heroImage5.id },
    ],
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
                text: 'Hybrid Corn Seeds - Own Selection with High Yield and Resistance.',
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
                text: "Our own corn seeds were created in the company's research and development center. The hybrids are adapted to Ukrainian conditions and provide yields of up to 12 t/ha.",
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
            fields: { blockName: '', blockType: 'mediaBlock', media: blockImage.id },
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
    heroImage: heroImage1.id,
    meta: {
      description:
        'Hybrid corn seeds of our own selection with high yield and adaptation to local conditions.',
      image: heroImage1.id,
      title: 'Hybrid Corn Seeds',
    },
    relatedPosts: [],
    title: 'Hybrid Corn Seeds',
    specifications: [
      { name: 'Germination', value: 'not less than 95%' },
      { name: 'Purity', value: '99.8%' },
      { name: 'Moisture', value: 'not more than 12%' },
    ],
    benefits: [
      {
        icon: 'LuSprout',
        title: 'Own Selection',
        description: 'Created in our research center',
      },
      {
        icon: 'LuTrendingUp',
        title: 'High Yield',
        description: 'Up to 12 t/ha under optimal conditions',
      },
      { icon: 'LuShield', title: 'Resistance', description: 'To major diseases and pests' },
    ],
  };
};
