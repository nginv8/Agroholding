import React from 'react';
import { useTranslations } from 'next-intl';

import { Button } from '@/components/ui/button';

import type { FormActionsProps } from './types';

export const FormActions = React.memo<FormActionsProps>(({ onClose, isSubmitting }) => {
  const t = useTranslations();

  return (
    <div className="flex gap-3 pt-4">
      <Button
        type="button"
        variant="outline"
        onClick={onClose}
        className="flex-1"
        disabled={isSubmitting}
      >
        {t('close')}
      </Button>
      <Button type="submit" disabled={isSubmitting} className="flex-1">
        {isSubmitting ? `${t('submit')}...` : t('submit')}
      </Button>
    </div>
  );
});

FormActions.displayName = 'FormActions';
