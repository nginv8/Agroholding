import { getPayload } from 'payload';

import configPromise from '@payload-config';

export type SubscriberStatus = 'active' | 'unsubscribed' | 'pending';

export interface SubscriberData {
  email: string;
  status?: SubscriberStatus;
  source?: string;
}

const COLLECTION_NAME = 'subscribers';

export async function findExistingSubscriber(email: string) {
  const payload = await getPayload({ config: configPromise });

  const result = await payload.find({
    collection: COLLECTION_NAME,
    where: {
      email: {
        equals: email,
      },
    },
    limit: 1,
  });

  return result.docs[0] || null;
}

export async function createSubscriber(data: SubscriberData) {
  const payload = await getPayload({ config: configPromise });

  return await payload.create({
    collection: COLLECTION_NAME,
    data: {
      email: data.email,
      status: data.status || 'pending',
      source: data.source,
      subscribedAt: new Date().toISOString(),
    },
  });
}

export async function reactivateSubscriber(id: string | number) {
  const payload = await getPayload({ config: configPromise });

  return await payload.update({
    collection: COLLECTION_NAME,
    id,
    data: {
      status: 'active',
      subscribedAt: new Date().toISOString(),
    },
  });
}

export async function unsubscribeSubscriber(id: string | number) {
  const payload = await getPayload({ config: configPromise });

  return await payload.update({
    collection: COLLECTION_NAME,
    id,
    data: {
      status: 'unsubscribed',
    },
  });
}
