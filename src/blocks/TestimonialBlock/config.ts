import type { Block } from 'payload'
import { SectionTitle } from '@/fields/CustomFields/sectionTitle'
import { SectionTheme } from '@/fields/CustomFields/sectionTheme'
import { SectionBackground } from '@/fields/CustomFields/sectionBackground'

export const TestimonialBlock: Block = {
  slug: 'testimonial',
  labels: {
    singular: 'Testimonial',
    plural: 'Testimonials',
  },
  interfaceName: 'TestimonialBlock',
  fields: [
    SectionTheme(),
    SectionBackground(),
    SectionTitle({
      align: 'center',
    }),
    {
      name: 'testimonials',
      type: 'array',
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
              name: 'role',
              type: 'text',
            },
            {
              name: 'rating',
              type: 'number',
              min: 1,
              max: 5,
              defaultValue: 5,
            },
          ],
        },
        {
          type: 'row',
          fields: [
            {
              name: 'image',
              type: 'upload',
              relationTo: 'media',
            },
            {
              name: 'avatar',
              type: 'upload',
              relationTo: 'media',
            },
          ],
        },
        {
          name: 'content',
          type: 'textarea',
          required: true,
        },
      ],
    },
  ],
}
