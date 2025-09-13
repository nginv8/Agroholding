import { TypedLocale } from 'payload';

import React from 'react';
import { getLocale } from 'next-intl/server';

import { getCachedGlobal } from '@/utilities/getGlobals';
import type { ContactInfo as ContactInfoType, Footer as FooterType } from '@/payload-types';

import { FooterV1 } from './FooterV1';
import { FooterV2 } from './FooterV2';

export async function Footer() {
  const locale = (await getLocale()) as TypedLocale;
  const [footerData, contactInfoData] = await Promise.all([
    getCachedGlobal('footer', 1, locale)() as Promise<FooterType>,
    getCachedGlobal('contactInfo', 1, locale)() as Promise<ContactInfoType>,
  ]);

  if (footerData?.layout === 'v1') {
    return <FooterV1 footerData={footerData} contactInfoData={contactInfoData} />;
  } else if (footerData?.layout === 'v2') {
    return <FooterV2 footerData={footerData} contactInfoData={contactInfoData} />;
  } else {
    return null;
  }
}
