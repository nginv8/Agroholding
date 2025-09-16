import { RequiredDataFromCollectionSlug } from 'payload';

import type { ProductArgs } from './product-1';

export const product7: (args: ProductArgs) => RequiredDataFromCollectionSlug<'products'> = ({
  heroImage1,
  heroImage2,
  heroImage3,
  heroImage4,
  heroImage5,
  blockImage,
  pdfDoc,
  author,
}) => ({
  slug: 'specialty-popcorn-corn',
  slugLock: false,
  _status: 'published',
  authors: [author],
  shortDescription:
    'Кукурудза для попкорну - спеціальний сорт з високою здатністю до розкриття та ідеальним смаком.',
  itemCode: 'CORN-POP-007',
  price: '400-450 USD/т',
  availability: 'in_stock' as const,
  ratingEnabled: true,
  rating: 5,
  reviewsCount: 8,
  features: [
    { feature: 'Коефіцієнт розкриття 1:40' },
    { feature: 'Оптимальна вологість 13.5-14%' },
    { feature: 'Рівномірне розкриття' },
    { feature: 'Золотистий колір' },
    { feature: 'Приємний смак' },
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
              text: 'Кукурудза для попкорну - спеціальний сорт з високою здатністю до розкриття.',
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
              text: 'Спеціальний сорт кукурудзи для виробництва попкорну з коефіцієнтом розкриття 1:40.',
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
    description: 'Спеціальна кукурудза для попкорну з високим коефіцієнтом розкриття.',
    image: heroImage1.id,
    title: 'Кукурудза для попкорну',
  },
  relatedPosts: [],
  title: 'Кукурудза для попкорну',
  fullDescription: {
    root: {
      type: 'root',
      children: [
        {
          type: 'heading',
          children: [
            {
              type: 'text',
              text: 'Спеціальна кукурудза для виробництва попкорну',
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
              text: 'Наша попкорнова кукурудза - це унікальний сорт з винятковими властивостями розкриття. Коефіцієнт розкриття 1:40 забезпечує максимальний вихід продукції та чудовий смак.',
              version: 1,
            },
          ],
          direction: 'ltr',
          format: '',
          indent: 0,
          version: 1,
        },
      ],
      direction: 'ltr',
      format: '',
      indent: 0,
      version: 1,
    },
  },
  specifications: [
    { name: 'Коефіцієнт розкриття', value: '1:40' },
    { name: 'Вологість', value: '13.5-14%' },
    { name: 'Розмір ядра', value: 'середній (6-8мм)' },
    { name: 'Колір', value: 'золотисто-жовтий' },
    { name: 'Оболонка', value: 'тонка, легко розкривається' },
    { name: 'Смак', value: 'нейтральний, приємний' },
  ],
  additionalSpecifications: [
    {
      icon: 'LuZap',
      name: 'Максимальне розкриття',
      description: 'Гарантований коефіцієнт розкриття 1:40 для максимального виходу',
    },
    {
      icon: 'LuDroplets',
      name: 'Оптимальна вологість',
      description: 'Прецизійно контрольований вміст вологи 13.5-14% для ідеального попінгу',
    },
    {
      icon: 'LuEye',
      name: 'Рівномірність',
      description: 'Однорідний розмір та форма ядер для рівномірного розкриття',
    },
    {
      icon: 'LuCookie',
      name: 'Смакові якості',
      description: 'Нейтральний смак ідеально підходить для різних посыпок',
    },
  ],
  documents: [
    {
      name: 'Специфікація попкорнової кукурудзи',
      file: pdfDoc.id,
      type: 'PDF' as const,
    },
    {
      name: 'Протокол тестування розкриття',
      file: pdfDoc.id,
      type: 'PDF' as const,
    },
    {
      name: 'Рекомендації по приготуванню',
      file: pdfDoc.id,
      type: 'PDF' as const,
    },
    {
      name: 'Сертифікат харчової безпеки',
      file: pdfDoc.id,
      type: 'PDF' as const,
    },
  ],
  benefits: [
    {
      icon: 'LuZap',
      title: 'Високе розкриття',
      description: 'Коефіцієнт 1:40 забезпечує максимальний вихід попкорну',
    },
    {
      icon: 'LuStar',
      title: 'Преміум якість',
      description: 'Отримано з спеціально відібраних гібридів для попкорну',
    },
    {
      icon: 'LuCookie',
      title: 'Приємний смак',
      description: 'Нейтральний смак ідеально поєднується з будь-якими приправами',
    },
  ],
});

