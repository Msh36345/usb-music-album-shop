
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { products } from "@/data/products";
import { 
  ShoppingCart, 
  Play, 
  Pause, 
  ArrowRight, 
  Music, 
  Users,
  Check
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/components/ui/use-toast";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ProductDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const { toast } = useToast();
  const [isPlaying, setIsPlaying] = useState(false);
  
  // Find the product from the data
  const product = products.find(p => p.id === Number(id));
  
  if (!product) {
    return (
      <div className="py-16 container-custom text-center">
        <h1 className="text-2xl font-bold mb-4">מוצר לא נמצא</h1>
        <p className="mb-6">המוצר שחיפשת אינו קיים. אנא בדוק את הקישור ונסה שוב.</p>
        <Button asChild>
          <Link to="/products">חזרה לכל המוצרים</Link>
        </Button>
      </div>
    );
  }
  
  const handlePlayAudio = () => {
    setIsPlaying(!isPlaying);
    // Here you would actually play the audio
    console.log(`${isPlaying ? 'Pausing' : 'Playing'} audio for ${product.name}`);
  };
  
  const handleAddToCart = () => {
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
    <div className="py-12 bg-gray-50">
      <div className="container-custom">
        <div className="flex items-center mb-6">
          <Link to="/products" className="flex items-center text-gray-600 hover:text-brand-purple transition-colors">
            <ArrowRight className="rtl:rotate-180" size={16} />
            <span className="mr-1">חזרה למוצרים</span>
          </Link>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
            {/* Product Image */}
            <div className="md:order-1 order-2">
              <div className="relative">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full rounded-lg shadow"
                />
                {!product.inStock && (
                  <div className="absolute top-4 right-4 bg-red-500 text-white py-1 px-4 rounded-full text-sm font-semibold">
                    אזל מהמלאי
                  </div>
                )}
                {product.audioSample && (
                  <button
                    onClick={handlePlayAudio}
                    className="absolute bottom-4 right-4 bg-brand-purple text-white p-3 rounded-full shadow-md hover:bg-opacity-90 transition-colors"
                    aria-label={isPlaying ? "השהה דגימת שמע" : "נגן דגימת שמע"}
                  >
                    {isPlaying ? <Pause size={20} /> : <Play size={20} />}
                  </button>
                )}
              </div>
            </div>
            
            {/* Product Info */}
            <div className="md:order-2 order-1">
              <h1 className="text-2xl md:text-3xl font-bold text-brand-purple mb-2">
                {product.name}
              </h1>
              
              <div className="text-2xl font-bold text-brand-purple mb-4">
                ₪{product.price.toFixed(2)}
              </div>
              
              <p className="text-gray-600 mb-6">
                {product.description}
              </p>
              
              <div className="mb-6">
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <Music size={16} className="mr-2" />
                  <span>אלבומים כלולים: {product.albumList.length}</span>
                </div>
                
                {product.collaborations && (
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <Users size={16} className="mr-2" />
                    <span>שיתופי פעולה: {product.collaborations.length}</span>
                  </div>
                )}
                
                <div className="flex items-center text-sm text-gray-500">
                  <Check size={16} className="mr-2" />
                  <span>USB באיכות גבוהה</span>
                </div>
              </div>
              
              <Button 
                onClick={handleAddToCart}
                className="w-full bg-brand-gold text-brand-dark hover:bg-opacity-90 flex items-center justify-center gap-2 mb-4"
                size="lg"
                disabled={!product.inStock}
              >
                <ShoppingCart size={18} />
                {product.inStock ? 'הוסף לסל הקניות' : 'אזל מהמלאי'}
              </Button>
              
              <p className="text-sm text-gray-500 mb-4">
                משלוח חינם לכל הארץ תוך 3-5 ימי עסקים
              </p>
              
              <Separator className="my-6" />
              
              <div className="flex flex-wrap gap-2">
                {product.albumList.map((album, index) => (
                  <span 
                    key={index} 
                    className="bg-brand-light text-brand-purple text-sm py-1 px-3 rounded-full"
                  >
                    {album}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          {/* Additional Information Tabs */}
          <div className="p-6 bg-gray-50 border-t">
            <Tabs defaultValue="details">
              <TabsList className="w-full bg-white">
                <TabsTrigger value="details" className="flex-1">פרטים נוספים</TabsTrigger>
                <TabsTrigger value="albums" className="flex-1">רשימת אלבומים</TabsTrigger>
                {product.collaborations && (
                  <TabsTrigger value="collaborations" className="flex-1">שיתופי פעולה</TabsTrigger>
                )}
              </TabsList>
              <TabsContent value="details" className="p-4 bg-white rounded-b-lg mt-2">
                <h3 className="font-semibold mb-2">מפרט טכני</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-600">
                  <li>USB 3.0 במהירות גבוהה</li>
                  <li>נפח אחסון: 16GB</li>
                  <li>פורמט שמע: FLAC, MP3 באיכות גבוהה 320kbps</li>
                  <li>עיצוב בלעדי עם לוגו האמן</li>
                  <li>כולל אריזת מתנה מהודרת</li>
                </ul>
              </TabsContent>
              <TabsContent value="albums" className="p-4 bg-white rounded-b-lg mt-2">
                <h3 className="font-semibold mb-2">רשימת אלבומים מלאה</h3>
                <ul className="space-y-2 text-gray-600">
                  {product.albumList.map((album, index) => (
                    <li key={index} className="flex items-center">
                      <span className="w-6 h-6 bg-brand-purple text-white rounded-full flex items-center justify-center text-xs mr-2">
                        {index + 1}
                      </span>
                      {album}
                    </li>
                  ))}
                </ul>
              </TabsContent>
              {product.collaborations && (
                <TabsContent value="collaborations" className="p-4 bg-white rounded-b-lg mt-2">
                  <h3 className="font-semibold mb-2">שיתופי פעולה</h3>
                  <ul className="space-y-2 text-gray-600">
                    {product.collaborations.map((collaboration, index) => (
                      <li key={index} className="flex items-center">
                        <Users size={16} className="mr-2 text-brand-purple" />
                        {collaboration}
                      </li>
                    ))}
                  </ul>
                </TabsContent>
              )}
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
