import { RequiredDataFromCollectionSlug } from 'payload';

export const contactForm = (locale: 'en' | 'uk'): RequiredDataFromCollectionSlug<'forms'> => ({
  title: locale === 'en' ? 'Contact Form' : 'Контактна форма',
  confirmationType: 'message',
  confirmationMessage: {
    root: {
      type: 'root',
      children: [
        {
          type: 'heading',
          tag: 'h2',
          children: [
            {
              type: 'text',
              text: locale === 'en' ? 'Thank you for your message!' : 'Дякуємо за звернення!',
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
              text:
                locale === 'en'
                  ? 'Your message has been successfully sent and received by our team. Thank you for your interest in our agricultural services and products.'
                  : 'Ваше повідомлення успішно надіслано та отримано нашою командою. Дякуємо за інтерес до наших сільськогосподарських послуг та продукції.',
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
                  ? 'Our specialists will review your request and contact you within 24-48 hours on business days. If your request is urgent, please call us directly.'
                  : "Наші спеціалісти розглянуть ваш запит та зв'яжуться з вами протягом 24-48 годин у робочі дні. Якщо ваш запит терміновий, будь ласка, зателефонуйте нам безпосередньо.",
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
  emails: [
    {
      emailFrom: '"Payload" <demo@payloadcms.com>',
      emailTo: '{{email}}',
      subject: locale === 'en' ? "We've received your message" : 'Ми отримали ваше повідомлення',
      message: {
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
                      ? 'Your contact form submission was successfully received. We will get back to you shortly.'
                      : 'Ваше звернення через контактну форму було успішно отримано. Ми звʼяжемося з вами найближчим часом.',
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
  ],
  fields: [
    {
      name: 'full-name',
      blockName: 'full-name',
      blockType: 'text',
      label: locale === 'en' ? 'Full Name' : "Повне ім'я",
      required: true,
      width: 100,
    },
    {
      name: 'email',
      blockName: 'email',
      blockType: 'email',
      label: 'Email',
      required: true,
      width: 100,
    },
    {
      name: 'phone',
      blockName: 'phone',
      blockType: 'text',
      label: locale === 'en' ? 'Phone' : 'Телефон',
      required: false,
      width: 100,
    },
    {
      name: 'message',
      blockName: 'message',
      blockType: 'textarea',
      label: locale === 'en' ? 'Message' : 'Повідомлення',
      required: true,
      width: 100,
    },
  ],
  submitButtonLabel: locale === 'en' ? 'Submit' : 'Надіслати',
});
