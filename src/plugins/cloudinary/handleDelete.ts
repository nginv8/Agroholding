import type { HandleDelete } from '@payloadcms/plugin-cloud-storage/types';

import { v2 as cloudinary } from 'cloudinary';

import { generatePublicId, getResourceTypeByFilename } from './utilities';

export const handleDelete: HandleDelete = async ({ filename }) => {
  try {
    const resourceType = getResourceTypeByFilename(filename);
    const publicId = generatePublicId(filename, resourceType);

    await cloudinary.uploader.destroy(publicId, {
      resource_type: resourceType,
      type: 'upload',
    });
  } catch (error) {
    console.error('Cloudinary Delete Error:', error);
  }
};
