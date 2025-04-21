
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
      {/* HERO section - יפה, רספונסיבי, משאיר */}
      <Hero />
      
      {/* Section: הדגשה שמדובר בדיסק און קי משולב, עם השראה לאסתטיקה נקייה ומרווחת */}
      <section className="py-20 bg-gradient-to-br from-brand-gold/10 to-white">
        <div className="container-custom max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-brand-purple drop-shadow-sm animate-fade-in">
            דיסק און קי ייחודי – כל אוצרות המוזיקה של חיים בנט במקום אחד
          </h2>
          <div className="prose prose-lg max-w-none text-brand-dark mb-6">
            <p className="text-xl md:text-2xl font-medium mb-2">
              לא סתם עוד דיסק – חוויה. דיסק און קי יוקרתי המאגד בתוכו מספר אלבומים של חיים בנט,
              מהדורות נדירות, קלאסיקות ולחנים שלא תמצאו בשום מקום אחר.
            </p>
          </div>

          <div className="rounded-xl mx-auto p-6 border shadow-lg border-brand-gold bg-white/90 flex flex-col gap-3 max-w-2xl">
            <p className="mb-2 text-base md:text-lg text-brand-purple font-bold">
              <span className="inline-block px-3 py-1 bg-brand-gold/20 rounded">
                כל האלבומים במקום אחד – רק בדיסק און קי
              </span>
            </p>
            <ul className="mb-4 text-lg list-disc list-inside text-right text-brand-dark leading-relaxed">
              <li>אינסטרומנטלי – מסע של צלילים ונשמה</li>
              <li>פרשיות השבוע</li>
              <li>די מצווה קייטלעך – סיפורי ילדים באידיש</li>
              <li>מעגל השנה לילדים</li>
              <li>יהודים הם בני מלכים</li>
              <li>מעגל השנה</li>
              <li>רננו חסידים</li>
              <li>רננו ילדים</li>
            </ul>
            <p className="mt-2 text-lg text-gray-700">
              תשאירו מקום לזיכרונות החדשים שאתם עומדים ליצור עם המוזיקה האהובה, איכות סאונד בלתי מתפשרת ועיצוב מרהיב!
            </p>
          </div>

          <Button asChild size="lg" className="bg-brand-gold text-brand-dark hover:bg-opacity-90 shadow-lg mt-8">
            <Link to="/products" className="flex items-center gap-2 px-8 py-6 text-2xl font-semibold drop-shadow-sm animate-fade-in">
              <ShoppingCart className="rtl:ml-2" size={28} />
              צפו במארז דיסק און קי
            </Link>
          </Button>
        </div>
      </section>

      {/* נשמור את פיצ'רים, טסטמוניאלס וקריאה לפעולה כמו שהם */}
      <Features />
      <Testimonials />
      <CallToAction />
    </div>
  );
};

export default Index;
