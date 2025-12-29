import svgPaths from "../../assets/svg/svg-g63he7ym5m";
import imgPlaceholderImage from "../../assets/about-history-1.png";
import imgPlaceholderImage1 from "../../assets/about-history-2.png";
import imgPlaceholderImage2 from "../../assets/about-history-3.png";
import { motion } from "motion/react";

interface AboutPageProps {
  phoneNumber?: string;
  onNavigate?: (page: "home" | "products" | "services" | "about" | "contact") => void;
}

export function AboutPage({ phoneNumber = "", onNavigate }: AboutPageProps) {
  return (
    <div className="bg-white w-full">
      {/* Hero Section - Full Width with Overlay */}
      <section className="relative h-[700px] w-full overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            alt="Equipo de laboratorio"
            className="w-full h-full object-cover"
            src={imgPlaceholderImage}
          />
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#ce0e2d]/95 via-[#ce0e2d]/80 to-[#ce0e2d]/40" />
        </div>

        {/* Content */}
        <div className="relative h-full max-w-[1440px] mx-auto px-8 md:px-16 lg:px-[64px]">
          <motion.div
            className="flex flex-col gap-[32px] max-w-[700px] h-full justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex flex-col gap-[24px] text-white">
              <h1
                className="text-[64px] tracking-[-0.64px]"
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 700,
                  lineHeight: "1.1",
                }}
              >
                Más de 10 años de experiencia en soluciones
              </h1>
              <p
                className="text-[20px] text-white/90"
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  lineHeight: "1.6",
                }}
              >
                En LabSolutions Company, hemos dedicado más de una década a ofrecer soluciones innovadoras en el ámbito de la tecnología. Nuestro enfoque se centra en la satisfacción del cliente y la mejora continua de nuestros servicios.
              </p>
            </div>

            <div className="flex gap-[16px]">
              <button
                onClick={() => {
                  const section = document.getElementById("caracteristicas");
                  section?.scrollIntoView({ behavior: "smooth" });
                }}
                className="bg-white px-[32px] py-[14px] rounded-[100px] text-[#ce0e2d] text-[16px] hover:scale-105 hover:shadow-lg transition-all duration-200"
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 600,
                  lineHeight: "1.5",
                }}
              >
                Descubre más
              </button>
              <button
                onClick={() => onNavigate?.("contact")}
                className="border-2 border-white px-[32px] py-[14px] rounded-[100px] text-white text-[16px] hover:bg-[#25D366] hover:border-[#25D366] transition-all duration-200"
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 600,
                  lineHeight: "1.5",
                }}
              >
                Contáctanos
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission, Vision, Values Section - Card Layout */}
      <section className="bg-[#f8f9fa] w-full">
        <div className="max-w-[1440px] mx-auto px-8 md:px-16 lg:px-[64px] py-[96px]">
          <motion.div
            className="text-center mb-[64px]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2
              className="text-[48px] tracking-[-0.48px] text-[#0a0102] mb-[16px]"
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 700,
                lineHeight: "1.2",
              }}
            >
              Nuestros Principios
            </h2>
            <p
              className="text-[18px] text-[#54565a] max-w-[700px] mx-auto"
              style={{
                fontFamily: "'Poppins', sans-serif",
                lineHeight: "1.6",
              }}
            >
              Los valores que nos definen y guían cada decisión que tomamos
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-[32px]">
            {/* Mission Card */}
            <motion.div
              className="bg-white rounded-[16px] p-[40px] shadow-sm hover:shadow-xl transition-all duration-300 border border-[#e5e7eb]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0 }}
            >
              <div className="w-[64px] h-[64px] rounded-[16px] bg-[#ce0e2d]/10 flex items-center justify-center mb-[24px]">
                <svg className="w-[36px] h-[36px]" fill="none" viewBox="0 0 48 48">
                  <path
                    d={svgPaths.p2e97df00}
                    stroke="#CE0E2D"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                  />
                </svg>
              </div>
              <h3
                className="text-[28px] tracking-[-0.28px] text-[#0a0102] mb-[16px]"
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 600,
                  lineHeight: "1.3",
                }}
              >
                Nuestra misión
              </h3>
              <p
                className="text-[16px] text-[#54565a]"
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  lineHeight: "1.7",
                }}
              >
                Brindar soluciones efectivas y sostenibles que impulsen el crecimiento y la eficiencia empresarial de nuestros clientes.
              </p>
            </motion.div>

            {/* Vision Card */}
            <motion.div
              className="bg-white rounded-[16px] p-[40px] shadow-sm hover:shadow-xl transition-all duration-300 border border-[#e5e7eb]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="w-[64px] h-[64px] rounded-[16px] bg-[#ce0e2d]/10 flex items-center justify-center mb-[24px]">
                <svg className="w-[36px] h-[36px]" fill="none" viewBox="0 0 48 48">
                  <path
                    d="M24 18C24 19.5913 23.3679 21.1174 22.2426 22.2426C21.1174 23.3679 19.5913 24 18 24C16.4087 24 14.8826 23.3679 13.7574 22.2426C12.6321 21.1174 12 19.5913 12 18C12 16.4087 12.6321 14.8826 13.7574 13.7574C14.8826 12.6321 16.4087 12 18 12C19.5913 12 21.1174 12.6321 22.2426 13.7574C23.3679 14.8826 24 16.4087 24 18ZM44 24C44 26.1217 43.1571 28.1566 41.6569 29.6569C40.1566 31.1571 38.1217 32 36 32C33.8783 32 31.8434 31.1571 30.3431 29.6569C28.8429 28.1566 28 26.1217 28 24C28 21.8783 28.8429 19.8434 30.3431 18.3431C31.8434 16.8429 33.8783 16 36 16C38.1217 16 40.1566 16.8429 41.6569 18.3431C43.1571 19.8434 44 21.8783 44 24ZM18 44C18 44 6 44 6 38C6 32 12 28 18 28C24 28 30 32 30 38C30 44 18 44 18 44ZM36 44C36 44 28 44 28 40C28 36 32 33 36 33C40 33 44 36 44 40C44 44 36 44 36 44Z"
                    stroke="#CE0E2D"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                  />
                </svg>
              </div>
              <h3
                className="text-[28px] tracking-[-0.28px] text-[#0a0102] mb-[16px]"
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 600,
                  lineHeight: "1.3",
                }}
              >
                Nuestra visión
              </h3>
              <p
                className="text-[16px] text-[#54565a]"
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  lineHeight: "1.7",
                }}
              >
                Ser reconocidos como líderes en soluciones empresariales innovadoras que contribuyen a un futuro más sostenible.
              </p>
            </motion.div>

            {/* Values Card */}
            <motion.div
              className="bg-white rounded-[16px] p-[40px] shadow-sm hover:shadow-xl transition-all duration-300 border border-[#e5e7eb]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="w-[64px] h-[64px] rounded-[16px] bg-[#ce0e2d]/10 flex items-center justify-center mb-[24px]">
                <svg className="w-[36px] h-[36px]" fill="none" viewBox="0 0 48 48">
                  <path
                    d={svgPaths.p12955e80}
                    stroke="#CE0E2D"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                  />
                </svg>
              </div>
              <h3
                className="text-[28px] tracking-[-0.28px] text-[#0a0102] mb-[16px]"
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 600,
                  lineHeight: "1.3",
                }}
              >
                Nuestros valores
              </h3>
              <p
                className="text-[16px] text-[#54565a]"
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  lineHeight: "1.7",
                }}
              >
                Innovación constante, compromiso con la excelencia y sostenibilidad en cada proyecto que emprendemos.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="caracteristicas" className="bg-white w-full">
        <div className="max-w-[1440px] mx-auto px-8 md:px-16 lg:px-[64px] py-[112px]">
          <div className="flex flex-col gap-[80px] items-center">
            {/* Section Title */}
            <motion.div
              className="flex flex-col gap-[16px] items-center text-center max-w-[768px]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <p
                className="text-black text-[16px]"
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 600,
                  lineHeight: "1.5",
                }}
              >
                Características
              </p>
              <h2
                className="text-[#ce0e2d] text-[48px] tracking-[-0.48px]"
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 600,
                  lineHeight: "1.2",
                }}
              >
                Descubre nuestras características únicas de servicio
              </h2>
              <p
                className="text-black text-[18px]"
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  lineHeight: "1.5",
                }}
              >
                En LabSolutions, nos especializamos en ofrecer soluciones innovadoras y personalizadas. Nuestro enfoque centrado en el cliente garantiza resultados excepcionales.
              </p>
            </motion.div>

            {/* Features Grid with Image */}
            <div className="flex gap-[48px] items-center w-full">
              {/* Left Column */}
              <motion.div
                className="flex-1 flex flex-col gap-[64px]"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
              >
                {/* Innovación constante */}
                <div className="flex flex-col gap-[24px] items-center text-center">
                  <div className="w-[48px] h-[48px]">
                    <svg className="w-full h-full" fill="none" viewBox="0 0 48 48">
                      <path
                        d={svgPaths.p2e97df00}
                        stroke="#CE0E2D"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="4"
                      />
                    </svg>
                  </div>
                  <div className="flex flex-col gap-[16px]">
                    <h3
                      className="text-black text-[24px] tracking-[-0.24px]"
                      style={{
                        fontFamily: "'Poppins', sans-serif",
                        lineHeight: "1.4",
                      }}
                    >
                      Innovación constante
                    </h3>
                    <p
                      className="text-black text-[16px]"
                      style={{
                        fontFamily: "'Poppins', sans-serif",
                        lineHeight: "1.5",
                      }}
                    >
                      Implementamos tecnologías avanzadas para mejorar la eficiencia y efectividad de nuestros servicios.
                    </p>
                  </div>
                </div>

                {/* Atención personalizada */}
                <div className="flex flex-col gap-[24px] items-center text-center">
                  <div className="w-[48px] h-[48px]">
                    <svg className="w-full h-full" fill="none" viewBox="0 0 48 48">
                      <path
                        d={svgPaths.p2c00d540}
                        stroke="#CE0E2D"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="4"
                      />
                    </svg>
                  </div>
                  <div className="flex flex-col gap-[16px]">
                    <h3
                      className="text-black text-[24px] tracking-[-0.24px]"
                      style={{
                        fontFamily: "'Poppins', sans-serif",
                        lineHeight: "1.4",
                      }}
                    >
                      Atención personalizada
                    </h3>
                    <p
                      className="text-black text-[16px]"
                      style={{
                        fontFamily: "'Poppins', sans-serif",
                        lineHeight: "1.5",
                      }}
                    >
                      Nuestro equipo se dedica a entender y satisfacer las necesidades específicas de cada cliente.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Center Image */}
              <motion.div
                className="w-[540px] h-[540px] relative rounded-[8px] overflow-hidden flex-shrink-0"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <img
                  alt="Laboratorio"
                  className="absolute inset-0 w-full h-full object-cover"
                  src={imgPlaceholderImage1}
                />
              </motion.div>

              {/* Right Column */}
              <motion.div
                className="flex-1 flex flex-col gap-[64px]"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
              >
                {/* Resultados medibles */}
                <div className="flex flex-col gap-[24px] items-center text-center">
                  <div className="w-[48px] h-[48px]">
                    <svg className="w-full h-full" fill="none" viewBox="0 0 48 48">
                      <path
                        d={svgPaths.p12955e80}
                        stroke="#CE0E2D"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="4"
                      />
                    </svg>
                  </div>
                  <div className="flex flex-col gap-[16px]">
                    <h3
                      className="text-black text-[24px] tracking-[-0.24px]"
                      style={{
                        fontFamily: "'Poppins', sans-serif",
                        lineHeight: "1.4",
                      }}
                    >
                      Resultados medibles
                    </h3>
                    <p
                      className="text-black text-[16px]"
                      style={{
                        fontFamily: "'Poppins', sans-serif",
                        lineHeight: "1.5",
                      }}
                    >
                      Ofrecemos informes detallados que demuestran el impacto positivo de nuestras soluciones en su negocio.
                    </p>
                  </div>
                </div>

                {/* Contáctanos hoy */}
                <div className="flex flex-col gap-[24px] items-center text-center">
                  <div className="w-[48px] h-[48px]">
                    <svg className="w-full h-full" fill="none" viewBox="0 0 48 48">
                      <path
                        d={svgPaths.p3cf86880}
                        stroke="#CE0E2D"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="4"
                      />
                    </svg>
                  </div>
                  <div className="flex flex-col gap-[16px]">
                    <h3
                      className="text-black text-[24px] tracking-[-0.24px]"
                      style={{
                        fontFamily: "'Poppins', sans-serif",
                        lineHeight: "1.4",
                      }}
                    >
                      Contáctanos hoy
                    </h3>
                    <p
                      className="text-black text-[16px]"
                      style={{
                        fontFamily: "'Poppins', sans-serif",
                        lineHeight: "1.5",
                      }}
                    >
                      Estamos aquí para ayudarte a alcanzar tus objetivos con nuestras soluciones efectivas.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* CTA Button */}
            <motion.button
              onClick={() => onNavigate?.("contact")}
              className="flex gap-[8px] items-center justify-center text-black text-[16px] group"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 500,
                lineHeight: "1.5",
              }}
            >
              <span>Contactar a un experto</span>
              <svg className="w-6 h-6 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24">
                <path d={svgPaths.p15d49700} fill="currentColor" />
              </svg>
            </motion.button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white w-full">
        <div className="max-w-[1440px] mx-auto px-8 md:px-16 lg:px-[64px] py-[112px]">
          <motion.div
            className="flex gap-[80px] items-center w-full"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            {/* Left Column - Content */}
            <div className="flex-1 flex flex-col gap-[32px]">
              <div className="flex flex-col gap-[24px]">
                <h2
                  className="text-[#ce0e2d] text-[48px] tracking-[-0.48px]"
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: 600,
                    lineHeight: "1.2",
                  }}
                >
                  Contáctanos para más información
                </h2>
                <p
                  className="text-[#0a0102] text-[18px]"
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    lineHeight: "1.5",
                  }}
                >
                  Estamos aquí para resolver tus dudas y ofrecerte soluciones personalizadas que se ajusten a tus necesidades.
                </p>
              </div>

              <div className="flex gap-[16px]">
                <button
                  onClick={() => onNavigate?.("contact")}
                  className="bg-[#ce0e2d] px-[24px] py-[10px] rounded-[100px] text-white text-[16px] hover:scale-105 transition-transform duration-200"
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: 500,
                    lineHeight: "1.5",
                  }}
                >
                  Solicitar
                </button>
                <button
                  onClick={() => {
                    const section = document.getElementById("caracteristicas");
                    section?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="border border-[rgba(10,1,2,0.15)] px-[24px] py-[10px] rounded-[100px] text-[#0a0102] text-[16px] hover:bg-black/5 transition-colors duration-200"
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: 500,
                    lineHeight: "1.5",
                  }}
                >
                  Más
                </button>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="flex-1 h-[400px] relative rounded-[8px] overflow-hidden">
              <img
                alt="Contacto"
                className="absolute inset-0 w-full h-full object-cover"
                src={imgPlaceholderImage2}
              />
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}