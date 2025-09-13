import React from 'react';

import type { FormFieldProps } from './types';

export const FormField = React.memo<FormFieldProps>(({ label, error, required, children }) => (
  <div className="space-y-2">
    <label className="block text-sm font-medium">
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    {children}
    {error && <p className="text-xs text-red-600">{error.message}</p>}
  </div>
));

FormField.displayName = 'FormField';
