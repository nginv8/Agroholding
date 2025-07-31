import React from 'react';

import { getCachedGlobal } from '@/utilities/getGlobals';
import type { Footer as FooterType } from '@/payload-types';

import { FooterV1 } from './FooterV1';
import { FooterV2 } from './FooterV2';

export async function Footer() {
  const footerData = (await getCachedGlobal('footer', 1)()) as FooterType;

  const { layout = 'v1' } = footerData || {};

  if (layout === 'v2') {
    return <FooterV2 footerData={footerData} />;
  }

  return <FooterV1 footerData={footerData} />;
}
