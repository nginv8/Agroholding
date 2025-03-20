import type { Block } from 'payload'
import { linkGroup } from '@/fields/linkGroup'

export const AboutBlock: Block = {
  slug: 'aboutUs',
  labels: {
    singular: 'About Us',
    plural: 'About Us',
  },
  interfaceName: 'AboutUsBlock',
  fields: [
    {
      name: 'subtitle',
      type: 'text',
      localized: true,
    },
    {
      type: 'row',
      fields: [
        {
          name: 'title',
          type: 'text',
          localized: true,
        },
        {
          name: 'titleSecondColor',
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
