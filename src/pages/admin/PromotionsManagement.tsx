
import { useState } from "react";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { 
  Plus, 
  Trash2, 
  Edit 
} from "lucide-react";
import { Button } from "@/components/ui/button";

// Mock data for demonstration
const mockPromotions = [
  { 
    id: 1, 
    code: "SUMMER2024", 
    discount: "15%", 
    type: "אחוזים", 
    validUntil: "31/08/2024",
    status: "פעיל"
  },
  { 
    id: 2, 
    code: "WELCOME50", 
    discount: "₪50", 
    type: "סכום קבוע", 
    validUntil: "31/12/2024",
    status: "פעיל"
  },
  { 
    id: 3, 
    code: "SPRING2024", 
    discount: "10%", 
    type: "אחוזים", 
    validUntil: "01/03/2024",
    status: "פג תוקף"
  },
];

const PromotionsManagement = () => {
  const [promotions, setPromotions] = useState(mockPromotions);

  const handleDeletePromotion = (id: number) => {
    setPromotions(promotions.filter(promo => promo.id !== id));
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">ניהול קופונים ומבצעים</h1>
        <Button className="gap-2">
          <Plus size={18} />
          קופון חדש
        </Button>
      </div>
      
      <div className="bg-white rounded-md shadow">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>קוד קופון</TableHead>
              <TableHead>הנחה</TableHead>
              <TableHead>סוג</TableHead>
              <TableHead>בתוקף עד</TableHead>
              <TableHead>סטטוס</TableHead>
              <TableHead>פעולות</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {promotions.map((promo) => (
              <TableRow key={promo.id}>
                <TableCell>{promo.id}</TableCell>
                <TableCell className="font-medium">{promo.code}</TableCell>
                <TableCell>{promo.discount}</TableCell>
                <TableCell>{promo.type}</TableCell>
                <TableCell>{promo.validUntil}</TableCell>
                <TableCell>
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    promo.status === "פעיל" 
                      ? "bg-green-100 text-green-800" 
                      : "bg-red-100 text-red-800"
                  }`}>
                    {promo.status}
                  </span>
                </TableCell>
                <TableCell>
                  <div className="flex space-x-3 space-x-reverse">
                    <Button variant="ghost" size="icon">
                      <Edit size={18} />
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="text-destructive hover:text-destructive"
                      onClick={() => handleDeletePromotion(promo.id)}
                    >
                      <Trash2 size={18} />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default PromotionsManagement;
