import type { GlobalConfig } from 'payload';

import { processMapInput } from '@/utilities/mapEmbedUtils';
import { iconSelect } from '@/fields/CustomFields/iconSelect';

import { revalidateContactInfo } from './hooks/revalidateContactInfo';

export const ContactInfo: GlobalConfig = {
  slug: 'contactInfo',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'phones',
      type: 'group',
      label: 'Phone Numbers',
      localized: true,
      fields: [
        {
          type: 'row',
          fields: [
            {
              name: 'title',
              type: 'text',
              defaultValue: 'Phones',
              admin: {
                description: 'Used as a heading for the phone numbers section',
              },
            },
            {
              name: 'description',
              type: 'text',
              admin: {
                description: 'A short description or subtitle for the phone numbers section',
              },
            },
          ],
        },
        {
          name: 'items',
          type: 'array',
          fields: [
            {
              type: 'row',
              fields: [
                {
                  name: 'number',
                  type: 'text',
                  label: 'Phone Number',
                  required: true,
                  validate: (value: unknown) => {
                    if (!value || typeof value !== 'string') return 'Phone number is required';
                    const phoneRegex = /^[+]?[0-9\s\-\(\)]+$/;
                    if (!phoneRegex.test(value)) {
                      return 'Invalid phone number format';
                    }
                    return true;
                  },
                },
                {
                  name: 'isPrimary',
                  type: 'checkbox',

                  defaultValue: false,
                },
              ],
            },
          ],
          admin: {
            initCollapsed: true,
          },
        },
      ],
    },
    {
      name: 'emails',
      type: 'group',
      label: 'Email Addresses',
      localized: true,
      fields: [
        {
          type: 'row',
          fields: [
            {
              name: 'title',
              type: 'text',

              defaultValue: 'Email',
              admin: { description: 'Used as a heading for the email addresses section' },
            },
            {
              name: 'description',
              type: 'text',

              admin: {
                description: 'A short description or subtitle for the email addresses section',
              },
            },
          ],
        },
        {
          name: 'items',
          type: 'array',
          localized: true,
          fields: [
            {
              type: 'row',
              fields: [
                {
                  name: 'email',
                  type: 'email',
                  label: 'Email Address',
                  required: true,
                },
                {
                  name: 'isPrimary',
                  type: 'checkbox',

                  defaultValue: false,
                },
              ],
            },
          ],
          admin: {
            initCollapsed: true,
          },
        },
      ],
    },
    {
      name: 'addresses',
      type: 'group',
      localized: true,
      fields: [
        {
          type: 'row',
          fields: [
            {
              name: 'title',
              type: 'text',
              defaultValue: 'Address',
              admin: { description: 'Used as a heading for the addresses section' },
            },
            {
              name: 'description',
              type: 'text',
              admin: { description: 'A short description or subtitle for the addresses section' },
            },
          ],
        },
        {
          name: 'items',
          type: 'array',
          fields: [
            {
              type: 'row',
              fields: [
                {
                  name: 'street',
                  type: 'text',
                  label: 'Street and House Number',
                  required: true,
                },
                {
                  name: 'city',
                  type: 'text',

                  required: true,
                },
              ],
            },
            {
              type: 'row',
              fields: [
                {
                  name: 'region',
                  type: 'text',
                  label: 'Region/State',
                },
                {
                  name: 'postalCode',
                  type: 'text',
                },
                {
                  name: 'country',
                  type: 'text',
                },
              ],
            },
            {
              name: 'isPrimary',
              type: 'checkbox',
              defaultValue: false,
            },
          ],
          admin: {
            initCollapsed: true,
          },
        },
        {
          label: 'Map Embed URL',
          name: 'mapSrc',
          type: 'text',
          admin: {
            description:
              'You can paste either a direct URL or full iframe embed code from Google Maps. The system will automatically extract the URL from iframe code.',
            placeholder: 'https://www.google.com/maps/embed?pb=... or full <iframe> code',
          },
          validate: (value: unknown) => {
            if (!value || typeof value !== 'string') {
              return true; // Optional field
            }

            const result = processMapInput(value);
            if (!result.isValid && result.error) {
              return result.error;
            }

            return true;
          },
          hooks: {
            beforeChange: [
              ({ value }) => {
                if (!value || typeof value !== 'string') {
                  return value;
                }

                const result = processMapInput(value);
                return result.url || value;
              },
            ],
          },
        },
      ],
    },
    {
      name: 'workingHours',
      type: 'group',
      localized: true,
      fields: [
        {
          type: 'row',
          fields: [
            {
              name: 'title',
              type: 'text',
              defaultValue: 'Working Hours',
              admin: { description: 'Used as a heading for the working hours section' },
            },
            {
              name: 'description',
              type: 'text',
              admin: {
                description: 'A short description or subtitle for the working hours section',
              },
            },
          ],
        },
        {
          type: 'row',
          fields: [
            {
              name: 'weekdays',
              type: 'text',
            },
            {
              name: 'weekends',
              type: 'text',
            },
            {
              name: 'holidays',
              type: 'text',
            },
          ],
        },
      ],
    },
    {
      name: 'socialMedia',
      type: 'group',
      localized: true,
      fields: [
        {
          name: 'items',
          type: 'array',
          fields: [
            {
              type: 'row',
              fields: [
                iconSelect(),
                {
                  name: 'name',
                  type: 'text',
                  label: 'Social Media Name',
                  required: true,
                },
                {
                  name: 'url',
                  type: 'text',
                  required: true,
                  validate: (value: unknown) => {
                    if (!value || typeof value !== 'string') return 'URL is required';
                    try {
                      new URL(value);
                      return true;
                    } catch {
                      return 'Please enter a valid URL';
                    }
                  },
                },
              ],
            },
          ],
          admin: {
            initCollapsed: true,
          },
        },
      ],
    },
  ],
  hooks: {
    afterChange: [revalidateContactInfo],
  },
};
