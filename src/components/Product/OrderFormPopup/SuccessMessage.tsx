import React from 'react';
import { useTranslations } from 'next-intl';

import { Button } from '@/components/ui/button';

import type { SuccessMessageProps } from './types';

export const SuccessMessage = React.memo<SuccessMessageProps>(({ message, onClose }) => {
  const t = useTranslations();

  return (
    <div className="space-y-4 text-center">
      <div className="rounded-lg bg-green-50 p-6 text-green-800">
        <div className="mb-2 text-lg font-semibold">{message}</div>
        <p className="text-sm">{t('order-success-description')}</p>
      </div>
      <Button onClick={onClose} className="w-full">
        {t('close')}
      </Button>
    </div>
  );
});

SuccessMessage.displayName = 'SuccessMessage';
