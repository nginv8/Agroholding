import type { Block } from 'payload'
import { linkGroup } from '@/fields/linkGroup'
import { SectionTitle } from '@/fields/CustomFields/sectionTitle'
import {
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

export const AboutUsV1Block: Block = {
  slug: 'aboutUsV1',
  labels: {
    singular: 'About Us V1',
    plural: 'About Us V1',
  },
  interfaceName: 'AboutUsV1Block',
  fields: [
    SectionTitle(),
    {
      name: 'richText',
      type: 'richText',
      editor: lexicalEditor({
        features: ({ rootFeatures }) => {
          return [
            ...rootFeatures,
            HeadingFeature({ enabledHeadingSizes: ['h2', 'h3', 'h4'] }),
            FixedToolbarFeature(),
            InlineToolbarFeature(),
          ]
        },
      }),
      label: false,
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
    linkGroup({
      appearances: ['default', 'outline', 'destructive', 'ghost', 'link', 'secondary'],
      overrides: {
        maxRows: 2,
      },
    }),
  ],
}
