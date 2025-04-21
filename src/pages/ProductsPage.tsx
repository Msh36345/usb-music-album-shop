
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
        <h1 className="text-4xl font-extrabold text-brand-purple mb-2 tracking-tight drop-shadow-sm">
          דיסק און קי ייחודי עם כל האוספים של חיים בנט
        </h1>
        <div className="mx-auto max-w-2xl mb-8 bg-white bg-opacity-90 shadow-md rounded-xl p-5 flex flex-col gap-3 border border-brand-gold">
          <p className="text-lg md:text-xl leading-relaxed text-brand-purple font-semibold">
            בחרו בחוויה מוזיקלית מרגשת – דיסק און קי בעיצוב יוקרתי המכיל אוסף נדיר ומושלם של האלבומים של חיים בנט, כולל קלסיקות ושיתופי פעולה ייחודיים.
          </p>
          <p className="text-base md:text-lg text-gray-700">
            התקן USB נוח ושימושי, מהווה מתנה אישית ומושלמת או פינוק מוזיקלי לעצמכם, להאזנה בכל עת ובאיכות גבוהה במיוחד.
            <br />
            <span className="text-brand-gold font-bold">המוזיקה שתלווה אתכם לכל מקום!</span>
          </p>
        </div>
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
