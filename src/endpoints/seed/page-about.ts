import type { RequiredDataFromCollectionSlug } from 'payload';

import type { Media } from '@/payload-types';

type AboutPageArgs = {
  heroImage1: Media;
  blockImage1: Media;
  _blockImage2: Media;
  img1: Media;
  img2: Media;
};

export const aboutPage = (
  locale: 'en' | 'uk',
  args: AboutPageArgs
): RequiredDataFromCollectionSlug<'pages'> => {
  const { heroImage1, blockImage1, _blockImage2, img1, img2 } = args;

  return {
    slug: 'about',
    _status: 'published',
    title: locale === 'en' ? 'About Our Agricultural Holding' : 'Про наш агрохолдинг',
    layout: [
      {
        blockName: 'About Block - Company History',
        blockType: 'about',
        theme: 'light',
        title: {
          variant: 'colorAccent',
          alignment: 'left',
          subtitle: locale === 'en' ? 'Our History' : 'Наша історія',
          title: locale === 'en' ? 'Over {{15 years}} of experience' : 'Понад {{15 років}} досвіду',
          description:
            locale === 'en'
              ? 'From a small farm to a leading agricultural holding in Ukraine'
              : 'Від малого фермерського господарства до провідного агрохолдингу України',
        },
        sbg: {
          variant: 'gradient',
          gradientType: 'top and bottom',
        },
        mainImage: heroImage1.id,
        secondaryImage: _blockImage2.id,
        cta: [
          {
            link: {
              type: 'custom',
              url: '/products',
              label: locale === 'en' ? 'Our Products' : 'Наша продукція',
              appearance: 'default',
            },
          },
        ],
        richText: {
          root: {
            type: 'root',
            children: [
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    text:
                      locale === 'en'
                        ? 'Our company began its journey in 2008 as a small farm with a dream to provide Ukraine with high-quality corn. Thanks to the implementation of innovative technologies, a professional team, and dedication, we have grown into one of the leading agricultural holdings in the country.'
                        : 'Наша компанія розпочала свій шлях у 2008 році як невелике фермерське господарство з мрією забезпечити Україну якісною кукурудзою. Завдяки впровадженню інноваційних технологій, професійній команді та відданості справі, ми перетворились на один з провідних агрохолдингів країни.',
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
                    text:
                      locale === 'en'
                        ? 'Today, we cultivate over 50,000 hectares of land and produce more than 500,000 tons of corn annually, supplying products to over 25 countries worldwide.'
                        : 'Сьогодні ми обробляємо понад 50,000 гектарів землі і виробляємо більше 500,000 тонн кукурудзи щорічно, постачаючи продукцію у понад 25 країн світу.',
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
      },
      {
        blockName: 'About Features Block - Our Values',
        blockType: 'aboutFeatures',
        theme: 'light',
        title: {
          variant: 'colorAccent',
          alignment: 'left',
          subtitle: locale === 'en' ? 'Our Values' : 'Наші цінності',
          title: locale === 'en' ? 'What makes us {{special}}' : 'Що робить нас {{особливими}}',
          description:
            locale === 'en'
              ? 'The principles our company is built on'
              : 'Принципи, на яких побудована наша компанія',
        },
        sbg: {
          variant: 'none',
        },
        mainImage: img1.id,
        secondaryImage: img2.id,
        features: [
          {
            icon: 'LuHeart',
            title: locale === 'en' ? 'Quality Above All' : 'Якість понад усе',
            description:
              locale === 'en'
                ? 'Every stage of production is controlled by the most modern technologies'
                : 'Кожен етап виробництва контролюється найсучаснішими технологіями',
          },
          {
            icon: 'LuLeaf',
            title: locale === 'en' ? 'Sustainability' : 'Екологічність',
            description:
              locale === 'en'
                ? 'Caring for nature and using organic methods'
                : 'Дбайливе ставлення до природи та використання органічних методів',
          },
          {
            icon: 'LuUsers',
            title: locale === 'en' ? 'Team of Professionals' : 'Команда професіоналів',
            description:
              locale === 'en'
                ? 'Over 500 qualified specialists with many years of experience'
                : 'Понад 500 кваліфікованих спеціалістів з багаторічним досвідом',
          },
          {
            icon: 'LuGlobe',
            title: locale === 'en' ? 'International Standards' : 'Міжнародні стандарти',
            description:
              locale === 'en'
                ? 'ISO 9001, HACCP certification and compliance with EU standards'
                : 'Сертифікація ISO 9001, HACCP та відповідність стандартам ЄС',
          },
          {
            icon: 'LuTrendingUp',
            title: locale === 'en' ? 'Innovation' : 'Інноваційність',
            description:
              locale === 'en'
                ? 'Constant implementation of the latest technologies and farming methods'
                : 'Постійне впровадження найновіших технологій та методів землеробства',
          },
          {
            icon: 'LuShield',
            title: locale === 'en' ? 'Reliability' : 'Надійність',
            description:
              locale === 'en'
                ? 'We always fulfill our obligations to partners and clients'
                : 'Завжди виконуємо зобовязання перед партнерами та клієнтами',
          },
        ],
        stats: [
          {
            number: '50,000+',
            label: locale === 'en' ? 'Hectares of land' : 'Гектарів землі',
          },
          {
            number: '15+',
            label: locale === 'en' ? 'Years of experience' : 'Років досвіду',
          },
          {
            number: '25+',
            label: locale === 'en' ? 'Export countries' : 'Країн експорту',
          },
        ],
        cta: [
          {
            link: {
              type: 'custom',
              url: '/quality',
              label: locale === 'en' ? 'Quality Control' : 'Контроль якості',
              appearance: 'default',
            },
          },
        ],
      },
      {
        blockName: 'Testimonial Block - Partners',
        blockType: 'testimonial',
        theme: 'light',
        title: {
          variant: 'colorAccent',
          alignment: 'center',
          subtitle: locale === 'en' ? 'Partner Testimonials' : 'Відгуки партнерів',
          title: locale === 'en' ? 'What they {{say}} about us' : 'Що {{говорять}} про нас',
          description:
            locale === 'en'
              ? 'Opinions of our regular clients and partners'
              : 'Думки наших постійних клієнтів та партнерів',
        },
        sbg: {
          variant: 'none',
        },
        testimonials: [
          {
            name: 'Oleksandr Petrenko',
            role: locale === 'en' ? 'Director of "AgroTrade" LLC' : 'Директор ТОВ "АгроТрейд"',
            rating: 5,
            avatar: blockImage1.id,
            content:
              locale === 'en'
                ? 'We have been cooperating with this agricultural holding for 7 years. Always high-quality products, timely delivery, and a professional approach. I recommend them as a reliable supplier.'
                : 'Співпрацюємо з цим агрохолдингом вже 7 років. Завжди висока якість продукції, своєчасна доставка та професійний підхід. Рекомендую як надійного постачальника.',
          },
          {
            name: 'Maryna Kovalenko',
            role:
              locale === 'en' ? 'Buyer at "Grain Export Ltd"' : 'Закупівельник "Grain Export Ltd"',
            rating: 5,
            avatar: heroImage1.id,
            content:
              locale === 'en'
                ? 'The best corn on the Ukrainian market. All quality certificates are in order, logistics work like a clock.'
                : 'Найкраща кукурудза на українському ринку. Всі сертифікати якості в порядку, логістика працює як годинник.',
          },
          {
            name: 'Dmytro Sydorenko',
            role:
              locale === 'en' ? 'Head of Procurement Department' : 'Керівник відділу закупівель',
            rating: 5,
            avatar: img1.id,
            content:
              locale === 'en'
                ? 'The scale of operations and the level of organization are impressive. True professionals in their field.'
                : 'Вражає масштаб операцій та рівень організації. Справжні професіонали своєї справи.',
          },
        ],
      },
      {
        blockName: 'Contact Us Block - Get in Touch',
        blockType: 'contactUs',
        theme: 'dark',
        title: {
          variant: 'colorAccent',
          alignment: 'left',
          subtitle: locale === 'en' ? 'Contacts' : 'Контакти',
          title: locale === 'en' ? 'Ready for {{cooperation}}?' : 'Готові до {{співпраці}}?',
          description:
            locale === 'en'
              ? 'Contact us for a consultation'
              : 'Звертайтеся до нас для отримання консультації',
        },
        sbg: {
          variant: 'gradient',
          gradientType: 'top',
        },
        blocks: [
          {
            blockType: 'formBlock',
            enableIntro: false,
            form: 1,
          },
        ],
        contactDisplay: {
          showPhones: true,
          showEmails: true,
          showAddresses: true,
          showWorkingHours: true,
        },
        corporate: {
          title: locale === 'en' ? 'Corporate Clients' : 'Корпоративні клієнти',
          description:
            locale === 'en'
              ? 'Special conditions for large volumes and long-term contracts'
              : 'Спеціальні умови для великих обсягів та довгострокових контрактів',
        },
      },
    ],
    meta: {
      description:
        locale === 'en'
          ? 'Learn about the history of our agricultural holding, company values, team of professionals, and our achievements over 15+ years of work.'
          : 'Дізнайтеся про історію нашого агрохолдингу, цінності компанії, команду професіоналів та наші досягнення за 15+ років роботи.',
      image: img2.id,
      title:
        locale === 'en'
          ? 'About our agricultural holding - history, values, team'
          : 'Про наш агрохолдинг - історія, цінності, команда',
    },
  };
};
