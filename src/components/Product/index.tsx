import { TypedLocale } from 'payload';

import { getLocale } from 'next-intl/server';

import { getCachedGlobal } from '@/utilities/getGlobals';
import type { ContactInfo, ProductPageSetting, Product as ProductType } from '@/payload-types';

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

  const locale = (await getLocale()) as TypedLocale;

  const [productPageSettings, contactInfo] = await Promise.all([
    getCachedGlobal('productPageSettings', 1, locale)() as Promise<ProductPageSetting>,
    getCachedGlobal('contactInfo', 1, locale)() as Promise<ContactInfo>,
  ]);

  return (
    <main className="min-h-screen bg-white">
      <ProductNavigation product={product} />

      <div className="content-container my-8 grid grid-cols-1 gap-y-6 lg:mb-12 lg:grid-cols-12 lg:gap-12">
        <ProductHeader product={product} settings={productPageSettings} className="lg:hidden" />

        <ProductImageSlider product={product} className="col-span-7" />
        <div className="col-span-5 lg:space-y-4">
          <ProductHeader
            product={product}
            settings={productPageSettings}
            className="hidden lg:block"
          />
          <ProductInfo product={product} contactInfo={contactInfo} />
        </div>
      </div>

      <div className="content-container my-8 space-y-8 lg:my-16 lg:grid lg:grid-cols-12 lg:gap-x-8 lg:space-y-0">
        <div className="space-y-8 lg:col-span-8">
          <ProductTabs product={product} settings={productPageSettings} />
          <ProductBenefits product={product} settings={productPageSettings} />
          <ProductContent product={product} settings={productPageSettings} />
        </div>

        <aside className="lg:col-span-4">
          <RelatedProducts
            className="lg:sticky lg:top-28"
            relatedProducts={relatedProducts}
            settings={productPageSettings}
            variant="sidebar"
          />
        </aside>
      </div>
    </main>
  );
}
