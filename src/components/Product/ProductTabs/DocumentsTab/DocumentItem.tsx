'use client';

import { Download } from 'lucide-react';
import { useTranslations } from 'next-intl';

import { Button } from '@/components/ui/button';
import { formatFileSize, getFileType } from '@/utilities/fileUtils';

import type { DocumentItemProps } from '../types';

export default function DocumentItem({ doc, index }: DocumentItemProps) {
  const t = useTranslations();

  const file = typeof doc.file === 'object' ? doc.file : null;
  const mimeType = file?.mimeType || undefined;
  const cloudinary = file?.cloudinary || undefined;
  const filename = file?.filename || undefined;
  const url = file?.url || cloudinary?.secureUrl || cloudinary?.url || undefined;
  const size = file?.filesize || cloudinary?.bytes || undefined;
  const formattedSize = formatFileSize(size);

  const fileInfo = getFileType(mimeType, filename);
  const fileUrl = url || '';

  return (
    <div
      key={index}
      className="flex flex-col gap-3 rounded-lg border border-secondary-200 p-3 transition-colors hover:bg-secondary-50 sm:flex-row sm:items-center sm:justify-between sm:gap-0 sm:p-4"
    >
      <div className="flex items-center space-x-3">
        <div
          className={`flex size-8 flex-none items-center justify-center rounded-lg border sm:size-10 ${fileInfo.color}`}
        >
          <span className="text-xs font-semibold sm:text-sm">{fileInfo.type}</span>
        </div>
        <div>
          <div className="text-balance text-sm font-medium text-secondary-900 sm:text-base">
            {doc.name}
          </div>
          {formattedSize && <div className="text-sm text-secondary-500">{formattedSize}</div>}
        </div>
      </div>
      <Button size="sm" variant="outline" className="w-full sm:w-auto" asChild>
        <a href={fileUrl || '#'} download>
          <Download className="mr-2 size-4" />
          {t('download')}
        </a>
      </Button>
    </div>
  );
}
