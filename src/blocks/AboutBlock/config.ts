import type { Block } from 'payload'
import { linkGroup } from '@/fields/linkGroup'
import { SectionTitle } from '@/fields/CustomFields/sectionTitle'
import { SectionBackground } from '@/fields/CustomFields/sectionBackground'
import {
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'
import { SectionTheme } from '@/fields/CustomFields/sectionTheme'

export const AboutBlock: Block = {
  slug: 'about',
  labels: {
    singular: 'About',
    plural: 'About',
  },
  interfaceName: 'AboutBlock',
  fields: [
    SectionTheme(),
    SectionTitle(),
    SectionBackground(),
    {
      name: 'richText',
      label: 'Content',
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
    },
    {
      type: 'row',
      fields: [
        {
          name: 'mainImage',
          label: 'Main Image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'secondaryImage',
          label: 'Secondary Image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
      ],
    },
    linkGroup({
      overrides: {
        name: 'cta',
        label: 'Call to Action',
      },
    }),
  ],
}
