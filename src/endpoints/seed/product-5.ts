import { RequiredDataFromCollectionSlug } from 'payload';

import type { ProductArgs } from './product-1';

export const product5: (args: ProductArgs) => RequiredDataFromCollectionSlug<'products'> = ({
  heroImage1,
  heroImage2,
  heroImage3,
  heroImage4,
  heroImage5,
  blockImage,
  pdfDoc,
  author,
}) => ({
  slug: 'industrial-grade-corn',
  slugLock: false,
  _status: 'published',
  authors: [author],
  shortDescription: 'Високоякісна кукурудза для різних промислових потреб та експорту.',
  itemCode: 'CORN-IND-005',
  price: '260-290 USD/т',
  availability: 'in_stock' as const,
  ratingEnabled: true,
  rating: 4,
  reviewsCount: 19,
  features: [
    { feature: 'Крохмаль від 72%' },
    { feature: 'Вологість не більше 14%' },
    { feature: 'Оптимальний для етанолу' },
    { feature: 'Висока переробність' },
    { feature: 'Сертифіковано для промисловості' },
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
              text: 'Кукурудза промислового призначення для виробництва етанолу та крохмалю.',
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
              text: 'Спеціальна кукурудза з підвищеним вмістом крохмалю для промислової переробки.',
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
    description: 'Промислова кукурудза з високим вмістом крохмалю для виробництва етанолу.',
    image: heroImage1.id,
    title: 'Кукурудза промислова',
  },
  relatedPosts: [],
  title: 'Кукурудза промислова',
  fullDescription: {
    root: {
      type: 'root',
      children: [
        {
          type: 'heading',
          children: [
            {
              type: 'text',
              text: 'Промислова кукурудза для переробної індустрії',
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
              text: 'Спеціальна кукурудза з підвищеним вмістом крохмалю для промислової переробки, виробництва етанолу, крохмалю та інших промислових продуктів.',
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
    { name: 'Крохмаль', value: 'від 72%' },
    { name: 'Вологість', value: 'не більше 14%' },
    { name: 'Білок', value: '7-8%' },
    { name: 'Жир', value: '3-4%' },
    { name: 'Зольність', value: 'не більше 1.2%' },
    { name: 'Афлатоксин В1', value: 'не більше 5 мкг/кг' },
  ],
  additionalSpecifications: [
    {
      icon: 'LuFlaskConical',
      name: 'Високий вміст крохмалю',
      description: 'Спеціально відібрані гібриди з максимальним вмістом крохмалю понад 72%',
    },
    {
      icon: 'LuFactory',
      name: 'Промислова переробка',
      description: 'Ідеально підходить для виробництва етанолу, крохмалю та декстрину',
    },
    {
      icon: 'LuShield',
      name: 'Якість і безпека',
      description: 'Строгий контроль мікотоксинів та відповідність промисловим стандартам',
    },
    {
      icon: 'LuTruck',
      name: 'Логістика',
      description: 'Поставки великими партіями автомобільним та залізничним транспортом',
    },
  ],
  documents: [
    {
      name: 'Технічні умови для промислової переробки',
      file: pdfDoc.id,
      type: 'PDF' as const,
    },
    {
      name: 'Сертифікат якості крохмалю',
      file: pdfDoc.id,
      type: 'PDF' as const,
    },
    {
      name: 'Протокол лабораторних досліджень',
      file: pdfDoc.id,
      type: 'PDF' as const,
    },
    {
      name: 'Договір на промислові поставки',
      file: pdfDoc.id,
      type: 'PDF' as const,
    },
  ],
  benefits: [
    {
      icon: 'LuFactory',
      title: 'Промислова якість',
      description: 'Високий вміст крохмалю понад 72% для максимальної переробності',
    },
    {
      icon: 'LuDroplets',
      title: 'Оптимальна вологість',
      description: 'Низька вологість забезпечує тривале зберігання без втрат',
    },
    {
      icon: 'LuAward',
      title: 'Сертифіковано',
      description: 'Відповідає всім стандартам для промислової переробки',
    },
  ],
});

export const product5_en: (args: ProductArgs) => RequiredDataFromCollectionSlug<'products'> = ({
  heroImage1,
  heroImage2,
  heroImage3,
  heroImage4,
  heroImage5,
  blockImage,
  pdfDoc,
  author,
}) => ({
  slug: 'industrial-grade-corn',
  slugLock: false,
  _status: 'published',
  authors: [author],
  shortDescription: 'High-quality corn for various industrial needs and export.',
  itemCode: 'CORN-IND-005',
  price: '$260-290 USD/t',
  availability: 'in_stock' as const,
  ratingEnabled: true,
  rating: 4,
  reviewsCount: 19,
  features: [
    { feature: 'Starch from 72%' },
    { feature: 'Moisture no more than 14%' },
    { feature: 'Optimal for ethanol' },
    { feature: 'High processability' },
    { feature: 'Certified for industry' },
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
              text: 'Industrial-grade corn for ethanol and starch production.',
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
              text: 'Special corn with high starch content for industrial processing.',
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
    description: 'Industrial corn with high starch content for ethanol production.',
    image: heroImage1.id,
    title: 'Industrial Corn',
  },
  relatedPosts: [],
  title: 'Industrial Corn',
  fullDescription: {
    root: {
      type: 'root',
      children: [
        {
          type: 'heading',
          children: [
            {
              type: 'text',
              text: 'Industrial Corn for the Processing Industry',
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
              text: 'Special corn with increased starch content for industrial processing, production of ethanol, starch, and other industrial products.',
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
    { name: 'Starch', value: 'from 72%' },
    { name: 'Moisture', value: 'no more than 14%' },
    { name: 'Protein', value: '7-8%' },
    { name: 'Fat', value: '3-4%' },
    { name: 'Ash', value: 'no more than 1.2%' },
    { name: 'Aflatoxin B1', value: 'no more than 5 μg/kg' },
  ],
  additionalSpecifications: [
    {
      icon: 'LuFlaskConical',
      name: 'High Starch Content',
      description: 'Specially selected hybrids with a maximum starch content of over 72%',
    },
    {
      icon: 'LuFactory',
      name: 'Industrial Processing',
      description: 'Ideal for the production of ethanol, starch, and dextrin',
    },
    {
      icon: 'LuShield',
      name: 'Quality and Safety',
      description: 'Strict control of mycotoxins and compliance with industrial standards',
    },
    {
      icon: 'LuTruck',
      name: 'Logistics',
      description: 'Large batch deliveries by road and rail transport',
    },
  ],
  documents: [
    {
      name: 'Technical Specifications for Industrial Processing',
      file: pdfDoc.id,
      type: 'PDF' as const,
    },
    {
      name: 'Starch Quality Certificate',
      file: pdfDoc.id,
      type: 'PDF' as const,
    },
    {
      name: 'Laboratory Test Protocol',
      file: pdfDoc.id,
      type: 'PDF' as const,
    },
    {
      name: 'Industrial Supply Agreement',
      file: pdfDoc.id,
      type: 'PDF' as const,
    },
  ],
  benefits: [
    {
      icon: 'LuFactory',
      title: 'Industrial Quality',
      description: 'High starch content over 72% for maximum processability',
    },
    {
      icon: 'LuDroplets',
      title: 'Optimal Moisture',
      description: 'Low moisture ensures long-term storage without loss',
    },
    {
      icon: 'LuAward',
      title: 'Certified',
      description: 'Meets all standards for industrial processing',
    },
  ],
});
