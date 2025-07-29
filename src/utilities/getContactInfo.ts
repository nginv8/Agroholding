import type { Config } from '@/payload-types';

import { getCachedGlobal } from './getGlobals';

type ContactInfo = Config['globals']['contactInfo'];

export const getContactInfo = () => getCachedGlobal('contactInfo', 1)() as Promise<ContactInfo>;
