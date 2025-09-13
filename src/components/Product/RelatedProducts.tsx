import Link from 'next/link';
import { Star } from 'lucide-react';
import * as motion from 'motion/react-client';
import { useTranslations } from 'next-intl';

import { Media } from '@/components/Media';
import { cn } from '@/utilities/ui';
import type { Product, ProductPageSetting } from '@/payload-types';

interface RelatedProductsProps {
  relatedProducts: Product[];
  settings: ProductPageSetting;
  variant?: 'default' | 'sidebar';
}

export default function RelatedProducts({
  relatedProducts,
  settings,
  variant = 'default',
}: RelatedProductsProps) {
  const t = useTranslations();

  if (!relatedProducts.length) {
    return null;
  }

  if (variant === 'sidebar') {
    return (
      <div className="space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-2 text-xl font-bold text-gray-900">{t('related-products')}</h2>
          <p className="mb-4 text-sm text-gray-600">{t('related-products-description')}</p>
        </motion.div>

        <div className="space-y-4">
          {relatedProducts.slice(0, 5).map((relatedProduct, index) => (
            <motion.div
              key={relatedProduct.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <Link
                href={`/products/${relatedProduct.slug}`}
                className="flex gap-3 overflow-hidden rounded-lg bg-white p-3 shadow-sm transition-shadow hover:shadow-md"
              >
                {relatedProduct.meta?.image && typeof relatedProduct.meta.image === 'object' && (
                  <div className="relative size-16 shrink-0 overflow-hidden rounded">
                    <Media
                      resource={relatedProduct.meta.image}
                      className="size-full transition-transform duration-300 group-hover:scale-105"
                      imgClassName="size-full object-cover"
                    />
                  </div>
                )}
                <div className="flex-1">
                  <h3 className="mb-1 line-clamp-2 text-base font-semibold text-gray-900 transition-colors group-hover:text-primary-700">
                    {relatedProduct.title}
                  </h3>
                  <p className="text-sm font-semibold text-primary-600">
                    {relatedProduct.price || t('price-on-request')}
                  </p>
                  {settings.isRatingEnabled && (
                    <div className="mt-1 flex items-center">
                      {[...Array(relatedProduct.rating || 5)].map((_, i) => (
                        <Star key={i} className="size-3 fill-current text-accent-400" />
                      ))}
                    </div>
                  )}
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <section className="bg-secondary-100 py-8 lg:py-16">
      <div className="content-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold text-gray-900">{t('related-products')}</h2>
          <p className="text-gray-600">{t('related-products-description')}</p>
        </motion.div>

        <div
          className={cn('grid gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-8', {
            'xl:grid-cols-4': relatedProducts?.length > 3,
          })}
        >
          {relatedProducts.slice(0, 4).map((relatedProduct, index) => {
            return (
              <motion.div
                key={relatedProduct.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <Link
                  href={`/products/${relatedProduct.slug}`}
                  className="inline-block size-full overflow-hidden rounded-xl bg-white shadow-lg transition-shadow hover:shadow-xl"
                >
                  {relatedProduct.meta?.image && typeof relatedProduct.meta.image === 'object' && (
                    <div className="relative h-64 overflow-hidden">
                      <Media
                        resource={relatedProduct.meta.image}
                        className="size-full transition-transform duration-300 group-hover:scale-105"
                        imgClassName="size-full object-cover"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    {settings.isRatingEnabled && (
                      <div className="mb-2 flex items-center">
                        {[...Array(relatedProduct.rating || 5)].map((_, i) => (
                          <Star key={i} className="size-4 fill-current text-accent-400" />
                        ))}
                      </div>
                    )}

                    <h3 className="mb-2 text-lg font-semibold text-gray-900 transition-colors group-hover:text-primary-700">
                      {relatedProduct.title}
                    </h3>
                    <p className="font-semibold text-primary-600">
                      {relatedProduct.price || t('price-on-request')}
                    </p>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
