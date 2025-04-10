
import { useState } from "react";
import { products } from "@/data/products";
import ProductGrid from "@/components/products/ProductGrid";
import { Input } from "@/components/ui/input";
import { Search, Filter } from "lucide-react";

const ProductsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  const filteredProducts = products.filter(product => 
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.description.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  return (
    <div className="py-12 bg-gray-50">
      <div className="container-custom">
        <h1 className="text-3xl font-bold text-brand-purple mb-2">
          כל המוצרים
        </h1>
        <p className="text-gray-600 mb-8">
          גלו את המגוון המלא של התקני ה-USB שלנו עם אוספי המוזיקה המובחרים
        </p>
        
        <div className="bg-white rounded-lg shadow-sm p-4 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-grow">
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <Input
                type="text"
                placeholder="חיפוש מוצרים..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pr-10 w-full"
              />
            </div>
            <button className="flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors md:w-auto w-full">
              <Filter size={20} />
              סינון
            </button>
          </div>
        </div>
        
        {filteredProducts.length > 0 ? (
          <ProductGrid products={filteredProducts} />
        ) : (
          <div className="text-center py-12">
            <h3 className="text-xl font-semibold mb-2">לא נמצאו מוצרים</h3>
            <p className="text-gray-600">
              לא נמצאו מוצרים התואמים את החיפוש שלך. נסה לחפש מחדש עם מילות מפתח אחרות.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductsPage;
