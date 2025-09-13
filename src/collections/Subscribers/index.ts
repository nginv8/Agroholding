import type { CollectionConfig } from 'payload';

export const Subscribers: CollectionConfig = {
  slug: 'subscribers',
  labels: {
    singular: 'Subscriber',
    plural: 'Subscribers',
  },
  admin: {
    useAsTitle: 'email',
    defaultColumns: ['email', 'subscribedAt', 'status'],
  },
  access: {
    read: () => true,
    create: () => true,
    update: ({ req: { user } }) => !!user,
    delete: ({ req: { user } }) => !!user,
  },
  fields: [
    {
      type: 'row',
      fields: [
        {
          name: 'email',
          type: 'email',
          required: true,
          unique: true,
          index: true,
          admin: {
            readOnly: true,
          },
        },
        {
          name: 'status',
          type: 'select',
          options: [
            { label: 'Active', value: 'active' },
            { label: 'Unsubscribed', value: 'unsubscribed' },
            { label: 'Pending', value: 'pending' },
          ],
          defaultValue: 'active',
        },
      ],
    },

    {
      type: 'row',
      fields: [
        {
          name: 'subscribedAt',
          type: 'date',
          defaultValue: () => new Date(),
          admin: {
            readOnly: true,
          },
        },
        {
          name: 'source',
          type: 'text',
          defaultValue: 'footer',
          admin: {
            readOnly: true,
          },
        },
      ],
    },
  ],
  hooks: {
    beforeChange: [
      ({ data }) => {
        if (!data.subscribedAt) {
          data.subscribedAt = new Date();
        }
        return data;
      },
    ],
  },
};
