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
      name: 'navItems',
      type: 'array',
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
                  localized: true,
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
