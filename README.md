# LabSolutions Company - Landing Page

Sitio web corporativo para LabSolutions Company, especialistas en instrumentación analítica y servicios técnicos de laboratorio.

## 🏗️ Estructura del Proyecto

```
src/
├── assets/              # Imágenes y recursos estáticos
│   ├── svg/             # SVG paths generados
│   ├── about-*          # Imágenes de la página "Nosotros"
│   ├── hero-*           # Imágenes del hero section
│   ├── home-*           # Imágenes de secciones home
│   └── service-*        # Imágenes de servicios
│
├── components/
│   ├── layout/          # Componentes de layout global
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── WhatsAppButton.tsx
│   │
│   ├── home/            # Secciones de la página principal
│   │   ├── HeroSection.tsx
│   │   ├── CompaniesSection.tsx
│   │   ├── ProductsSection.tsx
│   │   ├── ServicesSection.tsx
│   │   ├── TestimonialsSection.tsx
│   │   └── ContactSection.tsx
│   │
│   └── pages/           # Páginas completas
│       ├── AboutPage.tsx
│       ├── ContactPage.tsx
│       ├── ProductsPage.tsx
│       ├── ServicesPage.tsx
│       ├── ProductCard.tsx
│       └── ProductDetailModal.tsx
│
├── config/              # Configuraciones centralizadas
│   └── site.ts          # Config del sitio (contacto, redes, SEO)
│
├── data/                # Datos estáticos tipados
│   ├── products.ts      # Catálogo de productos
│   └── services.ts      # Catálogo de servicios
│
├── App.tsx              # Componente principal
├── main.tsx             # Entry point
└── index.css            # Estilos globales
```

## 🚀 Scripts

```bash
npm install          # Instalar dependencias
npm run dev          # Dev server (puerto 3000)
npm run build        # Build producción
npm run preview      # Preview del build
npm run type-check   # Verificar TypeScript
```

## 🔧 Stack

- React 18 + TypeScript 5
- Vite 6 (dev + build)
- Motion/React (animaciones)
- Lucide React (iconos)
- Tailwind utilities (vía CSS)

## 📋 Configuración Central

Edita `src/config/site.ts` para cambiar:
- Números de WhatsApp
- Emails de contacto
- Enlaces de redes sociales
- Horarios de atención

## 🎯 Plan de Administración de Archivos

### Principios
1. **Separación por dominio**: Layout, Home sections, Pages
2. **Assets por feature**: Agrupados por prefijo (hero-, service-, about-)
3. **Configuración centralizada**: Un solo lugar para constantes
4. **Imports relativos**: Claros y mantenibles desde cada componente

### Convenciones de Nombres
- **Componentes**: PascalCase (`ProductCard.tsx`)
- **Carpetas**: camelCase (`home/`, `layout/`)
- **Assets**: kebab-case descriptivo (`service-training-1.png`)
- **Configs**: camelCase (`site.ts`)

### Reglas de Organización

#### Assets (`src/assets/`)
```
Prefijo por página/feature:
- hero-*      → HeroSection
- home-*      → Secciones home (companies, products)
- about-*     → AboutPage
- service-*   → ServicesSection, ServicesPage
```

#### Componentes
```
src/components/
├── layout/      → Usados en toda la app (Header, Footer, WhatsApp)
├── home/        → Secciones específicas de la home
└── pages/       → Páginas completas con lazy loading
```

#### Datos (`src/data/`)
- Archivos TypeScript con tipos exportados
- Un archivo por entidad (products, services)
- Imports de assets relativos

#### Configuración (`src/config/`)
- `site.ts`: Constantes del sitio (contacto, SEO, social)
- Exporta objeto `siteConfig` como const

### Flujo de Trabajo

**Al agregar un nuevo componente:**
1. Decidir si es layout, home section, o page
2. Crear en la carpeta correspondiente
3. Actualizar imports en `App.tsx` si es necesario
4. Si usa assets, agruparlos con prefijo claro

**Al agregar assets:**
1. Nombrar con prefijo de feature (`feature-descripcion-n.ext`)
2. Colocar en `src/assets/`
3. Importar desde el componente que lo usa
4. Optimizar tamaño antes de commit

**Al agregar configuración:**
1. Evaluar si va en `site.ts` o necesita archivo propio
2. Exportar como const para inmutabilidad
3. Actualizar tipos si es necesario

### Próximas Mejoras

**Fase 1: Fundamentos**
- [ ] React Router para URLs reales
- [ ] Meta tags SEO + Open Graph
- [ ] Mejoras de accesibilidad (ARIA)
- [ ] Optimización de imágenes (WebP)

**Fase 2: Calidad**
- [ ] ESLint + Prettier
- [ ] Tests con Vitest
- [ ] Validación de formularios
- [ ] Sistema de notificaciones

**Fase 3: Performance**
- [ ] Lazy load avanzado de imágenes
- [ ] Code splitting por ruta
- [ ] Preload de recursos críticos
- [ ] PWA con Service Worker

---

**Versión**: 0.1.0 | **Última actualización**: Diciembre 2025
