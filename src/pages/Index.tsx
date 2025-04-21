
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
              אנו גאים להציג אוסף ייחודי שמגיע על גבי דיסק און קי של חיים בנט, הכולל את האלבומים הבאים:
            </p>
            <ul className="mb-8 text-lg list-disc list-inside text-left max-w-md mx-auto">
              <li>אינסטרומנטלי</li>
              <li>פרשיות השבוע</li>
              <li>די מצווה קייטלעך - סיפורי ילדים באידיש</li>
              <li>מעגל השנה לילדים</li>
              <li>יהודים הם בני מלכים</li>
              <li>מעגל השנה</li>
              <li>רננו חסידים</li>
              <li>רננו ילדים</li>
            </ul>
            <p className="mb-8 text-lg">
              כל הדיסק און קי מעוצב בקפידה ומכיל אוסף של אלבומים מלאים בקבצי איכות גבוהה, לחוויה מוזיקלית מעשירה וייחודית.
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

