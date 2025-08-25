import { Block, Field, Plugin } from 'payload';
import { FixedToolbarFeature, HeadingFeature, lexicalEditor } from '@payloadcms/richtext-lexical';
import { formBuilderPlugin, fields as formFields } from '@payloadcms/plugin-form-builder';
import { nestedDocsPlugin } from '@payloadcms/plugin-nested-docs';
import { redirectsPlugin } from '@payloadcms/plugin-redirects';
import { searchPlugin } from '@payloadcms/plugin-search';
import { seoPlugin } from '@payloadcms/plugin-seo';
import { GenerateDescription, GenerateTitle, GenerateURL } from '@payloadcms/plugin-seo/types';

import { cloudinaryStorage } from 'payload-cloudinary';

import { revalidateRedirects } from '@/hooks/revalidateRedirects';
import { getServerSideURL } from '@/utilities/getURL';
import { beforeSyncWithSearch } from '@/search/beforeSync';
import { searchFields } from '@/search/fieldOverrides';
import { Page, Post, Product } from '@/payload-types';

const generateTitle: GenerateTitle<Post | Product | Page> = ({ doc }) => {
  const SITE_NAME = 'Agrholding Website';
  return doc?.title ? `${doc.title} | ${SITE_NAME}` : SITE_NAME;
};

const generateDescription: GenerateDescription<Post | Product | Page> = ({
  doc,
  collectionConfig,
}) => {
  if (collectionConfig?.slug === 'products' && 'shortDescription' in doc && doc.shortDescription) {
    const description = doc.shortDescription.trim();
    return description.length > 157 ? description.substring(0, 157) + '...' : description;
  }

  if (collectionConfig?.slug === 'posts') {
    if ('excerpt' in doc && doc.excerpt && typeof doc.excerpt === 'string') {
      return doc.excerpt;
    }
  }

  return '';
};

const generateURL: GenerateURL<Post | Product | Page> = ({ doc }) => {
  const url = getServerSideURL();

  return doc?.slug ? `${url}/${doc.slug}` : url;
};

const addPlaceholderToField = (fieldName: keyof typeof formFields): Block => {
  const baseField = formFields[fieldName];

  if ('fields' in baseField && Array.isArray(baseField.fields)) {
    return {
      ...baseField,
      fields: [
        ...baseField.fields,
        {
          name: 'placeholder',
          label: 'Placeholder Text',
          type: 'text',
          localized: true,
          admin: {
            width: '50%',
          },
        },
      ],
    } as Block;
  }

  return baseField as Block;
};

const basePlugins: Plugin[] = [
  redirectsPlugin({
    collections: ['pages', 'posts'],
    overrides: {
      // @ts-expect-error Payload plugin type mismatch for fields function parameter
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
  cloudinaryStorage({
    config: {
      cloud_name: process.env.CLOUDINARY_CLOUD_NAME || '',
      api_key: process.env.CLOUDINARY_API_KEY || '',
      api_secret: process.env.CLOUDINARY_API_SECRET || '',
    },
    collections: {
      media: true,
    },
    disableLocalStorage: true,
    enabled: true,
  }),
  nestedDocsPlugin({
    collections: ['categories'],
    generateURL: (docs) => docs.reduce((url, doc) => `${url}/${doc.slug}`, ''),
  }),
  seoPlugin({
    generateTitle,
    generateDescription,
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
    collections: ['posts', 'products'],
    beforeSync: beforeSyncWithSearch,
    searchOverrides: {
      fields: ({ defaultFields }) => {
        return [...defaultFields, ...searchFields];
      },
    },
  }),
];

export const plugins: Plugin[] = basePlugins;
