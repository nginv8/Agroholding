import type { Block } from 'payload';

import { SectionBackground } from '@/fields/CustomFields/sectionBackground';
import { SectionTheme } from '@/fields/CustomFields/sectionTheme';
import { SectionTitle } from '@/fields/CustomFields/sectionTitle';

export const FAQBlock: Block = {
  slug: 'faq',
  labels: {
    singular: 'FAQ',
    plural: 'FAQ',
  },
  interfaceName: 'FAQBlock',
  fields: [
    SectionTheme(),
    SectionBackground(),
    SectionTitle({
      align: 'left',
    }),
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      label: 'Image',
      required: true,
    },
    {
      name: 'statistics',
      type: 'array',
      label: 'Statistics',
      maxRows: 2,
      admin: {
        initCollapsed: true,
        description: 'Add up to 2 statistics to display next to the FAQ section.',
      },
      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'Title',
          localized: true,
          required: true,
        },
        {
          name: 'value',
          type: 'text',
          label: 'Value',
          localized: true,
          required: true,
        },
      ],
    },
    {
      type: 'row',
      fields: [
        {
          name: 'additionalInfoTitle',
          type: 'text',
          label: 'Additional Information Title',
          localized: true,
          required: true,
        },
        {
          name: 'additionalInfo',
          type: 'textarea',
          label: 'Additional Information',
          localized: true,
          required: true,
        },
      ],
    },

    {
      name: 'faqs',
      type: 'array',
      label: 'FAQs',
      minRows: 1,
      maxRows: 12,
      admin: {
        initCollapsed: true,
        description: 'Best used with 5 - 10 items.',
      },
      fields: [
        {
          name: 'question',
          type: 'text',
          label: 'FAQ Question',
          localized: true,
          required: true,
        },
        {
          name: 'answer',
          type: 'textarea',
          label: 'FAQ Answer',
          localized: true,
        },
      ],
    },
  ],
};
