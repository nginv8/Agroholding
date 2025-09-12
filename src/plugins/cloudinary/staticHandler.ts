import { getPayload } from 'payload';
import type { CollectionSlug } from 'payload';
import type { StaticHandler } from '@payloadcms/plugin-cloud-storage/types';

import configPromise from '@/payload.config';

import { getResourceTypeByFilename } from './utilities';

export const staticHandler: StaticHandler = async (req, args) => {
  const { filename, collection } = args.params;

  if (!filename) {
    return new Response('Filename not provided', { status: 400 });
  }

  const resourceType = getResourceTypeByFilename(filename);

  if (resourceType === 'raw') {
    try {
      const payload = await getPayload({ config: configPromise });

      const mediaDoc = await payload.find({
        collection: collection as CollectionSlug,
        where: {
          filename: {
            equals: filename,
          },
        },
        limit: 1,
      });

      if (!mediaDoc.docs.length || !('cloudinary' in mediaDoc.docs[0])) {
        return new Response('File not found', { status: 404 });
      }

      const doc = mediaDoc.docs[0];
      const cloudinaryUrl = doc.cloudinary?.secureUrl || doc.cloudinary?.url;

      if (!cloudinaryUrl) {
        return new Response('Cloudinary URL not found', { status: 404 });
      }

      const res = await fetch(cloudinaryUrl);

      if (!res.ok) {
        return new Response('File not found on Cloudinary', { status: 404 });
      }

      const buffer = await res.arrayBuffer();
      const contentType =
        doc.mimeType || res.headers.get('Content-Type') || 'application/octet-stream';
      const downloadName = doc.cloudinary?.displayName || filename;

      return new Response(buffer, {
        status: 200,
        headers: {
          'Content-Type': contentType,
          'Content-Length': res.headers.get('Content-Length') || buffer.byteLength.toString(),
          'Cache-Control': 'public, max-age=31536000, immutable',
          'Content-Disposition': `attachment; filename="${downloadName}"`,
        },
      });
    } catch (error) {
      console.error('Error in staticHandler:', error);
      return new Response('Internal server error', { status: 500 });
    }
  }

  return new Response('Not implemented', { status: 501 });
};
