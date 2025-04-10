
import { useState } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import { 
  Package, 
  ShoppingCart, 
  Users, 
  FileText, 
  Tag, 
  Settings, 
  ChevronLeft, 
  ChevronRight, 
  LogOut 
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const AdminLayout = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const location = useLocation();
  
  const navItems = [
    { 
      name: "מוצרים", 
      icon: Package, 
      path: "/admin/products" 
    },
    { 
      name: "הזמנות", 
      icon: ShoppingCart, 
      path: "/admin/orders" 
    },
    { 
      name: "משתמשים", 
      icon: Users, 
      path: "/admin/users" 
    },
    { 
      name: "ניהול תוכן", 
      icon: FileText, 
      path: "/admin/content" 
    },
    { 
      name: "קופונים ומבצעים", 
      icon: Tag, 
      path: "/admin/promotions" 
    },
    { 
      name: "הגדרות", 
      icon: Settings, 
      path: "/admin/settings" 
    },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside 
        className={cn(
          "bg-brand-purple text-white transition-all duration-300 flex flex-col", 
          isCollapsed ? "w-16" : "w-64"
        )}
      >
        {/* Logo/Header */}
        <div className="p-4 border-b border-brand-purple-light flex justify-between items-center">
          {!isCollapsed && <h1 className="font-bold text-xl">ניהול האתר</h1>}
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="text-white hover:bg-brand-purple-light"
          >
            {isCollapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
          </Button>
        </div>
        
        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto p-2">
          <ul className="space-y-1">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={cn(
                    "flex items-center px-3 py-2 rounded-md transition-colors hover:bg-brand-purple-light",
                    location.pathname === item.path ? "bg-brand-purple-light" : ""
                  )}
                >
                  <item.icon size={20} className="min-w-5" />
                  {!isCollapsed && <span className="mr-3">{item.name}</span>}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        
        {/* Footer/Logout */}
        <div className="p-4 border-t border-brand-purple-light">
          <Link 
            to="/"
            className="flex items-center px-3 py-2 rounded-md text-white hover:bg-brand-purple-light transition-colors"
          >
            <LogOut size={20} />
            {!isCollapsed && <span className="mr-3">חזרה לאתר</span>}
          </Link>
        </div>
      </aside>
      
      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        <div className="p-6">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default AdminLayout;
