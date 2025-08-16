import type { GlobalConfig } from 'payload';
import {
  BlocksFeature,
  FixedToolbarFeature,
  HeadingFeature,
  HorizontalRuleFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical';

import { BannerBlock } from '@/blocks/BannerBlock/config';
import { MediaBlock } from '@/blocks/MediaBlock/config';
import { iconSelect } from '@/fields/CustomFields/iconSelect';

import { revalidateProductPageSettings } from './hooks/revalidateProductPageSettings';

export const ProductPageSettings: GlobalConfig = {
  slug: 'productPageSettings',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'globalAdditionalInfo',
      type: 'array',
      admin: {
        initCollapsed: true,
        description:
          'Extendes Additional Information in the "Specifications" tab on all product pages.',
      },
      fields: [
        {
          type: 'row',
          fields: [
            iconSelect(),
            {
              name: 'name',
              type: 'text',
              required: true,
              localized: true,
            },
            {
              name: 'description',
              type: 'textarea',
              required: true,
              localized: true,
            },
          ],
        },
      ],
    },

    {
      name: 'globalDocuments',
      type: 'array',
      admin: {
        initCollapsed: true,
        description: 'Extendes documents in the "Documents" tab on all product pages.',
      },
      fields: [
        {
          name: 'name',
          type: 'text',
          required: true,
          localized: true,
        },
        {
          name: 'file',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'type',
          type: 'select',
          required: true,
          options: [
            { label: 'PDF', value: 'PDF' },
            { label: 'DOC', value: 'DOC' },
            { label: 'XLS', value: 'XLS' },
          ],
        },
        {
          name: 'size',
          type: 'text',
          admin: {
            description: 'Faile size (e.g., "2.1 MB")',
          },
        },
      ],
    },

    {
      name: 'defaultBenefits',
      type: 'array',
      maxRows: 4,
      admin: {
        initCollapsed: true,
        description:
          'Default benefits displayed on all product pages. Can be overridden in individual products.',
      },

      fields: [
        {
          type: 'row',
          fields: [
            {
              type: 'row',
              fields: [
                iconSelect(),
                {
                  name: 'title',
                  type: 'text',
                  required: true,
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
        },
      ],
    },

    {
      name: 'globalContent',
      type: 'richText',
      localized: true,
      admin: {
        description: 'Global content displayed after product-specific content section',
      },
      editor: lexicalEditor({
        features: ({ rootFeatures }) => {
          return [
            ...rootFeatures,
            HeadingFeature({ enabledHeadingSizes: ['h1', 'h2', 'h3', 'h4'] }),
            BlocksFeature({ blocks: [BannerBlock, MediaBlock] }),
            FixedToolbarFeature(),
            InlineToolbarFeature(),
            HorizontalRuleFeature(),
          ];
        },
      }),
    },
  ],
  hooks: {
    afterChange: [revalidateProductPageSettings],
  },
};
