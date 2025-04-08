import type { Block } from 'payload'
import { SectionTitle } from '@/fields/CustomFields/sectionTitle'
import { iconSelect } from '@/fields/CustomFields/iconSelect'
import { SectionTheme } from '@/fields/CustomFields/sectionTheme'
import { SectionBackground } from '@/fields/CustomFields/sectionBackground'

export const FeatureGalleryBlock: Block = {
  slug: 'featureGallery',
  labels: {
    singular: 'Feature Gallery',
    plural: 'Feature Gallery',
  },
  interfaceName: 'FeatureGalleryBlock',
  fields: [
    SectionTheme(),
    SectionTitle({
      align: 'center',
    }),
    SectionBackground(),
    {
      name: 'features',
      type: 'array',
      required: true,
      minRows: 1,
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'description',
          type: 'text',
          required: true,
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
        iconSelect({
          name: 'icon',
          label: 'Feature Icon',
        }),
      ],
    },
    {
      name: 'stats',
      type: 'array',
      required: true,
      minRows: 1,
      fields: [
        {
          name: 'number',
          type: 'text',
          required: true,
        },
        {
          name: 'label',
          type: 'text',
          required: true,
        },
        {
          name: 'description',
          type: 'text',
          required: true,
        },
      ],
    },
  ],
}
