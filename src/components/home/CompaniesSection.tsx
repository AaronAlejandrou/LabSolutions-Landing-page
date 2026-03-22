import { useState } from "react";
import { motion } from "motion/react";

interface CompanyItem {
  name: string;
  logoPath: string;
}

const clients: CompanyItem[] = [
  { name: "SEDAPAL", logoPath: "/logos/clientes/sedapal.png" },
  { name: "ELIFARMA", logoPath: "/logos/clientes/elifarma.png" },
  { name: "ROSTER", logoPath: "/logos/clientes/roster.png" },
  { name: "INSTITUTO QUIMIOTERAPICO", logoPath: "/logos/clientes/instituto-quimioterapico.png" },
];

const suppliers: CompanyItem[] = [
  { name: "Shimadzu", logoPath: "/logos/proveedores/shimadzu.png" },
  { name: "Thermo", logoPath: "/logos/proveedores/thermo.png" },
  { name: "Perkin Elmer", logoPath: "/logos/proveedores/perkin-elmer.png" },
  { name: "Agilent", logoPath: "/logos/proveedores/agilent.png" },
];

function LogoCard({ item }: { item: CompanyItem }) {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="w-[180px] md:w-[240px] lg:w-[280px] h-[90px] md:h-[120px] flex items-center justify-center px-4 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 hover:scale-105 transition-all duration-300 ease-out cursor-pointer">
      {!imageError ? (
        <img
          src={item.logoPath}
          alt={item.name}
          className="max-w-full max-h-full object-contain"
          loading="lazy"
          onError={() => setImageError(true)}
        />
      ) : (
        <span
          className="text-[#54565a] text-xl lg:text-2xl font-bold text-center leading-tight whitespace-nowrap"
          style={{ fontFamily: "'Rajdhani', sans-serif" }}
        >
          {item.name}
        </span>
      )}
    </div>
  );
}

function InfiniteLogoCarousel({ items, reverse = false }: { items: CompanyItem[]; reverse?: boolean }) {
  const loopItems = [...items, ...items, ...items, ...items, ...items, ...items];

  return (
    <div className="relative overflow-hidden w-full py-4 flex items-center bg-transparent">
      <div className="absolute inset-y-0 left-0 w-20 md:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-20 md:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
      
      <motion.div
        className="flex gap-12 md:gap-20 lg:gap-28 w-max items-center"
        animate={{ x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: reverse ? 35 : 30, // Tiempos ligeramente distintos para darle fluidez
          ease: "linear",
        }}
      >
        {loopItems.map((item, index) => (
          <LogoCard key={`${item.name}-${index}`} item={item} />
        ))}
      </motion.div>
    </div>
  );
}

export function CompaniesSection() {
  return (
    <section id="marcas" className="bg-white py-16 lg:py-24 w-full overflow-hidden border-0">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24">
        <div className="text-center mb-16 lg:mb-20 px-4">
          <h2
            className="text-[#ce0e2d] text-4xl md:text-5xl lg:text-[56px] leading-tight mb-4"
            style={{ fontFamily: "'Rajdhani', sans-serif", fontWeight: 700 }}
          >
            Empresas Asociadas
          </h2>
          <p
            className="text-[#54565a] text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            "Trabajamos con empresas líderes del mercado"
          </p>
        </div>

        <div className="flex flex-col gap-16 md:gap-20">
          <div className="flex flex-col gap-6 lg:gap-8">
            <h3
              className="text-[#ce0e2d] text-3xl md:text-4xl text-center"
              style={{ fontFamily: "'Rajdhani', sans-serif", fontWeight: 700 }}
            >
              Empresas Cliente
            </h3>
            <InfiniteLogoCarousel items={clients} />
          </div>

          <div className="flex flex-col gap-6 lg:gap-8">
            <h3
              className="text-[#ce0e2d] text-3xl md:text-4xl text-center"
              style={{ fontFamily: "'Rajdhani', sans-serif", fontWeight: 700 }}
            >
              Proveedores
            </h3>
            <InfiniteLogoCarousel items={suppliers} reverse />
          </div>
        </div>
      </div>
    </section>
  );
}