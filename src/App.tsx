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
import { WhatsAppButton } from "./components/WhatsAppButton";

export default function App() {
  const [currentPage, setCurrentPage] = useState<"home" | "products">("home");

  // Scroll to top when page changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  return (
    <div className="bg-white min-h-screen w-full">
      <Header onNavigate={setCurrentPage} currentPage={currentPage} />
      {currentPage === "home" ? (
        <main>
          <HeroSection />
          <CompaniesSection />
          <ProductsSection onViewProducts={() => setCurrentPage("products")} />
          <ServicesSection />
          <TestimonialsSection />
          <ContactSection />
        </main>
      ) : (
        <ProductsPage />
      )}
      <Footer />
      <WhatsAppButton />
    </div>
  );
}