import type { Field } from 'payload'
import deepMerge from '@/utilities/deepMerge'

type SectionTitleType = (options?: {
  variant?: 'colorAccent' | 'weightAccent'
  align?: 'left' | 'center' | 'right'
  overrides?: Partial<Field>
}) => Field

export const SectionTitle: SectionTitleType = ({
  variant = 'colorAccent',
  align = 'left',
  overrides = {},
} = {}) => {
  const generatedSectionTitle: Field = {
    name: 'title',
    label: 'Section Title',
    type: 'group',
    fields: [
      {
        type: 'row',
        fields: [
          {
            name: 'variant',
            type: 'select',
            options: [
              {
                label: 'Color Accent',
                value: 'colorAccent',
              },
              {
                label: 'Weight Accent',
                value: 'weightAccent',
              },
            ],
            defaultValue: variant,
          },
          {
            name: 'alignment',
            type: 'select',
            options: [
              {
                label: 'Left',
                value: 'left',
              },
              {
                label: 'Center',
                value: 'center',
              },
              {
                label: 'Right',
                value: 'right',
              },
            ],
            defaultValue: align,
          },
        ],
      },
      {
        type: 'row',
        fields: [
          {
            name: 'subtitle',
            type: 'text',
            localized: true,
            admin: {
              condition: (_, siblingData) => siblingData?.variant === 'colorAccent',
            },
          },
          {
            name: 'title',
            type: 'text',
            localized: true,
          },
          {
            name: 'accentPart',
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
    admin: {
      hideGutter: true,
    },
  }

  return deepMerge(generatedSectionTitle, overrides)
}
