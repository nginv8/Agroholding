import { Block, Field, Plugin } from 'payload';
import { payloadCloudPlugin } from '@payloadcms/payload-cloud';
import { FixedToolbarFeature, HeadingFeature, lexicalEditor } from '@payloadcms/richtext-lexical';
import { formBuilderPlugin, fields as formFields } from '@payloadcms/plugin-form-builder';
import { nestedDocsPlugin } from '@payloadcms/plugin-nested-docs';
import { redirectsPlugin } from '@payloadcms/plugin-redirects';
import { searchPlugin } from '@payloadcms/plugin-search';
import { seoPlugin } from '@payloadcms/plugin-seo';
import { GenerateTitle, GenerateURL } from '@payloadcms/plugin-seo/types';

import { revalidateRedirects } from '@/hooks/revalidateRedirects';
import { getServerSideURL } from '@/utilities/getURL';
import { beforeSyncWithSearch } from '@/search/beforeSync';
import { searchFields } from '@/search/fieldOverrides';
import { Page, Post } from '@/payload-types';

const generateTitle: GenerateTitle<Post | Page> = ({ doc }) => {
  return doc?.title ? `${doc.title} | Agrholding Website` : 'Agrholding Website';
};

const generateURL: GenerateURL<Post | Page> = ({ doc }) => {
  const url = getServerSideURL();

  return doc?.slug ? `${url}/${doc.slug}` : url;
};

const addPlaceholderToField = (fieldName: keyof typeof formFields): Block => {
  let baseBlockConfig: Block;

  const fieldConfigValue = formFields[fieldName];

  if (typeof fieldConfigValue === 'function') {
    baseBlockConfig = fieldConfigValue(undefined) as Block;
  } else {
    baseBlockConfig = fieldConfigValue;
  }

  if (!baseBlockConfig.slug) {
    baseBlockConfig.slug = `${fieldName}-form-field-config`;
  }

  if (!baseBlockConfig.fields) {
    baseBlockConfig.fields = [];
  }

  const currentFields: Field[] = baseBlockConfig.fields;

  const requiredField = currentFields.find(
    (field): field is Field & { name: string } => 'name' in field && field.name === 'required'
  );

  const filteredCurrentFields = currentFields.filter(
    (field) => !('name' in field && field.name === 'required')
  );

  return {
    ...baseBlockConfig,
    fields: [
      ...filteredCurrentFields,
      {
        type: 'row',
        fields: [
          {
            name: 'placeholder',
            label: 'Placeholder Text',
            type: 'text',
            localized: true,
          },
          ...(requiredField ? [requiredField] : []),
        ],
      },
    ],
  };
};

export const plugins: Plugin[] = [
  redirectsPlugin({
    collections: ['pages', 'posts'],
    overrides: {
      // @ts-expect-error
      fields: ({ defaultFields }) => {
        return defaultFields.map((field) => {
          if ('name' in field && field.name === 'from') {
            return {
              ...field,
              admin: {
                description: 'You will need to rebuild the website when changing this field.',
              },
            };
          }
          return field;
        });
      },
      hooks: {
        afterChange: [revalidateRedirects],
      },
    },
  }),
  nestedDocsPlugin({
    collections: ['categories'],
    generateURL: (docs) => docs.reduce((url, doc) => `${url}/${doc.slug}`, ''),
  }),
  seoPlugin({
    generateTitle,
    generateURL,
  }),
  formBuilderPlugin({
    fields: {
      payment: false,
      text: addPlaceholderToField('text'),
      email: addPlaceholderToField('email'),
      number: addPlaceholderToField('number'),
      textarea: addPlaceholderToField('textarea'),
    },
    formOverrides: {
      fields: ({ defaultFields }) => {
        return defaultFields.map((field) => {
          if ('name' in field && field.name === 'confirmationMessage') {
            return {
              ...field,
              editor: lexicalEditor({
                features: ({ rootFeatures }) => {
                  return [
                    ...rootFeatures,
                    FixedToolbarFeature(),
                    HeadingFeature({ enabledHeadingSizes: ['h1', 'h2', 'h3', 'h4'] }),
                  ];
                },
              }),
            } as Field;
          }

          const fieldType = 'type' in field ? field.type : null;
          const supportsPlaceholder = ['text', 'email', 'number', 'textarea'].includes(
            fieldType || ''
          );

          if (
            supportsPlaceholder &&
            'placeholder' in field &&
            typeof field.placeholder === 'string' &&
            field.placeholder.length > 0
          ) {
            return {
              ...field,
              admin: {
                ...field.admin,
                placeholder: field.placeholder,
              },
            } as Field;
          }

          return field;
        });
      },
    },
  }),
  searchPlugin({
    collections: ['posts'],
    beforeSync: beforeSyncWithSearch,
    searchOverrides: {
      fields: ({ defaultFields }) => {
        return [...defaultFields, ...searchFields];
      },
    },
  }),
  payloadCloudPlugin(),
];
