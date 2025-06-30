import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import ProductsSection from '@/components/ProductsSection';
import TeamSection from '@/components/TeamSection';
import ContactSection from '@/components/ContactSection';

export default function Home() {
  return (
    <>
      <Header />
      <main className="overflow-x-hidden">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ProductsSection />
        <TeamSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}