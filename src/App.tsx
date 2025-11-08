import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { CompaniesSection } from "./components/CompaniesSection";
import { ProductsSection } from "./components/ProductsSection";
import { ServicesSection } from "./components/ServicesSection";
import { TestimonialsSection } from "./components/TestimonialsSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="bg-white min-h-screen w-full">
      <Header />
      <main>
        <HeroSection />
        <CompaniesSection />
        <ProductsSection />
        <ServicesSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
