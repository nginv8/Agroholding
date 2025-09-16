import type { RequiredDataFromCollectionSlug } from 'payload';

import type { Form, Media } from '@/payload-types';

type ContactPageArgs = {
  // heroImage1 не використовується, але залишаємо для сумісності типів
  heroImage1: Media;
  metaImage: Media;
  contactForm: Form;
};

export const contactPage = (
  locale: 'en' | 'uk',
  args: ContactPageArgs
): RequiredDataFromCollectionSlug<'pages'> => {
  const { metaImage, contactForm } = args;

  return {
    slug: 'contact',
    _status: 'published',
    title: locale === 'en' ? 'Contact Us' : 'Контакти',
    layout: [
      {
        blockName: 'Contact Us Block - Get in Touch',
        blockType: 'contactUs',
        theme: 'dark',
        title: {
          variant: 'colorAccent',
          alignment: 'left',
          subtitle: locale === 'en' ? 'Contacts' : 'Контакти',
          title: locale === 'en' ? '{{Contact}} us' : "{{Зв'яжіться}} з нами",
          description:
            locale === 'en'
              ? 'We are always open to new partnerships and ready to answer your questions'
              : 'Ми завжди відкриті для нових партнерств та готові відповісти на ваші запитання',
        },
        sbg: {
          variant: 'gradient',
          gradientType: 'top',
        },
        blocks: [
          {
            blockType: 'formBlock',
            enableIntro: false,
            // 💡 Використовуємо ID переданої форми
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
              ? 'Special conditions for large volumes and long-term contracts'
              : 'Спеціальні умови для великих обсягів та довгострокових контрактів',
        },
      },
    ],
    meta: {
      title:
        locale === 'en'
          ? 'Contact Us - Ukrainian Agricultural Holding'
          : 'Контакти - Український агрохолдинг',
      description:
        locale === 'en'
          ? 'Contact us for a consultation regarding the supply of high-quality corn. Contacts of the Ukrainian agricultural holding.'
          : 'Звʼяжіться з нами для отримання консультації щодо постачання високоякісної кукурудзи. Контакти українського агрохолдингу.',
      image: metaImage.id,
    },
  };
};
