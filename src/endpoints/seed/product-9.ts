import { RequiredDataFromCollectionSlug } from 'payload';

import type { ProductArgs } from './product-1';

export const product9: (args: ProductArgs) => RequiredDataFromCollectionSlug<'products'> = ({
  heroImage1,
  heroImage2,
  heroImage3,
  heroImage4,
  heroImage5,
  blockImage,
  pdfDoc,
  author,
}) => ({
  slug: 'corn-biomass-fuel',
  slugLock: false,
  _status: 'published',
  authors: [author],
  shortDescription:
    'Кукурудзяна біомаса для виробництва пелет, брикетів та біопалива - екологічно чисте джерело енергії.',
  itemCode: 'CORN-BIO-009',
  price: '80-120 USD/т',
  availability: 'in_stock' as const,
  ratingEnabled: true,
  rating: 4,
  reviewsCount: 35,
  features: [
    { feature: 'Вологість не більше 20%' },
    { feature: 'Зольність не більше 5%' },
    { feature: 'Відновлюване джерело' },
    { feature: 'Низькі викиди CO2' },
    { feature: 'Висока калорійність' },
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
              text: 'Кукурудзяна біомаса для виробництва пелет та біопалива.',
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
              text: 'Відходи переробки кукурудзи використовуються для виробництва екологічно чистого біопалива.',
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
    description: 'Біомаса з кукурудзи для виробництва екологічно чистого палива та пелет.',
    image: heroImage1.id,
    title: 'Кукурудзяна біомаса',
  },
  relatedPosts: [],
  title: 'Кукурудзяна біомаса',
  fullDescription: {
    root: {
      type: 'root',
      children: [
        {
          type: 'heading',
          children: [
            {
              type: 'text',
              text: 'Екологічно чисте біопаливо з кукурудзи',
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
              text: 'Кукурудзяна біомаса - це продукт переробки стебел, листя та стрижнів кукурудзи. Це екологічно чисте та відновлюване джерело енергії, яке сприяє зменшенню викидів вуглецю в атмосферу.',
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
    { name: 'Вологість', value: 'не більше 20%' },
    { name: 'Зольність', value: 'не більше 5%' },
    { name: 'Калорійність', value: '16-18 МДж/кг' },
    { name: 'Попел', value: '3-5%' },
    { name: 'Целюлоза', value: '35-45%' },
    { name: 'Лігнін', value: '15-20%' },
  ],
  additionalSpecifications: [
    {
      icon: 'LuLeaf',
      name: 'Екологічність',
      description: 'На 100% відновлюване джерело енергії, нейтральний вуглецевий слід',
    },
    {
      icon: 'LuZap',
      name: 'Висока енергоцінність',
      description: 'Калорійність 16-18 МДж/кг забезпечує ефективне спалювання',
    },
    {
      icon: 'LuRecycle',
      name: 'Переробка відходів',
      description: 'Використовуються відходи виробництва, що зменшує навантаження на довкілля',
    },
    {
      icon: 'LuFactory',
      name: 'Промислове використання',
      description: 'Придатна для виробництва пелет, брикетів та прямого спалювання',
    },
  ],
  documents: [
    {
      name: 'Аналіз енергетичної цінності',
      file: pdfDoc.id,
      type: 'PDF' as const,
    },
    {
      name: 'Сертифікат біопалива',
      file: pdfDoc.id,
      type: 'PDF' as const,
    },
    {
      name: 'Екологічний паспорт продукту',
      file: pdfDoc.id,
      type: 'PDF' as const,
    },
    {
      name: 'Технологія спалювання',
      file: pdfDoc.id,
      type: 'PDF' as const,
    },
  ],
  benefits: [
    {
      icon: 'LuLeaf',
      title: 'Екологічно чисте',
      description: 'Нульовий вуглецевий слід, мінімальні шкідливі викиди',
    },
    {
      icon: 'LuDollarSign',
      title: 'Економічно',
      description: 'Низька собівартість порівняно з традиційними видами палива',
    },
    {
      icon: 'LuZap',
      title: 'Висока ефективність',
      description: 'Оптимальне співвідношення енергії до обсягу',
    },
  ],
});

export const product9_en: (args: ProductArgs) => RequiredDataFromCollectionSlug<'products'> = ({
  heroImage1,
  heroImage2,
  heroImage3,
  heroImage4,
  heroImage5,
  blockImage,
  pdfDoc,
  author,
}) => ({
  slug: 'corn-biomass-fuel',
  slugLock: false,
  _status: 'published',
  authors: [author],
  shortDescription:
    'Corn biomass for the production of pellets, briquettes, and biofuel - an environmentally friendly energy source.',
  itemCode: 'CORN-BIO-009',
  price: '$80-120 USD/t',
  availability: 'in_stock' as const,
  ratingEnabled: true,
  rating: 4,
  reviewsCount: 35,
  features: [
    { feature: 'Moisture no more than 20%' },
    { feature: 'Ash content no more than 5%' },
    { feature: 'Renewable source' },
    { feature: 'Low CO2 emissions' },
    { feature: 'High calorific value' },
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
              text: 'Corn biomass for the production of pellets and biofuel.',
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
              text: 'Corn processing waste is used to produce environmentally friendly biofuel.',
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
    description: 'Biomass from corn for the production of eco-friendly fuel and pellets.',
    image: heroImage1.id,
    title: 'Corn Biomass',
  },
  relatedPosts: [],
  title: 'Corn Biomass',
  fullDescription: {
    root: {
      type: 'root',
      children: [
        {
          type: 'heading',
          children: [
            {
              type: 'text',
              text: 'Eco-Friendly Biofuel from Corn',
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
              text: 'Corn biomass is a product of processing corn stalks, leaves, and cobs. It is an environmentally friendly and renewable energy source that helps reduce carbon emissions into the atmosphere.',
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
    { name: 'Moisture', value: 'no more than 20%' },
    { name: 'Ash Content', value: 'no more than 5%' },
    { name: 'Calorific Value', value: '16-18 MJ/kg' },
    { name: 'Ash', value: '3-5%' },
    { name: 'Cellulose', value: '35-45%' },
    { name: 'Lignin', value: '15-20%' },
  ],
  additionalSpecifications: [
    {
      icon: 'LuLeaf',
      name: 'Eco-Friendly',
      description: '100% renewable energy source, carbon neutral',
    },
    {
      icon: 'LuZap',
      name: 'High Energy Value',
      description: 'Calorific value of 16-18 MJ/kg ensures efficient combustion',
    },
    {
      icon: 'LuRecycle',
      name: 'Waste Recycling',
      description: 'Uses production waste, reducing environmental impact',
    },
    {
      icon: 'LuFactory',
      name: 'Industrial Use',
      description: 'Suitable for producing pellets, briquettes, and direct combustion',
    },
  ],
  documents: [
    {
      name: 'Energy Value Analysis',
      file: pdfDoc.id,
      type: 'PDF' as const,
    },
    {
      name: 'Biofuel Certificate',
      file: pdfDoc.id,
      type: 'PDF' as const,
    },
    {
      name: 'Product Environmental Passport',
      file: pdfDoc.id,
      type: 'PDF' as const,
    },
    {
      name: 'Combustion Technology',
      file: pdfDoc.id,
      type: 'PDF' as const,
    },
  ],
  benefits: [
    {
      icon: 'LuLeaf',
      title: 'Eco-Friendly',
      description: 'Zero carbon footprint, minimal harmful emissions',
    },
    {
      icon: 'LuDollarSign',
      title: 'Economical',
      description: 'Low cost compared to traditional fuels',
    },
    {
      icon: 'LuZap',
      title: 'High Efficiency',
      description: 'Optimal energy-to-volume ratio',
    },
  ],
});
