import type { CollectionConfig } from 'payload';
import {
  BlocksFeature,
  FixedToolbarFeature,
  HeadingFeature,
  HorizontalRuleFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical';
import {
  MetaDescriptionField,
  MetaImageField,
  MetaTitleField,
  OverviewField,
  PreviewField,
} from '@payloadcms/plugin-seo/fields';

import { BannerBlock } from '@/blocks/BannerBlock/config';
import { MediaBlock } from '@/blocks/MediaBlock/config';
import { generatePreviewPath } from '@/utilities/generatePreviewPath';
import { authenticated } from '@/access/authenticated';
import { authenticatedOrPublished } from '@/access/authenticatedOrPublished';
import { iconSelect } from '@/fields/CustomFields/iconSelect';
import { slugField } from '@/fields/slug';

import { autoFillSEO } from './hooks/autoFillSEO';
import { populateAuthors } from './hooks/populateAuthors';
import { revalidateDelete, revalidateProduct } from './hooks/revalidateProduct';

export const Products: CollectionConfig<'products'> = {
  slug: 'products',
  access: {
    create: authenticated,
    delete: authenticated,
    read: authenticatedOrPublished,
    update: authenticated,
  },
  defaultPopulate: {
    title: true,
    slug: true,
    categories: true,
    meta: {
      image: true,
      description: true,
    },
  },
  admin: {
    defaultColumns: ['title', 'slug', 'updatedAt'],
    livePreview: {
      url: ({ data, req }) => {
        const path = generatePreviewPath({
          slug: typeof data?.slug === 'string' ? data.slug : '',
          collection: 'products',
          req,
        });

        return path;
      },
    },
    preview: (data, { req }) =>
      generatePreviewPath({
        slug: typeof data?.slug === 'string' ? data.slug : '',
        collection: 'products',
        req,
      }),
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      localized: true,
    },
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Basic Info',
          fields: [
            {
              type: 'row',
              fields: [
                {
                  name: 'shortDescription',
                  type: 'textarea',
                  required: true,
                  localized: true,
                  admin: {
                    description:
                      'Short description displayed on the product page and in the product list.',
                  },
                },
                {
                  name: 'itemCode',
                  type: 'text',
                  localized: true,
                  admin: {
                    description: 'Item code or SKU of the product.',
                  },
                },
              ],
            },

            {
              type: 'row',
              fields: [
                {
                  name: 'price',
                  type: 'text',
                  localized: true,
                  defaultValue: 'Price on request',
                  admin: {
                    description:
                      'Price of the product. Can be a string for custom pricing. Defaults to "Price on request".',
                  },
                },
                {
                  name: 'availability',
                  type: 'select',
                  required: true,
                  options: [
                    { label: 'In stock', value: 'in_stock' },
                    { label: 'Out of stock', value: 'out_of_stock' },
                    { label: 'Pre-order', value: 'pre_order' },
                  ],
                  defaultValue: 'in_stock',
                },
              ],
            },

            {
              type: 'row',
              fields: [
                {
                  name: 'ratingEnabled',
                  type: 'checkbox',
                  label: {
                    en: 'Rating Enabled',
                    uk: 'Рейтинг Увімкнено',
                  },
                  defaultValue: false,
                },
                {
                  name: 'rating',
                  type: 'number',
                  min: 1,
                  max: 5,
                  defaultValue: 5,
                },
                {
                  name: 'reviewsCount',
                  type: 'number',
                  defaultValue: 0,
                },
              ],
            },

            {
              name: 'features',
              type: 'array',
              localized: true,
              admin: {
                initCollapsed: true,
                description: 'Features list displayed in the main product information.',
              },
              fields: [
                {
                  name: 'feature',
                  type: 'text',
                  required: true,
                },
              ],
            },

            {
              name: 'images',
              type: 'array',
              admin: {
                initCollapsed: true,
                description:
                  'Product images displayed in the image slider. The first image is the main one.',
              },
              fields: [
                {
                  name: 'image',
                  type: 'upload',
                  relationTo: 'media',
                  required: true,
                },
              ],
            },

            {
              label: 'Benefit section',
              name: 'benefits',
              type: 'array',
              localized: true,
              maxRows: 4,
              admin: {
                initCollapsed: true,
                description:
                  'Benefits displayed below the main product information and tabs. Best with 3 or 6 items. Can override benefits from the global "Product Page Settings".',
              },
              fields: [
                {
                  type: 'row',
                  fields: [
                    iconSelect(),
                    {
                      name: 'title',
                      type: 'text',
                      required: true,
                    },
                  ],
                },
                {
                  name: 'description',
                  type: 'textarea',
                },
              ],
            },

            {
              label: 'Content section',
              name: 'content',
              type: 'richText',
              localized: true,
              admin: {
                description:
                  'Content displayed below the main product information, tabs, and benefits. This can be extended with content from the global "Product Page Settings".',
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
        },

        {
          label: 'Tabs Info',
          fields: [
            {
              name: 'fullDescription',
              type: 'richText',
              localized: true,
              admin: {
                description:
                  'Full product description displayed in the "Description" tab. Leave empty to hide the tab.',
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

            {
              label: 'Product Technical characteristics',
              name: 'specifications',
              type: 'array',
              localized: true,
              admin: {
                initCollapsed: true,
                description: 'Technical specifications displayed in the "Specifications" tab.',
              },
              fields: [
                {
                  type: 'row',
                  fields: [
                    {
                      name: 'name',
                      type: 'text',
                      required: true,
                    },
                    {
                      name: 'value',
                      type: 'text',
                      required: true,
                    },
                  ],
                },
              ],
            },

            {
              label: 'Additional Information',
              name: 'additionalSpecifications',
              type: 'array',
              localized: true,
              admin: {
                initCollapsed: true,
                description:
                  'Additional info displayed in the "Specifications" tab. Can be extended with global settings.',
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
                    },
                    {
                      name: 'description',
                      type: 'textarea',
                      required: true,
                    },
                  ],
                },
              ],
            },

            {
              name: 'documents',
              type: 'array',
              localized: true,
              admin: {
                initCollapsed: true,
                description:
                  'Documents displayed in the "Documents" tab. Can be extended with documents in global "Product Page Settings".',
              },
              fields: [
                {
                  name: 'name',
                  type: 'text',
                  required: true,
                },
                {
                  name: 'file',
                  type: 'upload',
                  relationTo: 'media',
                },
              ],
            },
          ],
        },

        {
          label: 'Meta',
          fields: [
            {
              name: 'relatedProducts',
              type: 'relationship',
              admin: {
                position: 'sidebar',
              },
              filterOptions: ({ id }) => {
                return {
                  id: {
                    not_in: [id],
                  },
                };
              },
              hasMany: true,
              relationTo: 'products',
            },

            {
              name: 'categories',
              type: 'relationship',
              admin: {
                position: 'sidebar',
              },
              hasMany: true,
              relationTo: 'categories',
            },
          ],
        },

        {
          name: 'meta',
          label: 'SEO',
          fields: [
            OverviewField({
              titlePath: 'meta.title',
              descriptionPath: 'meta.description',
              imagePath: 'meta.image',
            }),
            MetaTitleField({
              hasGenerateFn: true,
            }),
            MetaImageField({
              relationTo: 'media',
            }),

            MetaDescriptionField({
              hasGenerateFn: true,
            }),
            PreviewField({
              hasGenerateFn: true,

              titlePath: 'meta.title',
              descriptionPath: 'meta.description',
            }),
          ],
        },
      ],
    },
    {
      name: 'publishedAt',
      type: 'date',
      admin: {
        date: {
          pickerAppearance: 'dayAndTime',
        },
        position: 'sidebar',
      },
      hooks: {
        beforeChange: [
          ({ siblingData, value }) => {
            if (siblingData._status === 'published' && !value) {
              return new Date();
            }
            return value;
          },
        ],
      },
    },
    {
      name: 'authors',
      type: 'relationship',
      admin: {
        position: 'sidebar',
      },
      hasMany: true,
      relationTo: 'users',
    },
    // This field is only used to populate the user data via the `populateAuthors` hook
    // This is because the `user` collection has access control locked to protect user privacy
    // GraphQL will also not return mutated user data that differs from the underlying schema
    {
      name: 'populatedAuthors',
      type: 'array',
      access: {
        update: () => false,
      },
      admin: {
        disabled: true,
        readOnly: true,
      },
      fields: [
        {
          name: 'id',
          type: 'text',
        },
        {
          name: 'name',
          type: 'text',
        },
      ],
    },
    ...slugField('title', {
      slugOverrides: {
        localized: true,
      },
    }),
  ],
  hooks: {
    beforeChange: [autoFillSEO],
    afterChange: [revalidateProduct],
    afterRead: [populateAuthors],
    afterDelete: [revalidateDelete],
  },
  versions: {
    drafts: {
      autosave: {
        interval: 100,
      },
      schedulePublish: true,
    },
    maxPerDoc: 1,
  },
};
