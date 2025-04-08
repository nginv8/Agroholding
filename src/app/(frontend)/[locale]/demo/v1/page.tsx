import AboutUs from '@/components/demo/AboutUs'
import FAQ from '@/components/demo/FAQ'
import Careers from '@/components/demo/Careers'
import Footer from '@/components/demo/Footer'
import Header from '@/components/demo/Header'
import Hero from '@/components/demo/Hero'
import NewsGrid from '@/components/demo/NewsGrid'
import Testimonials from '@/components/demo/Testimonials'
import WhyUs from '@/components/demo/WhyUs'
import ProductGrid from '@/components/demo/ProductGrid'
import Advantages from '@/components/demo/Advantages'
import ContactUsV3 from '@/components/demo/ContactUsV3'

export default async function Page() {
  return (
    <>
      <Header />

      <Hero />
      <AboutUs />
      <Advantages />
      <ProductGrid />
      <WhyUs />
      <Careers />
      <NewsGrid />
      <FAQ />
      <Testimonials />
      <ContactUsV3 />

      <Footer />
    </>
  )
}
