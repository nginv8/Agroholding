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
      <h3 className="mb-6 text-xl font-semibold text-secondary-900">{t('documentation')}</h3>
      {allDocuments.length > 0 ? (
        <div className="space-y-4">
          {allDocuments.map((doc, index) => {
            const fileUrl = typeof doc.file === 'object' ? doc.file.url : '#';
            return (
              <div
                key={index}
                className="flex items-center justify-between rounded-lg border border-secondary-200 p-4 transition-colors hover:bg-secondary-50"
              >
                <div className="flex items-center space-x-3">
                  <div className="flex size-10 items-center justify-center rounded-lg bg-red-100">
                    <span className="text-xs font-semibold text-red-600">{doc.type}</span>
                  </div>
                  <div>
                    <div className="font-medium text-secondary-900">{doc.name}</div>
                    {doc.size && <div className="text-sm text-secondary-500">{doc.size}</div>}
                  </div>
                </div>
                <Button size="sm" variant="outline" asChild>
                  <a href={fileUrl || '#'} download>
                    <Download className="mr-2 size-4" />
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
