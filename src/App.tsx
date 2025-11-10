import { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { CompaniesSection } from "./components/CompaniesSection";
import { ProductsSection } from "./components/ProductsSection";
import { ServicesSection } from "./components/ServicesSection";
import { TestimonialsSection } from "./components/TestimonialsSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { ProductsPage } from "./components/ProductsPage";
import { ServicesPage } from "./components/ServicesPage";
import { AboutPage } from "./components/AboutPage";
import { ContactPage } from "./components/ContactPage";
import { WhatsAppButton } from "./components/WhatsAppButton";

export default function App() {
  const [currentPage, setCurrentPage] = useState<"home" | "products" | "services" | "about" | "contact">("home");

  // Scroll to top when page changes
  useEffect(() => {
    // Use instant scroll to ensure it always goes to top
    window.scrollTo(0, 0);
    // Also ensure document element scrolls to top
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [currentPage]);

  return (
    <div className="bg-white min-h-screen w-full">
      <Header onNavigate={setCurrentPage} currentPage={currentPage} />
      {currentPage === "home" ? (
        <main>
          <HeroSection onNavigate={setCurrentPage} />
          <CompaniesSection />
          <ProductsSection onViewProducts={() => setCurrentPage("products")} />
          <ServicesSection onNavigate={setCurrentPage} />
          <TestimonialsSection />
          <ContactSection />
        </main>
      ) : currentPage === "products" ? (
        <ProductsPage />
      ) : currentPage === "services" ? (
        <ServicesPage onNavigate={setCurrentPage} />
      ) : currentPage === "about" ? (
        <AboutPage onNavigate={setCurrentPage} />
      ) : (
        <ContactPage />
      )}
      <Footer onNavigate={setCurrentPage} />
      <WhatsAppButton />
    </div>
  );
}