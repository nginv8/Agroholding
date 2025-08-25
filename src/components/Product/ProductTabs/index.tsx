'use client';

import { useTranslations } from 'next-intl';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { cn } from '@/utilities/ui';
import type { Product, ProductPageSetting } from '@/payload-types';

import DescriptionTab from './DescriptionTab';
import DocumentsTab from './DocumentsTab';
import SpecificationsTab from './SpecificationsTab';

interface ProductTabsProps {
  product: Product;
  settings: ProductPageSetting;
}

export default function ProductTabs({ product, settings }: ProductTabsProps) {
  const t = useTranslations();

  const visibleTabs = [];

  const hasDescription = !!product.fullDescription;
  const hasSpecifications =
    !!(product.specifications && product.specifications.length > 0) ||
    !!(product.additionalSpecifications && product.additionalSpecifications.length > 0) ||
    !!(settings?.globalAdditionalInfo && settings.globalAdditionalInfo.length > 0);
  const hasDocuments =
    !!(product.documents && product.documents.length > 0) ||
    !!(settings?.globalDocuments && settings.globalDocuments.length > 0);

  if (hasDescription) visibleTabs.push('description');
  if (hasSpecifications) visibleTabs.push('specifications');
  if (hasDocuments) visibleTabs.push('documents');

  if (visibleTabs.length === 0) {
    return null;
  }

  const defaultValue = visibleTabs[0];

  const gridCols =
    visibleTabs.length === 1
      ? 'grid-cols-1'
      : visibleTabs.length === 2
        ? 'grid-cols-1 sm:grid-cols-2'
        : 'grid-cols-1 sm:grid-cols-3';

  return (
    <section className="my-8">
      <div className="container px-4">
        <Tabs defaultValue={defaultValue} className="w-full">
          <TabsList className={cn('grid h-auto w-full gap-2', gridCols)}>
            {hasDescription && (
              <TabsTrigger value="description" className="min-h-6 truncate py-3 text-sm">
                {t('description')}
              </TabsTrigger>
            )}
            {hasSpecifications && (
              <TabsTrigger value="specifications" className="min-h-6 truncate py-3 text-sm">
                {t('specifications')}
              </TabsTrigger>
            )}
            {hasDocuments && (
              <TabsTrigger value="documents" className="min-h-6 truncate py-3 text-sm">
                {t('documents')}
              </TabsTrigger>
            )}
          </TabsList>

          {hasDescription && (
            <TabsContent value="description" className="mt-8">
              <DescriptionTab product={product} settings={settings} />
            </TabsContent>
          )}

          {hasSpecifications && (
            <TabsContent value="specifications" className="mt-8">
              <SpecificationsTab product={product} settings={settings} />
            </TabsContent>
          )}

          {hasDocuments && (
            <TabsContent value="documents" className="mt-8">
              <DocumentsTab product={product} settings={settings} />
            </TabsContent>
          )}
        </Tabs>
      </div>
    </section>
  );
}
