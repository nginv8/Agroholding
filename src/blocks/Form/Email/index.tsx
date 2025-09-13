import type { EmailField } from '@payloadcms/plugin-form-builder/types';

import React from 'react';
import type { FieldErrorsImpl, FieldValues, UseFormRegister } from 'react-hook-form';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

import { Error } from '../Error';
import { Width } from '../Width';

export const Email: React.FC<
  EmailField & {
    errors: Partial<FieldErrorsImpl>;
    register: UseFormRegister<FieldValues>;
    placeholder?: string;
  }
> = ({ name, defaultValue, errors, label, register, required, width, placeholder }) => {
  return (
    <Width width={width}>
      <Label htmlFor={name} className="text-sm font-medium text-foreground">
        {label}

        {required && (
          <span className="text-red-500">
            * <span className="sr-only">(required)</span>
          </span>
        )}
      </Label>
      <Input
        defaultValue={defaultValue}
        id={name}
        type="text"
        className="h-12"
        {...register(name, { pattern: /^\S[^\s@]*@\S+$/, required })}
        placeholder={placeholder}
      />

      {errors[name] && <Error />}
    </Width>
  );
};
