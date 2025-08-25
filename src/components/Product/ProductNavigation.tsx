import { useTranslations } from 'next-intl';

import { Breadcrumbs } from '@/components/Breadcrumbs';
import type { Product } from '@/payload-types';

interface ProductNavigationProps {
  product: Product;
}

export default function ProductNavigation({ product }: ProductNavigationProps) {
  const t = useTranslations();

  return (
    <Breadcrumbs
      items={[
        { label: t('products'), href: '/products' },
        { label: product.title, isActive: true },
      ]}
      withSection={true}
    />
  );
}
