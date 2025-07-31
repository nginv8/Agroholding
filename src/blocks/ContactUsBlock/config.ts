import type { Block } from 'payload';

import { SectionBackground } from '@/fields/CustomFields/sectionBackground';
import { SectionTheme } from '@/fields/CustomFields/sectionTheme';
import { SectionTitle } from '@/fields/CustomFields/sectionTitle';

import { FormBlock } from '../Form/config';

export const ContactUsBlock: Block = {
  slug: 'contactUs',
  labels: {
    singular: 'Contact Us',
    plural: 'Contact Us',
  },
  interfaceName: 'ContactUsBlock',
  fields: [
    SectionTheme(),
    SectionBackground(),
    SectionTitle(),
    {
      label: 'Form block',
      name: 'blocks',
      type: 'blocks',
      blocks: [FormBlock],
      maxRows: 1,
    },
    {
      name: 'contactDisplay',
      type: 'group',
      label: {
        en: 'Contact Display Options',
        uk: 'Налаштування відображення контактів',
      },
      fields: [
        {
          type: 'row',
          fields: [
            {
              name: 'showPhones',
              type: 'checkbox',
              label: {
                en: 'Show Phones',
                uk: 'Показувати телефони',
              },
              defaultValue: true,
            },
            {
              name: 'showEmails',
              type: 'checkbox',
              label: {
                en: 'Show Emails',
                uk: 'Показувати email адреси',
              },
              defaultValue: true,
            },
            {
              name: 'showAddresses',
              type: 'checkbox',
              label: {
                en: 'Show Addresses',
                uk: 'Показувати адреси',
              },
              defaultValue: true,
            },
            {
              name: 'showWorkingHours',
              type: 'checkbox',
              label: {
                en: 'Show Working Hours',
                uk: 'Показувати години роботи',
              },
              defaultValue: true,
            },
          ],
        },
      ],
    },

    {
      name: 'corporate',
      type: 'group',
      fields: [
        {
          type: 'row',
          fields: [
            {
              name: 'title',
              type: 'text',
              localized: true,
            },
            {
              name: 'description',
              type: 'textarea',
              localized: true,
            },
          ],
        },
      ],
    },
  ],
};
