import type { Block } from 'payload';

import { iconSelect } from '@/fields/CustomFields/iconSelect';
import { SectionBackground } from '@/fields/CustomFields/sectionBackground';
import { SectionTheme } from '@/fields/CustomFields/sectionTheme';
import { SectionTitle } from '@/fields/CustomFields/sectionTitle';

export const FeatureCardsBlock: Block = {
  slug: 'featureCards',
  labels: {
    singular: 'Feature Cards',
    plural: 'Feature Cards',
  },
  interfaceName: 'FeatureCardsBlock',
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
          ],
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'Feature Description',
          localized: true,
        },
      ],
    },
  ],
};
