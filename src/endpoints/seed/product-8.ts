import { RequiredDataFromCollectionSlug } from 'payload';

import type { ProductArgs } from './product-1';

export const product8: (args: ProductArgs) => RequiredDataFromCollectionSlug<'products'> = ({
  heroImage1,
  heroImage2,
  heroImage3,
  heroImage4,
  heroImage5,
  blockImage,
  pdfDoc,
  author,
}) => ({
  slug: 'fresh-sweet-corn',
  slugLock: false,
  _status: 'published',
  authors: [author],
  shortDescription:
    'Цукрова кукурудза свіжа - солодкі качани для харчової промисловості з високим вмістом цукру.',
  itemCode: 'CORN-SWEET-008',
  price: '350-400 USD/т',
  availability: 'in_stock' as const,
  ratingEnabled: true,
  rating: 5,
  reviewsCount: 25,
  features: [
    { feature: 'Вміст цукрів від 12%' },
    { feature: 'Розмір качана 18-22 см' },
    { feature: 'Ніжні ядра' },
    { feature: 'Свіжість до 3-5 днів' },
    { feature: 'Придатність для заморожування' },
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
              text: 'Кукурудза цукрова свіжа - солодкі качани для харчової промисловості.',
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
              text: 'Свіжа цукрова кукурудза для консервування та заморожування з підвищеним вмістом цукру.',
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
    description: 'Цукрова кукурудза для харчової промисловості з високим вмістом цукру.',
    image: heroImage1.id,
    title: 'Кукурудза цукрова',
  },
  relatedPosts: [],
  title: 'Кукурудза цукрова',
  fullDescription: {
    root: {
      type: 'root',
      children: [
        {
          type: 'heading',
          children: [
            {
              type: 'text',
              text: 'Свіжа цукрова кукурудза для харчової промисловості',
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
              text: 'Наша цукрова кукурудза - це спеціально відібрані гібриди з підвищеним вмістом цукру для консервної промисловості. Солодкі, ніжні ядра ідеально підходять для заморожування та консервування.',
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
    { name: 'Вміст цукрів', value: 'від 12%' },
    { name: 'Розмір качана', value: '18-22 см' },
    { name: 'Кількість рядків', value: '14-16' },
    { name: 'Маса качана', value: '250-400 г' },
    { name: 'Колір ядер', value: 'яскраво-жовтий' },
    { name: 'Вологість', value: '70-75%' },
  ],
  additionalSpecifications: [
    {
      icon: 'LuCandy',
      name: 'Високий вміст цукрів',
      description: 'Природні цукри понад 12% забезпечують низький глікемічний індекс',
    },
    {
      icon: 'LuClock',
      name: 'Свіжість',
      description: 'Короткий термін зберігання 3-5 днів при +4°C, потребує швидкої переробки',
    },
    {
      icon: 'LuSnowflake',
      name: 'Придатність для заморожування',
      description: 'Зберігає структуру та смак після шокового заморожування',
    },
    {
      icon: 'LuPackage',
      name: 'Консервація',
      description: 'Оптимальний розмір ядер та текстура для продукції консервної промисловості',
    },
  ],
  documents: [
    {
      name: 'Специфікація цукрової кукурудзи',
      file: pdfDoc.id,
      type: 'PDF' as const,
    },
    {
      name: 'Протокол аналізу цукрів',
      file: pdfDoc.id,
      type: 'PDF' as const,
    },
    {
      name: 'Рекомендації по зберіганню',
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
      icon: 'LuCandy',
      title: 'Натуральна солодоща',
      description: 'Високий вміст природних цукрів понад 12%',
    },
    {
      icon: 'LuClock',
      title: 'Сезонність',
      description: 'Найсвіжіша продукція в сезон збирання',
    },
    {
      icon: 'LuPackage',
      title: 'Промислова переробка',
      description: 'Ідеальна для консервування та заморожування',
    },
  ],
});

export const product8_en: (args: ProductArgs) => RequiredDataFromCollectionSlug<'products'> = ({
  heroImage1,
  heroImage2,
  heroImage3,
  heroImage4,
  heroImage5,
  blockImage,
  pdfDoc,
  author,
}) => ({
  slug: 'fresh-sweet-corn',
  slugLock: false,
  _status: 'published',
  authors: [author],
  shortDescription:
    'Fresh sweet corn - sweet cobs for the food industry with a high sugar content.',
  itemCode: 'CORN-SWEET-008',
  price: '$350-400 USD/t',
  availability: 'in_stock' as const,
  ratingEnabled: true,
  rating: 5,
  reviewsCount: 25,
  features: [
    { feature: 'Sugar content from 12%' },
    { feature: 'Cob size 18-22 cm' },
    { feature: 'Tender kernels' },
    { feature: 'Freshness up to 3-5 days' },
    { feature: 'Suitable for freezing' },
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
              text: 'Fresh Sweet Corn - sweet cobs for the food industry.',
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
              text: 'Fresh sweet corn for canning and freezing with a high sugar content.',
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
    description: 'Sweet corn for the food industry with a high sugar content.',
    image: heroImage1.id,
    title: 'Sweet Corn',
  },
  relatedPosts: [],
  title: 'Sweet Corn',
  fullDescription: {
    root: {
      type: 'root',
      children: [
        {
          type: 'heading',
          children: [
            {
              type: 'text',
              text: 'Fresh Sweet Corn for the Food Industry',
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
              text: 'Our sweet corn is a specially selected hybrid with increased sugar content for the canning industry. Sweet, tender kernels are ideal for freezing and canning.',
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
    { name: 'Sugar Content', value: 'from 12%' },
    { name: 'Cob Size', value: '18-22 cm' },
    { name: 'Row Count', value: '14-16' },
    { name: 'Cob Weight', value: '250-400 g' },
    { name: 'Kernel Color', value: 'bright yellow' },
    { name: 'Moisture', value: '70-75%' },
  ],
  additionalSpecifications: [
    {
      icon: 'LuCandy',
      name: 'High Sugar Content',
      description: 'Natural sugars over 12% provide a low glycemic index',
    },
    {
      icon: 'LuClock',
      name: 'Freshness',
      description: 'Short shelf life of 3-5 days at +4°C, requires quick processing',
    },
    {
      icon: 'LuSnowflake',
      name: 'Suitable for Freezing',
      description: 'Retains structure and taste after shock freezing',
    },
    {
      icon: 'LuPackage',
      name: 'Canning',
      description: 'Optimal kernel size and texture for canned products',
    },
  ],
  documents: [
    {
      name: 'Sweet Corn Specification',
      file: pdfDoc.id,
      type: 'PDF' as const,
    },
    {
      name: 'Sugar Analysis Protocol',
      file: pdfDoc.id,
      type: 'PDF' as const,
    },
    {
      name: 'Storage Recommendations',
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
      icon: 'LuCandy',
      title: 'Natural Sweetness',
      description: 'High natural sugar content of over 12%',
    },
    {
      icon: 'LuClock',
      title: 'Seasonality',
      description: 'The freshest product during the harvest season',
    },
    {
      icon: 'LuPackage',
      title: 'Industrial Processing',
      description: 'Ideal for canning and freezing',
    },
  ],
});
