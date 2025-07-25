import type { Block } from 'payload';

import { iconSelect } from '@/fields/CustomFields/iconSelect';
import { SectionBackground } from '@/fields/CustomFields/sectionBackground';
import { SectionTheme } from '@/fields/CustomFields/sectionTheme';
import { SectionTitle } from '@/fields/CustomFields/sectionTitle';
import { linkGroup } from '@/fields/linkGroup';

export const AboutFeaturesBlock: Block = {
  slug: 'aboutFeatures',
  labels: {
    singular: 'About Features',
    plural: 'About Features',
  },
  interfaceName: 'AboutFeaturesBlock',
  fields: [
    SectionTheme(),
    SectionTitle(),
    SectionBackground(),
    {
      type: 'row',
      fields: [
        {
          name: 'mainImage',
          type: 'upload',
          relationTo: 'media',
        },
        {
          name: 'secondaryImage',
          type: 'upload',
          relationTo: 'media',
        },
      ],
    },

    {
      name: 'features',
      type: 'array',
      fields: [
        {
          type: 'row',
          fields: [
            iconSelect(),
            {
              name: 'title',
              type: 'text',
              localized: true,
              required: true,
            },
          ],
        },

        {
          name: 'description',
          type: 'textarea',
          localized: true,
        },
      ],
    },
    linkGroup({
      overrides: {
        name: 'cta',
        label: 'Call to Action',
      },
    }),
    {
      name: 'stats',
      type: 'array',
      fields: [
        {
          type: 'row',
          fields: [
            {
              name: 'number',
              type: 'text',
              required: true,
            },
            {
              name: 'label',
              type: 'text',
              localized: true,
              required: true,
            },
          ],
        },
      ],
    },
  ],
};
