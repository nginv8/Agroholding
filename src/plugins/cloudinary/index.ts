import type { Adapter } from '@payloadcms/plugin-cloud-storage/types';

import { v2 as cloudinary } from 'cloudinary';

import { generateURL } from './generateURL';
import { handleDelete } from './handleDelete';
import { handleUpload } from './handleUpload';
import { staticHandler } from './staticHandler';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const cloudinaryAdapter: Adapter = () => ({
  name: 'cloudinary-adapter',

  handleUpload,

  generateURL,

  handleDelete,

  staticHandler,
});

export { generateURL };
