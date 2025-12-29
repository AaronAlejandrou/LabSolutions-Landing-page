import { motion } from "motion/react";

const testimonials = [
  {
    id: 1,
    company: "ACFARMA",
    name: "Felipe Figueroa",
    role: "Directora de Laboratorio Químico",
    quote:
      "Gracias al soporte técnico de LABSOLUTIONS, logramos optimizar el rendimiento de nuestros equipos HPLC. Su respuesta fue rápida y profesional.",
  },
  {
    id: 2,
    company: "MEDEFAR",
    name: "Maricela Chirinos",
    role: "Jefe de Automatización Industrial",
    quote:
      "Contar con LABSOLUTIONS para la configuración de nuestros sistemas fue clave en la puesta en marcha de nuestra planta. Altamente recomendados.",
  },
  {
    id: 3,
    company: "PHARMED",
    name: "Luis Sanchez",
    role: "Coordinadora de Planta",
    quote:
      "Desde la calibración de transmisores hasta la implementación, el equipo de LABSOLUTIONS superó nuestras expectativas.",
  },
];

export function TestimonialsSection() {
  return (
    <section className="bg-white py-12 lg:py-16 border-t border-[#54565a]/10 w-full">
      <div className="w-full">
        <div className="max-w-[1440px] mx-auto px-8 md:px-16 lg:px-24">
          <div className="text-center mb-10 lg:mb-12">
            <h2
              className="text-[#ce0e2d] text-5xl lg:text-[64px] leading-[70px] mb-6"
              style={{ fontFamily: "'Rajdhani', sans-serif", fontWeight: 600 }}
            >
              ¿Qué dicen nuestros clientes?
            </h2>
            <p
              className="text-black text-2xl max-w-4xl mx-auto"
              style={{ fontFamily: "'Parkinsans', sans-serif" }}
            >
              En LABSOLUTIONS COMPANY S.A.C. trabajamos comprometidos con brindar soluciones confiables,
              eficientes y a la medida. Estos son algunos comentarios de nuestros clientes satisfechos:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white border border-black/20 rounded-lg p-8 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] hover:shadow-xl transition-shadow duration-300"
              >
                <div className="space-y-6">
                  <h3
                    className="text-[#ce0e2d] text-2xl text-center"
                    style={{ fontFamily: "'Parkinsans', sans-serif", fontWeight: 700 }}
                  >
                    {testimonial.company}
                  </h3>

                  <p
                    className="text-black text-sm leading-[22px] min-h-[88px]"
                    style={{ fontFamily: "'Parkinsans', sans-serif" }}
                  >
                    "{testimonial.quote}"
                  </p>

                  <div className="pt-4 border-t border-black/10 space-y-1 text-center">
                    <p
                      className="text-black text-base"
                      style={{ fontFamily: "'Parkinsans', sans-serif", fontWeight: 700 }}
                    >
                      {testimonial.name}
                    </p>
                    <p
                      className="text-black/70 text-base"
                      style={{ fontFamily: "'Parkinsans', sans-serif" }}
                    >
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}