import type { Field } from 'payload';

import deepMerge from '@/utilities/deepMerge';

type SectionThemeType = (options?: {
  theme?: 'dark' | 'light';
  overrides?: Partial<Field>;
}) => Field;

export const SectionTheme: SectionThemeType = ({ theme = 'light', overrides = {} } = {}) => {
  const generatedSectionTheme: Field = {
    name: 'theme',
    label: 'Section Theme',
    type: 'select',
    options: [
      { label: 'Light', value: 'light' },
      { label: 'Dark', value: 'dark' },
    ],
    defaultValue: theme,
  };

  return deepMerge(generatedSectionTheme, overrides);
};
