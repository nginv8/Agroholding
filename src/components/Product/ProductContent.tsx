import RichText from '@/components/RichText';
import type { Product, ProductPageSetting } from '@/payload-types';

interface ProductContentProps {
  product: Product;
  settings: ProductPageSetting;
}

export default function ProductContent({ product, settings }: ProductContentProps) {
  const hasProductContent =
    product.content &&
    product.content?.root.children.length &&
    !!(product.content?.root.children[0]?.children as any[])?.length; // eslint-disable-line @typescript-eslint/no-explicit-any

  const hasGlobalContent =
    settings?.globalContent &&
    settings?.globalContent?.root.children.length &&
    !!(settings?.globalContent?.root.children[0]?.children as any[])?.length; // eslint-disable-line @typescript-eslint/no-explicit-any

  if (!hasProductContent && !hasGlobalContent) {
    return null;
  }

  return (
    <div className="space-y-8">
      {hasProductContent && product.content && (
        <RichText data={product.content} enableGutter={false} className="prose-lg" />
      )}

      {hasGlobalContent && settings.globalContent && (
        <RichText data={settings.globalContent} enableGutter={false} className="prose-lg" />
      )}
    </div>
  );
}
