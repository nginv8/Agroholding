import type { Block } from 'payload';
import {
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical';

import { SectionBackground } from '@/fields/CustomFields/sectionBackground';
import { SectionTheme } from '@/fields/CustomFields/sectionTheme';
import { linkGroup } from '@/fields/linkGroup';

export const CallToActionBlock: Block = {
  slug: 'cta',
  interfaceName: 'CallToActionBlock',
  fields: [
    SectionTheme(),
    SectionBackground(),
    {
      type: 'row',
      fields: [
        {
          label: 'Layout style',
          name: 'layoutStyle',
          type: 'select',
          options: [
            { label: 'Without Image', value: 'none' },
            { label: 'Small Image', value: 'sm' },
            { label: 'Large Image', value: 'lg' },
          ],
          defaultValue: 'none',
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
            condition: (_, siblingData) => siblingData.layoutStyle !== 'none',
          },
        },
        {
          label: 'Image',
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          admin: {
            condition: (_, siblingData) => siblingData.layoutStyle !== 'none',
          },
          required: true,
        },
      ],
    },

    {
      type: 'row',
      fields: [
        {
          label: 'Margin top',
          name: 'marginTop',
          type: 'select',
          options: [
            { label: 'None', value: 'none' },
            { label: 'Small', value: 'sm' },
            { label: 'Medium', value: 'md' },
            { label: 'Large', value: 'lg' },
            { label: 'Extra Large', value: 'xl' },
          ],
          defaultValue: 'none',
          required: true,
        },
        {
          label: 'Margin bottom',
          name: 'marginBottom',
          type: 'select',
          options: [
            { label: 'None', value: 'none' },
            { label: 'Small', value: 'sm' },
            { label: 'Medium', value: 'md' },
            { label: 'Large', value: 'lg' },
            { label: 'Extra Large', value: 'xl' },
          ],
          defaultValue: 'none',
          required: true,
        },
      ],
    },
    {
      name: 'richText',
      type: 'richText',
      editor: lexicalEditor({
        features: ({ rootFeatures }) => {
          return [
            ...rootFeatures,
            HeadingFeature({ enabledHeadingSizes: ['h1', 'h2', 'h3', 'h4'] }),
            FixedToolbarFeature(),
            InlineToolbarFeature(),
          ];
        },
      }),
      label: false,
    },
    linkGroup({
      appearances: ['default', 'outline'],
      overrides: {
        maxRows: 2,
      },
    }),
  ],
  labels: {
    plural: 'Calls to Action',
    singular: 'Call to Action',
  },
};
