import type { GlobalConfig } from 'payload';

import { iconSelect } from '@/fields/CustomFields/iconSelect';

import { revalidateContactInfo } from './hooks/revalidateContactInfo';

export const ContactInfo: GlobalConfig = {
  slug: 'contactInfo',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'phones',
      type: 'group',
      label: {
        en: 'Phone Numbers',
        uk: 'Номери телефонів',
      },
      fields: [
        {
          type: 'row',
          fields: [
            iconSelect(),
            {
              name: 'title',
              type: 'text',
              label: {
                en: 'title',
                uk: 'Заголовок',
              },
              localized: true,
              defaultValue: 'Phones',
            },
            {
              name: 'label',
              type: 'text',
              label: {
                en: 'Label',
                uk: 'Назва',
              },
              localized: true,
            },
          ],
        },
        {
          name: 'items',
          type: 'array',
          fields: [
            {
              type: 'row',
              fields: [
                {
                  name: 'number',
                  type: 'text',
                  label: {
                    en: 'Phone Number',
                    uk: 'Номер телефону',
                  },
                  required: true,
                  validate: (value: unknown) => {
                    if (!value || typeof value !== 'string') return 'Phone number is required';
                    const phoneRegex = /^[+]?[0-9\s\-\(\)]+$/;
                    if (!phoneRegex.test(value)) {
                      return 'Invalid phone number format';
                    }
                    return true;
                  },
                },
                {
                  name: 'isPrimary',
                  type: 'checkbox',
                  label: {
                    en: 'Primary Number',
                    uk: 'Основний номер',
                  },
                  defaultValue: false,
                },
              ],
            },
          ],
          admin: {
            initCollapsed: true,
          },
        },
      ],
    },
    {
      name: 'emails',
      type: 'group',
      label: {
        en: 'Email Addresses',
        uk: 'Email адреси',
      },
      fields: [
        {
          type: 'row',
          fields: [
            iconSelect(),
            {
              name: 'title',
              type: 'text',
              label: {
                en: 'title',
                uk: 'Заголовок',
              },
              localized: true,
              defaultValue: 'Email',
            },
            {
              name: 'label',
              type: 'text',
              label: {
                en: 'Label',
                uk: 'Назва',
              },
              localized: true,
            },
          ],
        },
        {
          name: 'items',
          type: 'array',
          fields: [
            {
              type: 'row',
              fields: [
                {
                  name: 'email',
                  type: 'email',
                  label: {
                    en: 'Email Address',
                    uk: 'Email адреса',
                  },
                  required: true,
                },
                {
                  name: 'isPrimary',
                  type: 'checkbox',
                  label: {
                    en: 'Primary Email',
                    uk: 'Основний email',
                  },
                  defaultValue: false,
                },
              ],
            },
          ],
          admin: {
            initCollapsed: true,
          },
        },
      ],
    },
    {
      name: 'addresses',
      type: 'group',
      label: {
        en: 'Addresses',
        uk: 'Адреси',
      },
      fields: [
        {
          type: 'row',
          fields: [
            iconSelect(),
            {
              name: 'title',
              type: 'text',
              label: {
                en: 'title',
                uk: 'Заголовок',
              },
              localized: true,
              defaultValue: 'Address',
            },
            {
              name: 'label',
              type: 'text',
              label: {
                en: 'Label',
                uk: 'Назва',
              },
              localized: true,
            },
          ],
        },
        {
          name: 'items',
          type: 'array',
          fields: [
            {
              type: 'row',
              fields: [
                {
                  name: 'street',
                  type: 'text',
                  label: {
                    en: 'Street and House Number',
                    uk: 'Вулиця і номер будинку',
                  },
                  required: true,
                  localized: true,
                },
                {
                  name: 'city',
                  type: 'text',
                  label: {
                    en: 'City',
                    uk: 'Місто',
                  },
                  required: true,
                  localized: true,
                },
              ],
            },
            {
              type: 'row',
              fields: [
                {
                  name: 'region',
                  type: 'text',
                  label: {
                    en: 'Region/State',
                    uk: 'Область/Регіон',
                  },
                  localized: true,
                },
                {
                  name: 'postalCode',
                  type: 'text',
                  label: {
                    en: 'Postal Code',
                    uk: 'Поштовий індекс',
                  },
                },
                {
                  name: 'country',
                  type: 'text',
                  label: {
                    en: 'Country',
                    uk: 'Країна',
                  },
                  localized: true,
                },
              ],
            },
            {
              name: 'isPrimary',
              type: 'checkbox',
              label: {
                en: 'Primary Address',
                uk: 'Основна адреса',
              },
              defaultValue: false,
            },
          ],
          admin: {
            initCollapsed: true,
          },
        },
      ],
    },
    {
      name: 'workingHours',
      type: 'group',
      label: {
        en: 'Working Hours',
        uk: 'Години роботи',
      },
      fields: [
        {
          type: 'row',
          fields: [
            iconSelect(),
            {
              name: 'title',
              type: 'text',
              label: {
                en: 'title',
                uk: 'Заголовок',
              },
              localized: true,
              defaultValue: 'Working Hours',
            },
            {
              name: 'label',
              type: 'text',
              label: {
                en: 'Label',
                uk: 'Назва',
              },
              localized: true,
            },
          ],
        },
        {
          type: 'row',
          fields: [
            {
              name: 'weekdays',
              type: 'text',
              label: {
                en: 'Weekdays',
                uk: 'Будні дні',
              },
              localized: true,
            },
            {
              name: 'weekends',
              type: 'text',
              label: {
                en: 'Weekends',
                uk: 'Вихідні',
              },
              localized: true,
            },
            {
              name: 'holidays',
              type: 'text',
              label: {
                en: 'Holidays',
                uk: 'Святкові дні',
              },
              localized: true,
            },
          ],
        },
      ],
    },
    {
      name: 'socialMedia',
      type: 'group',
      label: {
        en: 'Social Media',
        uk: 'Соціальні мережі',
      },
      fields: [
        {
          name: 'items',
          type: 'array',
          fields: [
            {
              type: 'row',
              fields: [
                iconSelect(),
                {
                  name: 'name',
                  type: 'text',
                  label: {
                    en: 'Social Media Name',
                    uk: 'Назва соціальної мережі',
                  },
                  required: true,
                  localized: true,
                },
                {
                  name: 'url',
                  type: 'text',
                  label: {
                    en: 'URL',
                    uk: 'Посилання',
                  },
                  required: true,
                  validate: (value: unknown) => {
                    if (!value || typeof value !== 'string') return 'URL is required';
                    try {
                      new URL(value);
                      return true;
                    } catch {
                      return 'Please enter a valid URL';
                    }
                  },
                },
              ],
            },
          ],
          admin: {
            initCollapsed: true,
          },
        },
      ],
    },
  ],
  hooks: {
    afterChange: [revalidateContactInfo],
  },
};
