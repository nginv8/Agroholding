import type { GlobalConfig } from 'payload';

import { iconSelect } from '@/fields/CustomFields/iconSelect';
import { link } from '@/fields/link';

import { revalidateHeader } from './hooks/revalidateHeader';

export const Header: GlobalConfig = {
  slug: 'header',
  access: {
    read: () => true,
  },
  fields: [
    {
      type: 'group',
      name: 'logo',
      localized: true,
      fields: [
        {
          type: 'row',
          fields: [
            {
              label: 'Light variant',
              name: 'light',
              type: 'upload',
              relationTo: 'media',
              required: false,
              admin: {
                description: 'Header logo (leave empty to use default)',
              },
            },
            {
              label: 'Dark variant',
              name: 'dark',
              type: 'upload',
              relationTo: 'media',
              required: false,
              admin: {
                description: 'Header logo (leave empty to use default)',
              },
            },
          ],
        },
      ],
    },
    {
      name: 'navItems',
      type: 'array',
      localized: true,
      fields: [
        iconSelect(),
        link({
          appearances: false,
        }),
        {
          name: 'submenu',
          type: 'array',
          fields: [
            {
              type: 'row',
              fields: [
                iconSelect(),
                {
                  name: 'description',
                  type: 'textarea',
                },
              ],
            },
            link({
              appearances: false,
            }),
          ],
          maxRows: 10,
          admin: {
            initCollapsed: true,
            components: {
              RowLabel: '@/globals/Header/SubMenuRowLabel#SubMenuRowLabel',
            },
          },
        },
      ],
      maxRows: 6,
      admin: {
        initCollapsed: true,
        components: {
          RowLabel: '@/globals/Header/RowLabel#RowLabel',
        },
      },
    },
  ],
  hooks: {
    afterChange: [revalidateHeader],
  },
};
