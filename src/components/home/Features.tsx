
import { Music, Award, Gift, Truck } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Music size={24} className="text-brand-gold" />,
      title: "איכות שמע מעולה",
      description: "כל הקבצים באיכות הגבוהה ביותר ללא דחיסה"
    },
    {
      icon: <Award size={24} className="text-brand-gold" />,
      title: "מהדורות בלעדיות",
      description: "תכנים ייחודיים שלא זמינים בשום מקום אחר"
    },
    {
      icon: <Gift size={24} className="text-brand-gold" />,
      title: "אריזה מהודרת",
      description: "מגיע באריזת מתנה מעוצבת ואיכותית"
    },
    {
      icon: <Truck size={24} className="text-brand-gold" />,
      title: "משלוח מהיר",
      description: "אספקה תוך 3-5 ימי עסקים לכל הארץ"
    }
  ];
  
  return (
    <section className="py-12 bg-white">
      <div className="container-custom">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-brand-purple mb-10">
          למה לקנות אצלנו?
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="p-6 border border-gray-100 rounded-lg shadow-sm bg-white hover:shadow-md transition-shadow text-center"
            >
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 bg-brand-light rounded-full flex items-center justify-center">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-brand-purple">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
