import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";

function WhatsAppIcon() {
  return (
    <div className="relative shrink-0 size-[28px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g clipPath="url(#clip0_whatsapp_modal)">
          <path 
            clipRule="evenodd" 
            d="M27.3374 4.64667C24.3297 1.65171 20.3294 0.00151951 16.0672 0C7.28453 0 0.136752 7.10754 0.133696 15.844C0.132168 18.6368 0.866352 21.3628 2.26061 23.7652L0 31.9767L8.44654 29.7733C10.7736 31.0361 13.394 31.7009 16.0604 31.7017H16.0672C24.8484 31.7017 31.997 24.5933 32 15.8569C32.0015 11.6228 30.346 7.6424 27.3374 4.64743V4.64667ZM16.0672 29.0258H16.0619C13.6859 29.0251 11.355 28.3898 9.32133 27.1902L8.83771 26.9046L3.82524 28.2121L5.16297 23.3519L4.8482 22.8535C3.5227 20.7566 2.82213 18.3329 2.82366 15.8448C2.82672 8.58374 8.76741 2.67586 16.0726 2.67586C19.6098 2.67738 22.9347 4.04875 25.4351 6.53847C27.9356 9.02745 29.3116 12.337 29.31 15.8554C29.3069 23.1172 23.3663 29.0251 16.0672 29.0251V29.0258ZM23.3311 19.1626C22.9331 18.9643 20.9758 18.007 20.6106 17.8748C20.2454 17.7426 19.9804 17.6766 19.7152 18.0731C19.4501 18.4697 18.6869 19.3617 18.4547 19.6253C18.2224 19.8897 17.9901 19.9224 17.5921 19.724C17.1941 19.5257 15.9114 19.1079 14.3903 17.7593C13.2069 16.7093 12.4077 15.4132 12.1756 15.0166C11.9433 14.62 12.1511 14.4057 12.3497 14.209C12.5284 14.0312 12.7477 13.7463 12.9471 13.5153C13.1466 13.2843 13.2123 13.1188 13.3452 12.8551C13.4781 12.5907 13.4116 12.3598 13.3124 12.1614C13.213 11.9631 12.417 10.0143 12.0846 9.22192C11.7614 8.45002 11.433 8.55487 11.1892 8.54196C10.957 8.53055 10.6919 8.52828 10.426 8.52828C10.1602 8.52828 9.72924 8.62705 9.36409 9.02365C8.99893 9.4202 7.97059 10.3783 7.97059 12.3263C7.97059 14.2743 9.39698 16.1578 9.59636 16.4222C9.79573 16.6866 12.4039 20.6852 16.3972 22.4007C17.3469 22.8087 18.0887 23.0526 18.667 23.2349C19.6205 23.5365 20.4884 23.494 21.1744 23.3922C21.9392 23.2782 23.5298 22.4341 23.8613 21.5095C24.1929 20.5848 24.1929 19.7916 24.0936 19.6268C23.9943 19.4619 23.7284 19.3624 23.3304 19.1641L23.3311 19.1626Z" 
            fill="white" 
            fillRule="evenodd" 
          />
        </g>
        <defs>
          <clipPath id="clip0_whatsapp_modal">
            <rect fill="white" height="32" width="32" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

interface ProductDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: {
    name: string;
    model: string;
    brand: string;
    image: string;
    description: string;
    specifications: { label: string; value: string }[];
    features: string[];
    applications: string[];
  } | null;
  phoneNumber?: string;
}

export function ProductDetailModal({ isOpen, onClose, product, phoneNumber }: ProductDetailModalProps) {
  if (!product) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            className="fixed inset-0 bg-black/60 z-50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4">
              <motion.div
                className="relative bg-white rounded-[20px] shadow-2xl w-full max-w-[1200px] overflow-hidden"
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={onClose}
                  className="absolute top-6 right-6 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
                >
                  <X className="w-6 h-6 text-[#54565a]" />
                </button>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 lg:p-12">
                  {/* Left: Image */}
                  <div className="space-y-6">
                    <div className="bg-[#f5f5f5] rounded-[20px] overflow-hidden aspect-square">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    {/* Brand and Model */}
                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <span
                          className="text-[#ce0e2d] text-xl font-semibold"
                          style={{ fontFamily: "'Poppins', sans-serif" }}
                        >
                          Marca:
                        </span>
                        <span
                          className="text-[#54565a] text-xl"
                          style={{ fontFamily: "'Poppins', sans-serif" }}
                        >
                          {product.brand}
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span
                          className="text-[#ce0e2d] text-xl font-semibold"
                          style={{ fontFamily: "'Poppins', sans-serif" }}
                        >
                          Modelo:
                        </span>
                        <span
                          className="text-[#54565a] text-xl"
                          style={{ fontFamily: "'Poppins', sans-serif" }}
                        >
                          {product.model}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Right: Information */}
                  <div className="space-y-6 overflow-y-auto max-h-[600px] pr-4">
                    {/* Title */}
                    <div>
                      <h2
                        className="text-[#54565a] text-3xl lg:text-4xl mb-4"
                        style={{ fontFamily: "'Rajdhani', sans-serif", fontWeight: 600 }}
                      >
                        {product.name}
                      </h2>
                      <p
                        className="text-[#54565a] text-lg leading-relaxed"
                        style={{ fontFamily: "'Poppins', sans-serif" }}
                      >
                        {product.description}
                      </p>
                    </div>

                    {/* Specifications */}
                    <div>
                      <h3
                        className="text-[#ce0e2d] text-2xl mb-4"
                        style={{ fontFamily: "'Rajdhani', sans-serif", fontWeight: 600 }}
                      >
                        Especificaciones Técnicas
                      </h3>
                      <div className="bg-[#f5f5f5] rounded-[15px] p-6 space-y-3">
                        {product.specifications.map((spec, index) => (
                          <div
                            key={index}
                            className="flex justify-between border-b border-[#54565a]/20 pb-2 last:border-b-0"
                          >
                            <span
                              className="text-[#54565a] font-semibold"
                              style={{ fontFamily: "'Poppins', sans-serif" }}
                            >
                              {spec.label}:
                            </span>
                            <span
                              className="text-[#54565a] text-right"
                              style={{ fontFamily: "'Poppins', sans-serif" }}
                            >
                              {spec.value}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Features */}
                    <div>
                      <h3
                        className="text-[#ce0e2d] text-2xl mb-4"
                        style={{ fontFamily: "'Rajdhani', sans-serif", fontWeight: 600 }}
                      >
                        Características Principales
                      </h3>
                      <ul className="space-y-2">
                        {product.features.map((feature, index) => (
                          <li
                            key={index}
                            className="flex items-start gap-3"
                            style={{ fontFamily: "'Poppins', sans-serif" }}
                          >
                            <span className="text-[#ce0e2d] mt-1">•</span>
                            <span className="text-[#54565a]">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Applications */}
                    <div>
                      <h3
                        className="text-[#ce0e2d] text-2xl mb-4"
                        style={{ fontFamily: "'Rajdhani', sans-serif", fontWeight: 600 }}
                      >
                        Aplicaciones
                      </h3>
                      <ul className="space-y-2">
                        {product.applications.map((app, index) => (
                          <li
                            key={index}
                            className="flex items-start gap-3"
                            style={{ fontFamily: "'Poppins', sans-serif" }}
                          >
                            <span className="text-[#ce0e2d] mt-1">•</span>
                            <span className="text-[#54565a]">{app}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* CTA Buttons */}
                    <div className="pt-4 space-y-3">
                      {/* WhatsApp Button */}
                      <button
                        onClick={() => {
                          if (phoneNumber) {
                            window.open(`https://wa.me/${phoneNumber}`, "_blank");
                          } else {
                            console.log("WhatsApp button clicked - phone number not configured");
                          }
                        }}
                        className="w-full text-white text-xl font-semibold py-4 rounded-[10px] hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-3"
                        style={{ 
                          fontFamily: "'Poppins', sans-serif",
                          backgroundColor: "#25D366"
                        }}
                      >
                        <WhatsAppIcon />
                        Consultar por WhatsApp
                      </button>

                      {/* Quotation Button */}
                      <button
                        className="w-full bg-[#ce0e2d] text-white text-xl font-semibold py-4 rounded-[10px] hover:bg-[#a00b24] transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center"
                        style={{ fontFamily: "'Poppins', sans-serif" }}
                      >
                        Solicitar Cotización
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}