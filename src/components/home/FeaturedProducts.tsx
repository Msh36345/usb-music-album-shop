
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ProductGrid from "../products/ProductGrid";
import { products } from "@/data/products";

const FeaturedProducts = () => {
  const featuredProducts = products.slice(0, 4);
  
  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center mb-10">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-brand-purple mb-2">
              המוצרים המובילים שלנו
            </h2>
            <p className="text-gray-600">
              בחרנו עבורכם את המוצרים הפופולריים ביותר
            </p>
          </div>
          <Button asChild variant="link" className="text-brand-purple mt-4 md:mt-0">
            <Link to="/products" className="flex items-center">
              לכל המוצרים
              <ArrowLeft className="mr-2 rtl:rotate-180" size={18} />
            </Link>
          </Button>
        </div>
        
        <ProductGrid products={featuredProducts} />
      </div>
    </section>
  );
};

export default FeaturedProducts;
