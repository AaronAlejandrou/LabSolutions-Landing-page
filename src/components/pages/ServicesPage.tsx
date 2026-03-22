import { servicesData } from "../../data/services";
import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";

interface ServiceCardProps {
  service: typeof servicesData[0];
  index: number;
  onViewDetail: (slug: string) => void;
  onNavigate?: (page: "home" | "products" | "services" | "about" | "contact") => void;
}

function ServiceCard({ service, index, onViewDetail, onNavigate }: ServiceCardProps) {
  return (
    <motion.div
      className="flex flex-col gap-[24px] p-6 rounded-[12px] hover:-translate-y-2 hover:shadow-[0_8px_30px_rgba(206,14,45,0.12)] transition-all duration-200 ease-out"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
    >
      {/* Image */}
      <div className="h-[240px] relative rounded-[8px] overflow-hidden w-full">
        <img
          alt={service.title}
          loading="lazy"
          decoding="async"
          className="max-w-none object-cover rounded-[8px] size-full"
          style={{ objectPosition: "50% 50%" }}
          src={service.images[0]}
        />
      </div>

      {/* Content */}
      <div className="flex flex-col gap-[16px] items-center text-center">
        <h3
          className="text-[#040405] text-[28px] tracking-[-0.24px]"
          style={{
            fontFamily: "'Lexend', sans-serif",
            lineHeight: "1.4"
          }}
        >
          {service.title}
        </h3>

        <p
          className="text-black text-[16px]"
          style={{
            fontFamily: "'Poppins', sans-serif",
            lineHeight: "1.5"
          }}
        >
          {service.description}
        </p>

        <div className="flex gap-3 mt-[8px] flex-wrap justify-center">
          <button
            onClick={() => onViewDetail(service.slug)}
            className="bg-[#ce0e2d] px-[24px] py-[10px] rounded-[30px] text-white text-[16px] hover:bg-[#a00b24] hover:scale-105 active:scale-95 transition-all duration-150"
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 500,
              lineHeight: "1.5"
            }}
          >
            Ver servicio
          </button>
          <button
            onClick={() => onNavigate && onNavigate("contact")}
            className="border border-[#ce0e2d] text-[#ce0e2d] px-[24px] py-[10px] rounded-[30px] text-[16px] hover:bg-[#ce0e2d] hover:text-white transition-all duration-150"
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 500,
              lineHeight: "1.5"
            }}
          >
            Cotizar
          </button>
        </div>
      </div>
    </motion.div>
  );
}

interface ServicesPageProps {
  phoneNumber?: string;
  onNavigate?: (page: "home" | "products" | "services" | "about" | "contact") => void;
}

export function ServicesPage({ phoneNumber = "", onNavigate }: ServicesPageProps) {
  const navigate = useNavigate();

  return (
    <div className="bg-white w-full min-h-screen">
      <div className="max-w-[1440px] mx-auto px-8 md:px-16 lg:px-24 py-16">

        {/* Page Title */}
        <h1
          className="text-[#54565a] text-4xl lg:text-5xl mb-12 text-center"
          style={{ fontFamily: "'Rajdhani', sans-serif", fontWeight: 600 }}
        >
          Nuestros <span className="text-[#ce0e2d]">Servicios</span>
        </h1>

        {/* Introduction */}
        <div className="flex flex-col gap-[16px] items-center max-w-[768px] mx-auto mb-16 text-center">
          <p
            className="text-[#040405] text-[18px]"
            style={{
              fontFamily: "'Poppins', sans-serif",
              lineHeight: "1.5"
            }}
          >
            Nuestro enfoque de soporte tecnico se organiza en vista de procesos: instalacion y diagnostico, mantenimiento preventivo y correctivo, verificacion operacional, capacitacion e implementacion de metodos.
          </p>
        </div>

        {/* Services Grid - 2 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[48px] gap-y-[40px] w-full">
          {servicesData.map((service, index) => (
            <ServiceCard
              key={index}
              service={service}
              index={index}
              onViewDetail={(slug) => navigate(`/servicios/${slug}`)}
              onNavigate={onNavigate}
            />
          ))}
        </div>
      </div>
    </div>
  );
}