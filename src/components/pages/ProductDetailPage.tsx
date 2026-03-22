import { Link, useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { getProductBySlug, productsData } from "../../data/products";
import { siteConfig } from "../../config/site";

export function ProductDetailPage() {
  const { productSlug = "" } = useParams();
  const navigate = useNavigate();
  const product = getProductBySlug(productSlug);

  if (!product) {
    return (
      <section className="bg-white min-h-[60vh] flex items-center justify-center px-8">
        <div className="text-center max-w-[560px]">
          <h1 className="text-4xl text-[#54565a] mb-4" style={{ fontFamily: "'Rajdhani', sans-serif", fontWeight: 700 }}>
            Producto no encontrado
          </h1>
          <p className="text-[#54565a] mb-8" style={{ fontFamily: "'Poppins', sans-serif" }}>
            El producto que buscas no existe o fue movido.
          </p>
          <Link
            to="/productos"
            className="inline-flex items-center gap-2 bg-[#ce0e2d] text-white px-6 py-3 rounded-full hover:bg-[#a00b24] transition-colors"
            style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600 }}
          >
            Volver al catalogo
          </Link>
        </div>
      </section>
    );
  }

  const relatedProducts = productsData
    .filter((item) => item.slug !== product.slug)
    .slice(0, 3);

  const handleWhatsApp = () => {
    const text = encodeURIComponent(`Hola, deseo una asesoria comercial del producto ${product.name} (${product.abbreviation}).`);
    window.open(`https://wa.me/${siteConfig.contact.whatsApp}?text=${text}`, "_blank");
  };

  return (
    <div className="bg-white w-full">
      <section className="max-w-[1440px] mx-auto px-8 md:px-16 lg:px-24 py-12 lg:py-16">
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-2 text-[#54565a] hover:text-[#ce0e2d] transition-colors mb-8"
          style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500 }}
        >
          <ArrowLeft className="w-5 h-5" />
          Volver
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          <div className="space-y-6">
            <div className="rounded-2xl overflow-hidden border border-[#54565a]/10 bg-[#f8f9fa]">
              <img src={product.image} alt={product.name} className="w-full h-[420px] object-cover" />
            </div>
          </div>

          <div className="space-y-6">
            <p className="text-[#ce0e2d] text-sm uppercase tracking-[1.5px]" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600 }}>
              {product.abbreviation} · {product.brand}
            </p>

            <h1 className="text-[#0a0102] text-4xl lg:text-5xl" style={{ fontFamily: "'Rajdhani', sans-serif", fontWeight: 700, lineHeight: "1.1" }}>
              {product.name}
            </h1>

            <p className="text-[#54565a] text-lg" style={{ fontFamily: "'Poppins', sans-serif", lineHeight: "1.7" }}>
              {product.description}
            </p>

            <div className="rounded-2xl border border-[#54565a]/15 p-6 bg-white">
              <h2 className="text-2xl text-[#ce0e2d] mb-4" style={{ fontFamily: "'Rajdhani', sans-serif", fontWeight: 700 }}>
                Por que elegir esta solucion
              </h2>
              <ul className="space-y-3">
                {product.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#ce0e2d] mt-0.5 shrink-0" />
                    <span className="text-[#54565a]" style={{ fontFamily: "'Poppins', sans-serif" }}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={handleWhatsApp}
                className="bg-[#25D366] text-white px-6 py-3 rounded-full hover:bg-[#1da851] transition-colors"
                style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600 }}
              >
                Solicitar asesoria por WhatsApp
              </button>
              <Link
                to="/contacto"
                className="border-2 border-[#ce0e2d] text-[#ce0e2d] px-6 py-3 rounded-full hover:bg-[#ce0e2d] hover:text-white transition-colors text-center"
                style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600 }}
              >
                Solicitar cotizacion formal
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f8f9fa] py-12 lg:py-16">
        <div className="max-w-[1440px] mx-auto px-8 md:px-16 lg:px-24 grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-[#ce0e2d] text-3xl mb-5" style={{ fontFamily: "'Rajdhani', sans-serif", fontWeight: 700 }}>
              Especificaciones clave
            </h2>
            <div className="bg-white rounded-2xl border border-[#54565a]/10 divide-y divide-[#54565a]/10">
              {product.specifications.map((spec) => (
                <div key={spec.label} className="flex items-center justify-between gap-4 px-5 py-4">
                  <span className="text-[#54565a]" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600 }}>
                    {spec.label}
                  </span>
                  <span className="text-[#0a0102] text-right" style={{ fontFamily: "'Poppins', sans-serif" }}>
                    {spec.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-[#ce0e2d] text-3xl mb-5" style={{ fontFamily: "'Rajdhani', sans-serif", fontWeight: 700 }}>
              Aplicaciones de valor
            </h2>
            <div className="bg-white rounded-2xl border border-[#54565a]/10 p-6">
              <ul className="space-y-3">
                {product.applications.map((application) => (
                  <li key={application} className="text-[#54565a]" style={{ fontFamily: "'Poppins', sans-serif" }}>
                    • {application}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16">
        <div className="max-w-[1440px] mx-auto px-8 md:px-16 lg:px-24">
          <h2 className="text-[#54565a] text-3xl mb-8" style={{ fontFamily: "'Rajdhani', sans-serif", fontWeight: 700 }}>
            Tambien te puede interesar
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedProducts.map((item) => (
              <Link
                key={item.id}
                to={`/productos/${item.slug}`}
                className="group rounded-2xl border border-[#54565a]/10 overflow-hidden hover:shadow-lg transition-shadow"
              >
                <img src={item.image} alt={item.name} className="h-[180px] w-full object-cover" />
                <div className="p-5 bg-white">
                  <p className="text-[#ce0e2d] text-sm mb-2" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600 }}>
                    {item.abbreviation}
                  </p>
                  <h3 className="text-[#0a0102] text-xl group-hover:text-[#ce0e2d] transition-colors" style={{ fontFamily: "'Rajdhani', sans-serif", fontWeight: 700 }}>
                    {item.name}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
