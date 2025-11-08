import { motion } from "motion/react";
import imgMarcas from "figma:asset/50d4e13e78824d5ad7e77a0a1703f711ed700e5f.png";
import imgBayerSeeklogo from "figma:asset/04f10d29818c4202b80aa718b3a0b0c14f99eb03.png";
import img11127LowMercklogobluergb768 from "figma:asset/1d7eea53cdf4d9493aabefca499e6cedea51e1ce.png";
import imgPfizer2021 from "figma:asset/01f82707c0a6dac10d9e688736ae92ded4662ac9.png";

const companies = [
  { name: "Abbott", image: imgMarcas },
  { name: "Bayer", image: imgBayerSeeklogo },
  { name: "Merck", image: img11127LowMercklogobluergb768 },
  { name: "Pfizer", image: imgPfizer2021 },
];

export function CompaniesSection() {
  const duplicatedCompanies = [...companies, ...companies, ...companies, ...companies];

  return (
    <section id="marcas" className="bg-white py-12 lg:py-16 border-t border-[#54565a]/10 w-full">
      <div className="w-full">
        <div className="max-w-[1440px] mx-auto px-8 md:px-16 lg:px-24">
          <div className="text-center mb-10 lg:mb-12">
            <h2
              className="text-[#ce0e2d] text-5xl lg:text-[64px] leading-[70px] mb-6"
              style={{ fontFamily: "'Rajdhani', sans-serif", fontWeight: 600 }}
            >
              Empresas Asociadas
            </h2>
            <p
              className="text-black text-2xl"
              style={{ fontFamily: "'Parkinsans', sans-serif" }}
            >
              "Trabajamos con las empresas líderes del mercado"
            </p>
          </div>

          {/* Infinite Scrolling Carousel - More compact */}
          <div className="relative overflow-hidden">
            <motion.div
              className="flex gap-8 lg:gap-12"
              animate={{
                x: [0, -1400],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 30,
                  ease: "linear",
                },
              }}
            >
              {duplicatedCompanies.map((company, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-[180px] lg:w-[220px] h-[80px] lg:h-[100px] flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
                >
                  <img
                    src={company.image}
                    alt={company.name}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}