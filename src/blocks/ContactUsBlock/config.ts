import type { Block } from 'payload';

import { iconSelect } from '@/fields/CustomFields/iconSelect';
import { SectionBackground } from '@/fields/CustomFields/sectionBackground';
import { SectionTheme } from '@/fields/CustomFields/sectionTheme';
import { SectionTitle } from '@/fields/CustomFields/sectionTitle';

export const ContactUsBlock: Block = {
  slug: 'contactUs',
  labels: {
    singular: 'Contact Us',
    plural: 'Contact Us',
  },
  interfaceName: 'ContactUsBlock',
  fields: [
    SectionTheme(),
    SectionTitle(),
    SectionBackground(),
    {
      name: 'formFields',
      type: 'array',
      fields: [
        {
          type: 'row',
          fields: [
            {
              name: 'label',
              type: 'text',
              localized: true,
              required: true,
            },
            {
              name: 'type',
              type: 'select',
              defaultValue: 'text',
              options: [
                { label: 'Text', value: 'text' },
                { label: 'Email', value: 'email' },
                { label: 'Textarea', value: 'textarea' },
                { label: 'Select', value: 'select' },
              ],
            },
          ],
        },
        {
          name: 'placeholder',
          type: 'text',
          localized: true,
        },
        {
          name: 'options',
          type: 'array',
          admin: {
            condition: (_, siblingData) => siblingData?.type === 'select',
          },
          fields: [
            {
              type: 'row',
              fields: [
                {
                  name: 'label',
                  type: 'text',
                  localized: true,
                  required: true,
                },
                {
                  name: 'value',
                  type: 'text',
                  required: true,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: 'contactInfo',
      type: 'array',
      fields: [
        {
          type: 'row',
          fields: [
            iconSelect({
              name: 'icon',
              label: 'Contact Icon',
            }),
            {
              name: 'title',
              type: 'text',
              localized: true,
            },
          ],
        },
        {
          name: 'details',
          type: 'array',
          fields: [
            {
              name: 'text',
              type: 'text',
              localized: true,
            },
          ],
        },
        {
          name: 'description',
          type: 'text',
          localized: true,
        },
      ],
    },
    {
      name: 'corporate',
      type: 'group',
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
};
