'use client';

import { Check, Mail, Package, Phone } from 'lucide-react';
import * as motion from 'motion/react-client';
import { useTranslations } from 'next-intl';

import { getPrimaryEmail, getPrimaryPhone } from '@/utilities/formatContactInfo';
import { cn } from '@/utilities/ui';
import type { ContactInfo, Product } from '@/payload-types';

import OrderFormPopup from './OrderFormPopup';

interface ProductInfoProps {
  product: Product;
  contactInfo: ContactInfo;
}

export default function ProductInfo({ product, contactInfo }: ProductInfoProps) {
  const t = useTranslations();

  const primaryPhone = getPrimaryPhone(contactInfo);
  const primaryEmail = getPrimaryEmail(contactInfo);

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="space-y-6"
    >
      {product.shortDescription && (
        <p className="text-lg leading-relaxed text-secondary-600">{product.shortDescription}</p>
      )}

      <div className="flex flex-col space-y-4 sm:flex-row sm:items-center sm:space-x-6 sm:space-y-0">
        <span className="text-xl font-bold text-primary-600">
          {product.price || t('price-on-request')}
        </span>

        <div
          className={cn('flex items-center', {
            'text-error': product.availability === 'out_of_stock',
            'text-warning': product.availability === 'pre_order',
            'text-success': product.availability === 'in_stock',
          })}
        >
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
        <div className="space-y-4">
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

      <div className="flex gap-4 pt-4">
        <OrderFormPopup
          product={product}
          buttonClassName="flex-1"
          buttonSize="default"
          buttonVariant="default"
        />
        {primaryPhone && (
          <a
            href={`tel:${primaryPhone}`}
            className="inline-flex size-10 flex-none items-center justify-center rounded-md border border-input bg-background transition-colors hover:bg-primary hover:text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            aria-label={t('call-us')}
            title={`${t('call-us')}: ${primaryPhone}`}
          >
            <Phone className="size-5" />
          </a>
        )}

        {primaryEmail && (
          <a
            href={`mailto:${primaryEmail}`}
            className="inline-flex size-10 flex-none items-center justify-center rounded-md border border-input bg-background transition-colors hover:bg-primary hover:text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            aria-label={t('send-email')}
            title={`${t('send-email')}: ${primaryEmail}`}
          >
            <Mail className="size-5" />
          </a>
        )}
      </div>

      {product.itemCode && (
        <div className="text-sm font-bold text-secondary-500">
          <span className="font-medium">{t('item-code')}: </span> {product.itemCode}
        </div>
      )}
    </motion.div>
  );
}
