import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import imgVector from "../../assets/hero-vector.png";

const slides = [
  {
    id: 1,
    tag: "Instrumentacion analitica",
    title: "Lideres en equipos para laboratorios de",
    highlight: "alta exigencia",
    description:
      "Explora nuestra gama de equipos de alta tecnologia, con acompañamiento tecnico integral para implementacion y continuidad operativa.",
    buttonText: "Ver productos",
    action: "products" as const,
  },
  {
    id: 2,
    tag: "Soporte tecnico por procesos",
    title: "Instalamos, mantenemos, verificamos y",
    highlight: "capacitamos",
    description:
      "Cobertura integral en instalacion y diagnostico, mantenimiento preventivo y correctivo, verificacion operacional, capacitacion de instrumentos e implementacion de metodos.",
    buttonText: "Ver servicios",
    action: "services" as const,
  },
  {
    id: 3,
    tag: "Presencia en el mercado",
    title: "Trabajamos con clientes estrategicos y",
    highlight: "marcas globales",
    description:
      "Atendemos organizaciones como SEDAPAL, ELIFARMA, ROSTER e Instituto Quimioterapico; y trabajamos con Shimadzu, Thermo, Perkin Elmer y Agilent.",
    buttonText: "Conocer empresa",
    action: "about" as const,
  },
];

interface HeroSectionProps {
  onNavigate?: (page: "home" | "products" | "services" | "about" | "contact") => void;
}

export function HeroSection({ onNavigate }: HeroSectionProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const slide = slides[currentSlide];

  return (
    <section className="relative bg-white overflow-hidden w-full border-0">
      <div className="w-full">
        <div className="max-w-[1440px] mx-auto px-8 md:px-16 lg:px-24">
          <div className="pt-10 pb-12 lg:pt-16 lg:pb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Content - Solo esto cambia con animación */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className="space-y-6 lg:space-y-8 min-h-[500px] lg:min-h-[600px] flex flex-col justify-center"
                >
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.1 }}
                  >
                    <span className="text-[#ce0e2d] text-xl lg:text-2xl font-bold inline-block">
                      {slide.tag}
                    </span>
                  </motion.div>

                  <motion.h1
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-black text-4xl lg:text-[70px] leading-tight lg:leading-[70px]"
                    style={{ fontFamily: "'Rajdhani', sans-serif", fontWeight: 600 }}
                  >
                    <span className="block">{slide.title} </span>
                    <span className="text-[#ce0e2d]">{slide.highlight}</span>
                  </motion.h1>

                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="text-black text-lg lg:text-xl leading-relaxed lg:leading-[35px] max-w-[540px]"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    {slide.description}
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="pt-2"
                  >
                    <button
                      onClick={() => onNavigate?.(slide.action)}
                      className="bg-[#ce0e2d] text-white text-lg lg:text-xl font-bold px-10 py-3.5 rounded-full hover:bg-[#a00b24] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 flex items-center justify-center"
                      style={{ fontFamily: "'Poppins', sans-serif" }}
                    >
                      {slide.buttonText}
                    </button>
                  </motion.div>
                </motion.div>
              </AnimatePresence>

              {/* Image - FUERA del AnimatePresence para que NO se mueva */}
              <div className="relative h-[500px] lg:h-[600px] flex items-center justify-end">
                <div className="w-full h-full flex items-center justify-center lg:justify-end">
                  <img
                    src={imgVector}
                    alt="LabSolutions"
                    className="max-w-full max-h-full object-contain transform rotate-180"
                  />
                </div>
              </div>
            </div>

            {/* Carousel Indicators */}
            <div className="flex justify-center gap-3 mt-10 lg:mt-12">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`transition-all duration-300 ${index === currentSlide
                      ? "w-8 h-3 bg-[#ce0e2d] rounded-full"
                      : "w-3 h-3 bg-white border-2 border-[#ce0e2d] rounded-full hover:bg-[#ce0e2d]/20"
                    }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}