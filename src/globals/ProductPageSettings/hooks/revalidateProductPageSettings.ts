import type { GlobalAfterChangeHook } from 'payload';

import { revalidatePath } from 'next/cache';

export const revalidateProductPageSettings: GlobalAfterChangeHook = ({ doc, req: { payload } }) => {
  payload.logger.info(`Revalidating product page settings`);

  revalidatePath('/[locale]/products/[slug]', 'page');
  revalidatePath('/[locale]/demo/product-demo', 'page');

  return doc;
};
