import type { RequiredDataFromCollectionSlug } from 'payload';

import type { Media } from '@/payload-types';

type LogisticsPageArgs = {
  heroImage1: Media;
  blockImage1: Media;
  blockImage2: Media;
};

export const logisticsPage = (
  locale: 'en' | 'uk',
  args: LogisticsPageArgs
): RequiredDataFromCollectionSlug<'pages'> => {
  const { heroImage1, blockImage1, blockImage2 } = args;

  return {
    slug: 'logistics',
    _status: 'published',
    title: locale === 'en' ? 'Logistics and Delivery' : 'Логістика та доставка',
    layout: [
      {
        blockName: 'Feature Tabs Block - Logistics Process',
        blockType: 'featureTabs',
        theme: 'dark',
        title: {
          variant: 'colorAccent',
          alignment: 'center',
          title: locale === 'en' ? 'How our {{logistics}} work' : 'Як працює наша {{логістика}}',
          description:
            locale === 'en'
              ? 'Full cycle of logistics services from storage to delivery'
              : 'Повний цикл логістичних послуг від зберігання до доставки',
        },
        sbg: {
          variant: 'gradient',
          gradientType: 'top and bottom',
        },
        features: [
          {
            icon: 'LuWarehouse',
            title: locale === 'en' ? 'Storage' : 'Зберігання',
            description:
              locale === 'en'
                ? 'Modern elevators with controlled conditions'
                : 'Сучасні елеватори з контрольованими умовами',
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
                            ? '15 elevators with a total capacity of 800,000 tons. Active ventilation system, temperature and humidity control, pest protection.'
                            : '15 елеваторів загальною потужністю 800,000 тонн. Система активної вентиляції, контроль температури та вологості, захист від шкідників.',
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
            title: locale === 'en' ? 'Road Transport' : 'Автоперевезення',
            description:
              locale === 'en'
                ? 'Our own fleet and partner carriers'
                : 'Власний автопарк та партнерські перевізники',
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
                            ? '200+ trucks and semi-trailers, GPS tracking, delivery throughout Ukraine and EU countries in 24-72 hours.'
                            : '200+ вантажних автомобілів та напівпричепів, GPS-відстеження, доставка по всій Україні та країнах ЄС за 24-72 години.',
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
            icon: 'LuTrainFront',
            title: locale === 'en' ? 'Rail Transport' : 'Залізничні перевезення',
            description:
              locale === 'en'
                ? 'Shipment by wagons and containers'
                : 'Відвантаження вагонами та контейнерами',
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
                            ? 'Our own railway branches at all elevators, shipment by grain carriers, hopper-dosers, and containers to ports.'
                            : 'Власні залізничні гілки на всіх елеваторах, відвантаження зерновозами, хопер-дозаторами та контейнерами до портів.',
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
            icon: 'LuShip',
            title: locale === 'en' ? 'Sea Freight' : 'Морські перевезення',
            description:
              locale === 'en'
                ? 'Export deliveries via seaports'
                : 'Експортні поставки через морські порти',
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
                            ? 'Shipment through the ports of Odesa, Mykolaiv, Chornomorsk. Working with container lines and bulk carriers.'
                            : "Відвантаження через порти Одеса, Миколаїв, Чорноморськ. Робота з контейнерними лініями та балк-кер'єрами.",
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
              url: '/contact',
              label: locale === 'en' ? 'Calculate delivery' : 'Розрахувати доставку',
              appearance: 'default',
            },
          },
          {
            link: {
              type: 'custom',
              url: '/products',
              label: locale === 'en' ? 'Our Products' : 'Наша продукція',
              appearance: 'outline',
            },
          },
        ],
      },

      {
        blockName: 'Feature Gallery Block - Infrastructure',
        blockType: 'featureGallery',
        theme: 'dark',
        title: {
          variant: 'colorAccent',
          alignment: 'center',
          subtitle: locale === 'en' ? 'Logistics Infrastructure' : 'Логістична інфраструктура',
          title: locale === 'en' ? 'Our {{facilities}}' : 'Наші {{потужності}}',
          description:
            locale === 'en'
              ? 'Modern equipment and infrastructure for efficient logistics'
              : 'Сучасне обладнання та інфраструктура для ефективної логістики',
        },
        sbg: {
          variant: 'gradient and image',
          gradientType: 'top and bottom',
          img: blockImage2.id,
        },
        features: [
          {
            icon: 'LuWarehouse',
            title: locale === 'en' ? 'Elevator Complexes' : 'Елеваторні комплекси',
            description:
              locale === 'en'
                ? 'Modern granaries with controlled conditions'
                : 'Сучасні зерносховища з контрольованими умовами',
            image: heroImage1.id,
            link: {
              type: 'custom',
              url: '/quality',
              label: locale === 'en' ? 'Quality Control' : 'Контроль якості',
            },
          },
          {
            icon: 'LuTruck',
            title: locale === 'en' ? 'Vehicle Fleet' : 'Автопарк',
            description:
              locale === 'en'
                ? 'Our own fleet of specialized vehicles'
                : 'Власний парк спеціалізованої техніки',
            image: heroImage1.id,
            link: {
              type: 'custom',
              url: '/contact',
              label: locale === 'en' ? 'Order delivery' : 'Замовити доставку',
            },
          },
          {
            icon: 'LuTrainFront',
            title: locale === 'en' ? 'Railway Terminals' : 'Залізничні терміналі',
            description:
              locale === 'en'
                ? 'Our own railway branches for fast shipment'
                : 'Власні залізничні гілки для швидкого відвантаження',
            image: blockImage1.id,
            link: {
              type: 'custom',
              url: '/contact',
              label: locale === 'en' ? 'More details' : 'Детальніше',
            },
          },
          {
            icon: 'LuMapPin',
            title: locale === 'en' ? 'Logistics Centers' : 'Логістичні центри',
            description:
              locale === 'en'
                ? 'Strategically located centers throughout Ukraine'
                : 'Стратегічно розміщені центри по всій Україні',
            image: blockImage1.id,
            link: {
              type: 'custom',
              url: '/about',
              label: locale === 'en' ? 'Our locations' : 'Наші локації',
            },
          },
        ],
        stats: [
          {
            number: '800,000',
            label: locale === 'en' ? 'Tons of storage' : 'Тонн зберігання',
            description:
              locale === 'en' ? 'Total elevator capacity' : 'Загальна потужність елеваторів',
          },
          {
            number: '200+',
            label: locale === 'en' ? 'Units of equipment' : 'Одиниць техніки',
            description: locale === 'en' ? 'Our own vehicle fleet' : 'Власний автопарк',
          },
          {
            number: '15',
            label: locale === 'en' ? 'Elevators' : 'Елеваторів',
            description: locale === 'en' ? 'Throughout Ukraine' : 'По всій Україні',
          },
        ],
      },

      {
        blockName: 'Testimonial Block - Logistics Partners',
        blockType: 'testimonial',
        theme: 'light',
        title: {
          variant: 'colorAccent',
          alignment: 'center',
          subtitle: locale === 'en' ? 'Customer Reviews' : 'Відгуки клієнтів',
          title:
            locale === 'en'
              ? 'What they say about our {{logistics}}'
              : 'Що кажуть про нашу {{логістику}}',
          description:
            locale === 'en'
              ? 'Experience of cooperation with our logistics services'
              : 'Досвід співпраці з нашими логістичними послугами',
        },
        sbg: {
          variant: 'none',
        },
        testimonials: [
          {
            name: 'Anatoliy Melnyk',
            role:
              locale === 'en' ? 'Director of "Zerno-Export" LLC' : 'Директор ТОВ "Зерно-Експорт"',
            rating: 5,
            avatar: blockImage1.id,
            content:
              locale === 'en'
                ? "We have been cooperating with the agricultural holding's logistics for 5 years. Always timely delivery, a professional team, and competitive prices. GPS tracking allows us to monitor every delivery."
                : 'Співпрацюємо з логістикою агрохолдингу вже 5 років. Завжди вчасна доставка, професійна команда та конкурентні ціни. GPS-відстеження дозволяє контролювати кожну поставку.',
          },
          {
            name: 'Svitlana Koval',
            role:
              locale === 'en'
                ? 'Logistics specialist at "Grain Trading Company"'
                : 'Логіст "Grain Trading Company"',
            rating: 5,
            avatar: heroImage1.id,
            content:
              locale === 'en'
                ? 'The best logistics company on the market. Their own vehicle fleet and elevators ensure the reliability of supplies. I recommend them to all partners.'
                : 'Найкраща логістична компанія на ринку. Власний автопарк та елеватори забезпечують надійність поставок. Рекомендую всім партнерам.',
          },
          {
            name: 'Ihor Savchenko',
            role: locale === 'en' ? 'Procurement Manager' : 'Менеджер з закупівель',
            rating: 5,
            avatar: blockImage1.id,
            content:
              locale === 'en'
                ? 'The speed of order processing and the quality of logistics services are impressive. Delivery is precisely on time, and paperwork is without delays.'
                : 'Вражає швидкість обробки замовлень та якість логістичних послуг. Доставка точно в термін, документообіг без затримок.',
          },
        ],
      },

      {
        blockName: 'Contact Us Block - Logistics Services',
        blockType: 'contactUs',
        theme: 'dark',
        title: {
          variant: 'colorAccent',
          alignment: 'left',
          subtitle: locale === 'en' ? 'Logistics Services' : 'Логістичні послуги',
          title: locale === 'en' ? 'Need a {{delivery}}?' : 'Потрібна {{доставка}}?',
          description:
            locale === 'en'
              ? 'We will calculate the optimal route and cost of delivery'
              : 'Розрахуємо оптимальний маршрут та вартість доставки',
        },
        sbg: {
          variant: 'gradient',
          gradientType: 'top',
        },
        blocks: [
          {
            blockType: 'formBlock',
            enableIntro: false,
            form: 1, //
          },
        ],
        contactDisplay: {
          showPhones: true,
          showEmails: true,
          showAddresses: true,
          showWorkingHours: true,
        },
        corporate: {
          title:
            locale === 'en'
              ? 'Logistics services for third parties'
              : 'Логістичні послуги для третіх осіб',
          description:
            locale === 'en'
              ? 'We provide storage and transportation services for third-party clients'
              : 'Надаємо послуги зберігання та транспортування для сторонніх клієнтів',
        },
      },
    ],
    meta: {
      description:
        locale === 'en'
          ? 'Logistics services of the agricultural holding: own elevators, vehicle fleet, railway terminals, delivery in Ukraine and export.'
          : 'Логістичні послуги агрохолдингу: власні елеватори, автопарк, залізничні терміналі, доставка по Україні та експорт.',
      image: heroImage1.id,
      title:
        locale === 'en'
          ? 'Logistics and delivery - our own infrastructure'
          : 'Логістика та доставка - власна інфраструктура',
    },
  };
};
