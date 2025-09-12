import type { CollectionConfig } from 'payload';
import {
  FixedToolbarFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical';

import { anyone } from '@/access/anyone';
import { authenticated } from '@/access/authenticated';

export const Media: CollectionConfig = {
  slug: 'media',
  access: {
    create: authenticated,
    delete: authenticated,
    read: anyone,
    update: authenticated,
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      localized: true,
      required: true,
    },
    {
      name: 'caption',
      type: 'richText',
      localized: true,
      editor: lexicalEditor({
        features: ({ rootFeatures }) => {
          return [...rootFeatures, FixedToolbarFeature(), InlineToolbarFeature()];
        },
      }),
    },
    {
      name: 'cloudinary',
      type: 'group',
      admin: {
        description: 'Cloudinary metadata',
      },
      fields: [
        {
          name: 'assetId',
          type: 'text',
          admin: {
            readOnly: true,
          },
        },
        {
          name: 'publicId',
          type: 'text',
          admin: {
            readOnly: true,
          },
        },
        {
          name: 'version',
          type: 'number',
          admin: {
            readOnly: true,
          },
        },
        {
          name: 'signature',
          type: 'text',
          admin: {
            readOnly: true,
          },
        },
        {
          name: 'width',
          type: 'number',
          admin: {
            readOnly: true,
          },
        },
        {
          name: 'height',
          type: 'number',
          admin: {
            readOnly: true,
          },
        },
        {
          name: 'format',
          type: 'text',
          admin: {
            readOnly: true,
          },
        },
        {
          name: 'resourceType',
          type: 'text',
          admin: {
            readOnly: true,
          },
        },
        {
          name: 'createdAt',
          type: 'text',
          admin: {
            readOnly: true,
          },
        },
        {
          name: 'bytes',
          type: 'number',
          admin: {
            readOnly: true,
          },
        },
        {
          name: 'type',
          type: 'text',
          admin: {
            readOnly: true,
          },
        },
        {
          name: 'url',
          type: 'text',
          admin: {
            readOnly: true,
          },
        },
        {
          name: 'secureUrl',
          type: 'text',
          admin: {
            readOnly: true,
          },
        },
        {
          name: 'folder',
          type: 'text',
          admin: {
            readOnly: true,
          },
        },
        {
          name: 'displayName',
          type: 'text',
          admin: {
            readOnly: true,
          },
        },
        {
          name: 'duration',
          type: 'number',
          admin: {
            readOnly: true,
          },
        },
        {
          name: 'eager',
          type: 'text',
          admin: {
            readOnly: true,
          },
        },
      ],
    },
  ],
  upload: {
    adminThumbnail: 'thumbnail',
    focalPoint: true,
  },
};
