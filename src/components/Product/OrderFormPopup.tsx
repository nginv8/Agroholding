'use client';

import React, { useCallback, useMemo, useState } from 'react';
import { Mail } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useForm, type FieldError, type RegisterOptions } from 'react-hook-form';
import { toast } from 'sonner';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { cn } from '@/utilities/ui';

// Types
interface Product {
  title?: string;
  itemCode?: string | null;
  id?: string | number;
}

interface OrderFormData {
  name: string;
  email: string;
  phone?: string;
  message?: string;
  itemCode: string;
}

interface OrderFormPopupProps {
  product?: Product;
  buttonClassName?: string;
  buttonSize?: 'sm' | 'lg' | 'default' | 'icon';
  buttonVariant?: 'default' | 'outline' | 'secondary' | 'destructive' | 'ghost' | 'link';
  triggerContent?: React.ReactNode;
}

interface FormFieldProps {
  label: string;
  error?: FieldError;
  required?: boolean;
  children: React.ReactNode;
}

const API_ENDPOINT = '/api/orders';
const FORM_TIMEOUT = 100;

const cleanPhoneNumber = (phone?: string): string | undefined => {
  return phone ? phone.replace(/\s/g, '') : phone;
};

const prepareFormData = (data: OrderFormData, product?: Product) => ({
  ...data,
  phone: cleanPhoneNumber(data.phone),
  productId: product?.id,
  productTitle: product?.title,
});

const getValidationRules = (t: ReturnType<typeof useTranslations>) => ({
  name: { required: t('field-required') } as RegisterOptions<OrderFormData, 'name'>,
  email: {
    required: t('field-required'),
    pattern: {
      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      message: t('invalid-email'),
    },
  } as RegisterOptions<OrderFormData, 'email'>,
  phone: {
    pattern: {
      value: /^[+]?[0-9\s]+$/,
      message: t('invalid-phone'),
    },
  } as RegisterOptions<OrderFormData, 'phone'>,
});

const FormField: React.FC<FormFieldProps> = ({ label, error, required, children }) => (
  <div className="space-y-2">
    <label className="block text-sm font-medium">
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    {children}
    {error && <p className="text-xs text-red-600">{error.message}</p>}
  </div>
);

const ErrorMessage: React.FC<{ message: string }> = ({ message }) => (
  <div className="rounded-lg bg-red-50 p-4 text-center text-red-800">{message}</div>
);

const FormActions: React.FC<{
  onClose: () => void;
  isSubmitting: boolean;
  t: ReturnType<typeof useTranslations>;
}> = ({ onClose, isSubmitting, t }) => (
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

export default function OrderFormPopup({
  product,
  buttonClassName,
  buttonSize = 'lg',
  buttonVariant = 'default',
  triggerContent,
}: OrderFormPopupProps) {
  const t = useTranslations();

  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'error' | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<OrderFormData>({
    defaultValues: {
      itemCode: product?.itemCode ?? product?.title ?? '',
    },
  });

  const validationRules = useMemo(() => getValidationRules(t), [t]);

  const defaultTriggerContent = useMemo(
    () => (
      <>
        <Mail className="mr-2 size-5" />
        {t('send-email')}
      </>
    ),
    [t]
  );

  const dialogTitle = useMemo(
    () =>
      product?.title ? t('contact-about-product', { product: product.title }) : t('contact-us'),
    [product?.title, t]
  );

  const handleDialogClose = useCallback(() => {
    setIsOpen(false);
    setSubmitStatus(null);
  }, []);

  const handleFormReset = useCallback(() => {
    reset();
    setTimeout(() => {
      handleDialogClose();
    }, FORM_TIMEOUT);
  }, [reset, handleDialogClose]);

  const onSubmit = useCallback(
    async (data: OrderFormData) => {
      setIsSubmitting(true);
      setSubmitStatus(null);

      try {
        const cleanedData = prepareFormData(data, product);

        const response = await fetch(API_ENDPOINT, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(cleanedData),
        });

        if (!response.ok) {
          const errorData = await response.json().catch(() => ({}));
          throw new Error(errorData.error || 'Failed to submit order');
        }

        toast.success(t('form-success'));
        handleFormReset();
      } catch (error) {
        console.error('Order submission error:', error);
        toast.error(t('form-error'));
        setSubmitStatus('error');
      } finally {
        setIsSubmitting(false);
      }
    },
    [product, handleFormReset, t]
  );

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button size={buttonSize} variant={buttonVariant} className={buttonClassName}>
          {triggerContent || defaultTriggerContent}
        </Button>
      </DialogTrigger>

      <DialogContent className="max-w-2xl px-2 py-8 md:px-6">
        <DialogHeader className="px-2 py-4">
          <DialogTitle>{dialogTitle}</DialogTitle>
        </DialogHeader>

        <div className="max-h-[70vh] overflow-y-auto px-2">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <FormField label={t('item-code')}>
              <Input id="itemCode" {...register('itemCode')} disabled />
            </FormField>

            <FormField label={t('your-name')} error={errors.name} required>
              <Input
                id="name"
                type="text"
                {...register('name', validationRules.name)}
                className={cn(errors.name && 'border-red-500')}
                placeholder={t('enter-name')}
              />
            </FormField>

            <FormField label={t('your-email')} error={errors.email} required>
              <Input
                id="email"
                type="email"
                {...register('email', validationRules.email)}
                className={cn(errors.email && 'border-red-500')}
                placeholder={t('enter-email')}
              />
            </FormField>

            <FormField label={t('phone')} error={errors.phone}>
              <Input
                id="phone"
                type="tel"
                {...register('phone', validationRules.phone)}
                className={cn(errors.phone && 'border-red-500')}
                placeholder={t('enter-phone')}
              />
            </FormField>

            <FormField label={t('message')} error={errors.message}>
              <Textarea
                id="message"
                rows={4}
                {...register('message')}
                className={cn(errors.message && 'border-red-500')}
              />
            </FormField>

            {submitStatus === 'error' && <ErrorMessage message={t('form-error')} />}

            <FormActions onClose={handleDialogClose} isSubmitting={isSubmitting} t={t} />
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
}
