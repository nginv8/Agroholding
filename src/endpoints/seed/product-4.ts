import { RequiredDataFromCollectionSlug } from 'payload';

import type { ProductArgs } from './product-1';

export const product4: (args: ProductArgs) => RequiredDataFromCollectionSlug<'products'> = ({
  heroImage1,
  heroImage2,
  heroImage3,
  heroImage4,
  heroImage5,
  blockImage,
  pdfDoc,
  author,
}) => {
  return {
    slug: 'quality-corn-silage',
    slugLock: false,
    _status: 'published',
    authors: [author],
    shortDescription:
      "Кукурудза силосна високої якості для молочного скотарства та м'ясного виробництва.",
    itemCode: 'CORN-SILAGE-004',
    price: '200-230 USD/т',
    availability: 'in_stock' as const,
    ratingEnabled: true,
    rating: 4,
    reviewsCount: 28,
    features: [
      { feature: 'Сухі речовини 35-40%' },
      { feature: 'Крохмаль 25-30%' },
      { feature: 'Клітковина 18-22%' },
      { feature: 'Оптимальний вміст цукрів' },
      { feature: 'Підвищує надої молока' },
      { feature: 'Тривале зберігання до 2 років' },
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
                text: 'Кукурудза силосна - якісний корм з високою енергетичною цінністю для молочного скотарства.',
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
                text: 'Спеціальні гібриди кукурудзи для силосування з оптимальним співвідношенням зерна та зеленої маси. Ідеальний корм для високопродуктивних молочних корів.',
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
        'Силосна кукурудза з високою енергетичною цінністю для молочного скотарства та тваринництва.',
      image: heroImage1.id,
      title: 'Кукурудза силосна',
    },
    relatedPosts: [],
    title: 'Кукурудза силосна',
    fullDescription: {
      root: {
        type: 'root',
        children: [
          {
            type: 'heading',
            children: [
              {
                type: 'text',
                text: 'Спеціальна силосна кукурудза для тваринництва',
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
                text: 'Силосна кукурудза з оптимальним співвідношенням зерна та зеленої маси для високопродуктивного молочного скотарства.',
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
      { name: 'Сухі речовини', value: '35-40%' },
      { name: 'Крохмаль', value: '25-30%' },
      { name: 'Клітковина', value: '18-22%' },
      { name: 'Цукри', value: '8-12%' },
      { name: 'Сирий протеїн', value: '7-9%' },
      { name: 'Вологість', value: '65-75%' },
    ],
    additionalSpecifications: [
      {
        icon: 'LuDroplets',
        name: 'Оптимальна вологість',
        description: 'Ідеальний вміст вологи для якісного силосування',
      },
      {
        icon: 'LuWheat',
        name: 'Для молочних корів',
        description: 'Спеціально підібрані гібриди для молочного скотарства',
      },
      {
        icon: 'LuClock',
        name: 'Тривале зберігання',
        description: 'Зберігає поживні властивості до 24 місяців',
      },
      {
        icon: 'LuLeaf',
        name: 'Екологічність',
        description: 'Вирощено без використання заборонених пестицидів',
      },
    ],
    documents: [
      {
        name: 'Технічні умови на силосну кукурудзу',
        file: pdfDoc.id,
        type: 'PDF' as const,
      },
      {
        name: 'Рекомендації по силосуванню',
        file: pdfDoc.id,
        type: 'PDF' as const,
      },
      {
        name: 'Аналіз поживної цінності',
        file: pdfDoc.id,
        type: 'PDF' as const,
      },
      {
        name: 'Ветеринарне свідоцтво',
        file: pdfDoc.id,
        type: 'PDF' as const,
      },
    ],
    benefits: [
      {
        icon: 'LuMilk',
        title: 'Для молочного скотарства',
        description: 'Підвищує надої молока та жирність',
      },
      {
        icon: 'LuZap',
        title: 'Висока енергетичність',
        description: 'Оптимальний баланс поживних речовин',
      },
      {
        icon: 'LuPackage',
        title: 'Тривале зберігання',
        description: 'Зберігає якість до 2 років у силосних ямах',
      },
    ],
  };
};

export const product4_en: (args: ProductArgs) => RequiredDataFromCollectionSlug<'products'> = ({
  heroImage1,
  heroImage2,
  heroImage3,
  heroImage4,
  heroImage5,
  blockImage,
  pdfDoc,
  author,
}) => {
  return {
    slug: 'quality-corn-silage',
    slugLock: false,
    _status: 'published',
    authors: [author],
    shortDescription: 'High-quality corn silage for dairy farming and meat production.',
    itemCode: 'CORN-SILAGE-004',
    price: '$200-230 USD/t',
    availability: 'in_stock' as const,
    ratingEnabled: true,
    rating: 4,
    reviewsCount: 28,
    features: [
      { feature: 'Dry matter 35-40%' },
      { feature: 'Starch 25-30%' },
      { feature: 'Fiber 18-22%' },
      { feature: 'Optimal sugar content' },
      { feature: 'Increases milk yield' },
      { feature: 'Long-term storage up to 2 years' },
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
                text: 'Corn Silage - quality feed with high energy value for dairy farming.',
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
                text: 'Special corn hybrids for silage with an optimal ratio of grain to green mass. Ideal feed for high-producing dairy cows.',
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
      description: 'Corn silage with high energy value for dairy and livestock farming.',
      image: heroImage1.id,
      title: 'Corn Silage',
    },
    relatedPosts: [],
    title: 'Corn Silage',
    fullDescription: {
      root: {
        type: 'root',
        children: [
          {
            type: 'heading',
            children: [
              {
                type: 'text',
                text: 'Special Silage Corn for Livestock',
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
                text: 'Silage corn with an optimal ratio of grain to green mass for high-producing dairy farming.',
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
      { name: 'Dry Matter', value: '35-40%' },
      { name: 'Starch', value: '25-30%' },
      { name: 'Fiber', value: '18-22%' },
      { name: 'Sugars', value: '8-12%' },
      { name: 'Crude Protein', value: '7-9%' },
      { name: 'Moisture', value: '65-75%' },
    ],
    additionalSpecifications: [
      {
        icon: 'LuDroplets',
        name: 'Optimal Moisture',
        description: 'Ideal moisture content for quality silage making',
      },
      {
        icon: 'LuWheat',
        name: 'For Dairy Cows',
        description: 'Specially selected hybrids for dairy farming',
      },
      {
        icon: 'LuClock',
        name: 'Long-term Storage',
        description: 'Retains nutritional properties for up to 24 months',
      },
      {
        icon: 'LuLeaf',
        name: 'Eco-friendly',
        description: 'Grown without the use of prohibited pesticides',
      },
    ],
    documents: [
      {
        name: 'Technical Specifications for Corn Silage',
        file: pdfDoc.id,
        type: 'PDF' as const,
      },
      {
        name: 'Silage Making Recommendations',
        file: pdfDoc.id,
        type: 'PDF' as const,
      },
      {
        name: 'Nutritional Value Analysis',
        file: pdfDoc.id,
        type: 'PDF' as const,
      },
      {
        name: 'Veterinary Certificate',
        file: pdfDoc.id,
        type: 'PDF' as const,
      },
    ],
    benefits: [
      {
        icon: 'LuMilk',
        title: 'For Dairy Farming',
        description: 'Increases milk yield and fat content',
      },
      {
        icon: 'LuZap',
        title: 'High Energy',
        description: 'Optimal balance of nutrients',
      },
      {
        icon: 'LuPackage',
        title: 'Long-term Storage',
        description: 'Maintains quality for up to 2 years in silage pits',
      },
    ],
  };
};
