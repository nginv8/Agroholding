import { RequiredDataFromCollectionSlug } from 'payload';

import type { ProductArgs } from './product-1';

export const product10: (args: ProductArgs) => RequiredDataFromCollectionSlug<'products'> = ({
  heroImage1,
  heroImage2,
  heroImage3,
  heroImage4,
  heroImage5,
  blockImage,
  pdfDoc,
  author,
}) => ({
  slug: 'fine-corn-flour',
  slugLock: false,
  _status: 'published',
  authors: [author],
  shortDescription:
    'Кукурудзяне борошно тонкого помелу для хлібопекарської та кондитерської промисловості.',
  itemCode: 'CORN-FLOUR-010',
  price: '450-500 USD/т',
  availability: 'in_stock' as const,
  ratingEnabled: true,
  rating: 4,
  reviewsCount: 18,
  features: [
    { feature: 'Тонкий помел 0.2 мм' },
    { feature: 'Клітковина не більше 2%' },
    { feature: 'Безглютеновий продукт' },
    { feature: 'Однорідна структура' },
    { feature: 'Слабкий кукурудзяний смак' },
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
              text: 'Кукурудзяне борошно тонкого помелу для хлібопекарської промисловості.',
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
              text: 'Високоякісне кукурудзяне борошно для безглютенового хліба та кондитерських виробів.',
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
    description: 'Кукурудзяне борошно тонкого помелу для безглютенової продукції.',
    image: heroImage1.id,
    title: 'Кукурудзяне борошно',
  },
  relatedPosts: [],
  title: 'Кукурудзяне борошно',
  fullDescription: {
    root: {
      type: 'root',
      children: [
        {
          type: 'heading',
          children: [
            {
              type: 'text',
              text: 'Безглютенове кукурудзяне борошно преміум класу',
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
              text: 'Наше кукурудзяне борошно - це натуральний безглютеновий продукт для випічки та кондитерських виробів. Помол найтоншим способом (0.2мм) забезпечує досконалу однорідність і шовковистість.',
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
    { name: 'Розмір помелу', value: '0.2 мм (тонкий)' },
    { name: 'Клітковина', value: 'не більше 2%' },
    { name: 'Вологість', value: 'не більше 12%' },
    { name: 'Білок', value: '7-9%' },
    { name: 'Жир', value: '2.5-4%' },
    { name: 'Глютен', value: 'відсутній' },
  ],
  additionalSpecifications: [
    {
      icon: 'LuWheat',
      name: 'Безглютеновий',
      description: 'Натурально не містить глютен, ідеально для людей з целіакією',
    },
    {
      icon: 'LuGrid3X3',
      name: 'Однорідна структура',
      description: 'Прецизійно контрольований розмір частинок 0.2мм для ідеальної випічки',
    },
    {
      icon: 'LuChefHat',
      name: 'Хлібопекарські властивості',
      description: 'Добре всмоктує вологу, забезпечує повноцінну заміну пшеничного борошна',
    },
    {
      icon: 'LuCookie',
      name: 'Кондитерські вироби',
      description: 'Придає приємного кукурудзяного смаку печиву, тортам та іншим солодощам',
    },
  ],
  documents: [
    {
      name: 'Технічні умови кукурудзяного борошна',
      file: pdfDoc.id,
      type: 'PDF' as const,
    },
    {
      name: 'Сертифікат на безглютеновий продукт',
      file: pdfDoc.id,
      type: 'PDF' as const,
    },
    {
      name: 'Протокол гранулометричного аналізу',
      file: pdfDoc.id,
      type: 'PDF' as const,
    },
    {
      name: 'Рекомендації по використанню',
      file: pdfDoc.id,
      type: 'PDF' as const,
    },
  ],
  benefits: [
    {
      icon: 'LuWheat',
      title: 'Безглютеновий',
      description: 'Природно не містить глютен, безпечний для людей з алергією',
    },
    {
      icon: 'LuGrid3X3',
      title: 'Тонкий помел',
      description: 'Однорідна структура 0.2мм для перфектної випічки',
    },
    {
      icon: 'LuCookie',
      title: 'Універсальність',
      description: 'Підходить для хліба, блинів, печива та кондитерських виробів',
    },
  ],
});

export const product10_en: (args: ProductArgs) => RequiredDataFromCollectionSlug<'products'> = ({
  heroImage1,
  heroImage2,
  heroImage3,
  heroImage4,
  heroImage5,
  blockImage,
  pdfDoc,
  author,
}) => ({
  slug: 'fine-corn-flour',
  slugLock: false,
  _status: 'published',
  authors: [author],
  shortDescription: 'Fine corn flour for the baking and confectionery industries.',
  itemCode: 'CORN-FLOUR-010',
  price: '$450-500 USD/t',
  availability: 'in_stock' as const,
  ratingEnabled: true,
  rating: 4,
  reviewsCount: 18,
  features: [
    { feature: 'Fine grind 0.2 mm' },
    { feature: 'Fiber no more than 2%' },
    { feature: 'Gluten-free product' },
    { feature: 'Homogeneous structure' },
    { feature: 'Mild corn flavor' },
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
              text: 'Fine corn flour for the baking industry.',
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
              text: 'High-quality corn flour for gluten-free bread and confectionery.',
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
    description: 'Fine corn flour for gluten-free products.',
    image: heroImage1.id,
    title: 'Corn Flour',
  },
  relatedPosts: [],
  title: 'Corn Flour',
  fullDescription: {
    root: {
      type: 'root',
      children: [
        {
          type: 'heading',
          children: [
            {
              type: 'text',
              text: 'Premium Gluten-Free Corn Flour',
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
              text: 'Our corn flour is a natural gluten-free product for baking and confectionery. The finest grinding (0.2mm) ensures perfect homogeneity and silkiness.',
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
    { name: 'Grind Size', value: '0.2 mm (fine)' },
    { name: 'Fiber', value: 'no more than 2%' },
    { name: 'Moisture', value: 'no more than 12%' },
    { name: 'Protein', value: '7-9%' },
    { name: 'Fat', value: '2.5-4%' },
    { name: 'Gluten', value: 'absent' },
  ],
  additionalSpecifications: [
    {
      icon: 'LuWheat',
      name: 'Gluten-Free',
      description: 'Naturally gluten-free, ideal for people with celiac disease',
    },
    {
      icon: 'LuGrid3X3',
      name: 'Homogeneous Structure',
      description: 'Precisely controlled particle size of 0.2mm for perfect baking',
    },
    {
      icon: 'LuChefHat',
      name: 'Baking Properties',
      description: 'Absorbs moisture well, provides a full substitute for wheat flour',
    },
    {
      icon: 'LuCookie',
      name: 'Confectionery',
      description: 'Adds a pleasant corn flavor to cookies, cakes, and other sweets',
    },
  ],
  documents: [
    {
      name: 'Corn Flour Technical Specifications',
      file: pdfDoc.id,
      type: 'PDF' as const,
    },
    {
      name: 'Gluten-Free Product Certificate',
      file: pdfDoc.id,
      type: 'PDF' as const,
    },
    {
      name: 'Granulometric Analysis Protocol',
      file: pdfDoc.id,
      type: 'PDF' as const,
    },
    {
      name: 'Usage Recommendations',
      file: pdfDoc.id,
      type: 'PDF' as const,
    },
  ],
  benefits: [
    {
      icon: 'LuWheat',
      title: 'Gluten-Free',
      description: 'Naturally gluten-free, safe for people with allergies',
    },
    {
      icon: 'LuGrid3X3',
      title: 'Fine Grind',
      description: 'Homogeneous 0.2mm structure for perfect baking',
    },
    {
      icon: 'LuCookie',
      title: 'Versatility',
      description: 'Suitable for bread, pancakes, cookies, and confectionery',
    },
  ],
});
