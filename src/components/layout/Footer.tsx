import { Linkedin, Instagram } from "lucide-react";
import { Link } from "react-router-dom";
import svgPaths from "../../assets/svg/svg-jj59f59zjy";
import { siteConfig } from "../../config/site";

export function Footer() {
  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${siteConfig.contact.whatsApp}`, "_blank");
  };

  const isLinkedInConfigured = siteConfig.social.linkedin !== "#";
  const isInstagramConfigured = siteConfig.social.instagram !== "#";

  return (
    <footer className="bg-[#0f0f0f] text-white py-16 lg:py-20 w-full">
      <div className="w-full">
        <div className="max-w-[1440px] mx-auto px-8 md:px-16 lg:px-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-12">
            {/* Logo & Hours */}
            <div className="space-y-6">
              <div className="h-[60px] w-[170px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="xMinYMid meet" viewBox="0 0 333 112">
                  <g>
                    <path d={svgPaths.p1f2f000} fill="white" />
                    <path d={svgPaths.p186f3800} fill="white" />
                    <path d={svgPaths.p26936d00} fill="white" />
                    <path d={svgPaths.p1debae00} fill="white" />
                    <path d={svgPaths.p25643c70} fill="white" />
                    <path d={svgPaths.p36294e80} fill="white" />
                    <path d={svgPaths.p2ca0980} fill="white" />
                    <path d={svgPaths.p221689c0} fill="white" />
                    <path d={svgPaths.p6e8fc00} fill="white" />
                    <path d={svgPaths.p34989000} fill="white" />
                    <path d={svgPaths.pa9d0180} fill="white" />
                    <path d={svgPaths.p1b07cb40} fill="white" />
                    <path d={svgPaths.p1ad08f00} fill="white" />
                    <path d={svgPaths.p25ffdb40} fill="white" />
                    <path d={svgPaths.pa81ee00} fill="white" />
                    <path d={svgPaths.p1361d880} fill="white" />
                    <path d={svgPaths.p30685100} fill="white" />
                    <path d={svgPaths.p2ba48a00} fill="white" />
                    <path d={svgPaths.pdc25600} fill="white" />
                    <path d={svgPaths.p28d900} fill="white" />
                    <path d={svgPaths.p3fc38c40} fill="white" />
                    <path d={svgPaths.p874ba80} fill="white" />
                    <path d={svgPaths.p3bdd6080} fill="white" />
                  </g>
                </svg>
              </div>

              <div>
                <p
                  className="text-white mb-3 text-base"
                  style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600 }}
                >
                  Horario de Atención
                </p>
                <p
                  className="text-[#ce0e2d] text-sm mb-1"
                  style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500 }}
                >
                  Lue - Vié
                </p>
                <p
                  className="text-white/80 text-sm"
                  style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 300 }}
                >
                  8:30 am - 5:00pm
                </p>
              </div>
            </div>

            {/* Contacto */}
            <div>
              <h3
                className="text-white mb-4 text-2xl"
                style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700 }}
              >
                Contactanos
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/contacto"
                    className="text-white/80 hover:text-white transition-colors text-sm text-left"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    Contacto
                  </Link>
                </li>
              </ul>
            </div>

            {/* Nosotros */}
            <div>
              <h3
                className="text-white mb-4 text-2xl"
                style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700 }}
              >
                Nosotros
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/nosotros"
                    className="text-white/80 hover:text-white transition-colors text-sm text-left"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    Sobre nosotros
                  </Link>
                </li>
                <li>
                  <Link
                    to="/nosotros"
                    className="text-white/80 hover:text-white transition-colors text-sm text-left"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    Misión
                  </Link>
                </li>
                <li>
                  <Link
                    to="/nosotros"
                    className="text-white/80 hover:text-white transition-colors text-sm text-left"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    Visión
                  </Link>
                </li>
              </ul>
            </div>

            {/* Productos & Servicios */}
            <div>
              <h3
                className="text-white mb-4 text-2xl"
                style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700 }}
              >
                Productos
              </h3>
              <ul className="space-y-2 mb-8">
                <li>
                  <Link
                    to="/productos"
                    className="text-white/80 hover:text-white transition-colors text-sm text-left"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    Catálogos
                  </Link>
                </li>
              </ul>

              <h3
                className="text-white mb-4 text-2xl"
                style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700 }}
              >
                Servicios
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/servicios"
                    className="text-white/80 hover:text-white transition-colors text-sm text-left"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    Ver servicios
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Social Media */}
          <div className="flex justify-center gap-4 mb-10">
            <a
              href={isLinkedInConfigured ? siteConfig.social.linkedin : undefined}
              className="w-9 h-9 bg-[#ce0e2d] rounded flex items-center justify-center hover:bg-[#a00b24] transition-colors"
              aria-label="LinkedIn"
              target={isLinkedInConfigured ? "_blank" : undefined}
              rel={isLinkedInConfigured ? "noopener noreferrer" : undefined}
              onClick={(event) => {
                if (!isLinkedInConfigured) {
                  event.preventDefault();
                }
              }}
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href={isInstagramConfigured ? siteConfig.social.instagram : undefined}
              className="w-9 h-9 bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 rounded flex items-center justify-center hover:opacity-80 transition-opacity"
              aria-label="Instagram"
              target={isInstagramConfigured ? "_blank" : undefined}
              rel={isInstagramConfigured ? "noopener noreferrer" : undefined}
              onClick={(event) => {
                if (!isInstagramConfigured) {
                  event.preventDefault();
                }
              }}
            >
              <Instagram className="w-5 h-5" />
            </a>
            <button
              onClick={handleWhatsAppClick}
              className="w-9 h-9 bg-[#25D366] rounded flex items-center justify-center hover:bg-[#1da851] transition-colors"
              aria-label="WhatsApp"
            >
              <svg className="w-5 h-5" fill="white" viewBox="0 0 24 24">
                <path d={svgPaths.pf668100} fillRule="evenodd" clipRule="evenodd" />
              </svg>
            </button>
          </div>

          {/* Copyright */}
          <div className="text-center text-white/70 border-t border-white/10 pt-8">
            <p
              className="flex flex-wrap items-center justify-center gap-2 text-base"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              <span>Copyright © 2025 LabSolutions Company</span>
              <span className="text-white/30">|</span>
              <span>Todos los derechos reservados</span>
              <span className="text-white/30">|</span>
              <button type="button" className="underline hover:text-white transition-colors">
                Términos y Condiciones
              </button>
              <span className="text-white/30">|</span>
              <button type="button" className="underline hover:text-white transition-colors">
                Política de Privacidad
              </button>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}