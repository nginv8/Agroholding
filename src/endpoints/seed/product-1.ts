import { RequiredDataFromCollectionSlug } from 'payload';

import type { Media, User } from '@/payload-types';

export type ProductArgs = {
  heroImage1: Media;
  heroImage2: Media;
  heroImage3: Media;
  heroImage4: Media;
  heroImage5: Media;
  blockImage: Media;
  pdfDoc: Media;
  author: User;
};

export const product1: (args: ProductArgs) => RequiredDataFromCollectionSlug<'products'> = ({
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
    slug: 'premium-grain-corn',
    _status: 'published',
    slugLock: false,
    authors: [author],
    shortDescription:
      'Кукурудза зернова преміум класу з високим вмістом крохмалю та низькою вологістю для комбікормової промисловості та експорту.',
    itemCode: 'CORN-PREM-001',
    price: '250-280 USD/т',
    availability: 'in_stock' as const,
    ratingEnabled: true,
    rating: 5,
    reviewsCount: 47,
    features: [
      { feature: 'Вологість не більше 14%' },
      { feature: 'Білок мінімум 8%' },
      { feature: 'Крохмаль мінімум 70%' },
      { feature: 'Сміттєва домішка до 2%' },
      { feature: 'Зернова домішка до 5%' },
      { feature: 'Афлатоксин В1 до 5 мкг/кг' },
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
                text: 'Кукурудза зернова преміум класу - найвища якість для комбікормової промисловості та експорту.',
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
              blockName: 'Характеристики продукту',
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
                          text: 'Основні показники:',
                          version: 1,
                        },
                        {
                          type: 'text',
                          detail: 0,
                          format: 0,
                          mode: 'normal',
                          style: '',
                          text: ' Вологість не більше 14%, білок від 8%, крохмаль від 70%. Сертифіковано за міжнародними стандартами якості.',
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
                text: 'Переваги нашої кукурудзи',
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
                text: 'Наша кукурудза зернова преміум класу вирощується в оптимальних кліматичних умовах центральної України з використанням найсучасніших агротехнологій. Кожен етап виробництва - від підготовки ґрунту до зберігання готової продукції - ретельно контролюється нашими фахівцями.',
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
                text: 'Високий вміст крохмалю робить нашу кукурудзу ідеальною для виробництва комбікормів, а низький рівень вологості забезпечує тривале зберігання без втрати якості. Продукція сертифікована відповідно до міжнародних стандартів ДСТУ та ISO.',
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
                text: 'Застосування та ринки збуту',
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
                text: 'Наша кукурудза знаходить широке застосування в комбікормовій промисловості, харчовій індустрії та біоенергетиці. Основними ринками збуту є країни ЄС, Туреччина, країни Близького Сходу та Азії. Ми пропонуємо гнучкі умови поставки з можливістю доставки автотранспортом, залізницею або морським транспортом через порти Чорного моря.',
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
              blockName: 'Гарантія якості',
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
                          text: 'Кожна партія нашої кукурудзи проходить багатоступеневий контроль якості в власній лабораторії та незалежних сертифікованих лабораторіях. Ми гарантуємо повну відповідність заявленим характеристикам та надаємо всю необхідну документацію для міжнародної торгівлі.',
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
    heroImage: heroImage1.id,
    meta: {
      description:
        'Кукурудза зернова преміум класу з високим вмістом крохмалю та низькою вологістю. Ідеально підходить для комбікормової промисловості. Сертифікована якість, міжнародні стандарти.',
      image: heroImage1.id,
      title: 'Кукурудза зернова преміум класу',
    },
    relatedPosts: [],
    title: 'Кукурудза зернова преміум класу',
    fullDescription: {
      root: {
        type: 'root',
        children: [
          {
            type: 'heading',
            children: [
              {
                type: 'text',
                text: 'Детальний опис продукту',
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
                text: 'Кукурудза зернова преміум класу - це продукт найвищої якості, вирощений на родючих чорноземах центральної України. Ми застосовуємо передові агротехнології, включаючи точне землеробство, оптимізоване внесення добрив та контроль за всіма етапами вегетації.',
                version: 1,
              },
            ],
            direction: 'ltr',
            format: '',
            indent: 0,
            version: 1,
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                text: 'Особливу увагу приділяємо селекції гібридів з високим потенціалом урожайності та стабільними показниками якості. Кукурудза проходить ретельну очистку, сушіння до оптимальної вологості та зберігається в сучасних елеваторах з контрольованими умовами.',
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
      { name: 'Вологість', value: 'не більше 14%' },
      { name: 'Білок', value: 'мінімум 8%' },
      { name: 'Крохмаль', value: 'мінімум 70%' },
      { name: 'Жир', value: '3.5-4.5%' },
      { name: 'Клітковина', value: 'не більше 2.5%' },
      { name: 'Зола', value: 'не більше 1.5%' },
      { name: 'Сміттєва домішка', value: 'не більше 2%' },
      { name: 'Зернова домішка', value: 'не більше 5%' },
      { name: 'Пошкоджені зерна', value: 'не більше 5%' },
      { name: 'Афлатоксин В1', value: 'не більше 5 мкг/кг' },
      { name: 'ДОН (деоксиніваленол)', value: 'не більше 1250 мкг/кг' },
      { name: 'Зеараленон', value: 'не більше 100 мкг/кг' },
    ],
    additionalSpecifications: [
      {
        icon: 'LuFlaskConical',
        name: 'Лабораторний контроль',
        description: 'Кожна партія проходить повний аналіз у власній акредитованій лабораторії',
      },
      {
        icon: 'LuShield',
        name: 'Безпечність',
        description: 'Відсутність ГМО, пестицидів та важких металів понад норму',
      },
      {
        icon: 'LuTruck',
        name: 'Упаковка та доставка',
        description: 'Насип у автотранспорт, вагони-хопери або big-bag до 1000 кг',
      },
      {
        icon: 'LuAward',
        name: 'Документи',
        description: 'Повний пакет документів для експорту включно з фітосанітарним сертифікатом',
      },
    ],
    documents: [
      {
        name: 'Технічні умови ТУ У 15.6-13929625-001:2009',
        file: pdfDoc.id,
        type: 'PDF' as const,
      },
      {
        name: 'Сертифікат відповідності ДСТУ 4525:2006',
        file: pdfDoc.id,
        type: 'PDF' as const,
      },
      {
        name: 'Протокол лабораторних досліджень',
        file: pdfDoc.id,
        type: 'PDF' as const,
      },
      {
        name: 'Фітосанітарний сертифікат',
        file: pdfDoc.id,
        type: 'PDF' as const,
      },
      {
        name: 'Декларація про відповідність ТР ТС',
        file: pdfDoc.id,
        type: 'PDF' as const,
      },
    ],
    benefits: [
      {
        icon: 'LuAward',
        title: 'Преміум якість',
        description: 'Контроль якості на всіх етапах виробництва від поля до споживача',
      },
      {
        icon: 'LuAward',
        title: 'Сертифікація',
        description: 'Відповідність міжнародним стандартам ДСТУ, ISO, HACCP',
      },
      {
        icon: 'LuTruck',
        title: 'Логістика',
        description: 'Власний автопарк та елеватори, гнучкі умови поставки',
      },
    ],
  };
};

export const product1_en: (args: ProductArgs) => RequiredDataFromCollectionSlug<'products'> = ({
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
    slug: 'premium-grain-corn',
    _status: 'published',
    slugLock: false,
    authors: [author],
    shortDescription:
      'Premium grade grain corn with high starch content and low moisture for feed industry and export.',
    itemCode: 'CORN-PREM-001',
    price: '$250-280 USD/t',
    availability: 'in_stock' as const,
    ratingEnabled: true,
    rating: 5,
    reviewsCount: 47,
    features: [
      { feature: 'Moisture no more than 14%' },
      { feature: 'Protein minimum 8%' },
      { feature: 'Starch minimum 70%' },
      { feature: 'Foreign matter up to 2%' },
      { feature: 'Grain impurities up to 5%' },
      { feature: 'Aflatoxin B1 up to 5 μg/kg' },
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
                text: 'Premium grade grain corn - highest quality for feed industry and export.',
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
              blockName: 'Product Characteristics',
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
                          text: 'Key indicators:',
                          version: 1,
                        },
                        {
                          type: 'text',
                          detail: 0,
                          format: 0,
                          mode: 'normal',
                          style: '',
                          text: ' Moisture no more than 14%, protein from 8%, starch from 70%. Certified according to international quality standards.',
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
                text: 'Advantages of our corn',
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
                text: 'Our premium grade grain corn is grown in optimal climatic conditions of central Ukraine using the most modern agricultural technologies. Every stage of production - from soil preparation to finished product storage - is carefully controlled by our specialists.',
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
                text: 'High starch content makes our corn ideal for feed production, while low moisture levels ensure long-term storage without quality loss. Products are certified according to international standards DSTU and ISO.',
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
                text: 'Application and sales markets',
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
                text: 'Our corn finds wide application in feed industry, food industry and bioenergy. Main sales markets are EU countries, Turkey, Middle East and Asian countries. We offer flexible delivery terms with possibility of transportation by road, rail or sea transport through Black Sea ports.',
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
              blockName: 'Quality guarantee',
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
                          text: 'Every batch of our corn undergoes multi-stage quality control in our own laboratory and independent certified laboratories. We guarantee full compliance with declared characteristics and provide all necessary documentation for international trade.',
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
    heroImage: heroImage1.id,
    meta: {
      description:
        'Premium grade grain corn with high starch content and low moisture. Perfect for feed industry. Certified quality, international standards.',
      image: heroImage1.id,
      title: 'Premium Grade Grain Corn',
    },
    relatedPosts: [],
    title: 'Premium Grade Grain Corn',
    fullDescription: {
      root: {
        type: 'root',
        children: [
          {
            type: 'heading',
            children: [
              {
                type: 'text',
                text: 'Detailed product description',
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
                text: 'Premium grade grain corn is a highest quality product grown on fertile black soils of central Ukraine. We apply advanced agricultural technologies, including precision agriculture, optimized fertilization and control at all vegetation stages.',
                version: 1,
              },
            ],
            direction: 'ltr',
            format: '',
            indent: 0,
            version: 1,
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                text: 'Special attention is paid to selecting hybrids with high yield potential and stable quality indicators. Corn undergoes thorough cleaning, drying to optimal moisture and is stored in modern elevators with controlled conditions.',
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
      { name: 'Moisture', value: 'no more than 14%' },
      { name: 'Protein', value: 'minimum 8%' },
      { name: 'Starch', value: 'minimum 70%' },
      { name: 'Fat', value: '3.5-4.5%' },
      { name: 'Fiber', value: 'no more than 2.5%' },
      { name: 'Ash', value: 'no more than 1.5%' },
      { name: 'Foreign matter', value: 'no more than 2%' },
      { name: 'Grain impurities', value: 'no more than 5%' },
      { name: 'Damaged grains', value: 'no more than 5%' },
      { name: 'Aflatoxin B1', value: 'no more than 5 μg/kg' },
      { name: 'DON (deoxynivalenol)', value: 'no more than 1250 μg/kg' },
      { name: 'Zearalenone', value: 'no more than 100 μg/kg' },
    ],
    additionalSpecifications: [
      {
        icon: 'LuFlaskConical',
        name: 'Laboratory control',
        description: 'Every batch undergoes complete analysis in our own accredited laboratory',
      },
      {
        icon: 'LuShield',
        name: 'Safety',
        description: 'GMO-free, pesticides and heavy metals within standards',
      },
      {
        icon: 'LuTruck',
        name: 'Packaging and delivery',
        description: 'Bulk in trucks, hopper cars or big-bags up to 1000 kg',
      },
      {
        icon: 'LuAward',
        name: 'Documents',
        description: 'Complete export documentation package including phytosanitary certificate',
      },
    ],
    documents: [
      {
        name: 'Technical Specifications TU U 15.6-13929625-001:2009',
        file: pdfDoc.id,
        type: 'PDF' as const,
      },
      {
        name: 'Certificate of Compliance DSTU 4525:2006',
        file: pdfDoc.id,
        type: 'PDF' as const,
      },
      {
        name: 'Laboratory Test Protocol',
        file: pdfDoc.id,
        type: 'PDF' as const,
      },
      {
        name: 'Phytosanitary Certificate',
        file: pdfDoc.id,
        type: 'PDF' as const,
      },
      {
        name: 'Declaration of Conformity TR TS',
        file: pdfDoc.id,
        type: 'PDF' as const,
      },
    ],
    benefits: [
      {
        icon: 'LuAward',
        title: 'Premium quality',
        description: 'Quality control at all production stages from field to consumer',
      },
      {
        icon: 'LuAward',
        title: 'Certification',
        description: 'Compliance with international standards DSTU, ISO, HACCP',
      },
      {
        icon: 'LuTruck',
        title: 'Logistics',
        description: 'Own fleet and elevators, flexible delivery terms',
      },
    ],
  };
};
