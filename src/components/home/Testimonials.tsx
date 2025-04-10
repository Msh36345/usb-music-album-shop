
import { StarIcon } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "אורי לוי",
      text: "מערכת USB מעולה עם כל האלבומים האהובים עליי. איכות השמע פשוט מדהימה!",
      rating: 5,
      image: "/placeholder.svg"
    },
    {
      name: "שירה כהן",
      text: "קניתי כמתנה ליום הולדת וזה היה להיט. האריזה מהודרת והתכנים מעולים.",
      rating: 5,
      image: "/placeholder.svg"
    },
    {
      name: "אלון מזרחי",
      text: "מוצר מצוין, הגיע מהר והאיכות ממש טובה. שמח שיש גם חומרים שלא שמעתי קודם.",
      rating: 4,
      image: "/placeholder.svg"
    }
  ];
  
  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container-custom">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-brand-purple mb-2">
          מה הלקוחות שלנו אומרים
        </h2>
        <p className="text-center text-gray-600 mb-10">
          משתמשים מרוצים ששיתפו את החוויה שלהם
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow relative hover:shadow-md transition-shadow"
            >
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                />
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <div className="flex">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <StarIcon key={i} size={16} className="text-brand-gold fill-current" />
                    ))}
                    {Array.from({ length: 5 - testimonial.rating }).map((_, i) => (
                      <StarIcon key={i} size={16} className="text-gray-300 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600">"{testimonial.text}"</p>
              <div className="absolute -top-4 right-8 text-brand-purple opacity-20 text-6xl font-serif">
                "
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
