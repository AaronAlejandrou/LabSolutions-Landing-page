import { useState } from "react";
import { Search } from "lucide-react";
import { ProductCard } from "./ProductCard";
import { ProductDetailModal } from "./ProductDetailModal";

import { productsData } from "../../data/products";


export function ProductsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProduct, setSelectedProduct] = useState<typeof productsData[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredProducts = productsData.filter(
    (product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.model.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.brand.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleProductClick = (product: typeof productsData[0]) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  return (
    <>
      <div className="bg-white min-h-screen w-full">
        {/* Search Bar */}
        <div className="bg-[#f5f5f5] border-b border-[#54565a]/10 w-full">
          <div className="max-w-[1440px] mx-auto px-8 md:px-16 lg:px-24 py-8">
            <div className="relative max-w-[800px] mx-auto">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-[#54565a]/50 w-6 h-6" />
              <input
                type="text"
                placeholder="Buscar productos por nombre, modelo o marca..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-16 pr-6 py-4 rounded-full border-2 border-[#54565a]/20 focus:border-[#ce0e2d] outline-none transition-colors text-lg bg-white"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              />
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="w-full">
          <div className="max-w-[1440px] mx-auto px-8 md:px-16 lg:px-24 py-16">
            <h1
              className="text-[#54565a] text-4xl lg:text-5xl mb-12 text-center"
              style={{ fontFamily: "'Rajdhani', sans-serif", fontWeight: 600 }}
            >
              Nuestros <span className="text-[#ce0e2d]">Productos</span>
            </h1>

            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
                {filteredProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    {...product}
                    onClick={() => handleProductClick(product)}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <p
                  className="text-[#54565a] text-2xl"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  No se encontraron productos
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Product Detail Modal */}
      <ProductDetailModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        product={selectedProduct}
      />
    </>
  );
}
