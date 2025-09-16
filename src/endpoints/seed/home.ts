import type { RequiredDataFromCollectionSlug } from 'payload';

import type { Form, Media } from '@/payload-types';

type HomeArgs = {
  heroImage1: Media;
  heroImage2: Media;
  img1: Media;
  img2: Media;
  img3: Media;
  img4: Media;
  metaImage: Media;
  contactForm: Form;
};

export const home = (
  locale: 'en' | 'uk',
  args: HomeArgs
): RequiredDataFromCollectionSlug<'pages'> => {
  const { heroImage1, heroImage2, img1, img2, img3, img4, metaImage, contactForm } = args;

  return {
    slug: 'home',
    _status: 'published',
    title: locale === 'en' ? 'Homepage' : 'Головна сторінка',
    hero: [
      {
        layout: 'hero1',
        title: {
          title:
            locale === 'en'
              ? 'Ukrainian agricultural holding of the {{new generation}}'
              : 'Український агрохолдинг {{нового покоління}}',
          subtitle: locale === 'en' ? 'Leader in corn production' : 'Лідер виробництва кукурудзи',
          description:
            locale === 'en'
              ? 'We grow the best corn in Ukraine, using modern technologies and innovative farming methods.'
              : 'Ми вирощуємо найкращу кукурудзу в Україні, використовуючи сучасні технології та інноваційні методи землеробства.',
        },
        backgroundImage: heroImage1.id,
        links: [
          {
            link: {
              type: 'custom',
              url: '/products',
              label: locale === 'en' ? 'Our Products' : 'Наша продукція',
              appearance: 'default',
            },
          },
          {
            link: {
              type: 'custom',
              url: '/about',
              label: locale === 'en' ? 'About Us' : 'Про компанію',
              appearance: 'outline',
            },
          },
        ],
      },
      {
        layout: 'hero2',
        imageSide: 'right',
        title: {
          title:
            locale === 'en' ? 'Over {{15 years}} in the market' : 'Понад {{15 років}} на ринку',
          subtitle: locale === 'en' ? 'Experience and reliability' : 'Досвід та надійність',
          description:
            locale === 'en'
              ? 'Our company is a leading producer of high-quality corn with many years of experience in the Ukrainian and international markets.'
              : 'Наша компанія є провідним виробником високоякісної кукурудзи з багаторічним досвідом роботи на українському та міжнародному ринках.',
        },
        backgroundImage: img4.id,
        sideImage: heroImage2.id,
        links: [
          {
            link: {
              type: 'custom',
              url: '/quality',
              label: locale === 'en' ? 'Quality Control' : 'Контроль якості',
              appearance: 'default',
            },
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
            number: '500+',
            label: locale === 'en' ? 'Employees' : 'Співробітників',
          },
          {
            number: '100%',
            label: locale === 'en' ? 'Quality' : 'Якість',
          },
        ],
      },
    ],
    layout: [
      {
        blockName: 'About Block - Company',
        blockType: 'about',
        theme: 'light',
        title: {
          variant: 'colorAccent',
          alignment: 'left',
          subtitle: locale === 'en' ? 'Our History' : 'Наша історія',
          title: locale === 'en' ? 'About our {{agricultural holding}}' : 'Про наш {{агрохолдинг}}',
          description:
            locale === 'en'
              ? 'We are creating the future of Ukrainian agriculture'
              : 'Ми створюємо майбутнє українського сільського господарства',
        },
        sbg: {
          variant: 'none',
        },
        mainImage: heroImage1.id,
        secondaryImage: heroImage1.id,
        cta: [
          {
            link: {
              type: 'custom',
              url: '/about',
              label: locale === 'en' ? 'More about the company' : 'Детальніше про компанію',
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
                        ? 'Over 15 years of experience in the agribusiness industry. We cultivate over 50,000 hectares of land and produce high-quality corn for domestic and international markets. Our team consists of more than 500 qualified specialists.'
                        : 'Понад 15 років досвіду в галузі агробізнесу. Ми обробляємо понад 50 000 гектарів землі та виробляємо високоякісну кукурудзу для внутрішнього та міжнародного ринків. Наша команда складається з понад 500 кваліфікованих спеціалістів.',
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
        blockName: 'About Features Block',
        blockType: 'aboutFeatures',
        theme: 'light',
        title: {
          variant: 'colorAccent',
          alignment: 'left',
          subtitle: locale === 'en' ? 'Our Advantages' : 'Наші переваги',
          title: locale === 'en' ? 'Why {{choose}} us' : 'Чому {{обирають}} нас',
          description:
            locale === 'en'
              ? 'We offer comprehensive solutions for your business'
              : 'Ми пропонуємо комплексні рішення для вашого бізнесу',
        },
        sbg: {
          variant: 'gradient',
          gradientType: 'top',
        },
        mainImage: heroImage1.id,
        secondaryImage: heroImage2.id,
        features: [
          {
            icon: 'LuNavigation',
            title: locale === 'en' ? 'Precision Farming' : 'Точне землеробство',
            description:
              locale === 'en'
                ? 'Modern precision farming technologies with GPS monitoring'
                : 'Сучасні технології точного землеробства з GPS-моніторингом',
          },
          {
            icon: 'LuCheckSquare',
            title: locale === 'en' ? 'Quality Control' : 'Контроль якості',
            description:
              locale === 'en'
                ? 'Laboratory quality control from seed to finished product'
                : 'Лабораторний контроль якості від насіння до готової продукції',
          },
          {
            icon: 'LuLeaf',
            title: locale === 'en' ? 'Organic Production' : 'Органічне виробництво',
            description:
              locale === 'en'
                ? 'Organic production without GMOs and with minimal chemicals'
                : 'Органічне виробництво без ГМО та мінімум хімікатів',
          },
          {
            icon: 'LuTruck',
            title: locale === 'en' ? 'Logistics' : 'Логістика',
            description:
              locale === 'en'
                ? 'Our own fleet and railway terminals for fast delivery'
                : 'Власний автопарк та залізничні терміналі для швидкої доставки',
          },
          {
            icon: 'LuAward',
            title: locale === 'en' ? 'International Standards' : 'Міжнародні стандарти',
            description:
              locale === 'en'
                ? 'Certification according to international standards ISO 9001 and HACCP'
                : 'Сертифікація за міжнародними стандартами ISO 9001 та HACCP',
          },
          {
            icon: 'LuWarehouse',
            title: locale === 'en' ? 'Modern Elevators' : 'Сучасні елеватори',
            description:
              locale === 'en'
                ? 'Elevators with controlled temperature and humidity'
                : 'Елеватори з контрольованою температурою та вологістю',
          },
        ],
        stats: [
          {
            number: '15+',
            label: locale === 'en' ? 'Years of experience' : 'Років досвіду',
          },
          {
            number: '50,000+',
            label: locale === 'en' ? 'Hectares of land' : 'Гектарів землі',
          },
          {
            number: '500+',
            label: locale === 'en' ? 'Employees' : 'Співробітників',
          },
        ],
        cta: [
          {
            link: {
              type: 'custom',
              url: '/quality',
              label: locale === 'en' ? 'Learn about quality' : 'Дізнатися про якість',
              appearance: 'default',
            },
          },
        ],
      },

      {
        blockName: 'CTA Block - Main Action',
        blockType: 'cta',
        theme: 'light',
        sbg: {
          variant: 'none',
        },
        layoutStyle: 'sm',
        imageSide: 'right',
        image: heroImage1.id,
        marginTop: 'lg',
        marginBottom: 'lg',
        richText: {
          root: {
            type: 'root',
            children: [
              {
                type: 'heading',
                children: [
                  {
                    type: 'text',
                    text: locale === 'en' ? 'Ready to start a ' : 'Готові розпочати ',
                    version: 1,
                  },
                  {
                    type: 'text',
                    text: locale === 'en' ? 'partnership' : 'співпрацю',
                    format: ['bold'],
                    version: 1,
                  },
                  {
                    type: 'text',
                    text: '?',
                    version: 1,
                  },
                ],
                tag: 'h2',
                version: 1,
                direction: 'ltr',
                format: '',
                indent: 0,
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    text:
                      locale === 'en'
                        ? 'A partnership for many years'
                        : 'Партнерство на довгі роки',
                    format: ['bold'],
                    version: 1,
                  },
                ],
                version: 1,
                direction: 'ltr',
                format: '',
                indent: 0,
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    text:
                      locale === 'en'
                        ? 'Get the highest quality corn from a leading Ukrainian producer. We guarantee timely deliveries and competitive prices for your business.'
                        : 'Отримайте найвищу якість кукурудзи від провідного українського виробника. Ми гарантуємо своєчасні поставки та конкурентні ціни для вашого бізнесу.',
                    version: 1,
                  },
                ],
                version: 1,
                direction: 'ltr',
                format: '',
                indent: 0,
              },
            ],
            version: 1,
            direction: 'ltr',
            format: '',
            indent: 0,
          },
        },
        links: [
          {
            link: {
              type: 'custom',
              url: '/products',
              label: locale === 'en' ? 'View Products' : 'Переглянути продукцію',
            },
          },
          {
            link: {
              type: 'custom',
              url: '/contact',
              label: locale === 'en' ? 'Contact Us' : "Зв'язатися з нами",
            },
          },
        ],
      },

      {
        blockName: 'Feature Tabs Block',
        blockType: 'featureTabs',
        theme: 'dark',
        title: {
          variant: 'colorAccent',
          alignment: 'center',
          subtitle: locale === 'en' ? 'Our Production' : 'Наше виробництво',
          title: locale === 'en' ? 'How {{we}} work' : 'Як {{працюємо}} ми',
          description:
            locale === 'en'
              ? 'Full production cycle - from field to client'
              : 'Повний цикл виробництва - від поля до клієнта',
        },
        sbg: {
          variant: 'gradient',
          gradientType: 'top and bottom',
        },
        features: [
          {
            icon: 'LuSprout',
            title: locale === 'en' ? 'Cultivation' : 'Вирощування',
            description:
              locale === 'en'
                ? 'Innovative technologies and modern equipment'
                : 'Инноваційні технології та сучасне обладнання',
            content: {
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
                            ? 'No-till technologies, differentiated fertilizer application, drone and satellite NDVI monitoring of fields.'
                            : 'No-till технології, дифференційоване внесення добрив, моніторинг полів дронами та супутниковий аналіз NDVI.',
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
          },
          {
            icon: 'LuFactory',
            title: locale === 'en' ? 'Processing' : 'Переробка',
            description:
              locale === 'en' ? 'Full cycle of grain processing' : 'Повний цикл переробки зерна',
            content: {
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
                            ? 'Dryers with a capacity of 3000 t/day, cleaning, calibration, and packaging from 25 kg to 1200 kg big-bags.'
                            : 'Сушарки потужністю 3000 т/добу, очищення, калібрування та фасування від 25 кг до біг-бегів 1200 кг.',
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
          },
          {
            icon: 'LuTruck',
            title: locale === 'en' ? 'Logistics' : 'Логістика',
            description:
              locale === 'en' ? 'Reliable delivery worldwide' : 'Надійна доставка по всьому світу',
            content: {
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
                            ? 'Shipment by rail cars, trucks, containers through the ports of Odesa, Mykolaiv, Chornomorsk.'
                            : 'Відвантаження ж/д вагонами, автотранспортом, контейнерами через порти Одеса, Миколаїв, Чорноморськ.',
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
          },
        ],
        cta: [
          {
            link: {
              type: 'custom',
              url: '/logistics',
              label: locale === 'en' ? 'More about the process' : 'Детальніше про процес',
              appearance: 'default',
            },
          },
          {
            link: {
              type: 'custom',
              url: '/contact',
              label: locale === 'en' ? 'Request a consultation' : 'Замовити консультацію',
              appearance: 'outline',
            },
          },
        ],
      },

      {
        blockName: 'Feature Cards Block',
        blockType: 'featureCards',
        theme: 'dark',
        title: {
          variant: 'colorAccent',
          alignment: 'center',
          subtitle: locale === 'en' ? 'Our Capabilities' : 'Наші можливості',
          title: locale === 'en' ? 'What makes {{us}} better' : 'Що робить {{нас}} кращими',
          description:
            locale === 'en'
              ? 'A comprehensive approach from seed to finished product'
              : 'Комплексний підхід від насіння до готової продукції',
        },
        sbg: {
          variant: 'gradient and image',
          gradientType: 'top',
          img: heroImage1.id,
        },
        features: [
          {
            title: locale === 'en' ? 'Elite Corn Seeds' : 'Елітне насіння кукурудзи',
            description:
              locale === 'en'
                ? 'We use hybrid varieties from world-leading breeding companies with a yield potential of up to 12 t/ha'
                : 'Використовуємо гібридні сорти від світових селекційних компаній з потенціалом урожайності до 12 т/га',
            icon: 'LuCheck',
          },
          {
            title:
              locale === 'en'
                ? 'John Deere and Case IH Equipment'
                : 'Техніка John Deere та Case IH',
            description:
              locale === 'en'
                ? 'A fleet of 200+ units of modern equipment: combines, tractors, precision seeders, and fertilizer application systems'
                : 'Парк з 200+ одиниць сучасної техніки: комбайни, трактори, сівалки точного висіву та системи внесення добрив',
            icon: 'LuCheck',
          },
          {
            title: locale === 'en' ? 'Team of Agronomists' : 'Команда агрономів',
            description:
              locale === 'en'
                ? '50+ qualified agronomists and engineers with higher agricultural education and 10+ years of experience'
                : '50+ кваліфікованих агрономів та інженерів з вищою аграрною освітою та досвідом 10+ років',
            icon: 'LuCheck',
          },
          {
            title: locale === 'en' ? 'EU and US Certification' : 'Сертифікація EU та US',
            description:
              locale === 'en'
                ? 'We comply with EU, US standards, Global GAP, ISO 22000, Kosher, and Halal certificates'
                : 'Відповідаємо стандартам ЄС, США, сертифікати Global GAP, ISO 22000, кошерність та халяль',
            icon: 'LuCheck',
          },
        ],
      },

      {
        blockName: 'Feature Grid Block',
        blockType: 'featureGrid',
        theme: 'dark',
        title: {
          variant: 'colorAccent',
          alignment: 'center',
          subtitle: locale === 'en' ? 'Our Competitive Advantages' : 'Наші конкурентні переваги',
          title: locale === 'en' ? 'Why choose {{us}} specifically' : 'Чому обрати {{саме}} нас',
          description:
            locale === 'en'
              ? 'We stand out in the market with innovative technologies'
              : 'Ми відрізняємося на ринку інноваційними технологіями',
        },
        sbg: {
          variant: 'gradient',
          gradientType: 'top and bottom',
        },
        advantages: [
          {
            icon: 'LuLeaf',
            title: locale === 'en' ? 'Organic Production' : 'Органічне виробництво',
            description:
              locale === 'en'
                ? 'Certified organic production on 5000 ha using biopreparations and green manures'
                : 'Сертифіковане органічне виробництво на 5000 га з використанням біопрепаратів та сидератів',
          },
          {
            icon: 'LuMicroscope',
            title: locale === 'en' ? 'Quality Laboratory' : 'Лабораторія якості',
            description:
              locale === 'en'
                ? 'Our own accredited laboratory: analysis for mycotoxins, moisture, protein, aflatoxins, GMOs'
                : 'Власна акредитована лабораторія: аналіз на мікотоксини, вологість, білок, афлатоксини, ГМО',
          },
          {
            icon: 'LuSatellite',
            title: 'Precision Agriculture',
            description:
              locale === 'en'
                ? 'Variable rate seeding, fertility mapping, weather monitoring at 15 weather stations'
                : 'Змінна норма висіву, картографування родючості, моніторинг погоди на 15 метеостанціях',
          },
          {
            icon: 'LuWarehouse',
            title: locale === 'en' ? 'Elevator Complex' : 'Елеваторний комплекс',
            description:
              locale === 'en'
                ? 'Storage of 150,000 tons with active ventilation and a temperature control system'
                : 'Зберігання 150,000 тонн з активним вентилюванням та системою температурного контролю',
          },
          {
            icon: 'LuShield',
            title: locale === 'en' ? 'Crop Insurance' : 'Страхування врожаю',
            description:
              locale === 'en'
                ? 'Full insurance coverage for crops against natural disasters and adverse weather conditions'
                : 'Повне страхове покриття врожаю від природних катаклізмів та несприятливих погодних умов',
          },
          {
            icon: 'LuGlobe',
            title: locale === 'en' ? 'International Trade' : 'Міжнародна торгівля',
            description:
              locale === 'en'
                ? 'Export to 25+ countries with our own representative offices and logistics centers'
                : 'Експорт у 25+ країн світу з власними представництвами та логістичними центрами',
          },
        ],
      },

      {
        blockName: 'Archive Block - Latest Posts',
        blockType: 'archive',
        theme: 'light',
        title: {
          variant: 'colorAccent',
          alignment: 'center',
          subtitle: locale === 'en' ? 'News and Articles' : 'Новини і статті',
          title: locale === 'en' ? '{{Latest}} news' : '{{Останні}} новини',
          description:
            locale === 'en'
              ? 'Follow the news of the company and the agricultural industry'
              : 'Слідкуйте за новинами компанії та аграрної галузі',
        },
        sbg: {
          variant: 'none',
        },
        populateBy: 'collection',
        relationTo: 'posts',
        limit: 8,
        categories: [],
      },

      {
        blockName: 'Feature Gallery Block',
        blockType: 'featureGallery',
        theme: 'dark',
        title: {
          variant: 'colorAccent',
          alignment: 'center',
          subtitle: locale === 'en' ? 'Our Infrastructure' : 'Наша інфраструктура',
          title: locale === 'en' ? 'See how we {{work}}' : 'Подивіть як ми {{працюємо}}',
          description:
            locale === 'en'
              ? 'Modern facilities and equipment for the production of quality products'
              : 'Сучасні потужності та обладнання для виробництва якісної продукції',
        },
        sbg: {
          variant: 'gradient and image',
          gradientType: 'top',
          img: heroImage1.id,
        },
        features: [
          {
            icon: 'LuMap',
            title: locale === 'en' ? 'Modern Fields' : 'Сучасні поля',
            description:
              locale === 'en'
                ? 'Large areas for growing corn'
                : 'Великі площі під вирощування кукурудзи',
            image: img1.id,
            link: {
              type: 'custom',
              url: '/about',
              label: locale === 'en' ? 'Learn more' : 'Дізнатися більше',
            },
          },
          {
            icon: 'LuWarehouse',
            title: locale === 'en' ? 'Granaries' : 'Зерносховища',
            description:
              locale === 'en'
                ? 'Modern elevators for grain storage'
                : 'Сучасні елеватори для зберігання зерна',
            image: heroImage1.id,
            link: {
              type: 'custom',
              url: '/quality',
              label: locale === 'en' ? 'Learn more' : 'Дізнатися більше',
            },
          },
          {
            icon: 'LuTruck',
            title: locale === 'en' ? 'Equipment' : 'Техніка',
            description:
              locale === 'en'
                ? 'The most modern agricultural machinery'
                : 'Найсучасніша сільськогосподарська техніка',
            image: img3.id,
            link: {
              type: 'custom',
              url: '/logistics',
              label: locale === 'en' ? 'Learn more' : 'Дізнатися більше',
            },
          },
          {
            icon: 'LuFactory',
            title: locale === 'en' ? 'Processing Facilities' : 'Переробні потужності',
            description:
              locale === 'en'
                ? 'Modern lines for drying and processing grain'
                : 'Сучасні лінії сушіння та переробки зерна',
            image: heroImage2.id,
            link: {
              type: 'custom',
              url: '/quality',
              label: locale === 'en' ? 'Learn more' : 'Дізнатися більше',
            },
          },
        ],
        stats: [
          {
            number: '50,000+',
            label: locale === 'en' ? 'Hectares of land' : 'Гектарів землі',
            description:
              locale === 'en' ? 'Areas for growing corn' : 'Площі під вирощування кукурудзи',
          },
          {
            number: '15+',
            label: locale === 'en' ? 'Years of experience' : 'Років досвіду',
            description: locale === 'en' ? 'In the agribusiness market' : 'На ринку агробізнесу',
          },
          {
            number: '500+',
            label: locale === 'en' ? 'Employees' : 'Співробітників',
            description: locale === 'en' ? 'Qualified specialists' : 'Кваліфіковані фахівці',
          },
        ],
      },

      {
        blockName: 'Testimonial Block',
        blockType: 'testimonial',
        theme: 'light',
        title: {
          variant: 'colorAccent',
          alignment: 'center',
          subtitle: locale === 'en' ? 'Customer Testimonials' : 'Відгуки клієнтів',
          title: locale === 'en' ? 'What they {{say}} about us' : 'Що {{кажуть}} про нас',
          description:
            locale === 'en'
              ? 'The trust of our partners is our greatest asset'
              : 'Довіра наших партнерів - наша найбільша цінність',
        },
        sbg: {
          variant: 'gradient',
          gradientType: 'bottom',
        },
        testimonials: [
          {
            name: 'Ivan Petrenko',
            role: locale === 'en' ? 'Director of "Agroexport" LLC' : 'Директор ТОВ "Агроекспорт"',
            rating: 5,
            avatar: heroImage2.id,
            content:
              locale === 'en'
                ? 'We have been working with this agricultural holding for 5 years. Always high quality and timely delivery.'
                : 'Працюємо з цим агрохолдингом вже 5 років. Завжди висока якість та своєчасна доставка.',
          },
          {
            name: 'Maria Kovalenko',
            role:
              locale === 'en'
                ? 'Representative of an international company'
                : 'Представник міжнародної компанії',
            rating: 5,
            avatar: heroImage1.id,
            content:
              locale === 'en'
                ? 'The best corn on the market. I recommend it to all partners.'
                : 'Найкраща кукурудза на ринку. Рекомендую всім партнерам.',
          },
          {
            name: 'Oleksandr Sydorenko',
            role: locale === 'en' ? 'Head of Procurement' : 'Керівник закупівель',
            rating: 4,
            avatar: img2.id,
            content:
              locale === 'en'
                ? 'A professional approach and reliability are what distinguish this company.'
                : 'Професійний підхід та надійність - це те, що відрізняє цю компанію.',
          },
        ],
      },

      {
        blockName: 'Archive Block - Latest Products',
        blockType: 'archive',
        theme: 'light',
        title: {
          variant: 'colorAccent',
          alignment: 'center',
          subtitle: locale === 'en' ? 'Our Products' : 'Наша продукція',
          title: locale === 'en' ? '{{Quality}} corn' : '{{Якісна}} кукурудза',
          description:
            locale === 'en'
              ? 'High-quality corn for various needs'
              : 'Високоякісна кукурудза для різних потреб',
        },
        sbg: {
          variant: 'none',
        },
        populateBy: 'collection',
        relationTo: 'products',
        limit: 8,
        categories: [],
      },

      {
        blockName: 'FAQ Block',
        blockType: 'faq',
        theme: 'light',
        title: {
          variant: 'colorAccent',
          alignment: 'left',
          subtitle: locale === 'en' ? 'Popular Questions' : 'Популярні питання',
          title: locale === 'en' ? '{{Frequently}} asked questions' : '{{Часто}} задавані питання',
          description:
            locale === 'en'
              ? 'Answers to the most popular questions about our products'
              : 'Відповіді на найбільш популярні питання про нашу продукцію',
        },
        sbg: {
          variant: 'gradient',
          gradientType: 'top',
        },
        image: heroImage1.id,
        statistics: [
          {
            title: locale === 'en' ? 'Minimum volume' : 'Мінімальний обсяг',
            value: '100 tons',
          },
          {
            title: locale === 'en' ? 'Maximum volume' : 'Максимальний обсяг',
            value: '10,000 tons',
          },
        ],
        additionalInfoTitle: locale === 'en' ? 'Need a consultation?' : 'Потрібна консультація?',
        additionalInfo:
          locale === 'en'
            ? 'Our experts are ready to answer all your questions. Contact us by phone +380 44 123 45 67 or email info@agroholding.ua'
            : 'Наші експерти готові відповісти на всі ваші запитання. Звертайтеся за телефоном +380 44 123 45 67 або напишіть на info@agroholding.ua',
        faqs: [
          {
            question:
              locale === 'en'
                ? 'What is the minimum order volume?'
                : 'Який мінімальний обсяг замовлення?',
            answer:
              locale === 'en'
                ? 'The minimum order volume is 100 tons of corn.'
                : 'Мінімальний обсяг замовлення становить 100 тонн кукурудзи.',
          },
          {
            question:
              locale === 'en'
                ? 'Do you provide quality certificates?'
                : 'Чи надаєте ви сертифікати якості?',
            answer:
              locale === 'en'
                ? 'Yes, all our products are accompanied by international quality certificates.'
                : 'Так, вся наша продукція супроводжується міжнародними сертифікатами якості.',
          },
          {
            question:
              locale === 'en'
                ? 'What delivery methods do you offer?'
                : 'Які способи доставки ви пропонуєте?',
            answer:
              locale === 'en'
                ? 'We offer delivery by road, rail, and sea transport.'
                : 'Ми пропонуємо доставку автомобільним, залізничним та морським транспортом.',
          },
          {
            question:
              locale === 'en'
                ? 'Can we visit your production facilities?'
                : 'Чи можна відвідати ваше виробництво?',
            answer:
              locale === 'en'
                ? 'Yes, we organize tours for potential clients by prior arrangement.'
                : 'Так, ми організовуємо екскурсії для потенційних клієнтів за попереднім узгодженням.',
          },
          {
            question:
              locale === 'en'
                ? 'What are the storage terms for corn?'
                : 'Які терміни зберігання кукурудзи?',
            answer:
              locale === 'en'
                ? 'With proper storage in our elevators, corn retains its quality for up to 2 years.'
                : 'При правильному зберіганні в наших елеваторах кукурудза зберігає якість до 2 років.',
          },
        ],
      },

      {
        blockName: 'Contact Us Block',
        blockType: 'contactUs',
        theme: 'dark',
        title: {
          variant: 'colorAccent',
          alignment: 'left',
          subtitle: locale === 'en' ? 'Contacts' : 'Контакти',
          title: locale === 'en' ? '{{Contact}} us' : "{{Зв'яжіться}} з нами",
          description:
            locale === 'en'
              ? 'We are always open to new partnerships'
              : 'Ми завжди відкриті для нових партнерств',
        },
        sbg: {
          variant: 'gradient',
          gradientType: 'top',
        },
        blocks: [
          {
            blockType: 'formBlock',
            enableIntro: false,
            introContent: {
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
                            ? 'Fill out the form and our manager will contact you shortly'
                            : "Заповніть форму і наш менеджер зв'яжеться з вами найближчим часом",
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
            form: contactForm.id,
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
              ? 'Special conditions for large orders and regular partners'
              : 'Окремі умови для великих замовлень та постійних партнерів',
        },
      },
    ],
    meta: {
      title:
        locale === 'en'
          ? 'Ukrainian agricultural holding - corn producer'
          : 'Український агрохолдинг - виробник кукурудзи',
      description:
        locale === 'en'
          ? 'A leading Ukrainian agricultural holding for the cultivation and export of high-quality corn. Over 15 years of experience in the market.'
          : 'Провідний український агрохолдинг з вирощування та експорту високоякісної кукурудзи. Понад 15 років досвіду на ринку.',
      image: metaImage.id,
    },
  };
};
