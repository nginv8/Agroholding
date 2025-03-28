import type { Block } from 'payload'
import { linkGroup } from '@/fields/linkGroup'
import { SectionTitle } from '@/fields/CustomFields/sectionTitle'

export const AboutUsV2Block: Block = {
  slug: 'aboutUsV2',
  labels: {
    singular: 'About Us V2',
    plural: 'About Us V2',
  },
  interfaceName: 'AboutUsV2Block',
  fields: [
    SectionTitle(),
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
            {
              name: 'icon',
              label: 'Icon',
              type: 'text',
              admin: {
                components: {
                  Field: '@/fields/CustomFields/IconSelectField',
                },
              },
            },
            {
              name: 'title',
              type: 'text',
              localized: true,
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
      appearances: ['default', 'outline', 'destructive', 'ghost', 'link', 'secondary'],
      overrides: {
        maxRows: 2,
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
            },
            {
              name: 'label',
              type: 'text',
              localized: true,
            },
          ],
        },
      ],
    },
  ],
}
