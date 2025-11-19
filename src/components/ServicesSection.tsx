import { motion } from "motion/react";
import imgPlaceholderImage from "../assets/service-diagnostic-1.png";
import imgPlaceholderImage6 from "../assets/service-training-1.png";
import imgPlaceholderImage7 from "../assets/service-training-2.png";

const services = [
  {
    id: 1,
    title: "Capacitación de los instrumentos",
    description: "Formación en uso y mantenimiento correcto de los equipos.",
    image: imgPlaceholderImage,
  },
  {
    id: 2,
    title: "Instalación de los instrumentos",
    description: "Montaje y configuración para la puesta en marcha técnica.",
    image: imgPlaceholderImage6,
  },
  {
    id: 3,
    title: "Verificación y calificación operacional",
    description: "Pruebas para validar precisión y cumplimiento normativo.",
    image: imgPlaceholderImage7,
  },
];

interface ServicesSectionProps {
  onNavigate?: (page: "home" | "products" | "services" | "about" | "contact") => void;
}

export function ServicesSection({ onNavigate }: ServicesSectionProps) {
  return (
    <section id="servicios" className="bg-white py-12 lg:py-16 border-t border-[#54565a]/10 w-full">
      <div className="w-full">
        <div className="max-w-[1440px] mx-auto px-8 md:px-16 lg:px-24">
          <div className="text-center mb-10 lg:mb-12">
            <h2
              className="text-[#ce0e2d] text-5xl lg:text-[64px] leading-[70px]"
              style={{ fontFamily: "'Rajdhani', sans-serif", fontWeight: 600 }}
            >
              Servicios
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="flex flex-col items-center text-center h-full"
              >
                <div className="relative w-full h-[220px] rounded-lg overflow-hidden group mb-6">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <div className="space-y-4 flex-grow flex flex-col justify-between">
                  <div className="space-y-3">
                    <h3
                      className="text-black text-2xl tracking-tight min-h-[56px] flex items-center justify-center"
                      style={{ fontFamily: "'Lexend', sans-serif", fontWeight: 400 }}
                    >
                      {service.title}
                    </h3>
                    <p
                      className="text-black/70 text-base min-h-[48px]"
                      style={{ fontFamily: "'Poppins', sans-serif" }}
                    >
                      {service.description}
                    </p>
                  </div>

                  <button
                    onClick={() => onNavigate?.("contact")}
                    className="bg-[#ce0e2d] text-white text-lg font-semibold px-10 py-3 rounded-full hover:bg-[#a00b24] transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105 mt-4 flex items-center justify-center text-center mx-auto"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    Contáctanos
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="flex justify-center mt-12 lg:mt-16">
            <button
              onClick={() => onNavigate?.("services")}
              className="flex items-center gap-3 text-[#ce0e2d] hover:text-[#a00b24] transition-colors duration-300 text-xl lg:text-2xl font-semibold"
              style={{ fontFamily: "'Parkinsans', sans-serif" }}
            >
              <span>Mostrar todos</span>
              <div className="w-6 h-6 rounded-full border-[3px] border-[#ce0e2d] flex items-center justify-center">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 4v16m8-8H4" />
                </svg>
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}