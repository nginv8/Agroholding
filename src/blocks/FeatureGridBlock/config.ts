import type { Block } from 'payload';

import { iconSelect } from '@/fields/CustomFields/iconSelect';
import { SectionBackground } from '@/fields/CustomFields/sectionBackground';
import { SectionTheme } from '@/fields/CustomFields/sectionTheme';
import { SectionTitle } from '@/fields/CustomFields/sectionTitle';

export const FeatureGridBlock: Block = {
  slug: 'featureGrid',
  labels: {
    singular: 'Feature Grid',
    plural: 'Feature Grid',
  },
  interfaceName: 'FeatureGridBlock',
  fields: [
    SectionTheme(),
    SectionTitle(),
    SectionBackground(),
    {
      name: 'advantages',
      type: 'array',
      required: true,
      minRows: 1,
      maxRows: 12,
      admin: {
        description: 'Best used with 3 or 6 items.',
        initCollapsed: true,
      },
      fields: [
        {
          type: 'row',
          fields: [
            iconSelect({
              name: 'icon',
              label: 'Feature Icon',
            }),
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
  ],
};
