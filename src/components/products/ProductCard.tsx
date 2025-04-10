
import { Link } from "react-router-dom";
import { Product } from "@/types";
import { ShoppingCart, Play, Pause } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

const ProductCard = ({ product, onAddToCart }: ProductCardProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  
  const handlePlayAudio = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsPlaying(!isPlaying);
    // Here you would implement actual audio playback
    console.log(`${isPlaying ? 'Pausing' : 'Playing'} audio for ${product.name}`);
  };
  
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    onAddToCart(product);
  };
  
  return (
    <Link to={`/product/${product.id}`} className="group">
      <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-1 h-full flex flex-col">
        <div className="relative">
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-48 object-cover"
          />
          {product.audioSample && (
            <button
              onClick={handlePlayAudio}
              className="absolute bottom-3 right-3 bg-brand-purple text-white p-2 rounded-full opacity-90 hover:opacity-100 transition-opacity"
              aria-label={isPlaying ? "השהה דגימת שמע" : "נגן דגימת שמע"}
            >
              {isPlaying ? <Pause size={16} /> : <Play size={16} />}
            </button>
          )}
          {!product.inStock && (
            <div className="absolute top-0 right-0 bg-red-500 text-white py-1 px-3 text-sm">
              אזל מהמלאי
            </div>
          )}
        </div>
        
        <div className="p-4 flex-grow flex flex-col">
          <h3 className="text-lg font-semibold mb-1 text-brand-purple">
            {product.name}
          </h3>
          
          <div className="mb-2">
            {product.collaborations && product.collaborations.length > 0 && (
              <Badge variant="outline" className="text-xs bg-brand-light text-brand-purple mb-2">
                שיתופי פעולה
              </Badge>
            )}
          </div>
          
          <p className="text-sm text-gray-600 mb-2 line-clamp-2">
            {product.description}
          </p>
          
          <div className="mt-auto">
            <div className="text-brand-purple font-bold text-lg mb-2">
              ₪{product.price.toFixed(2)}
            </div>
            
            <Button 
              onClick={handleAddToCart}
              className="w-full bg-brand-gold text-brand-dark hover:bg-opacity-90 flex items-center justify-center gap-2"
              disabled={!product.inStock}
            >
              <ShoppingCart size={16} />
              הוסף לסל
            </Button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
