import type { CollectionConfig } from 'payload';

import { authenticated } from '@/access/authenticated';

export const OrderSubmissions: CollectionConfig = {
  slug: 'order-submissions',
  access: {
    create: () => true,
    delete: authenticated,
    read: authenticated,
    update: authenticated,
  },
  admin: {
    defaultColumns: ['name', 'email', 'itemCode', 'submittedAt'],
    useAsTitle: 'name',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      admin: {
        readOnly: true,
      },
    },
    {
      name: 'email',
      type: 'email',
      required: true,
      admin: {
        readOnly: true,
      },
    },
    {
      name: 'phone',
      type: 'text',
      admin: {
        readOnly: true,
      },
    },
    {
      name: 'message',
      type: 'textarea',
      required: false,
      admin: {
        readOnly: true,
      },
    },
    {
      name: 'itemCode',
      type: 'text',
      admin: {
        description: 'Product item code from the form',
        readOnly: true,
      },
    },
    {
      name: 'productId',
      type: 'text',
      admin: {
        description: 'ID of the related product',
        readOnly: true,
      },
    },
    {
      name: 'productTitle',
      type: 'text',
      admin: {
        description: 'Title of the related product',
        readOnly: true,
      },
    },
    {
      name: 'submittedAt',
      type: 'date',
      required: true,
      admin: {
        date: {
          pickerAppearance: 'dayAndTime',
        },
        readOnly: true,
      },
    },
    {
      name: 'status',
      type: 'select',
      defaultValue: 'new',
      options: [
        { label: 'New', value: 'new' },
        { label: 'In Progress', value: 'in_progress' },
        { label: 'Resolved', value: 'resolved' },
        { label: 'Closed', value: 'closed' },
      ],
    },
    {
      name: 'notes',
      type: 'textarea',
      admin: {
        description: 'Internal notes for handling this submission',
      },
    },
  ],
};
