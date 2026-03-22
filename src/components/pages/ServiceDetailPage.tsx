import { Link, useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, BadgeCheck } from "lucide-react";
import { getServiceBySlug, servicesData } from "../../data/services";
import { siteConfig } from "../../config/site";

export function ServiceDetailPage() {
  const { serviceSlug = "" } = useParams();
  const navigate = useNavigate();
  const service = getServiceBySlug(serviceSlug);

  if (!service) {
    return (
      <section className="bg-white min-h-[60vh] flex items-center justify-center px-8">
        <div className="text-center max-w-[560px]">
          <h1 className="text-4xl text-[#54565a] mb-4" style={{ fontFamily: "'Rajdhani', sans-serif", fontWeight: 700 }}>
            Servicio no encontrado
          </h1>
          <p className="text-[#54565a] mb-8" style={{ fontFamily: "'Poppins', sans-serif" }}>
            La ruta solicitada no corresponde a un servicio disponible.
          </p>
          <Link
            to="/servicios"
            className="inline-flex items-center gap-2 bg-[#ce0e2d] text-white px-6 py-3 rounded-full hover:bg-[#a00b24] transition-colors"
            style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600 }}
          >
            Volver a servicios
          </Link>
        </div>
      </section>
    );
  }

  const relatedServices = servicesData.filter((item) => item.slug !== service.slug).slice(0, 3);

  const handleWhatsApp = () => {
    const text = encodeURIComponent(`Hola, deseo una asesoria del servicio ${service.title}.`);
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
          <div className="rounded-2xl overflow-hidden border border-[#54565a]/10 bg-[#f8f9fa]">
            <img src={service.images[0]} alt={service.title} className="w-full h-[460px] object-cover" />
          </div>

          <div className="space-y-6">
            <p className="text-[#ce0e2d] text-sm uppercase tracking-[1.5px]" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600 }}>
              Servicio especializado
            </p>

            <h1 className="text-[#0a0102] text-4xl lg:text-5xl" style={{ fontFamily: "'Rajdhani', sans-serif", fontWeight: 700, lineHeight: "1.1" }}>
              {service.title}
            </h1>

            <p className="text-[#54565a] text-lg" style={{ fontFamily: "'Poppins', sans-serif", lineHeight: "1.7" }}>
              {service.description}
            </p>

            <div className="rounded-2xl border border-[#ce0e2d]/20 bg-[#ce0e2d]/5 p-5">
              <p className="text-[#0a0102]" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600, lineHeight: "1.6" }}>
                {service.valueProposition}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={handleWhatsApp}
                className="bg-[#25D366] text-white px-6 py-3 rounded-full hover:bg-[#1da851] transition-colors"
                style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600 }}
              >
                Agendar asesoria tecnica
              </button>
              <Link
                to="/contacto"
                className="border-2 border-[#ce0e2d] text-[#ce0e2d] px-6 py-3 rounded-full hover:bg-[#ce0e2d] hover:text-white transition-colors text-center"
                style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600 }}
              >
                Solicitar propuesta
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f8f9fa] py-12 lg:py-16">
        <div className="max-w-[1440px] mx-auto px-8 md:px-16 lg:px-24">
          <h2 className="text-[#ce0e2d] text-3xl mb-6" style={{ fontFamily: "'Rajdhani', sans-serif", fontWeight: 700 }}>
            Entregables del servicio
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {service.deliverables.map((deliverable) => (
              <article key={deliverable} className="bg-white rounded-2xl border border-[#54565a]/10 p-5">
                <div className="flex items-start gap-3">
                  <BadgeCheck className="w-5 h-5 text-[#ce0e2d] mt-0.5 shrink-0" />
                  <p className="text-[#54565a]" style={{ fontFamily: "'Poppins', sans-serif", lineHeight: "1.6" }}>
                    {deliverable}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16">
        <div className="max-w-[1440px] mx-auto px-8 md:px-16 lg:px-24">
          <h2 className="text-[#54565a] text-3xl mb-8" style={{ fontFamily: "'Rajdhani', sans-serif", fontWeight: 700 }}>
            Servicios complementarios
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedServices.map((item) => (
              <Link
                key={item.id}
                to={`/servicios/${item.slug}`}
                className="group rounded-2xl border border-[#54565a]/10 overflow-hidden hover:shadow-lg transition-shadow"
              >
                <img src={item.images[0]} alt={item.title} className="h-[180px] w-full object-cover" />
                <div className="p-5 bg-white">
                  <h3 className="text-[#0a0102] text-xl group-hover:text-[#ce0e2d] transition-colors" style={{ fontFamily: "'Rajdhani', sans-serif", fontWeight: 700 }}>
                    {item.title}
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
