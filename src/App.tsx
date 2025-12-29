import { useState, useEffect, lazy, Suspense } from "react";
import { Header } from "./components/layout/Header";
import { HeroSection } from "./components/home/HeroSection";
import { CompaniesSection } from "./components/home/CompaniesSection";
import { ProductsSection } from "./components/home/ProductsSection";
import { ServicesSection } from "./components/home/ServicesSection";
import { TestimonialsSection } from "./components/home/TestimonialsSection";
import { ContactSection } from "./components/home/ContactSection";
import { Footer } from "./components/layout/Footer";
import { WhatsAppButton } from "./components/layout/WhatsAppButton";

const ProductsPage = lazy(() => import("./components/pages/ProductsPage").then(module => ({ default: module.ProductsPage })));
const ServicesPage = lazy(() => import("./components/pages/ServicesPage").then(module => ({ default: module.ServicesPage })));
const AboutPage = lazy(() => import("./components/pages/AboutPage").then(module => ({ default: module.AboutPage })));
const ContactPage = lazy(() => import("./components/pages/ContactPage").then(module => ({ default: module.ContactPage })));

function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center min-h-[50vh]">
      <div className="w-12 h-12 border-4 border-[#ce0e2d] border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
}

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
      <Suspense fallback={<LoadingSpinner />}>
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
      </Suspense>
      <Footer onNavigate={setCurrentPage} />
      <WhatsAppButton />
    </div>
  );
}