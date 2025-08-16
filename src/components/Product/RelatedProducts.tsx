'use client';

import Link from 'next/link';
import { Star } from 'lucide-react';
import * as motion from 'motion/react-client';
import { useTranslations } from 'next-intl';

import { Media } from '@/components/Media';
import type { Product } from '@/payload-types';

interface RelatedProductsProps {
  relatedProducts: Product[];
}

export default function RelatedProducts({ relatedProducts }: RelatedProductsProps) {
  const t = useTranslations();

  if (!relatedProducts.length) {
    return null;
  }

  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
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

          <div className="grid gap-8 md:grid-cols-3">
            {relatedProducts.slice(0, 3).map((relatedProduct, index) => {
              const relatedImage = relatedProduct.images?.[0];

              return (
                <motion.div
                  key={relatedProduct.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group"
                >
                  <Link href={`/products/${relatedProduct.slug}`}>
                    <div className="overflow-hidden rounded-xl bg-white shadow-lg transition-shadow hover:shadow-xl">
                      <div className="relative h-64 overflow-hidden">
                        <Media
                          resource={relatedImage?.image}
                          alt={relatedProduct.title}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                      <div className="p-6">
                        <div className="mb-2 flex items-center">
                          {[...Array(relatedProduct.rating || 5)].map((_, i) => (
                            <Star key={i} className="size-4 fill-current text-accent-400" />
                          ))}
                        </div>
                        <h3 className="mb-2 text-lg font-semibold text-gray-900 transition-colors group-hover:text-primary-700">
                          {relatedProduct.title}
                        </h3>
                        <p className="font-semibold text-primary-600">
                          {relatedProduct.price || t('price-on-request')}
                        </p>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
