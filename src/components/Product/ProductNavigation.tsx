'use client';

import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import * as motion from 'motion/react-client';
import { useTranslations } from 'next-intl';

import type { Product } from '@/payload-types';

interface ProductNavigationProps {
  product: Product;
}

export default function ProductNavigation({ product }: ProductNavigationProps) {
  const t = useTranslations();

  return (
    <section className="bg-secondary-50 py-2">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <nav className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-primary-600 transition-colors hover:text-primary-700">
              {t('home')}
            </Link>
            <ChevronRight className="size-4 text-secondary-400" />
            <Link
              href="/products"
              className="text-primary-600 transition-colors hover:text-primary-700"
            >
              {t('products')}
            </Link>
            <ChevronRight className="size-4 text-secondary-400" />
            <span className="max-w-xs truncate text-secondary-600" title={product.title}>
              {product.title}
            </span>
          </nav>
        </motion.div>
      </div>
    </section>
  );
}
