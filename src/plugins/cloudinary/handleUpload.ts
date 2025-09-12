import { APIError } from 'payload';
import type { HandleUpload } from '@payloadcms/plugin-cloud-storage/types';

import { v2 as cloudinary } from 'cloudinary';

import { generatePublicId, getResourceTypeByFilename } from './utilities';

export const handleUpload: HandleUpload = async ({ data, file }) => {
  try {
    const resourceType = getResourceTypeByFilename(file.filename);
    const publicId = generatePublicId(file.filename, resourceType);
    const ext = file.filename.split('.').pop();

    await new Promise((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream(
        {
          public_id: publicId,
          resource_type: resourceType,
          overwrite: false,
          use_filename: true,
          secure: true,
          unique_filename: false,
          format: ext,
        },
        (error, result) => {
          if (error) return reject(error);
          if (!result) return reject(new Error('No result returned from Cloudinary'));
          if (String(result.name).toLowerCase() === 'error' || !result?.secure_url)
            return reject(new Error(result?.message || 'Cloudinary rejected upload'));

          data.cloudinary = {
            publicId: result.public_id,
            assetId: result.asset_id,
            type: result.type,
            resourceType: result.resource_type,
            format: result.format,
            folder: result.asset_folder,
            url: result.url,
            secureUrl: result.secure_url,
            duration: result.duration,
            eager: result.eager,
            width: result.width,
            height: result.height,
            displayName: result.display_name,
            signature: result.signature,
            version: result.version,
            bytes: result.bytes,
            createdAt: result.created_at,
          };

          resolve(data);
        }
      );

      uploadStream.end(file.buffer);
    });
  } catch (err) {
    console.error('Upload Error', err);
    throw new APIError(`Cloudinary upload Error: ${err || 'Unknown error'}`);
  }
};
