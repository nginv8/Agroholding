import { CollectionConfig } from 'payload';

import { v2 as cloudinary, UploadApiResponse } from 'cloudinary';

import { getResourceTypeByFilename } from './utilities';

type GeneratePayloadURL = (params: { collectionSlug: string; filename: string }) => string;

type GenerateCloudinaryURL = (params: {
  filename: string;
  resourceType: UploadApiResponse['resource_type'];
}) => string;

type GenerateURL = (params: { collection: CollectionConfig | string; filename: string }) => string;

const folder = process.env.NEXT_PUBLIC_CLOUDINARY_FOLDER_NAME;

const generatePayloadURL: GeneratePayloadURL = ({ collectionSlug = 'media', filename }) => {
  return `/api/${collectionSlug}/file/${encodeURIComponent(filename)}`;
};

const generateCloudinaryURL: GenerateCloudinaryURL = ({ filename, resourceType }) => {
  return cloudinary.url(`${folder ? folder + '/' : ''}${filename}`, {
    resource_type: resourceType,
    secure: true,
  });
};

export const generateURL: GenerateURL = ({ collection, filename }) => {
  const resourceType = getResourceTypeByFilename(filename);
  const collectionSlug = typeof collection === 'object' ? collection.slug : collection;

  if (resourceType === 'raw') {
    return generatePayloadURL({ collectionSlug, filename });
  }

  return generateCloudinaryURL({ filename, resourceType });
};
