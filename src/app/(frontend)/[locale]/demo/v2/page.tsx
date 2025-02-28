import AboutUsV2 from '@/components/AboutUsV2'
import CareersV2 from '@/components/CareersV2'
import ContactUsV2 from '@/components/ContactUsV2'
import ContactUsV3 from '@/components/ContactUsV3'
import FAQV2 from '@/components/FAQV2'
import FooterV2 from '@/components/FooterV2'
import HeaderV2 from '@/components/HeaderV2'
import HeroV2 from '@/components/HeroV2'
import NewsGridV2 from '@/components/NewsGridV2'
import OurIdeasV2 from '@/components/OurIdeasV2'
import ProductsV2 from '@/components/ProductsV2'
import TestimonialsV2 from '@/components/TestimonialsV2'
import WhyUsV2 from '@/components/WhyUsV2'

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
      {/* <ContactUsV3 /> */}

      <FooterV2 />
    </>
  )
}
