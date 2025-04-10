
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-[60vh] flex items-center justify-center bg-gray-50">
      <div className="text-center max-w-md px-4">
        <h1 className="text-6xl font-bold text-brand-purple mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-8">אופס! הדף שחיפשת לא נמצא</p>
        <Button asChild size="lg" className="btn-primary">
          <Link to="/" className="flex items-center justify-center gap-2">
            חזרה לדף הבית
            <ArrowLeft className="rtl:rotate-180" size={18} />
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
