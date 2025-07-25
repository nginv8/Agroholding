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
