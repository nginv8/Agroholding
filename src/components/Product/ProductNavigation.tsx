'use client';

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import * as motion from 'motion/react-client';
import { useTranslations } from 'next-intl';

export default function ProductNavigation() {
  const t = useTranslations();

  return (
    <section className="bg-secondary-50 py-6">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link
            href="/products"
            className="inline-flex items-center text-primary-600 transition-colors hover:text-primary-700"
          >
            <ArrowLeft className="mr-2 size-4" />
            {t('back-to-products')}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
