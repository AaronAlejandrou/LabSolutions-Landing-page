import { useEffect, lazy, Suspense } from "react";
import { Navigate, Route, Routes, useLocation, useNavigate } from "react-router-dom";
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
const ProductDetailPage = lazy(() => import("./components/pages/ProductDetailPage").then(module => ({ default: module.ProductDetailPage })));
const ServicesPage = lazy(() => import("./components/pages/ServicesPage").then(module => ({ default: module.ServicesPage })));
const ServiceDetailPage = lazy(() => import("./components/pages/ServiceDetailPage").then(module => ({ default: module.ServiceDetailPage })));
const AboutPage = lazy(() => import("./components/pages/AboutPage").then(module => ({ default: module.AboutPage })));
const ContactPage = lazy(() => import("./components/pages/ContactPage").then(module => ({ default: module.ContactPage })));

function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center min-h-[50vh]">
      <div className="w-12 h-12 border-4 border-[#ce0e2d] border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
}

type PageKey = "home" | "products" | "services" | "about" | "contact";

const pageToPath: Record<PageKey, string> = {
  home: "/",
  products: "/productos",
  services: "/servicios",
  about: "/nosotros",
  contact: "/contacto",
};

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [pathname]);

  return null;
}

export default function App() {
  const navigate = useNavigate();
  const navigateByPage = (page: PageKey) => navigate(pageToPath[page]);

  return (
    <div className="bg-white min-h-screen w-full">
      <ScrollToTop />
      <Header />
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route
            path="/"
            element={
              <main>
                <HeroSection onNavigate={navigateByPage} />
                <CompaniesSection />
                <ProductsSection
                  onViewProducts={() => navigate(pageToPath.products)}
                  onContact={() => navigate(pageToPath.contact)}
                />
                <ServicesSection onNavigate={navigateByPage} />
                <TestimonialsSection />
                <ContactSection />
              </main>
            }
          />
          <Route path="/productos" element={<ProductsPage />} />
          <Route path="/productos/:productSlug" element={<ProductDetailPage />} />
          <Route path="/servicios" element={<ServicesPage onNavigate={navigateByPage} />} />
          <Route path="/servicios/:serviceSlug" element={<ServiceDetailPage />} />
          <Route path="/nosotros" element={<AboutPage onNavigate={navigateByPage} />} />
          <Route path="/contacto" element={<ContactPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}