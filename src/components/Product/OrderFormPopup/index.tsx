'use client';

import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { useTranslations } from 'next-intl';

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

import { ErrorMessage } from './ErrorMessage';
import { FormActions } from './FormActions';
import { FormField } from './FormField';
import { SuccessMessage } from './SuccessMessage';
import type { OrderFormPopupProps } from './types';
import { useOrderForm } from './useOrderForm';

const RESET_DELAY = 200;

export default function OrderFormPopup({
  product,
  buttonClassName,
  buttonSize = 'lg',
  buttonVariant = 'default',
  triggerContent,
}: OrderFormPopupProps) {
  const t = useTranslations();
  const [isOpen, setIsOpen] = useState(false);

  const { form, isSubmitting, submitStatus, validationRules, onSubmit, resetForm } = useOrderForm({
    product,
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = form;

  const handleDialogClose = () => {
    setIsOpen(false);
    setTimeout(() => {
      resetForm();
    }, RESET_DELAY);
  };

  const handleOpenChange = (open: boolean) => {
    setIsOpen(open);
    if (!open) {
      setTimeout(() => {
        resetForm();
      }, RESET_DELAY);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        <Button size={buttonSize} variant={buttonVariant} className={buttonClassName}>
          {triggerContent || (
            <>
              {t('send-email')}
              <Send className="ml-2 size-5" />
            </>
          )}
        </Button>
      </DialogTrigger>

      <DialogContent className="max-w-2xl px-2 py-8 md:px-6">
        <DialogHeader className="px-2 py-4">
          <DialogTitle>
            {product?.title
              ? t('contact-about-product', { product: product?.title })
              : t('contact-us')}
          </DialogTitle>
        </DialogHeader>

        <div className="max-h-[70vh] overflow-y-auto px-2">
          {submitStatus === 'success' ? (
            <SuccessMessage message={t('order-success')} onClose={handleDialogClose} />
          ) : (
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
                  disabled={isSubmitting}
                />
              </FormField>

              <FormField label={t('your-email')} error={errors.email} required>
                <Input
                  id="email"
                  type="email"
                  {...register('email', validationRules.email)}
                  className={cn(errors.email && 'border-red-500')}
                  placeholder={t('enter-email')}
                  disabled={isSubmitting}
                />
              </FormField>

              <FormField label={t('phone')} error={errors.phone}>
                <Input
                  id="phone"
                  type="tel"
                  {...register('phone', validationRules.phone)}
                  className={cn(errors.phone && 'border-red-500')}
                  placeholder={t('enter-phone')}
                  disabled={isSubmitting}
                />
              </FormField>

              <FormField label={t('message')} error={errors.message}>
                <Textarea
                  id="message"
                  rows={4}
                  {...register('message')}
                  className={cn(errors.message && 'border-red-500')}
                  disabled={isSubmitting}
                />
              </FormField>

              {submitStatus === 'error' && <ErrorMessage message={t('form-error')} />}

              <FormActions onClose={handleDialogClose} isSubmitting={isSubmitting} />
            </form>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