export const product7_en: (args: ProductArgs) => RequiredDataFromCollectionSlug<'products'> = ({
  heroImage1,
  heroImage2,
  heroImage3,
  heroImage4,
  heroImage5,
  blockImage,
  pdfDoc,
  author,
}) => ({
  slug: 'specialty-popcorn-corn',
  slugLock: false,
  _status: 'published',
  authors: [author],
  shortDescription: 'Popcorn corn - a special variety with high expansion ability and ideal taste.',
  itemCode: 'CORN-POP-007',
  price: '$400-450 USD/t',
  availability: 'in_stock' as const,
  ratingEnabled: true,
  rating: 5,
  reviewsCount: 8,
  features: [
    { feature: 'Expansion ratio 1:40' },
    { feature: 'Optimal moisture 13.5-14%' },
    { feature: 'Uniform popping' },
    { feature: 'Golden color' },
    { feature: 'Pleasant taste' },
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
              text: 'Popcorn corn - a special variety with a high expansion rate.',
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
              text: 'A special variety of corn for popcorn production with an expansion ratio of 1:40.',
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
    description: 'Specialty corn for popcorn with a high expansion ratio.',
    image: heroImage1.id,
    title: 'Popcorn Corn',
  },
  relatedPosts: [],
  title: 'Popcorn Corn',
  fullDescription: {
    root: {
      type: 'root',
      children: [
        {
          type: 'heading',
          children: [
            {
              type: 'text',
              text: 'Specialty Corn for Popcorn Production',
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
              text: 'Our popcorn corn is a unique variety with exceptional popping properties. An expansion ratio of 1:40 ensures maximum product yield and excellent taste.',
              version: 1,
            },
          ],
          direction: 'ltr',
          format: '',
          indent: 0,
          version: 1,
        },
      ],
      direction: 'ltr',
      format: '',
      indent: 0,
      version: 1,
    },
  },
  specifications: [
    { name: 'Expansion Ratio', value: '1:40' },
    { name: 'Moisture', value: '13.5-14%' },
    { name: 'Kernel Size', value: 'medium (6-8mm)' },
    { name: 'Color', value: 'golden-yellow' },
    { name: 'Hull', value: 'thin, pops easily' },
    { name: 'Taste', value: 'neutral, pleasant' },
  ],
  additionalSpecifications: [
    {
      icon: 'LuZap',
      name: 'Maximum Expansion',
      description: 'Guaranteed 1:40 expansion ratio for maximum yield',
    },
    {
      icon: 'LuDroplets',
      name: 'Optimal Moisture',
      description: 'Precisely controlled moisture content of 13.5-14% for perfect popping',
    },
    {
      icon: 'LuEye',
      name: 'Uniformity',
      description: 'Consistent kernel size and shape for even popping',
    },
    {
      icon: 'LuCookie',
      name: 'Taste Qualities',
      description: 'Neutral taste is ideal for various toppings',
    },
  ],
  documents: [
    {
      name: 'Popcorn Corn Specification',
      file: pdfDoc.id,
      type: 'PDF' as const,
    },
    {
      name: 'Expansion Test Protocol',
      file: pdfDoc.id,
      type: 'PDF' as const,
    },
    {
      name: 'Preparation Recommendations',
      file: pdfDoc.id,
      type: 'PDF' as const,
    },
    {
      name: 'Food Safety Certificate',
      file: pdfDoc.id,
      type: 'PDF' as const,
    },
  ],
  benefits: [
    {
      icon: 'LuZap',
      title: 'High Expansion',
      description: 'A 1:40 ratio ensures maximum popcorn yield',
    },
    {
      icon: 'LuStar',
      title: 'Premium Quality',
      description: 'Sourced from specially selected popcorn hybrids',
    },
    {
      icon: 'LuCookie',
      title: 'Pleasant Taste',
      description: 'Neutral flavor pairs perfectly with any seasoning',
    },
  ],
});
