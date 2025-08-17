import type { GlobalAfterChangeHook } from 'payload';

import { revalidateTag } from 'next/cache';

export const revalidatePostPageSettings: GlobalAfterChangeHook = ({ doc, req: { payload } }) => {
  payload.logger.info(`Revalidating post page settings`);

  revalidateTag('global_postPageSettings');

  return doc;
};
