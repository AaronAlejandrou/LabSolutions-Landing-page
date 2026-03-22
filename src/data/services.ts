import imgPlaceholderImage from "../assets/service-diagnostic-1.png";
import imgPlaceholderImage1 from "../assets/service-diagnostic-2.png";
import imgPlaceholderImage2 from "../assets/service-maintenance-1.png";
import imgPlaceholderImage3 from "../assets/service-calibration-1.png";
import imgPlaceholderImage4 from "../assets/service-calibration-2.png";
import imgPlaceholderImage5 from "../assets/service-calibration-3.png";
import imgPlaceholderImage6 from "../assets/service-methods-1.png";
import imgPlaceholderImage7 from "../assets/service-methods-2.png";
import imgPlaceholderImage8 from "../assets/service-methods-3.png";
import imgPlaceholderImage9 from "../assets/service-methods-4.png";
import imgPlaceholderImage10 from "../assets/service-training-1.png";
import imgPlaceholderImage11 from "../assets/service-training-2.png";
import imgPlaceholderImage12 from "../assets/service-training-3.png";
import imgPlaceholderImage13 from "../assets/service-training-4.png";
import imgPlaceholderImage14 from "../assets/service-training-5.png";
import imgPlaceholderImage15 from "../assets/service-installation-1.png";
import imgPlaceholderImage16 from "../assets/service-verification-1.png";
import imgPlaceholderImage17 from "../assets/service-verification-2.png";
import imgPlaceholderImage18 from "../assets/service-verification-3.png";
import imgPlaceholderImage19 from "../assets/service-verification-4.png";
import imgPlaceholderImage20 from "../assets/service-verification-5.png";
import imgPlaceholderImage21 from "../assets/service-verification-6.png";
import imgPlaceholderImage22 from "../assets/service-verification-7.png";
import imgPlaceholderImage23 from "../assets/service-verification-8.png";
import imgPlaceholderImage24 from "../assets/service-verification-9.png";
import imgPlaceholderImage25 from "../assets/service-verification-10.png";
import imgPlaceholderImage26 from "../assets/service-verification-11.png";
import imgPlaceholderImage27 from "../assets/service-verification-12.png";

export interface Service {
    id: string;
    slug: string;
    title: string;
    description: string;
    valueProposition: string;
    deliverables: string[];
    images: string[];
}

export function getServiceBySlug(slug: string) {
    return servicesData.find((service) => service.slug === slug);
}

export const servicesData: Service[] = [
    {
        id: "instalacion-diagnostico",
        slug: "instalacion-diagnostico",
        title: "Instalacion y diagnostico de instrumentos",
        description: "Evaluamos el estado del instrumento e identificamos consumibles y repuestos necesarios para asegurar su operatividad.",
        valueProposition: "Reducimos riesgos de parada con una evaluacion tecnica completa desde el primer dia.",
        deliverables: [
            "Informe de estado inicial del instrumento.",
            "Lista de consumibles y repuestos criticos.",
            "Plan recomendado para asegurar operatividad.",
        ],
        images: [imgPlaceholderImage, imgPlaceholderImage1],
    },
    {
        id: "mantenimiento-preventivo",
        slug: "mantenimiento-preventivo",
        title: "Mantenimiento preventivo",
        description: "Desarrollamos planes de mantenimiento segun visitas de diagnostico y necesidades del laboratorio, con consumibles de entrega corta.",
        valueProposition: "Aumentamos disponibilidad del equipo y reducimos costos de falla no programada.",
        deliverables: [
            "Cronograma preventivo por criticidad.",
            "Checklists de intervencion y trazabilidad.",
            "Recomendaciones de mejora operativa.",
        ],
        images: [imgPlaceholderImage2, imgPlaceholderImage],
    },
    {
        id: "mantenimiento-correctivo",
        slug: "mantenimiento-correctivo",
        title: "Mantenimiento correctivo",
        description: "Contamos con linea de suministro de repuestos para poner los equipos de vuelta a operacion en el menor tiempo posible.",
        valueProposition: "Recuperamos tus equipos con respuesta tecnica y repuestos orientados a continuidad del laboratorio.",
        deliverables: [
            "Diagnostico de falla y causa raiz.",
            "Cambio de repuestos y validacion funcional.",
            "Reporte de cierre con recomendaciones preventivas.",
        ],
        images: [imgPlaceholderImage2, imgPlaceholderImage, imgPlaceholderImage3],
    },
    {
        id: "verificacion-calificacion-operacional",
        slug: "verificacion-calificacion-operacional",
        title: "Verificacion / calificacion operacional",
        description: "Aplicamos pruebas con patrones trazables para comprobar la operatividad de los equipos de acuerdo con lineamientos del fabricante.",
        valueProposition: "Aseguramos resultados confiables y cumplimiento tecnico con evidencia trazable.",
        deliverables: [
            "Protocolos de prueba alineados al fabricante.",
            "Resultados con patrones trazables.",
            "Informe de conformidad operacional.",
        ],
        images: [imgPlaceholderImage, imgPlaceholderImage3, imgPlaceholderImage4, imgPlaceholderImage5, imgPlaceholderImage4],
    },
    {
        id: "capacitacion-instrumentos",
        slug: "capacitacion-instrumentos",
        title: "Capacitacion de instrumentos",
        description: "Nuestro staff especializado ejecuta entrenamientos segun el nivel de experiencia de usuarios y operadores.",
        valueProposition: "Aceleramos la curva de aprendizaje para que tu equipo opere con seguridad y precision.",
        deliverables: [
            "Programa por nivel de experiencia del usuario.",
            "Practicas guiadas sobre instrumentos reales.",
            "Constancia y recomendaciones de mejora continua.",
        ],
        images: [imgPlaceholderImage, imgPlaceholderImage10, imgPlaceholderImage11, imgPlaceholderImage12, imgPlaceholderImage13, imgPlaceholderImage14],
    },
    {
        id: "implementacion-metodos",
        slug: "implementacion-metodos",
        title: "Implementacion de metodos",
        description: "Asesoramos o desarrollamos metodologias de ensayo con la documentacion requerida para procesos internos y externos.",
        valueProposition: "Convertimos tus requerimientos analiticos en metodos robustos, auditables y listos para operacion.",
        deliverables: [
            "Diseno y puesta en marcha de metodologia.",
            "Documentacion para procesos internos y externos.",
            "Transferencia de conocimiento al equipo del laboratorio.",
        ],
        images: [imgPlaceholderImage15, imgPlaceholderImage6, imgPlaceholderImage7, imgPlaceholderImage8, imgPlaceholderImage9, imgPlaceholderImage16, imgPlaceholderImage17, imgPlaceholderImage18, imgPlaceholderImage19, imgPlaceholderImage20, imgPlaceholderImage21, imgPlaceholderImage22, imgPlaceholderImage23, imgPlaceholderImage24, imgPlaceholderImage25, imgPlaceholderImage23, imgPlaceholderImage26, imgPlaceholderImage27],
    },
];
