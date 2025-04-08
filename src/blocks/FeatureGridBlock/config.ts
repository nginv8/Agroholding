import type { Block } from 'payload'
import { SectionTitle } from '@/fields/CustomFields/sectionTitle'
import { iconSelect } from '@/fields/CustomFields/iconSelect'
import { SectionTheme } from '@/fields/CustomFields/sectionTheme'
import { SectionBackground } from '@/fields/CustomFields/sectionBackground'

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
}
