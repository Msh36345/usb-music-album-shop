
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-brand-purple text-white pt-12 pb-6">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">מוזיקה על USB</h3>
            <p className="mb-4">
              החנות המובילה להורדת אלבומים מוזיקליים על גבי התקני USB באיכות הגבוהה ביותר.
            </p>
            <div className="flex space-x-4 space-x-reverse rtl:space-x-reverse">
              <a href="#" className="hover:text-brand-gold transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-brand-gold transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-brand-gold transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-brand-gold transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">קישורים מהירים</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/products" className="hover:text-brand-gold transition-colors">
                  כל המוצרים
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-brand-gold transition-colors">
                  אודות
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-brand-gold transition-colors">
                  צור קשר
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-brand-gold transition-colors">
                  תנאי שימוש
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-brand-gold transition-colors">
                  מדיניות פרטיות
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-bold mb-4">צור קשר</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 space-x-reverse rtl:space-x-reverse">
                <Mail size={18} />
                <a href="mailto:info@musicusb.co.il" className="hover:text-brand-gold transition-colors">
                  info@musicusb.co.il
                </a>
              </div>
              <div className="flex items-center space-x-3 space-x-reverse rtl:space-x-reverse">
                <Phone size={18} />
                <a href="tel:+97235555555" className="hover:text-brand-gold transition-colors">
                  03-555-5555
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Footer */}
        <div className="border-t border-white/20 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>&copy; {currentYear} מוזיקה על USB. כל הזכויות שמורות.</p>
            <div className="mt-4 md:mt-0">
              <img src="/placeholder.svg" alt="Payment Methods" className="h-8" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
