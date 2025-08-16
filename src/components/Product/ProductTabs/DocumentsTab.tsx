'use client';

import { Download } from 'lucide-react';
import { useTranslations } from 'next-intl';

import { Button } from '@/components/ui/button';
import type { Product, ProductPageSetting } from '@/payload-types';

interface DocumentsTabProps {
  product: Product;
  settings: ProductPageSetting;
}

export default function DocumentsTab({ product, settings }: DocumentsTabProps) {
  const t = useTranslations();
  const productDocs = product.documents || [];
  const globalDocs = settings?.globalDocuments || [];
  const allDocuments = [...productDocs, ...globalDocs];

  return (
    <div>
      <h3 className="mb-4 text-lg font-semibold text-secondary-900 sm:mb-6 sm:text-xl">
        {t('documentation')}
      </h3>
      {allDocuments.length > 0 ? (
        <div className="space-y-3 sm:space-y-4">
          {allDocuments.map((doc, index) => {
            const fileUrl = typeof doc.file === 'object' ? doc.file.url : '#';
            return (
              <div
                key={index}
                className="flex flex-col gap-3 rounded-lg border border-secondary-200 p-3 transition-colors hover:bg-secondary-50 sm:flex-row sm:items-center sm:justify-between sm:gap-0 sm:p-4"
              >
                <div className="flex flex-1 items-center space-x-3">
                  <div className="flex size-8 items-center justify-center rounded-lg bg-red-100 sm:size-10">
                    <span className="text-xs font-semibold text-red-600 sm:text-xs">
                      {doc.type}
                    </span>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-secondary-900 sm:text-base">
                      {doc.name}
                    </div>
                    {doc.size && <div className="text-sm text-secondary-500">{doc.size}</div>}
                  </div>
                </div>
                <Button size="sm" variant="outline" className="w-full sm:w-auto" asChild>
                  <a href={fileUrl || '#'} download>
                    <Download className="mr-2 size-4 sm:size-4" />
                    {t('download')}
                  </a>
                </Button>
              </div>
            );
          })}
        </div>
      ) : (
        <p className="text-secondary-600">{t('no-documents')}</p>
      )}
    </div>
  );
}
