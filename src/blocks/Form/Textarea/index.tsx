import type { TextField } from '@payloadcms/plugin-form-builder/types';

import React from 'react';
import type { FieldErrorsImpl, FieldValues, UseFormRegister } from 'react-hook-form';

import { Label } from '@/components/ui/label';
import { Textarea as TextAreaComponent } from '@/components/ui/textarea';

import { Error } from '../Error';
import { Width } from '../Width';

export const Textarea: React.FC<
  TextField & {
    errors: Partial<FieldErrorsImpl>;
    register: UseFormRegister<FieldValues>;
    rows?: number;
    placeholder?: string;
  }
> = ({ name, defaultValue, errors, label, register, required, rows = 3, width, placeholder }) => {
  return (
    <Width width={width}>
      <Label htmlFor={name} className="text-sm font-medium text-foreground">
        {label}

        {required && (
          <span className="required">
            * <span className="sr-only">(required)</span>
          </span>
        )}
      </Label>

      <TextAreaComponent
        defaultValue={defaultValue}
        id={name}
        rows={rows}
        className="min-h-[150px] resize-none border-input bg-background text-foreground transition-colors placeholder:text-muted-foreground focus:border-ring dark:border-white/20 dark:bg-white/10 dark:text-white dark:placeholder:text-white/80 dark:focus:border-accent"
        {...register(name, { required: required })}
        placeholder={placeholder}
      />

      {errors[name] && <Error />}
    </Width>
  );
};
