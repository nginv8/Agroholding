import type { Field } from 'payload'
import deepMerge from '@/utilities/deepMerge'

type IconSelectType = (options?: {
  name?: string
  label?: string
  overrides?: Partial<Field>
}) => Field

export const iconSelect: IconSelectType = ({
  name = 'icon',
  label = 'Icon',
  overrides = {},
} = {}) => {
  const generatedIconSelect: Field = {
    name,
    label,
    type: 'text',
    admin: {
      components: {
        Field: '@/fields/CustomFields/iconSelect/IconSelectComponent',
      },
    },
  }

  return deepMerge(generatedIconSelect, overrides)
}
