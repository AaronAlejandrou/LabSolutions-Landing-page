import { motion } from "motion/react";
import { Mail, MapPin, Phone } from "lucide-react";
import svgPaths from "../../assets/svg/svg-jj59f59zjy";
import { siteConfig } from "../../config/site";

export function ContactSection() {
  const phoneNumber = siteConfig.contact.whatsApp;

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${phoneNumber}`, "_blank");
  };

  return (
    <section id="contacto" className="bg-white py-12 lg:py-16 border-t border-[#54565a]/10 w-full">
      <div className="w-full">
        <div className="max-w-[1440px] mx-auto px-8 md:px-16 lg:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8 lg:space-y-12"
            >
              <div>
                <h2
                  className="text-[#ce0e2d] text-5xl lg:text-[64px] leading-[70px]"
                  style={{ fontFamily: "'Rajdhani', sans-serif", fontWeight: 600 }}
                >
                  Contáctanos
                </h2>
              </div>

              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-6 h-6 text-[#25D366]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                        <path
                          d={svgPaths.pf668100}
                          fill="currentColor"
                          fillRule="evenodd"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="flex-1 space-y-3">
                    <p
                      className="text-black text-sm"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      WhatsApp
                    </p>
                    <p
                      className="text-black text-sm font-semibold"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {siteConfig.contact.phoneDisplay}
                    </p>
                    <button
                      onClick={handleWhatsAppClick}
                      className="bg-[#25D366] text-white px-6 py-3 rounded-full hover:bg-[#20BA5A] transition-all duration-200 flex items-center gap-2 shadow-md hover:shadow-lg"
                      style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500 }}
                    >
                      <Phone className="w-4 h-4" />
                      Chatear ahora
                    </button>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                    <Mail className="w-6 h-6 text-black" />
                  </div>
                  <div className="space-y-2">
                    <p
                      className="text-black text-sm"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      Gmail:
                    </p>
                    <a
                      href={`mailto:${siteConfig.contact.email}`}
                      className="text-black text-sm font-semibold hover:text-[#ce0e2d] underline transition-colors"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {siteConfig.contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                    <MapPin className="w-6 h-6 text-black" />
                  </div>
                  <div className="space-y-2">
                    <p
                      className="text-black text-sm"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      Ubicación
                    </p>
                    <p
                      className="text-black text-sm font-semibold"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      58 Middle Point Rd
                      <br />
                      San Francisco, 94124
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white border border-black/25 rounded-lg p-8 lg:p-10 shadow-lg"
            >
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      className="block text-black text-sm mb-3"
                      style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600 }}
                    >
                      Nombre
                    </label>
                    <input
                      type="text"
                      placeholder="Juan Pérez"
                      className="w-full px-4 py-4 border border-black/25 rounded-md focus:outline-none focus:border-[#ce0e2d] transition-colors text-sm"
                      style={{ fontFamily: "'Poppins', sans-serif" }}
                    />
                  </div>
                  <div>
                    <label
                      className="block text-black text-sm mb-3"
                      style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600 }}
                    >
                      Correo electrónico
                    </label>
                    <input
                      type="email"
                      placeholder="ejemplo@gmail.com"
                      className="w-full px-4 py-4 border border-black/25 rounded-md focus:outline-none focus:border-[#ce0e2d] transition-colors text-sm"
                      style={{ fontFamily: "'Poppins', sans-serif" }}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      className="block text-black text-sm mb-3"
                      style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600 }}
                    >
                      Teléfono
                    </label>
                    <input
                      type="tel"
                      placeholder="+51 123 456 789"
                      className="w-full px-4 py-4 border border-black/25 rounded-md focus:outline-none focus:border-[#ce0e2d] transition-colors text-sm"
                      style={{ fontFamily: "'Poppins', sans-serif" }}
                    />
                  </div>
                  <div>
                    <label
                      className="block text-black text-sm mb-3"
                      style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600 }}
                    >
                      Empresa
                    </label>
                    <input
                      type="text"
                      placeholder="LabSolutions Company"
                      className="w-full px-4 py-4 border border-black/25 rounded-md focus:outline-none focus:border-[#ce0e2d] transition-colors text-sm"
                      style={{ fontFamily: "'Poppins', sans-serif" }}
                    />
                  </div>
                </div>

                <div>
                  <label
                    className="block text-black text-sm mb-3"
                    style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600 }}
                  >
                    Mensaje
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Escribe aquí..."
                    className="w-full px-4 py-4 border border-black/25 rounded-md focus:outline-none focus:border-[#ce0e2d] transition-colors resize-none text-sm"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#ce0e2d] text-white text-sm py-4 rounded-full hover:bg-[#a00b24] transition-colors duration-300 shadow-lg hover:shadow-xl flex items-center justify-center text-center"
                  style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600 }}
                >
                  Enviar mensaje
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}