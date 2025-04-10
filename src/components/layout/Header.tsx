
import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  ShoppingCart, 
  User, 
  Menu, 
  X, 
  Search, 
  LogIn,
  Settings
} from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Temporarily for demo
  
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container-custom py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-brand-purple">
            מוזיקה על USB
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6 space-x-reverse rtl:space-x-reverse">
            <Link to="/" className="text-brand-dark hover:text-brand-purple transition-colors">
              דף הבית
            </Link>
            <Link to="/products" className="text-brand-dark hover:text-brand-purple transition-colors">
              מוצרים
            </Link>
            <Link to="/about" className="text-brand-dark hover:text-brand-purple transition-colors">
              אודות
            </Link>
            <Link to="/contact" className="text-brand-dark hover:text-brand-purple transition-colors">
              צור קשר
            </Link>
          </nav>
          
          {/* User Actions */}
          <div className="flex items-center space-x-4 space-x-reverse rtl:space-x-reverse">
            <button className="text-brand-dark hover:text-brand-purple">
              <Search size={20} />
            </button>
            
            <Link to="/cart" className="text-brand-dark hover:text-brand-purple relative">
              <ShoppingCart size={20} />
              <span className="absolute -top-2 -right-2 bg-brand-purple text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                0
              </span>
            </Link>
            
            {isLoggedIn ? (
              <Link to="/profile" className="text-brand-dark hover:text-brand-purple">
                <User size={20} />
              </Link>
            ) : (
              <Link to="/login" className="text-brand-dark hover:text-brand-purple">
                <LogIn size={20} />
              </Link>
            )}
            
            {/* Admin Link */}
            <Link to="/admin" className="text-brand-dark hover:text-brand-purple">
              <Settings size={20} />
            </Link>
            
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-brand-dark hover:text-brand-purple" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <nav className="flex flex-col space-y-3">
              <Link 
                to="/" 
                className="text-brand-dark hover:text-brand-purple transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                דף הבית
              </Link>
              <Link 
                to="/products" 
                className="text-brand-dark hover:text-brand-purple transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                מוצרים
              </Link>
              <Link 
                to="/about" 
                className="text-brand-dark hover:text-brand-purple transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                אודות
              </Link>
              <Link 
                to="/contact" 
                className="text-brand-dark hover:text-brand-purple transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                צור קשר
              </Link>
              <Link 
                to="/admin" 
                className="text-brand-dark hover:text-brand-purple transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                ניהול
              </Link>
              {!isLoggedIn && (
                <div className="pt-2">
                  <Button asChild variant="outline" className="w-full">
                    <Link to="/login">התחברות / הרשמה</Link>
                  </Button>
                </div>
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
