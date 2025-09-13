import { useTranslations } from 'next-intl';

import { IconRenderer } from '@/components/IconRenderer';
import type { Product, ProductPageSetting } from '@/payload-types';

interface SpecificationsTabProps {
  product: Product;
  settings: ProductPageSetting;
}

export default function SpecificationsTab({ product, settings }: SpecificationsTabProps) {
  const t = useTranslations();
  const specifications = product.specifications || [];
  const additionalSpecs = product.additionalSpecifications || [];
  const globalSpecs = settings?.globalAdditionalInfo || [];

  const allAdditionalSpecs = [...additionalSpecs, ...globalSpecs];

  return (
    <div className="grid gap-8 md:grid-cols-2">
      <div>
        <h3 className="mb-4 text-xl font-semibold text-secondary-900">
          {t('technical-specifications')}
        </h3>
        {specifications.length > 0 ? (
          <div className="space-y-4">
            {specifications.map((item, index) => (
              <div
                key={item?.id || item?.name || index}
                className="flex justify-between border-b border-secondary-200/60 py-2"
              >
                <span className="font-medium text-secondary-700">{item?.name}:</span>
                <span className="text-secondary-600">{item?.value}</span>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-secondary-600">{t('no-specifications')}</p>
        )}
      </div>
      {allAdditionalSpecs.length > 0 && (
        <div>
          <h3 className="mb-4 text-xl font-semibold text-secondary-900">
            {t('additional-information')}
          </h3>
          <div className="space-y-4">
            {allAdditionalSpecs.map((spec, index) => {
              return (
                <div key={index} className="rounded-lg bg-primary-50 p-4">
                  <div className="flex items-start space-x-3">
                    <IconRenderer
                      name={spec?.icon || 'LuPackage'}
                      className="mt-1 size-6 text-primary-600"
                    />
                    <div>
                      <h4 className="mb-1 font-medium text-secondary-900">{spec.name}</h4>
                      <p className="text-sm text-secondary-600">{spec.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
