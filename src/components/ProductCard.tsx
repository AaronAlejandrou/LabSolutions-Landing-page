import { useState } from "react";
import { motion } from "motion/react";

interface ProductCardProps {
  id: string;
  name: string;
  model: string;
  brand: string;
  image: string;
  onClick: () => void;
}

export function ProductCard({ name, model, brand, image, onClick }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative overflow-hidden rounded-[20px] cursor-pointer w-full"
      style={{ aspectRatio: "408/446" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Background que cambia de color */}
      <motion.div
        className="absolute inset-0"
        animate={{
          backgroundColor: isHovered ? "#ce0e2d" : "#ffffff",
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Contenedor de imagen que se expande en hover */}
      <motion.div
        className="absolute left-0 top-0 w-full rounded-[20px] overflow-hidden"
        animate={{
          height: isHovered ? "65%" : "52%",
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <img
          src={image}
          alt={name}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover"
        />

        {/* Overlay oscuro en hover para mejorar legibilidad */}
        <motion.div
          className="absolute inset-0 bg-black"
          animate={{
            opacity: isHovered ? 0.35 : 0,
          }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>

      {/* Contenedor de información */}
      <div className="absolute bottom-0 left-0 right-0 px-6 pb-6 flex flex-col justify-end" style={{ height: "48%" }}>
        {/* Textos */}
        <motion.div
          className="text-center space-y-1 px-4 mb-4"
          animate={{
            y: isHovered ? -8 : 0,
          }}
          transition={{ duration: 0.3 }}
        >
          <motion.p
            className="text-[22px] font-semibold leading-tight"
            style={{ fontFamily: "'Poppins', sans-serif" }}
            animate={{
              color: isHovered ? "#ffffff" : "#000000",
            }}
            transition={{ duration: 0.3 }}
          >
            {name}
          </motion.p>
          <motion.p
            className="text-[18px] leading-tight"
            style={{ fontFamily: "'Poppins', sans-serif" }}
            animate={{
              color: isHovered ? "#ffffff" : "#000000",
            }}
            transition={{ duration: 0.3 }}
          >
            {model}
          </motion.p>
          <motion.p
            className="text-[18px] font-light leading-tight"
            style={{ fontFamily: "'Poppins', sans-serif" }}
            animate={{
              color: isHovered ? "#ffffff" : "#000000",
              opacity: isHovered ? 0.95 : 0.7,
            }}
            transition={{ duration: 0.3 }}
          >
            {brand}
          </motion.p>
        </motion.div>

        {/* Botón */}
        <motion.button
          onClick={onClick}
          className="w-full max-w-[225px] mx-auto block h-[49px] rounded-[10px] text-[20px] font-semibold flex items-center justify-center"
          style={{ fontFamily: "'Poppins', sans-serif" }}
          animate={{
            backgroundColor: isHovered ? "#ffffff" : "#ce0e2d",
            color: isHovered ? "#ce0e2d" : "#ffffff",
          }}
          transition={{ duration: 0.3 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Mas informacion
        </motion.button>
      </div>
    </motion.div>
  );
}