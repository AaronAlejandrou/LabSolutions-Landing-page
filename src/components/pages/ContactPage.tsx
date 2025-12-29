import { motion } from "motion/react";
import { Mail, MapPin } from "lucide-react";
import { useState } from "react";
import svgPaths from "../../assets/svg/svg-jj59f59zjy";
import { siteConfig } from "../../config/site";

interface FAQItem {
  question: string;
  answer: string;
}

export function ContactPage() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(1);
  const phoneNumber = siteConfig.contact.whatsApp;

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${phoneNumber}`, "_blank");
  };

  const faqs: FAQItem[] = [
    {
      question: "¿Qué servicios ofrece LabSolutions Company?",
      answer: "Ofrecemos una amplia gama de servicios industriales incluyendo mantenimiento preventivo y correctivo, instalación de equipos, calibración de instrumentos, consultoría técnica y soluciones personalizadas para optimizar procesos industriales."
    },
    {
      question: "¿Cuál es el tiempo de respuesta para cotizaciones?",
      answer: "Nuestro equipo procesa las solicitudes de cotización en un plazo máximo de 24 horas hábiles. Para consultas urgentes, puede contactarnos directamente vía WhatsApp para una respuesta inmediata."
    },
    {
      question: "¿Ofrecen garantía en sus productos?",
      answer: "Sí, todos nuestros productos cuentan con garantía del fabricante y respaldo técnico de LabSolutions. El período de garantía varía según el producto, generalmente entre 12 y 24 meses."
    },
    {
      question: "¿Realizan instalaciones a nivel nacional?",
      answer: "Sí, contamos con técnicos especializados que realizan instalaciones y servicios a nivel nacional. Nuestro equipo se desplaza a diferentes ciudades garantizando la misma calidad de servicio."
    }
  ];

  return (
    <div className="bg-white w-full">
      {/* Contact Form Section */}
      <section className="py-20 lg:py-24 w-full">
        <div className="max-w-[1440px] mx-auto px-8 md:px-16 lg:px-24">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2
              className="text-[#ce0e2d] text-5xl lg:text-[64px] mb-6"
              style={{ fontFamily: "'Rajdhani', sans-serif", fontWeight: 700, lineHeight: "1.1" }}
            >
              Contáctanos
            </h2>
            <p
              className="text-[#54565a] text-[18px] max-w-[600px] mx-auto"
              style={{ fontFamily: "'Poppins', sans-serif", lineHeight: "1.6" }}
            >
              Completa el formulario y nuestro equipo te responderá en menos de 24 horas
            </p>
          </motion.div>

          {/* Contact Form - Centered */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-[800px] mx-auto"
          >
            <div className="bg-white border-2 border-[#ce0e2d]/20 rounded-2xl p-8 lg:p-12 shadow-xl">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      className="block text-[#0a0102] text-[15px] mb-3"
                      style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600 }}
                    >
                      Nombre completo *
                    </label>
                    <input
                      type="text"
                      placeholder="Juan Pérez"
                      required
                      className="w-full px-5 py-4 border-2 border-[#e5e7eb] rounded-xl focus:outline-none focus:border-[#ce0e2d] transition-all text-[15px] hover:border-[#ce0e2d]/50"
                      style={{ fontFamily: "'Poppins', sans-serif" }}
                    />
                  </div>
                  <div>
                    <label
                      className="block text-[#0a0102] text-[15px] mb-3"
                      style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600 }}
                    >
                      Correo electrónico *
                    </label>
                    <input
                      type="email"
                      placeholder="ejemplo@gmail.com"
                      required
                      className="w-full px-5 py-4 border-2 border-[#e5e7eb] rounded-xl focus:outline-none focus:border-[#ce0e2d] transition-all text-[15px] hover:border-[#ce0e2d]/50"
                      style={{ fontFamily: "'Poppins', sans-serif" }}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      className="block text-[#0a0102] text-[15px] mb-3"
                      style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600 }}
                    >
                      Teléfono / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      placeholder={siteConfig.contact.phoneDisplay}
                      required
                      className="w-full px-5 py-4 border-2 border-[#e5e7eb] rounded-xl focus:outline-none focus:border-[#ce0e2d] transition-all text-[15px] hover:border-[#ce0e2d]/50"
                      style={{ fontFamily: "'Poppins', sans-serif" }}
                    />
                  </div>
                  <div>
                    <label
                      className="block text-[#0a0102] text-[15px] mb-3"
                      style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600 }}
                    >
                      Empresa
                    </label>
                    <input
                      type="text"
                      placeholder="Tu empresa"
                      className="w-full px-5 py-4 border-2 border-[#e5e7eb] rounded-xl focus:outline-none focus:border-[#ce0e2d] transition-all text-[15px] hover:border-[#ce0e2d]/50"
                      style={{ fontFamily: "'Poppins', sans-serif" }}
                    />
                  </div>
                </div>

                <div>
                  <label
                    className="block text-[#0a0102] text-[15px] mb-3"
                    style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600 }}
                  >
                    ¿Cómo podemos ayudarte? *
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Cuéntanos sobre tu proyecto o consulta..."
                    required
                    className="w-full px-5 py-4 border-2 border-[#e5e7eb] rounded-xl focus:outline-none focus:border-[#ce0e2d] transition-all resize-none text-[15px] hover:border-[#ce0e2d]/50"
                    style={{ fontFamily: "'Poppins', sans-serif", lineHeight: "1.6" }}
                  />
                </div>

                <div className="flex items-start gap-3 pt-2">
                  <input
                    type="checkbox"
                    id="privacy"
                    required
                    className="mt-1 w-5 h-5 border-2 border-[#e5e7eb] rounded accent-[#ce0e2d] cursor-pointer"
                  />
                  <label
                    htmlFor="privacy"
                    className="text-[#54565a] text-[13px] cursor-pointer"
                    style={{ fontFamily: "'Poppins', sans-serif", lineHeight: "1.5" }}
                  >
                    Acepto la política de privacidad y el tratamiento de mis datos personales
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#ce0e2d] text-white text-[16px] py-5 rounded-full hover:bg-[#a00b24] transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-[1.02] flex items-center justify-center gap-3 group"
                  style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600 }}
                >
                  <span>Enviar mensaje</span>
                  <svg 
                    className="w-5 h-5 group-hover:translate-x-1 transition-transform" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
              </form>

              {/* Contact Info Pills */}
              <div className="mt-10 pt-8 border-t-2 border-[#f0f0f0] flex flex-wrap gap-4 justify-center">
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="inline-flex items-center gap-2 px-5 py-3 bg-[#f8f9fa] rounded-full hover:bg-[#ce0e2d]/10 transition-all group"
                >
                  <Mail className="w-4 h-4 text-[#ce0e2d]" />
                  <span
                    className="text-[#54565a] text-[14px] group-hover:text-[#ce0e2d]"
                    style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500 }}
                  >
                    {siteConfig.contact.email}
                  </span>
                </a>
                <a
                  href="#"
                  onClick={handleWhatsAppClick}
                  className="inline-flex items-center gap-2 px-5 py-3 bg-[#25D366]/10 rounded-full hover:bg-[#25D366]/20 transition-all group"
                >
                  <div className="w-4 h-4 text-[#25D366]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                      <path
                        d={svgPaths.pf668100}
                        fill="currentColor"
                        fillRule="evenodd"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span
                    className="text-[#54565a] text-[14px] group-hover:text-[#25D366]"
                    style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500 }}
                  >
                    {siteConfig.contact.phoneDisplay}
                  </span>
                </a>
                <div className="inline-flex items-center gap-2 px-5 py-3 bg-[#f8f9fa] rounded-full">
                  <MapPin className="w-4 h-4 text-[#ce0e2d]" />
                  <span
                    className="text-[#54565a] text-[14px]"
                    style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500 }}
                  >
                    San Francisco, CA 94124
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-[#f8f9fa] py-16 lg:py-20 w-full">
        <div className="max-w-[1440px] mx-auto px-8 md:px-16 lg:px-24">
          <motion.div
            className="flex flex-col items-center gap-6 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2
              className="text-[#ce0e2d] text-[36px] lg:text-[40px] tracking-[-0.4px]"
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 800,
                lineHeight: "1.2",
              }}
            >
              Preguntas Frecuentes
            </h2>
            <p
              className="text-black text-[14px] text-center max-w-[520px]"
              style={{
                fontFamily: "'Poppins', sans-serif",
                lineHeight: "1.6",
              }}
            >
              Encuentra respuestas a las preguntas más comunes sobre nuestros productos y servicios
            </p>
          </motion.div>

          <motion.div
            className="max-w-[700px] mx-auto bg-white border border-black/20 rounded-lg overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`border-black/20 ${
                  index === 0 ? "border-b" : index === faqs.length - 1 ? "border-t" : "border-y"
                }`}
              >
                <button
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between hover:bg-[#f8f9fa] transition-colors"
                >
                  <span
                    className="text-[#ce0e2d] text-[16px] text-left pr-4"
                    style={{
                      fontFamily: "'Poppins', sans-serif",
                      fontWeight: 600,
                      lineHeight: "1.4",
                    }}
                  >
                    {faq.question}
                  </span>
                  <div className="flex-shrink-0">
                    {openFAQ === index ? (
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 14 14">
                        <path
                          d="M9.75 0.65L0.65 9.75M0.65 0.65L9.75 9.75"
                          stroke="#CE0E2D"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.3"
                        />
                      </svg>
                    ) : (
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 14 14">
                        <path
                          d="M6.66176 0.661765V12.6618M12.6618 6.66176H0.661765"
                          stroke="#CE0E2D"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.32353"
                        />
                      </svg>
                    )}
                  </div>
                </button>
                {openFAQ === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5">
                      <p
                        className="text-black text-[14px]"
                        style={{
                          fontFamily: "'Poppins', sans-serif",
                          lineHeight: "1.6",
                        }}
                      >
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}