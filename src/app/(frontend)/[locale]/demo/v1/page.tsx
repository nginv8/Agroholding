import AboutUs from '@/components/AboutUs'
import ContactUs from '@/components/ContactUs'
import FAQ from '@/components/FAQ'
import Careers from '@/components/Careers'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import NewsGrid from '@/components/NewsGrid'
import OurIdeas from '@/components/OurIdeas'
import Products from '@/components/Products'
import Testimonials from '@/components/Testimonials'
import WhyUs from '@/components/WhyUs'

export default async function Page() {
  return (
    <>
      <Header />
      <Hero />
      <AboutUs />
      <Products />
      <WhyUs />
      <NewsGrid />
      <OurIdeas />
      <Testimonials />
      <Careers />
      <FAQ />
      <ContactUs />

      <Footer />
    </>
  )
}
