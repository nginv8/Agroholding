import * as motion from 'motion/react-client';
import { useTranslations } from 'next-intl';

import { IconRenderer } from '@/components/IconRenderer';
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
    <section className="bg-gray-50 py-8 lg:py-16">
      <div className="container px-4">
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

        <div className="flex flex-wrap justify-center gap-8">
          {benefits.map((benefit, index) => {
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="w-full max-w-xs flex-1 text-center sm:w-auto sm:min-w-[200px] sm:max-w-[280px]"
              >
                {benefit?.icon && (
                  <div className="mx-auto mb-4 flex size-16 items-center justify-center rounded-2xl bg-primary-100">
                    <IconRenderer name={benefit.icon} className="size-8 text-primary-600" />
                  </div>
                )}
                <h3 className="mb-2 text-lg font-semibold text-gray-900">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
