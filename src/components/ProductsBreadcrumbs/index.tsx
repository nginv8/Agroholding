'use client';

import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import * as motion from 'motion/react-client';
import { useTranslations } from 'next-intl';
import { useSearchParams } from 'next/navigation';

export default function ProductsBreadcrumbs() {
  const t = useTranslations();
  const searchParams = useSearchParams();
  const category = searchParams.get('category');

  return (
    <section className="bg-secondary-50 py-2">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <nav className="flex items-center space-x-2 text-sm">
            <Link
              href="/"
              className="text-primary-600 transition-colors hover:text-primary-700"
            >
              {t('home')}
            </Link>
            <ChevronRight className="size-4 text-secondary-400" />
            {category ? (
              <>
                <Link
                  href="/products"
                  className="text-primary-600 transition-colors hover:text-primary-700"
                >
                  {t('products')}
                </Link>
                <ChevronRight className="size-4 text-secondary-400" />
                <span className="text-secondary-600 capitalize">
                  {category.replace('-', ' ')}
                </span>
              </>
            ) : (
              <span className="text-secondary-600">
                {t('products')}
              </span>
            )}
          </nav>
        </motion.div>
      </div>
    </section>
  );
}