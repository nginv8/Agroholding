'use client';

import { RowLabelProps, useRowLabel } from '@payloadcms/ui';

import { Header } from '@/payload-types';

export const SubMenuRowLabel: React.FC<RowLabelProps> = () => {
  const data =
    useRowLabel<NonNullable<NonNullable<Header['navItems']>[number]['submenu']>[number]>();

  const label = data?.data?.link?.label
    ? `Submenu ${data.rowNumber !== undefined ? data.rowNumber + 1 : ''}: ${data?.data?.link?.label}`
    : 'Submenu Row';

  return <div>{label}</div>;
};
