import type { Block } from 'payload';

import { iconSelect } from '@/fields/CustomFields/iconSelect';
import { SectionBackground } from '@/fields/CustomFields/sectionBackground';
import { SectionTheme } from '@/fields/CustomFields/sectionTheme';
import { SectionTitle } from '@/fields/CustomFields/sectionTitle';
import { linkGroup } from '@/fields/linkGroup';

export const FeatureTabsBlock: Block = {
  slug: 'featureTabs',
  labels: {
    singular: 'Feature Tabs',
    plural: 'Feature Tabs',
  },
  interfaceName: 'FeatureTabsBlock',
  fields: [
    SectionTheme(),
    SectionTitle({
      align: 'center',
    }),
    SectionBackground(),
    {
      name: 'features',
      type: 'array',
      label: 'Features',
      fields: [
        {
          type: 'row',
          fields: [
            iconSelect(),
            {
              name: 'title',
              type: 'text',
              label: 'Feature Title',
              localized: true,
              required: true,
            },
            {
              name: 'description',
              type: 'textarea',
              label: 'Feature Description',
              localized: true,
            },
          ],
        },

        {
          name: 'content',
          type: 'richText',
          label: 'Additional Content',
          localized: true,
        },
      ],
    },

    linkGroup({
      overrides: {
        name: 'cta',
        label: 'Call to Action Buttons',
      },
    }),
  ],
};
