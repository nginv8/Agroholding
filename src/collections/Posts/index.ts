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
import { slugField } from '@/fields/slug';

import { autoGenerateSEO } from './hooks/generateSEO';
import { populateAuthors } from './hooks/populateAuthors';
import { revalidateDelete, revalidatePost } from './hooks/revalidatePost';

export const Posts: CollectionConfig<'posts'> = {
  slug: 'posts',
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
          collection: 'posts',
          req,
        });

        return path;
      },
    },
    preview: (data, { req }) =>
      generatePreviewPath({
        slug: typeof data?.slug === 'string' ? data.slug : '',
        collection: 'posts',
        req,
      }),
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'excerpt',
      type: 'textarea',
      required: false,
      admin: {
        description: 'Short summary of the post, used in listings and previews',
      },
    },

    {
      type: 'tabs',
      tabs: [
        {
          label: 'Content',
          fields: [
            {
              name: 'heroImage',
              type: 'upload',
              relationTo: 'media',
              admin: {
                description: 'Main image for the post',
              },
            },
            {
              name: 'gallery',
              type: 'array',
              fields: [
                {
                  name: 'image',
                  type: 'upload',
                  relationTo: 'media',
                  required: true,
                },
                {
                  name: 'caption',
                  type: 'text',
                },
              ],
              admin: {
                description: 'Gallery of images for the post at the bottom',
              },
            },
            {
              label: false,
              name: 'content',
              type: 'richText',
              required: true,
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
          label: 'Meta',
          fields: [
            {
              name: 'categories',
              type: 'relationship',
              hasMany: true,
              relationTo: 'categories',
              admin: {
                position: 'sidebar',
              },
            },

            {
              name: 'relatedPosts',
              type: 'relationship',
              relationTo: 'posts',
              hasMany: true,
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
            },

            {
              name: 'tags',
              type: 'array',
              fields: [
                {
                  name: 'tag',
                  type: 'text',
                  required: true,
                },
              ],
              admin: {
                description: 'Tags for the post, used for filtering and searching',
              },
            },
            {
              name: 'readTime',
              type: 'text',
              admin: {
                description: 'Reading time estimate (e.g., "5 min read")',
              },
            },
          ],
        },
        {
          label: 'SEO',
          name: 'meta',
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
            MetaDescriptionField({}),
            PreviewField({
              // if the `generateUrl` function is configured
              hasGenerateFn: true,

              // field paths to match the target field for data
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
        {
          name: 'role',
          type: 'text',
        },
      ],
    },
    ...slugField(),
  ],
  hooks: {
    beforeChange: [autoGenerateSEO],
    afterChange: [revalidatePost],
    afterRead: [populateAuthors],
    afterDelete: [revalidateDelete],
  },
  versions: {
    drafts: {
      autosave: {
        interval: 100, // We set this interval for optimal live preview
      },
      schedulePublish: true,
    },
    maxPerDoc: 1,
  },
};
