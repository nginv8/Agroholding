import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Mail, Phone } from 'lucide-react';

import { getPrimaryEmail, getPrimaryPhone } from '@/utilities/formatContactInfo';
import { getCachedGlobal } from '@/utilities/getGlobals';
import { cn } from '@/utilities/ui';

import { HeaderNav } from './Nav';

export async function Header() {
  const [headerData, contactInfoData] = await Promise.all([
    getCachedGlobal('header', 1)(),
    getCachedGlobal('contactInfo', 1)(),
  ]);
  const primaryPhone = getPrimaryPhone(contactInfoData);
  const primaryEmail = getPrimaryEmail(contactInfoData);

  return (
    <header
      className={cn(
        'sticky inset-x-0 z-50 border-b bg-white/90 backdrop-blur-md',
        primaryPhone || primaryEmail ? '-top-8' : 'top-0'
      )}
    >
      {/* Contacts */}
      {(primaryPhone || primaryEmail) && (
        <div className="bg-primary-700">
          <div className="container mx-auto flex h-8 items-center justify-center gap-8 px-4 md:justify-between">
            {primaryPhone && (
              <Link
                href={`tel:${primaryPhone}`}
                className="flex items-center font-light text-white transition-colors hover:text-accent-200"
              >
                <Phone size={18} className="mr-2" />
                {primaryPhone}
              </Link>
            )}
            {primaryEmail && (
              <Link
                href={`mailto:${primaryEmail}`}
                className="ml-4 hidden items-center font-light text-white transition-colors hover:text-accent-200 md:flex"
              >
                <Mail size={18} className="mr-2" />
                {primaryEmail}
              </Link>
            )}
          </div>
        </div>
      )}

      {/* Header content */}
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/logo.svg"
              priority
              loading="eager"
              alt="logo"
              width="160"
              height="48"
              className="h-14 w-auto"
            />
          </Link>

          <HeaderNav data={headerData} />
        </div>
      </div>
    </header>
  );
}
