
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const CallToAction = () => {
  return (
    <section className="py-16 bg-brand-purple text-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            מוכנים להתחיל לשמוע?
          </h2>
          <p className="text-lg mb-8 text-white/90">
            הזמינו עכשיו את אוסף המוזיקה שלנו וקבלו את האלבומים האהובים עליכם על גבי התקן USB איכותי ומעוצב.
          </p>
          <Button asChild size="lg" className="bg-brand-gold text-brand-dark hover:bg-opacity-90">
            <Link to="/products" className="flex items-center justify-center gap-2">
              עבור לחנות
              <ArrowLeft className="rtl:rotate-180" size={18} />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
