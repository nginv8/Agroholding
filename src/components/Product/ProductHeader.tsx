import { Star } from 'lucide-react';
import * as motion from 'motion/react-client';
import { useTranslations } from 'next-intl';

import { Badge } from '@/components/ui/badge';
import { cn } from '@/utilities/ui';
import type { Product } from '@/payload-types';

interface ProductHeaderProps {
  product: Product;
  className?: string;
}

export default function ProductHeader({ product, className }: ProductHeaderProps) {
  const t = useTranslations();

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className={cn('space-y-6', className)}
    >
      {product.categories && product.categories.length > 0 && (
        <Badge variant="secondary">
          {typeof product.categories[0] === 'object'
            ? product.categories[0].title
            : product.categories[0]}
        </Badge>
      )}

      <h1 className="text-3xl font-bold text-secondary-900 sm:text-4xl">{product.title}</h1>

      {product.ratingEnabled && (
        <div className="flex items-center space-x-4">
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
    </motion.div>
  );
}
