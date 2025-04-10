
import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Hero from "@/components/home/Hero";
import Features from "@/components/home/Features";
import Testimonials from "@/components/home/Testimonials";
import CallToAction from "@/components/home/CallToAction";

const Index = () => {
  return (
    <div>
      <Hero />
      
      <section className="py-16 bg-white">
        <div className="container-custom max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-brand-purple">האמן שמאחורי המוזיקה</h2>
          <div className="prose prose-lg max-w-none">
            <p className="mb-4 text-lg">
              אנו גאים להציג את אוסף האלבומים הייחודי של האמן על גבי התקני USB מעוצבים. כל התקן מכיל אוסף של אלבומים מלאים בקבצי
              איכות גבוהה, הכוללים גם הקלטות נדירות ושיתופי פעולה בלעדיים.
            </p>
            <p className="mb-4 text-lg">
              האמן שלנו משלב סגנונות מוזיקליים מגוונים ויוצר חוויה קולית ייחודית המשלבת מסורת וחדשנות. כל אלבום מספר סיפור, וכל
              התקן USB הוא יצירת אמנות בפני עצמה.
            </p>
            <p className="mb-8 text-lg">
              בחרו את האוסף המתאים לכם וקחו את המוזיקה לכל מקום, בפורמט איכותי ומעוצב שישמח כל חובב מוזיקה אמיתי.
            </p>
          </div>
          
          <Button asChild size="lg" className="bg-brand-gold text-brand-dark hover:bg-opacity-90 shadow-md">
            <Link to="/products" className="flex items-center gap-2 px-8 py-6 text-xl">
              <ShoppingCart className="rtl:ml-2" size={22} />
              עבור לחנות
            </Link>
          </Button>
        </div>
      </section>
      
      <Features />
      <Testimonials />
      <CallToAction />
    </div>
  );
};

export default Index;
