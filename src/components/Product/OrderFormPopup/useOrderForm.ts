import { useCallback, useMemo, useState } from 'react';
import { useTranslations } from 'next-intl';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';

import { FORM_VALIDATION, ORDER_FORM_CONFIG } from './constants';
import type { OrderFormData, Product, SubmitStatus } from './types';
import { prepareFormData, submitOrderForm } from './utils';

interface UseOrderFormProps {
  product?: Product;
  onSuccess?: () => void;
}

export const useOrderForm = ({ product, onSuccess }: UseOrderFormProps = {}) => {
  const t = useTranslations();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>(null);

  const form = useForm<OrderFormData>({
    defaultValues: {
      itemCode: product?.itemCode ?? product?.title ?? '',
    },
  });

  const validationRules = useMemo(
    () => ({
      name: { required: t('field-required') },
      email: {
        required: t('field-required'),
        pattern: {
          value: FORM_VALIDATION.EMAIL_PATTERN,
          message: t('invalid-email'),
        },
      },
      phone: {
        pattern: {
          value: FORM_VALIDATION.PHONE_PATTERN,
          message: t('invalid-phone'),
        },
      },
    }),
    [t]
  );

  const resetForm = useCallback(() => {
    setSubmitStatus(null);
    form.reset();
  }, [form]);

  const onSubmit = useCallback(
    async (data: OrderFormData) => {
      setIsSubmitting(true);
      setSubmitStatus(null);

      try {
        const cleanedData = prepareFormData(data, product);
        await submitOrderForm(cleanedData, ORDER_FORM_CONFIG.API_ENDPOINT);

        toast.success(t('order-success'), {
          description: t('order-success-description'),
          duration: ORDER_FORM_CONFIG.TOAST_DURATION,
        });

        setSubmitStatus('success');
        onSuccess?.();
      } catch (error) {
        console.error('Order submission error:', error);
        toast.error(t('form-error'));
        setSubmitStatus('error');
      } finally {
        setIsSubmitting(false);
      }
    },
    [product, t, onSuccess]
  );

  return {
    form,
    isSubmitting,
    submitStatus,
    validationRules,
    onSubmit,
    resetForm,
  };
};
