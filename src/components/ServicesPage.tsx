import imgPlaceholderImage from "figma:asset/bcb58ba3fe21d19231aab585b259e82ed632073c.png";
import imgPlaceholderImage1 from "figma:asset/baa88283e462280f9b442724609a594c093b71a9.png";
import imgPlaceholderImage2 from "figma:asset/15abfcf01d43b74e34a2824ec5517e833534a313.png";
import imgPlaceholderImage3 from "figma:asset/c8225de6e9075ba00014ebf4cf2363bef8e82d35.png";
import imgPlaceholderImage4 from "figma:asset/c7624450dd6660de50d1cd58e66db943973fbd33.png";
import imgPlaceholderImage5 from "figma:asset/c13560064f1bf53e0afe7355825a340020df2bc0.png";
import imgPlaceholderImage6 from "figma:asset/25538dcdb9941d3e063237fdc8f00a585e662d76.png";
import imgPlaceholderImage7 from "figma:asset/f032f2b3a9e78ff29e8d0ec80c36c822f8126aa0.png";
import imgPlaceholderImage8 from "figma:asset/8a9bb507a1550622ad3670e432cd817e486ad08a.png";
import imgPlaceholderImage9 from "figma:asset/3feb5a77c843097a5287fc01eb6be740af641f15.png";
import imgPlaceholderImage10 from "figma:asset/ad5e539e57689cc38ac82d2ad82c0e965cb112d8.png";
import imgPlaceholderImage11 from "figma:asset/b31aa4b49eeee45bfca727ad44934242bb0d38ca.png";
import imgPlaceholderImage12 from "figma:asset/cb7afd0b0dd6d1266f923196a0aba1ab1dec633f.png";
import imgPlaceholderImage13 from "figma:asset/7727ee2b2b95d9680094f77ab54270e98315654c.png";
import imgPlaceholderImage14 from "figma:asset/a688d74a52489b83641ded600a9fe81893e57d6a.png";
import imgPlaceholderImage15 from "figma:asset/039527c5637a1f6b4c86b1ebb6beafcbca6a7253.png";
import imgPlaceholderImage16 from "figma:asset/53b0653b12e92e921287eaa7a11cc977430e3e61.png";
import imgPlaceholderImage17 from "figma:asset/d624f29a423d2b7f588d1efad2cf6dd425dddae6.png";
import imgPlaceholderImage18 from "figma:asset/86f1a1b10a834fa0395333ab80dccb44ab1c5077.png";
import imgPlaceholderImage19 from "figma:asset/9d58e025dd834bfd349ffa10aeec2f4256d1c38e.png";
import imgPlaceholderImage20 from "figma:asset/ed050303c108e1a09e5f7f89490b152ef9cefae1.png";
import imgPlaceholderImage21 from "figma:asset/c03b711f9d4d8e33731c9aee6d466b55389acb17.png";
import imgPlaceholderImage22 from "figma:asset/ea4f29586e50752b8467ad97d04b2bd0e1abc29a.png";
import imgPlaceholderImage23 from "figma:asset/ed89e918172d22046902a7b7073d1048e014ab59.png";
import imgPlaceholderImage24 from "figma:asset/d6f14c1dc95ccbb6eec06e349ccb5835d4b4aa5e.png";
import imgPlaceholderImage25 from "figma:asset/3af331167337d881473434dc0549c27401cac051.png";
import imgPlaceholderImage26 from "figma:asset/4940ddb60379584602da76a5233ad3e625e9ee93.png";
import imgPlaceholderImage27 from "figma:asset/4209e85f409dcc47dd3e57ec24e817587b8e8b69.png";
import { motion } from "motion/react";

interface Service {
  title: string;
  description: string;
  images: string[];
}

const services: Service[] = [
  {
    title: "Diagnóstico técnico de instrumentos",
    description: "Evaluación para detectar fallas y mejorar el rendimiento del equipo.",
    images: [imgPlaceholderImage, imgPlaceholderImage1],
  },
  {
    title: "Mantenimiento correctivo",
    description: "Reparación para restablecer su funcionamiento adecuado.",
    images: [imgPlaceholderImage, imgPlaceholderImage2],
  },
  {
    title: "Calibración y preventivo",
    description: "Revisión periódica para evitar fallas y asegurar precisión.",
    images: [imgPlaceholderImage, imgPlaceholderImage3, imgPlaceholderImage4, imgPlaceholderImage5, imgPlaceholderImage4],
  },
  {
    title: "Implementación de métodos",
    description: "Desarrollo y validación de procedimientos analíticos eficientes.",
    images: [imgPlaceholderImage, imgPlaceholderImage6, imgPlaceholderImage7, imgPlaceholderImage8, imgPlaceholderImage9],
  },
  {
    title: "Capacitación de los instrumentos",
    description: "Formación en uso y mantenimiento correcto de los equipos.",
    images: [imgPlaceholderImage, imgPlaceholderImage10, imgPlaceholderImage11, imgPlaceholderImage12, imgPlaceholderImage13, imgPlaceholderImage14],
  },
  {
    title: "Instalación de los instrumentos",
    description: "Montaje y configuración para la puesta en marcha técnica.",
    images: [imgPlaceholderImage, imgPlaceholderImage15],
  },
  {
    title: "Verificación y calificación operacional",
    description: "Pruebas para validar precisión y cumplimiento normativo.",
    images: [imgPlaceholderImage, imgPlaceholderImage16, imgPlaceholderImage17, imgPlaceholderImage18, imgPlaceholderImage19, imgPlaceholderImage20, imgPlaceholderImage21, imgPlaceholderImage22, imgPlaceholderImage23, imgPlaceholderImage24, imgPlaceholderImage25, imgPlaceholderImage23, imgPlaceholderImage26, imgPlaceholderImage27],
  },
];

interface ServiceCardProps {
  service: Service;
  index: number;
  phoneNumber?: string;
  onNavigate?: (page: "home" | "products" | "services" | "about" | "contact") => void;
}

function ServiceCard({ service, index, phoneNumber = "", onNavigate }: ServiceCardProps) {
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
        <div className="absolute inset-0">
          {service.images.map((img, imgIndex) => (
            <img
              key={imgIndex}
              alt=""
              className="absolute max-w-none object-cover rounded-[8px] size-full"
              style={{ objectPosition: "50% 50%" }}
              src={img}
            />
          ))}
        </div>
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

        <button
          onClick={() => onNavigate && onNavigate("contact")}
          className="bg-[#ce0e2d] px-[24px] py-[10px] rounded-[30px] text-white text-[16px] mt-[8px] hover:bg-[#a00b24] hover:scale-105 active:scale-95 transition-all duration-150"
          style={{ 
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 500,
            lineHeight: "1.5"
          }}
        >
          Contáctanos
        </button>
      </div>
    </motion.div>
  );
}

interface ServicesPageProps {
  phoneNumber?: string;
  onNavigate?: (page: "home" | "products" | "services" | "about" | "contact") => void;
}

export function ServicesPage({ phoneNumber = "", onNavigate }: ServicesPageProps) {
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
            En LabSolutions Company, nos especializamos en el mantenimiento, diagnóstico y calibración de equipos de laboratorio. Nuestros servicios están diseñados para garantizar el óptimo rendimiento de sus instrumentos.
          </p>
        </div>

        {/* Services Grid - 2 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[48px] gap-y-[40px] w-full">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              service={service}
              index={index}
              phoneNumber={phoneNumber}
              onNavigate={onNavigate}
            />
          ))}
        </div>
      </div>
    </div>
  );
}