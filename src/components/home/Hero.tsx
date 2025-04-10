
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-brand-purple/95 to-brand-purple">
      <div className="container-custom py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="text-white order-2 md:order-1 animate-fade-in">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              מוזיקה איכותית על התקן USB
            </h1>
            <p className="text-xl mb-6 text-white/90">
              קבלו אוסף אלבומים שלם של האמן במהדורות מיוחדות
              על גבי התקן USB איכותי בעיצוב ייחודי.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-brand-gold text-brand-dark hover:bg-opacity-90">
                <Link to="/products">
                  גלה את המוצרים
                  <ArrowLeft className="mr-2 rtl:rotate-180" size={18} />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Link to="/about">
                  קרא עוד
                </Link>
              </Button>
            </div>
          </div>
          
          <div className="order-1 md:order-2 flex justify-center">
            <img 
              src="/placeholder.svg" 
              alt="USB Music Collection" 
              className="max-w-full rounded-lg shadow-lg transform rotate-6 hover:rotate-0 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-4 w-16 h-16 bg-brand-gold rounded-full opacity-20 blur-xl"></div>
      <div className="absolute bottom-1/3 right-10 w-24 h-24 bg-brand-gold rounded-full opacity-10 blur-xl"></div>
    </div>
  );
};

export default Hero;
