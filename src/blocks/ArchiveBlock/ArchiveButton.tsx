'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';

import { Button } from '@/components/ui/button';

interface ArchiveButtonProps {
  collectionName: 'posts' | 'products';
  hasItems: boolean;
}

export const ArchiveButton: React.FC<ArchiveButtonProps> = ({ collectionName, hasItems }) => {
  const pathname = usePathname();
  const t = useTranslations();

  const linkHref = `/${collectionName}`;
  let buttonText = null;

  switch (collectionName) {
    case 'posts':
      buttonText = t('all-posts');
      break;
    case 'products':
      buttonText = t('all-products');
      break;
  }

  const isOnTargetPage = pathname.includes(`/${collectionName}`);

  if (!hasItems || !buttonText || isOnTargetPage) {
    return null;
  }

  return (
    <div className="content-container z-10">
      <div className="mt-12 flex justify-center">
        <Button asChild variant="outline" size="lg">
          <Link href={linkHref}>{buttonText}</Link>
        </Button>
      </div>
    </div>
  );
};
