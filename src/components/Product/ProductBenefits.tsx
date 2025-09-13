import * as motion from 'motion/react-client';
import { useTranslations } from 'next-intl';

import { IconRenderer } from '@/components/IconRenderer';
import { cn } from '@/utilities/ui';
import { isValidIconName } from '@/utilities/validateIcon';
import type { Product, ProductPageSetting } from '@/payload-types';

interface ProductBenefitsProps {
  product: Product;
  settings: ProductPageSetting;
}

export default function ProductBenefits({ product, settings }: ProductBenefitsProps) {
  const t = useTranslations();

  const benefits =
    product.benefits && product.benefits.length > 0
      ? product.benefits
      : settings?.defaultBenefits || [];

  if (benefits.length === 0) {
    return null;
  }

  return (
    <div className="rounded-xl bg-secondary-100 px-4 py-12 md:px-8 lg:py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-12 text-center"
      >
        <h2 className="mb-4 text-3xl font-bold text-gray-900">{t('why-choose-our-products')}</h2>
        <p className="text-gray-600">{t('industry-leader-benefits')}</p>
      </motion.div>

      <div
        className={cn('grid gap-8', {
          'grid-cols-1': benefits.length === 1,
          'grid-cols-1 md:grid-cols-2': benefits.length === 2,
          'grid-cols-1 md:grid-cols-2 lg:grid-cols-3': benefits.length >= 3,
        })}
      >
        {benefits.map((benefit, index) => {
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              {benefit?.icon && isValidIconName(benefit.icon) && (
                <div className="mx-auto mb-4 flex size-16 items-center justify-center rounded-2xl bg-white">
                  <IconRenderer name={benefit.icon} className="size-8 text-primary" />
                </div>
              )}
              <h3 className="mb-2 text-lg font-semibold text-gray-900">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
