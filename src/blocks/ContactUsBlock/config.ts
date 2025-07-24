import type { Block } from 'payload';

import { iconSelect } from '@/fields/CustomFields/iconSelect';
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
      label: 'Content blocks',
      type: 'group',
      fields: [
        {
          label: 'Form block',
          name: 'blocks',
          type: 'blocks',
          blocks: [FormBlock],
          maxRows: 1,
          defaultValue: {
            blockType: 'formBlock',
            form: null,
            enableIntro: false,
          },
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
