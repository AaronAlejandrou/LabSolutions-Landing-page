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
    title: string;
    description: string;
    images: string[];
}

export const servicesData: Service[] = [
    {
        title: "Diagnóstico técnico de instrumentos",
        description: "Evaluación para detectar fallas y mejorar el rendimiento del equipo.",
        images: [imgPlaceholderImage, imgPlaceholderImage1],
    },
    {
        title: "Mantenimiento correctivo",
        description: "Reparación para restablecer su funcionamiento adecuado.",
        images: [imgPlaceholderImage, imgPlaceholderImage2],
    },
    {
        title: "Calibración y preventivo",
        description: "Revisión periódica para evitar fallas y asegurar precisión.",
        images: [imgPlaceholderImage, imgPlaceholderImage3, imgPlaceholderImage4, imgPlaceholderImage5, imgPlaceholderImage4],
    },
    {
        title: "Implementación de métodos",
        description: "Desarrollo y validación de procedimientos analíticos eficientes.",
        images: [imgPlaceholderImage, imgPlaceholderImage6, imgPlaceholderImage7, imgPlaceholderImage8, imgPlaceholderImage9],
    },
    {
        title: "Capacitación de los instrumentos",
        description: "Formación en uso y mantenimiento correcto de los equipos.",
        images: [imgPlaceholderImage, imgPlaceholderImage10, imgPlaceholderImage11, imgPlaceholderImage12, imgPlaceholderImage13, imgPlaceholderImage14],
    },
    {
        title: "Instalación de los instrumentos",
        description: "Montaje y configuración para la puesta en marcha técnica.",
        images: [imgPlaceholderImage, imgPlaceholderImage15],
    },
    {
        title: "Verificación y calificación operacional",
        description: "Pruebas para validar precisión y cumplimiento normativo.",
        images: [imgPlaceholderImage, imgPlaceholderImage16, imgPlaceholderImage17, imgPlaceholderImage18, imgPlaceholderImage19, imgPlaceholderImage20, imgPlaceholderImage21, imgPlaceholderImage22, imgPlaceholderImage23, imgPlaceholderImage24, imgPlaceholderImage25, imgPlaceholderImage23, imgPlaceholderImage26, imgPlaceholderImage27],
    },
];
