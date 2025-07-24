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
      <Label htmlFor={name}>
        {label}

        {required && (
          <span className="required">
            * <span className="sr-only">(required)</span>
          </span>
        )}
      </Label>
      <Input
        defaultValue={defaultValue}
        id={name}
        type="text"
        {...register(name, { pattern: /^\S[^\s@]*@\S+$/, required })}
        placeholder={placeholder}
      />

      {errors[name] && <Error />}
    </Width>
  );
};
