import type { Field } from 'payload';

import deepMerge from '@/utilities/deepMerge';

type SectionBackgroundType = (options?: {
  variant?: 'gradient' | 'image' | 'gradient and image' | 'none';
  gradientType?: 'bottom' | 'top' | 'top and bottom';
  overrides?: Partial<Field>;
}) => Field;

export const SectionBackground: SectionBackgroundType = ({
  variant = 'none',
  gradientType = 'top and bottom',
  overrides = {},
} = {}) => {
  const generatedSectionBackground: Field = {
    name: 'sbg',
    label: 'Section Background',
    type: 'group',
    fields: [
      {
        type: 'row',
        fields: [
          {
            name: 'variant',
            label: 'Variant',
            type: 'select',
            options: [
              { label: 'None', value: 'none' },
              { label: 'Gradient', value: 'gradient' },
              { label: 'Image', value: 'image' },
              { label: 'Gradient and Image', value: 'gradient and image' },
            ],
            defaultValue: variant,
          },
          {
            name: 'gradientType',
            label: 'Gradient Type',
            type: 'select',
            options: [
              { label: 'Top', value: 'top' },
              { label: 'Bottom', value: 'bottom' },
              { label: 'Top and Bottom', value: 'top and bottom' },
            ],
            defaultValue: gradientType,
            admin: {
              condition: (_, siblingData) =>
                siblingData?.variant === 'gradient' ||
                siblingData?.variant === 'gradient and image',
            },
          },
          {
            name: 'img',
            label: 'Background Image',
            type: 'upload',
            relationTo: 'media',
            admin: {
              condition: (_, siblingData) =>
                siblingData?.variant === 'image' || siblingData?.variant === 'gradient and image',
            },
          },
        ],
      },
    ],
    admin: {
      hideGutter: true,
    },
  };

  return deepMerge(generatedSectionBackground, overrides);
};
