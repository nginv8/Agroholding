'use client';

import { useTranslations } from 'next-intl';

import type { DocumentsTabProps, DocumentUnion } from '../types';
import DocumentItem from './DocumentItem';

const EmptyState = () => {
  const t = useTranslations();

  return (
    <div>
      <h3 className="mb-4 text-lg font-semibold text-secondary-900 sm:mb-6 sm:text-xl">
        {t('documentation')}
      </h3>
      <p className="text-secondary-600">{t('no-documents')}</p>
    </div>
  );
};

const DocumentsList = ({ documents }: { documents: Array<DocumentUnion> }) => {
  const t = useTranslations();

  return (
    <div>
      <h3 className="mb-4 text-lg font-semibold text-secondary-900 sm:mb-6 sm:text-xl">
        {t('documentation')}
      </h3>
      <div className="space-y-3 sm:space-y-4">
        {documents.map((doc, index) => (
          <DocumentItem key={`doc-${index}`} doc={doc} index={index} />
        ))}
      </div>
    </div>
  );
};

export default function DocumentsTab({ product, settings }: DocumentsTabProps) {
  const productDocs = product.documents || [];
  const globalDocs = settings?.globalDocuments || [];
  const allDocuments = [...productDocs, ...globalDocs];

  if (allDocuments.length === 0) {
    return <EmptyState />;
  }

  return <DocumentsList documents={allDocuments} />;
}
