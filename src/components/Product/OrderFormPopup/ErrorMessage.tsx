import React from 'react';

import type { ErrorMessageProps } from './types';

export const ErrorMessage = React.memo<ErrorMessageProps>(({ message }) => (
  <div className="rounded-lg bg-red-50 p-4 text-center text-red-800">{message}</div>
));

ErrorMessage.displayName = 'ErrorMessage';
