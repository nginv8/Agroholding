'use client';

import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { useTranslations } from 'next-intl';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
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

      <DialogContent
        aria-describedby="order-form-description"
        className="flex max-h-dvh max-w-2xl flex-col px-0 py-8"
      >
        <DialogDescription id="order-form-description" className="sr-only">
          {product?.title
            ? t('contact-about-product', { product: product?.title })
            : t('contact-us')}
        </DialogDescription>
        <DialogHeader className="my-3 shrink-0 px-3 md:px-8">
          <DialogTitle>
            {product?.title
              ? t('contact-about-product', { product: product?.title })
              : t('contact-us')}
          </DialogTitle>
        </DialogHeader>

        <div className="min-h-0 flex-1 overflow-y-auto px-3 md:px-8">
          {submitStatus === 'success' ? (
            <SuccessMessage message={t('order-success')} onClose={handleDialogClose} />
          ) : (
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="my-1 space-y-4 transition-all duration-300 max-md:focus-within:mb-[400px]"
            >
              <FormField label={t('item-code')}>
                <Input id="itemCode" {...register('itemCode')} disabled />
              </FormField>

              <FormField label={t('your-name')} error={errors.name} required>
                <Input
                  id="name"
                  type="text"
                  {...register('name', validationRules.name)}
                  className={cn(errors.name && 'border-error')}
                  placeholder={t('enter-name')}
                  disabled={isSubmitting}
                />
              </FormField>

              <FormField label={t('your-email')} error={errors.email} required>
                <Input
                  id="email"
                  type="email"
                  {...register('email', validationRules.email)}
                  className={cn(errors.email && 'border-error')}
                  placeholder={t('enter-email')}
                  disabled={isSubmitting}
                />
              </FormField>

              <FormField label={t('phone')} error={errors.phone}>
                <Input
                  id="phone"
                  type="tel"
                  {...register('phone', validationRules.phone)}
                  className={cn(errors.phone && 'border-error')}
                  placeholder={t('enter-phone')}
                  disabled={isSubmitting}
                />
              </FormField>

              <FormField label={t('message')} error={errors.message}>
                <Textarea
                  id="message"
                  rows={4}
                  {...register('message')}
                  className={cn(errors.message && 'border-error')}
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
