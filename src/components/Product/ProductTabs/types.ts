import type { Product, ProductPageSetting } from '@/payload-types';

export type DocumentType = NonNullable<Product['documents']>[number];
export type GlobalDocumentType = NonNullable<ProductPageSetting['globalDocuments']>[number];
export type DocumentUnion = DocumentType | GlobalDocumentType;

export type DocumentItemProps = {
  doc: DocumentUnion;
  index: number;
};

export type DocumentsTabProps = {
  product: Product;
  settings: ProductPageSetting;
};
