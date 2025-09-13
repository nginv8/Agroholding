import { TypedLocale } from 'payload';

import React from 'react';
import Link from 'next/link';
import { Mail, Phone } from 'lucide-react';
import { getLocale } from 'next-intl/server';

import LocaleSwitcher from '@/components/LocaleSwitcher';
import { Logo } from '@/components/Logo/Logo';
import { Media } from '@/components/Media';
import { getPrimaryEmail, getPrimaryPhone } from '@/utilities/formatContactInfo';
import { getCachedGlobal } from '@/utilities/getGlobals';
import { cn } from '@/utilities/ui';
import type { ContactInfo as ContactInfoType, Header as HeaderType } from '@/payload-types';

import { HeaderNav } from './Nav';

export async function Header() {
  const locale = (await getLocale()) as TypedLocale;
  const [headerData, contactInfoData] = await Promise.all([
    getCachedGlobal('header', 1, locale)() as Promise<HeaderType>,
    getCachedGlobal('contactInfo', 1, locale)() as Promise<ContactInfoType>,
  ]);
  const primaryPhone = getPrimaryPhone(contactInfoData);
  const primaryEmail = getPrimaryEmail(contactInfoData);
  const logoStyle = 'dark';

  return (
    <header
      className={cn(
        'sticky inset-x-0 z-50 border-b bg-white/90 backdrop-blur-md',
        primaryPhone || primaryEmail ? '-top-8' : 'top-0'
      )}
    >
      {/* Contacts */}
      {(primaryPhone || primaryEmail) && (
        <div className="bg-primary-700" data-theme="dark">
          <div
            className={cn(
              'content-container flex h-8 items-center gap-8',
              !primaryPhone && !primaryEmail ? 'justify-end' : 'justify-between'
            )}
          >
            {(primaryPhone || primaryEmail) && (
              <div className="flex flex-none items-center gap-4 md:gap-8">
                {primaryPhone && (
                  <Link
                    href={`tel:${primaryPhone}`}
                    className="flex items-center text-sm font-light text-white transition-colors hover:text-accent-200"
                  >
                    <Phone className="mr-2" size={18} />
                    {primaryPhone}
                  </Link>
                )}

                {primaryEmail && (
                  <Link
                    href={`mailto:${primaryEmail}`}
                    className="hidden items-center font-light text-white transition-colors hover:text-accent-200 md:flex"
                  >
                    <Mail className="mr-2" size={18} />
                    {primaryEmail}
                  </Link>
                )}
              </div>
            )}

            <LocaleSwitcher />
          </div>
        </div>
      )}

      {/* Header content */}
      <div className="content-container">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            {headerData.logo?.[logoStyle] && typeof headerData.logo[logoStyle] !== 'string' ? (
              <Media
                resource={headerData.logo[logoStyle]}
                className="h-14 w-auto"
                imgClassName="object-contain"
              />
            ) : (
              <Logo variant={logoStyle} />
            )}
          </Link>

          <HeaderNav data={headerData} />
        </div>
      </div>
    </header>
  );
}
