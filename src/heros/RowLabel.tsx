'use client';

import { RowLabelProps, useRowLabel } from '@payloadcms/ui';

import { Page } from '@/payload-types';

export const RowLabel: React.FC<RowLabelProps> = () => {
  const { data, rowNumber } = useRowLabel<NonNullable<NonNullable<Page['hero']>[number]>>();

  const titleText = data?.title?.title || '';
  const truncatedTitle = titleText.length > 30 ? `${titleText.substring(0, 30)}...` : titleText;

  const layout = data?.layout || '';
  const layoutNumber = layout.match(/\d+/)?.[0] || '';
  const displayRowNumber = rowNumber !== undefined ? rowNumber + 1 : '';

  const label = truncatedTitle
    ? `Row ${displayRowNumber}: Hero layout ${layoutNumber} - "${truncatedTitle}"`
    : `Row ${displayRowNumber}: Hero layout ${layoutNumber}`;

  return <div>{label}</div>;
};
