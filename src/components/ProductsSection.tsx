import { motion } from "motion/react";
import imgRectangle106 from "figma:asset/c76e741c533aaf7a964325400b8922bb745be87c.png";

const products = [
  {
    id: 1,
    title: "Analizador de carbono Orgánico Total",
    description: "Mide la concentración total de carbono orgánico en una muestra, generalmente agua",
    model: "RX - 30 -16",
    sector: "Industrias, mineras, alimentos",
    image: imgRectangle106,
  },
  {
    id: 2,
    title: "Analizador de carbono Orgánico Total",
    description: "Mide la concentración total de carbono orgánico en una muestra, generalmente agua",
    model: "RX - 30 -16",
    sector: "Industrias, mineras, alimentos",
    image: imgRectangle106,
  },
  {
    id: 3,
    title: "Analizador de carbono Orgánico Total",
    description: "Mide la concentración total de carbono orgánico en una muestra, generalmente agua",
    model: "RX - 30 -16",
    sector: "Industrias, mineras, alimentos",
    image: imgRectangle106,
  },
  {
    id: 4,
    title: "Analizador de carbono Orgánico Total",
    description: "Mide la concentración total de carbono orgánico en una muestra, generalmente agua",
    model: "RX - 30 -16",
    sector: "Industrias, mineras, alimentos",
    image: imgRectangle106,
  },
];

export function ProductsSection() {
  return (
    <section id="productos" className="bg-white py-12 lg:py-16 border-t border-[#54565a]/10 w-full">
      <div className="w-full">
        <div className="max-w-[1440px] mx-auto px-8 md:px-16 lg:px-24">
          <div className="text-center mb-10 lg:mb-12">
            <h2
              className="text-[#ce0e2d] text-5xl lg:text-[64px] leading-[70px]"
              style={{ fontFamily: "'Rajdhani', sans-serif", fontWeight: 600 }}
            >
              Productos
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-[20px] shadow-[0px_5px_25px_10px_rgba(192,192,192,0.25)] overflow-hidden hover:shadow-[0px_10px_35px_15px_rgba(192,192,192,0.35)] transition-shadow duration-300 flex flex-col"
              >
                <div className="relative h-[194px] overflow-hidden rounded-t-[20px]">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-6 space-y-4 flex flex-col flex-grow">
                  <h3
                    className="text-black text-2xl min-h-[60px]"
                    style={{ fontFamily: "'Barlow Semi Condensed', sans-serif", fontWeight: 500 }}
                  >
                    {product.title}
                  </h3>

                  <p
                    className="text-black/70 text-xs min-h-[50px]"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    {product.description}
                  </p>

                  <div className="bg-gray-50 rounded-lg p-4 space-y-2">
                    <p className="text-black text-sm" style={{ fontFamily: "'Poppins', sans-serif" }}>
                      <span className="font-semibold text-[#ce0e2d]">Modelo:</span> {product.model}
                    </p>
                    <p className="text-black text-sm" style={{ fontFamily: "'Poppins', sans-serif" }}>
                      <span className="font-semibold text-[#ce0e2d]">Sector:</span> {product.sector}
                    </p>
                  </div>

                  <div className="space-y-3 pt-2 mt-auto">
                    <button
                      className="w-full bg-[#ce0e2d] text-white text-lg font-semibold py-3 rounded-full hover:bg-[#a00b24] transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg flex items-center justify-center text-center"
                      style={{ fontFamily: "'Poppins', sans-serif" }}
                    >
                      Más información
                    </button>
                    <button
                      className="w-full border-2 border-[#ce0e2d] text-[#ce0e2d] text-lg font-semibold py-3 rounded-full hover:bg-[#ce0e2d] hover:text-white transition-all duration-300 hover:scale-105 flex items-center justify-center text-center"
                      style={{ fontFamily: "'Poppins', sans-serif" }}
                    >
                      Contáctanos
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="flex justify-center mt-12 lg:mt-16">
            <button
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