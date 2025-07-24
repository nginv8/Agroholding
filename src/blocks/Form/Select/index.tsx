import type { SelectField } from '@payloadcms/plugin-form-builder/types';

import React from 'react';
import type { Control, FieldErrorsImpl } from 'react-hook-form';
import { Controller } from 'react-hook-form';

import { Label } from '@/components/ui/label';
import {
  Select as SelectComponent,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

import { Error } from '../Error';
import { Width } from '../Width';

export const Select: React.FC<
  SelectField & {
    control: Control;
    errors: Partial<FieldErrorsImpl>;
  }
> = ({ name, control, errors, label, options, required, width }) => {
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
      <Controller
        control={control}
        defaultValue=""
        name={name}
        render={({ field: { onChange, value } }) => {
          const controlledValue = options.find((t) => t.value === value);

          return (
            <SelectComponent onValueChange={(val) => onChange(val)} value={controlledValue?.value}>
              <SelectTrigger
                className="h-12 w-full border-input bg-background text-foreground dark:border-white/20 dark:bg-white/10 dark:text-white"
                id={name}
              >
                <SelectValue
                  placeholder={label}
                  className="placeholder:text-muted-foreground dark:placeholder:text-white/80"
                />
              </SelectTrigger>
              <SelectContent>
                {options.map(({ label, value }) => {
                  return (
                    <SelectItem key={value} value={value}>
                      {label}
                    </SelectItem>
                  );
                })}
              </SelectContent>
            </SelectComponent>
          );
        }}
        rules={{ required }}
      />
      {errors[name] && <Error />}
    </Width>
  );
};
