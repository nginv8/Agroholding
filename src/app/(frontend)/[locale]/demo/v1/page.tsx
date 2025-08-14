import AboutUs from '@/components/demo/AboutUs';
import Advantages from '@/components/demo/Advantages';
import Careers from '@/components/demo/Careers';
import ContactUsV3 from '@/components/demo/ContactUsV3';
import FAQ from '@/components/demo/FAQ';
import Footer from '@/components/demo/Footer';
import Header from '@/components/demo/Header';
import Hero from '@/components/demo/Hero';
import NewsGrid from '@/components/demo/NewsGrid';
import ProductGrid from '@/components/demo/ProductGrid';
import { Slider } from '@/components/demo/Slider';
import Testimonials from '@/components/demo/Testimonials';
import WhyUs from '@/components/demo/WhyUs';

export default async function Page() {
  const mockSlides = [
    {
      title: "Sustainable Agriculture Solutions",
      subtitle: "Innovation in Farming",
      description: "Leading the way in sustainable agricultural practices with cutting-edge technology and eco-friendly solutions.",
      backgroundImage: "/agricultural-landscape.png",
      primaryButton: {
        text: "Learn More",
        url: "/services"
      },
      secondaryButton: {
        text: "Contact Us",
        url: "/contact"
      }
    },
    {
      title: "Premium Crop Production",
      subtitle: "Quality & Excellence",
      description: "Delivering high-quality crops through advanced farming techniques and meticulous attention to detail.",
      backgroundImage: "/agricultural-landscape.png",
      primaryButton: {
        text: "Our Products",
        url: "/products"
      },
      secondaryButton: {
        text: "View Portfolio",
        url: "/portfolio"
      }
    },
    {
      title: "Agricultural Technology",
      subtitle: "Future of Farming",
      description: "Embracing modern technology to optimize crop yields and enhance agricultural sustainability.",
      backgroundImage: "/agricultural-landscape.png",
      primaryButton: {
        text: "Technology",
        url: "/technology"
      },
      secondaryButton: {
        text: "Learn More",
        url: "/about"
      }
    }
  ];

  return (
    <>
      <Header />

      <Hero />
      <Slider slides={mockSlides} />
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
  );
}
