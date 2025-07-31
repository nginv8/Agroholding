import type { GlobalConfig } from 'payload';

import { SectionBackground } from '@/fields/CustomFields/sectionBackground';
import { SectionTheme } from '@/fields/CustomFields/sectionTheme';
import { link } from '@/fields/link';

import { revalidateFooter } from './hooks/revalidateFooter';

export const Footer: GlobalConfig = {
  slug: 'footer',
  access: {
    read: () => true,
  },
  fields: [
    {
      type: 'row',
      fields: [
        {
          name: 'layout',
          type: 'select',
          options: [
            {
              label: 'Layout V1 (Multi-column Nav)',
              value: 'v1',
            },
            {
              label: 'Layout V2 (One-column Nav with Contacts)',
              value: 'v2',
            },
          ],
          defaultValue: 'v1',
          required: true,
          admin: {
            description: 'Choose the footer layout style',
          },
        },
        SectionTheme(),
      ],
    },
    SectionBackground(),
    {
      type: 'group',
      name: 'logo',
      label: 'Logo',
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
                description: 'Footer logo (leave empty to use default)',
              },
            },
            {
              label: 'Dark variant',
              name: 'dark',
              type: 'upload',
              relationTo: 'media',
              required: false,
              admin: {
                description: 'Footer logo (leave empty to use default)',
              },
            },
          ],
        },
      ],
    },
    {
      name: 'description',
      type: 'textarea',
      localized: true,
      required: false,
      admin: {
        description: 'Company description text',
      },
    },
    {
      label: 'Nav groups',
      name: 'navGroups',
      type: 'array',
      localized: true,
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'navItems',
          type: 'array',
          fields: [
            link({
              appearances: false,
            }),
          ],
          maxRows: 10,
          admin: {
            initCollapsed: true,
            components: {
              RowLabel: '@/globals/Footer/RowLabel#RowLabel',
            },
          },
        },
      ],
      maxRows: 3,
      admin: {
        initCollapsed: true,
        description: 'In V2 layout showing all items with the title of first group',
      },
    },
    {
      name: 'newsletter',
      type: 'group',
      localized: true,
      fields: [
        {
          name: 'enabled',
          type: 'checkbox',
          defaultValue: true,
        },
        {
          name: 'title',
          type: 'text',
          admin: {
            condition: (_, siblingData) => siblingData?.enabled,
          },
        },
        {
          name: 'description',
          type: 'textarea',
          admin: {
            condition: (_, siblingData) => siblingData?.enabled,
          },
        },
        {
          name: 'buttonText',
          type: 'text',
          admin: {
            condition: (_, siblingData) => siblingData?.enabled,
          },
        },
      ],
      admin: {
        condition: (data) => data.layout === 'v1' || data.layout === 'v2',
      },
    },
    {
      name: 'copyright',
      type: 'text',
      localized: true,
      admin: {
        description: 'Copyright text (Copyright © and year will be added automatically)',
      },
    },
  ],
  hooks: {
    afterChange: [revalidateFooter],
  },
};
