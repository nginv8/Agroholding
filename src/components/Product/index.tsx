import { getCachedGlobal } from '@/utilities/getGlobals';
import type { Product as ProductType } from '@/payload-types';

import ProductBenefits from './ProductBenefits';
import ProductContent from './ProductContent';
import ProductImageSlider from './ProductImageSlider';
import ProductInfo from './ProductInfo';
import ProductNavigation from './ProductNavigation';
import ProductNotFound from './ProductNotFound';
import ProductTabs from './ProductTabs';
import RelatedProducts from './RelatedProducts';

interface ProductProps {
  product: ProductType;
  relatedProducts?: ProductType[];
}

export default async function Product({ product, relatedProducts = [] }: ProductProps) {
  if (!product) {
    return <ProductNotFound />;
  }

  const productPageSettings = await getCachedGlobal('productPageSettings', 1)();

  return (
    <div className="min-h-screen bg-white">
      <main className="pt-20">
        <ProductNavigation />

        <div className="container grid gap-12 px-4 py-12 lg:grid-cols-2">
          <ProductImageSlider product={product} />
          <ProductInfo product={product} />
        </div>

        <ProductTabs product={product} settings={productPageSettings} />
        <ProductBenefits product={product} settings={productPageSettings} />
        <ProductContent product={product} settings={productPageSettings} />
        <RelatedProducts relatedProducts={relatedProducts} />
      </main>
    </div>
  );
}
