import React from 'react';

import { Toaster } from '@/components/ui/sonner';

export const Providers: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return (
    <>
      {children}
      <Toaster />
    </>
  );
};
