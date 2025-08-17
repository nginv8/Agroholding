'use client';

import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import * as motion from 'motion/react-client';
import { useTranslations } from 'next-intl';

import { cn } from '@/utilities/ui';

export interface BreadcrumbItem {
  label: string;
  href?: string;
  isActive?: boolean;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
  withSection?: boolean;
  sectionClassName?: string;
}

export const Breadcrumbs = ({
  items,
  className,
  sectionClassName,
  withSection = false,
}: BreadcrumbsProps) => {
  const t = useTranslations();

  const breadcrumbContent = (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className={className}
    >
      <nav className="flex items-center space-x-2 text-sm">
        <Link
          href="/"
          className="text-primary-600 transition-colors hover:text-primary-700 dark:text-white dark:hover:text-accent-400"
        >
          {t('home')}
        </Link>
        {items.map((item, index) => (
          <div key={index} className="flex items-center space-x-2">
            <ChevronRight className="size-4 text-secondary-400" />
            {item.href && !item.isActive ? (
              <Link
                href={item.href}
                className="text-primary-600 transition-colors hover:text-primary-700 dark:text-white dark:hover:text-accent-400"
              >
                {item.label}
              </Link>
            ) : (
              <span
                className="max-w-xs truncate text-secondary-600 dark:text-secondary-200"
                title={item.isActive ? item.label : undefined}
              >
                {item.label}
              </span>
            )}
          </div>
        ))}
      </nav>
    </motion.div>
  );

  if (withSection) {
    return (
      <section className={cn('my-8', sectionClassName)}>
        <div className="container px-4">{breadcrumbContent}</div>
      </section>
    );
  }

  return breadcrumbContent;
};
