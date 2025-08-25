import { getCachedGlobal } from '@/utilities/getGlobals';
import type { Product as ProductType } from '@/payload-types';

import ProductBenefits from './ProductBenefits';
import ProductContent from './ProductContent';
import ProductHeader from './ProductHeader';
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

  const [productPageSettings, contactInfo] = await Promise.all([
    getCachedGlobal('productPageSettings', 1)(),
    getCachedGlobal('contactInfo', 1)(),
  ]);

  return (
    <main className="min-h-screen bg-white">
      <ProductNavigation product={product} />

      <div className="container my-8 grid grid-cols-1 gap-y-6 px-4 lg:grid-cols-12 lg:gap-12">
        <ProductHeader product={product} className="lg:hidden" />

        <ProductImageSlider product={product} className="col-span-7" />
        <div className="col-span-5 space-y-4">
          <ProductHeader product={product} className="hidden lg:block" />
          <ProductInfo product={product} contactInfo={contactInfo} />
        </div>
      </div>

      <ProductTabs product={product} settings={productPageSettings} />
      <ProductBenefits product={product} settings={productPageSettings} />
      <ProductContent product={product} settings={productPageSettings} />
      <RelatedProducts relatedProducts={relatedProducts} />
    </main>
  );
}
