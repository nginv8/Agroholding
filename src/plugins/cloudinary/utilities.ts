import { type UploadApiResponse } from 'cloudinary';

import { IMAGE_EXTENSIONS, RAW_EXTENSIONS, VIDEO_EXTENSIONS } from '@/constants/mediaExtensions';

const folder = process.env.NEXT_PUBLIC_CLOUDINARY_FOLDER_NAME;

export const generatePublicId = (
  filename: string,
  resourceType: UploadApiResponse['resource_type']
): string => {
  const sanitizedFilename = filename
    .toLowerCase()
    .replace(/\.[^/.]+$/, '') // remove extension
    .replace(/[^a-z0-9]/g, '-') // replace invalid chars
    .replace(/-+/g, '-') // Replace consecutive hyphens with a single
    .replace(/^-|-$/g, ''); // Remove leading or trailing hyphens

  if (resourceType === 'raw') {
    const ext = filename.split('.').pop();
    return `${folder ? folder + '/' : ''}${sanitizedFilename}.${ext}`;
  }

  return `${folder ? folder + '/' : ''}${sanitizedFilename}`;
};

export const getResourceTypeByFilename = (filename: string): UploadApiResponse['resource_type'] => {
  if (IMAGE_EXTENSIONS.some((ext) => filename.endsWith(ext))) return 'image';
  if (VIDEO_EXTENSIONS.some((ext) => filename.endsWith(ext))) return 'video';
  if (RAW_EXTENSIONS.some((ext) => filename.endsWith(ext))) return 'raw';
  return 'auto';
};

export const getCloudinaryFormatOptions = (ext: string) => {
  return IMAGE_EXTENSIONS.includes(`.${ext}`) ||
    VIDEO_EXTENSIONS.includes(`.${ext}`) ||
    RAW_EXTENSIONS.includes(`.${ext}`)
    ? { format: ext }
    : {};
};
