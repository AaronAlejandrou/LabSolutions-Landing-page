/**
 * Configuración central del sitio
 * Centraliza constantes como teléfonos, emails, redes sociales, etc.
 */

export const siteConfig = {
  name: "LabSolutions Company",
  description: "Soluciones innovadoras en instrumentación analítica y servicios especializados",
  
  // Contacto
  contact: {
    whatsApp: "51967203604",
    email: "info@labsolutions.com.pe",
    phone: "+51 967 203 604",
    phoneDisplay: "+51 967 203 604",
    address: {
      line1: "Av. Jose Pardo Nro. 223 Int. 101",
      line2: "Miraflores, Lima - Perú",
    },
  },
  
  // Horarios
  schedule: {
    weekdays: "Lun - Vie",
    hours: "8:30 am - 5:00pm",
  },
  
  // Redes sociales
  social: {
    linkedin: "#",
    instagram: "#",
  },
  
  // SEO
  seo: {
    defaultTitle: "LabSolutions Company - Instrumentación Analítica",
    titleTemplate: "%s | LabSolutions Company",
    keywords: ["instrumentación analítica", "equipos de laboratorio", "servicios técnicos", "calibración"],
  },
} as const;
