'use client';

import RichText from '@/components/RichText';
import type { Product, ProductPageSetting } from '@/payload-types';

interface ProductContentProps {
  product: Product;
  settings: ProductPageSetting;
}

export default function ProductContent({ product, settings }: ProductContentProps) {
  const hasProductContent = product.content;
  const hasGlobalContent = settings?.globalContent;

  if (!hasProductContent && !hasGlobalContent) {
    return null;
  }

  return (
    <section className="py-8 lg:py-16">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          {hasProductContent && product.content && (
            <div className="mb-8">
              <RichText data={product.content} enableGutter={false} />
            </div>
          )}

          {hasGlobalContent && settings.globalContent && (
            <div>
              <RichText data={settings.globalContent} enableGutter={false} />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
