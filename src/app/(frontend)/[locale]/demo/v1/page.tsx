import AboutUs from '@/components/AboutUs'
import FAQ from '@/components/FAQ'
import Careers from '@/components/Careers'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import NewsGrid from '@/components/NewsGrid'
import Testimonials from '@/components/Testimonials'
import WhyUs from '@/components/WhyUs'
import ProductGrid from '@/components/ProductGrid'
import Advantages from '@/components/Advantages'
import ContactUsV3 from '@/components/ContactUsV3'

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
