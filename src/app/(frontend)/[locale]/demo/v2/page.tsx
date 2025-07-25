import AboutUsV2 from '@/components/demo/AboutUsV2';
import CareersV2 from '@/components/demo/CareersV2';
import ContactUsV2 from '@/components/demo/ContactUsV2';
// import ContactUsV3 from '@/components/ContactUsV3'
import FAQV2 from '@/components/demo/FAQV2';
import FooterV2 from '@/components/demo/FooterV2';
import HeaderV2 from '@/components/demo/HeaderV2';
import HeroV2 from '@/components/demo/HeroV2';
import NewsGridV2 from '@/components/demo/NewsGridV2';
import OurIdeasV2 from '@/components/demo/OurIdeasV2';
import ProductsV2 from '@/components/demo/ProductsV2';
import TestimonialsV2 from '@/components/demo/TestimonialsV2';
import WhyUsV2 from '@/components/demo/WhyUsV2';

export default async function Page() {
  return (
    <>
      <HeaderV2 />

      <HeroV2 />
      <AboutUsV2 />
      <ProductsV2 />
      <WhyUsV2 />
      <OurIdeasV2 />
      <NewsGridV2 />
      <CareersV2 />
      <TestimonialsV2 />
      <FAQV2 />
      <ContactUsV2 />

      <FooterV2 />
    </>
  );
}
