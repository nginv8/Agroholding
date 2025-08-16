import { Check, Mail, Package, Phone, Star } from 'lucide-react';
import * as motion from 'motion/react-client';
import { useTranslations } from 'next-intl';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import type { Product } from '@/payload-types';

interface ProductInfoProps {
  product: Product;
}

export default function ProductInfo({ product }: ProductInfoProps) {
  const t = useTranslations();

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="space-y-6"
    >
      <div>
        {product.categories && product.categories.length > 0 && (
          <Badge variant="secondary" className="mb-4">
            {typeof product.categories[0] === 'object'
              ? product.categories[0].title
              : product.categories[0]}
          </Badge>
        )}
        <h1 className="mb-4 text-4xl font-bold text-secondary-900">{product.title}</h1>

        {product.ratingEnabled && (
          <div className="mb-6 flex items-center space-x-4">
            <div className="flex items-center">
              {[...Array(product.rating || 5)].map((_, i) => (
                <Star key={i} className="size-5 fill-current text-accent-400" />
              ))}
            </div>
            <span className="text-secondary-600">
              ({product.reviewsCount || 0} {t('reviews')})
            </span>
          </div>
        )}

        {product.shortDescription && (
          <p className="mb-6 text-xl leading-relaxed text-secondary-600">
            {product.shortDescription}
          </p>
        )}

        <div className="mb-8 flex items-center space-x-6">
          <div>
            <span className="text-3xl font-bold text-primary-600">
              {product.price || t('price-on-request')}
            </span>
          </div>
          <div className="flex items-center text-primary-600">
            <Package className="mr-2 size-5" />
            <span className="font-medium">
              {product.availability === 'in_stock' && t('in-stock')}
              {product.availability === 'out_of_stock' && t('out-of-stock')}
              {product.availability === 'pre_order' && t('pre-order')}
              {!product.availability && t('in-stock')}
            </span>
          </div>
        </div>

        {product.features && product.features.length > 0 && (
          <div className="mb-8 space-y-4">
            <h3 className="text-lg font-semibold text-secondary-900">{t('key-features')}</h3>
            <div className="grid grid-cols-1 gap-3">
              {product.features.map((featureItem, index) => (
                <div key={index} className="flex items-center">
                  <Check className="mr-3 size-5 shrink-0 text-primary-600" />
                  <span className="text-secondary-700">{featureItem.feature}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="flex flex-col gap-4 sm:flex-row">
          <Button size="lg" className="flex-1">
            <Phone className="mr-2 size-5" />
            {t('call-us')}
          </Button>
          <Button size="lg" variant="outline" className="flex-1 bg-transparent">
            <Mail className="mr-2 size-5" />
            {t('send-email')}
          </Button>
        </div>

        {product.partNumber && (
          <div className="border-t border-secondary-200 pt-6">
            <div className="text-sm text-secondary-500">
              <span className="font-medium">{t('part-number')}</span> {product.partNumber}
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
}
