'use client';

import RichText from '@/components/RichText';
import type { Product, ProductPageSetting } from '@/payload-types';

interface DescriptionTabProps {
  product: Product;
  settings: ProductPageSetting;
}

export default function DescriptionTab({ product }: DescriptionTabProps) {
  if (!product.fullDescription) {
    return null;
  }

  return <RichText data={product.fullDescription} enableGutter={false} className="prose-lg" />;
}
