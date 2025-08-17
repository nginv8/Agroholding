import type { GlobalConfig } from 'payload';

import { revalidatePostPageSettings } from './hooks/revalidatePostPageSettings';

export const PostPageSettings: GlobalConfig = {
  slug: 'postPageSettings',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'heroLayout',
      type: 'select',
      defaultValue: 'simple',
      required: true,
      admin: {
        description: 'Select the hero layout for post pages',
      },
      options: [
        {
          label: 'Simple Hero - Traditional layout with breadcrumbs, meta and image below',
          value: 'simple',
        },
        {
          label: 'Fullscreen Hero - Large background image with text overlay',
          value: 'full',
        },
      ],
    },
    {
      type: 'row',
      fields: [
        {
          name: 'relatedPostsTitle',
          type: 'text',
          defaultValue: 'Related Articles',
          required: true,
          localized: true,
          admin: {
            description: 'Title for the related posts section',
          },
        },
        {
          name: 'relatedPostsDescription',
          type: 'text',
          defaultValue: 'Read more news about our achievements',
          required: true,
          localized: true,
          admin: {
            description: 'Description for the related posts section',
          },
        },
      ],
    },
  ],
  hooks: {
    afterChange: [revalidatePostPageSettings],
  },
};
