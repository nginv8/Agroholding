import type { Field } from 'payload'
import deepMerge from '@/utilities/deepMerge'

type SectionTitleType = (options?: { overrides?: Field }) => Field

export const SectionTitle: SectionTitleType = ({ overrides = {} } = {}) => {
  const generatedSectionTitle: Field = {
    label: 'Section Title',
    type: 'collapsible',
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
            name: 'accentedPart',
            type: 'text',
            localized: true,
          },
        ],
      },
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
            defaultValue: 'colorAccent',
          },
          {
            name: 'style',
            type: 'select',
            options: [
              {
                label: 'Dark',
                value: 'dark',
              },
              {
                label: 'Light',
                value: 'light',
              },
            ],
            defaultValue: 'dark',
          },
          {
            name: 'align',
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
            defaultValue: 'left',
          },
        ],
      },

      {
        name: 'description',
        type: 'textarea',
        localized: true,
      },
    ],
  }

  return deepMerge(generatedSectionTitle, overrides)
}
