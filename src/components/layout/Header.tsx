import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import svgPaths from "../../assets/svg/svg-jj59f59zjy";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = [
    { label: "Inicio", path: "/" },
    { label: "Productos", path: "/productos" },
    { label: "Servicios", path: "/servicios" },
    { label: "Nosotros", path: "/nosotros" },
    { label: "Contacto", path: "/contacto" },
  ];

  return (
    <header className="bg-white sticky top-0 z-50 w-full transition-all duration-300">
      <div className="max-w-[1440px] mx-auto" style={{ paddingLeft: '40px', paddingRight: '40px' }}>
        <div className="flex items-center justify-between" style={{ paddingTop: '28px', paddingBottom: '28px' }}>
          <Link to="/" className="flex items-center" onClick={() => setIsMobileMenuOpen(false)}>
            <div className="h-[50px] w-[140px] lg:h-[63px] lg:w-[180px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="xMinYMid meet" viewBox="0 0 230 78">
                <g>
                  <path d={svgPaths.pb2fcf00} fill="#54565a" />
                  <path d={svgPaths.p6481d90} fill="#54565a" />
                  <path d={svgPaths.p1428d3c0} fill="#54565a" />
                  <path d={svgPaths.p2fdee710} fill="#54565a" />
                  <path d={svgPaths.p2fbfd900} fill="#54565a" />
                  <path d={svgPaths.p2cacbb00} fill="#54565a" />
                  <path d={svgPaths.p363a1100} fill="#54565a" />
                  <path d={svgPaths.pea2d200} fill="#54565a" />
                  <path d={svgPaths.p2f9a6b00} fill="#54565a" />
                  <path d={svgPaths.p5b5fac0} fill="#54565a" />
                  <path d={svgPaths.p7dec01} fill="#54565a" />
                  <path d={svgPaths.p1d45200} fill="#54565a" />
                  <path d={svgPaths.p15cd280} fill="#54565a" />
                  <path d={svgPaths.p13aaf300} fill="#54565a" />
                  <path d={svgPaths.p25dc9880} fill="#54565a" />
                  <path d={svgPaths.p170c51f0} fill="#54565a" />
                  <path d={svgPaths.p1eb45c80} fill="#54565a" />
                  <path d={svgPaths.p342d5a40} fill="#54565a" />
                  <path d={svgPaths.p25db7880} fill="#54565a" />
                  <path d={svgPaths.p3521a800} fill="#CE0E2D" />
                  <path d={svgPaths.p116d000} fill="#CE0E2D" />
                  <path d={svgPaths.p10307880} fill="#CE0E2D" />
                  <path d={svgPaths.p41380} fill="#CE0E2D" />
                </g>
              </svg>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-6 lg:gap-10">
            {menuItems.map((item) => (
              <NavLink
                key={item.label}
                to={item.path}
                className={({ isActive }) =>
                  `text-black hover:text-[#CE0E2D] transition-colors duration-300 text-lg font-semibold ${
                    isActive ? "text-[#CE0E2D]" : ""
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <button
            className="md:hidden text-black p-2"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            aria-label="Abrir menú"
            aria-expanded={isMobileMenuOpen}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {isMobileMenuOpen && (
          <nav className="md:hidden pb-6 flex flex-col gap-4">
            {menuItems.map((item) => (
              <NavLink
                key={item.label}
                to={item.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `text-base font-semibold transition-colors duration-300 ${
                    isActive ? "text-[#CE0E2D]" : "text-black hover:text-[#CE0E2D]"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}