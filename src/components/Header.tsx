import svgPaths from "../imports/svg-jj59f59zjy";

interface HeaderProps {
  onNavigate: (page: "home" | "products") => void;
  currentPage: "home" | "products";
}

export function Header({ onNavigate, currentPage }: HeaderProps) {
  const menuItems = [
    { label: "Nosotros", page: "home" as const, scrollTo: "#" },
    { label: "Productos", page: "products" as const },
    { label: "Servicios", page: "home" as const, scrollTo: "#" },
    { label: "Marcas", page: "home" as const, scrollTo: "#" },
    { label: "Contacto", page: "home" as const, scrollTo: "#" },
  ];

  return (
    <header className="bg-white sticky top-0 z-50 shadow-lg w-full border-b border-[#54565a]/10">
      <div className="w-full">
        <div className="max-w-[1440px] mx-auto px-8 md:px-16 lg:px-24">
          <div className="flex items-center justify-between h-[100px] lg:h-[150px]">
            {/* Logo */}
            <button
              onClick={() => onNavigate("home")}
              className="flex items-center"
            >
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
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6 lg:gap-10">
              {menuItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => onNavigate(item.page)}
                  className={`text-black hover:text-[#CE0E2D] transition-colors duration-300 text-lg font-semibold ${
                    currentPage === item.page ? "text-[#CE0E2D]" : ""
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button className="md:hidden text-black p-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}