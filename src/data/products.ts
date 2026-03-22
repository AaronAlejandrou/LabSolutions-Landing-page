const productImage = new URL("../assets/home-rectangle-106.png", import.meta.url).href;

export interface ProductSpecification {
  label: string;
  value: string;
}

export interface Product {
  id: string;
  slug: string;
  abbreviation: string;
  name: string;
  model: string;
  brand: string;
  image: string;
  description: string;
  acquisitions: number;
  marketShare: number;
  specifications: ProductSpecification[];
  features: string[];
  applications: string[];
}

export function getProductBySlug(slug: string) {
  return productsData.find((product) => product.slug === slug);
}

export const productsData: Product[] = [
  {
    id: "TOC",
    slug: "toc",
    abbreviation: "TOC",
    name: "Analizador de Carbono Organico Total",
    model: "Linea TOC",
    brand: "Shimadzu",
    image: productImage,
    description:
      "Realizamos el proceso de adecuamiento de ambiente hasta el entrenamiento e implementacion de metodo de analisis de agua pura segun Pharmacopeia America y Europea.",
    acquisitions: 22,
    marketShare: 29,
    specifications: [
      { label: "Participacion", value: "29%" },
      { label: "Equipos adquiridos", value: "22" },
      { label: "Categoria", value: "Analisis de agua pura" },
    ],
    features: [
      "Soporte desde adecuamiento de ambiente hasta puesta en marcha.",
      "Entrenamiento de usuarios para operacion y buenas practicas.",
      "Acompanamiento en implementacion de metodos segun farmacopeas.",
    ],
    applications: [
      "Control de agua purificada en industria farmaceutica.",
      "Verificacion de cumplimiento de farmacopeas USP y EP.",
      "Aseguramiento de calidad en laboratorios regulados.",
    ],
  },
  {
    id: "UV-VIS",
    slug: "uv-vis",
    abbreviation: "UV-VIS",
    name: "Espectrofotometro UV-Vis",
    model: "Linea UV-Vis",
    brand: "Thermo",
    image: productImage,
    description:
      "Contamos con patrones certificados de holmio, didimio y densidad neutra para verificacion operacional y posterior calibracion del equipo para diferentes parametros.",
    acquisitions: 13,
    marketShare: 17,
    specifications: [
      { label: "Participacion", value: "17%" },
      { label: "Equipos adquiridos", value: "13" },
      { label: "Categoria", value: "Espectroscopia UV-Visible" },
    ],
    features: [
      "Verificacion operacional con patrones certificados.",
      "Calibracion para diferentes parametros analiticos.",
      "Soporte tecnico para mantener exactitud y repetibilidad.",
    ],
    applications: [
      "Control de calidad de materias primas y producto terminado.",
      "Analisis cuantitativo en laboratorios farmaceuticos.",
      "Ensayos de rutina en industria y academia.",
    ],
  },
  {
    id: "IC",
    slug: "ic",
    abbreviation: "IC",
    name: "Cromatografo Ionico",
    model: "Linea IC",
    brand: "Thermo",
    image: productImage,
    description:
      "Contamos con los insumos para brindar a cabo la completa operatividad para los equipos de cromatografia ionica.",
    acquisitions: 8,
    marketShare: 10,
    specifications: [
      { label: "Participacion", value: "10%" },
      { label: "Equipos adquiridos", value: "8" },
      { label: "Categoria", value: "Cromatografia ionica" },
    ],
    features: [
      "Linea de insumos para mantener la operatividad del sistema.",
      "Acompanamiento en configuracion y recuperacion de rendimiento.",
      "Soporte para continuidad operativa del laboratorio.",
    ],
    applications: [
      "Determinacion de aniones y cationes en agua.",
      "Control de calidad en alimentos y farmaceutica.",
      "Monitoreo de procesos industriales.",
    ],
  },
  {
    id: "AA",
    slug: "aa",
    abbreviation: "AA",
    name: "Absorcion Atomica",
    model: "Linea AA",
    brand: "Perkin Elmer",
    image: productImage,
    description:
      "Contamos con los recursos para la pre-instalacion del equipo, asi como los insumos y patrones necesarios para la verificacion de operatividad, ademas de procesos clave de entrenamiento.",
    acquisitions: 7,
    marketShare: 9,
    specifications: [
      { label: "Participacion", value: "9%" },
      { label: "Equipos adquiridos", value: "7" },
      { label: "Categoria", value: "Analisis elemental" },
    ],
    features: [
      "Pre-instalacion tecnica para puesta en marcha ordenada.",
      "Suministro de patrones para verificacion operacional.",
      "Capacitacion para operadores y analistas.",
    ],
    applications: [
      "Analisis de metales en muestras ambientales.",
      "Control elemental en alimentos y farmaceutica.",
      "Laboratorios de ensayo y control de calidad.",
    ],
  },
  {
    id: "GC",
    slug: "gc",
    abbreviation: "GC",
    name: "Cromatografo de Gases",
    model: "Linea GC",
    brand: "Agilent",
    image: productImage,
    description:
      "Alcance altos estandares de calidad con nuestro soporte tecnico y analitico, aplicaciones y validaciones, asi como con nuestra linea de suministros de repuestos y consumibles con alcance hasta espectrometros de masas acoplados.",
    acquisitions: 6,
    marketShare: 8,
    specifications: [
      { label: "Participacion", value: "8%" },
      { label: "Equipos adquiridos", value: "6" },
      { label: "Categoria", value: "Cromatografia de gases" },
    ],
    features: [
      "Soporte tecnico y analitico para aplicaciones y validaciones.",
      "Suministro de repuestos y consumibles de corta entrega.",
      "Cobertura para sistemas GC y GC acoplados a masas.",
    ],
    applications: [
      "Control de impurezas volatiles.",
      "Analisis de solventes residuales.",
      "Ensayos de rutina y desarrollo de metodos.",
    ],
  },
  {
    id: "FTIR",
    slug: "ftir",
    abbreviation: "FTIR",
    name: "Espectrofotometro FTIR",
    model: "Linea FTIR",
    brand: "Perkin Elmer",
    image: productImage,
    description:
      "Contamos con patrones para verificacion de exactitud de longitud de onda y verificacion en biblioteca de base de datos espectral. Con nuestro entrenamiento podra automatizar sus procesos.",
    acquisitions: 4,
    marketShare: 5,
    specifications: [
      { label: "Participacion", value: "5%" },
      { label: "Equipos adquiridos", value: "4" },
      { label: "Categoria", value: "Espectroscopia infrarroja" },
    ],
    features: [
      "Verificacion de exactitud de longitud de onda.",
      "Apoyo en gestion y uso de bibliotecas espectrales.",
      "Entrenamiento para automatizacion de procesos.",
    ],
    applications: [
      "Identificacion de materias primas.",
      "Comparacion de huella espectral de muestras.",
      "Control de calidad en recepcion y liberacion.",
    ],
  },
  {
    id: "HPLC",
    slug: "hplc",
    abbreviation: "HPLC",
    name: "Cromatografo Liquido",
    model: "Linea HPLC",
    brand: "Agilent",
    image: productImage,
    description:
      "Contamos con linea de suministros para el mantenimiento completo de los sistemas de cromatografia liquida, asi como para sus acoplamientos a espectrometros de masas.",
    acquisitions: 4,
    marketShare: 5,
    specifications: [
      { label: "Participacion", value: "5%" },
      { label: "Equipos adquiridos", value: "4" },
      { label: "Categoria", value: "Cromatografia liquida" },
    ],
    features: [
      "Linea de consumibles y repuestos para mantenimiento integral.",
      "Soporte para sistemas HPLC y acoplamientos LC-MS.",
      "Asistencia para recuperar desempeno cromatografico.",
    ],
    applications: [
      "Cuantificacion de compuestos activos.",
      "Control de impurezas y estabilidad.",
      "Metodos de rutina en laboratorios regulados.",
    ],
  },
  {
    id: "AGITADOR",
    slug: "agitador",
    abbreviation: "AGITADOR",
    name: "Agitador de Laboratorio",
    model: "Linea Agitadores",
    brand: "Thermo",
    image: productImage,
    description:
      "Equipos de agitacion para preparacion homogenea de muestras y soporte de procesos de analisis de rutina.",
    acquisitions: 2,
    marketShare: 3,
    specifications: [
      { label: "Participacion", value: "3%" },
      { label: "Equipos adquiridos", value: "2" },
      { label: "Categoria", value: "Equipo auxiliar" },
    ],
    features: [
      "Operacion estable para procesos repetitivos.",
      "Configuracion segun tipo de muestra.",
      "Soporte tecnico para puesta en marcha.",
    ],
    applications: [
      "Preparacion de soluciones.",
      "Homogeneizacion de muestras.",
      "Procesos de laboratorio general.",
    ],
  },
  {
    id: "DISOLUTOR",
    slug: "disolutor-desintegrador",
    abbreviation: "DISOLUTOR",
    name: "Disolutor / Desintegrador",
    model: "Linea Disolucion",
    brand: "Agilent",
    image: productImage,
    description:
      "Sistemas para pruebas de disolucion y desintegracion en control de calidad de productos farmaceuticos.",
    acquisitions: 2,
    marketShare: 3,
    specifications: [
      { label: "Participacion", value: "3%" },
      { label: "Equipos adquiridos", value: "2" },
      { label: "Categoria", value: "Control farmaceutico" },
    ],
    features: [
      "Evaluacion conforme a metodologias farmacopeicas.",
      "Soporte para instalacion y calificacion operacional.",
      "Capacitacion para pruebas de rutina.",
    ],
    applications: [
      "Ensayos de disolucion de tabletas y capsulas.",
      "Control de calidad de formas solidas.",
      "Cumplimiento de requisitos regulatorios.",
    ],
  },
  {
    id: "GCMS",
    slug: "gcms",
    abbreviation: "GCMS",
    name: "Cromatografo de Gases Masa",
    model: "Linea GC-MS",
    brand: "Shimadzu",
    image: productImage,
    description:
      "Sistemas acoplados para identificacion y cuantificacion de compuestos complejos con alta sensibilidad.",
    acquisitions: 2,
    marketShare: 3,
    specifications: [
      { label: "Participacion", value: "3%" },
      { label: "Equipos adquiridos", value: "2" },
      { label: "Categoria", value: "Cromatografia acoplada" },
    ],
    features: [
      "Soporte en aplicaciones y validaciones.",
      "Suministro para mantenimiento preventivo y correctivo.",
      "Asistencia en diagnostico de desempeno.",
    ],
    applications: [
      "Identificacion de compuestos organicos.",
      "Analisis de trazas en matrices complejas.",
      "Laboratorios de investigacion y control.",
    ],
  },
  {
    id: "MENORES",
    slug: "equipos-pequenos",
    abbreviation: "MENORES",
    name: "Equipos Pequenos",
    model: "Linea Equipos Auxiliares",
    brand: "Thermo",
    image: productImage,
    description:
      "Categoria de equipos auxiliares para operaciones diarias del laboratorio con soporte tecnico y suministro.",
    acquisitions: 2,
    marketShare: 3,
    specifications: [
      { label: "Participacion", value: "3%" },
      { label: "Equipos adquiridos", value: "2" },
      { label: "Categoria", value: "Equipo auxiliar" },
    ],
    features: [
      "Disponibilidad para necesidades operativas puntuales.",
      "Soporte de instalacion y diagnostico.",
      "Acompanamiento para continuidad de operacion.",
    ],
    applications: [
      "Apoyo a analisis de rutina.",
      "Procesos de preparacion y control.",
      "Laboratorios de control de calidad.",
    ],
  },
  {
    id: "A.GRAS",
    slug: "analizador-grasa",
    abbreviation: "A.GRAS",
    name: "Analizador de Grasa",
    model: "Linea Analisis de Grasa",
    brand: "Perkin Elmer",
    image: productImage,
    description:
      "Equipo para determinacion de contenido de grasa en muestras alimentarias y de control de procesos.",
    acquisitions: 1,
    marketShare: 1,
    specifications: [
      { label: "Participacion", value: "1%" },
      { label: "Equipos adquiridos", value: "1" },
      { label: "Categoria", value: "Analisis bromatologico" },
    ],
    features: [
      "Soporte para implementacion de ensayos.",
      "Capacitacion de operacion y cuidados del equipo.",
      "Suministro de consumibles asociados.",
    ],
    applications: [
      "Control de calidad en alimentos.",
      "Determinacion de perfil de grasa.",
      "Monitoreo de lotes de produccion.",
    ],
  },
  {
    id: "BMARIA",
    slug: "bano-maria",
    abbreviation: "BMARIA",
    name: "Bano Maria",
    model: "Linea Banos de Laboratorio",
    brand: "Thermo",
    image: productImage,
    description:
      "Sistema de calentamiento controlado para preparacion de muestras y procesos que requieren temperatura estable.",
    acquisitions: 1,
    marketShare: 1,
    specifications: [
      { label: "Participacion", value: "1%" },
      { label: "Equipos adquiridos", value: "1" },
      { label: "Categoria", value: "Equipo auxiliar" },
    ],
    features: [
      "Control estable de temperatura.",
      "Uso continuo para rutinas de laboratorio.",
      "Soporte tecnico para operacion segura.",
    ],
    applications: [
      "Atemperado de muestras.",
      "Preparacion previa a analisis.",
      "Procesos de laboratorio general.",
    ],
  },
  {
    id: "CALORIMETRO",
    slug: "bomba-calorimetrica",
    abbreviation: "CALORIMETRO",
    name: "Bomba Calorimetrica",
    model: "Linea Calorimetria",
    brand: "Agilent",
    image: productImage,
    description:
      "Contamos con linea de suministros para poner en marcha y en continuas de bombas calorimetricas.",
    acquisitions: 1,
    marketShare: 1,
    specifications: [
      { label: "Participacion", value: "1%" },
      { label: "Equipos adquiridos", value: "1" },
      { label: "Categoria", value: "Calorimetria" },
    ],
    features: [
      "Suministros para puesta en marcha.",
      "Cobertura para operacion continua del equipo.",
      "Soporte en mantenimiento y diagnostico.",
    ],
    applications: [
      "Determinacion de poder calorifico.",
      "Control de calidad de combustibles.",
      "Ensayos energeticos en laboratorio.",
    ],
  },
  {
    id: "L.GAS",
    slug: "linea-gases",
    abbreviation: "L.GAS",
    name: "Linea de Gases",
    model: "Linea de Suministro",
    brand: "Agilent",
    image: productImage,
    description:
      "Soluciones para lineas de gases y accesorios requeridos en instrumentacion analitica.",
    acquisitions: 1,
    marketShare: 1,
    specifications: [
      { label: "Participacion", value: "1%" },
      { label: "Equipos adquiridos", value: "1" },
      { label: "Categoria", value: "Infraestructura analitica" },
    ],
    features: [
      "Configuracion para operacion segura de equipos.",
      "Suministro de componentes de linea.",
      "Soporte en diagnostico de instalacion.",
    ],
    applications: [
      "Alimentacion de GC y equipos acoplados.",
      "Mejora de estabilidad operativa.",
      "Estandarizacion de condiciones analiticas.",
    ],
  },
  {
    id: "MULTIP",
    slug: "multiparametro",
    abbreviation: "MULTIP",
    name: "Multiparametro",
    model: "Linea Multiparametro",
    brand: "Thermo",
    image: productImage,
    description:
      "Equipo para medicion de multiples parametros fisicoquimicos en una misma plataforma de trabajo.",
    acquisitions: 1,
    marketShare: 1,
    specifications: [
      { label: "Participacion", value: "1%" },
      { label: "Equipos adquiridos", value: "1" },
      { label: "Categoria", value: "Analisis fisicoquimico" },
    ],
    features: [
      "Lectura de varios parametros en un solo equipo.",
      "Soporte para calibracion y verificacion operacional.",
      "Capacitacion para usuarios de laboratorio.",
    ],
    applications: [
      "Control de agua y procesos.",
      "Monitoreo de parametros de rutina.",
      "Laboratorios de control de calidad.",
    ],
  },
];
