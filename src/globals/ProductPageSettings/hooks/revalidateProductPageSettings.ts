import type { GlobalAfterChangeHook } from 'payload';

import { revalidateTag } from 'next/cache';

export const revalidateProductPageSettings: GlobalAfterChangeHook = ({ doc, req: { payload } }) => {
  payload.logger.info(`Revalidating product page settings`);

  revalidateTag('global_productPageSettings');

  return doc;
};
