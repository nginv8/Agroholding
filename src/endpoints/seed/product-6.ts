import { RequiredDataFromCollectionSlug } from 'payload';

import type { ProductArgs } from './product-1';

export const product6: (args: ProductArgs) => RequiredDataFromCollectionSlug<'products'> = ({
  heroImage1,
  heroImage2,
  heroImage3,
  heroImage4,
  heroImage5,
  blockImage,
  pdfDoc,
  author,
}) => ({
  slug: 'certified-organic-corn',
  slugLock: false,
  _status: 'published',
  authors: [author],
  shortDescription:
    'Органічна кукурудза з EU сертифікацією, вирощена без хімічних добрив та пестицидів.',
  itemCode: 'CORN-ORG-006',
  price: '320-360 USD/т',
  availability: 'in_stock' as const,
  ratingEnabled: true,
  rating: 5,
  reviewsCount: 12,
  features: [
    { feature: 'EU Organic сертифікація' },
    { feature: 'Без хімічних добрив' },
    { feature: 'Без пестицидів' },
    { feature: 'Природне вирощування' },
    { feature: 'Преміум якість' },
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
              text: 'Кукурудза органічна сертифікована - вирощена без хімічних добрив та пестицидів.',
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
              text: 'Органічна кукурудза з EU сертифікацією для преміум сегменту ринку.',
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
    description: 'Органічна кукурудза з EU сертифікацією, вирощена без хімічних добрив.',
    image: heroImage1.id,
    title: 'Кукурудза органічна',
  },
  relatedPosts: [],
  title: 'Кукурудза органічна',
  fullDescription: {
    root: {
      type: 'root',
      children: [
        {
          type: 'heading',
          children: [
            {
              type: 'text',
              text: 'Органічна кукурудза EU сертифікована',
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
              text: 'Наша органічна кукурудза вирощена згідно з найсуворішими європейськими стандартами органічного виробництва. Продукція має офіційну EU Organic сертифікацію та призначена для преміум сегменту ринку.',
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
    { name: 'Сертифікація', value: 'EU Organic' },
    { name: 'Пестициди', value: 'відсутні' },
    { name: 'Хімічні добрива', value: 'не використовувались' },
    { name: 'ГМО', value: 'відсутні' },
    { name: 'Вологість', value: 'не більше 14%' },
    { name: 'Білок', value: '8-9%' },
  ],
  additionalSpecifications: [
    {
      icon: 'LuLeaf',
      name: 'Органічна сертифікація',
      description: 'Офіційна EU Organic сертифікація відповідно до Регламенту (ЄС) 2018/848',
    },
    {
      icon: 'LuShield',
      name: 'Природне вирощування',
      description: 'Вирощена без синтетичних пестицидів, гербіцидів та мінеральних добрив',
    },
    {
      icon: 'LuSprout',
      name: 'Органічне насіння',
      description: 'Використовується тільки сертифіковане органічне насіння без ГМО',
    },
    {
      icon: 'LuAward',
      name: 'Контроль якості',
      description: 'Регулярні перевірки незалежними сертифікаційними органами',
    },
  ],
  documents: [
    {
      name: 'EU Organic сертифікат',
      file: pdfDoc.id,
      type: 'PDF' as const,
    },
    {
      name: 'Протокол аналізу на залишки пестицидів',
      file: pdfDoc.id,
      type: 'PDF' as const,
    },
    {
      name: 'Довідка про умови вирощування',
      file: pdfDoc.id,
      type: 'PDF' as const,
    },
    {
      name: 'Сертифікат відсутності ГМО',
      file: pdfDoc.id,
      type: 'PDF' as const,
    },
  ],
  benefits: [
    {
      icon: 'LuLeaf',
      title: 'EU Organic',
      description: 'Сертифікована органічна продукція з гарантією якості',
    },
    {
      icon: 'LuShield',
      title: 'Безпечність',
      description: 'Відсутність залишків пестицидів та шкідливих речовин',
    },
    {
      icon: 'LuHeart',
      title: 'Корисність',
      description: 'Збережені природні поживні речовини та вітаміни',
    },
  ],
});

export const product6_en: (args: ProductArgs) => RequiredDataFromCollectionSlug<'products'> = ({
  heroImage1,
  heroImage2,
  heroImage3,
  heroImage4,
  heroImage5,
  blockImage,
  pdfDoc,
  author,
}) => ({
  slug: 'certified-organic-corn',
  slugLock: false,
  _status: 'published',
  authors: [author],
  shortDescription:
    'Organic corn with EU certification, grown without chemical fertilizers and pesticides.',
  itemCode: 'CORN-ORG-006',
  price: '$320-360 USD/t',
  availability: 'in_stock' as const,
  ratingEnabled: true,
  rating: 5,
  reviewsCount: 12,
  features: [
    { feature: 'EU Organic certification' },
    { feature: 'No chemical fertilizers' },
    { feature: 'No pesticides' },
    { feature: 'Natural cultivation' },
    { feature: 'Premium quality' },
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
              text: 'Certified Organic Corn - grown without chemical fertilizers and pesticides.',
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
              text: 'Organic corn with EU certification for the premium market segment.',
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
    description: 'Organic corn with EU certification, grown without chemical fertilizers.',
    image: heroImage1.id,
    title: 'Organic Corn',
  },
  relatedPosts: [],
  title: 'Organic Corn',
  fullDescription: {
    root: {
      type: 'root',
      children: [
        {
          type: 'heading',
          children: [
            {
              type: 'text',
              text: 'EU Certified Organic Corn',
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
              text: 'Our organic corn is grown according to the strictest European standards for organic production. The product has official EU Organic certification and is intended for the premium market segment.',
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
    { name: 'Certification', value: 'EU Organic' },
    { name: 'Pesticides', value: 'absent' },
    { name: 'Chemical Fertilizers', value: 'not used' },
    { name: 'GMO', value: 'absent' },
    { name: 'Moisture', value: 'no more than 14%' },
    { name: 'Protein', value: '8-9%' },
  ],
  additionalSpecifications: [
    {
      icon: 'LuLeaf',
      name: 'Organic Certification',
      description: 'Official EU Organic certification according to Regulation (EU) 2018/848',
    },
    {
      icon: 'LuShield',
      name: 'Natural Cultivation',
      description: 'Grown without synthetic pesticides, herbicides, and mineral fertilizers',
    },
    {
      icon: 'LuSprout',
      name: 'Organic Seeds',
      description: 'Only certified organic, non-GMO seeds are used',
    },
    {
      icon: 'LuAward',
      name: 'Quality Control',
      description: 'Regular inspections by independent certification bodies',
    },
  ],
  documents: [
    {
      name: 'EU Organic Certificate',
      file: pdfDoc.id,
      type: 'PDF' as const,
    },
    {
      name: 'Pesticide Residue Analysis Protocol',
      file: pdfDoc.id,
      type: 'PDF' as const,
    },
    {
      name: 'Statement of Cultivation Conditions',
      file: pdfDoc.id,
      type: 'PDF' as const,
    },
    {
      name: 'GMO-Free Certificate',
      file: pdfDoc.id,
      type: 'PDF' as const,
    },
  ],
  benefits: [
    {
      icon: 'LuLeaf',
      title: 'EU Organic',
      description: 'Certified organic product with a quality guarantee',
    },
    {
      icon: 'LuShield',
      title: 'Safety',
      description: 'Absence of pesticide residues and harmful substances',
    },
    {
      icon: 'LuHeart',
      title: 'Healthfulness',
      description: 'Preserved natural nutrients and vitamins',
    },
  ],
});
