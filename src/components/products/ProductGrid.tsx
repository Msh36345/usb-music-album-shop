
import { useState } from "react";
import { Product } from "@/types";
import ProductCard from "./ProductCard";
import { useToast } from "@/components/ui/use-toast";

interface ProductGridProps {
  products: Product[];
}

const ProductGrid = ({ products }: ProductGridProps) => {
  const { toast } = useToast();
  
  const handleAddToCart = (product: Product) => {
    if (!product.inStock) {
      toast({
        title: "המוצר אינו במלאי",
        description: "מצטערים, מוצר זה אינו זמין כרגע",
        variant: "destructive",
      });
      return;
    }
    
    // Here we would dispatch an action to add to cart
    console.log(`Adding ${product.name} to cart`);
    
    toast({
      title: "המוצר נוסף לסל",
      description: `${product.name} נוסף לסל הקניות שלך`,
    });
  };
  
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard 
          key={product.id}
          product={product}
          onAddToCart={handleAddToCart}
        />
      ))}
    </div>
  );
};

export default ProductGrid;
