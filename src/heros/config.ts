import type { Field } from 'payload';

import { SectionTitle } from '@/fields/CustomFields/sectionTitle';
import { linkGroup } from '@/fields/linkGroup';

export const hero: Field = {
  name: 'hero',
  type: 'array',
  localized: true,
  admin: {
    components: {
      RowLabel: '@/heros/RowLabel#RowLabel',
    },
  },
  fields: [
    {
      type: 'row',
      fields: [
        {
          name: 'layout',
          type: 'select',
          label: 'Hero layout',
          options: [
            {
              label: 'Hero Layout 1 (Title center aligned)',
              value: 'hero1',
            },
            {
              label: 'Hero Layout 2 (Two column with stats)',
              value: 'hero2',
            },
          ],
          defaultValue: 'hero1',
          required: true,
        },
        {
          label: 'Image side',
          name: 'imageSide',
          type: 'radio',
          options: [
            { label: 'Left', value: 'left' },
            { label: 'Right', value: 'right' },
          ],
          required: true,
          defaultValue: 'left',
          admin: {
            condition: (_, { layout } = {}) => layout === 'hero2',
          },
        },
      ],
    },
    SectionTitle(),
    {
      type: 'row',
      fields: [
        {
          name: 'backgroundImage',
          type: 'upload',
          label: 'Background Image',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'sideImage',
          type: 'upload',
          label: 'Side Image (for Hero Layout 2)',
          relationTo: 'media',
          admin: {
            condition: (_, { layout } = {}) => layout === 'hero2',
          },
        },
      ],
    },

    linkGroup({
      overrides: {
        maxRows: 2,
      },
    }),
    {
      labels: {
        singular: 'Statistic',
        plural: 'Statistics',
      },
      name: 'stats',
      type: 'array',
      label: 'Statistics (for Hero Layout 2)',
      localized: true,
      admin: {
        condition: (_, { layout } = {}) => layout === 'hero2',
        initCollapsed: true,
        description: 'Best with 3, 4 items',
      },
      fields: [
        {
          name: 'number',
          type: 'text',
          label: 'Number',
          required: true,
        },
        {
          name: 'label',
          type: 'text',
          label: 'Label',
          required: true,
        },
      ],
      maxRows: 4,
    },
  ],
  minRows: 1,
  maxRows: 5,
  label: false,
  labels: {
    singular: 'Hero',
    plural: 'Heroes',
  },
};
