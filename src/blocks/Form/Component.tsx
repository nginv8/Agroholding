'use client';

import type { SerializedEditorState } from '@payloadcms/richtext-lexical/lexical';
import type { Form as FormType } from '@payloadcms/plugin-form-builder/types';

import React, { useCallback, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Send } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { FormProvider, useForm } from 'react-hook-form';
import { toast } from 'sonner';

import RichText from '@/components/RichText';
import { Button } from '@/components/ui/button';
import { getClientSideURL } from '@/utilities/getURL';

import { fields } from './fields';

export type FormBlockType = {
  enableIntro: boolean;
  form: FormType;
  blockName?: string;
  blockType?: 'formBlock';
  introContent?: SerializedEditorState;
};

export const FormBlock: React.FC<
  {
    id?: string;
  } & FormBlockType
> = (props) => {
  const {
    enableIntro,
    form: formFromProps,
    form: { id: formID, confirmationMessage, confirmationType, redirect, submitButtonLabel } = {},
    introContent,
  } = props;

  const formMethods = useForm({
    defaultValues: formFromProps.fields?.reduce(
      (acc, field) => {
        if ('name' in field && 'defaultValue' in field) {
          acc[field.name] = field.defaultValue;
        }
        return acc;
      },
      {} as Record<string, string | boolean | undefined>
    ),
  });
  const {
    control,
    formState: { errors },
    handleSubmit,
    register,
  } = formMethods;

  const [isLoading, setIsLoading] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState<boolean>();
  const [error, setError] = useState<{ message: string; status?: string } | undefined>();
  const router = useRouter();
  const t = useTranslations();

  const onSubmit = useCallback(
    (data: Record<string, string | boolean | undefined>) => {
      let loadingTimerID: ReturnType<typeof setTimeout>;
      const submitForm = async () => {
        setError(undefined);

        const dataToSend = Object.entries(data).map(([name, value]) => ({
          field: name,
          value,
        }));

        // delay loading indicator by 1s
        loadingTimerID = setTimeout(() => {
          setIsLoading(true);
        }, 1000);

        try {
          const req = await fetch(`${getClientSideURL()}/api/form-submissions`, {
            body: JSON.stringify({
              form: formID,
              submissionData: dataToSend,
            }),
            headers: {
              'Content-Type': 'application/json',
            },
            method: 'POST',
          });

          const res = await req.json();

          clearTimeout(loadingTimerID);

          if (req.status >= 400) {
            setIsLoading(false);

            const errorMessage = res.errors?.[0]?.message || 'Помилка сервера';

            setError({
              message: errorMessage,
              status: res.status,
            });

            toast.error(t('contact-form-error'), {
              description: errorMessage,
              duration: 5000,
            });

            return;
          }

          setIsLoading(false);
          setHasSubmitted(true);

          toast.success(t('contact-form-success'), {
            description: t('contact-form-success-description'),
            duration: 5000,
          });

          if (confirmationType === 'redirect' && redirect) {
            const { url } = redirect;

            const redirectUrl = url;

            if (redirectUrl) router.push(redirectUrl);
          }
        } catch (err) {
          console.warn(err);
          setIsLoading(false);
          const errorMessage = t('contact-form-network-error-description');

          setError({
            message: errorMessage,
          });

          toast.error(t('contact-form-network-error'), {
            description: errorMessage,
            duration: 5000,
          });
        }
      };

      void submitForm();
    },
    [router, formID, redirect, confirmationType, t]
  );

  return (
    <div className="mx-auto lg:max-w-3xl">
      {enableIntro && introContent && !hasSubmitted && (
        <RichText className="mb-8 lg:mb-12" data={introContent} enableGutter={false} />
      )}
      <div className="rounded-2xl bg-white/95 px-4 py-8 shadow-xl backdrop-blur-md lg:p-12 dark:bg-white/10 dark:shadow-2xl">
        <FormProvider {...formMethods}>
          {!isLoading && hasSubmitted && confirmationType === 'message' && (
            <RichText data={confirmationMessage} />
          )}
          {isLoading && !hasSubmitted && <p>Loading, please wait...</p>}
          {error && <div>{`${error.status || '500'}: ${error.message || ''}`}</div>}
          {!hasSubmitted && (
            <form id={formID} onSubmit={handleSubmit(onSubmit)}>
              <div className="-mx-3 mb-8 flex flex-wrap justify-center last:mb-0">
                {formFromProps &&
                  formFromProps.fields &&
                  formFromProps.fields?.map((field, index) => {
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    const Field: React.FC<any> = fields?.[field.blockType as keyof typeof fields];
                    if (Field) {
                      return (
                        <Field
                          key={index}
                          form={formFromProps}
                          {...field}
                          {...formMethods}
                          control={control}
                          errors={errors}
                          register={register}
                        />
                      );
                    }
                    return null;
                  })}
              </div>

              <div className="text-center">
                <Button
                  form={formID}
                  type="submit"
                  className="group w-full"
                  variant="default"
                  size="lg"
                  disabled={isLoading}
                >
                  {isLoading ? t('sending') || 'Sending...' : submitButtonLabel}
                  <Send className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </form>
          )}
        </FormProvider>
      </div>
    </div>
  );
};
