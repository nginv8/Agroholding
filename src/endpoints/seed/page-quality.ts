import type { RequiredDataFromCollectionSlug } from 'payload';

import type { Media } from '@/payload-types';

type QualityPageArgs = {
  heroImage1: Media;
  blockImage1: Media;
  blockImage2: Media;
};

export const qualityPage = (
  locale: 'en' | 'uk',
  args: QualityPageArgs
): RequiredDataFromCollectionSlug<'pages'> => {
  const { heroImage1 } = args;
  return {
    slug: 'quality',
    _status: 'published',
    title:
      locale === 'en' ? 'Quality Control and Certification' : 'Контроль якості та сертифікація',
    layout: [
      {
        blockName: 'Feature Cards Block - Quality Systems',
        blockType: 'featureCards',
        theme: 'dark',
        title: {
          variant: 'colorAccent',
          alignment: 'center',
          subtitle: locale === 'en' ? 'Quality Control System' : 'Система контролю якості',
          title:
            locale === 'en'
              ? 'The highest {{standards}} of quality'
              : 'Найвищі {{стандарти}} якості',
          description:
            locale === 'en'
              ? 'Quality control at every stage of production'
              : 'Контроль якості на кожному етапі виробництва',
        },
        sbg: {
          variant: 'image',
          img: heroImage1.id,
        },
        features: [
          {
            title: locale === 'en' ? 'Laboratory Control' : 'Лабораторний контроль',
            description:
              locale === 'en'
                ? 'Our own accredited laboratory conducts over 60 types of analyses: moisture, protein, starch, mycotoxins, aflatoxins, GMOs'
                : 'Власна акредитована лабораторія проводить понад 60 видів аналізів: вологість, білок, крохмаль, мікотоксини, афлатоксини, ГМО',
            icon: 'LuMicroscope',
          },
          {
            title: locale === 'en' ? 'International Certificates' : 'Міжнародні сертифікати',
            description:
              locale === 'en'
                ? 'Certification according to ISO 9001:2015, ISO 22000, HACCP, Global GAP, BRC, Kosher, and Halal standards'
                : 'Сертифікація за стандартами ISO 9001:2015, ISO 22000, HACCP, Global GAP, BRC, кошерність та халяль',
            icon: 'LuAward',
          },
          {
            title: locale === 'en' ? 'Temperature Control' : 'Контроль температури',
            description:
              locale === 'en'
                ? 'Active ventilation and temperature control system in elevators to preserve grain quality'
                : 'Система активної вентиляції та контролю температури в елеваторах для збереження якості зерна',
            icon: 'LuThermometer',
          },
          {
            title: locale === 'en' ? 'Product Traceability' : 'Відстеження продукції',
            description:
              locale === 'en'
                ? 'Full traceability from field to consumer using QR codes and blockchain technologies'
                : 'Повна відстежуваність від поля до споживача з використанням системи QR-кодів та блокчейн технологій',
            icon: 'LuQrCode',
          },
        ],
      },
      {
        blockName: 'Feature Grid Block - Quality Advantages',
        blockType: 'featureGrid',
        theme: 'light',
        title: {
          variant: 'colorAccent',
          alignment: 'center',
          subtitle: locale === 'en' ? 'Our Advantages' : 'Наші переваги',
          title: locale === 'en' ? 'Why choose {{our}} quality' : 'Чому обирають {{нашу}} якість',
          description:
            locale === 'en'
              ? 'Technologies and processes that ensure the highest product quality'
              : 'Технології та процеси, що забезпечують найвищу якість продукції',
        },
        sbg: {
          variant: 'none',
        },
        advantages: [
          {
            icon: 'LuFlaskConical',
            title: locale === 'en' ? 'Our Own Laboratory' : 'Власна лабораторія',
            description:
              locale === 'en'
                ? 'State-of-the-art equipment: NIR analyzers, chromatographs, microscopes for complete grain quality analysis'
                : 'Найсучасніше обладнання: NIR-аналізатори, хроматографи, мікроскопи для повного аналізу якості зерна',
          },
          {
            icon: 'LuShieldCheck',
            title: locale === 'en' ? 'HACCP System' : 'HACCP система',
            description:
              locale === 'en'
                ? 'An implemented system for Hazard Analysis and Critical Control Points at all stages of production'
                : 'Впроваджена система аналізу небезпечних факторів та критичних контрольних точок на всіх етапах виробництва',
          },
          {
            icon: 'LuLeaf',
            title: locale === 'en' ? 'Organic Production' : 'Органічне виробництво',
            description:
              locale === 'en'
                ? 'Certified organic production on 5000 ha without GMOs and with minimal chemical use'
                : 'Сертифіковане органічне виробництво на 5000 га без використання ГМО та з мінімальним застосуванням хімікатів',
          },
          {
            icon: 'LuDatabase',
            title: locale === 'en' ? 'Quality Database' : 'База даних якості',
            description:
              locale === 'en'
                ? 'Electronic database with the results of all analyses to track quality dynamics and for quick search'
                : 'Електронна база даних з результатами всіх аналізів для відстеження динаміки якості та швидкого пошуку',
          },
          {
            icon: 'LuTruck',
            title: locale === 'en' ? 'Logistics Control' : 'Логістичний контроль',
            description:
              locale === 'en'
                ? 'Specialized vehicles and containers to maintain quality during transportation'
                : 'Спеціалізовані транспортні засоби та контейнери для збереження якості під час перевезення',
          },
          {
            icon: 'LuUsers',
            title: locale === 'en' ? 'Qualified Personnel' : 'Кваліфікований персонал',
            description:
              locale === 'en'
                ? 'A team of 25+ quality control specialists with higher agricultural and chemical education'
                : 'Команда з 25+ спеціалістів з контролю якості з вищою аграрною та хімічною освітою',
          },
        ],
      },
      {
        blockName: 'FAQ Block - Quality Questions',
        blockType: 'faq',
        theme: 'light',
        title: {
          variant: 'colorAccent',
          alignment: 'left',
          subtitle: locale === 'en' ? 'Questions about quality' : 'Питання про якість',
          title: locale === 'en' ? '{{Frequently}} asked questions' : '{{Часто}} задавані питання',
          description:
            locale === 'en'
              ? 'Answers to the most popular questions about our product quality control'
              : 'Відповіді на найпопулярніші питання про контроль якості нашої продукції',
        },
        sbg: {
          variant: 'gradient',
          gradientType: 'top and bottom',
        },
        image: heroImage1.id,
        statistics: [
          {
            title: locale === 'en' ? 'Analyses per day' : 'Аналізів щодня',
            value: '200+',
          },
          {
            title: locale === 'en' ? 'Control parameters' : 'Параметрів контролю',
            value: '60+',
          },
        ],
        additionalInfoTitle:
          locale === 'en' ? 'Need a quality consultation?' : 'Потрібна консультація щодо якості?',
        additionalInfo:
          locale === 'en'
            ? 'Our quality control experts are ready to answer all your questions. Contact us by phone +380 44 123 45 67 or email quality@agroholding.ua'
            : 'Наші експерти з контролю якості готові відповісти на всі ваші питання. Звертайтеся за телефоном +380 44 123 45 67 або напишіть на quality@agroholding.ua',
        faqs: [
          {
            question:
              locale === 'en'
                ? 'What quality certificates does your product have?'
                : 'Які сертифікати якості має ваша продукція?',
            answer:
              locale === 'en'
                ? 'Our corn is certified according to ISO 9001, ISO 22000, HACCP, Global GAP, BRC standards. We also have Kosher and Halal certificates.'
                : 'Наша кукурудза сертифікована за стандартами ISO 9001, ISO 22000, HACCP, Global GAP, BRC. Також маємо сертифікати кошерності та халяль.',
          },
          {
            question:
              locale === 'en'
                ? 'How often is laboratory control conducted?'
                : 'Як часто проводиться лабораторний контроль?',
            answer:
              locale === 'en'
                ? 'Laboratory control is conducted daily. Each batch of grain undergoes mandatory analysis before shipment.'
                : 'Лабораторний контроль проводиться щодня. Кожна партія зерна проходить обовʼязковий аналіз перед відвантаженням.',
          },
          {
            question: locale === 'en' ? 'Do you use GMOs?' : 'Чи використовуєте ви ГМО?',
            answer:
              locale === 'en'
                ? 'No, we strictly do not use GMOs. All our products undergo a mandatory test for the absence of genetically modified organisms.'
                : 'Ні, ми категорично не використовуємо ГМО. Вся наша продукція проходить обовʼязковий тест на відсутність генетично модифікованих організмів.',
          },
          {
            question:
              locale === 'en'
                ? 'What quality parameters are controlled?'
                : 'Які параметри якості контролюються?',
            answer:
              locale === 'en'
                ? 'We control over 60 parameters: moisture, protein, starch, gluten, ash, mycotoxins, aflatoxins, heavy metals, and other indicators.'
                : 'Контролюємо понад 60 параметрів: вологість, білок, крохмаль, клейковину, зольність, мікотоксини, афлатоксини, важкі метали та інші показники.',
          },
          {
            question:
              locale === 'en'
                ? 'How is quality ensured during storage?'
                : 'Як забезпечується якість під час зберігання?',
            answer:
              locale === 'en'
                ? 'We use an active ventilation system, temperature and humidity control, regular fumigation, and pest monitoring.'
                : 'Використовуємо систему активної вентиляції, контроль температури та вологості, регулярну фумігацію та моніторинг шкідників.',
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
          ? 'Corn quality control: international certificates, own laboratory, HACCP system, organic production without GMOs.'
          : 'Контроль якості кукурудзи: міжнародні сертифікати, власна лабораторія, HACCP система, органічне виробництво без ГМО.',
      image: heroImage1.id,
      title:
        locale === 'en'
          ? 'Quality control and certification - international standards'
          : 'Контроль якості та сертифікація - міжнародні стандарти',
    },
  };
};
