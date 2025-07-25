import { getPayload } from 'payload';

import { headers } from 'next/headers';
import config from '@payload-config';

export const maxDuration = 60; // This function can run for a maximum of 60 seconds

export async function POST(): Promise<Response> {
  const payload = await getPayload({ config });
  const requestHeaders = await headers();

  // Authenticate by passing request headers
  const { user } = await payload.auth({ headers: requestHeaders });

  if (!user) {
    return new Response('Action forbidden.', { status: 403 });
  }

  try {
    // Placeholder seed functionality - you can implement your seeding logic here
    payload.logger.info('Seed endpoint called, but no seeding logic implemented yet.');
    return Response.json({ success: true, message: 'Seed endpoint placeholder' });
  } catch (e) {
    payload.logger.error({ err: e, message: 'Error in seed endpoint' });
    return new Response('Error in seed endpoint.', { status: 500 });
  }
}
